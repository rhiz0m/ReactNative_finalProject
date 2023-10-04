import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { useState } from "react";

/* Components */
import { ProjectInput } from "./ProjectInput";

/* Styling fom Styles-folder */
import { TitleBtn } from "../Styles/Btn/TitleBtn";
import { PrimaryBtn } from "../Styles/Btn/PrimaryBtn";
import { Spacing } from "../Styles/Spacing";

export const ProjectForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  //Generic way of handling different inputs
  const [inputs, SetInputs] = useState({
    task: {
      value: defaultValues ? defaultValues.task : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    priority: {
      value: defaultValues ? defaultValues.priority.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
  });

  const submitProjectHandler = () => {
    const projectData = {
      task: inputs.task.value,
      description: inputs.description.value,
      priority: inputs.priority.value,
      date: new Date(inputs.date.value),
      amount: 1,
    };

    //Textinput Validation

    const checkIfValidTask = projectData.task.trim().length > 0;
    const checkIfValidDescription = projectData.description.trim().length > 0;
    const checkIfValidDate = projectData.date.toString() !== "Invalid Date";
    const checkIfValidPriority =
      !isNaN(projectData.priority) &&
      projectData.priority > 0 &&
      projectData.priority < 6;

    if (
      !checkIfValidTask ||
      !checkIfValidDescription ||
      !checkIfValidPriority ||
      !checkIfValidDate
    ) {
      //Show user invalid feedback
      SetInputs((currentInputs) => {
        return {
          task: { value: currentInputs.task.value, isValid: checkIfValidTask },
          description: {
            value: currentInputs.description.value,
            isValid: checkIfValidDescription,
          },
          priority: {
            value: currentInputs.priority.value,
            isValid: checkIfValidPriority,
          },
          date: { value: currentInputs.date.value, isValid: checkIfValidDate },
        };
      });
      return;
    }
    onSubmit(projectData);
  };

  //inputIdentifier = task, description, priority, date. Target and dynamicaly set property names.
  const InputChangedHandler = (inputIdentifier, enteredValue) => {
    SetInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const InvalidForm =
    !inputs.task.isValid ||
    !inputs.description.isValid ||
    !inputs.priority.isValid ||
    !inputs.date.isValid;

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/backgrounds/bgMinimalism.jpeg")}
      resizeMode="cover"
      borderRadius={Spacing.large}
      borderWidth={2}
      borderColor={"white"}
    >
      <ProjectInput
        inValid={!inputs.task.isValid}
        labelText={"Task"}
        textInputConfig={{
          value: inputs.task.value,
          onChangeText: InputChangedHandler.bind(this, "task"),
        }}
      />
      <ProjectInput
        inValid={!inputs.description.isValid}
        labelText={"Description"}
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: InputChangedHandler.bind(this, "description"),
        }}
      />
      <View style={styles.btnsContainer}>
        <ProjectInput
          inValid={!inputs.priority.isValid}
          labelText={"Priority"}
          textInputConfig={{
            placeholder: "1 (highest) to 5",
            placeholderTextColor: "black",
            value: inputs.priority.value,
            onChangeText: InputChangedHandler.bind(this, "priority"),
          }}
        />
        <ProjectInput
          inValid={!inputs.date.isValid}
          labelText={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "black",
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: InputChangedHandler.bind(this, "date"),
          }}
        />
      </View>
      {InvalidForm && (
        <View>
          <Text style={styles.errorTextMsg}>
            "Hmm, looks like you missed to enter some valid data..."
          </Text>
        </View>
      )}
      <View style={{ ...styles.btnsContainer, marginLeft: Spacing.xsmall }}>
        <PrimaryBtn onPress={submitProjectHandler} title={submitButtonLabel} />
        <TitleBtn onPress={onCancel} title="Cancel" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderRadius: Spacing.large,
    backgroundColor: "rgba(255, 225, 204, 0.6)",
    marginHorizontal: Spacing.medium,
    paddingVertical: Spacing.medium,
  },
  btnsContainer: {
    marginVertical: Spacing.xsmall,
    marginHorizontal: Spacing.medium,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnRows: {
    minWidth: 200,
  },
  errorTextMsg: {
    textAlign: "center",
    color: "white",
    alignItems: "center",
  },
});

import { createContext, useReducer } from "react";

const DefaultProjects = [
  {
    id: "a1",
    task: "React Native",
    description: "Create first React Native App",
    priority: "1",
    date: new Date("2023-02-02"),
    amount: 1,
  },
  {
    id: "c3",
    task: "Learn Creative Coding",
    description: "Check out p5.js and Creative Coding",
    priority: "4",
    date: new Date("2023-01-15"),
    amount: 1,
  },
];

export const ProjectsContext = createContext({
  //Creating an initial value for Context.
  //Projects array with functions to update the array.

  projects: [],
  addProject: ({ task, description, priority, date, amount }) => {},
  deleteProject: (id) => {},
  updateProject: (id, { task, description, priority, date, amount }) => {},
});

//Creating a random id to "ADD" case. Finding project index at case "UPDATE".
const ProjectsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.prjData, id: id }, ...state];
    case "UPDATE":
      const updateProjectIndex = state.findIndex(
        (projects) => projects.id === action.prjData.id
      );
      const updatableProjects = state[updateProjectIndex];
      const updatedItem = { ...updatableProjects, ...action.prjData.data };
      const updatedProjects = [...state];
      updatedProjects[updateProjectIndex] = updatedItem;
      return updatedProjects;
    case "DELETE":
      return state.filter((projects) => projects.id !== action.prjData);

    default:
      return state;
    //default: Return the existing state without changes.
  }
};

export const ProjectsContextProvider = ({ children }) => {
  //State managment logic.UseReducer connects to function projectsReduser.
  //Dispatch : a new action to ProjectsReducer which can then manipulate the state.

  //UseReducer, alternative to UseState for complex subvalues. 
  const [projectState, dispatch] = useReducer(ProjectsReducer, DefaultProjects);

  const addProject = (projectData) => {
    //Checks for actions in projectsReducer.
    dispatch({ type: "ADD", prjData: projectData });
  };

  const deleteProject = (id) => {
    dispatch({ type: "DELETE", prjData: id });
  };

  const updateProject = (id, projectData) => {
    dispatch({ type: "UPDATE", prjData: { id: id, data: projectData } });
  };

  const value = {
    projects: projectState,
    addProject: addProject,
    deleteProject: deleteProject,
    updateProject: updateProject,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

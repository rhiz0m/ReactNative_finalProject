==========================================

# CapyPlanner. Final_project_react_native

==========================================
Created by: Andreas Antonsson.

**Content:**

> 1.Abstract/Introduction
> 2.Methods and techniques
> 3.Result/reflections

# 1.Abstract/Introduction:

This project is developed using Expo, made especially for iPhone 14 - IOS 16.2. but works with Android as well.

The inspiration to my final project comes from popular project manager apps, like the famous "ClickUp". While those big apps are directed towards companies, my goal with the "CapyPlanner" app is to make a visual fun project-app directed towards maybe families or kids.

The purpose is to quickly create a project including: task, description, priority and due date. The user can sort the projects by three categories: All projects, due date the last two weeks and by priority, from 1-5. The projects themselves can be created, deleted or updated. The "add project-form" uses validation if entered data is not correct.

The CapyPlanner-app also uses Authentication with validation for the Login-screen. There is also a a SignUp-screen to create new users. The app uses Firebase as backend solution.

# 2.Methods and techniques

### App. / Authentication

App entry where Login and SignUp is set as the startscreens. After authentication is succesfull the user enters the authenticated stack of screens (AuthenticatedStack").

Uses: useContext, Navigation, conditional rendering.

Components:

> AuthContextProvider. Function that sets values of: token, isAuthenticated, authenticate and logout.
> AuthContext. (see: ## Folders Context, Store, Utils)

#### Login-screen, SignUp-screen

Uses: useState, useContext, ActivityIndicator

The components:

> AuthContext
> AuthContent. Checks validation of entered credentials.
> LoadingOverlay. Uses ActivityIndicator
> CreateUser (Auth.js)
> login (Auth.js)

### AuthenticatedStack

The authenticated stack contains of a set of screens: Homescreen, DueDate, Priority and EditProject. It uses Stack Navigation to access the EditProject screen and BottomTabNavigator to navigate between Homescreen, Duedate and Priority. I will here present one screen at the time and its components:

Uses: useContext, SafeareaView, Flatlist.

#### Homescreen, DueDate-screen, Priority-screen:

Components:

> TopBar. Contains the components: AuthContext, PrimaryBtn.
> ProjectsContext.
> ProjectOutput. Contains the components: projectList (uses Flatlist) and projectSummary. Projectlist contain the component projectItems.

#### EditProject

Uses: useContext, useReducer, useLayouteffect, conditional rendering.

Components:

> ProjectsContext. (createContext, useReducer)
> ProjectsForm. Contains projectInput.

## Folders Context, Store, Utils

> Context_prj. Creating context for the projects. Return values "ADD", "UPDATE", "DELETE" to project context provider.
> Auth-Context. Creating authentication Context and set values: Token, isAuthenticated, authenticate, logout.
> Utils: Dateformatter function for Due Date-screen.

## Styling

In this project I have used a generic styling in the Styles folder. If needed, there are also specific styling in the components themselves.

The styling is the part in the app I have let myself experiment the most. I have a Btn's folder (where I keep the my styled buttons). There are also generic styling concerning colors, fontsizes and spacing to keep the project consistent throughout the app.

Uses: Lineargradient, Imagebackground, image. I also use transparancy, alpha/opacity to acheive certain effects.

custom components:

> Rootscreen, Btn, Colors, Fontsizes, Spacing.

# 3.Result/reflections:

I am pleased with the result of my app. Especially in relation that it is my first app I ever created. I had early on in the course decided I wanted to create an project app but I didn't offcourse know the challanges ahead. For me, the visuals/aestehtics is the part I had the easiest to understand. I am a little bit familiar with front end development since erlier and especially with CSS-syntax. Navigation was a bit trickier at first but after a while I figured it out.

The most challenging parts was the more abstract underlying parts. It is the first time I use a context, id, token (backend) and validation and I think I need to do more apps to fully grasp those concepts even more.

If I would continue this project I would do a full backend project, that is, to store projects data as well. I would also try to do an "admin" part, depending on who the user logged in is. If it is an administrator, that will give the user such and such authority. If it is an "ordinary" user they should be given other rights when interacting with the app.
# ReactNative_finalProject

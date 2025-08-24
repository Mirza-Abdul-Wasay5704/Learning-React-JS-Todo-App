# Learning React JS Todo App

## Concepts Used in This Project

This project demonstrates a variety of core React concepts and best practices. Below is a list of the main concepts applied, along with where and how each is used:

### 1. Functional Components
- **Where:** All components (e.g., `App.js`, `Header.js`, `Footer.js`, `Todos.js`, `TodoItem.js`, `AddTodo.js`, `About.js`) are implemented as functional components.
- **How:** Functional components are used to define UI and logic in a modular and reusable way.

### 2. Props
- **Where:** Props are passed from parent to child components, such as from `App.js` to `Header`, `Footer`, `Todos`, and `AddTodo`.
- **How:** Used to pass data and callback functions (e.g., todo list, add/delete handlers) to child components for rendering and interaction.

### 3. State Management (useState)
- **Where:** `App.js` manages the main todo list state using the `useState` hook.
- **How:** State is updated when adding or deleting todos, and the updated state is passed down as props.

### 4. useEffect Hook
- **Where:** `App.js` uses `useEffect` to persist todos to local storage and retrieve them on app load.
- **How:** Side effects such as reading/writing to local storage are handled in `useEffect` to keep data persistent across sessions.

### 5. Component Composition
- **Where:** The main UI is composed by combining multiple components in `App.js`.
- **How:** Components like `Header`, `AddTodo`, `Todos`, and `Footer` are composed to build the full app layout.

### 6. List Rendering
- **Where:** `Todos.js` maps over the todo list to render each `TodoItem`.
- **How:** The `map` function is used to dynamically render a list of todos based on the current state.

### 7. Event Handling
- **Where:** Handlers for adding and deleting todos are defined in `App.js` and passed to child components.
- **How:** Functions are triggered on button clicks or form submissions to update the todo list.

### 8. Conditional Rendering
- **Where:** `Todos.js` conditionally renders a message if there are no todos.
- **How:** Uses JavaScript conditional expressions to display different UI based on the state.

### 9. Forms and Controlled Components
- **Where:** `AddTodo.js` implements a form to add new todos.
- **How:** Form inputs are controlled components, with their values managed by React state.

### 10. CSS Styling
- **Where:** Styles are applied via `App.css`, `index.css`, and inline styles in components.
- **How:** Both external CSS files and inline styles are used for layout and design.

### 11. Routing (if implemented)
- **Where:** If `react-router-dom` is used, routing is set up in `App.js` to navigate between the main todo list and the About page.
- **How:** `<Route>` and `<Switch>` components are used to render different pages.

### 12. PropTypes (if implemented)
- **Where:** PropTypes may be used in components to validate props.
- **How:** Ensures that components receive the correct types of props.

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

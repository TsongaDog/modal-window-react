# Simple Modal Window Project

A simple project that showcases a modal window using React and CSS.

## How to Use

1. Clone or download the repository to your local machine
2. Navigate to the project directory
3. Install the dependencies using npm install or yarn install
4. Start the project by running npm start or yarn start
5. A browser window will open and display the app
6. Click on the "✨ Open Window" button to open the modal window
7. The modal window can be closed by clicking on the close icon or outside the window.

## Components

This project contains two components:

- `App.jsx`: This is the main component that renders the modal window. It uses the `useState` hook to manage the state of the modal window. The state is stored in a variable `open` which is a boolean indicating if the modal window is open or closed. The `setOpen` function is used to update the state of the modal window.

- `Modal.jsx`: This component renders the modal window and is used inside the `App.jsx` component. It takes in two props `setOpen` and `children`. The `setOpen` prop is used to close the modal window when the close icon is clicked, and `children` is used to render the content of the modal window.

## CSS

The CSS styles are defined in a separate file and are used to style the components in the app. The styles include styles for the modal window, button, and overlay. The modal window is positioned at the center of the screen and uses CSS transforms to achieve this. The close icon is implemented using an SVG path.

## Conclusion

This simple project can be used as a starting point for creating more complex modal windows in React projects. It can be easily modified to include more components and styles to match your project's needs.
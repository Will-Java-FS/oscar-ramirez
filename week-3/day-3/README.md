# React

## What is React?
- React is a JS library (developed by facebook) of UI components that simplifies building user interfaces
- React code can be directly wirtten in HTML. However, you need npm(node package manager) and Node.js installed
- Sometimes referred to as a frontend JS framework
- React creates a virtual DOM (document object model) in memory to do all of the necessary manipulation before making changes in the browser DOM
    - React only changes what needs to be changed

## continued..
- React can be wrtten directly in your HTML documents
- To get started, install mpx and Node.js
    - use `Npx create-react-app my-first-react-app`
    - deprecated
- The command cd my-first-react-app will move to the application's directory
- The command 'npm start' will run the react application and a new browser window should pop up with your new app
    - you can also access your app by going to localhost:3000 in the address bar of your browser

## Single Page Application (SPA)
- a single page application (SPA) is a web application that only loads a single HTML page and dynamically updates content within that page as the user interacts with the app
- Insted of loading new HTML pages from the server for each interaction (like traditional multi-=page apps), SPAs load resources once and use JavaScript to update the content onthe page without refreshing it
- This leads to a smoother faster user experience
- SPAs often manage application state in a centralized way (such as using Redux) which helps maintain consistency across the application as users navigate

## JSX
- JSX stands for JavaScript XML
- It is a syntax extension for JS that is commonly used with React to describe what the UI should look like
- Allows developers to write HTML-like code directly within JavaScript
- THis makes it easier to crete and visualize the structure of components in React application
- You may also see TSX which stands for TypeScript XML and functions similarly

## TypeScript with React
- React offers the flexibility of using TS or JS to build components
- When using TS to create React components, we get all of the benefits that TS has to offer, such as type checking and using classes and interfaces
- JSX and TSX and vanilla TS all get transpiled into vanilla JS code

## Component Basics
- React componnts are independent and reusable bits of code
- They serve the sae purpose as JS functions, but work in solation and return HTML
- Components should be built on the single responsibility principle and should be broken up if they grow beyond that scope
- Components come in 2 types:
    - Class Components - reusable code blocks that use the render() function and must extend the React.component class
    - Function Components - reusable code blocks in the form of JavaScript functions

## Class Vs Function Component
**Class Component**
- MUST extend the React.Component class
- Follow a traditional class-based approach
- The render() method return sJSX elements describing the UI
- Properties are accessed using the 'this' keyword
```Class App extends React.component {
    Render() {return <h1>Header</h1>}
}
```

**Function Component**
- More common
- JS functions
- May or may not receieve dat as parameters
- Can be called using the name of the funciton or by using the functional component method
- Fewer features than class-components (no lifecycle functions)
```
function Somthing() {
    return (<h1>Header</h1>);
}
```

## Rendering
- With traditional JS and HTML, the browser DOM is updated often and can be costly when t comes to performance
- React renders a web page using a virtual DOM (document object model)
- React generates virtual DOM objects and only updates the browser DOM when it is absolutely necessary
- The Virtual DOM is lightweight and is updated with every change
- React then decides when it is most efficient to make updates to the real DOM
- This update process is known as 'reconcilition'

## Props & State
- Components can be nested in other components (referred to as parent and child components)
- Props are values passed from parent to child- When we want to change the data that is being used, we can use state
- The state can be set in class components by either using a constructor or by declaring a field called 'state' inside of the class
- Typically, you don't change the state directly. Instead, use 'this.setState()'
- If you need to change the state inside a functional component, use hooks

## Hooks
- Hooks are funcitons that allow you to use the state and other React features in functional components
- Hooks were introduced in React 16.8 to help provide a better way to write reusable stateful logic without using class components
- React has a number of built-in hooks or you can build your own

## State Hook
- State lets a component 'remember' information usch as user input
    - For ex: a form component can use state to store the selected image index
    - When the selected image index chnges, we can use the state to reflect some changes on the page
- The 'useState()' hook return s a pair: the current state value and a function that lets you update it
- To add state to a component, use:
```
Function ImageGallery() {
    const [index, setIndex] = useState(0);
}
```

## Context Hook
- Context hooks let a component recieve information from distant parents without passing it as props
- This makes it possible to pass data as global data with passing props down in a component tree
    - Note: this does not actually make the data global, it just behaves as such
- Use the function 'useContext()' to reac and subscribe to a context
```
Function Button() {
    const theme = useContext(ThemeContext);
}
```

## Ref Hook
- Ref Hooks let a component hold some information that is NOT used for rendering (such as a DOM node or a timeoutID)
- Unlike with state, updating a ref does NOT re-render a component
- These are useful when working with non-React systems (such as built-in browser APIs)
- useRef() declares a ref and can be used to hold any value, but most often holds a DOM node
- 'useImperativeHandle()' lets you customuze the ref exposed by your component (very rarely used)
```
Function Form() {
    const inputRef = useRef(null);
}
```

## Effect Hook
- Effects let a component connect to and synchronize with external systems
- This includes dealing wtih things like the network, browser DOM, animations, videos, etc
- useEffect() connects a component to a n external system
```
Function CharRoom({roomId}) {
    useEffect(() => { 
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    }, [roomID]);
}
```

## One-Way Data Flow
- In React, data only moves in one direction, from parent components to child components through props
- State is passed to the view and child components
- Then, actions are triggered by the view
- Actions can update the state
- The state change is passed to the view and to child components
- This makes things easier to debug, since we know what and where the data is coming from
- It is also less prone to errors and more efficient
- Parent component -> (data) -> Child component -> (update DOM) -> Parent component

## Lists & Keys
- In React, we render lists with come type of loop
- Most often we use the JS 'map()' array method
- A key is a specific attribute that react uses while rendering collection sof elements
- Keys help react identify which items have been changed, added, or removed (affecting the DOM reconciliation process)
- Keys MUST be unique among sibling elements, but they can be duplicated globally
- In this example, we create a list with 'id' acting as the keys
```
function Cat(props) {
    return <li> I am a {props.brand }</li>;
}

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return (
        <>
            <h1>Who lives in my garage</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

const root = ReactDom.createRoot(document.getElemtnById('root'));
root.render(<Garage />);
```
```
import React from "react";

const GroceryList = () => {
  const items = ["Apples", "Bananas", "Milk"];
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
```

## KNOWL CHECK
- What are the 2 main types of components in React?
    - Class components
    - Function components
- Data  flows in one direction in react
    - T
- WHat does DOM stand for
    - Document Object Model
- How does React interact with the browser DOM?
    - It creates a virtual dom, and selectively renders what has changed on the actual DOM
- Which function returns a state value and a function that lets you update it?
    - useState()

## Nested Components
- In React, we can have components nested inside of other components
- Nested components helps in creting more complex user interfaces
- Import and Export keywords facilitate nesting of components (when they exist in separate files)
- In this example, since the components exist within the same file, the import and export keywords are not necessary

## Immutability
- In React, Immutability is crucial for state updates
- Immurability is a concept that ensures component states are not modified directly
- Without immutability practices, components fail to trigger expected re-renders
- Objects are identified by reference, not by their values
- Instead of directly modifying the state, we create new objects, incorporate the desired changes, and set the component's state using that new object
    - This ensures that the proper state updates

## Lifting State
- Thanks to one-way data flow, aprents can pass props to child components as read-only
- Props are used to handle data that is not expeceted to be changed by the component
- By lifting up the state, we can make the state of the parent component as a single source of truth and pass the data of the parent to its children
- This is helpful when the data in parent and child components is not in sync

## Event Handling
- Just like HTML DOM events, React can perform actions based on user events
- React has the same events as HTML (click, change, mouseover, etc)
- Event names in JSX use camelCase and the event handler is passed in as a JS reference
- React event handlers are written inside curly braces
- React event handlers are written inside curly braces
- We can also pass arguments to event handlers using an arrow function

## Routing
- The command 'create-react-app' gives us the basic project setup without any page routing
- We have to add the React Router ourselves
- The React Router is a collection of navigational components within a React application
- It enables navigation among views of various components and allows changing the browser URL
- It is primarily designed for SPAs, facilitating client-side routing and enabling a smooth user experience wtihout full page reloads

## Axios
- In React, backend communication is typically achieved using the HTTP protocol
- Axios is a popular **3rd-party library** mainly used to send asynchronous HTTP requests to REST endpoints
- It is very useful for performing CRUD operations
- To create an application using Axios, run the following commands:
    ```
    'npx create-react-app my-app'
    'cd my-app'
    'npm i axios'
    'npm start'
    ```

## Misc.
```
 const [fruit, setFruit] = useState('banana');
 ```
 IS EQUIVALENT TO
 ```
 var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair
  ```

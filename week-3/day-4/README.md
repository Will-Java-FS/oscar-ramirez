# Advanced React

## Context
- Context provides a way to pass data through the component tree without having to pass props down manually at every level
- Context is typically used when some data needs to be accessible by many components at different nesting levels
- Apply it sparingly because it makes component reuse more difficult
- `const MyContext = React.createContext(defaultValue); // this creates a context object`
- When React renders a component that subscribes to this context object, it will read the current value from the closest matching provider above it in the tree
- `<MyContext.Provider value={value}>`
- Every context object comes with a provider React component that allows consuming components to subscribe to context changes

## Controlled and Uncontrolled Components
Controlled
- Controlled components are components where the state and behaviors are controlled by parent components
- It takes its current value through props and makes changes through callbacks like 'onClick'
- A parent component manages its own state and passes the new values as props to the controlled component

Uncontrolled
- Uncontrolled components are the ones having control of their own state and maange the behaviors themselves
- These are not controlled by the React state and are handled by the DOM
- To access any value that has been entered, we get help from refs
- EX: a file input cannot be controlled since this depends on the browser


## Higher Order Components
- Higher order components (HOC) is the advanced method of reusing the component functionality logic
- It simply takes the original component and returns the enhanced component
- THey are a design pattern that promotes reusability and separation of concerns
- HOCs can conditionally render components based on certain criteria, such as user authentication or permission levels
```
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

## Refs
- Refs (references) are a feature that allows you to directly access and interact with a DOM element or a react component instance
- They allow you to interact with elements outside the normal data flow
- They are used when you want to change the value of a child component, without using props or state
- Refs are created using 'React.createRef()' or via the 'useRef' hook in functional components
```
class MyComponent extends React.Component {
    constructors(props) {
        super(props);
        this.myCallRef = React.createRef();
    }
    render() {
        return <div ref={this.myCallRef} />;
    }
}
```

## Knowledge Check!
What does Context allow us to do?
- Pass data from distant parent components without needing to send props at every level
- Avoid prop drilling

(T/F) Controlled components manage their own states and behavior themselves
- False
  
Refs are used when you want to change the value of a child component without using...?
- props or state

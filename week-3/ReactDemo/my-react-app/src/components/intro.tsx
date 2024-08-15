//function component
//Pascal casing for function names (for components)
export default function Intro() {

    const name = "Kelsey Morrison";

    //a react component returns a JSX element
    //shorthand for <React.Fragment> -> <> </>
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Welcome to my app! My instructor's name is {name}.</p>
        </>
    )

}

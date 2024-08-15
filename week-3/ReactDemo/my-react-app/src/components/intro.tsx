//function component
//Pascal casing for function names (for components)
export function Intro() {

    const name = "OJR";

    //a react component returns a JSX element
    //shorthand for <React.Fragment> -> <> </>
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Welcome to my app! We're using react!! - {name}.</p>
        </>
    )

}

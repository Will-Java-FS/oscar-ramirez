# TypeScript Intermediate

## Classes

- A TypeSCript class is a blueprint for creating objects and encapsulating dat aand behavior
- Classes promote code organization, reusability, and readability
- Classes have a few key components
    - Methods - functions defined within a class to perform some action
    - Constructors - special methods called when an object is created from a class to initialize class properties
    - Properties - variables associated with a class instance
    - Inheritance - classes can be created based on existing ones, promoting code reuse and specialization

```
Class Animal {
    Name: string;
    Size: string;
    //this is a constructor for the animal class that initializes our props
    Constructor( name: string, size: string) {
        this.name = name;
        this.size = size;
    }
    sound() {
        console.log(`The ${this.name} makes a loud sound!`);
    }
}
Const animal = new Animal('dog', 'medium');
```

## Basic Generics

- Generics is being able to create a component that can work over a variety of types, rather than a single one
- This allows users to consume these components and use their own types
- A generic class has a similar shape to a generic interface
- Generics have a generic type parameter list in angle brackets<> following the name of the class
- Generic components can be classes, functions, and interfaces and can be used in several ways

## Generics
- For example, generics with functions help us create more generalized methods that accurately represent the types used and returns

```
Function cretePair<S,T>(variable 1: S, variable2: T): [S,T] {
    return [variable1, variable2];
}
Console.log(createPair<string, number>('Nancy', 36));
```

## WDS Demo
```
function getFirstElement<ElementType>(array: ElementType[]) {
    return array[0];
}

const numbers = [1, 2, 3]
const firstNum = getFirstElement<number>(numbers)
const strings = ["sdf", "sdf"]
const firstString = getFirstElement<string>(strings)
//===============
const map = new Map<string, number>()
map.set("sdf", 3);

const map2 = new Map([["sdf", 3]]);
//===============
type ApiResponse<Data> = {
    data: Data
    isError: boolean
}

type UserResponse = ApiResponse<{ name: string; age: number}> = {
    data: {
        name: "Kyle",
        age: 28,
    },
    isError: false,
}
```

## Casting
- There are times when it is necessary to override the type of a variable
- Casting is the process of overriding a type
- Casting is done using the 'as' keyword or with <>, which directly changes the type of the given variable
- NOTE: casting does not actually change the type of data within the variable!!!

```
let x: unknown = 'Hamburgers';
console.log((x as string).length);
```
OR
```
let x: unknown = 'Hamburgers';
console.log((<string>x).length);
```

## Utility Types
- TypeScript provides several utility types to help facilitate common type transformations
- Utilities are available globally
- **Partial** - changes all the properties in an object to be optional
- **Required** - changes all the properties in an object to be required
- **Record** - a shortcut to defining an object type with a specific key type and value type

```
Interface Pairs {
    x: number, 
    y: number
};
Let pairsPart: Partial<Pairs> = {} //allows x and y to be optional
Let myPair: Required<Pairs> = {x: 3, y: 8} // forces x and y to be required
Const numMap: Record<number, number> = { 9:5, 3:0}
```

## Other Utility Types
- **Omit** - removes keys from an object type
- **Pick** - removes all but the specificed keys from an objec ttype
- **Exclude** - removes types from a union
- **ReturnType** - extracts the return type of a function type
- **Parameters** - extracts the aprameter types of a function type as an array
- **Readonly** - used to create a new type where all properties are readonly
  - The properties cannot be modified once assigned a value

## KeyOf
- Keyof is a keyword used to extract the key type from an object type
- Also known as indexed type query operator
Yields the inion that contains property names and keys of its operand values
- When used with objects with explicit keys, keyof creates a union type with those keys
Equivalent to using Object.keys in JS
```
Type Employee {name: string; hourly: number;}
Type employeeKeys = keyof Employee;
//here the keyof operator is used for an object type
// results in a union of string literal types: "name: | hourly:"
```

## Decorators
- Decorators provide a way to add annotations and meta-programmign syntax for class declarations and members
- A decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter
- he benefits of decorators are that we can promote reusability, reflect metadata and integrate powerful frameworks and lirbaries (like React!)

```
Given the decorator @demo we might write the demo function as
Function demo(target) {
    //do somethign with the target
}
```

## Functions
- Functions are the basic building block of applications
- The simplest way to describe a function si with a function type expression (similar to arrow functions)
- '(a: string) => void' means a function with 1 parameter, named a, of type - string, that does not have a return value
- Parameter names are required
- Functions can have optional parameters by using a '?' after the parameter name

```
Function doSomething(fn: (a: string) => void) {
    Fn("Hello!");
}
Function printToConsole( s:string) {
    console.log(s);
}
DoSomething(printToConsole);
```

# TypeScript Advanced

## As Const
- Typescript 3.4 introduced a new construct for literal values called 'const assertions'
- It is a syntax type assertion with 'const' in place of the type name
- When we construct new literal expressions with const assertions, we can tell the language that:
    - No literal types in that expression should be widened (meaning no going from "hello" to string)
    - Object literals get readonly properties
    - Array literals become readonly tuples
- This is useful when mixing object literals

```
const MODE = {
    CREATE: "CREATE",
    EDIT: "EDIT"
} as const;

same as

const MODE: {
    readonly CREATE: "CREATE";
    readonly EDIT: "EDIT";
} = {
    CREATE: "CREATE",
    EDIT: "EDIT"
};
```

## Type Guards
- Type guards are special constructs that allow you to narrow down the type of variable within a specific scope
- They help ensure that avariable is of a certain type before performing operations on it
    - This helps prevent runtime errors
- For example, if we have a variable that can be a number or a string, we need to know which one it is before we can perform operations on it

```
Type Demo = string | number;

Function doSomething(demo: Demo) {
    if (typeof demo === 'string') {
        //do something with string
    } else {
        //do something else with number
    }
}
```

## Interface vs Type
Interface
- **Declaration merging - TS compiler merges 2 or more interfaces that share the same name into only 1 declaration**
- Can be extended and implemented

Type
- **Cannot be extended**
- Intersection - allows us to combine multiple types into a single type using the '&' keyword
- Union types - allows us to create a new type that accepts a value of one or more types

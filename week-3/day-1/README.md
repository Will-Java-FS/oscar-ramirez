# TypeScript

### Key Features of Typescript
**Static Typing**: you can specify types for variables, function parameters, and return values, allowing the system to catch errors at compile time
**Readability**: type definitions make the code easier to read and understand
**Type Inference**: Typescript can infer types based on how you write your code, reducing the need for explicit type annotations
**Interfaces and Classes**: TypeScript supports interfaces and classes, making it easier to write object-oriented code
**Advanced Features**: TypeScript supports OOP features like generics, decorators, union types, intersection types, etc.

### Java Script vs TypeScript
**JS**
- Dynamically typed
- Lacks compile-time error checking based on types
- More flexible with less strict syntax requirements
- File types end with .js
- Does not support interfaces

**TS**
- Statically typed
- Provides compile
- Time type checking, reducing runtime errors
- Offers modern ECMAScript features along with TypeScript-specific syntax
- File types end with .ts
- Supports interfaces

### TSC
- TSC stands for TypeScriptCompiler
- TSC is a command-line TypeScript compiler that converts TS code (.ts files) into JavaScript (.js files) that can run in any JavaScript runtime environment
- TSC can be configured using 'tsconfig.json' to specify compilation options and other settings

### Why and How Should I Use TypeScript
- To add static typing to JavaScript
	- this can prevent a ton of bugs, as much as 15%
	- saves lots of time, especially on medium to large projects
- Readability - it is easier to understand what the code is meant to do
- Popularity - it is very popular and allows you to apply to more jobs
- Easy to learn
- Fewer unit tests are needed

### Getting Started
- In the command line use `npm install -g typescript` to install the typescript package
- Use `tsc --version` to verify the TypeScript compiler is installed properly

### TSConfig Basics
- We can use the tscopnfig.json file to tell the compiler which files to run
- Used to customize what rules you want TS to enforce
- The tsconfig.json file indicates the root of a TS projects
- It specifies the root files and the compiler options required to compile the projects
- JS projects can use the js.config.json file instead, which acts similarly but with some JS related compiler flags enabled by default
- By including a tsconfig.file, you can use the command 'tsc' without any arguments in your terminal and the compiler will recognize which files to run

### TSConfig Properties
- **"target" - determines which version of ECMAScript standards the project should use. Common values include 'es2017' or 'es2016'**
- "rootDir" - determines the root folder to compile the project from
- "outDir" - determines where to compile to; Usually the folder deployed to a web server
- "compilerOptions" - a nested object that contains rules for the TypeScript compiler to enforce
- "module" - tells the compiler which syntax to use for the modules in the emitted .js files; we will be using 'commonjs'
- "include" - determines what files the compiler applies the rules to. 
  - '["**/*.ts"]' means the compiler should check every single file with a .ts extension
  
### Compiler options
- The compiler can reference a tsconfig.json file in another directory using the 'references' options
  - This is useful when we want to reference a compiler option when running tsc in a specific directory
- NoImplicitThis compiler option ensures that the 'this' keyword is accessed correctly
  - Otherwise, it will throw an error
- StrictNullChecks uis used to find isntances where a variable could be null or undefined at the time it is used

### Strict
- **The strict flag is a TS compiler option that turns on a set of type checking rules and is known as 'strict mode'**
- StrictBindCallApply - checks that the built-in methods of functions call, bind, and apply are invoked with correct arguments for the underlying function
- StrinctFunctionTypes - causes function parameters to be checked more correctly. This setting only applies to functions written in function syntax, not those in method syntax
- StrictNullChecks - when true, null and undefined have their own distinct types and will throw an error if you try to use them where a concrete value is expected
- StrictPropertyInitialization - will raise an error when a class property was decalred but not set in the constructor
- When creating a new TypeScript project, it is recommended to have strict mode on so that code benefits from the most stringent type checking from the start of its life

### Simple types
- There are 3 main simple types or 'primitives' in TS and js
  - Boolean - true/false
  - Number - whoel numbers and floating point values
  - String - text values like "Hello, TypeScript!"
- There are also 2 less common primitives used in later versions
  - Bigint - whole numbers andd floating point values, but allows for larger negative and positive values than Number
  - Symbol - used to create a globally unique identifier (GUID)
  
### Special types
- Special types may not refer to any specific type of data
- Any - this type disables type checking and allows all types to be Used
  - 'any' will not provide type safety and should be avoided
- Unknown - this is a similar but safer alternative to 'any'
  - This is best used when you don't know the type of data being used since a type can be added later via casting
- Never - throws an error whenever it is defined
  - This is rarely used, especially by itself. Used mostly in advanced generics
- Undefined & Null - types that refer to JS primitives undefined and null respectively
  - These types have minimal use unless strictNullChecks is enabled
  
### Object types
- TypeScript allows us to type objects
- The object type represents all values that are not primitive types
- TypeScript can infer types of properties based on their values
- Objects are how we pass around grouped data

### Type aliases
- Type aliases allow for defining types with a custom name (aka an alias)
- Aliases can make code more readable by providing meaningful names for complex types
- Aliases use the type keyword followed by the alias you want to provide
- In this example, we can use dog anywhere in our code as if it were a primitive type
- Without Alias:
  - ``` let dog: 'beagle' | 'pug';```
  - this is just the name of a variable, using 'dog' as a type will produce an error
- With Alias:
  - ```type dog = 'beagle' | 'pug';  let dog1: dog = 'beagle';  let dog2: dog = 'pug';```
  
### Interfaces
- Interfaces are similar to aliases, except they only apply to object types
- Interfaces define the structure of an object and enforce a specific syntax on classes
- Extending an interface means you are creating a new interface with the same properties as the original, plus additional properties/methods

### Union types
- Union types are used when a value can be more than a single type, such as a string or a Number
- Using the '|', we are saying our parameter is either a string or a Number
- Make sure you remember what your type is when using union types to avoid errors

### Tuples
- Tuples are typed ararys with a pre-defined length and type for each index
- Tuples allow each element in the array to be a known type of value
- It is also a good practice to make tuples read only
- If we want to add another item to the tuple we can use the push function to add another item, but there will not be any type safety

### String enums
- Enums allow developers to define a set of named constants
- Enums can be either string or numeric
- Enums are defined using the 'enum' keyword
- String enums are more common because of their readability 
- String enums do not have auto-incrementing behavior


### Numeric enums
- Numeric enums store string values as numbers
- Numeric enums will initialize with the first value to 0 and add 1 to each additional value
  - You could also set the value of the first numeric enum and have it auto increment from that
- Use an enum by accessing any member as a property of the enum itself

// UTILITY TYPES

// Awaited<Type> ===============================================================
// type A = Awaited<Promise<string>>;
// type A = string;

// type B = Awaited<Promise<Promise<number>>>;
// type B = number;

// type C = Awaited<boolean | Promise<number>>
// type C = number | boolean;

// Partial<Type> ===============================================================
// interface Todo {
//     title: string;
//     description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate};
// }

// const todo1 = {
//     title: "organize desk",
//     description: "clear clutter",
// };

// const todo2 = updateTodo(todo1, {
//     description: "throw out trash",
// });

// console.log(todo1);
// console.log(todo2);

// Required<Type> ===============================================================
// interface Props {
//     a?: number;
//     b?: string;
// }

// const obj: Props = { a: 5};

// const obj2: Required<Props> = {a: 5, b: '6'};


// Readonly<Type> ===============================================================
// interface Todo {
//     title: string;
// }

// const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
// };

// console.log(todo.title); // can read
// todo.title = "Hello"; //can't write

// Record<Keys, Type> ===============================================================
// interface CatInfo {
//     age: number;
//     breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//     miffy: {age: 10, breed: "Persian" },
//     boris: {age: 5, breed: "Maine Coon" },
//     mordred: {age: 16, breed: "British Shorthair" },
// };

// console.log(cats.boris);

// const cats: Record<CatName, CatInfo>

// Pick<Type, Keys> ===============================================================
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// };

// console.log(todo.description); // no description

// Omit <Type, Keys> ===============================================================
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">; // remove field description

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     createdAt: 1615544252770,
// };

// Exclude<UnionType, ExcludedMembers>
// type T0 = Exclude<"a" | "b" | "c", "a">;
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// let x: T1 = "c";
// type T2 = Exclude<string | number | (() => void), Function>;

// let y: T2 = 312;
// let z: T2 = "hello";


type T0 = Parameters<() => string>;

let x: T0 = [];

interface Employee {
    name: string;
    id: number;
}

interface Employee {
    department: string;
}

//Declaration Merging
const firstEmployee: Employee = {
    name: "John Doe",
    id: 14,
    department: "IT"
}
const Employee = require("../lib/employee");

test('create an Employee object',() =>{
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('get Employee name',() =>{
    const employee = new Employee("Tom");

    expect(employee.name).toBe("Tom");
});

test('get Employee id',() =>{
    const employee = new Employee("Tom","1");

    expect(employee.id).toBe("1");
});

test('get Employee email',() =>{
    const employee = new Employee("Tom","1","employee@gmail.com");

    expect(employee.email).toBe("employee@gmail.com");
});

// test('getRole() returns Employee',() =>{
//     const employee = new Employee("Employee");

//     expect(employee.getRole()).toBe("Employee");
// });
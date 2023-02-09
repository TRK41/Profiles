const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test('create an Manager object',() =>{
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

test('get Manager name',() =>{
    const manager = new Manager("Tom");

    expect(manager.name).toBe("Tom");
});

test('get Manager id',() =>{
    const manager = new Manager("Tom","1");

    expect(manager.id).toBe("1");
});

test('get Manager email',() =>{
    const manager = new Manager("Tom","1", "Manager@gmail.com");

    expect(manager.email).toBe( "Manager@gmail.com");
});

test("get Manager's office number",() =>{
    const manager = new Manager("Tom","1", "Manager@gmail.com","10");

    expect(manager.officeNumber).toBe("10");
});

// test('getRole() returns Manager',() =>{
//     const manager = new Manager( "Manager");

//     expect(manager.getRole()).toBe( "Manager");
// });
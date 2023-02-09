const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

test('create an Intern object',() =>{
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

test('get Intern name',() =>{
    const intern = new Intern("Tom");

    expect(intern.name).toBe("Tom");
});

test('get Intern id',() =>{
    const intern = new Intern("Tom","1");

    expect(intern.id).toBe("1");
});

test('get Intern email',() =>{
    const intern = new Intern("Tom","1", "Intern@gmail.com");

    expect(intern.email).toBe( "Intern@gmail.com");
});

test("get Intern's school",() =>{
    const intern = new Intern("Tom","1", "Intern@gmail.com","Carleton");

    expect(intern.school).toBe("Carleton");
});

// test('getRole() returns Intern',() =>{
//     const intern = new Intern( "Intern");

//     expect(intern.getRole()).toBe( "Intern");
// });
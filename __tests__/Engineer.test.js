const Engineer = require("../lib/Engineer");
const Employee = require("../lib/employee");

test('create an Engineer object',() =>{
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test('get Engineer name',() =>{
    const engineer = new Engineer("Tom");

    expect(engineer.name).toBe("Tom");
});

test('get Engineer id',() =>{
    const engineer = new Engineer("Tom","1");

    expect(engineer.id).toBe("1");
});

test('get Engineer email',() =>{
    const engineer = new Engineer("Tom","1","Engineer@gmail.com");

    expect(engineer.email).toBe("Engineer@gmail.com");
});

test('get Engineer github',() =>{
    const engineer = new Engineer("Tom","1","Engineer@gmail.com","Engineergithub");

    expect(engineer.github).toBe("Engineergithub");
});

// test('getRole() returns Engineer',() =>{
//     const engineer = new Engineer();

//     expect(engineer.getRole(Engineer)).toBe(Engineer);
// });
const Engineer = require("../lib/Engineer");
const Employee = require("../lib/employee");

test('create an Engineer object',() =>{
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test('get Engineer name',() =>{
    const engineer = new Engineer("Tom");

    expect(engineer.getName()).toBe("object");
});

test('get Engineer id',() =>{
    const engineer = new Engineer("Tom","1");

    expect(engineer.getId()).toBe("1");
});

test('get Engineer email',() =>{
    const engineer = new Engineer("Tom","1","Engineer@gmail.com");

    expect(engineer.getId()).toBe("Engineer@gmail.com");
});

test('get Engineer github',() =>{
    const engineer = new Engineer("Tom","1","Engineer@gmail.com","Engineergithub");

    expect(engineer.github).toBe("Engineergithub");
});

test('getRole() returns Engineer',() =>{
    const engineer = new Engineer("Engineer");

    expect(engineer.getRole()).toBe("Engineer");
});
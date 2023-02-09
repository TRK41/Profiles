const createTeam = (team) => {

    const createManager = (manager) => `
    <div class="card col-3 me-3 mb-5">
        <div class="card-header bg-primary grid text-center">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title">${manager.title}</h3>
        </div>
        <div class="card-body grid text-center">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
`;
    const createEngineer = (engineer) => `
<div class="card col-3 me-3 mb-5">
    <div class="card-header bg-primary grid text-center">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">${engineer.title}</h3>
    </div>
    <div class="card-body text-center">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">
                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item">
                GitHub:
                <a href="https://github.com/${engineer.gitHub}" target="_blank"
                    rel="noopener noreferrer">${engineer.gitHub}</a>
            </li>
        </ul>
    </div>
</div>
`;
    const createIntern = (intern) => `
                <div class="card col-3 me-3 mb-5">
                    <div class="card-header bg-primary grid text-center">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"> ${intern.title}</h3>
                    </div>
                    <div class="card-body grid text-center">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${intern.email}">${intern.email}</a>
                            </li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
        `;


    const html = [];

    html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => createManager(manager)));


    html.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => createEngineer(engineer)).join(''));


    html.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => createIntern(intern)).join(''));


    return html.join('');
};

const createMain = (team) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="card-header bg-danger ">
                <h1 class="team-title text-center">Team Profiles</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="container col-12 d-flex flex-wrap justify-content-around"></div>
        </div>
        <div class="row row-cols-1 row-cols--4 g-4">
                ${createTeam(team)}
            
        </div>
    </div>
</body>
</html>
`;

module.exports = createMain,createTeam;
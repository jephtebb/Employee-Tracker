const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "password",
    database: "employeeTrackerDatabase"
});

connection.connect(err=> {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");


});

const questionsPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userOptions",
        message: "Select what you would like to see or do",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.userOptions) {
        case "view all departments":
          viewDepartments();
          break;
        case "view all roles":
          allRoles();
          break;
        case "view all employees":
          viewEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateRole();
          break;

        default:
          connection.end();
          break;
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
};

const viewDepartments = () => {};

const allRoles = () => {};

const viewEmployees = () => {};

const addDepartment = () => {
  inquirer.prompt([{
    type: "input",
    name: "department",
    message: "What is the department you want to add?"
}, ]).then(answer => {
    connection.query('INSERT INTO departments (department_name) VALUES (?)', [answer.department], (err, data) => {
        if (err) throw err;
        console.table("Successfully updated!");
        questionsPrompt();
    })
})
};

const addRole = () => {
  inquirer.prompt([
    {
        message: "Please enter the title:",
        type: "input",
        name: "title"
    }, {
        message: "Enter the salary of the role:",
        type: "number",
        name: "salary"
    }, {
        message: "Please enter the department id:",
        type: "number",
        name: "department_id"
    }
]).then(function (answer) {
    connection.query("INSERT INTO roles (role_title, salary, department_id) values (?, ?, ?)", [answer.title, answer.salary, answer.department_id], (err, data) => {
        console.table(data);
    })
    questionsPrompt();
})
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "number",
        name: "roleId",
        message: "What is the employee's role ID",
      },
      {
        type: "number",
        name: "managerId",
        message: "What is the employee manager's ID?",
      },
    ])
    .then((answer) => {
      if (answer.managerId) {
        connection.query(
          "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
          [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
          (err, data) => {
            if (err) throw err;
            console.table("Successfully updated!");
            questionsPrompt();
            
          }
        );
       
      } else {
        connection.query(
          "INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)",
          [answer.firstName, answer.lastName, answer.roleId],
          (err, data) => {
            if (err) throw err;
            console.table("Successfully updated!");
            questionsPrompt();
          }
        );
        
      }
    });
};

const updateRole = () => {};

questionsPrompt();

const mysql = require('mysql2');
const express = require('express');
const inquirer = require("inquirer");
const app = express();
inquirer
  .prompt([{
      type:'list',
      name:'userOptions',
      message:"Select what you would like to see or do",
      choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee role']
  }
    
  ])
  .then(answer => {
    switch(answer.userOptions) {
      case 'view all departments':
        console.log('a');
        break;
      case 'view all roles':
        console.log('b');
        break;
      case 'view all employees':
        console.log('c');
        break;
      case 'add a department':
        console.log('d');
        break;
     case 'add a role':
        console.log('e');
        break;
     case 'add an employee':
        console.log('f');
        break;
      
      default:
        console.log('update an employee role')
    }
   
  })
  .catch(error => {
    if(err) throw err 
    
  });





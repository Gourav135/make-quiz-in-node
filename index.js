var inquirer = require('inquirer');

console.log("************************************")
console.log("********Quiz*******")
console.log("************************************")
console.log("*******First you have to Login*******")

inquirer.prompt([
    /* Pass your questions in here */
    {
        type:"input",
        message:"Enter your username",
        name:"username"
    },
    {
        type:"password",
        message:"Enter your username",
        name:"password"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Account name and password", answers.username);
    
    inquirer.prompt([

      {
        type:"list",
        name:"ques1",
        message:"India's largest city by population",
        choices:[
          "Delhi",
          "Mumbai",
          "Chennai"
        ]
      },
      {
        type:"list",
        name:"ques2",
        message :"Number of State and Union Territories in India ",
        choices:[
          "27 States and 8 Union Territories",
          "29 States and 7 Union Territories",
          "27 States and 6 Union Territories"
        ]
      },
      {
        type:"list",
        name:"ques3",
        message :"What is the name of India's National Aquatic Animal?",
        choices:[
          "River Dolphin",
          "Katla Fish",
          "Green Frog"
        ]
      },
      {
        type:"list",
        name:"ques4",
        message :" Who designed the Indian Parliament in New Delhi?",
        choices:[
          "Gustave Eiffel",
          "Le Corbusier",
          "Edwin Landseer Lutyens"
        ]
      }
        
        
        
    ])
    .then((add) => {
      var count=0;
      if(add.ques1=="Delhi"){
        count++;
      }
      if(add.ques2=="29 States and 7 Union Territories"){
        count++;
      }
      if(add.ques3=="River Dolphin"){
        count++;
      }
      if(add.ques4=="Edwin Landseer Lutyens"){
        count++;
      }
      console.log("Your Score is ",count)
    })

  })

  // .then(answers => {
  //   console.log(answers);
  // })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
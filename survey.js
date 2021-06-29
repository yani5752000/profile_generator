const readline = require('readline');
let name = "";
let activity = "";
let listen = "";
let meal = "";
let food = "";
let sport = "";
let superpower = "";

//const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    activity = `${name} does ${answer}.`;

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      listen = `${name} listens to ${answer}.`;;
  
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        meal = `${name}\'s favourite meal is ${answer}.`;;
    
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          food = `${name}\'s favourite food is ${answer}.`;;
      
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            sport = `${name}'\s absolute favourite sport is ${answer}.`;;
        
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              superpower = `${name}\'s superpower is ${answer}.`;;
             
              console.log(`${activity} ${listen} ${meal} ${food} ${sport} ${superpower}`);
 
             
              rl.close();
            });
          });
        });
      });
    });
  });

  
});


//console.log(`paragraph : ${name} and ${activity}.`);
//rl.close();
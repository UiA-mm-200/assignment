var readline = require('readline');

var gjettNummer = Math.round(Math.random() * 10);

var terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('Gjett nummeret fra 1-10! : ');
terminal.prompt();
terminal.on('line', function(answer)
{2
  var svarNummer = parseInt(answer);

  if (svarNummer > gjettNummer)
  {
    console.log('Nummeret ditt er for høyt!');
  }

  else if (svarNummer < gjettNummer)
  {
    console.log('Nummeret ditt er for lavt!');
  }

  else if (svarNummer === gjettNummer)
  {
    console.log('Nummeret er RIKTIG! Du klarte det!');
    process.exit(0);
  }



  
  
   

 
});


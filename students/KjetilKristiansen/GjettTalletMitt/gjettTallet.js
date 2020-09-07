let num = 10;
let myNum = Math.floor(Math.random() * num);
console.log(myNum);

let message = "<h2>Gjett tallet mitt, det er mellom " + "0" + " og " + num + "</h2>";
document.getElementById("message").innerHTML = message;

let fails = 0;
function checkNum(){
    let userInp = document.getElementById("inpNum").value;
    if(userInp == myNum){
        document.write("<h3>Riktig nummer var: " + myNum + "! Du brukte " + fails + " forsøk!</h3>");
        document.write("<button onClick='location.reload()'>Prøv igjen?</button>")
        }else if(userInp <= myNum){
            document.getElementById("gameTxt").innerHTML = "<h3>Høyere enn " + userInp + "</h3>";
            fails++;
        }else{
            document.getElementById("gameTxt").innerHTML = "<h3>Lavere enn " + userInp + "</h3>";
            fails++;
        }
}

var player1name=localStorage.getItem("player1");
var player2name=localStorage.getItem("player2");
document.getElementById("player1Name").innerHTML=player1name;
document.getElementById("player2Name").innerHTML=player2name;
console.log(player1name)
var player1score=0;
var player2score=0;
document.getElementById("player1Score").innerHTML=player1score;
document.getElementById("player2Score").innerHTML=player2score;
document.getElementById("awnserTurn").innerHTML="Awnser turn:"+player2name;
document.getElementById("questionTurn").innerHTML="Question turn:"+player1name;
question_turn="player1"
answer_turn="player2"
var number1="";
var number2="";


function send(){
var number1=document.getElementById("input1").value
var number2=document.getElementById("input2").value
number1=parseInt(number1)
number2=parseInt(number2)
number=parseInt(number1) + "*" + parseInt(number2)
console.log(number)
answer1=number1 * number2;
question="<h1 id='question'>"+ number +"</h1>"
answer="Answer:<input id='Answer_Input' placeholder='Enter your answer here'>"
check="<button onclick='submit()' class='btn btn-succes'>Submit</button>"
row=question+answer+check;
document.getElementById("output").innerHTML=row;
document.getElementById("Answer_Input").value=" ";
}
function submit(){
   
    console.log(answer1)
    word=document.getElementById("Answer_Input").value
    
    if (word == answer1) {
        if (answer_turn == "player1") {
           player1score=player1score+1
           document.getElementById("player1Score").innerHTML=player1score;
   
        } else {
           player2score=player2score+1
           document.getElementById("player2Score").innerHTML=player2score;
        }
    
        
    }
    if (question_turn == "player1") {
        question_turn ="player2"
        document.getElementById("questionTurn").innerHTML="Question turn:"+player2name;
    }else{
       question_turn ="player1"
       document.getElementById("questionTurn").innerHTML="Question turn:"+player1name;
    }
    if (answer_turn == "player1") {
        answer_turn="player2"
        document.getElementById("awnserTurn").innerHTML="Awnser turn:"+player2name;
    } else {
        answer_turn="player1"
        document.getElementById("awnserTurn").innerHTML="Awnser turn:"+player1name;
    }
    document.getElementById("output").innerHTML=" ";
   }


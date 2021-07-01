
function Login2(){
    
    
        var player_1_name=document.getElementById("player1").value;
var player_2_name=document.getElementById("player2").value;
localStorage.setItem("player1", player_1_name);
localStorage.setItem("player2", player_2_name);
window.location="game.html";
    
}

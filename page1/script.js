var likeInc= document.getElementById("like-btn");
var likes = 0;
var text = "Like(s)"

function changeTot(){
    likes++;
    likeInc.innerText= likes + " " + text;
}
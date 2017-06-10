$(function(){
  $("#boton").on("click", function(e){
    e.preventDefault()
    var textTweet = $("#texto").val()
    var newTweet = textTweet
    $("#newPost").html(newTweet)
    console.log(newTweet)
  })
})

//Contador de Likes
var likes = 0;
function like(){
  document.getElementById("likes").innerHTML=likes;
  likes=likes + 1;
}

$("#btnLike").on("click", function(){
  $(".glyphicon glyphicon-heart").style.color="magenta";
})

//Eliminar tweet
$("#delete").on("click", function(){
  $("#newPost").remove()
})
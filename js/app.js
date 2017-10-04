// wait for the DOM to finish loading
console.log('sanity check');
var turns=0;

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $(".box").on("click", function(){

  	// X and O should take a turn with % module (even and odd- even for X, odd for O)
  	if(turns % 2 === 0){

  		$(this).text("X");
  		turns++ // increments turns variable
  	}else{

  		$(this).text("O");
  		turns++
  	}
      
      if(  $(".1").text() === "O" && $(".2").text() === "O" && $(".3").text() === "O"
        || $(".1").text() === "X" && $(".2").text() === "X" && $(".3").text() === "X"
        || $(".4").text() === "O" && $(".5").text() === "O" && $(".6").text() === "O"
        || $(".4").text() === "X" && $(".5").text() === "X" && $(".6").text() === "X"
        || $(".7").text() === "O" && $(".8").text() === "O" && $(".9").text() === "O"
        || $(".7").text() === "X" && $(".8").text() === "X" && $(".9").text() === "X"
        || $(".1").text() === "O" && $(".4").text() === "O" && $(".7").text() === "O"
        || $(".1").text() === "X" && $(".4").text() === "X" && $(".7").text() === "X"
        || $(".2").text() === "O" && $(".5").text() === "O" && $(".8").text() === "O"
        || $(".2").text() === "X" && $(".5").text() === "X" && $(".8").text() === "X"
        || $(".3").text() === "O" && $(".6").text() === "O" && $(".9").text() === "O"
        || $(".3").text() === "X" && $(".6").text() === "X" && $(".9").text() === "X"
        || $(".1").text() === "O" && $(".5").text() === "O" && $(".9").text() === "O"
        || $(".1").text() === "X" && $(".5").text() === "X" && $(".9").text() === "X"
        || $(".3").text() === "O" && $(".5").text() === "O" && $(".7").text() === "O"
        || $(".3").text() === "X" && $(".5").text() === "X" && $(".7").text() === "X"
         
         
         
         
         
        ){
          console.log("You win");
      }
  });
});






    
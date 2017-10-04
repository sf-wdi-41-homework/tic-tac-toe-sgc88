// wait for the DOM to finish loading
console.log('sanity check');
var turns=0;
// win var to keep truck if there is a winner
var win = false;


$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  // reset button
  $(".btn-default").on("click", function(){
    // boxes have to be emty so that we can get ready to set up the game again to be ready be played
    $(".box").text("");
    // we have to set win var to false so then user can play again
    win = false;
  });





  $(".box").on("click", function(){
    if($(this).text() === "" && win === false){
      // X and O should take a turn with % module (even and odd- even for X, odd for O)
      if(turns % 2 === 0){
        $(this).text("X");
        // increments turns variable
        turns++;
      }else{
        $(this).text("O");
        turns++;
      }
      // need to have if statement for  all posible winning positions for X and O
      if( $(".1").text() === "O" && $(".2").text() === "O" && $(".3").text() === "O"
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
      ){// if either X or O wins
        alert("wohoo, you win!");
        win = true;
        // if no one wins then
      } else if ($(".1").text() !== "" && $(".2").text() !== "" && $(".3").text() !== "" && $(".4").text() !== "" && $(".5").text() !== "" && $(".6").text() !== "" && $(".7").text() !== "" && $(".8").text() !== "" && $(".9").text() !== ""){
        alert("you both suck on this game");

      }
    }else{
      // nothing happens box is taken
      // when box is taken nothing should happen but simple alert;
      alert("upsy bupsy, I'm taken")
    }


  });
});

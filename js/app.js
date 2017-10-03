// wait for the DOM to finish loading
console.log('sanity check');
var turns=0;
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $(".box").on("click", function(){


  	if(turns % 2 === 0){

  		$(this).text("X");
  		turns++
  	}else{
  		  
  		$(this).text("O");
  		turns++
  	}
  });
});

  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


function inflate(unicorn) {
  console.log(unicorn.src)

  var unicornVersion = unicorn.src.slice(-5);

  if (unicornVersion === "0.png") {
    unicorn.src = "./images/unicorn-1.png"
  } 
  else if (unicornVersion === "1.png") {
    unicorn.src = "./images/unicorn-2.png"
  } 
  else if (unicornVersion ===  "2.png") {
    unicorn.src = "images/unicorn-3.png"
  }
  else 
  {
    var audio = new Audio("./sound/greenscreen-wow.mp3");
    audio.play()
    alert("Thank You!")
  }
}
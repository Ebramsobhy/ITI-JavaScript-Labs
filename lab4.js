/* 1-	Create a simple photo gallery like the following, and use opacity property to make each image
   fades out gradually (its opacity decreases to 0.3) when mouse is over it, and fades in gradually
   (its opacity increases to 1 gradually) when mouse is a way. */

function changeImageSource(image)
{
  image.style.opacity = "0.3"
}
function changeOpacity(image)
{
  image.style.opacity = "1"
}


/* 2-	Make an array of colors and set of spans and a button with the text change Color and
      Background colors and when click in this button change the color and the background 
      color randomly */

function changeColorRandom()
{
    var colorArray=['red','green','blue','orange']

    var spans= document.getElementsByClassName("span");
    
    for(var i=0 ; i<spans.length;i++)
    {
        var randomNumber=Math.floor(Math.random() *10)  
        spans[i].style.color=colorArray[randomNumber];
    }
}


/* 3-	Make a password input and a button with the text switch beside it when click in the button convert
      the password to be readable (change type for it) */
function myFunction()
 {
    var x = document.getElementById("myInput");
    if (x.type == "password")
     {
      x.type = "text";
    } 
    else
    {
      x.type = "password";
    }
  }

/* 4-	Make a bank of questions say 10 question and two buttons next and previous when click on the next
      navigate to the next question and when click on the previous one go to the previous question. */

var questions = ["What's your name",
    "Whats's the name of your first pet?",
    "How old are you?"]
var buttons = Array.from(document.getElementsByClassName("previous-button next-button"));
console.log(buttons)


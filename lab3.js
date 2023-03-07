// Task 1 -> Make textbox that accepts letters only (Not accept numbers).

(function only_number (){

    var 
        rug = /^([A-Z|a-z]{1})+$/;
     

     var  word= prompt("enter your letters  :");
    if(rug.test(word) == false)
    {   
        while (rug.test(word) == false){
            number = prompt("enter your letters :");
        }
    }
}());

/* Task 2 -> On a page, Make a button (Start clock), that displays clock
 with current time in local format (time only without date) updated every second */ 

var interval;
function Start_clock()
{
    
    interval = setInterval(function()
    {
        var date = new Date();
        console.log( date.toLocaleTimeString())
    },1000); 
}
function Stop_clock()
{
    clearInterval(interval); 
}

/* Task 3 -> Make a link that on its onClick event opens new advertising window after 3 seconds,
 and write long paragraphs on it. Also, make another link that closes this page.
 (Note that the browser may block the opening of the new window;
 make sure that you allow this page to open popups in your browser) */

    var win1;

    function openWin()
    {   
     
        win1=window.open('','_Blank','width=200,height=200,screenX=300,screenY=150');
        win1.document.write("Welcome to ITI Assiut");
    
    }
    function showWin()
    {
        var result = confirm("Are You Sure need open Item");
        if(result == true)
        {
        setTimeout(openWin,2000);
    }
      else{console.log("ok");}
    
}

    function closeWin(){
   
        win1.close();
    
}

/* Task 4 -> Create a login form that redirect to another page when user submit the form,
 and put in this form textbox (user name) and password field (password) [textboxes must have name attribute]
 and button (login). User name text has default text “Enter your user name here”, when user clicks login
 he will be redirected to another page (the page given in the form action), use get method and
 on the other page get the user name (from the browser URL) and write on the page welcome + User Name
 in bold and big font letters */

var url = location.href;
function getUrl()
{
    var arr= url.split("name=",2);
    var name = arr[1].split("&",1);
    return name.toString();
}
getUrl();
var welcom = document.getElementById("welcome").innerHTML = "Welcome" + " "+ getUrl();



/* Task 5 -> Make a new page with long text that is self-scrolling vertically
 (scrolls vertically automatically every half second) */

function scrollPageTo()
{
 scrollBy(100,200)
}

var interval;
function startClock()
{
 interval = setInterval(scrollPageTo,1000);
}
startClock();

function stop()
{
    clearInterval(interval);
}
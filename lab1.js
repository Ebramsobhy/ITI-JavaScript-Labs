/* On your page, show alert for the user that say “Welcome to my site”, then show him prompt 
ask him to enter his name and write to the page  “ welcome + his name”  */

alert("Welcome in my Site..");
var myProm=prompt("Enter Your Name :");

alert(`welcom ${myProm}`);

/* Write a JavaScript function to convert temperatures from Celsius, to Fahrenheit [ Formula : c/5 = (f-32)/9] 
   [where c = temperature in Celsius and f = temperature in Fahrenheit] */

   function celsiusToFahrenhit(a)
{
    console.log(`${a} is ${(a*1.8)+32}`)
}

/* Write javascript function that accepts three numbers and return the gretest one */

function nums(a,b,c)
{

    var max=0;
    if(a>b){
        max=a
    }else{
        max=b;
    }
    if(c>max){
        max=c
    }
   return max
}console.log(nums(9,5,2))

/* Write a javascript program that prints the multiplication table of 5 */

let n = 5;
for (let i = 1; i <= 10; ++i)
console.log(n + " * " + i + " = " + n * i);


/* write json object that contains your information like , name , address , phone , age and track */

var myInfo= {
    "Name":"Ebram", 
    "Address":"Mallawi",
    "Phone":"01203565022",
    "Age":"23",
    "Track":"OS"
}
 console.log(myInfo.Name, myInfo.Address, myInfo.Phone, myInfo.Age, myInfo.Track)
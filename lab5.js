/* 1.	Try for…in, for…of  with an array.
     	What are the differences between for…in, for…of and .foreach().
 */

var students= ["Ebram","Gerges","Keroles"];
      
for(var item in students)
{
    console.log(item);
}

for(var item of students)
{
    console.log(item);
}

const arr = ['Ebram', 'Mohamed', 'Ibrahim'];

arr.forEach(element => console.log(element));

/* 2. Create a student literal object that contains: name, University, faculty, and final grade,
      and use print his data in the console using template literals in this format:
      {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
      And his final grad is {grad}.
 */

var student = {
    "Std_name":"Ebram",
    "Uni_name":"of El-Minya",
    "fac_name":"Tourism and Hotels",
    "grad":"Very Good"
}

console.log(`${student.Std_name} is a student in faculty of ${student.fac_name}
in university ${student.Uni_name} And his final grad is ${student.grad}`)

/* 3. Make a function that take any number of parameters and return the max number of them; */

function getMax(...args)
{
    let maxNumber= args[0];
    for(let i=1;i<args.length;i++)
    {
        if(args[i]>maxNumber)
        {
            maxNumber=args[i];
        }
    }
    return maxNumber;
}

/* 4.	Make a set that holds student names.
	    Try to add repeated names, will the set accept it?
	    Print the set values using spread operator and using for…of.
 */
//                    Print it using spread operator

let students= new Set(['Ebram','Gerges','Keroles','Ebram']);
let animals=["Lion","Sheep","Turtle",...students];

console.log(animals);
                  
//                   Print it using for .. of

for(var item in animals)
{
    console.log(animals[item]);
}

/* 5.Make a function that show alert to user “Welcome to ITI” then show prompt 
    “please enter your faculty name” then another prompt “please enter department ”
     then show the faculty name and department in the screen.
     Note:- this happens when opening the page. (self invoke function)
 */

// alert("Welcome to ITI");
//                            This is self invoke function        
(function only_number (){
   
     var  fac= prompt("please enter your faculty name  : ");
     var dep= prompt("please enter department : ");
     document.write("Faculty: "+ fac +"<br>");
     document.write("department: "+dep +"<br>");
}());

/* 6.Make swap function with two different ways . */

               // first way 
let a =10;
let b=20;
[a,b]=[b,a];

console.log("a = " +a,"b = "+ b);

               //second way 
 let a = 1;
 let b = 2;

 a = a + b; // 3
 b = a - b; // 1
 a = a - b; // 2  

/* 7.Make a function that take two numbers and returns the sum , average and
     multiplication of the numbers (use Array destructing). */
     
function state(a,b)
{
    return [
        a+b,
        (a+b)/2,
        a*b
    ]
}

let [sum,avg,multi]=state(10,5);

console.log(sum)       // 15
console.log(avg)      // 7.5
console.log(multi)   // 50

/* 8.Try spread operator with any array of your implementation. */

let reptiles=["Snake","Crocodile","Anaconda"]
let mamals=["Lion","Cat","Elephant"]
let animal=[...reptiles,...mamals]
console.log(animal)

/* 9.Make a Map that contains the student name as a key, and object that contains an array of his studied
     courses and his grade in each course. The object structure as following: {Grades:[
               {Coursename:”JavaScript”, Grade:”Excellent”},
               {Coursename:”Jquery”, Grade:”Good”},
               {Coursename:”CSS”, Grade:”V.Good”}]}
a.Loop in the Map and display each student along with his grades in all courses.
b.Make a dropdownlist and fill it with the student names (from the Map), and when
  the user selects specific student display his grades in all courses.
 */

let studentMap = new Map();
 select = document.getElementById('students');

studentMap.set("Ebram", {
    Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "Jquery", Grade: "Good" },
        { Coursename: "CSS", Grade: "V.Good" }]
    })


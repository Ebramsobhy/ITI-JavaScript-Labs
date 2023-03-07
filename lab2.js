 /* Task 1 -> Create array that contain some tips about JavaScript
  (Array of 10 strings, each string is tip about JS)
  and show random tip for the user each time he opens the page "Tip of the day" */ 

 var tips = ["1- Don't Smoke ", "1-Be patient ", "3-Listen to learn ", '4-Be smart ']
  
    var randomTip = Math.floor(Math.random()*tips.length);
    document.write('Tip' + ' '+ tips[randomTip])
 
/* Task 2 -> Make a button that display the current date and time in local format on the page */

 var date = new Date();
 var d1 = date.toLocaleTimeString()
 console.log(d1);
 alert(date);

// Task 3 -> Make a function that accepts array and number and return how many times this number found in the array */ 
 var myArray = [24, 22, 19, 19];
 function checkOccurrence(array, element)
  {
    var counter = 0;
    for (item of array.flat())
    {
        if (item == element)
        {
            counter++;
        }
    };
    console.log(counter);
};

checkOccurrence(myArray, 19);

// task 4 -> Make a function that accept array and character then remove this character from the array

var numbers = [1, "go", 3, 3, 3, "kel", 5];
var filteredNumbers;
for(var i=0; i<numbers.length; i++){

 filteredNumbers = numbers.filter(number =>  typeof number=="string");
}
console.log(filteredNumbers);

// Task 5 -> Make function that accepts array and return the maximum number in the array.

 function findLargestNum(arr)
  {
   var largestNum = 0
   for(i = 0; i < arr.length; i++)
   {
       if (arr[i] > largestNum)
       {largestNum = arr[i]}
   }
   return largestNum
}
var final=findLargestNum([1,2,0,4,6,2,19,1,4]);
console.log(final)
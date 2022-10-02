// alert ("Hello World");

// var name = "Owais";
// alert (name);
// var nationality = "Pakistani";
// alert (nationality);


// var weight = 150;
// nWeight = weight + 25;
// alert (nWeight);

// var length = 25;
// var nLength = 20;
// var totalLength = length + nLength;
// alert (totalLength);

// var x = 10;
// var y = x++ + ++x - x + x++ - ++x + x; 
// //      10  +  12 - 12 + 12 - 14  + 14 = 22
// var z = alert (y);

// var x = "Enter Value";
// var y = "Your value is: "

// var a = prompt ("Enter your name", "your name is ");
// alert (a); 

// var a = prompt(Number("Enter your age","Your age is "));
// alert(a);

/*
String me concatenation sirf + operator me hota hai baqi me nahi 

*/
// var a = +prompt ("Enter your value","Your value is:")
// var b = a + 10;
// console.log(b);

// let a = 5; 
// let b = a++;
// console.log(a);
// console.log(b);

// let a = "6" + 2;
// console.log(typeof a);
// console.log(a);

// let a = 6 + null; 
// console.log(typeof a);
// console.log(a);

// var cities = ["Karachi", "Hyderabad", "Sukkur", "Haripur", "Lahore"];
// // console.log(cities[1]);
// let a = prompt("From which city you are","Welcome to " + [cities[0]] )


// var age = +prompt("Enter Your age");
// var gender = prompt ("Enter your Gender");
// if (age > 18 && gender == "male"){
//     alert("You are allowed to Ride");
// }
// else{
//     alert("your are not allowed");
// }

// var percent = +prompt("Enter your Percent");
// if (percent >= 80 && percent <= 100){
//     alert("A+")
// }
// else if (percent >= 60 && percent < 80){
//     alert("A")
// }
// else if (percent >= 50 && percent < 60){
//     alert("B")
// }
// else if (percent >= 40 && percent < 50){
//     alert("C")
// }
// else if (percent >= 0 && percent < 40){
//     alert("Fail")
// }
// else{
//     alert("Please Enter correct percentage")
// }

// var names = []

// names[0] = "Owais"
// names[1] = "Ashraf"
// names[2] = "Zayan"
// console.log(names);

// names.pop(); //remove last index
// console.log(names); 

// names.push("Hadi"); // add last index
// console.log(names); 

// names.shift(); // remove first index
// console.log(names); 

// names.unshift("Salman"); // add first index 
// console.log(names);

// names.splice(1,0,"Rizwan");

// console.log(names);

// var copyNames = names.slice(1,3); 
// /* slice k first argument me index batana hai k kaha
// se copy krna hai aur second argument me kitne index copy krne hain 
// agar 4 hai to index 0 ko 1 se count kre ga aur jo pehla argument dya hai us k 
// bad se copy kr de ga
// for example 
// ["Salman","Rizwan","Owais","Zayan"] 
// ab agr (1,3) hai to yeah rizwan se copy krna shuru 
// kre ga aur owais tk copy kre ga
// */

// console.log(names);
// console.log(copyNames);

// let arr = ["cat","dog","tiger","lion"];
// console.log(arr[2]);

// var arr1 = Array("Ali","Asad","Sadaf");
// console.log(arr1[2]); 

// arr1[3] = "Khan";
// console.log(arr1);


// let x;
// for (x = 1 ; x <= 10 ; x++){
//     console.log("2 x " + x + " = " + 2*x)
// }

// for (var i = 0; i < 5; i++){
//     for (var j = 0; j < 3; j++){
//         document.write("Pakistan"+"<br>")
//     }
// }

// var firstName = ["Ali","Asad","Saad"];
// var lastName = ["Khan","Junejo"];

// for(var i = 0; i < firstName.length; i++){
//     for(var j = 0; j < lastName.length; j++){
//         console.log(firstName[i] + " " + lastName[j])
//     }
// }
/*for loop me yeah hota hai k i me 0 hai
kya 0 chota hai 10 se to yeah block k andar chale jayega
ab dekhe ga k j me 0 hai 
kya 0 chota hai 0 se nh to yeah j k block se bahar ayega
aur i k block ko print krega 
ab i me 1 hai aur 1 chota hai 10 se to j me jayega
j = 0 k kya 0 chota hai 1 se to 1 * print krega aur line break
ab i me 2 hai 
j = 0 kya 0 chota hai 2 se ha 
* phr dekhega k kya 1 chota hai 2 se to ek aur star (**)
phr line break aur isi trha aage

*/
// Star Pattern ************************************

// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// **************************************************

// var word = prompt("Enter your word");
// var check = "";
// for(var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }
// if(word === check){
//     console.log(word + " is palindrome word")
// }


// var fName = "ghous";
// fName = fName.toUpperCase();

// console.log(fName);

// var lastName = "Owais Ashraf"

// console.log(lastName.indexOf("A"))


// var city = Array ("Karachi", "Islamabad","Sukkur");
// var myCity = city.slice(0,2);
// alert(myCity);

// var city = prompt("Enter your City");
// var firstChar = city.slice(0,1);
// var lastChar = city.slice(1);
// firstChar = firstChar.toUpperCase();
// lastChar = lastChar.toLowerCase();
// var fullCity = firstChar + lastChar;
// alert(fullCity);

// var month = prompt("Enter Month");
// var shortMonth = month.slice(0,3)
// var firstChar = shortMonth.slice(0,1);
// var lastChar = shortMonth.slice(1);
// firstChar = firstChar.toUpperCase();
// lastChar = lastChar.toLowerCase();
// var fullCity = firstChar + lastChar;
// alert(fullCity);


// var text = "The New Yorker magazine doesnt allow the phrase 'World War II.' They say it should";
// var indNum = text.indexOf('World War II');
// var firstText = text.slice(0,indNum);
// var repText = 'The Second World War';
// var thirdText = text.slice(indNum+12);
// console.log(firstText + repText + thirdText);


// var text = prompt("Enter your word");
// text = text.replace("World War II","The Second World War");
// alert(text);

// var name = "Zia";
// function printName(){
//     var lastName = "Khan"
//     console.log(lastName);
// }
// printName();
// console.log(name);

 
// for (i = 1; i<5; i++){
//     console.log(i);
//     for (var j =1; j<3; j++){
//         console.log(j);
//     }
//     if(i==3){
//         break;
//     }
// }

// var num1 = 16;
// var num3 = 4;
// var num2 = "1";

// alert(num1 + num2 + num3);



/*   Function   */

/* Jab bh ham function se value return me le ge us 
ko lazmi kisi variable me store karaye ge */

// function addition(b,a){
    //     return("Hello");
    // } 
    // console.log(addition(2,3));
    
    // var a = "Ali";
        
    // function foo(){
    //    var a = "Asad";
    // }    
    // foo();
    // console.log(a);
// ********************************************

// var a = "Ali";

// function foo(){
    //     var a = "Asad";
    // }
    // console.log(a);
    
    
    
    // function cal(num1,opr,num2){
        //     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
//     else{
//         return "Incorrect Operator"
//     }
// }

// var result1 = cal(2, "+", 5); 
// var result2 = cal(5, "-", 5); 
// var result3 = cal(2, "*", 5); 
// var result4 = cal(10, "/", 5); 
// var result5 = cal(2, "$", 5); 




// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// function abc(a,b){
    //     return a + b 
    // }
    // console.log(abc(1))

/* not defined and undefined me farq hai
   undefined matlab function define to hai but value kuch nh hai 
  not define ka matlab hai k define hi nahi kiya hai
 */

  
// }
// console.log(abc(1,5)); 


// Switch *********************************************

// var name1 = prompt ("please Enter Name");
// switch(name1){
//     case "Owais":
//         alert("Hello Owais")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//         alert("Hello")
// }


// While Loop ******************************************

// var i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// Reverse Star **********************************
// for(let i = 5; i>=1; i--){
//     for(let s = 1; s<=5; s++){
//         document.write(" ")
//     }
//         for(let j = 1; j<=i; j++){
//             document.write("*");
//         }
//     document.write("<br>")
// }

// forward Star *************************************

// let a = prompt("Enter a number to print star")
// for (let i = 0; i<=a; i++){
//     for (let j = 0; j<i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// do while***************************************************

// var c = 0;
// do{
//     console.log(c);
//     c++;
// }
// while(c<10);

// Functions *************************************************

// function adds(x,y){
//     return x+y;
// }
// alert(adds(2,3))

//Two way of defining Array ******************************************************* */


// var fruit = Array ("Apple", "Banana", "Mango")
// fruit.push ("Cherry")
// console.log(fruit)

// var fruit1 = ["Pineapple", "Pomegrante", "Papaya"]

// console.log(fruit1)

// *********************************************************************


// function a_100(a,b){
//     if(a == 100 || b == 100 || a+b == 100){
//         return console.log("true");
//     }
//     else{
//         return console.log("false")
//     }
// }   
// a_100(100,20);
// 
// // Date ********************************************************************
// 
// var a = new Date();
// let x = a.getDate();
// let y = a.getMonth();
// let z = a.getFullYear();
// 
// console.log(x+" / "+ y+" / "+z);



// // how to get element through HTML ****************************************

// function getName(){
//     var name = document.getElementById("name");
//     console.log(name.value)

//     name.value = "";
// }

function setValue(){
    var name = document.getElementById("name");
    name.value = "Your Name";

    var para = document.getElementById("para");
    para.innerHTML = "Hello this is default para" //<p> k tag me value kam nahi kregi innerHTML hi likhna parega
}
setValue();

// html me anchor k tag me # ka tag refresh kr deta hai page ko


console.log("===============Take an array of numbers and return the sum==============\n")
let numArray = [11,23,45,78,21];
function getArraySum(array)
{
    let sum =0;
    let average = 0;
    let counter =0;
    for (let i=0;i<array.length;i++) //looping through the array
    {
        counter++;
        sum += array[i];
        average = sum/counter; //adding each array element to the sum
    }
    return sum; //returns the total sum
}
console.log(`Total sum of the array elements is ${getArraySum(numArray)}`);
console.log("===============Take an array of numbers and return the average==============\n")
function getArrayAverage(array)
{
    let sum =0;
    let average = 0;
    let counter =0;
    for (let i=0;i<array.length;i++) //looping through the array
    {
        counter++;
        sum += array[i];
    }
    average = sum/counter; //adding each array element to the sum
    return average; //returns the total sum
}
console.log(`Total Average of the array elements is ${getArrayAverage(numArray)}`);
console.log("===============Take an array of strings and return the longest string.==============\n")

const stringArray = ['Hello', 'World', 'Introduction', 'to', 'Javascript', 'Module'];
function getLongestString(array)
{
    let str ="";
    for (let i=0; i< array.length; i++){ //looping through the array length 
        if( array[i].length > str.length)
        {
            str = array[i]; //adding the element to temporary string if the currrent element is longer
        }
    }
    return str;
}
console.log(`Longest string in the array is ${getLongestString(stringArray)}`);
console.log("===============Take an array of strings and number  and return an array of the strings that are longer than the numberr==============\n")
const mixedArray = [['say', 'hello', 'in', 'the', 'morning', 'Helooooooooooo', 'parseeeeee' ], 3];

function getStringsLongerThanNumber(array){
let stringArray1 =[]; // New array for the final strings
let num1 = array[1]; //getting the number value from array
for(let i=0; i< array[0].length;i++)
{
    if(array[0][i].length > num1) //checking theelements length is greater than the number
    {
        stringArray1.push(array[0][i]); //pushing it to the new arrray
    }
}
return stringArray1;
}

console.log(JSON.stringify(getStringsLongerThanNumber(mixedArray))); //JSON strigify is used to get the array elements in string format

console.log("=========================Print 1 to n with recusrion==========================");

let num2 = 50;
let counter =1; //counter is added to start printinf from 1
printnum(num2);
function printnum(n){
    if (counter <= n)  //checking the num value is greater than 1 to print
    {
        console.log(counter);
        counter++;
        printnum(n) //calling the function n times recursively

    }
}
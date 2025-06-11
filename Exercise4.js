 //Write even–odd checker

function even_odd (num){
    if (num % 2 == 0){
        return "number is even ";
    }
    else {
         return "number is odd";
    }
}

console.log(even_odd(22));
console.log(even_odd(0));
console.log(even_odd(25));

/*check grades */
function checkGrades (grades){
 if (grades >= 90 && grades <=100){
    return "A";

 }
 else if(grades >= 80 && grades <90){
    return "B";
 }
else if(grades >= 70 && grades <80){
    return "C";
 }
 else {
    return "D";
 }
}
console.log(checkGrades(88));

/*Day-of-week scheduler using switch.*/
function checkDay(Day){

switch (Day){
    case 1:
        return "MONDAY";
    case 2:
        return "TUESDAY";
    case 3:
        return "WEDNESDAY";   
    case 4:
        return "THURSDAY" ;
    case 5:
        return "FRIDAY" ;
    case 6:
        return "SATURDAY";  
    case 7:
        return "SUNDAY";
    default:
      return "INVALID DAY";    

}
}
console.log(checkDay(7));
let marks= prompt("enter the marks");

if( marks>=80){
    console.log(marks,"Your Grade is 'A'");
}else if(marks>=70 && marks<=89){
    console.log(marks,"Your Grade is 'B'");
}else if(marks>=60 && marks<=69){
    console.log(marks,"Your Grade is 'C'");
}else if(marks>=50 && marks <=59){
    console.log(marks,"Your Grade is 'D'");
}else{
    console.log(marks,"Your Grade is 'E'");
}
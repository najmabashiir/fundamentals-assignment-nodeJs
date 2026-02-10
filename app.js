let Myarry=[{
    name:"Eng Najma Bashiir Ali",

}]
function addobject(){
    Myarry.push({
        name:"Eng Ayuub Abdalla"
    })
    console.log(Myarry);

}
addobject()


function removeobject(){
    Myarry.pop()
    console.log(Myarry);
}
removeobject()


// adding two numbers
function add(num1,num2){
    const result= num1+num2;
    console.log(`the sum of ${num1} and ${num2} is ${result}`);
}

add(5,10)

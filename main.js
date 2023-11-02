
// here output=input id

//dispaly
function display(num){
    output.value +=num;  //id.value :to get value   

}

//clear
function clearAll(){
    output.value=''
}

// equal
function evaluateExp(){
    output.value=eval(output.value)   //eval is a predefined function 



}
//remove last
function removeLast(){
    currentExp=output.value  
    output.value=currentExp.slice(0,-1)

}


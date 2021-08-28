function add(number1,number2) {
    return (number1 + number2);   
}

function head(...array){
    if(array.length>0){
        return array[0];
    }
    return null;
}



module.exports = {add,head};


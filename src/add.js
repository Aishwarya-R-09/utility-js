function add(a,b) {
    return (a + b);   
}

function head(...array){
    if(array.length>0){
        return array[0];
    }
    return null;
}



module.exports = {add,head};


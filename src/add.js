function add(...array) {
    return array.reduce((total, num) => total+num, 0);   
}

function head(...array){
    if(array.length>0){
        return array[0];
    }
    return null;
}

function tail(...array){
    if(array.length>0){
        return array.slice(1);
    }
    return null;
}

function min(...array){
    return array.reduce(function (num1, num2) {
        return ( num1 < num2 ? num1 : num2 );
    });
}

function max(...array){
    return array.reduce(function (num1, num2) {
        return ( num1 > num2 ? num1 : num2 );
    });
}

function filter(array, fun){
    let new_arr = [];
    array.map(ele => {
        if(fun(ele))
            new_arr.push(ele);
    })
    return new_arr;
}



module.exports = {add,head,tail,min,max,filter};


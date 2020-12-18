let array = [3, 5, 22, 46];

console.log(array.reduce(function(total, elements){
    return total + elements;
}));
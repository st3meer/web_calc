var inputstring = "";
let result = NaN;
var previnput = 0.0;
var nowinput = 0.0;
function numclick(num){
    inputstring += num;
    document.getElementById("display").value = inputstring;
}
function symbolclick(symbol){
    previnput = nowinput;
    
    nowinput = parseFloat(inputstring);
    if (isNaN(result)){
        result = nowinput;
    }
    inputstring = "";
    switch (symbol){
        case "+":
            result += nowinput;
            document.getElementById("display").value = result;
            break;
        case "-":
            result -= nowinput;
            document.getElementById("display").value = result;
            break;
        case "*":
            
            break;
        case "/":
            
            break;
        case "=":
            document.getElementById("display").value = result;
            break;
    }
}
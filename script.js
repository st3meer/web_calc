var inputstring = "";
var result = 0.0;
function numclick(num){
    inputstring += num;
    document.getElementById("display").value = inputstring;
}
function symbolclick(symbol){
    switch (symbol){
        case "+":
            result += parseFloat(inputstring);
            console.log(result);
            inputstring = "";
            document.getElementById("display").value = 0;
            break;
        case "-":
            result -= parseFloat(inputstring);
            inputstring = "";
            document.getElementById("display").value = 0;
            break;
        case "*":
            result *= parseFloat(inputstring);
            inputstring = "";
            document.getElementById("display").value = 0;
            break;
        case "/":
            result /= parseFloat(inputstring);
            inputstring = "";
            document.getElementById("display").value = 0;
            break;
        case "=":
            
            document.getElementById("display").value = result;
            console.log(result);
            break;
    }
}
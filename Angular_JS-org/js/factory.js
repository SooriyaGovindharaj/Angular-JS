myFactory.factory("factoryName", function(){
    var selection=["add", "sub", "mul", "div"];
    var calculate = function(first,second, symbol){
        if(symbol=="add"){
            return ("Addition: "+(first+second));
        }
        else if(symbol=="sub"){
             return ("Subtraction: "+(first-second));
        }
        else if(symbol=="mul"){
             return ("Multiplication: "+(first*second));
        }
        else {
             return ("Division: "+(first/second));
        }
    }
    return{
          selection: selection,
          calculate: calculate
    };
});
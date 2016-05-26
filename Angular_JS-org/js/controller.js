myApp.controller("mathController", function(){
    this.first=10;
    this.second=5;
    this.default="add";
    this.flag=0;
    this.operation=["add", "sub", "mul", "div"];
    this.total = function(symbol){
        this.flag=1;
        if(symbol=="add"){
            return ("Addition: "+(this.first+this.second));
        }
        else if(symbol=="sub"){
             return ("Subtraction: "+(this.first-this.second));
        }
        else if(symbol=="mul"){
             return ("Multiplication: "+(this.first*this.second));
        }
        else {
             return ("Division: "+(this.first/this.second));
        }
    };
    this.cal = function(){
        alert("Calculated successfully")
    };
});

/*For controller factory */
myFactoryApp.controller("factoryController", ["factoryName",function(factoryName){
    this.first=10;
    this.second=5;
    this.default="add";
    this.flag=0;
    this.operation=factoryName.selection;
    this.total = function(symbol){
        this.flag=1;
        return factoryName.calculate(this.first, this.second, this.symbol);
    };
    this.cal = function(){
        alert("Calculated successfully")
    };
}]);
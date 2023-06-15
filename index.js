//input-unit
//output-unit
//number

//reset
//submit


function displayResult(inputUnit,outputUnit,number,result){
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;
    var number = Number(document.getElementById("number").value);
    var result = document.getElementById("result").innerHTML ;

    // console.log(inputUnit);
    // console.log(outputUnit);
    // console.log(number);

    if(inputUnit == "Millimeter" && (number != 0 && number >0)){

        if(outputUnit == "Millimeter"){
            number2 = number * 1 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = number / 100;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 1000;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 1000000;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 304.8;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 25.4;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 1609344;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 914.4;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }
    


    // millimeter ends

    //centimeter

    else if(inputUnit == "Centimeter" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = number / 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 100;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 100000;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 30.48;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 2.54;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 160934.40;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 91.44;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }





    //decimeter
    
    else if(inputUnit == "Decimeter" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number * 100;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 10000;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 3.048;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.254;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 16093.440;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 9.144;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }


    //meter

    else if(inputUnit == "Decimeter" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.001;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.01;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = number * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 1000;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 0.3048;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.02;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 1609.3440;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 0.9144;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }


    // kilometers

    else if(inputUnit == "Kilometer" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.000001;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.00001;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = number / 0.0001;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 0.001 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 0.0003048;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.0000254;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 1.6093440;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 0.0009144;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }


    // Foot begins

    else if(inputUnit == "Foot" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.0032;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.032;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = (number / 0.032 ) * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 3.2;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 3280.84 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.083;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 5280;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 3;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }



    //Inch begins

    
    else if(inputUnit == "Inch" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.039;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.39;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = (number / 0.39 ) * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 39.37;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 39,370.08  ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number * 12 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 63360;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 36;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }

    //Mile begins

    else if(inputUnit == "Mile" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.000000621371192;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.00000621371;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = (number / 0.00000621371 ) * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 0.000621371;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 0.621371 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 0.000189394;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.0000157828;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number / 0.000568182;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }



    // Yard begins

    else if(inputUnit == "Yard" && (number != 0 && number >0)){
        if(outputUnit == "Millimeter"){
            number2 = number / 0.00109361;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
        else if(outputUnit == "Centimeter"){
            number2 = number / 0.0109361;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Decimeter"){
            number2 = (number / 0.0109361 ) * 10;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Meter"){
            number2 = number / 1.093;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Kilometer"){
            number2 = number / 1093.6 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Foot"){
            number2 = number / 0.333333;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Inch"){
            number2 = number / 0.0277778;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Mile"){
            number2 = number / 1760 ;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }

        else if(outputUnit == "Yard"){
            number2 = number * 1;
            document.getElementById("Measurements").innerHTML = "Result" ;
            document.getElementById("result").innerHTML =number + " "  + inputUnit + " = " + number2 + " " + outputUnit ;
        }
    }
    else{
        alert("enter positive number only.....");
    }

    

    

}





// submit.addEventListener("onClick",(number,inputUnit,outputUnit,result)=>{


// var Millimeter = document.getElementsByClassName("Millimeter").selected  ;







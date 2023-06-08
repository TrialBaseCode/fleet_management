# Javascript Notes

## Why JavaScript? How Website Work

<b>Why javascript</b><br>

javascript improves the user experience of the <span style="color:red"> web page </span> by converting it from a static page into <span style="color:yellow"> intractive </span> one.<br>
            or <br>
    
Javascript adds behaviours to web pages.

<b>How Website FRONT-END WORKS(client side )</b><br>

HTML --> CSS/CSS3 -->Javacsript

## VALUES AND VARIABLES

var myName = "New work done";<br>
console.log(myName);

- Event we take come browsers we can see the value.

        var myName = "sonu";
        where,
        var --> Variable(key)
        myName --> Variable Name
        sonu --> Value

- Naming Variables: Rules <br>

        var myName = "sonu"
        var myAge = 20;
        console.log(myName);


Rules
1. "myName" it is Camelcase which used react, etc
2. The first character must be a letter or an underscore(_) or an dollar($). You can't use a number as the first character.<br>

        var 1myAge = 26
        console.log(1myAge);
        //Error Invalud or Unexpected token
3. The rest of the varable name came can include any letter, any number , or the underscore. Cant's use any other characters, including spaces.

        var _my23Age = 26 --> give value<br>
        var myval jk = 26 --> give error

4. Variable names ara case sensitive.

5. No limit to the length of the varable name. 

6. You can't use one of javascript's reserved words as a variable name.

        var var = 20; --> give errr

<br>Practice

    var _myName = "vinod"; --> value
    var _1my__Name = "bahadur"; --> value
    var 1myName = "thapa"; --> error
    var $myName = "thapa technical"; --> value
    
    var myNam% = "thapa technical";
    console.log(myNam%); --. error


# DATA TYPES IN JAVASCRIPT

- undefined: typeof instance == "undefined"
- Boolean: typeof instance == "boolean"
- Number: typeof instance == "number"
- String: typeof instance == "string"
- BigInt: typeof instance == "bigint"
- Symbol: typeof instance == "symbol"

        var myName = "vinod thapa";
        console.log(myName);  --> value


- typeof operater

        console.log(typeof(myName));


- Note

        10 + "20" --> 1020
        9 - "5"  -- 4 // also bug
        "Java" + "Script" --> JavaScript
        "" + "" --> ""
        "" + 0 --> 0
        "vinod" - "thapa" -->  NaN
        true + true --> 2
        true + false -->1
        false + true --> 1
        false - true --> -1 

        //In Java script "1" represented true and  "0" represented false.

# Null vs undefined

        var iAmUseless = null;
        console.log(iAmUseless);  --> Null
        console.log(typeof(iAmUseless));
        
        //2nd javascript

        var iAmStandBy;
         console.log(iAmStandBy);  --> undefined
 
 - what is NaN ?

// Man is a property of the global object. In others words, it is a variable in global scope. <br> The initial value of NAN is Not-A-Number

        
        var myPhoneNumber = 9876543210;

        var myName = "thapa technical";

        console.log(myPhoneNumber);

        console.log(myName);

        console.log(isNaN(myPhoneNumber)); --> false

        console.log(isNaN(myName)); --> true

        if(isNan(myName)){
                console.log("Plz enter valid ph");
        }


- Note
     
        NaN === NaN; 
        // These statement is false because NaN is nither datatype nor value.

        Number.NaN === NaN;
        isNaN(NaN);
        isNaN(Nuber.NaN);
        Nuber.isNaN(NaN);

# EXPRESSION AND OPERATORS

- Assignment operator
- Arithmetic operator
- Comparison operator
- Logical operators
- String operators
- Conditional (ternary) Operator


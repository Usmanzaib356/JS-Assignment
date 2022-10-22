var kg_value = prompt("Put In Your Kg Value");
var g_value =  prompt("How Many Gram Of Chicken Did You Want");
var cnvrt_kg = parseInt(kg_value);
var cnvrt_g = parseInt (g_value);
var g_price = cnvrt_kg / 1000 ;
var total1 = cnvrt_g * g_price;

var receive_price = prompt("CHICKEN 1 Kg 500 HOW MUCH DO YOU NEED, TELL ME THE MONEY");
var cstmr_price = parseInt (receive_price);
var usr_price = cstmr_price / 500;
var total2 = usr_price * 1000;


function myfunc1(){
    document.write("<h1>FIRST AND SECOND PROMPT RESULT</h1>")
    document.write("<br>YOUR CHICKEN GRAM PRICE <br><br><b>PRICE:</b>",total1,)
    document.write("<br><br><hr><h1>THIRD PROMPT RESULT</h1>")
    document.write("<br>OR TAKE YOUR CHIKEN <br><br> <b>GRAM:</b>",total2)
}
  myfunc1()
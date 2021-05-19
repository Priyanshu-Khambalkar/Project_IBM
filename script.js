function compute() {
    
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("p").value);
    var rate = parseFloat(document.getElementById("r").value);
    var years = parseInt(document.getElementById("n").value);

    var si = (principal * rate * years)/100;

    var added_year = new Date().getFullYear() + years;

    //Create the Interest text
    document.getElementById("demo").innerHTML = "If you deposit <mark>" + principal + "</mark><br/>" +
        "at an interest rate of <mark>" + rate + "%</mark><br/>" +
        "You will receive an amount of <mark>" + si + "</mark><br/> " +
        "in the year <mark>" + added_year +"</mark>";

}
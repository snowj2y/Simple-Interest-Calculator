function compute()
{
    
    var principal = document.getElementById("principal").value;
    var principalFocus = document.getElementById("principal");
    if(principal == 0 || principal < 0){
        alert("Enter a positive number");
        principalFocus.focus();
    }
    else{
        var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var resultFinal = "If You deposit <mark>" + principal + "</mark>\nat an interest of <mark>" + rate + "</mark>%\nYou will receive an amount of <mark>" + interest + "</mark>,\nIn the year <mark>" + year + "</mark>";
    document.getElementById("result").innerHTML = resultFinal;
    }
    
}
        
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

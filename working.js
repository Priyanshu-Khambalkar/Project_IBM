function myfunction(){

    let p = document.getElementById('p').value;

    let r = document.getElementById('r').value;

    let t = document.getElementById('t').value;

 let si = (p * r * t)/100;
 
 document.getElementById("demo").innerHTML = "thr interest is: " +si;
}
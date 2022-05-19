var plus = 0;
var soustava=0;
var pozice=0;
var a=0;
const div_abc = document.querySelector(".abc")
document.getElementById("=").onclick = zmackl_rovna_se
document.getElementById("C").onclick = zmackl_C
document.querySelector("#submitsoustava").onclick = zmackl_submitsoustava
document.querySelector("#mazat").onclick = zmackl_mazat
var priklad = [];
function zmackl_tlacitko(button){
	console.log(button)
    priklad.push(button.id);
    document.querySelector(".abc").innerHTML = priklad.join("");
}
function zmackl_C(){
    priklad = [];
    document.querySelector(".abc").innerHTML = priklad.join("");
}
function zmackl_mazat() {
    if(priklad.length == 1) {
        priklad.pop()
        document.querySelector(".abc").innerHTML = "</br>"
    }
    else{
        priklad.pop()
        document.querySelector(".abc").innerHTML = priklad.join("");
    }
}
function zmackl_rovna_se(){

    let n=0;
    let krok=0;
    let x=0;
    for (pozice = znamenko-1; pozice >= 0; pozice--, n++){
        krok = priklad[pozice];
        x += krok*(soustava**n);
    }
    let y=0;
    krok = 0;
    n=0;
    for (pozice = priklad.length-1; pozice > znamenko; pozice--, n++){
        krok = priklad[pozice];
        y += krok*(soustava**n);
    }
    if(priklad.includes("+")==true) {
        var z=x+y
    } else if(priklad.includes("-")==true) {
        var z=x-y
    } else if(priklad.includes("÷")==true) {
        var z=x/y
    } else if(priklad.includes("*")==true) {
        var z=x*y
    }     
    priklad.push("=")
    var znamenka = ["start"]
    for(letter in priklad){
        if(priklad[letter] == "+") {
            znamenka.push(letter)
            var znamenko = priklad.indexOf("+")
        }
        if(priklad[letter] == "-") {
            znamenka.push(letter)
            var znamenko = priklad.indexOf("-")
        }
        if(priklad[letter] == "*") {
            znamenka.push(letter)
            var znamenko = priklad.indexOf("*")
        }
        if(priklad[letter] == "÷") {
            znamenka.push(letter)
            var znamenko = priklad.indexOf("÷")
        }
        if(priklad[letter] == "="){
            znamenka.push(letter)
        }
        console.log(letter)
        
    }
    console.log(znamenka)
    priklad.push(z.toString(soustava))
    document.querySelector(".abc").innerHTML = priklad.join("");
    priklad = [];
}
function zmackl_submitsoustava(){
    soustava = document.getElementById("soustava").value;
    //document.getElementById("soustava").value = ''
    if (isNaN(soustava)){
        alert("Enter a valid number")
    }
    else{
        document.getElementById("showsoustava").innerHTML = "Soustava: " + soustava;
    }
	let puzzle = "<tr>"
    for (let i = 0; i < soustava; i++){
        if(i%4==0){
            puzzle += "</tr>"+"<tr>"+"<td style=\"width:25%\">"+"<button type=\"button\" class=\"button\" style=\"width:100%\" id="+i+" onclick=\"zmackl_tlacitko(this)\">"+i+"</button>"+"</td>"
        }
        else{
            puzzle += "<td style=\"width:25%\">"+"<button type=\"button\" class=\"button\" style=\"width:100%\" id="+i+" onclick=\"zmackl_tlacitko(this)\">"+i+"</button>"+"</td>"  
        }
    }
    document.querySelector(".buttons").innerHTML = puzzle+"<tr><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"+\" onclick=\"zmackl_tlacitko(this)\">+</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"-\" onclick=\"zmackl_tlacitko(this)\">-</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"*\" onclick=\"zmackl_tlacitko(this)\">*</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"÷\" onclick=\"zmackl_tlacitko(this)\">÷</button></td></tr>"+"</tr>"
    }
console.clear()
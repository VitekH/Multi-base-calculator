var plus = 0;
var soustava=0;
var pozice=0;
var a=0;
const div_abc = document.querySelector(".abc")
document.getElementById("=").onclick = zmackl_rovna_se
document.querySelector("#submitsoustava").onclick = zmackl_submitsoustava
var priklad = [];
function zmackl_tlacitko(button){
	console.log(button)
    priklad.push(button.id);
}
function zmackl_rovna_se(){
    plus = priklad.indexOf("+");
    let n=0;
    let krok=0;
    let x=0;
    for (pozice = plus-1; pozice >= 0; pozice--, n++){
        krok = priklad[pozice];
        x += krok*(soustava**n);
    }
    let y=0;
    krok = 0;
    n=0;
    for (pozice = priklad.length-1; pozice > plus; pozice--, n++){
        krok = priklad[pozice];
        y += krok*(soustava**n);
    }
    z=x+y
	alert(z.toString(soustava));
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
	let puzzle = ""
	for (let i = 0; i < soustava; i++){
	puzzle += "<button type=\"button\" id="+i+" onclick=\"zmackl_tlacitko(this)\">"+i+"</button>"
	}
	document.querySelector(".buttons").innerHTML = puzzle+"<button type=\"button\" id=\"+\" onclick=\"zmackl_tlacitko(this)\">+</button>"
	
}

console.clear()
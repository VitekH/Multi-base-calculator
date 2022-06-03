var pismena_soustava = ['0','1','2','3','4','5','6','7','8','9','a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
	console.log(pismena_soustava.indexOf(button.id))
    priklad.push(pismena_soustava.indexOf(button.id));
    document.querySelector(".abc").innerHTML = priklad.join("");
}
function zmackl_znamenko(button){
    if(priklad.length == 0){
        alert("Nejdrive cislo")
    }
    else{
        if ("+-*÷".includes(priklad[priklad.length-1])){
            priklad.pop()
        }
        priklad.push(button.id)
        document.querySelector(".abc").innerHTML = priklad.join("");
    }
    
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
    priklad.push("=")
    var znamenka = [-1];
    var mezivysledek = 0;
    for(let j = 0; j < priklad.length; j++){
        if(priklad[j] == "+") {
            znamenka.push(j)
        }
        if(priklad[j] == "-") {
            znamenka.push(j)
        }
        if(priklad[j] == "*") {
            znamenka.push(j)
        }
        if(priklad[j] == "÷") {
            znamenka.push(j)
        }
        if(priklad[j] == "="){
            znamenka.push(j)
        }
        console.log(j)
    }
    //znamenka.push(priklad.length)
    console.log(priklad)
    console.log(znamenka)
// priklad: 1,1,+,1,1,=
// znamenka: -1,2,5
//(5-2)-1
    let cinitel = 0;
    var vysledek = [];
    for(var w = 0; w < znamenka.length-1; w++){
        
        var prvni = znamenka[w];
        var druhy = znamenka[w+1];
        var u = 1;
        let q = 0;
        for(var u = 1; u <= druhy-prvni-1; u++){
            let w = priklad[druhy-u].toString();
            cinitel +=(pismena_soustava.indexOf(w))*(soustava**q)
            q++
        }
        if(prvni == -1){
            vysledek.push(cinitel)
        }
        else{
            priklad[prvni]
            switch (priklad[prvni]) {
                case "+":
                case "-":
                    vysledek.push(priklad[prvni])
                    vysledek.push(cinitel)
                    break;
                case "*":
                    vysledek[vysledek.length-1] *= cinitel;
                    break;
                case "÷":
                    vysledek[vysledek.length-1] /= cinitel;
                    break;
            
                default:
                    //chyba
                    break;
            }
        }
        cinitel = 0;
    }
    mezivysledek=vysledek[0]
    for(var w = 1; w < vysledek.length; w++){
        switch (vysledek[w]) {
            case "+":
                mezivysledek+=vysledek[++w]     
                break;
            case "-":
                mezivysledek-=vysledek[++w]
                break;

            default:
                //error
                break;
        }
    }
    
    //console.log(cinitel.toString(soustava))
    serazeni = [];
    console.log(mezivysledek)
    let p = 0;
    if (mezivysledek > 0){
        while(mezivysledek != 0){
            p = mezivysledek % soustava
            serazeni.push(p)
            mezivysledek = (mezivysledek - p)/soustava
        }
    }
    priklad.push((serazeni.reverse().join('')))
    document.querySelector(".abc").innerHTML = priklad.join("");
    priklad = [];

}

function zmackl_submitsoustava(){
    soustava = document.getElementById("soustava").value;
    if (isNaN(soustava)){
        alert("Enter a valid number")
    }
    else{
        document.getElementById("showsoustava").innerHTML = "Soustava: " + soustava;
    }
	let puzzle = "<tr>"
    for (let i = 0; i < soustava; i++){
        if(i%4==0){
            puzzle += "</tr>"+"<tr>"+"<td style=\"width:25%\">"+"<button type=\"button\" class=\"button\" style=\"width:100%\" id="+pismena_soustava[i]+" onclick=\"zmackl_tlacitko(this)\">"+pismena_soustava[i]+"</button>"+"</td>"
        }
        else{
            puzzle += "<td style=\"width:25%\">"+"<button type=\"button\" class=\"button\" style=\"width:100%\" id="+pismena_soustava[i]+" onclick=\"zmackl_tlacitko(this)\">"+pismena_soustava[i]+"</button>"+"</td>"  
        }
    }
    document.querySelector(".buttons").innerHTML = puzzle+"<tr><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"+\" onclick=\"zmackl_znamenko(this)\">+</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"-\" onclick=\"zmackl_znamenko(this)\">-</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"*\" onclick=\"zmackl_znamenko(this)\">*</button></td><td style=\"width:25%\"><button type=\"button\" class=\"button\" style=\"width:100%\" id=\"÷\" onclick=\"zmackl_znamenko(this)\">÷</button></td></tr>"+"</tr>"
    }
console.clear()
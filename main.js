let study=document.getElementById('study');
let stock=document.getElementById('stock');
let music=document.getElementById('music');
let etc=document.getElementById("etc");
study.addEventListener("mouseover", function(){
        document.getElementById("if_stock").style.display="none";
        document.getElementById("if_stock").classList.remove("appear");
        document.getElementById("if_music").style.display="none";
        document.getElementById("if_music").classList.remove("appear");
    
        document.getElementById("if_study").style.display="grid";
        document.getElementById("if_study").classList.add("appear");
        
});
stock.addEventListener("mouseover", function(){
    document.getElementById("if_study").style.display="none";
    document.getElementById("if_study").classList.remove("appear");
    document.getElementById("if_music").style.display="none";
    document.getElementById("if_music").classList.remove("appear");
    document.getElementById("if_stock").style.display="grid";
    document.getElementById("if_stock").classList.add("appear");
    
});
music.addEventListener("mouseover", function(){
    document.getElementById("if_stock").style.display="none";
    document.getElementById("if_stock").classList.remove("appear");
    document.getElementById("if_study").style.display="none";
    document.getElementById("if_study").classList.remove("appear");
    document.getElementById("if_music").style.display="grid";
    document.getElementById("if_music").classList.add("appear");
    
});
etc.addEventListener("mouseover",function(){
    document.getElementById("if_stock").style.display="none;"
    document.getElementById("if_stock").classList.remove("appear");
    document.getElementById("if_study").style.display="none";
    document.getElementById("if_study").classList.remove("appear");
    document.getElementById("if_music").style.display="none";
    document.getElementById("if_music").classList.remove("appear");

})


"use strict";
			
var textElem = document.getElementById("clocktext");

function updateClock() {
    var d = new Date();
    var s = "";
    s += ((d.getHours() + 11) % 12 + 1) + ":";
    s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
    s += (10 > d.getSeconds() ? "0" : "") + d.getSeconds() + "\u00A0";
    s += d.getHours() >= 12 ? "pm" : "am";
    textElem.textContent = s;
    setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20);
}
updateClock();

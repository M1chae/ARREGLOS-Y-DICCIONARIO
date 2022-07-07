let lis10=[];
let listNu=[];
let lisLe=[];


function add(){
    lis10.push(document.getElementById("entr11").value);
    document.getElementById("ress11").innerHTML=lis10;
    console.log(lis10);
}

function add2(){
    listNu.push(document.getElementById("entr22").value);
    document.getElementById("ress33").innerHTML=listNu;
    console.log(listNu);
}

function add3(){
    lisLe.push(document.getElementById("entr33").value);
    document.getElementById("ress44").innerHTML=lisLe;
    console.log(lisLe);
}

function most(){
    document.getElementById("ress22").innerHTML=lis10;
}

function elim(){
    lis10.pop();
    document.getElementById("ress22").innerHTML=lis10;
}

function ord(){
    listNu.sort(function(a,b){return a - b});
    document.getElementById("ress33").innerHTML=listNu;
    console.log(listNu);
}

function ord2(){
    lisLe.sort();
    document.getElementById("ress44").innerHTML=lisLe;
    console.log(lisLe);
}

function ag(){
    lis10.push(document.getElementById("en5").value);
    document.getElementById("re5").innerHTML=lis10;
    console.log(lis10);   
}

function ag1(){
    listNu.push(document.getElementById("en6").value);
    document.getElementById("re6").innerHTML=listNu;
    console.log(listNu);
}

function ag2(){
    lisLe.push(document.getElementById("en7").value);
    document.getElementById("re7").innerHTML=lisLe;
    console.log(lisLe);
}

function orde(){
    listNu.sort(function(a,b){return a - b});
    document.getElementById("re6").innerHTML=listNu;
    console.log(listNu);
}
function orde1(){
    lisLe.sort();
    document.getElementById("re7").innerHTML=lisLe;
    console.log(lisLe);
}    




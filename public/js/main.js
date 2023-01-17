let input = document.getElementsByTagName("input");

input[0].addEventListener('focus',()=>{
    input[0].style.background = "blue";
})


input[1].addEventListener('focus',()=>{
    input[1].style.background = "blue";
})

input[1].addEventListener('focusout',()=>{
    input[1].style.background = "none";
})



let p1 = document.getElementsByClassName("premierParagraphe");

let p2 = document.getElementsByClassName("secondParagraphe");

let p3 = document.getElementsByClassName("dernierParagraphe");

let button = document.getElementsByClassName("buttonExo btn btn-primary");

button[0].addEventListener('click',()=>{
    p1[0].innerText += p2[0].innerText;
    p3[0].innerText += p2[0].innerText;
})


let button2 = document.getElementsByClassName("buttonExo btn btn-primary")[1];

button2.addEventListener('click',()=>{
    document.getElementById("exo4").innerText = input[2].value;
})




let button3 = document.getElementsByClassName("btn btn-primary mb-2")[0];

button3.addEventListener('click',()=>{
    document.getElementsByClassName("img-responsive")[0].src = document.querySelectorAll("p")[4].innerText.substring(10);
})


let tartines = document.getElementsByClassName("img-responsive");

tartines[1].addEventListener('click',()=>{
    let source = tartines[1].src;

    tartines[2].addEventListener('click',()=>{
        tartines[2].src = source;
    })
})


let button4 = document.getElementsByClassName("btn btn-primary mb-2")[1];
let p = document.getElementsByTagName("p");

button4.addEventListener('click',()=>{
    p[6].innerText = change2;
    p[5].innerText = change1;
})

let change1 = p[6].innerText;
let change2 = p[5].innerText;
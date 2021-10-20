// selecting elements
const card = 
document.querySelector(".card");
const image = 
document.querySelector(".image");
const heading = 
document.querySelector("h1");
const paradiv = 
document.querySelector(".para");
const button = 
document.querySelector(".read_btn");
const paragraph = 
document.querySelector(".paragraph");
const video = 
document.querySelector("#bgvid");

// adding hover effects
heading.addEventListener
("mouseover", function(){
    console.log("hovered")
    heading.style.color = "teal";
    heading.style.
    transitionDuration = "0.5s";
})

heading.addEventListener
    ("mouseout", function(){
    console.log("unhovered")
    heading.style.color = "black";
    heading.style.
    transitionDuration = "0.5s";
})

card.addEventListener
    ("mouseover",function(){
    console.log("hovered")
    card.style.borderRight = "solid";
    card.style.borderBottom = "solid";
    card.style.borderRadius = "3px";
    card.style.borderColor = "black";
    card.style.
    transitionDuration = "0.2s";
})

card.addEventListener
    ("mouseout",function(){
    console.log("hovered")
    card.style.border = "none";
    card.style.borderRadius = "2px";
    card.style.
    transitionDuration = "0.2s";
})

button.addEventListener
    ("mouseover",function(){
    console.log("hovered")
    button.style.width = "150px";
    button.style.border = "solid";
    button.style.borderColor = "teal";
    button.style.color = "teal";
    button.style.
    transitionDuration = "0.2s";
    button.style.
    textDecoration = "underline";
    button.style.fontSize = "13px";
})

button.addEventListener
    ("mouseout",function(){
    console.log("hovered")
    button.style.width = "100px";
    button.style.border = "none";
    button.style.color = "black"
    button.style.
    transitionDuration = "0.3s";
    button.style.
    textDecoration = "none"
})

paradiv.addEventListener
    ("mouseover",function(){
    console.log("hovered");
    paradiv.style.borderColor = "teal";
    paradiv.style.borderRadius = "2px";
    paradiv.style.
    transitionDuration = "1s";
})

paradiv.addEventListener
    ("mouseout",function(){
    console.log("hovered");
    paradiv.style.
    borderColor = "aliceblue";
    paradiv.style.
    borderRadius = "0px";
    paradiv.style.
    transitionDuration = "1s";
})

paragraph.addEventListener
    ("mouseover", function(){
    console.log("hovered")
    heading.style.color = "teal";
    heading.style.
    transitionDuration = "0.5s";
})

paragraph.addEventListener
    ("mouseout", function(){
    console.log("unhovered")
    heading.style.color = "black";
    heading.style.
    transitionDuration = "0.5s";
})

image.addEventListener
    ("mouseover",function(){
    console.log("image is nowhovered");
    image.style.borderBottom = "ridge";
    image.style.borderRight = "ridge";
    image.style.borderColor = "white";
    image.style.borderRadius = "2px";
    image.style.
    transitionDuration = "0.3s";
})

image.addEventListener
    ("mouseout",function(){
    console.log("image is nowhovered");
    image.style.borderBottom = "none";
    image.style.borderRight = "none";
    image.style.borderRadius = "0px";
    image.style.
    transitionDuration = "0.3s";
})


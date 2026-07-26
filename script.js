const button = document.getElementById("startBtn");

button.addEventListener("click", function(){

document.querySelector("h1").innerHTML="💙 I Love You Princess 💘";

document.querySelector("h2").innerHTML="Welcome To Our Little World 🌌";

document.querySelector("p").innerHTML="Every moment with you feels special ❤️<br><br>More surprises are waiting...";

button.innerHTML="Next ➜";

});
const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {
    music.play().catch(() => {
        console.log("Music will start after user interaction.");
    });
  document.querySelector(".gallery").style.display="flex";
document.querySelector(".letter").style.display="block";
document.querySelector(".final-box").style.display="block";
  document.querySelector(".gallery").classList.add("fade-in");
document.querySelector(".letter").classList.add("fade-in");
document.querySelector(".final-box").classList.add("fade-in");
});
const heartContainer=document.getElementById("heart-container");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💙";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*25)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,400);
const photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg"

];

let current=0;

setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

document.getElementById("slider").src=photos[current];

},3000);
const message=`ME TO MY LONG DISTANCE WALA PYAR

Bacchu thankyou so much meri life mein aane ke liye.❤️‍🩹🫶🏻👥

Aur meri life mein khushiyan lane ke liye.🍧🌸💗

With Love,
Aapka KitKat 💞🍧💓`;

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

button.addEventListener("click", () => {

if(i===0){
typeWriter();
}

});
document.getElementById("loveBtn").onclick=function(){
  
  heartBlast();

document.getElementById("finalText").innerHTML=
"I LOVE YOU SOOOOO MUCH ❤️<br><br>MY PRINCESS 👑<br><br>~ Aapka KitKat 💞🍫";

};
function heartBlast(){

for(let i=0;i<40;i++){

const h=document.createElement("div");

h.className="blast-heart";

h.innerHTML=Math.random()>0.5?"💙":"💖";

h.style.left="50%";
h.style.top="50%";

h.style.setProperty("--x",(Math.random()*700-350)+"px");
h.style.setProperty("--y",(Math.random()*700-350)+"px");

document.body.appendChild(h);

setTimeout(()=>h.remove(),2000);

}

}
setInterval(()=>{

document.title=
document.title=="💙 For My Princess 💙"
?
"💖 I Love You Princess 💖"
:
"💙 For My Princess 💙";

},1500);
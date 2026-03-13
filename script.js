const messages=[

"❤️ I love you bbe ❤️",
"💕 You are the best for me 💕",
"☀️ Living a beautiful dream ☀️",
"💖 My heart is yours 💖",
"✨ You make my life brighter ✨"

];

const photos=[

"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg"

];

function createMessage(){

const msg=document.createElement("div");

msg.className="message";

msg.innerText=messages[Math.floor(Math.random()*messages.length)];

msg.style.left=Math.random()*90+"vw";

document.body.appendChild(msg);

setTimeout(()=>{
msg.remove();
},14000);

}

function createPhoto(){

const img=document.createElement("img");

img.className="photo";

img.src=photos[Math.floor(Math.random()*photos.length)];

img.style.left=Math.random()*90+"vw";

document.body.appendChild(img);

setTimeout(()=>{
img.remove();
},16000);

}

const start=document.getElementById("start");
const music=document.getElementById("music");

start.onclick=()=>{

start.style.display="none";

/* play music */

music.play();

/* start animation */

setInterval(createMessage,1500);
setInterval(createPhoto,3000);

};
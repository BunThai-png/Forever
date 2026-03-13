const messages=[
"I love you",
"You are my happiness",
"My heart is yours",
"You make my life brighter",
"Living a beautiful dream"
]

const photos=[
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg"
]

function createMessage(){

const msg=document.createElement("div")

msg.className="message"

msg.innerText=messages[Math.floor(Math.random()*messages.length)]

msg.style.left=Math.random()*90+"vw"

document.body.appendChild(msg)

setTimeout(()=>{
msg.remove()
},16000)

}

function createPhoto(){

const img=document.createElement("img")

img.className="photo"

img.src=photos[Math.floor(Math.random()*photos.length)]

img.style.left=Math.random()*90+"vw"

document.body.appendChild(img)

setTimeout(()=>{
img.remove()
},18000)

}

const start=document.getElementById("start")
const music=document.getElementById("music")

let messageInterval
let photoInterval

start.onclick=()=>{

start.style.display="none"

music.currentTime=0
music.play()

messageInterval=setInterval(createMessage,3000)
photoInterval=setInterval(createPhoto,5000)

setTimeout(()=>{

clearInterval(messageInterval)
clearInterval(photoInterval)

music.pause()

start.style.display="flex"

},48000)

}
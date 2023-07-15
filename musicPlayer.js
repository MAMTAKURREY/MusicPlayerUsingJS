// console.log(document.querySelector(".one").innerHTML="<h1>hello</h1>");

/*   CREATE VARIABLE USING JS

let ele = document.createElement("h1");
ele.append("hello");
document.querySelector(".one").append(ele);
console.log(ele);

//let d=document.createElement("div");
d.classList.add("two");

let h=document.createElement("h1");
h.append("New");

d.append(h);

document.querySelector(".one").append(d);
*/

//                               ############ Music Player #############
let musics=[
{
    id:1,
    name:"Khusi jab bhi teri",
    artist:"jubin",
    audioSrc:"khushi jab bhi teri.mp3",
    imageSrc:"khushi jab bhi.jpg"
    
    
},
{
    id:2,
    name:"Dil galti kar baitha hai",
    artist:"jubin",
    audioSrc:"dil galti kar .mp3",
    imageSrc:"dil galti.jpg"
},
{
    id:3,
    name:"Baarish ban jana",
    artist:"stebin ben",
    audioSrc:"Baarish Ban Jaana.mp3",
    imageSrc:"baarish ban jana.jpg"
},
{
    id:4,
    name:"Meri aashiqui",
    artist:"jubin",
    audioSrc:"meri aashiqui.mp3",
    imageSrc:"meri ashiqui.jpg"
}
,
{
    id:5,
    name:"Dil chahte ho",
    artist:"jubin",
    audioSrc:"dil chahte ho.mp3",
    imageSrc:"dil chahte.jpg"
}
,
{
    id:6,
    name:"Jaan hai meri",
    artist:"Amaal Malik",
    audioSrc:"jaan hai meri.mp3",
    imageSrc:"jaan hai meri.jpg"
}
,
{
    id:7,
    name:"Chand baaliyan",
    artist:"Aditya",
    audioSrc:"chaand baaliyan.mp3",
    imageSrc:"chand baliya.jpg"
}
,
{
    id:8,
    name:"Aashiqui aa gayi",
    artist:"Arjit singh",
    audioSrc:"aashiqui aa gai.mp3",
    imageSrc:"aashiqui aa gayi.jpg"
}
,
{
    id:9,
    name:"Barsaat ki dhun",
    artist:"jubin",
    audioSrc:"barsaat ki dhun.mp3",
    imageSrc:"barsaat ki.jpg"
}
,
{
    id:10,
    name:"Bol de",
    artist:"Reena Gilbert",
    audioSrc:"bol de.mp3",
    imageSrc:"bol de.jpg"
}
,
{
    id:11,
    name:"Care ni karda",
    artist:"Sweetai Brar",
    audioSrc:"care ni karda.mp3",
    imageSrc:"care ni krda.jpg"
}
,
{
    id:12,
    name:"Closer",
    artist:"The Chainsmokers",
    audioSrc:"closer.mp3",
    imageSrc:"closer.jpg"
}
,
{
    id:13,
    name:"Dil chahte ho",
    artist:"jubin",
    audioSrc:"dil chahte ho.mp3",
    imageSrc:"dil chahte.jpg"
}
,
{
    id:14,
    name:"Let me love you",
    artist:"Justin bieber",
    audioSrc:"let me love u.mp3",
    imageSrc:"let me love u.jpg"
}
,
{
    id:15,
    name:"Love me like you do",
    artist:"Ellie Goulding",
    audioSrc:"love me like u do.mp3",
    imageSrc:"love me like u do.jpg"
}
,
{
    id:16,
    name:"Pehli dafa",
    artist:"Atif Aslam",
    audioSrc:"pehli dafa.mp3",
    imageSrc:"pehli dafa.jpg"
}
,
{
    id:17,
    name:"Pyaar karte ho na",
    artist:"Javed Mohsin",
    audioSrc:"pyar karte ho na.mp3",
    imageSrc:"pyar karte ho na.jpg"
}
,
{
    id:18,
    name:"Sajna ve",
    artist:"Vishal Mishra",
    audioSrc:"sajna ve.mp3",
    imageSrc:"sajna ve.jpg"
}
,
{
    id:19,
    name:"Tum hi aana",
    artist:"Payal Dev",
    audioSrc:"tum hi aana.mp3",
    imageSrc:"tum hi aana.jpg"
}
,
{
    id:20,
    name:"Maana ki hum yaar nahi",
    artist:"Perneeti Chopra",
    audioSrc:"maana ki hum yaar nahi.mp3",
    imageSrc:"maana ke.jpg"
}
,
{
    id:21,
    name:"Meri zindagi hai tu",
    artist:"Neeti Mohan",
    audioSrc:"meri zindagi hai tu.mp3",
    imageSrc:"meri jindagi.jpg"
}
,
{
    id:22,
    name:"Mai jis din",
    artist:"Jubin",
    audioSrc:"mai jis din.mp3",
    imageSrc:"mai jisdin.jpg"
}
,
{
    id:23,
    name:"Nayan",
    artist:"Dhavni Bhanushali",
    audioSrc:"nayan.mp3",
    imageSrc:"nayan.jpg"
}
,
{
    id:24,
    name:"Lut gaye",
    artist:"Jubin",
    audioSrc:"lut gaye.mp3",
    imageSrc:"lut gaye.jpg"
}
,
{
    id:25,
    name:"Nazm nazm",
    artist:"Arko",
    audioSrc:"nazm nazm.mp3",
    imageSrc:"nazm nazm.jpg"
}
,
{
    id:26,
    name:"Safari",
    artist:"Serena",
    audioSrc:"safari.mp3",
    imageSrc:"safari.jpg"
}
,
{
    id:27,
    name:"Stay",
    artist:"Justin Bieber",
    audioSrc:"stay.mp3",
    imageSrc:"stay.jpg"
}
,
{
    id:28,
    name:"Tere sang yara",
    artist:"Atif Aslam",
    audioSrc:"tere sang yara.mp3",
    imageSrc:"tere sang.jpg"
}
,
{
    id:29,
    name:"Tum agar sath dene ka",
    artist:"Mahendra Kapoor",
    audioSrc:"tum agar sath dene ka.mp3",
    imageSrc:"tum agar.jpg"
}
,
{
    id:30,
    name:"Soch liya",
    artist:"Manoj Muntashir",
    audioSrc:"soch liya.mp3",
    imageSrc:"soch liya.jpg"
}
,
{
    id:31,
    name:"Teri ankho me",
    artist:"Darshan Ravel",
    audioSrc:"teri ankho me.mp3",
    imageSrc:"teri ankho.jpg"
}
,
{
    id:32,
    name:"Unstopable",
    artist:"Sia",
    audioSrc:"unstopable.mp3",
    imageSrc:"unstoppable.jpg"
}
,
{
    id:33,
    name:"Humnava mere",
    artist:"Jubin",
    audioSrc:"humnava mere.mp3",
    imageSrc:"humnava mere.jpg"
}




]
for(let i=0; i<musics.length; i++)
{

let tile=document.createElement("div");
tile.classList.add("tile");

let thumbnail=document.createElement("div");
thumbnail.classList.add("thumbnail");

let img=document.createElement("img");
img.src=musics[i].imageSrc;


thumbnail.append(img);
tile.append(thumbnail);

let description=document.createElement("div");
description.classList.add("description");

let h2=document.createElement("h2");
h2.append(musics[i].name);
description.append(h2);

let h3=document.createElement("h3");
h3.append(musics[i].artist);
description.append(h3);

tile.append(description);

// how to add event listener/event in JS generated element
tile.addEventListener("click",function(){
    playMusic(musics[i]);
});
tile.addEventListener('ended', function(){  
     
});

document.querySelector(".music-list").append(tile);
}

function playMusic(music)
{
    
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();
   



}
function closePlayer(){
    document.querySelector(".player").style.marginLeft="100%";
    //document.querySelector(".audio").pause();
    
}
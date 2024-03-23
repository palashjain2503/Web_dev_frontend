songsDiv=document.querySelectorAll(".song");
display=document.querySelector(".displaySong h2");
playPause=document.querySelector(".playPause");
next=document.querySelector(".nextSong");
prev=document.querySelector(".previousSong");
audioPlaying=new Audio("1.mp3");
range=document.querySelector(".displaySong input");
let songIndex=0;
let song=[{songName:"THE NIGHTS" ,filePath:"1.mp3"},
{songName:"HOPE" ,filePath:"2.mp3"},
{songName:"LET ME LOVE YOU", filePath:"3.mp3"},
{songName:"LUCID DREAMS", filePath:"4.mp3"},
]
currSong=songsDiv[0];
songsDiv[0].style.color="rgb(75,218,76)";
let i=0,c=1;
for(let div of songsDiv)
{
    
    div.innerText=song[i].songName;
    i++;
     
}

resetColour=()=>{
    songsDiv.forEach((element)=>{
         audioPlaying.currentTime=0;
        element.style.color="white";
    } )

}
songsDiv.forEach((element)=> {
    element.addEventListener("click",(e)=>{
    resetColour();
    playPause.innerText="PAUSE";
    currSong=e.target;
    songIndex=currSong.id-1;
    console.log(song[songIndex].songName);
    audioPlaying.src=`${song[currSong.id-1].filePath}`;
    audioPlaying.currentTime=0;
    audioPlaying.play();
    e.target.style.color="rgb(75,218,76)";
    display.innerText=`${e.target.innerText}:`;
}
)
});


audioPlaying.addEventListener("timeupdate",()=>{
   let time= parseInt(audioPlaying.currentTime);
 let duration= audioPlaying.duration;
   if(time>60)
   {
    let min=parseInt(time/60);
    let sec=parseInt(time%60);
    if(sec<10)
    {
        document.querySelector(".currentTimeDisplay").innerText=`${min}:0${sec}`;
    }
    else
    {
        document.querySelector(".currentTimeDisplay").innerText=`${min}:${sec}`;
    }
   }
   else{
    let min=parseInt(time/60);
    let sec=parseInt(time%60);
    if(sec<10)
    {
        document.querySelector(".currentTimeDisplay").innerText=`${min}:0${sec}`;
    }
    else
    {
        document.querySelector(".currentTimeDisplay").innerText=`${min}:${sec}`;
    }
   }
   if(duration>60)
   {
    let min=parseInt(duration/60);
    let sec=parseInt(duration%60);
    document.querySelector(".duration").innerText=`${min}:${sec}`;
    
   }
   else{
    let min=parseInt(duration/60);
    let sec=parseInt(duration%60);
    document.querySelector(".duration").innerText=`${min}:${sec}`;
   }
  
    progress=(audioPlaying.currentTime/audioPlaying.duration)*100;
    range.value=progress;
    if(range.value==100)
    {
        progress=0;
        audioPlaying.play();
    }

})
range.addEventListener("change",()=>{
    audioPlaying.currentTime=(range.value*audioPlaying.duration)/100;
})
playPause.addEventListener("click",()=>{
    if(c==0)
    {
        audioPlaying.pause();
        playPause.innerText="PLAY";
        c=1;
    }
    else if(c==1)
    {
        audioPlaying.play();
        playPause.innerText="PAUSE";
        c=0;
    }
});

next.addEventListener("click",()=>{
     if(songIndex==3)
     {
        songIndex=0;
        currSong=songsDiv[0];
        resetColour();
        currSong.style.color="rgb(75,218,76)";
        display.innerText=`${song[parseInt(currSong.id-1)].songName}:`;
     }
     else
     {
        songIndex++;
        display.innerText=`${song[parseInt(currSong.id)].songName}:`;
        currSong=songsDiv[`${currSong.id}`];
     }
     audioPlaying.src=`${song[songIndex].filePath}`;
     audioPlaying.currentTime=0;
     audioPlaying.play();
     playPause.innerText="PAUSE";
     c=0;
    resetColour();
    currSong.style.color="rgb(75,218,76)";
});

prev.addEventListener("click",()=>{
    if(songIndex==0)
    {
       songIndex=3;
       currSong=songsDiv[3];
       resetColour();
       currSong.style.color="rgb(75,218,76)";
       display.innerText=`${song[parseInt(currSong.id-1)].songName}:`;
    }
    else
    {
       songIndex--;
       display.innerText=`${song[parseInt(currSong.id-2)].songName}:`;
       currSong=songsDiv[`${currSong.id-2}`];
    }
    audioPlaying.src=`${song[songIndex].filePath}`;
    audioPlaying.currentTime=0;
    audioPlaying.play();
    playPause.innerText="PAUSE";
    c=0;
   resetColour();
   currSong.style.color="rgb(75,218,76)";
});
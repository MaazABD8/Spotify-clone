console.log("Welcome to spotify!");

// initialize variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = [
    {songName:"Aayee Hayee", filePath : "song/1.mp3", coverPath : "logo/ayee.jpg"},
    {songName:"52 Bars", filePath : "song/1.mp3", coverPath : "logo/52.jpg"},
    {songName:"Champion anthem", filePath : "song/1.mp3", coverPath : "logo/champ.jpg"},
    {songName:"Chitta Kurta", filePath : "song/1.mp3", coverPath : "logo/chitta.jpg"},
    {songName:"Hissab", filePath : "song/1.mp3", coverPath : "logo/hisab.jpg"},
    {songName:"Bars", filePath : "song/1.mp3", coverPath : "logo/bars.jpg"},
    {songName:"Buckle Up", filePath : "song/1.mp3", coverPath : "logo/bars.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    
    }
})

audioElement.addEventListener('timeupdate',()=>{
  
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
      myprogressbar.value= progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value* audioElement.duration/100;
})

const makeAllPlays=() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
    
}

Array.from ( document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src= `song/${Index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause'); 
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(Index>=9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src= `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 


})
document.getElementById('previous').addEventListener('click',()=>{
    if(Index<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src= `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 


})


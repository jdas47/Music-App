const music = new Audio("./assets/music/music1.mp3");

const songs = [
    {
        id:'1',
        songName:` On My way <br>
        <div class = "subtitle">Alan Walker</div>`,
        poster:"./assets/poster/img1.jpg",
    },
     
    {
        id:'2',
        songName:` Tum Prem Ho <br>
        <div class="subtitle">Mohit Lalwani</div>`,
        poster:"./assets/poster/img2.jpg",
    },

    {
        id:'3',
        songName:` Love Your Voice <br>
        <div class="subtitle">Jony</div>`,
        poster:"./assets/poster/img3.jpg",
    },

    {
        id:'4',
        songName:` Heat Waves <br>
        <div class="subtitle">Glass Animals</div>`,
        poster:"./assets/poster/img4.jpg",
    },

    {
        id:'5',
        songName:` Kabhi Kabhi Aditi <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster:"./assets/poster/img5.jpg",
    },

    {
        id:'6',
        songName:` Ishq Wala Love <br>
        <div class="subtitle">Student of the Year</div>`,
        poster:"./assets/poster/img6.jpg",
    },

    {
        id:'7',
        songName:` Ram Siya Ram <br>
        <div class="subtitle">Adipurush</div>`,
        poster:"./assets/poster/img7.jpg",
    },

    {
        id:'8',
        songName:` SpecialZ <br>
        <div class="subtitle">Jujutsu Kaisen</div>`,
        poster:"./assets/poster/img8.jpg",
    },

    {
        id:'9',
        songName:` Arcade x Mann Mera <br>
        <div class="subtitle">Gravero</div>`,
        poster:"./assets/poster/img9.jpg",
    },

    {
        id:'10',
        songName:` Middle of the Night <br>
        <div class="subtitle">Violin version</div>`,
        poster:"./assets/poster/img10.jpg",
    },

    {
        id:'11',
        songName:` Main Hoon <br>
        <div class="subtitle">Sanam</div>`,
        poster:"./assets/poster/img11.jpg",
    },

    {
        id:'12',
        songName:` Marvel Anthem <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster:"./assets/poster/img12.jpg",
    },

    {
        id:'13',
        songName:` Har Fun Maula <br>
        <div class="subtitle">Gojo</div>`,
        poster:"./assets/poster/img13.jpg",
    },

    {
        id:'14',
        songName:` I Wanna Be Yours <br>
        <div class="subtitle">Artic Monkeys</div>`,
        poster:"./assets/poster/img14.jpg",
    },

    {
        id:'15',
        songName:` I M Good <br>
        <div class="subtitle">David Gutta & Bebe Rexha</div>`,
        poster:"./assets/poster/img15.jpg",
    },

    {
        id:'16',
        songName:` FRIENDS <br>
        <div class="subtitle">Marshmellow & Annie</div>`,
        poster:"./assets/poster/img16.jpg",
    },

    {
        id:'17',
        songName:` Say My Name <br>
        <div class="subtitle">David,Rexha & J Balvin</div>`,
        poster:"./assets/poster/img17.jpg",
    },

    {
        id:'18',
        songName:` Saari Duniya Jalaa Denge <br>
        <div class="subtitle">Animal</div>`,
        poster:"./assets/poster/img18.jpg",
    },

    {
        id:'19',
        songName:` Arjan Vailly <br>
        <div class="subtitle">Animal</div>`,
        poster:"./assets/poster/img19.jpg",
    },

    {
        id:'20',
        songName:` Paisa Hai Toh <br>
        <div class="subtitle">Farzi</div>`,
        poster:"./assets/poster/img20.jpg",
    },

    {
        id:'21',
        songName:` One Kiss X I was never <br>
        <div class="subtitle">Dua lipa</div>`,
        poster:"./assets/poster/img21.jpg",
    },

    {
        id:'22',
        songName:` The Lost Soul Down <br>
        <div class="subtitle">NBSPLV</div>`,
        poster:"./assets/poster/img22.jpg",
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105,105,170,0)";
    })
}
let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `./assets/music/music${index}.mp3`;
        poster_master_play.src=`./assets/poster/img${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,0.1)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec =`0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 =`0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value*music.duration/100;
})

music.addEventListener('ended',()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }

    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }

    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
    
}) 

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `./assets/music/music${index}.mp3`;
    poster_master_play.src=`./assets/poster/img${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();
    
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,0.1)";
})

next.addEventListener('click', ()=>{
    index -=0;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `./assets/music/music${index}.mp3`;
    poster_master_play.src=`./assets/poster/img${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();
    
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,0.1)";
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
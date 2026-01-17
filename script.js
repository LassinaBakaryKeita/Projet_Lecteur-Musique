// ======== ELEMENTS ========
const audio = document.getElementById("audio");

const playBtn = document.getElementById("playPause");
const playIcon = playBtn.querySelector("i");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.querySelector("h3");
const cover = document.querySelector(".container-carousel img");

const menuBtn = document.getElementById("menuListeMusic");
const playlist = document.getElementById("playlist");
const playlistUl = playlist.querySelector("ul");

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");

const secondeTotalDuration = document.getElementById("secondeTotalDuration");
const minuteTotalDuration = document.getElementById("minuteTotalDuration");

const secondeCurrentDuration = document.getElementById("secondeCurrentDuration");
const minuteCurrentDuration = document.getElementById("minuteCurrentDuration");



// ======== MUSIQUES ========
const musics = [
    {
        title: "Obsessed With You",
        src: "audios/Central_Cee_-_Obsessed_With_You__Official_Video_(256k).mp3",
        cover: "images/centralCee.jpg"
    },
    {
        title: "Raindance",
        src: "audios/Dave_-_Raindance__ft._Tems_(128k) (1).mp3",
        cover: "images/dave.jpg"
    },
    {
        title: "Let Me Love You",
        src: "audios/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber(256k).mp3",
        cover: "images/justinBieber.jpg"
    },
    {
        title: "La vie est belle",
        src: "audios/Mia_Guisse_-_La_Vie_est_Belle__Clip_Officiel_(128k).mp3",
        cover: "images/miaGuisse.jpg"
    },
    {
        title: "Tatami",
        src: "audios/Ronisia_-_Mélodie__Tatami___Clip_officiel_(256k).mp3",
        cover: "images/ronisia.jpg"
    },
    {
        title: "Assurance",
        src: "audios/Sidiki_Diabaté_feat_Wally_Seck_-_Assurance__Clip_Officiel_(128k).mp3",
        cover: "images/sidikiDiabate.jpg"
    },
    {
        title: "Free mind",
        src: "audios/Tems_-_Free_Mind(256k).mp3",
        cover: "images/tems.jpg"
    }
];

let currentIndex = 0;


// ======== LOAD MUSIC ========
function loadMusic(index) {
    currentIndex = index;

    audio.src = musics[index].src;
    title.textContent = musics[index].title;
    cover.src = musics[index].cover;

    // reset affichage temps
    minuteCurrentDuration.textContent = "0";
    secondeCurrentDuration.textContent = "00";
}


// ======== CALCUL DUREE TOTALE ========
audio.addEventListener("loadedmetadata", () => {
    const totalSeconds = Math.floor(audio.duration);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minuteTotalDuration.textContent = minutes;
    secondeTotalDuration.textContent = seconds.toString().padStart(2, "0");
});


// ======== PLAY / PAUSE ========
function playMusic() {
    audio.play();
    playIcon.classList.replace("fa-play", "fa-pause");
}

function pauseMusic() {
    audio.pause();
    playIcon.classList.replace("fa-pause", "fa-play");
}

playBtn.addEventListener("click", () => {
    audio.paused ? playMusic() : pauseMusic();
});


// ======== NEXT / PREV ========
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % musics.length;
    loadMusic(currentIndex);
    playMusic();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + musics.length) % musics.length;
    loadMusic(currentIndex);
    playMusic();
});


// ======== PLAYLIST MENU ========
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playlist.classList.toggle("hidden");
});

document.addEventListener("click", () => {
    playlist.classList.add("hidden");
});


// ======== GENERER PLAYLIST ========
musics.forEach((music, index) => {
    const li = document.createElement("li");
    li.textContent = music.title;

    li.addEventListener("click", () => {
        loadMusic(index);
        playMusic();
        playlist.classList.add("hidden");
    });

    playlistUl.appendChild(li);
});


// ======== PROGRESS BAR & TEMPS COURANT ========
audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    // progression
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";

    // temps courant
    const currentSeconds = Math.floor(audio.currentTime);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;

    minuteCurrentDuration.textContent = minutes;
    secondeCurrentDuration.textContent = seconds.toString().padStart(2, "0");
});



// ======== CLICK SUR LA BARRE DE PROGRESSION ========

progressContainer.addEventListener("click", (e) => {
    if (!audio.duration) return;

    // largeur totale de la barre
    const width = progressContainer.clientWidth;

    // position du clic
    const clickX = e.offsetX;

    // calcul du nouveau temps
    const newTime = (clickX / width) * audio.duration;

    // appliquer le saut
    audio.currentTime = newTime;
});



// ======== FIN DE MUSIQUE → MUSIQUE SUIVANTE ========
audio.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % musics.length;
    loadMusic(currentIndex);
    playMusic();
});


// ======== INIT ========
loadMusic(currentIndex);


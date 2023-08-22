const menuBtn = document.querySelector(".fa-bars"),
 container = document.querySelector(".container");

menuBtn.addEventListener('click', e => {
    container.classList.toggle("active")
})

    const songs = [
        { 
            title: "song 1",
            artist: "artist song 1",
            img_src: "1.jpeg",
            src: "1.mp3"
        },
        { 
            title: "song 2",
            artist: "artist song 2",
            img_src: "2.jpeg",
            src: "2.mp3"

        },
    ];

const playlistContainer = document.querySelector("#playlist");



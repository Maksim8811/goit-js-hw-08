import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const timeSecondTrottle = throttle(onPlay, 1000);


const iframe = document.querySelector('iframe');
const player = new Player(iframe);



function onPlay({seconds}) {
    console.log(seconds)
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    }


function getLocalStorTime() {
    const getSeconds = localStorage.getItem("videoplayer-current-time")
    // console.log(getSeconds)
    if (getSeconds) {
        player.setCurrentTime(getSeconds);
   
    }
    
}

getLocalStorTime();

player.on('timeupdate', timeSecondTrottle);





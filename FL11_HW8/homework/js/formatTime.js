function formatTime(time){
    let days = Math.floor(time / (24 * 60));
    let hours = Math.floor(time % (24 * 60) / 60);
    let minutes = Math.floor(time % (24 * 60) % 60);
    console.log(`${days} day(s) ${hours} hour(s) ${minutes} minute(s).`);
}

formatTime(50);
formatTime(120);
formatTime(11250);
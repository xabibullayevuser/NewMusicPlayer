let volume_slider = document.querySelector('.volume_slider');

function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
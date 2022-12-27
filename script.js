const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = []
let audio = new Audio("./tunes/tunes/a.wav");

const playTune = (key) => {
    audio.src = `./tunes/tunes/${key}.wav`;
    var playPromise = audio.play();
    if(playPromise !==undefined)
    {
        playPromise.then(_ =>{
        }).catch(error =>{

        });
    }

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
}
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
});
const handleVolume = (e)=>{
    audio.volume= e.target.value;
}
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e)=>{
    if(allKeys.includes(e.key))
    playTune(e.key);
}
keysCheckbox.addEventListener("click",showHideKeys);
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input",handleVolume);
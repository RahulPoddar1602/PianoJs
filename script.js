// const pianoKeys = document.querySelectorAll(".piano-keys .key");
// const volumeSlider = document.querySelector(".volume-slider input");
// const keysCheckbox = document.querySelector(".keys-checkbox input");

// let allKeys = []
// let audio = new Audio("./tunes/tunes/a.wav");

// const playTune = (key) => {
//     const audioSrc = `./tunes/tunes/${key}.wav`;
//     if (audio.src !== audioSrc) {
//       audio.src = audioSrc;
//     }
//     audio.play();
//     if (audio.src === audioSrc) {
//       audio.pause();
//     }
//     // const audioSrc = `./tunes/tunes/${key}.wav`;
//     // if (audio.src !== audioSrc) {
//     //   audio.src = audioSrc;
//     // }
//     // audio.pause();
//     // audio.play();
//     // audio.src = `./tunes/tunes/${key}.wav`;
//     // audio.pause();
//     // audio.load();
//     // audio.play();
//     // if(playPromise !==undefined)
//     // {
//     //     playPromise.then(_ =>{
//     //     }).catch(error =>{

//     //     });
//     // }

//     const clickedKey = document.querySelector(`[data-key="${key}"]`);
//     clickedKey.classList.add("active");
//     setTimeout(()=>{
//         clickedKey.classList.remove("active");
//     },150)
// }
// // const playTune = (key) => {
// //     audio.src = `./tunes/tunes/${key}.wav`;
// //     var playPromise = audio.play();
// //     if (playPromise !== undefined) {
// //       playPromise
// //         .then((_) => {
// //           const clickedKey = document.querySelector(`[data-key="${key}"]`);
// //           clickedKey.classList.add("active");
// //           setTimeout(() => {
// //             clickedKey.classList.remove("active");
// //           }, 150);
// //         })
// //         .catch((error) => {
// //           console.log(error);
// //         });
// //     }
// //   };
// pianoKeys.forEach(key =>{
//     allKeys.push(key.dataset.key);
//     key.addEventListener("click",()=>playTune(key.dataset.key));
// });
// const handleVolume = (e)=>{
//     audio.volume= e.target.value;
// }
// const showHideKeys = () => {
//     pianoKeys.forEach(key => key.classList.toggle("hide"));
// }
// const pressedKey = (e)=>{
//     if(allKeys.includes(e.key))
//     playTune(e.key);
// }
// keysCheckbox.addEventListener("click",showHideKeys);
// document.addEventListener("keydown", pressedKey);
// volumeSlider.addEventListener("input",handleVolume);
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
const playTune = (key) => {
  let audio = new Audio("./tunes/tunes/a.wav");
  audio.src = `./tunes/tunes/${key}.wav`;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        clickedKey.classList.add("active");
        setTimeout(() => {
          clickedKey.classList.remove("active");
        }, 150);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
  audio.volume = e.target.value;
};
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};
keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
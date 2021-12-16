let icon = document.getElementById("icon");
let fakeid = document.getElementById("fake-id");
let artist = document.getElementById("artist");
let license = document.getElementById("license");
let button = document.querySelector(".player-button");
let purse=  document.querySelector("#purse");
let mirror=  document.querySelector("#mirror");
let video=  document.querySelector("#vid");


      license.addEventListener("click",function(event){
      license.style.animation="idclick 2s forwards";
      icon.style.animation="appear 2s forwards";
      artist.style.animation="appear 2s forwards";
      fakeid.style.animation="appear 2s forwards";
      button.style.animation="appear 2s forwards";
      },false);

      mirror.addEventListener("click",function(event){
        mirror.style.animation="mirroran 2s forwards";
        video.style.animation="videoan 2s forwards";
        video.muted=false;
        },false);

      purse.addEventListener("click",function(event){
        if(license.style.animation="idclick 2s forwards"){
        license.style.animation="idclick 2s reverse";
        icon.style.animation="appear 2s reverse";
        artist.style.animation="appear 2s reverse";
        fakeid.style.animation="appear 2s reverse";
        button.style.animation="appear 2s reverse";
        }
        if( mirror.style.animation="mirroran 2s forwards"){
        mirror.style.animation="mirroran 2s reverse";
        video.style.animation="videoan 2s reverse";
        video.muted=true;
        video.autoplay=false;
        }
        },false);
  


      // demo from https://blog.shahednasser.com/how-to-style-an-audio-element/#styling-the-control-panel



const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;


      function toggleAudio () {
        if (audio.paused) {
          audio.play();
          playerButton.innerHTML = pauseIcon;
        } else {
          audio.pause();
          playerButton.innerHTML = playIcon;
        }
      }

      playerButton.addEventListener('click', toggleAudio);

      function audioEnded () {
        playerButton.innerHTML = playIcon;
      }
      
      audio.onended = audioEnded;

      
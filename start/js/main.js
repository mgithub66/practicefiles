window.addEventListener('keydown', e => {
  let k=e.keyCode;
   let audio,audiopath;
    
    switch(k){
    case 87:
    audiopath = '../sounds/tom-1.mp3';
        break;
    case 65:
    audiopath = '../sounds/tom-2.mp3';
        break;
    case 83:
    audiopath = '../sounds/tom-3.mp3';
          break;
    case 68:
    audiopath = '../sounds/tom-4.mp3';
          break; 
     case 74:
     audiopath = '../sounds/snare.mp3';
          break;
    case 75:
    audiopath = '../sounds/crash.mp3';
         break;               
    case 76:
    audiopath = '../sounds/kick-bass.mp3';
        break;   
    }
    audio = new Audio(audiopath);
    audio.play();
    
  })
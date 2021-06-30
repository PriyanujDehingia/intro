// const logo=document.querySelectorAll('#logo path');

// for(let i=0;i<logo.length;i++){
//   console.log(`letter ${i} is of ${logo[i].getTotalLength()} `);
// }
//DOMContentLoaded means whenever DOM has been fully loaded, then start the function
document.addEventListener('DOMContentLoaded', () => {
  function animateSgv (id, delay, delayIncrement){
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      document.getElementById("my_audio").play();
      delay = delay;
      for(let i = 0; i < logoPaths.length;i++){
          //console.log(logoPaths[i].getTotalLength());
          logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
          logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
          logoPaths[i].style.animation = `line-anim 1.2s ease forwards ${delay}s`;
          delay+=delayIncrement;
          // console.log(delay)
      }
      logo.style.animation = `fill 2s ease forwards 3.5s`;
  }
  animateSgv('logo', 0, 0.5)
}, false);

//same as DOMContentLoaded but in jQuery
// $( document ).ready(function() {
//   $("#my_audio").get(0).play();
// });
// $( document ).on( "mobileinit", function() {
//   $("#my_audio").get(0).play();
// });
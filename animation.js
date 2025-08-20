/**
 * Use Anime.js to create text animation (perhaps, when the header is in view, do the animation)
 * 
 */
import {text, animate} from "animejs";


console.log("Hello from animaiton.js")
const textSplit = text.split(".animation-word", {
    lines:false,
    chars: {
        wrap:true
    }
});

animate(textSplit, {  y: ['75%', '0%'],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: true,
  alternate: true,})

console.log("test")
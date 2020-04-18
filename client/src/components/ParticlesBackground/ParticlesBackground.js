import React from 'react';
import snowflake from '../../images/snowflake.svg';
import './Particles.scss';
import Particles from 'react-particles-js'

function ParticlesBackground() {
  
  
  const particleOptions = {
    
	    "particles": {
	       "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
         "image": {
            "src": snowflake,
            "width": 100,
            "height": 100
          },
        "polygon": {
          "nb_sides": 7
        },
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 125,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 15,
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
     "retina_detect": true 
	}
  
  return (
    <div>
        <Particles className="particles"
              params={particleOptions}
              />
   
    </div>
  )
}
  



export default ParticlesBackground;

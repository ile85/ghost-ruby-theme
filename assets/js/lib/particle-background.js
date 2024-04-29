document.addEventListener('DOMContentLoaded', function () {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const particlesNumber = isMobile ? 50 : 100; // Adjust the number for density based on device type

  if(document.getElementById('hero')) {
    particlesJS('hero', {
      "particles": {
          "number": {
              "value": particlesNumber,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
          },
          "opacity": {
              "value": 0.5,
              "random": false,
          },
          "size": {
              "value": 3,
              "random": true,
          },
          "line_linked": {
              "enable": false,
          },
          "move": {
              "speed": 1,
              "direction": "none",
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
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 100,
                  "duration": 0.4
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "push": {
                  "particles_nb": 4
              }
          }
      },
      "retina_detect": true
    });
  } else {
    console.error('The element with ID "hero" was not found.');
  }
});

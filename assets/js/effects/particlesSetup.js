// Ensure the particles.js library is included or imported before this script
document.addEventListener('DOMContentLoaded', function () {
    if (window.particlesJS) {
        // Custom magnetizing effect
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
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
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
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
                        "mode": "custom"  // Custom interaction mode
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    },
                    "custom": {  // Custom mode definition
                        "distance": 200,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });

        // Custom interaction for magnetizing effect
        const pJS = window.pJSDom[0].pJS;
        const mousePos = { x: 0, y: 0 };

        // Update mouse position
        document.addEventListener('mousemove', (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        });

        // Custom draw function to apply magnet effect
        pJS.fn.interact.custom = function() {
            pJS.particles.array.forEach((particle) => {
                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const distance = Math.sqrt(dx * dy + dy * dy);

                if (distance < 200) {
                    const factor = (200 - distance) / 200;
                    particle.vx = dx * factor * 0.05;
                    particle.vy = dy * factor * 0.05;
                }
            });
        };
    }
});

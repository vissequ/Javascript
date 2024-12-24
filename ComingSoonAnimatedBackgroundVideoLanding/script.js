// Canvas setup for background polygons
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Polygon object
class Polygon {
    constructor(x, y, sides, radius, speed, moveSpeed, color) {
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.radius = radius;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = speed; // Rotation speed
        this.moveSpeed = moveSpeed; // Movement speed
        this.color = color;
        this.directionX = (Math.random() - 0.5) * moveSpeed; // Random X direction
        this.directionY = (Math.random() - 0.5) * moveSpeed; // Random Y direction
    }

    draw() {
        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
            const angle = (Math.PI * 2 * i) / this.sides + this.angle;
            const x = this.x + Math.cos(angle) * this.radius;
            const y = this.y + Math.sin(angle) * this.radius;
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    update() {
        // Update rotation
        this.angle += this.speed;

        // Update position
        this.x += this.directionX;
        this.y += this.directionY;

        // Bounce off edges
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.directionX *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.directionY *= -1;
        }

        this.draw();
    }
}

// Create an array of polygons
const polygons = [];
for (let i = 0; i < 25; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const sides = Math.floor(Math.random() * 5) + 3; // Between 3 and 7 sides
    const radius = Math.random() * 50 + 20;
    const speed = Math.random() * 0.01 + 0.005; // Rotation speed
    const moveSpeed = Math.random() * 0.5 + 0.1; // Movement speed
    const color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
    polygons.push(new Polygon(x, y, sides, radius, speed, moveSpeed, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    polygons.forEach((polygon) => {
        polygon.update();
    });

    requestAnimationFrame(animate);
}

animate();

// Subtitle fade in/out effect
const subtitle = document.getElementById('subtitle');
let fadeIn = true;

function toggleFade() {
    if (fadeIn) {
        subtitle.style.opacity = 1;
    } else {
        subtitle.style.opacity = 0;
    }
    fadeIn = !fadeIn;
}

// Start the fade effect with a 3-second interval
setInterval(toggleFade, 4000); // 0.5s fade + 3s pause

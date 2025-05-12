const canvas = document.getElementById("stars")
const ctx = canvas.getCpntext("2d");

canvas.Width = window.innerWidth;
canvas.height= window.innerheight;

let stars = [];

for (let i=0; i<100; i++ ) {
    stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
radius: Math.random() * 1.5,
velocity: Math.random() * 1 + 0.5
    });
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  for (let star of stars) {
    ctx.arc(star.x, star.y, star.radius, 0, Math.pi*2 );

    star.y += star.velocity;
    if (star.y > canvas.height) {
star.y = 0;
star.x = Math.random() * canvas.width;
    }
 }

 requestAnimationFrame(animate);

}

animate();
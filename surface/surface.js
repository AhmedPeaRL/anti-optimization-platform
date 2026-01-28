const canvas = document.getElementById("surface");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// ---- Surface Field ----

const POINTS = 700;
const points = [];

for (let i = 0; i < POINTS; i++) {
  points.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.03,
    vy: (Math.random() - 0.5) * 0.03,
    life: Math.random() * 2000 + 1000
  });
}

function step() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(255,255,255,0.04)";

  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    if (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.life <= 0) {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
      p.life = Math.random() * 2000 + 1000;
    }

    ctx.fillRect(p.x, p.y, 1, 1);
  }

  requestAnimationFrame(step);
}

step();

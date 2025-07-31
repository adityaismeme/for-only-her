
const count = 15;
for (let i = 0; i < count; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

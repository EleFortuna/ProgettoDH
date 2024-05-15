document.querySelector('.image-container').addEventListener('mousemove', function(event) {
    const mask = this.querySelector('.mask');
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    mask.style.backgroundPosition = `${x}px ${y}px`;
});

document.querySelector('.image-container').addEventListener('mouseenter', function() {
    this.querySelector('.mask').classList.add('active');
});

document.querySelector('.image-container').addEventListener('mouseleave', function() {
    const mask = this.querySelector('.mask');
    mask.style.backgroundPosition = 'initial'; // Ripristina la posizione iniziale della maschera
    mask.classList.remove('active');
});
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
}); 

ScrollReveal().reveal('.right, .number, .footer', {origin: 'bottom' });
ScrollReveal().reveal('.left, .img-container-2', { origin: 'top' });
ScrollReveal().reveal('.img-grid, .img-container-1', { origin: 'left' });
ScrollReveal().reveal('.heading, .img-container-3', { origin: 'right' });
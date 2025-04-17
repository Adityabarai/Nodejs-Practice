const zoomImage = document.querySelector('.zoom-image');

// Create a floating coordinate box
const coordDisplay = document.createElement('div');
coordDisplay.style.position = 'fixed';
coordDisplay.style.padding = '6px 10px';
coordDisplay.style.background = '#333';
coordDisplay.style.color = '#fff';
coordDisplay.style.fontSize = '14px';
coordDisplay.style.fontFamily = 'monospace';
// coordDisplay.style.borderRadius = '5px';
coordDisplay.style.pointerEvents = 'none';
coordDisplay.style.display = 'none';
document.body.appendChild(coordDisplay);

// Show coordinates when hovering over the image
zoomImage.addEventListener('mousemove', (e) => {
    coordDisplay.style.display = 'block';
    coordDisplay.style.left = `${e.clientX + 15}px`;
    coordDisplay.style.top = `${e.clientY + 15}px`;
    coordDisplay.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

zoomImage.addEventListener('mouseleave', () => {
    coordDisplay.style.display = 'none';
});

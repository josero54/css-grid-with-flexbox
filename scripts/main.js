const fill_grid = function () {
    const main = document.querySelector('#main');
    const range = document.querySelector('#range_size');
    const title = document.querySelector('#title');
    
    // Initial title update
    title.textContent = `How many squares do you want?  ${range.value}`;

    range.addEventListener('input', () => {
        const value = parseInt(range.value);
        
        // Update title in real-time
        title.textContent = `How many squares do you want?  ${value}`;

        main.innerHTML = ''; // Clear existing pixels

        // Calculate grid dimensions
        const pixelsPerSide = Math.ceil(Math.sqrt(value));
        
        // Set grid template
        main.style.gridTemplateColumns = `repeat(${pixelsPerSide}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${pixelsPerSide}, 1fr)`;

        // Create pixels
        for (let i = 0; i < value; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            main.appendChild(pixel);
        }
    });
};

fill_grid();
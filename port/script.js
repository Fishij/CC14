function changeColor() {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('change-color-btn').addEventListener('click', changeColor);




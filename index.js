const imgBtn = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImg(data))
}
const displayImg = (images) => {
    const imgContainer = document.getElementById('images');
    for (const image of images) {
        const img = document.createElement('img');
        img.src = image.url;
        imgContainer.appendChild(img);
        imgContainer.style.width = '90px';
    }
}
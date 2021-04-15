let apiAddress = `https://xkcd.now.sh/?comic=latest`;

const container = document.getElementById("content");

function displayComic(imgUrl){
    let newImg = document.createElement("img");
    container.appendChild(newImg);
    newImg.src = imgUrl;
}

fetch(apiAddress)
.then(response => response.json())
.then(data => {
    console.log(data)
    displayComic(data.img);
})
.catch(error => console.log(error));
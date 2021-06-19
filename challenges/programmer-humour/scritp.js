let apiAddress = `https://xkcd.now.sh/?comic=latest`;

const container = document.getElementById("content");

function displayComic(dataObj) {
	let newImg = document.createElement("img");
	let newHeading = document.createElement("h1");
	container.appendChild(newHeading);
	newHeading.innerText = dataObj.safe_title;
	container.appendChild(newImg);
	newImg.src = dataObj.img;
}

fetch(apiAddress)
	.then((response) => {
		console.log(response);
		if (response.status >= 200 && response.status < 300) {
			return response.json();
		} else {
			throw `Error here! ${response.status}:${response.statusText}`;
		}
	})
	.then((data) => {
		console.log(data);
		displayComic(data);
	})
	.catch((error) => alert(error));

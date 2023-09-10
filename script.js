function setContent(text) {
    document.getElementById("content").innerHTML = text
}

setContent("Hello from script.js")

function displayImages(array) {
    array.forEach(element => {
        let thisImage = document.createElement("img")
        thisImage.src = element
        thisImage.classList.add("smaller-image")
        document.body.appendChild(thisImage)
    });
}

async function getData() {
    const url = "https://net-fun-sand-2.netlify.app/.netlify/functions/hello-world?name=from+netlify+function"
    // const url = "http://localhost:8888/.netlify/functions/hello-world?name=from+netlify+function+via+localhost"

    const response = await fetch(url)
    const json = await response.json()

    console.log(json)
    console.log(json.message);

    setContent(json.message)


}

getData()

async function getApiData() {
    const url = "https://net-fun-sand-2.netlify.app/.netlify/functions/token-hider"
    // const url = "http://localhost:8888/.netlify/functions/token-hider"

    const response = await fetch(url)
    const json = await response.json()

    console.log(json.message)

    displayImages(json.message)
}

getApiData()


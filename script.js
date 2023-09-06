function setContent(text) {
    document.getElementById("content").innerHTML = text
}

setContent("Hello from script.js")

async function getData() {
    // const url = "https://net-fun-sand-2.netlify.app/.netlify/functions/hello-world?name=from+netlify+function"
    const url = "http://localhost:8888/.netlify/functions/hello-world?name=from+netlify+function+via+localhost"

    const response = await fetch(url)
    const json = await response.json()

    console.log(json)
    console.log(json.message);

    setContent(json.message)


}

getData()


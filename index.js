async function getData(){
    response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.apiKey}&date=2007-3-31`)
    data = await response.json();
    console.log(data);
    var img = new Image();
    img.src = data.url;
    testDiv1.appendChild(img);
    document.getElementById("testDiv2").innerText = data.explanation
}

getData();
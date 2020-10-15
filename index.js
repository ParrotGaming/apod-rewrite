const container = document.getElementById("container")

function randomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

async function getData(date) {
    response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.apiKey}&date=${date}`)
    data = await response.json();
    console.log(data);
    return data
}

function makeDiv(data) {
    var div = document.createElement('div')
    div.classList.add("entry")
    var img = new Image()
    img.src = data.url
    var desc = document.createElement('p')
    desc.innerText = data.explanation
    var title = document.createElement('h2')
    title.innerText = data.title
    div.appendChild(title)
    div.appendChild(img)
    div.appendChild(desc)
    return div
}

function makeTodayDate() {
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return(today)
}

function makeRandomDate() {
    var today = new Date();
    var dd = randomInt(1,28);
    
    var mm = randomInt(1,12); 
    var yyyy = randomInt(1996, today.getFullYear());
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return(today)
}

function appendData(div) {
    container.appendChild(div)
}

for (i = 0; i < 10; i++) {
    getData(makeRandomDate()).then(data => appendData(makeDiv(data)))
}
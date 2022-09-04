//This is temporary for learning perpose. API key should not be here open
const API_KEY = 'e3d53161bf5f8e49b826a4dbba3e4537'; 
const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = data => {
    console.log(data);
    setElementTExt('temp', data.main.temp);
    setElementTExt('city', data.name);
    setElementTExt('condition', data.weather[0].main)
}

const setElementTExt = (id, text) => {
    const temp = document.getElementById(id);
    temp.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const value = document.getElementById('text-field').value;
    loadWeather(value)
})

document.getElementById('text-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('btn-search').click();
    }
})

loadWeather('dhaka');
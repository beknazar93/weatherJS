import { getWeatherData } from "./api.js";
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const main = document.querySelector('.weather__main');

btn.addEventListener('click', function(){
    const weatherInput = input.value;
    const app = async(a)=>{
        const weather = await getWeatherData(a)
        console.log(weather);
        main.innerHTML="";
        main.innerHTML=` <table border="1">
        <tr>
            <th>Город</th>
            <th>Страна</th>
            <th>температура</th>
            <th>небо</th>
        </tr>
          <tr>
            <td>${weather.name}</td>
            <td style="writing-mode: vertical-lr;">${weather.sys.country == "KG" ? 'Кыргызстан': weather.sys.country}</td>
            <td>${(weather.main.temp)}°C</td>
            <td>
            
            <img src='https://openweathermap.org/img/wn/${weather.weather[0].icon}.png' alt="photo">
                <p>${weather.weather[0].description}</p>
            </td>
        </tr>
    </table> `
    }
    app(weatherInput)

    input.value = ""



})



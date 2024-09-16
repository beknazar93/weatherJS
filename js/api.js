

export const getWeatherData = async(city)=>{
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3039a1657f9a1f626b6607d7fd9d470b&lang=ru&units=metric`
        )
        return await response.json();
    }catch(error){
        console.warn(error);    
    }
}
const apikey="1aff4fe437aaa9c75c3422f683189f57";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weathericon");

async function checkWeather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    console.log(response)

    if (response.status===404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
        var data = await response.json();

         console.log(data);
        // inside main we have the temp  &name &humidity 
        // indide weather we have weathercondition like clouds sunyyy clear
        // inside wind we have speed and direction
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main==="Clouds")
        {
            weathericon.src="images/clouds.png"
        }
    
        else if(data.weather[0].main==="Clear")
        {
            weathericon.src="images/clear.png"
        
        }
        else if(data.weather[0].main==="Rain")
        {
            weathericon.src="images/rain.png"
        
        }
        else if(data.weather[0].main==="Drizzle")
        {
            weathericon.src="images/drizzle.png"
        
        }
        else if(data.weather[0].main==="Mist")
        {
            weathericon.src="images/mist.png"
        
        }
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
}


searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

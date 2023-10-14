let searchBox = document.getElementById("search-city")
searchBox.addEventListener("keypress",(e) => {
    if(e.keyCode == 13)
  {
    getWeatherData(searchBox.value)
  }
})

function getWeatherData(cityName) {
    let apikey ="7e3f21edee540e6110af347b55eb1ab2"
    fetch(`https://api.openwethermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`)
    .then(res => res.json())
    .then(res => {
        displayWeatherData(res)
    })
}

function displayWeatherData(weatherData)
{
   let city = document.querySelector(".city")
   let date =document.querySelector(".date")
   let temp = document.querySelector(".temp")
   let weather = document.querySelector(".city")
   let hiLow = document.querySelector(".city")

   city.innerText =`${weatherData.name}, ${weatherData.sys.country}`
   temp.innerText =`${Math.round(weatherData.main.temp)}c`
   weather.innerText = `${weatherData.weather[0].main}`

   hillow.innerText =`${Math.round(weatherData.main.temp_min)}c/ ${Math.round(weatherData.main.temp_max)}c`
   date.innerText = getTodaysDate()
}

function getTodaysDate() {
    let date = new Date();
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log(date.getDay())
    let day = days[date.getDay()]
    let month = months[date.getMonths()]
    return `${date} ${date.getDate()} ${month} ${date.getFullYear()}`

}

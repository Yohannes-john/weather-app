const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');


async function getWeather(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dea0910661d4de08f28c50ba7fcd245a&units=metric`);
    if(res.status == 404){
        document.querySelector('.error').style.display = "block";
    } else{
        document.querySelector('.error').style.display = "none";
    }
    var data = await res.json();
    console.log(data);
    document.querySelector(".celcius").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidityp").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".winds").innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        image.src = "image/Premium-Vector-Cloud-Icon-in-trendy-flat-style-isolated-on-blue--678313451.jpg";
    }else if(data.weather[0].main == "Clear"){
        image.src = "image/Screenshot_20250110-105536_Gallery.jpg";
    }else if(data.weather[0].main == "Rain"){
        image.src = "image/Heavy-Rain-Icon-208619-Free-Icons-Library-1993678089.jpg";
    }else if(data.weather[0].main == "Drizzle"){
        image.src = "image/Screenshot_20250110-105443_Image Downloader.jpg";
    }else if(data.weather[0].main == "Mist"){
        image.src = "image/image/Screenshot_20250110-105542_Gallery.jpg";
    }
}

searchBtn.addEventListener('click',() =>{
    getWeather(searchInput.value);
})
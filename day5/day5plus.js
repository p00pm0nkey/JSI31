let city = ""
let ct = document.getElementById("h22")
let wt = document.getElementById("h21")
let smol = document.getElementById("smol")
let button = document.querySelector("button")
let img = document.querySelector("img")
let inside = document.getElementsByClassName("inside")
button.addEventListener("click", function() {
    let x = document.querySelector("input").value
    smol.innerText = x
    x.toLowerCase()
    x = x.replace(/\s+/g, '');
    city = x
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data.results[0].latitude)
        let lat = data.results[0].latitude
        console.log(data.results[0].longitude)
        let long = data.results[0].longitude
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
            .then((res) => res.json())
            .then((data) => {
                let y = data.current_weather.weathercode
                console.log(data.current_weather.temperature)
                console.log(y)
                ct.innerText = data.current_weather.temperature + "°C"
                if (y == 0) {
                    wt.innerText = "Clear skies"
                    img.src = "Clear.jpg"
                } else if (y == 1 || y == 2 || y == 3) {
                    wt.innerText = "Cloudy"
                    img.src = "Cloudy.jpg"
                } else if (y == 45 || y == 48) {
                    wt.innerText = "Foggy"
                    img.src = "Foggy.jpg"
                } else if (y > 60 && y < 68) {
                    wt.innerText = "Rainy"
                    img.src = "Rainy.gif"
                    inside.style.backgroundColor = "rgba(128, 128, 128, 50%)"
                } else if (y > 70 && y < 78) {
                    wt.innerText = "Snowy"
                    img.src = "Snowy.jpg"
                } else if (y > 79 && y < 83) {
                    wt.innerText = "Rain"
                    img.src = "Rainy.gif"
                    inside.style.backgroundColor = "rgba(128, 128, 128, 50%)"
                } else if (y == 85 || y == 86) {
                    wt.innerText = "Snow"
                    img.src = "Snowy.jpg"
                } else if (y > 94) {
                    wt.innerText = "Thunderstorm"
                    img.src = "Thunder.jpg"
                }
            })
    })
})
let city = ""
let ct = document.querySelector("p")
let button = document.querySelector("button")
button.addEventListener("click", function() {
    let x = document.querySelector("input").value
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
                console.log(data.current_weather.temperature)
                ct.innerText = "Current Temp: " + data.current_weather.temperature
            })
    })
})


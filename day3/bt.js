let hour
let min
let sec

setInterval(function() {
    let date = new Date()
    hour = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    let time = document.getElementById("time")
    time.innerText = `${hour}/${min}/${sec}`
}, 1000)

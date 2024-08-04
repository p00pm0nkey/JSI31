// setTimeout: đếm ngược thời gian
// VD: setTimeout(function(){}, t)
// t: milisec

// setTimeout(function() {
//     console.log("1")
// }, 3000)

// let myInterval = setInterval(function() {
//     console.log("Dang dz")
// }, 4000)

let count = document.getElementById("count")

let c = 1
let myInterval

let start = document.getElementById("start")
let pause = document.getElementById("pause")
let cont = document.getElementById("cont")
let reset = document.getElementById("reset")

start.addEventListener("click", function(){
    myInterval = setInterval(function(){
        count.innerText = `${c}`
        c++
    }, 1000)
    pause.disabled = false
    start.disabled = true
    reset.disabled = false
})

pause.addEventListener("click", function(){
    clearInterval(myInterval)
    cont.disabled = false
    pause.disabled = true
})

cont.addEventListener("click", function(){
    myInterval = setInterval(function(){
        count.innerText = `${c}`
        c++
    }, 1000)
    cont.disabled = true
    pause.disabled = false
})

reset.addEventListener("click", function(){
    clearInterval(myInterval)
    c = 1
    myInterval = setInterval(function(){
        count.innerText = `${c}`
        c++
    }, 1000)
    cont.disabled = true
    pause.disabled = false
})

// btvn:dong ho dien tu
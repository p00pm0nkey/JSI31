// GET, POST, PUT, DELETE
// Khi fetch nó trả về 1 promise để xử lý dùng hàm .then()

const myPromise = new Promise(function (resolve, reject) {
    let myName = "Đăng"
    if (myName == "Đăng") {
        resolve("dangnadanngnangdngnadgn")
    } else {
        reject("bruh")
    }
})

// Xử lý trường hợp promise thành công dùng .then()
// Xử lý trường hợp thất bại dùng catch()

myPromise.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})

let img = document.querySelectorAll("img")

fetch("https://picsum.photos/200/300")
    .then((data) => {
        img[0].src = data.url
    })

fetch("https://picsum.photos/200/300")
    .then((data) => {
        img[1].src = data.url
    })

fetch("https://picsum.photos/200/300")
    .then((data) => {
        img[2].src = data.url
    })

// Async/Await (dùng await để xử lý resolve, dùng try-catch để xử lý reject)
async function execute () {
    try {
        const dataImage = await myPromise
        console.log(dataImage)
    } catch (err) {
        console.log(err)
    }
    
}
execute()
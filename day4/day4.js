// Client: Những thiết bị kết nối v mạng
// API: Cổng kết nối giữa Client và server
// API Server: Chứa data
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        // let newData = data.slice(0, 10)
        // console.log(newData)

        const photoList = document.getElementById('photo-list');
        for (let x = 0; x < data.length; x++) {
            let list = document.createElement("div")
            list.innerHTML = `<ul> <b>${data[x].title}</b> <li>${data[x].id}</li> </ul>`
            photoList.appendChild(list)
            list.addEventListener("dblclick", function () {
                list.remove()
            })
        }

        // let search = document.getElementById("search")
        // search.addEventListener("click", function () {
        //     let input = document.querySelector("input").value
        //     const photoList2 = document.getElementById('photo-list2');
        //     let list = document.getElementById("here")
        //     list.innerHTML = `<ul> <b>${data[input - 1].title}</b> <li>${data[input - 1].id}</li> </ul>`
        //     photoList2.appendChild(list)
        // })
    })

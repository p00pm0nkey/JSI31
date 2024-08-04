// innertext vs innerHTML: đọc tag name dùng innerHTML

let list_product = [
    { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
    { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
    { name: "Table", price: 64, availability: true, id: "3", category: "shirt" }
]

// Cách 1:
for (i = 0; i < list_product.length; i++) {
    let container = document.createElement("div")
    container.className = "container"

    let p_id = document.createElement("p")
    p_id.innerHTML = `ID: <b>${list_product[i].id}</b>`

    let p_name = document.createElement("p")
    p_name.innerHTML = `Tên: <b>${list_product[i].name}</b>`

    let p_price = document.createElement("p")
    p_price.innerHTML = `Giá: <b>${list_product[i].price}</b>`

    let p_status = document.createElement("p")
    if (list_product[i].availability == true) {
        p_status.innerHTML = `Trạng thái: <b>Còn hàng</b>`
    } else {
        p_status.innerHTML = `Trạng thái: <b>Hết hàng</b>`
    }

    let p_category = document.createElement("p")
    p_category.innerHTML = `Loại sản phẩm: <b>${list_product[i].category}</b>`
    
    document.getElementById("bruh").appendChild(container)
    container.appendChild(p_id)
    container.appendChild(p_name)
    container.appendChild(p_price)
    container.appendChild(p_status)
    container.appendChild(p_category)
}


// Cách 2:
for (i = 0; i < list_product.length; i++) {
    let container = document.createElement("div")
    container.className = "container"
    container.innerHTML = `
    <p>ID: <b>${list_product[i].id}<b></p>

    <p>Tên: <b>${list_product[i].name}<b></p>

    <p>Giá: <b>${list_product[i].price}<b></p>

    <p>Trạng thái: <b>${list_product[i].availability? "Còn hàng" : "Hết hàng"}<b></p>

    <p>Loại sản phẩm: <b>${list_product[i].category}<b></p>`
}
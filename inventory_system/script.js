document.addEventListener("DOMContentLoaded", function () {
    loadProducts();

    document.getElementById("product-form").addEventListener("submit", function (event) {
        event.preventDefault();
        addProduct();
    });
});

function loadProducts() {
    fetch("get_products.php")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#product-table tbody");
            tableBody.innerHTML = "";
            data.forEach(product => {
                let row = `<tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price}</td>
                    <td>
                        <button onclick="deleteProduct(${product.id})">Hapus</button>
                    </td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        });
}

function addProduct() {
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    fetch("add_product.php", {
        method: "POST",
        body: JSON.stringify({ name, quantity, price }),
        headers: { "Content-Type": "application/json" }
    })
    .then(() => {
        document.getElementById("product-form").reset();
        loadProducts();
    });
}

function deleteProduct(id) {
    fetch(`delete_product.php?id=${id}`, { method: "GET" })
    .then(() => loadProducts());
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);
const url = "https://kea-alt-del.dk/t7/api/products?limit=200&category=" + category;
fetch(url)
.then(function (res) {
return res.json();
})
.then(function (data) {
handleProductlist(data);
});
function handleProductlist(data) {
data.forEach(showProduct);}
function showProduct(product) {
document.querySelector("h1").textContent = product.category;
const template = document.querySelector("#reg_product_template").content;
const copy = template.cloneNode(true);
copy.querySelector("a").href = "product.html?id=" + product.id;
copy.querySelector("h2").textContent = product.productdisplayname;
copy.querySelector(".brand").textContent = product.brandname;
copy.querySelector("article img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
copy.querySelector("article img").alt = product.productdisplayname;
copy.querySelector(".price").textContent =
product.price -
(product.discount / 100) * product.price.toPrecision(2) + "EUR.";
copy.querySelector(".discount_percent").textContent =
product.discount + "% off";
copy.querySelector(".prev_price").textContent = product.price + "EUR.";
if (product.soldout) {
copy.querySelector("article").classList.add("sold_out");}
if (product.discount) {
copy.querySelector("article").classList.add("on_sale");}
const parent = document.querySelector("section");
parent.appendChild(copy);}
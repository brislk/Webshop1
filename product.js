const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
function showProduct(product) {
  console.log(product);
  document.querySelector(".category").textContent = product.category + "/ ";
  document.querySelector(".product_name").textContent =
product.productdisplayname;
  document.querySelector(".product_image").src =
"https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  document.querySelector(".product_image").alt = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".description").innerHTML = product.description;
  document.querySelector(".color_box").style.backgroundColor = product.basecolour;
}
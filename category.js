fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(gotData);
function gotData(data) {
data.forEach(showCategory);}

function showCategory(category) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").href =
    "product_list.html?category=" + category.category;
  copy.querySelector("h2").textContent = category.category;

  const parent = document.querySelector("section");

  parent.appendChild(copy);
}
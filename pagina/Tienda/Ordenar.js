// Funcionalidad para cambiar la imagen del botón de guardado
document.querySelectorAll(".save-btn").forEach(button => {
  button.addEventListener("click", function () {
    let img = this.querySelector("img");
    if (img.src.includes("Guardado_prod.png")) {
      img.src = "imgs/Guardado.png";
    } else {
      img.src = "imgs/Guardado_prod.png";
    }
  });
});

// Filtro de productos
document.querySelectorAll(".dropdown-item[data-filter]").forEach(item => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-filter");
    const products = document.querySelectorAll("#productList > div");
    products.forEach(product => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Ordenar productos
document.querySelectorAll(".dropdown-item[data-sort]").forEach(item => {
  item.addEventListener("click", function () {
    const sortType = this.getAttribute("data-sort");
    let productsArray = Array.from(document.querySelectorAll("#productList > div"));

    if (sortType === "menor") {
      productsArray.sort((a, b) => parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price")));
    } else if (sortType === "mayor") {
      productsArray.sort((a, b) => parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price")));
    } else if (sortType === "original") {
      productsArray.sort((a, b) => a.getAttribute("data-category").localeCompare(b.getAttribute("data-category")));
    }

    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    productsArray.forEach(product => {
      productList.appendChild(product);
    });
  });
});

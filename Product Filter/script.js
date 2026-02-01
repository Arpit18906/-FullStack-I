const categorySelect = document.getElementById("categories");
const products = document.querySelectorAll(".product");


categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;

    products.forEach(product => {
        if (
            selectedCategory === "all" ||
            product.dataset.type === selectedCategory
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

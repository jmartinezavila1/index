const showCartButtons = document.querySelectorAll(".show-cart-btn");

showCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        document.getElementById("cart-popup").style.display = "block";
    });
});
document.getElementById("close-cart-btn").addEventListener("click", function () {
    document.getElementById("cart-popup").style.display = "none";
});

const showCartButtons1 = document.querySelectorAll(".show-cart-btn1");

showCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        document.getElementById("cart-popup1").style.display = "block";
    });
});
document.getElementById("close-cart-btn1").addEventListener("click", function () {
    document.getElementById("cart-popup1").style.display = "none";
});
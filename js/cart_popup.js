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

// to make the jobs Collapsible

function toggleJobDetails(jobId) {
    var content = document.getElementById(jobId);
    content.style.display = content.style.display === "block" ? "none" : "block";
}


function toggleJobDetails(jobId) {
    var content = document.getElementById(jobId);
    var icon = document.getElementById('icon-' + jobId);

    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.classList.remove('bi-caret-down');
      icon.classList.add('bi-caret-right');
    } else {
      content.style.display = 'block';
      icon.classList.remove('bi-caret-right');
      icon.classList.add('bi-caret-down');
    }
  }


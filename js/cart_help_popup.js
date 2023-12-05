const showCartButtons = document.querySelectorAll(".show-cart-btn");

showCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        document.getElementById("cart-popup").style.display = "block";
    });
});


const showCartButtons1 = document.querySelectorAll(".show-cart-btn1");

showCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        document.getElementById("cart-popup").style.display = "block";
    });
});

// Función para cerrar el popup
function closeCartPopup() {
    var cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'none';

    // Guardar estado del popup en sessionStorage
    sessionStorage.setItem('popupClosed', 'true');
  }

  // Verificar si sessionStorage indica que el popup debe cerrarse
  window.onload = function() {
    var popupClosed = sessionStorage.getItem('popupClosed');

    if (!popupClosed) {
      var cartPopup = document.getElementById('cart-popup');
      cartPopup.style.display = 'block';
    }
  };
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


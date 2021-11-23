// Выпадающие списки

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#header-btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__dropdown");

      document.querySelectorAll("#header-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("dropdown-active");
        }
      });

      document.querySelectorAll(".header__dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("dropdown-active");
        }
      })
      dropdown.classList.toggle("dropdown-active");
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
      document.querySelectorAll(".header__dropdown").forEach(el => {
        el.classList.remove("dropdown-active");
      })
    }
  })
})

(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMobmenuBtn: document.querySelector("[data-mobmenu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMobmenuBtn: document.querySelector("[data-mobmenu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    mobmenu: document.querySelector("[data-mobmenu]"),
  };

  refs.openMobmenuBtn.addEventListener("click", toggleMobmenu);
  refs.closeMobmenuBtn.addEventListener("click", toggleMobmenu);

  function toggleMobmenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobmenu.classList.toggle("is-open");
  }
})();

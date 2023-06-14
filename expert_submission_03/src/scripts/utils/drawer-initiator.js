const DrawerInitiator = {
  init({button, drawer, content}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
    const navItems = drawer.querySelectorAll('li');
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener('click', (event) => {
        event.stopPropagation();
        const currentText = navItems[i].textContent;
        Array.from(navItems).map((el) => {
          if (currentText != el.textContent) {
            el.classList.remove('active');
          } else if (currentText == el.textContent &&
            !el.classList.contains('active')) {
            el.classList.toggle('active');
            console.log(el.textContent);
          }
          this._closeDrawer(event, drawer);
        });
      });
    }
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;

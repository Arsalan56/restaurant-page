import CreateHome from './home';
import CreateMenu from './menu';
import CreateContact from './contact';

// CreateMenu();
// CreateContact();

// function menu() {}
((Home, Menu, Contact) => {
    Home();
    const tabs = document.querySelectorAll('header li');

    const logo = document.querySelector('.h-top img:first-of-type');

    function Remove() {
        const body = document.querySelector('body');
        const main = document.querySelector('main');
        body.removeChild(main);
    }

    const btnReload = () => {
        const menubtn = document.querySelector('.home > button');
        menubtn.addEventListener('click', () => {
            Remove();
            Menu();
        });
    };

    tabs[0].addEventListener('click', () => {
        Remove();
        Home();
        btnReload();
    });
    logo.addEventListener('click', () => {
        Remove();
        Home();
        btnReload();
    });

    tabs[1].addEventListener('click', () => {
        Remove();
        Menu();
    });
    btnReload();
    tabs[2].addEventListener('click', () => {
        Remove();
        Contact();
    });
})(CreateHome, CreateMenu, CreateContact);

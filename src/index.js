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
        if (!document.querySelector('main.home')) {
            Remove();
            Home();
            btnReload();
        }
    });
    logo.addEventListener('click', () => {
        if (!document.querySelector('main.home')) {
            Remove();
            Home();
            btnReload();
        }
    });

    tabs[1].addEventListener('click', () => {
        if (!document.querySelector('main.menu')) {
            Remove();
            Menu();
        }
    });
    btnReload();
    tabs[2].addEventListener('click', () => {
        if (!document.querySelector('main.contact')) {
            Remove();
            Contact();
        }
    });
})(CreateHome, CreateMenu, CreateContact);

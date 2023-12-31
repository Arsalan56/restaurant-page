import CreateHome from './home';
import CreateMenu from './menu';
import CreateContact from './contact';
import './style.css';
import './kabob.png';
import './mail.svg';
import './map.svg';
import './call.svg';
import './menu-1.jpg';
import './menu-2.jpg';
import './menu-3.jpeg';
import './menu-4.jpg';
import './menu-5.jpg';
import './menu-6.jpg';
import './background.jpg';

((Home, Menu, Contact) => {
    Home();
    const compLogo = document.querySelector('.h-top > a > img');
    compLogo.setAttribute('src', 'src/kabob.png');

    const body = document.querySelector('body');
    const tabs = document.querySelectorAll('header li');

    const logo = document.querySelector('.h-top img:first-of-type');

    function Remove() {
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

export default () => {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    const title = document.createElement('p');
    const container = document.createElement('div');

    const phonediv = document.createElement('div');
    const phoneimg = document.createElement('img');
    const phoneinfo = document.createElement('p');

    const maildiv = document.createElement('div');
    const mailimg = document.createElement('img');
    const mailinfo = document.createElement('p');

    const locdiv = document.createElement('div');
    const locimg = document.createElement('img');
    const locinfo = document.createElement('p');

    const gap1 = document.createElement('div');
    const gap2 = document.createElement('div');

    main.classList.add('contact');
    title.textContent = 'Contact Us!';
    phoneimg.setAttribute('src', './b33a66423d0716f04b312ff83a138663.svg');
    mailimg.setAttribute('src', './b8d539a57e583502ee4138db41def34d.svg');
    locimg.setAttribute('src', './2463b6ec73bef742cdc12a21e0c07758.svg');

    phoneinfo.textContent = '+1 (012)543-9876';
    mailinfo.textContent = 'flaminkabob@eatnow.com';
    locinfo.textContent = '123 Kabob St.';

    gap1.classList.add('gap');
    gap2.classList.add('gap');

    body.appendChild(main);
    main.appendChild(title);
    main.appendChild(container);

    container.appendChild(phonediv);
    container.appendChild(gap1);
    container.appendChild(maildiv);
    container.appendChild(gap2);
    container.appendChild(locdiv);

    phonediv.appendChild(phoneimg);
    phonediv.appendChild(phoneinfo);
    maildiv.appendChild(mailimg);
    maildiv.appendChild(mailinfo);
    locdiv.appendChild(locimg);
    locdiv.appendChild(locinfo);
};

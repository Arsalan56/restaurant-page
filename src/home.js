export default () => {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    const title = document.createElement('p');
    main.classList.add('home');
    const desc = document.createElement('p');
    const btn = document.createElement('button');
    const gap = document.createElement('div');
    const hrs = document.createElement('div');
    const hrstitle = document.createElement('p');
    const date1 = document.createElement('p');
    const date2 = document.createElement('p');
    const address = document.createElement('p');

    main.classList.add('home');
    gap.classList.add('gap');
    hrs.classList.add('hours');

    title.textContent = 'Best Kabob Grill in Town!';
    desc.textContent = 'Serving top quality food since 2023';
    btn.textContent = 'View Menu';
    hrstitle.textContent = 'Hours:';
    date1.textContent = 'Sat-Sun: 10AM-10PM';
    date2.textContent = 'Mon-Fri: 11AM-11PM';
    address.textContent = '123 Kabob St.';

    body.appendChild(main);
    main.appendChild(title);
    main.appendChild(desc);
    main.appendChild(btn);
    main.appendChild(gap);
    main.appendChild(hrs);
    hrs.appendChild(hrstitle);
    hrs.appendChild(date1);
    hrs.appendChild(date2);
    main.appendChild(address);
};

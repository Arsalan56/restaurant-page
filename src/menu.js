export default () => {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    const title = document.createElement('p');

    const imgcont1 = document.createElement('div');
    const imgcont2 = document.createElement('div');
    const imgcont3 = document.createElement('div');
    const imgcont4 = document.createElement('div');
    const imgcont5 = document.createElement('div');
    const imgcont6 = document.createElement('div');

    const img1src = document.createElement('p');
    const img2src = document.createElement('p');
    const img3src = document.createElement('p');
    const img4src = document.createElement('p');
    const img5src = document.createElement('p');
    const img6src = document.createElement('p');

    const img1anc = document.createElement('a');
    const img2anc = document.createElement('a');
    const img3anc = document.createElement('a');
    const img4anc = document.createElement('a');
    const img5anc = document.createElement('a');
    const img6anc = document.createElement('a');

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const img6 = document.createElement('img');

    const img1name = document.createElement('p');
    const img2name = document.createElement('p');
    const img3name = document.createElement('p');
    const img4name = document.createElement('p');
    const img5name = document.createElement('p');
    const img6name = document.createElement('p');

    const img1cost = document.createElement('p');
    const img2cost = document.createElement('p');
    const img3cost = document.createElement('p');
    const img4cost = document.createElement('p');
    const img5cost = document.createElement('p');
    const img6cost = document.createElement('p');

    title.textContent = 'Menu';

    // Anchors
    img1anc.setAttribute(
        'href',
        'https://www.freepik.com/free-photo/top-view-chicken-lula-kebab-with-rice-grilled-vegetables-onions_8056370.htm#query=lamb%20kabob%20with%20rice&position=0&from_view=search&track=ais'
    );
    img1anc.textContent = 'Image by stockking on Freepik';
    img2anc.setAttribute(
        'href',
        'https://www.freepik.com/free-photo/kebab-selection-desk-with-herbs_6355965.htm#query=lamb%20kabob&position=0&from_view=search&track=ais'
    );
    img2anc.textContent = 'Image by KamranAydinov on Freepik';
    img3anc.setAttribute(
        'href',
        'https://www.freepik.com/premium-photo/afghani-bolani-is-chives-vegan-stuffed-flatbread-traditional-popular-afghanistan-india-served-yogurt-dipping-sauce-decoration-carving-chili-vegetables-sideview_19894926.htm#query=bolani&position=11&from_view=search&track=sph'
    );
    img3anc.textContent = 'Image by vimilkvimin on Freepik';
    img3anc.setAttribute('id', 'a-color');
    img4anc.setAttribute(
        'href',
        'https://www.freepik.com/free-photo/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad_7652081.htm#query=kabob&position=11&from_view=search&track=sph'
    );
    img4anc.textContent = 'Image by stockking on Freepik';
    img5anc.setAttribute(
        'href',
        'https://www.freepik.com/free-ai-image/grilled-beef-burrito-with-fresh-guacamole-salsa-generated-by-ai_41311118.htm#query=kabob%20shawarma&position=0&from_view=search&track=ais_ai_generated'
    );
    img5anc.textContent = 'Image by vecstock on Freepik';
    img6anc.setAttribute(
        'href',
        'https://www.freepik.com/free-photo/rice-with-chicken-vegetables-stick_7359616.htm#query=lamb%20kabob%20and%20brown%20rice&position=3&from_view=search&track=ais'
    );
    img6anc.textContent = 'Image by KamranAydinov on Freepik';
    // Sources

    img1src.appendChild(img1anc);
    img2src.appendChild(img2anc);
    img3src.appendChild(img3anc);
    img4src.appendChild(img4anc);
    img5src.appendChild(img5anc);
    img6src.appendChild(img6anc);
    img1.setAttribute('src', 'src/menu-1.jpg');
    img2.setAttribute('src', 'src/menu-2.jpg');
    img3.setAttribute('src', 'src/menu-3.jpeg');
    img4.setAttribute('src', 'src/menu-4.jpg');
    img5.setAttribute('src', 'src/menu-5.jpg');
    img6.setAttribute('src', 'src/menu-6.jpg');

    img1name.textContent = 'Beef Kabob With Rice';
    img2name.textContent = 'Lamb Kabob';
    img3name.textContent = 'Bolani';
    img4name.textContent = 'Chicken and Lamb Kabob';
    img5name.textContent = 'Beef Shawarma';
    img6name.textContent = 'Chicken Kabob with Rice';

    img1cost.textContent = '$14.95';
    img2cost.textContent = '$17.95';
    img3cost.textContent = '$6.99';
    img4cost.textContent = '$17.95';
    img5cost.textContent = '$8.99';
    img6cost.textContent = '$12.95';

    main.classList.add('menu');
    body.appendChild(main);
    main.appendChild(title);

    imgcont1.appendChild(img1src);
    imgcont1.appendChild(img1);
    imgcont1.appendChild(img1name);
    imgcont1.appendChild(img1cost);

    imgcont2.appendChild(img2src);
    imgcont2.appendChild(img2);
    imgcont2.appendChild(img2name);
    imgcont2.appendChild(img2cost);

    imgcont3.appendChild(img3src);
    imgcont3.appendChild(img3);
    imgcont3.appendChild(img3name);
    imgcont3.appendChild(img3cost);

    imgcont4.appendChild(img4src);
    imgcont4.appendChild(img4);
    imgcont4.appendChild(img4name);
    imgcont4.appendChild(img4cost);

    imgcont5.appendChild(img5src);
    imgcont5.appendChild(img5);
    imgcont5.appendChild(img5name);
    imgcont5.appendChild(img5cost);

    imgcont6.appendChild(img6src);
    imgcont6.appendChild(img6);
    imgcont6.appendChild(img6name);
    imgcont6.appendChild(img6cost);

    main.appendChild(imgcont1);
    main.appendChild(imgcont2);
    main.appendChild(imgcont3);
    main.appendChild(imgcont4);
    main.appendChild(imgcont5);
    main.appendChild(imgcont6);
};

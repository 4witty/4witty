const titles = [
    '@ ',
    '@4 ',
    '@4w ',
    '@4wi ',
    '@4wit ',
    '@4witt ',
    '@4witty '
];

let index = 0;
setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}, 1000);
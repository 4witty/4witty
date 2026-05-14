var titles = [
    "@ ",
    "@4 ",
    "@4w ",
    "@4wi ",
    "@4wit ",
    "@4witt ",
    "@4witty "
];

function changeTitle() {
    var index = 0;
    setInterval(function() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 1000);
}

changeTitle();
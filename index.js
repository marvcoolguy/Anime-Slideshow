var i = 0;
var images = []
images[0] = "Images/Anyanokoji.jpg";
images[1] = "Images/Bachira.jpg";
images[2] = "Images/Chika.jpg";
images[3] = "Images/Genos.jpg";
images[4] = "Images/Gojo.jpg";
images[5] = "Images/Goku.jpg";
images[6] = "Images/Horikita.jpg";
images[7] = "Images/Isagi.jpg";
images[8] = "Images/Kaguya.jpg";
images[9] = "Images/Luffy.jpg";
images[10] = "Images/Miyuki.jpg";
images[11] = "Images/Nezuko.jpg";
images[12] = "Images/Nico-Robin.jpg";
images[13] = "Images/Rengoku.jpg";
images[14] = "Images/Saitama.jpg";
images[15] = "Images/Sukuna.jpg";
images[16] = "Images/Tanjiro.jpg";
images[17] = "Images/Tatsumaki.jpg";
images[18] = "Images/Tengen.jpg";
images[19] = "Images/Vegeta.jpg";
images[20] = "Images/Zenitsu.jpg";


function left() {
    let x = document.querySelector('.showcase');
    x.style.backgroundImage = `url(${images[i]})`;
    i--;
    if (i < 0) {
        i = 20;
    }
}
function right() {
    let x = document.querySelector('.showcase');
    x.style.backgroundImage = `url(${images[i]})`;
    i++;
    if (i > 20) {
        i = 0;
    }
}

left()
right()

function changeImage() {
    let x = document.querySelector('.showcase');
    x.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', 10000);
}

window.onload = changeImage();
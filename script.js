let first = null;
let second = "https://discord.gg/";
let third = "TeamSpeak Link";


function copyText(text) {
    if (text == "first") {
        alert('Server is currently under development')
    }
    if (text == "second") {
        var input = document.createElement('input');
        input.setAttribute('value', second);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
    if (text == "third") {
        var input = document.createElement('input');
        input.setAttribute('value', third);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
}

function openLink(value) {
    if (value == "home") {
        window.location.href = "index.html";
    }
    if (value == "informazioni") {
        window.location.href = "informazioni.html";
    }
    if (value == "regolamento") {
        window.location.href = "https://docs.google.com/document/d/1kRo1T00isUSMrTKW_m_vyFFHCFMKY8HWpprBiWDGWwQ";
    }
    if (value == "rules" || value == "whitelist") {
        alert('Alcun Cambiamento Eseguito Dato che Sei gia in questa Pagina')
    }
}

function aboutSlide(value) {
    if (value == 1) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "0vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = "0.2vw solid rgb(255, 0, 0)";
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 2) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "40vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = "0.2vw solid rgb(255, 0, 0)";
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 3) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "80vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = "0.2vw solid rgb(255, 0, 0)";
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 4) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "120vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = "0.2vw solid rgb(255, 0, 0)";
    }
}

function selectRang(value) {
    console.log(value);
    if (value == "Developer") {
        document.getElementsByClassName('dev')[0].style.display = "block";
    } else {
        document.getElementsByClassName('dev')[0].style.display = "none";
    }

    if (value == "Supporter") {
        document.getElementsByClassName('sup')[0].style.display = "block";
    } else {
        document.getElementsByClassName('sup')[0].style.display = "none";
    }

    if (value == "Concept") {
        document.getElementsByClassName('kon')[0].style.display = "block";
    } else {
        document.getElementsByClassName('kon')[0].style.display = "none";
    }

    if (value == "others") {
        document.getElementsByClassName('son')[0].style.display = "block";
    } else {
        document.getElementsByClassName('son')[0].style.display = "none";
    }
}
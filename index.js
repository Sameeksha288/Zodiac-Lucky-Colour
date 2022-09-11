const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor = "#3e4f36";
            break;
        case "taurus":
            body.style.backgroundColor = "#16374d";
            break;
        case "gemini":
            body.style.backgroundColor = "#04263d";
            break;
        case "cancer":
            body.style.backgroundColor = "lavender";
            break;
        case "leo":
            body.style.backgroundColor = "seagreen";
            break;
        case "virgo":
            body.style.backgroundColor = "#36517d";
            break;
        case "libra":
            body.style.backgroundColor = "#66dece";
            break;
        case "scorpio":
            body.style.backgroundColor = "#777491";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#aba935";
            break;
        case "aquarius":
            body.style.backgroundColor = "#e077c1";
            break;
        case "capricorn":
            body.style.backgroundColor = "#68d9c8";
            break;
        case "pisces":
            body.style.backgroundColor = "#94323f";
            break;
    }
}
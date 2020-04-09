(() => {
    $('.btn-quero').on('click', (event) => {

        let button = event.currentTarget;

        if ($(button).text().indexOf("IFOOD") != -1) {
            window.open("https://api.whatsapp.com/send?phone=+5512982068255&text=Olá B2BTi, gostaria de mais informações sobre o iFood!");
        } else {
            window.open("https://api.whatsapp.com/send?phone=+5512982068255&text=Olá B2BTi, gostaria de mais informações sobre o Delivery!");
        }

    });
})();
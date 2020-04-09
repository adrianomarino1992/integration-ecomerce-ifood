(() => {

    // $(document).ready(function() {
    //     if (navigator.userAgent.indexOf('iPhone') != -1) {

    //         $('body').css('MozTransform', 'scale(0.9)');

    //         $('body').css('zoom', '90%');

    //     }
    // });



    $('.btn-quero').on('click', (event) => {

        let button = event.currentTarget;

        if ($(button).text().indexOf("IFOOD") != -1) {
            window.open("https://api.whatsapp.com/send?phone=+5512982068255&text=Olá B2BTi, gostaria de mais informações sobre o iFood!");
        } else {
            window.open("https://api.whatsapp.com/send?phone=+5512982068255&text=Olá B2BTi, gostaria de mais informações sobre o Delivery!");
        }

    });


    $('.redirect-to-site').on('click', () => {
        window.open("https://www.b2bti.com.br/");
    })
})();
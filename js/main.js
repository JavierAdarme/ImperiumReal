$(document).ready(function(){
    //cambio de header
    $(window).on('scroll', function(){
        let posicion = $('#pr').offset();
        if($(window).scrollTop()>= posicion.top){
            $('header').removeClass('transparente');
        } else{
            $('header').addClass('transparente'); 
        }

    })


    // Accionamiento del menú lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');

    })


    //Smooth scroll la flecha, desplazamiento scroll suave
    $('a').on('click', function(){
        if(this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })



}) 
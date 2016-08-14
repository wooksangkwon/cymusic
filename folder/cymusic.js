$(function() {

    $(".audio01").trigger('load');
    $(".audio02").trigger('load');
    $(".audio03").trigger('load');
    $(".audio04").trigger('load');
    $(".audio05").trigger('load');
    $(".audio06").trigger('load');
    $(".audio07").trigger('load');
    $(".audio08").trigger('load');
    $(".audio09").trigger('load');

    $(".a").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio01").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio01").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".b").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio02").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio02").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".c").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio03").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio03").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });

    $(".d").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio04").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio04").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".e").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio05").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio05").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".f").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio06").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio06").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    }); 

    $(".g").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio07").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio07").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".h").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio08").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio08").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });
    $(".i").click(function() {
        if($(this).hasClass("is-playing")) {
            $(".audio09").trigger('stop');
            $(this).removeClass("is-playing");
            $("audio").each(function() {
                $(this).trigger("pause");
            });
            console.log ( 'stopped' );
        } else {
            $(".audio09").trigger("play");
            $(this).addClass("is-playing");
            console.log ( 'played' );
            }
    });   

jQuery('h1').click(function(){
   jQuery(this).toggleClass('active');
});

    });
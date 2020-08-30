$(function(){
    // fungsi dibawah hanya berjalan untuk semua tag <a> yang diawali
    // (^) dengan hash (#)
    $('a[href^="#"]').on('click',function(e){
        $target = $(this.hash);
        $('html,body').stop().animate({
            'scrollTop' : $target.offset().top
        },800,'swing',function(){
                window.location.hash = target;
            }
        );
    });    
    // ubah warna list di navbar sesuai class yang aktif
    $('body').scrollspy({
        target: '#mainNav',offset:56
    });
    // ubah desain navbar
    var navbarCollapse = function(){
        if($("#mainNav").offset().top > 100){
            $("#mainNav").addClass("navbar-shrink");
        }else{
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // ubah navbar jika halaman tidak diatas
    navbarCollapse();
    // ubah navbar ketika halaman di scroll
    $(window).scroll(navbarCollapse);
});  
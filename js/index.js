let Open = $(".nav-link").outerWidth();
let maxLength = 100;

$("a").click(function(){

    let aHref = $(this).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset} , 2000)
})
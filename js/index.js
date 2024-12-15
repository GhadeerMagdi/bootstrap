
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $(".navbar").removeClass("bg-transparent navbar-dark").addClass("bg-white navbar-light text-dark");
        $(".navbar .nav-link").css("color", "#343a40"); 
        $(".navbar .active > .nav-link").css("color", "#343a40");
    } else {
        $(".navbar").removeClass("bg-white navbar-light text-dark").addClass("bg-transparent navbar-dark");
        $(".navbar .nav-link").css("color", ""); 
        $(".navbar .active > .nav-link").css("color", ""); 
    }
});

$("a").click(function (e) {
    e.preventDefault(); 
    let aHref = $(this).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});

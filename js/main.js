const $navUl = $('.nav-ul');
const $menu = $('.menu');

$navUl.hide();

$menu.click(function() {
    $(this).toggleClass('is-active');
    $navUl.toggle('blind', 500);
})

const typed = new Typed('#typed', {
    strings: ["- JavaScript...", "- HTML5...", "- CSS3...", "- Front end Web Developer."],
    typeSpeed: 100,
    smartBackspace: true,
    startDelay: 200,
    showCursor: false,
    loop: true,
    loopCount: Infinity
});

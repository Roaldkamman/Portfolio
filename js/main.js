const $navUl = $('.nav-ul');
const $navDiv = $('.nav-div');
const $menu = $('.menu');
const $about = $('.aboutMe');
const $skills = $('.skills');
const $aboutOverlay = $('.aboutMe-overlay');
const $skillsOverlay = $('.skills-overlay');
const $moreSkillsOverlay = $('.more-skills-overlay');
const $aClose = $('.aboutClose');
const $sClose = $('.skillsClose');
const $mClose = $('.moreSkillsClose');
const $toSkills = $('.to-skills');
const $toAbout = $('.to-aboutMe');
const $moreSkills = $('.more-skills');
const $backToSkills = $('.backTo-skills');


$navUl.hide();
$aboutOverlay.hide();
$skillsOverlay.hide();
$moreSkillsOverlay.hide();

$menu.click(function() {
    $(this).toggleClass('is-active');
    $navUl.toggle('blind', 500);
});

$about.click(function() {
    $navDiv.hide("fade");
    $aboutOverlay.show("fade");
});

$skills.click(function() {
    $navDiv.hide("fade");
    $skillsOverlay.show("fade");
});

$aClose.click(function() {
    $aboutOverlay.hide("fade");
    $navDiv.show("fade");
});

$sClose.click(function() {
    $skillsOverlay.hide("fade");
    $navDiv.show("fade");
});

$toSkills.click(function() {
    $aboutOverlay.hide("fade");
    $skillsOverlay.show("fade");
});

$toAbout.click(function() {
    $skillsOverlay.hide("fade");
    $aboutOverlay.show("fade");
});

$moreSkills.click(function() {
    $skillsOverlay.hide("fade");
    $moreSkillsOverlay.show("fade");
});

$backToSkills.click(function() {
    $moreSkillsOverlay.hide("fade");
    $skillsOverlay.show("fade");
});

$mClose.click(function() {
    $moreSkillsOverlay.hide("fade");
    $navDiv.show("fade");
});



const typed = new Typed('#typed', {
    strings: ["- JavaScript...", "- HTML5...", "- CSS3...", "- Front end Web Developer."],
    typeSpeed: 100,
    smartBackspace: true,
    startDelay: 200,
    showCursor: false,
    loop: true,
    loopCount: Infinity
});

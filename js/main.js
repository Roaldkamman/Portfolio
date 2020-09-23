// SELECTORS
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

// HIDES OVERLAYS
$navUl.hide();
$aboutOverlay.hide();
$skillsOverlay.hide();
$moreSkillsOverlay.hide();

// TOGGLE MENU
$menu.click(function() {
    $(this).toggleClass('is-active');
    $navUl.toggle('blind', 500);
});

// ALL OVERLAY CLICK FUNCTIONALITIES. 
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


// TYPED 
const typed = new Typed('#typed', {
    strings: ["- JavaScript...", "- HTML5...", "- CSS3...", "- React...", "- Front end Web Developer."],
    typeSpeed: 100,
    smartBackspace: true,
    startDelay: 200,
    showCursor: false,
    loop: true,
    loopCount: Infinity
});

// ANIMATION STARTS
// selectors:
const $buttonGroup = $('.button-group');
const $spiral = $('.spiral');
const $outerItems = $('.outer-items');
const $circle = $('.circle');
const $myOverlay = $('.myAnimatedOverlay');
const $animateButton = $('.animate-button');

$myOverlay.hide();

$animateButton.click(function() {
    $myOverlay.show("fade");
    $animateButton.hide("fade");
    $('.text-bottom').text("I love creating projects that feel alive through interesting animations and interactions. Refresh the page if you want to try the animation again.");
})

// hides the spiral at the start:
TweenLite.to($spiral, 0, {
    opacity: 0, 
    scaleX: 0,
    scaleY: 0,
    transformOrigin:"center center"
});

// creates a hover event listener that links to the over and out functions: 
$buttonGroup.hover(over, out);
// hover over animation effect:
function over(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1.2,
        scaleY: 1.2,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })

    TweenLite.to($spiral, 0.7, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1.05,
        rotate: 720,
        transformOrigin:"center center"
    })

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 1.05,
        scaleY: 1.05,
        transformOrigin:"center center",
        delay: 0.65
    }) 
};    
    
    
// hover out animation effect:
function out(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1,
        scaleY: 1,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })

    TweenLite.to($spiral, 0.7, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center"
    })

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 0.95,
        scaleY: 0.95,
        transformOrigin:"center center",
        delay: 0.05
    }) 
};


// click event listener:
$buttonGroup.click(function(){
    // deactivates the event handlers to prevent user from triggering animations by accident:
    $buttonGroup.off();
    // scale the button down and transition the opacity to 0: (I would scale it down further but that looks wonky in google chrome)
    TweenLite.to($buttonGroup, 1, {
        scaleX: 0.9,
        scaleY: 0.9,
        autoAlpha: 0,
        transformOrigin:"center center"
    })
    
    // pulls all elements closer and bursts them out violently after reaching 0 scale to create the illusion of an implosion: 
    TweenLite.staggerTo($spiral, 1.5, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center",
        delay: 0.2
    })

    TweenLite.staggerTo($spiral, 4, {
        scaleX: 4,
        scaleY: 4.15,
        rotate: 14400,
        transformOrigin:"center center",
        delay: 1.7
    })

    TweenLite.to($outerItems, 1.5, {
        scaleX: 0,
        scaleY: 0,
        transformOrigin:"center center",
        delay: 0.3
    })

    TweenLite.to($outerItems, 3.5, {
        scaleX: 4,
        scaleY: 4,
        transformOrigin:"center center",
        delay: 1.8
    })
    // hides the overlay: 
    $myOverlay.delay(3200).hide('fade');
});

// ANIMATION ENDS


// animations and transitions

$('.bell').click(function() {
    $('.dropdown-notifications').toggle('fade');
});

$('.dropdown-button').click(function() {
    $('.dropdown-notifications').hide('fade');
});

$('.close').click(function() {
    $('.alert-grid').hide('fade');
});

$('.profile-picture').click(function() {
    TweenLite.staggerTo($('.profile-picture'), 1, {
        rotate: 360
    });
});

// selectors:
const $buttonGroup = $('.button-group');
const $spiral = $('.spiral');
const $outerItems = $('.outer-items');
const $circle = $('.circle');
const $myOverlay = $('.myAnimatedOverlay');
// animation removed to be transferred to portfolio and removed from this file.
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
    });

    TweenLite.to($spiral, 0.7, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1.05,
        rotate: 720,
        transformOrigin:"center center"
    });

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 1.05,
        scaleY: 1.05,
        transformOrigin:"center center",
        delay: 0.65
    });
}    
    
    
// hover out animation effect:
function out(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1,
        scaleY: 1,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    });

    TweenLite.to($spiral, 0.7, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center"
    });

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 0.95,
        scaleY: 0.95,
        transformOrigin:"center center",
        delay: 0.05
    });
}


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
    });
    
    // pulls all elements closer and bursts them out violently after reaching 0 scale to create the illusion of an implosion: 
    TweenLite.staggerTo($spiral, 1.5, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center",
        delay: 0.2
    });

    TweenLite.staggerTo($spiral, 4, {
        scaleX: 4,
        scaleY: 4.15,
        rotate: 14400,
        transformOrigin:"center center",
        delay: 1.7
    });

    TweenLite.to($outerItems, 1.5, {
        scaleX: 0,
        scaleY: 0,
        transformOrigin:"center center",
        delay: 0.3
    });

    TweenLite.to($outerItems, 3.5, {
        scaleX: 4,
        scaleY: 4,
        transformOrigin:"center center",
        delay: 1.8
    });
    // hides the overlay: 
    $myOverlay.delay(3200).hide('fade');
});




// local storage

const $check1 = $('#check1');
const $check2 = $('#check2');
const $timezone = $('#timezone');
const $save = $('#save');
const $cancel = $('#cancel');
const $message = $('.action-message');

$message.hide();

$save.click(function() {
  const checkedOne = $check1.is( ":checked" );
  const checkedTwo = $check2.is( ":checked" );
  const tz = $timezone.val(); 
  localStorage.setItem("$check1", checkedOne);
  localStorage.setItem("$check2", checkedTwo);
  localStorage.setItem("$timezone", tz);
  $message.text("Your settings have been saved.");
  $message.show('fade');
  $message.delay(2000).hide('fade');
});

$cancel.click(function() {
  localStorage.clear();
  let checkedOne = $check1.is( ":checked" );
  let checkedTwo = $check2.is( ":checked" );
  if (checkedOne) {
    $check1.attr("checked", false);
  }
  if (checkedTwo) {
    $check2.attr("checked", false);
  }
  $timezone.val("Select a Timezone");
  localStorage.setItem("$timezone", "Select a Timezone");
  $message.text("Your settings have been reset to default.");
  $message.show('fade');
  $message.delay(2000).hide('fade');
});

function localSettings() {
  let checkedOne = localStorage.getItem("$check1") === "true";
  let checkedTwo = localStorage.getItem("$check2") === "true";
  let tz = localStorage.getItem("$timezone");
  if (checkedOne) {
    $check1.attr("checked", true);
  }
  if (checkedTwo) {
    $check2.attr("checked", true);
  }
  $timezone.val(tz);
}

window.onload = localSettings();

// autocomplete functionality

const $contactSearch = $('#contact-search');

const members = [
  'Dale Byrd',
  'Victoria Chambers',
  'Dan Oliver',
  'Dawn Wood'
];

$contactSearch.autocomplete({source: members});

// form validation

const $textArea = $('#textarea');
const $formButton = $('#form-button');
const $submitMessage = $('.submit-message');

$submitMessage.hide();

$formButton.click(function(e) {
  e.preventDefault();
  if ($contactSearch.val() === '' || $textArea.val() === '') {
    $submitMessage.text("Please provide a recipient AND message.");
    $submitMessage.css("background-color","red");
    $submitMessage.show('fade');
    $submitMessage.delay(3000).hide('fade');
  }
  else {
    $submitMessage.text("Your message was successfully sent.");
    $submitMessage.css("background-color","#518de6");
    $submitMessage.show('fade');
    $submitMessage.delay(2000).hide('fade');
    $contactSearch.val("");
    $textArea.val("");
  }
});


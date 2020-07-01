// ANIMATIONS AND TRANSITIONS

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

// LOCAL STORAGE

// SELECTORS
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


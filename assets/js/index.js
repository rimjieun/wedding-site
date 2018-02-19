// IMAGE CYCLER
function cycleImages() {
  var active = $('#cycler .active');
  var next = (active.next().length > 0) ? active.next() : $('#cycler img:first');
  next.css('z-index', 2); //move the next image up the pile
  active.fadeOut(1500, function() { //fade out the top image
    active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
    next.css('z-index', 3).addClass('active'); //make the next image the top one
  });
}

// COUNTDOWN
// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $(".countdown .days .digits").text(days);
  $(".countdown .hours .digits").text(hours);
  $(".countdown .minutes .digits").text(minutes);
  $(".countdown .seconds .digits").text(seconds);

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function loadBrowserImages() {

  $('#cycler')
    .append($('<img id="size-ref" class="active size-ref" src="assets/img/photos/landscape/cropped/layered/006.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/collage/001.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/landscape/cropped/layered/003.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/collage/002.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/landscape/cropped/layered/002.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/collage/003.jpg" alt="Naeun & Jeremy" />'));
}

function loadMobileImages() {
  $('#cycler')
    .append($('<img class="active size-ref" src="assets/img/photos/portrait/selected/cropped/001.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/selected/cropped/002.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/selected/cropped/003.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/selected/cropped/004.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/selected/cropped/005.jpg" alt="Naeun & Jeremy" />'))
    .append($('<img class="size-ref" src="assets/img/photos/portrait/selected/cropped/006.jpg" alt="Naeun & Jeremy" />'));
}

$('#mobile-menu-btn').on('click', function() {
  $('#side-nav').toggleClass('sidenav-width');
});

if ($(window).width() > 600) {
  loadBrowserImages();
} else if ($(window).width() <= 600) {
  $('div#cycler').css({ 'padding-top': '0' });
  loadMobileImages();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('header')
        .fadeOut(500);
      $('#mobile-menu').fadeIn(500);
    } else {
      $('header').fadeIn(500);
      $('#mobile-menu').fadeOut(500);
    }
  });
}

$(window).on('load', function() {
  $(".se-pre-con").css('display', 'none');
  // run every 7s
  setInterval('cycleImages()', 7000);

  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $('.sidenav a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    $('#side-nav').toggleClass('sidenav-width');
  });

  $('#cycler').height($('img.size-ref').height());


});

var ww = $(window).width();
var limit = 600;

function refresh() {
  ww = $(window).width();
  var w = ww < limit ? (location.reload(true)) : (ww > limit ? (location.reload(true)) : ww = limit);
}

var tOut;


$(window).resize(function(e) {
  $('#cycler').height($('img.size-ref').height());
  // var sizeChanged = false;
  var resW = $(window).width();
  clearTimeout(tOut);
  if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
    tOut = setTimeout(refresh, 100);
  }
});
function cycleImages() {
  var active = $('#cycler .active');
  var next = (active.next().length > 0) ? active.next() : $('#cycler img:first');
  next.css('z-index', 2); //move the next image up the pile
  active.fadeOut(1500, function() { //fade out the top image
    active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
    next.css('z-index', 3).addClass('active'); //make the next image the top one
  });
}

$(document).ready(function() {
  // run every 7s
  setInterval('cycleImages()', 7000);

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#navbar')
        .fadeIn(500)
        .css("display", "flex");
    } else {
      $('#navbar').fadeOut(500);
    }
  });

  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

});

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
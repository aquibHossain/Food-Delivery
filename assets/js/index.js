// nav tabs popular vendors

$(document).ready(function () {
  "use strict";
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item_box").show("1000");
    } else {
      $(".item_box")
        .not("." + value)
        .hide("1000");

      $(".item_box")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("actives").siblings().removeClass("actives");
  });
});

// nav tabs daily deals

$(document).ready(function () {
  $(".lists").click(function () {
    const values = $(this).attr("data-filters");
    if (values == "alls") {
      $(".item_boxs").show("1000");
    } else {
      $(".item_boxs")
        .not("." + values)
        .hide("1000");

      $(".item_boxs")
        .filter("." + values)
        .show("1000");
    }
  });

  $(".lists").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});


// counter watch 1
var target_datea = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
var daysa, hoursa, minutesa, secondsa; // variables for time units

var countdowna = document.getElementById("tile"); // get tag element

getCountdowna();

setInterval(function () {
  getCountdowna();
}, 1000);

function getCountdowna() {
  // find the amount of "seconds" between now and target
  var current_datea = new Date().getTime();
  var seconds_lefta = (target_datea - current_datea) / 1000;

  daysa = pad(parseInt(seconds_lefta / 86400));
  seconds_lefta = seconds_lefta % 86400;

  hoursa = pad(parseInt(seconds_lefta / 3600));
  seconds_lefta = seconds_lefta % 3600;

  minutesa = pad(parseInt(seconds_lefta / 60));
  secondsa = pad(parseInt(seconds_lefta % 60));

  // format countdown string + set tag value
  countdowna.innerHTML =
    "<span>" +
    daysa +
    "<p>Days</p>" +
    "</span><span>" +
    hoursa +
    "<p>Hours</p>" +
    "</span><span>" +
    minutesa +
    "<p>Minutes</p>" +
    "</span><span>" +
    secondsa +
    "<p>Seconds</p>" +
    "</span>";
}


// slicker slider daily deals

$(document).ready(function () {
  $(".items").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// counter watch 2

var target_dates = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
var dayss, hourss, minutess, secondsss; // variables for time units

var countdowns = document.getElementById("tiless"); // get tag element

getCountdowns();

setInterval(function () {
  getCountdowns();
}, 1000);

function getCountdowns() {
  // find the amount of "seconds" between now and target
  var current_dates = new Date().getTime();
  var seconds_lefts = (target_dates - current_dates) / 1000;

  dayss = pad(parseInt(seconds_lefts / 86400));
  seconds_lefts = seconds_lefts % 86400;

  hourss = pad(parseInt(seconds_lefts / 3600));
  seconds_lefts = seconds_lefts % 3600;

  minutess = pad(parseInt(seconds_lefts / 60));
  secondss = pad(parseInt(seconds_lefts % 60));

  // format countdown string + set tag value
  countdowns.innerHTML =
    "<span>" +
    dayss +
    "<p>Days</p>" +
    "</span><span>" +
    hourss +
    "<p>Hours</p>" +
    "</span><span>" +
    minutess +
    "<p>Minutes</p>" +
    "</span><span>" +
    secondss +
    "<p>Seconds</p>" +
    "</span>";
}

// counter watch 3

var target_date = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML =
    "<span>" +
    days +
    "<p>Days</p>" +
    "</span><span>" +
    hours +
    "<p>Hours</p>" +
    "</span><span>" +
    minutes +
    "<p>Minutes</p>" +
    "</span><span>" +
    seconds +
    "<p>Seconds</p>" +
    "</span>";
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

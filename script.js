let oua = 5;

function ou() {
  if (oua <= 1) {
    oua = 5;
    var msjinitial = document.getElementById('motto').innerHTML;
    document.getElementById('motto').innerHTML = "Colegi, Prieteni, Bombardieri!";
    setTimeout(function () {
      document.getElementById('motto').innerHTML = msjinitial;
    }, 3000);
  } else {
    oua--;
  }
}

$(function () {
  var dur = 1

  // functions
  function innerDivTracking() {
    if ($('.inner').hasClass('clicked')) {
      $('.inner').removeClass('clicked')
      TweenMax.to('.inner', 0.3, { borderWidth: 10 })
    } else {
      $('.inner').addClass('clicked')
      TweenMax.to('.inner', 0.5, { borderWidth: 0 })
    }
  }
  function getMousePos(event) {
    return [event.clientX, event.clientY]
  }
  // end:functions

  // events
  $(document).click(function (e) {
    if ($('.inner').length <= 0) {
      $('body').prepend('<div class="inner"></div>')
      innerDivTracking()
    } else {
      $(document).unbind('click')
      innerDivTracking()

      $(document).click(function () {
        innerDivTracking()
      })
    }
  })

  $(document).mousemove(function (e) {
    if ($('.inner').hasClass('clicked')) {
      var mousePos = getMousePos(e)
      TweenMax.to($('.inner'), dur, { left: mousePos[0], top: mousePos[1] })
    }
  })
  // end:events
})
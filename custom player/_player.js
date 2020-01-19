
$(
  function () { //audio
    var audeo = $('audio')[0];

    $('.play-pause').on('click', function () {
      if (audeo.paused) {
        audeo.play();
        $('.play-pause').removeClass('fa-play');
        $('.play-pause').addClass('fa-square');
      } else {
        audeo.pause();
        $('.play-pause').removeClass('fa-square');
        $('.play-pause').addClass('fa-play');
      }

    })
    $('.volume-muted').on('click', function () {
      if (audeo.muted !== true) {
        audeo.muted = true;
        $('.volume-muted').removeClass('fa-volume-up');
        $('.volume-muted').addClass('fa-volume-mute');
      } else {
        audeo.muted = false;
        $('.volume-muted').removeClass('fa-volume-mute');
        $('.volume-muted').addClass('fa-volume-up');
      }
    })

    $('.volume-muted').on('click', function setVal(volume) {
      audeo.volume = volume;
      vol = volume;
    })


  })


let haudio = document.getElementsByTagName('audio')[0];
function setVal(volume) {
  haudio.volume = volume;
  vol = volume;
}

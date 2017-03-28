document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('keydown', function (e) {
        var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
        audio.currentTime = 0;
        audio.play();
    });

});
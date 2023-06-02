var train = document.getElementById('train');
    var animation;

    function startAnimation() {
      train.style.animationPlayState = 'running';
    }

    function stopAnimation() {
      train.style.animationPlayState = 'paused';
    }
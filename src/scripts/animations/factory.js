import lottie from "lottie-web"

var start_animation = lottie.loadAnimation({
  container: document.getElementById("factoryAnimationStart"),
  loop: false,
  autoplay: true,
  path: "/animations/start_animation.json"
});
start_animation.addEventListener('complete', () => {
    lottie.loadAnimation({
        container: document.getElementById("factoryAnimationLoop"),
        loop: true,
        autoplay: true,
        path: "/animations/loop_animation.json"
      });
})

  
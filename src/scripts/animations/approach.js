import lottie from "lottie-web";

const animation1 = lottie.loadAnimation({
  container: document.getElementById("discoveryAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/our_approach/Discovery_Animation.json"
});

const animation2 = lottie.loadAnimation({
  container: document.getElementById("collaborativeDevelopmentAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/our_approach/Collaborative_Development_Animation.json"
});

const animation3 = lottie.loadAnimation({
  container: document.getElementById("launchAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/our_approach/Launch_Animation.json"
});

const animation4 = lottie.loadAnimation({
  container: document.getElementById("supportAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/our_approach/Support_Animation.json"
});

const observer = new IntersectionObserver(whenInViewport, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
});
observer.observe(document.getElementById("approach"));


function whenInViewport(entry)
{
  if (entry.length > 0 && entry[0].isIntersecting) {
    // Animate only once
    observer.disconnect();

    animation1.play();
    animation2.play();
    animation3.play();
    animation4.play();
  }
}


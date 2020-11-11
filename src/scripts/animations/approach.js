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

// TODO: Replace this animation with on-hover animation
// Skipping animation for now
animation1.goToAndStop(1, true);
animation2.goToAndStop(1, true);
animation3.goToAndStop(1, true);
animation4.goToAndStop(1, true);


import lottie from "lottie-web";

const animation1 = lottie.loadAnimation({
  container: document.getElementById("blockchainDevAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/what_we_can_do_for_you/Blockchain_Development.json"
});

const animation2 = lottie.loadAnimation({
  container: document.getElementById("completeSolutionsAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/what_we_can_do_for_you/Complete_Solutions.json"
});

const animation3 = lottie.loadAnimation({
  container: document.getElementById("consultingAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/what_we_can_do_for_you/Consulting.json"
});

const animation4 = lottie.loadAnimation({
  container: document.getElementById("infrastructureAnimation"),
  loop: false,
  autoplay: false,
  path: "/animations/what_we_can_do_for_you/Infrastructure.json"
});

const observer = new IntersectionObserver(whenInViewport, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
});
observer.observe(document.getElementById("services"));


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


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

function startAnimationForMobiles() {
  const mobileOptions = {
    root: null,
    threshold: 0.3,
  };

  // First icon animation setup
  const observer1 = new IntersectionObserver(callbackForMobile, mobileOptions);
  observer1.observe(document.getElementById("blockchainDevAnimation"));

  function callbackForMobile(entry) {
    if (entry.length > 0 && entry[0].isIntersecting) {
      observer1.disconnect();
      animation1.play();
    }
  }

  // Second icon animation setup
  const observer2 = new IntersectionObserver(callbackForMobile2, mobileOptions);
  observer2.observe(document.getElementById("completeSolutionsAnimation"));

  function callbackForMobile2(entry) {
    if (entry.length > 0 && entry[0].isIntersecting) {
      observer2.disconnect();
      animation2.play();
    }
  }

  // Third icon animation setup
  const observer3 = new IntersectionObserver(callbackForMobile3, mobileOptions);
  observer3.observe(document.getElementById("consultingAnimation"));

  function callbackForMobile3(entry) {
    if (entry.length > 0 && entry[0].isIntersecting) {
      observer3.disconnect();
      animation3.play();
    }
  }

  // Fourth icon animation setup
  const observer4 = new IntersectionObserver(callbackForMobile4, mobileOptions);
  observer4.observe(document.getElementById("infrastructureAnimation"));

  function callbackForMobile4(entry) {
    if (entry.length > 0 && entry[0].isIntersecting) {
      observer4.disconnect();
      animation4.play();
    }
  }
}

function startAnimationForDesktops() {
  const observer = new IntersectionObserver(whenInViewport, {
    root: null,
    threshold: 0.3,
  });
  observer.observe(document.getElementById("services"));


  function whenInViewport(entry) {
    if (entry.length > 0 && entry[0].isIntersecting) {
      // Animate only once
      observer.disconnect();

      animation1.play();
      animation2.play();
      animation3.play();
      animation4.play();
    }
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  startAnimationForMobiles();
} else {
  startAnimationForDesktops();
}

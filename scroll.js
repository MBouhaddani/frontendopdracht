function smoothScroll(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  const targetPosition = targetElement.getBoundingClientRect().top - 70;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 700;
  let start = null;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressPercentage = Math.min(progress / duration, 1);
    const ease =
      progressPercentage < 0.5
        ? 2 * progressPercentage * progressPercentage
        : 1 - Math.pow(-2 * progressPercentage + 2, 2) / 2;
    window.scrollTo(0, startPosition + distance * ease);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

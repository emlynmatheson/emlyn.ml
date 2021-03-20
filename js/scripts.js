scrolling = false;

document.addEventListener('scroll', function(e) {
  if (scrolling) { return; }
  scrolling = true
  initScroll = window.scrollY;
  setTimeout(() => {
    delta = window.scrollY - initScroll
    console.log(delta);``
  }, 5);
  setTimeout(() => {
    scrolling = false;
  }, 2500);
});

function moveDown(change, timeMs, timeInitMs) {
  if (time <= 0) {
    return;
  }
  // Move down X px
  localDelta =
  setTimeout(() => {
    moveDown(change - X, timeMs - 1, timeInitMs)
  }, 1)
}

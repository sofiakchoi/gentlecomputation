document.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var zoomLevel = Math.min(3, 1 + scrollPosition / 35);

  var zoomText = document.getElementById('zoom-text');
  zoomText.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';
});


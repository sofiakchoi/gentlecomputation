document.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var zoomLevel = Math.min(2, 0.5 + scrollPosition / 35);

  var zoomText = document.getElementById('zoom-text');
  zoomText.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';
});

document.getElementById('hover01').addEventListener('mouseout', function() {
  document.getElementById('img01').style.display = 'none';
});

document.getElementById('hover01').addEventListener('mouseover', function() {
  document.getElementById('img01').style.display = 'block';
});
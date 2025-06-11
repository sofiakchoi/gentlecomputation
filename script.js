document.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var zoomLevel = Math.min(2, 0.5 + scrollPosition / 35);

  var zoomText = document.getElementById('zoom-text');
  zoomText.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.getElementById('hover01').addEventListener('mouseout', function() {
  document.getElementById('img01').style.display = 'none';
});

document.getElementById('hover01').addEventListener('mouseover', function() {
  document.getElementById('img01').style.display = 'block';
});
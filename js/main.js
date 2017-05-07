document.getElementById('mapPointOne').onclick = TextOne;
document.getElementById('mapPointTwo').onclick = TextTwo;
document.getElementById('mapPointThree').onclick = TextThree;
document.getElementById('mapPointFour').onclick = TextFour;
document.getElementById('mapPointFive').onclick = TextFive;


function TextOne() {
  document.getElementById('sidebarHeader').innerText = 'Schöneberg';
  document.getElementById('sidebarParagraph').innerText = "blah";
}

function TextTwo() {
  document.getElementById('sidebarHeader').innerText = "Neukölln";
  document.getElementById('sidebarParagraph').innerText = "blahity blah";
}
function TextThree() {
  document.getElementById('sidebarHeader').innerText = "Hansa Tonstudio";
  document.getElementById('sidebarParagraph').innerText = "yadadayayada";
}

function TextFour() {
  document.getElementById('sidebarHeader').innerText = "Potsdamer Platz to KaDaWe";
  document.getElementById('sidebarParagraph').innerText = "stuff goes here";
}

function TextFive() {
  document.getElementById('sidebarHeader').innerText = "SO36";
  document.getElementById('siderbarParagraph').innerText = "lastbitotext";
}
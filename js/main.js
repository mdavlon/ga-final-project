
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
var modalback = document.getElementById("modalback");
var formbutton = document.getElementById("message");
var modalform = document.getElementById("modalform");
var formclose = document.getElementsByClassName("formclose");

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  $('#menu').slicknav();
});

formbutton.onclick = function() {
  modalform.style.display = "block";
  modalback.style.display = "block";
}

span.onclick = function() {
  console.log("works")
    modal.style.display = "none";
    modalback.style.display = "none";
    }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalback.style.display = "none";
  }
}
 
formclose.onclick = function() {
  console.log("works")
modalform.style.display = "none";
modalback.style.display = "none";
}

document.getElementById('mapPointOne').onclick = TextOne;
document.getElementById('mapPointTwo').onclick = TextTwo;
document.getElementById('mapPointThree').onclick = TextThree;
document.getElementById('mapPointFour').onclick = TextFour;
document.getElementById('mapPointFive').onclick = TextFive;


function TextOne() {
  modalback.style.display = "block";
  modal.style.display = "block";
  document.getElementById('modalHeader').innerText = 'Schöneberg';
  $('#modalBody').html("Bowie and Pop rented a flat at 155 Haupstrausse in Schöneberg. The area was, and still is, the centre of Berlin’s gay district, and Bowie was attracted to the vibrant scene.<br><br>He regularly hung out in the Anderes Ufer cafe, just a couple of doors down from the apartment. Now known as Neues Ufer, the cafe hasn’t changed too much since then – although there are now a few portraits of Bowie on its walls.");
  document.getElementById('modalLink').innerHTML = '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3On8pXrQMalCZ67hqb4ULN" width="250" height="80" frameborder="0"></iframe>';
}

function TextTwo() {
  modal.style.display = "block";
  modalback.style.display = "block";
  //document.getElementById('Heading').style.display = "none";
  document.getElementById('modalHeader').innerText = "Neukölln";
  $('#modalBody').html("He might not have got its name quite right when he wrote about it on the Heroes record, but the district of Neukölln played an important part in Bowie’s stay in the city.<br><br>He first arrived in town at the district’s Tempelhof airport, and filmed scenes for Just a Gigalo in the imposing Stadtbad Neukölln on Ganghoferstrasse. Dating back to 1914, the swimming baths are still open – and just as impressive – today.<br><br>During the 1970s, the area was particularly deprived, and its housing blocks were the childhood home of Christiane F. a young drug addict whose autobiography became a sensation, later turned into a film soundtracked by and featuring Bowie.<br><br>Today, however, it’s one of Berlin’s trendiest areas, close to vibrant Kreuzberg, while the former Tempelhof airport site is now the city’s largest park, which hosts sporting events and music festivals.");
  document.getElementById('modalLink').innerHTML = '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A7cuumbX2UTDYYXjKnyWGq6" width="250" height="80" frameborder="0"></iframe>';
}
function TextThree() {
  modal.style.display = "block";
  modalback.style.display = "block";
  //document.getElementById('Heading').style.display = "none";
  document.getElementById('modalHeader').innerText = "Hansa Tonstudio";
  $('#modalBody').html("Bowie, Pop and producers Tony Visconti and Brian Eno created some of their most famous works at the grand Hansa studios – including all of the Heroes and Lust for Life LPs.<br><br>Found at the edge of West Berlin, the studio’s view of the Berlin Wall inspired the lyrics to Heroes’ title track. Bowie watched Visconti’s secret rendezvous with his then-girlfriend outside the studio and transformed it into the story of two lovers who had been separated by the Wall.<br><br>Hansa studios are still in use today, and there are often tours around the complex, so you can explore the famous building and its impressive decor.");
  document.getElementById('modalLink').innerHTML = '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4KshJfh2M1sS6Js5wSupwU" width="250" height="80" frameborder="0"></iframe>'
}

function TextFour() {
  modal.style.display = "block";
  modalback.style.display = "block";
  //document.getElementById('Heading').style.display = "none";
  document.getElementById('modalHeader').innerText = "Potsdamer Platz to KaDeWe";
  $('#modalBody').html("During the period that Bowie lived in the city, Berlin was still very much a run-down, divided and even dangerous city.<br><br>For his comeback single in 2013, Where Are We Now, Bowie reflected on how much the city had changed, documenting a journey from Potsdamer Platz, to the Dschungel disco and the KaDeWe department store.<br><br>During his time in the city, at the height of the Cold War, the less-than-3km trip was a difficult journey, crossing the divide of the then-desolate wall-side surroundings of Potsdamer Platz to the relative opulence of Dshungel (known as Berlin’s answer to Studio 54) and KaDeWe. Now, in 2013, it was as simple as jumping on a train (you can do so too – just take the U2 line from Potsdamer Platz Bahnhof and hop off at Wittenbergplatz).<br><br>Today, Potsdamer Platz is a bustling area, surrounded by shops and offices. Dschungel closed down, but you can stay in its former home – which is now the Ellington Hotel (inspired by the club’s previous life as a jazz venue).");
  document.getElementById('modalLink').innerHTML = '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6GrDJu7q8VAxbKdUlYzezT" width="250" height="80" frameborder="0"></iframe>';
}

function TextFive() {
  modal.style.display = "block";
  modalback.style.display = "block";
  //document.getElementById('Heading').style.display = "none";
  document.getElementById('modalHeader').innerText = "SO36";
  $('#modalBody').html("One of Bowie and Pop’s regular haunts that hasn’t changed much today (relatively speaking) is the SO36 club, in Kreuzberg. Bowie and Pop spent many nights at the club, which was the centre of the city’s punk scene. It still regularly hosts gigs by both local and international rock acts, as well as parties, gay nights and a monthly roller disco.<br><br>For a rather more refined night on the town, head to the Paris Bar at 152 Kantsrasse in Charlottenburg – an elegant French restaurant, whose steak frites Bowie was particularly fond of.");
  document.getElementById('modalLink').innerHTML = '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5F2xD8qcdsWMixEd2lp6Ft" width="250" height="80" frameborder="0"></iframe>';
}
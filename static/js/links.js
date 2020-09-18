var links = [
  "<a href='index.html'><button class='btn btn-light'>Home</button></a>",
  "<a href='index.html'><button class='btn btn-light'>C++</button></a>",
  "<a href='index.html'><button class='btn btn-light'>JavaScript</button></a>",
  "<a href='index.html'><button class='btn btn-light'>JavaScript</button></a>"
];

hold = document.getElementById("links").innerHTML;
holdres = document.getElementById("links-res").innerHTML;
for(var i=0; i < links.length; i++)
{
  document.getElementById("links").innerHTML = hold + links[i];
  hold = document.getElementById("links").innerHTML;
  document.getElementById("links-res").innerHTML = holdres + links[i];
  holdres = document.getElementById("links-res").innerHTML;
}




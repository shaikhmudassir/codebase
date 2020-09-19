var title = "Sample";
var links = [
  "Task 1",
  "Task 2"
];

document.getElementById("title").innerText = "CodeBase - "+ title

hold = document.getElementById("links").innerHTML;
holdres = document.getElementById("links-res").innerHTML;
for(var i=0; i < links.length; i++)
{
  document.getElementById("links").innerHTML = hold + "<a href='"+ i +"'><button class='btn btn-light'>"+ links[i] +"</button></a>";
  hold = document.getElementById("links").innerHTML;
  document.getElementById("links-res").innerHTML = holdres + "<a href='"+ i +"'><button class='btn btn-light'>"+ links[i] +"</button></a>";
  holdres = document.getElementById("links-res").innerHTML;
}




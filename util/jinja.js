
var HOST = "http://127.0.0.1:5000/";

function subject()
{
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
    var data = JSON.parse(this.responseText)
    
    hold = document.getElementById('me-main').innerHTML
    for(var i=0; i < data['title'].length; i+=2)
    {
      if (i == data['title'].length-1)
      {
        document.getElementById('me-main').innerHTML = hold + 
        "<div class='row'>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
          "<div class='card'>"+
          "<div class='card-body'>"+
            "<h5 class='card-title'>" + capitalize(data['title'][i]) + "</h5>"+
            "<p class='card-text'>" + capitalize(data['description'][i]) + "</p>"+
            "<a href='"+ data['title'][i] +"' class='btn btn-primary'>Next &#8594</a>"+
          "</div>"+
          "</div>"+
        "</div>"+
        "</div>"
        break;
      }
      document.getElementById('me-main').innerHTML = hold + 
        "<div class='row'>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
          "<div class='card'>"+
          "<div class='card-body'>"+
            "<h5 class='card-title'>" + capitalize(data['title'][i]) + "</h5>"+
            "<p class='card-text'>" + capitalize(data['description'][i]) + "</p>"+
            "<a href='"+ data['title'][i] +"' class='btn btn-primary'>Next &#8594</a>"+
          "</div>"+
          "</div>"+
        "</div>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
          "<div class='card'>"+
          "<div class='card-body'>"+
          "<h5 class='card-title'>" + capitalize(data['title'][i+1]) + "</h5>"+
            "<p class='card-text'>" + capitalize(data['description'][i+1]) + "</p>"+
            "<a href='"+ data['title'][i+1] +"' class='btn btn-primary'>Next &#8594</a>"+
          "</div>"+
          "</div>"+
        "</div>"+
        "</div>"
      hold = document.getElementById('me-main').innerHTML

    }
  }
};
xhttp.open("GET", HOST + "@subject", true);
xhttp.send();
}

function topic(){
var url = window.location.href.split('/')

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
    var data = JSON.parse(this.responseText)

    document.getElementById("title").innerText = "CodeBase - " + capitalize(url[7].replace(".html",""))
    document.getElementById("page-title").innerText = capitalize(url[7].replace(".html",""))
    
    home = "<button class='btn btn-success' onclick='fhome();'>Home</button>";
    hold = document.getElementById("links").innerHTML = home ;
    holdres = document.getElementById("links-res").innerHTML = home;
    for(var i=0; i < data['Id'].length; i++)
    {
      document.getElementById("links").innerHTML = hold + "<button class='btn btn-light' onclick=post("+data['Id'][i]+")>"+ capitalize(data['topic'][i]) +"</button>";
      hold = document.getElementById("links").innerHTML;
      document.getElementById("links-res").innerHTML = holdres + "<button class='btn btn-light' onclick=post("+data['Id'][i]+")>"+capitalize(data['topic'][i])+"</button>";
      holdres = document.getElementById("links-res").innerHTML;
    }
    post(data['Id'][0])

  }
};
xhttp.open("GET", HOST + "@topic"+ url[7].replace(".html",""), true);
xhttp.send();
}

function post(Id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var data = JSON.parse(this.responseText)
      hold = document.getElementById('flask-post').innerHTML = ""
      holdlink = document.getElementById('flask-inner-link').innerHTML = ""
      for(var i=0; i < data['Id'].length; i++)
      {
        document.getElementById('flask-inner-link').innerHTML = holdlink + 
        "<li><a href='#"+ data['Id'][i] +"'><h6>"+ capitalize(data['title'][i]) +"</h6></a></li>"

        imageTag = ""
        if (data['image'][i] == '0')
        {
          imageTag = "<img src='img/"+ data['Id'][i] +".jpg'/>";
        }
        document.getElementById('flask-post').innerHTML = hold + 
        "<div id='"+ data['Id'][i] +"'>\n"+
          "<h4>" + capitalize(data['title'][i])+ "</h4>\n"+
          "<p>"+ capitalize(data['description'][i]) +"</p>\n"+
          "<pre>\n"+
          "<code class='code'>\n"+
            data['code'][i]+
          "</code>\n"+
          "</pre>\n"+
          "<h6>Output</h6>\n"+
          "<p>"+ capitalize(data['descOut'][i]) +"</p>"+
            imageTag +
          "<hr></div>"

          hold = document.getElementById('flask-post').innerHTML
          holdlink = document.getElementById('flask-inner-link').innerHTML 

      }
    }
  };
  xhttp.open("GET", HOST + "@post"+ Id, true);
  xhttp.send();

  

}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fhome()
{
  window.location = 'index.html'
}
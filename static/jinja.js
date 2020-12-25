var HOST = "https://shaikhmudassir.pythonanywhere.com/";

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
            "<a href='" +data['title'][i] +"' class='btn btn-primary'>Next &#8594</a>"+
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
            "<a href='" + data['title'][i] +"' class='btn btn-primary'>Next &#8594</a>"+
          "</div>"+
          "</div>"+
        "</div>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
          "<div class='card'>"+
          "<div class='card-body'>"+
          "<h5 class='card-title'>" + capitalize(data['title'][i+1]) + "</h5>"+
            "<p class='card-text'>" + capitalize(data['description'][i+1]) + "</p>"+
            "<a href='" + data['title'][i+1] +"' class='btn btn-primary'>Next &#8594</a>"+
          "</div>"+
          "</div>"+
        "</div>"+
        "</div>"
      hold = document.getElementById('me-main').innerHTML

    }
  }
};
xhttp.open("GET", "https://mudazzir.gitlab.io/codebase/database/subject.json", true);
xhttp.send();
}

function topic(){
var url = window.location.href.split('/');
if (capitalize(url[4].substr(0,url[4].indexOf('#')).replace(".html","")) == '')
{
   finalurl = capitalize(url[4].replace(".html",""))
}else{
   finalurl = capitalize(url[4].substr(0,url[4].indexOf('#')).replace(".html",""))
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
    var data = JSON.parse(this.responseText)

    document.getElementById("title").innerText = "CodeBase - " + finalurl
    document.getElementById("page-title").innerText = finalurl
    
    blogurl = "https://codebaseforum.blogspot.com/" + finalurl.toLowerCase() ;
    home = "<button class='btn btn-success' onclick='fhome();'>Home</button>" +
           "<button class='btn btn-success' type='button' onclick='blog(blogurl);'>Join Discussion</button>"
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
xhttp.open("GET", "https://mudazzir.gitlab.io/codebase/database/topic.json", true);
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
      for(var i=0; i < data[Id]['Id'].length; i++)
      {
        document.getElementById('flask-inner-link').innerHTML = holdlink + 
        "<li><a href='#"+ data[Id]['Id'][i] +"'><h6>"+ capitalize(data[Id]['title'][i]) +"</h6></a></li>"

        imageTag = ""
        if (data[Id]['image'][i] == '0')
        {
          img_url = "https://mudazzir.gitlab.io/codebase-img/"
          imageTag = "<img src='" + img_url + data[Id]['Id'][i] +".PNG' >";
        }
        document.getElementById('flask-post').innerHTML = hold + 
        "<div id='"+ data[Id]['Id'][i] +"'>\n"+
          "<h4>" + capitalize(data[Id]['title'][i])+ "</h4>\n"+
          "<p>"+ capitalize(data[Id]['description'][i]) +"</p>\n"+
          "<pre>\n"+
	  "<button type='button' id='cp-btn"+ data[Id]['Id'][i] +"' class='btn btn-light copy' onclick='copyFunction("+ data[Id]['Id'][i] +");'>Copy</button>\n"+
          "<code class='code' id='myInputcode"+ data[Id]['Id'][i] +"'>\n"+
            data[Id]['code'][i]+
          "</code>\n"+
          "</pre>\n"+
          "<h6>Output</h6>\n"+
          "<p>"+ capitalize(data[Id]['descOut'][i]) +"</p>"+
            imageTag +
          "<hr></div>"

          hold = document.getElementById('flask-post').innerHTML
          holdlink = document.getElementById('flask-inner-link').innerHTML; 
      }
    }
  };
  xhttp.open("GET", "https://mudazzir.gitlab.io/codebase/database/post.json", true);
  xhttp.send();
  if ( document.getElementById("navbarToggleExternalContent").classList.contains('show'))
  {
	document.getElementById("navbarToggleExternalContent").classList.remove('show');
  }
}

function capitalize(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function blog(blogurl)
{
  window.open(blogurl,'_blank')
}
function fhome()
{
  window.location = './'
}

var mybutton = document.getElementById("goTop");

window.onscroll = function()
{
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function copyFunction(var_id) {
  var id = var_id
  const copyText = document.getElementById("myInputcode"+id).textContent;
  const textArea = document.createElement('textarea');
  textArea.style.position = 'absolute';
  textArea.style.left = '-100%';
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.getElementById("cp-btn"+id).innerText = "Copied";
  textArea.remove();
  setTimeout(function(){ document.getElementById("cp-btn"+id).innerText = "Copy"; }, 10000);
}

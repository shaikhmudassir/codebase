title = [
    'Sample'
    ];
description = [
    'It is just used for testing propuse.This subject is only for developers of this site'
    ];


hold = document.getElementById('me-main').innerHTML
for(var i=0; i < title.length; i+=2)
{
    if (i == title.length-1)
    {
        document.getElementById('me-main').innerHTML = hold + 
        "<div class='row'>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
            "<div class='card'>"+
            "<div class='card-body'>"+
                "<h5 class='card-title'>" + title[i] + "</h5>"+
                "<p class='card-text'>" + description[i] + "</p>"+
                "<a href='#' class='btn btn-primary'>Next &#8594</a>"+
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
                "<h5 class='card-title'>" + title[i] + "</h5>"+
                "<p class='card-text'>" + description[i] + "</p>"+
                "<a href='#' class='btn btn-primary'>Next &#8594</a>"+
            "</div>"+
            "</div>"+
        "</div>"+
        "<div class='col-sm-6'  style='margin-top:2%;'>"+
            "<div class='card'>"+
            "<div class='card-body'>"+
               "<h5 class='card-title'>" + title[i+1] + "</h5>"+
                "<p class='card-text'>" + description[i+1] + "</p>"+
                "<a href='#' class='btn btn-primary'>Go somewhere</a>"+
            "</div>"+
            "</div>"+
        "</div>"+
        "</div>"
    hold = document.getElementById('me-main').innerHTML

}

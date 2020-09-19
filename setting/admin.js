function submitted() 
    {

      id = document.getElementById("id").value;
      lang = document.getElementById("lang").value;
      title = document.getElementById("title").value;
      desc = document.getElementById("desc").value;
      code = document.getElementById("code").value;
      image = document.getElementById("image").value;
      strOut = document.getElementById("strOut").value;

      document.getElementById("outputlink").value = "<li><a href='#"+id+"'><h6>"+ title +"</h6></a></li>"

      document.getElementById("output").innerHTML = 
        "<div id='"+ id +"'>\n"+
        "<h4>"+ title +"</h4>\n"+
        "<p>"+ desc +"</p>\n"+
        "<pre>\n"+
          "<code class='"+ lang +"'>\n"+
             code +"\n"+
          "</code>\n"+
        "</pre>\n"+
        "<h6>Output</h6>\n"
        hold = document.getElementById("output").innerHTML;

        if (document.getElementById("image").value != "")
        {
          document.getElementById("output").innerHTML = hold + 
          "<img src='"+ image +"'/>\n"+
          "</div>\n"
        }
        if (document.getElementById("strOut").value != "")
        {
          document.getElementById("output").innerHTML = hold + 
          "<p>"+ strOut +"<p>\n"+
          "</div>\n"
        }
    }
    
    function copy() {
      /* Get the text field */
      var copyText = document.getElementById("output");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
      document.getElementById("cp-btn2").innerText = "Copied";
    }
    function copylink() {
      /* Get the text field */
      var copyText = document.getElementById("outputlink");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
      document.getElementById("cp-btn1").innerText = "link Copied";
    }
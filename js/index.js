$( document ).on( "pageshow", "#indexPage", function( event ) {
  //alert( "Page was loaded" + localStorage.url );
   $('#urlval').val(localStorage.url);  //localStorage.url;
   $('#enterId').val(sessionStorage.enterId);
   //alert ('#url');
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API - only fires on first load of app not on each page
    //alert('phonegap is ready to use');
}



//$( document ).on( "pagechange", "#indexPage", function( event ) {
//     alert( "Page show" + localStorage.url );
//     $('#urlval').val = localStorage.url;
//});

function doLogin()
  {

      var enterId = $('#enterId').val();
      var enterPass = $('#enterPass').val();



      $.ajax({
        url:'http://' + localStorage.url + '/hr/login_ajax.php',
        cache: false,
        data: {'request' : 'chkUser',
               'userId':enterId, 'password': enterPass},
                dataType: 'json',
                success: function (data)
                {
                    if (data.errmsg.length==0)
                    {
                        sessionStorage.enterId = enterId;
                        $.mobile.changePage( "page2.html", { transition: "slideup", changeHash: false });
                    }
                    else
                        {
                            alert (data.errmsg);
                        }
                },
                error: function (jqo, txt, err)
                {
                    alert(txt);

                }

        });
 $.mobile.changePage( "page2.html", { transition: "slideup", changeHash: false });
  }



 function doSave()
 {
    if(typeof(Storage) == 'undefined')
      {
        //No Storage Available
        alert ("Your device doesn't support storage");
        return;
      }
      else
      {
      var url = $('#urlval').val();
      localStorage.url = url;

      }
 }

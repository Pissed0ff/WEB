//let imoj="TTTT";

let imoj="&#128570;";

$( ".ref1" ).css("color", "green"); 
$( ".ref2" ).css("fontSize", "30px");
$( ".ref3" ).css("margin", "0 auto");
$( ".ref4" ).css("border", " 3px solid red ");
$( "p" ).css({width: "300px",
              margin: "0 auto"})

$( "form input" ).attr("disabled" , "");


$( "a" ).prepend( imoj );


/*$('a' ).click(function()
              {
    event.preventDefault();
    let url = $(this).attr("href");
    window.open(url,"blank");
             
             });
*/

$('a').attr("target", "_blank");


$("[href *= https]").each(function (){
    this.href = this.href.replace("https:","http:");
    });


$(".cansel").css({
    position: "absolute",
    top : "30px",
    right : "30px"
    })

$(".cansel").click( function() {
    
    $('a').text( function(index,str) {
        str = str.replace("😺","");
        return str;
    })   
    
    $('a').attr("target", "_self");
    
})
//-----------------------------------------

$(".hide").click( function(){
    $p = $(this).parents("tr").find("p");
    if ($p.css("display") == 'none' ){
        $p.show(1000);
        
    }
    else {
        $p.hide(1000);
    }
})

$(".slide").click( function(){
    $p = $(this).parents("tr").find("p");
    if ($p.css("display") == 'none' ){
        $p.slideDown(1000);
        
    }
    else {
        $p.slideUp(1000);
    }
})
//-------------------------------------
function funcSucces(data){
    $("body").append(data);
}
        $("#reload").bind("click"), function() 
            {
                $.ajax({
                    url:"https://inxaoc.github.io/example/ajax-1.html",
                    type: "POST",
                    success: funcSucces
                    });
            };
//--------------------------------
$("#reload").click( function(){
    $(".load").load("https://inxaoc.github.io/example/ajax-1.html");
})

//---------

let object
$.ajax({
    
 url:'https://inxaoc.github.io/example/ajax.json',
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data){
    object = data;
    }
})


    























































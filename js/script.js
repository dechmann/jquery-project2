$(function() {
    
    var $body = $("body");
    //removes the put code here
    $("p").addClass("hide").remove();
    
    $.getJSON("favorites.json")
    .done( function(data){
        for(i = 0; i < data.favorite.lengh; i++){
            $body.append("<H2>" + data.favorite[i].name + "</H2>");
            $body.prepend("<p>" + data.favorite[i].info + "</p>");
            $body.prepend("<ul>" + createList(jsonObject) + "</li>");
        }
    })
.fail(function() {
    $body.prepend("<p>Sorry there was an error loading this page.</p>")
});
    
    function createList(jsonObject){
        var liList = "";
        for (var i = 0; i < jsonObject.list.length; i++) {
            liList += "<li>" + jsonObject.list[i] + "</li>";
        }
        return liList;
    }
    
    //this will hide the content on the load.
    $body.ready(function() {
        $("p").hide();
        $("ul").hide();
    });
    //this is my toggle method.
    $("H2").on("click", function() {
        if (this !== chosen){
            $(this).siblings().hide();
        chosen = this;
            $(this).siblings().show();
        }
    });
    /*$("H2").on("click", function() {
        $("p").hide();
        $("p").hide();
        $(this).siblings().show();
    })*/
});
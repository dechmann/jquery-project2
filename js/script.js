$(function() {
    
    
    
    var $body = $("body");
    //removes the put code here
    $("p").addClass("hide").remove();
    
    //This will display my json to the html.
    $.getJSON("js/favorites.json")
    .done( function(data){
        for(i = 0; i < data.favorite.length; i++){
            //$body.append("<H2>" + data.favorite[i].name + "</H2>");
            //$body.append("<p>" + data.favorite[i].info + "</p>");
            //$body.append("<ul>" + createList(data.favorite[i].list) + "</ul>");
            $body.append("<div><h2>" + data.favorite[i].name + "</h2><p>" + data.favorite[i].info + "</p><ul>" + createList(data.favorite[i].list) + "</ul>");
        }
        //this is to hide the content and show content.
        $("p").hide();
        $("ul").hide();
        
        //this is my click handeler.
        $("h2").on("click", function() {
            $("p").hide();
            $("ul").hide();
            $(this).siblings().show();
        });
    })
    //this is my fail protocal.
.fail(function() {
    $body.append("<p>Sorry there was an error loading this page.</p>")
});
    //This is to turn the strings in my json into a list.
    function createList(list){
        var liList = "";
        for (var i = 0; i < list.length; i++) {
            liList += "<li>" + list[i] + "</li>";
        }
        return liList;
    }
    
    
    
    
});
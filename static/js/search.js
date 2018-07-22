$("#search-button").click(function() {
    $("#search-overlay").css("display", "block");
    $("#search-overlay").animate({
        opacity: 1
    }, {
        duration: 50,
    });
    $("body").css("overflow", "hidden");
});

result = "<div class='post'>\
<a class='post-link' href='{{permalink}}'>\
<div id='clearfix'></div>\
<img class='post-thumbnail' src='{{image}}'>\
<h3 class='h2 post-title'>{{title}}</h3>\
<p class='post-summary'>{{summary}}</p></a><div>"

// Initilize Algolia Search
var search = instantsearch({
    appId: 'KC42205INS',
    apiKey: '3d0223189f9d70a998a4881cf48c83f8',
    indexName: 'Inks and Pens',
    routing: true
});
  
search.addWidget(
    instantsearch.widgets.hits({
        container: document.getElementById('hits'),
        templates: {
            empty: 'No results',
            item: result
        }
    })
);

search.addWidget(
    instantsearch.widgets.searchBox({
        container: document.getElementById('searchbox'),
        placeholder: 'Search posts'
    })
);

search.start();
$("#searchbox .ais-search-box").append("<i id='close-button' class='far fa-times-circle'></i>");

$("#close-button").click(function() {
    $("#search-overlay").animate({
        opacity: 0
    }, 100, function() {
        $("#search-overlay").css("display", "none");
        $("body").css("overflow", "scroll");
    });
});
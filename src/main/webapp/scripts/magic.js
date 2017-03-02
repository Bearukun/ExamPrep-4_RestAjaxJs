var map = document.getElementById("map");

map.addEventListener("click", toScreen);

var prevSelection;

function toScreen(evt) {

    if (prevSelection != undefined) {

        prevSelection.target.style = "fill:#c0c0c0";

    }

    var selection = evt.target.id;
    var splitSelect = selection.split("-");

    prevSelection = evt;

    evt.target.style = "fill:#ff0000";
    getCountry(splitSelect[0]);

}

function getCountry(direction) {

    var infoBox = document.getElementById("countryInfo");

    //Use the proxy
    var url = "/ExamPrep-4_RestAjaxJs/CountryProxy?cc=" + direction;
    
    //If we want to use restcountries REST API
    //var url = "http://restcountries.eu/rest/v1/alpha?codes=" + direction;

    var conf = {
        method: 'get'

    };


    var promise = fetch(url, conf);

    promise.then(function (response) {

        return response.text();

    }).then(function (text) {

        var country = JSON.parse(text);

        infoBox.innerHTML =
                "<b>Country:</b> " + country[0].name + "<br>" +
                "<b>Population:</b> " + country[0].population + "<br>" +
                "<b>Area:</b> " + country[0].area + "<br>" +
                "<b>Borders:</b> " + country[0].borders.toString() + "<br>"
                ;
    });

}




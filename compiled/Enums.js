"use strict";
var PornGenres;
(function (PornGenres) {
    PornGenres[PornGenres["UNKNOWN"] = 0] = "UNKNOWN";
    PornGenres[PornGenres["MILF"] = 1] = "MILF";
    PornGenres[PornGenres["BLONDE"] = 2] = "BLONDE";
    PornGenres[PornGenres["HENTAI"] = 3] = "HENTAI";
    PornGenres[PornGenres["THREESOME"] = 4] = "THREESOME";
})(PornGenres || (PornGenres = {}));
var PornVideos = [
    {
        genres: PornGenres.MILF,
        users: "EXPERTS"
    },
    {
        genres: PornGenres.BLONDE,
        users: "ROOKIES"
    },
    {
        genres: PornGenres.HENTAI,
        users: "ARTISTS"
    }
];
var numberOfVideos = function () {
    var numberOfTypes = 0;
    for (numberOfTypes; numberOfTypes <= PornVideos.length - 1; numberOfTypes++) { }
    return numberOfTypes;
};
var randomNumber = function (numberOfTypes) {
    return Math.round((Math.random() * numberOfTypes));
};
var PORNVIDEOS = function (random) {
    if (random == 0) {
        alert("NO PORN VIDEOS.. I'm so sorry");
    }
    else {
        var actress = PornVideos[random - 1];
        alert("The genre is " + PornGenres[actress.genres] + " and is for " + actress.users);
    }
};
PORNVIDEOS(randomNumber(numberOfVideos()));

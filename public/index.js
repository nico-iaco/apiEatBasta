"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var jsonResponse = [{
    "name": "McDonald",
    "address": "via Tiburtina 7",
    "min_order": 8,
    "img_url": "https://rovato5stelle.files.wordpress.com/2013/11/mcdonald.jpg"
}, {
    "name": "Burger King",
    "address": "via tiburtina 14",
    "min_order": 10,
    "img_url": "https://odms.aixenprovencetourism.com/ODMS/OpenData/Medias/61939/PATIO-5baabfe6-f612-4c2b-8093-b36ab8f7da92_636239481282361250.jpg"
}, {
    "name": "KFC",
    "address": "piazza dei mirti",
    "min_order": 15,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG4gfuyC61aNtiW80T-drIGoNkuDPGST8jcmlTKh-bg--GoJO"
}, {
    "name": "Starbucks",
    "address": "piazza del popolo",
    "min_order": 15,
    "img_url": "http://www.sentio.it/wp-content/uploads/2012/06/Starbucks-Iced-Constantine-Coffee.jpg"
}];

app.get('/restaurants', function (req, res) {
    res.json({ "restaurants": jsonResponse });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server in esecuzione");
});
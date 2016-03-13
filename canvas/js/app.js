var roomz = angular.module("Roomz", []);

$('.carousel').carousel({
    interval: 3000 //changes the speed
});

$('.link').click(function (event) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(500, newpage);
});

function newpage() {
    window.location = newLocation;
}
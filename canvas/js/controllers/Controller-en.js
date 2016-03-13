console.log("I am loaded");
roomz.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Content';
	$scope.legal = 'Legal';
	$scope.contact = 'Contact';
	$scope.canvas = 'Try live demo';
	$scope.about = {
		name: 'About',
		text: 'Roomz is developed for education and research in the context of Expertise Management Methodology (EMM). It is a tool specifically designed for these purposes.'
	};
    $scope.sliderDia1 =
    {
        name: 'Capture',
        img: 'res/global/slider/Slider_placeholder_1',
        text: 'One click adding of text, photos and more.'
    };
    $scope.sliderDia2 =
    {
        name: 'Structure',
        img: 'res/global/slider/Slider_placeholder_2.jpg',
        text: 'All your information visually structured.'
    };
    $scope.sliderDia3 =
    {
        name: 'Learn',
        img: 'res/global/slider/Slider_placeholder_3.jpg',
        text: 'Active, immersive and engaging.'
    };
    $scope.sliderDia4 =
    {
        name: 'Find',
        img: 'res/global/slider/Slider_placeholder_4.jpg',
        text: 'Everything that is related with automated lists.'
    };
    $scope.sliderDia5 =
    {
        name: 'Collaborate',
        img: 'res/global/slider/Slider_placeholder_5.jpg',
        text: 'Simultaneously use expertise management methodology.'
    };
    $scope.sliderDia6 =
    {
        name: 'Share',
        img: 'res/global/slider/image-1.jpg',
        text: 'Between devices with others.'
    };
    $scope.sliderDia7 =
    {
        name: 'Structure',
        img: 'res/global/slider/image-2.jpg',
        text: 'Diagrams, mindmaps, files and tagging.'
    };
    $scope.sliderDia8 =
    {
        name: 'Present',
        img: 'res/global/slider/image-8.jpg',
        text: 'Visual storytelling.'
    };
}]);

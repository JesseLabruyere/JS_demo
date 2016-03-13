console.log("Ik ben geladen");
roomz.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Inhoud';
	$scope.legal = 'Juridisch';
	$scope.contact = 'Contact';
	$scope.canvas = 'Probeer het';
	$scope.about = {
		name:'Over',
		text: 'Roomz is ontwikkeld in het kader van onderwijs en onderzoek rond de Expertise Management Methodology (EMM). Het is een specifiek daarvoor geschikte tool.'
	};
    $scope.sliderDia1 =
    {
        name: 'Leg vast',
        img: 'res/global/slider/Slider_placeholder_1.jpg',
        text: 'In één klik tekst, foto\'s en meer toevoegen.'
    };
    $scope.sliderDia2 =
    {
        name: 'Structureer',
        img: 'res/global/slider/Slider_placeholder_2.jpg',
        text: 'Al uw informatie visueel gestructureerd.'
    };
    $scope.sliderDia3 =
    {
        name: 'Leer',
        img: 'res/global/slider/Slider_placeholder_3.jpg',
        text: 'Actief, meeslepend en boeiend.'
    };
    $scope.sliderDia4 =
    {
        name: 'Vind',
        img: 'res/global/slider/Slider_placeholder_4.jpg',
        text: 'Alles wat gerelateerd is met automatische lijsten.'
    };
    $scope.sliderDia5 =
    {
        name: 'Werk samen',
        img: 'res/global/slider/Slider_placeholder_5.jpg',
        text: 'Gebruik gelijktijdig expertise management methodology.'
    };
    $scope.sliderDia6 =
    {
        name: 'Deel',
        img: 'res/global/slider/image-1.jpg',
        text: 'Tussen verschillende apparaten en gebruikers.'
    };
    $scope.sliderDia7 =
    {
        name: 'Structureer',
        img: 'res/global/slider/image-2.jpg',
        text: 'Diagrammen, mindmaps, bestanden en labels'
    };
    $scope.sliderDia8 =
    {
        name: 'Presenteer',
        img: 'res/global/slider/image-8.jpg',
        text: 'Visuele storytelling.'
    };
}]);

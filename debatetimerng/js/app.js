(function() {

	// Create the main app module.
	var app = angular.module('debateTimer', []);
	console.log("App  is defined");


	// define the debate style.
	var affSpeaker1;
	var affSpeaker2;
	var negSpeaker1;
	var negSpeaker2;
	var localAppVar = "app object var";


	function init() {
		// style.clearStyle();
		console.log("init called");
	}

	var x = app.controller('DebateTimmerAppController', function($scope) {

		$scope.showStylePicker = function() {
			return ($scope.page === "style");
		}
		$scope.showSpeakerInputs = function() {
			return ($scope.page === "speakers");
		}
		$scope.showTimer = function() {
			return ($scope.page === "timer");
		}

		$scope.debateStyleLd = function() {
			$scope.debateStyle = "LD";
   			$scope.speakerHeading = "Speaker";
   			$scope.defaultAff1 = "Aff";
   			$scope.defaultNeg1 = "Neg";

			$scope.page = "speakers";
		}
		$scope.debateStyleTp = function() {
			$scope.debateStyle = "TP";
			$scope.speakerHeading = "Speakers";
   			$scope.defaultAff1 = "Aff 1";
   			$scope.defaultNeg1 = "Neg 1";

			$scope.page = "speakers";
		}
		$scope.clearStyle = function() {
			$scope.debateStyle = "xx";
			$scope.schedule = [];

			$scope.page = "style";
		}

		$scope.styleLd = function() {
			return ($scope.debateStyle === "LD");
		}
		$scope.styleTp = function() {
			return ($scope.debateStyle === "TP");
		}


		$scope.loadSchedule = function() {
			console.log("load schedule");
			$scope.schedule = [
			{ speaker: "1A", speech: "1AC",      minutes: 8, usedMinutes: 0},
			{ speaker: "2N", speech: "Cross X",  minutes: 3, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 5, usedMinutes: 0},
			];
			$scope.page = "timer";
		}

		$scope.clearStyle();
		console.log("App controller defined");

	});

	var styleCtrl = app.controller('DebateStyleController', function($scope) {

		$scope.local = "this is local";

		$scope.show = function() {
			return ($scope.debateStyle === "xx");
		}
		$scope.debateStyleLd = function() {
			$scope.debateStyle = "LD";
			console.log("style now " + $scope.debateStyle);
   			$scope.speakerHeading = "Speaker";
   			$scope.defaultAff1 = "Aff";
   			$scope.defaultNeg1 = "Neg";
		}
		$scope.debateStyleTp = function() {
			$scope.debateStyle = "TP";
			console.log("style now " + $scope.debateStyle);
			$scope.speakerHeading = "Speakers";
   			$scope.defaultAff1 = "Aff 1";
   			$scope.defaultNeg1 = "Neg 1";
		}
		$scope.styleLd = function() {
			return ($scope.ebateStyle === "LD");
		}
		$scope.styleTp = function() {
			return ($scope.debateStyle === "TP");
		}
		$scope.clearStyle = function() {
			$scope.debateStyle = "xx";
			console.log("clearStyle() " + $scope.debateStyle);
		}
		$scope.localView = function() {
			return $scope.local;
		}
		$scope.debateStyle = function() {
			return $scope.debateStyle;
		}
		console.log("style object defined");
		$scope.clearStyle();

	});

	var speakCtrl = app.controller('SpeakerFormController', function($scope) {
		$scope.show = function() {
			return (($scope.debateStyle === 'LP') || ($scope.debateStyle === 'TP')); 
		}
		$scope.debateStyle = function() {
			return 'speakCtrl.debateStyle function called, $scope.local is ' + $scope.local;
		}

	});

	app.controller('TimerController', function() {

		tpSchedule = [
			{ speaker: "1A", speech: "1AC",      minutes: 8, usedMinutes: 0},
			{ speaker: "2N", speech: "Cross X",  minutes: 3, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 5, usedMinutes: 0},
			{ speaker: "1N", speech: "1NC",      minutes: 8, usedMinutes: 0},
			{ speaker: "1A", speech: "Cross X",  minutes: 3, usedMinutes: 0},

			{ speaker: "PA", speech: "Prep Aff", minutes: 5, usedMinutes: 0},
			{ speaker: "2A", speech: "2AC",      minutes: 8, usedMinutes: 0},
			{ speaker: "1N", speech: "Cross X",  minutes: 3, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 0, usedMinutes: 0},
			{ speaker: "2N", speech: "2NC",      minutes: 8, usedMinutes: 0},

			{ speaker: "2A", speech: "Cross X",  minutes: 3, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 0, usedMinutes: 0},
			{ speaker: "1N", speech: "1NR",      minutes: 5, usedMinutes: 0},
			{ speaker: "PA", speech: "Prep Aff", minutes: 0, usedMinutes: 0},
			{ speaker: "1A", speech: "1AR",      minutes: 5, usedMinutes: 0},

			{ speaker: "PN", speech: "Prep Neg", minutes: 0, usedMinutes: 0},
			{ speaker: "2N", speech: "2NR",      minutes: 5, usedMinutes: 0},
			{ speaker: "PA", speech: "Prep Aff", minutes: 0, usedMinutes: 0},
			{ speaker: "2A", speech: "2AR",      minutes: 5, usedMinutes: 0},
		];

		ldSchedule = [
			{ speaker: "1A", speech: "AC",       minutes: 6, usedMinutes: 0},
			{ speaker: "1N", speech: "Cross X",  minutes: 6, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 6, usedMinutes: 0},
			{ speaker: "1N", speech: "NC",       minutes: 6, usedMinutes: 0},
			{ speaker: "1A", speech: "Cross X",  minutes: 6, usedMinutes: 0},

			{ speaker: "PA", speech: "Prep Aff", minutes: 6, usedMinutes: 0},
			{ speaker: "1A", speech: "AR",       minutes: 6, usedMinutes: 0},
			{ speaker: "PN", speech: "Prep Neg", minutes: 6, usedMinutes: 0},
			{ speaker: "1N", speech: "NR",       minutes: 6, usedMinutes: 0},
			{ speaker: "PA", speech: "Prep Aff", minutes: 6, usedMinutes: 0},

			{ speaker: "1A", speech: "AR",       minutes: 6, usedMinutes: 0},
		];
	});


	//init();

})();
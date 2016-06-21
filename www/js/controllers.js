angular.module('app.controllers', [])

.controller('resultadosCtrl', function($scope) {

})

.controller('noticiasCtrl', function($scope) {

})

.controller('calendarioCtrl', function($scope) {

})

.controller('equiposCtrl', function($scope) {

})

.controller('resultadosHeroCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  // This is just a sample script. Paste your real code (javascript or HTML) here.
var newItems = false;
var ref2 = new Firebase("https://livefutsal1.firebaseio.com/ResultadosHero");
ref2.on('child_changed', function(message, data) {
  if (!newItems) return;
  $rootScope.NewResUpdate = message.val()

  enviar()
});

ref2.once('value', function(messages) {
  newItems = true;
});

var RefUser= new Firebase("https://livefutsal1.firebaseio.com/ResultadosHero");
          $scope.todosResultados = $firebaseArray(RefUser);
          $scope.todosResultados.$loaded().then(function(dataResultados)
          {


              if(dataResultados.length)

              {



                 console.log(dataResultados)

                  $scope.resultadosAll=dataResultados;

                  $scope.results = dataResultados.map(function (el)
              {
                  return el.resultado;


              })

                   console.log($scope.results)
                  //console.log($scope.results)
                   //$scope.html1 = $sce.trustAsHtml(notice2);
                   //$scope.html2 = $sce.trustAsHtml(strVar);




              }
              else
              {
                  $scope.todosResultados.$add({
                  fecha:'2 de abril de 2016' ,
                  equipo1:'Leones de Nariño',
                  marcador1: '4',
                  equipo2:'La Noria Fsc',
                  marcador2:'2'

                 });



              }

         })



var enviar = function() {
  // Define relevant info

  // Build the request object
  var req = {
    method: 'POST',
    url: 'https://onesignal.com/api/v1/notifications',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic YzZiMTYxODUtOWE2NC00ZmY3LWIxODMtZmJiODA3NzFlZWNm'
    },
    data: {
      "app_id": "728d2520-4439-4977-b869-752324a718da",
      "contents": {
        "en": "" + $rootScope.NewResUpdate.equipo1 + " Vs " + $rootScope.NewResUpdate.equipo2
      },
      "included_segments": ["All"],

      "template_id" : 'f226952f-db3e-4def-aa21-1b673ea04a94'
    }
  };

  // Make the API call
  $http(req).success(function(resp) {
    // Handle success
    console.log("Ionic Push: Push success", resp);
  }).error(function(error) {
    // Handle error
    console.log("Ionic Push: Push error", error);
  });

}

})

.controller('resultadosMundialCtrl', function($scope) {

})

.controller('noticiasHeroCtrl', function($scope) {

})

.controller('noticiasMundialCtrl', function($scope) {

})

.controller('calendarioHeroCtrl', function($scope) {

})

.controller('resultadosArgosCtrl', function($scope) {

})

.controller('noticiasArgosCtrl', function($scope) {

})

.controller('calendarioArgosCtrl', function($scope) {

})

.controller('equiposHeroCtrl', function($scope) {

})

.controller('equiposArgosCtrl', function($scope) {

})

.controller('equiposMundialCtrl', function($scope) {

})

.controller('calendarioMundialCtrl', function($scope) {

})

.controller('posicionesHeroCtrl', function($scope) {

})

.controller('posicionesArgosCtrl', function($scope) {

})

.controller('posicionesMundialCtrl', function($scope) {

})

.controller('imagenesHeroCtrl', function($scope) {

})

.controller('videosHeroCtrl', function($scope) {

})

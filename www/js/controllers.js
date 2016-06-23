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

    var RefUser= new Firebase("https://livefutsal1.firebaseio.com/ResultadosHero");
          $scope.todosResultados = $firebaseArray(RefUser);
          $scope.todosResultados.$loaded().then(function(dataResultados)
          {


              if(dataResultados.length)

              {

                  $scope.resultadosAll=dataResultados;

              }
              else
              {
                  $scope.todosResultados.$add({
                  fecha:'2016' ,
                  equipo1:'equipo1',
                  marcador1: '0',
                  equipo2:'equipo2',
                  marcador2:'0'

                 });



              }

         })



})

.controller('resultadosMundialCtrl', function($scope) {

})

.controller('noticiasHeroCtrl', function($scope, $http, $firebaseArray, $rootScope) {

  var RefNotiHero= new Firebase("https://livefutsal1.firebaseio.com/NoticiasHero");
        $scope.todasNoticiasHero = $firebaseArray(RefNotiHero);
        $scope.todasNoticiasHero.$loaded().then(function(dataResultados)
        {


            if(dataResultados.length)

            {

                $scope.noticiasAll=dataResultados;

            }
            else
            {
                $scope.todosResultados.$add({
                titulo:'2016' ,
                texto:'equipo1'

               });



            }

       })


})

.controller('noticiasMundialCtrl', function($scope) {

})

.controller('calendarioHeroCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  var RefUser= new Firebase("https://livefutsal1.firebaseio.com/CalendarioHero");
        $scope.todosResultados = $firebaseArray(RefUser);
        $scope.todosResultados.$loaded().then(function(dataResultados)
        {


            if(dataResultados.length)

            {

                $scope.calendarios=dataResultados;

            }
            else
            {
                $scope.todosResultados.$add({
                fecha:'2016' ,
                urlImagen:'url1',
                fuente: 'fuente'

               });



            }

       })



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

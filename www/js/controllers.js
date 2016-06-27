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

.controller('resultadosMundialCtrl', function($scope, $http, $firebaseArray, $rootScope) {

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

.controller('noticiasMundialCtrl', function($scope, $http, $firebaseArray, $rootScope) {

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

.controller('resultadosArgosCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  $scope.trustSrc = function(src) {
   return $sce.trustAsResourceUrl(src);
 }

  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/ResultadosArgos");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.resultadosAll = dataResultados;
      } else {
        $scope.todosResultados.$add({
          titulo: 'leones',
          url: 'pasto',
          fuente: 'fuente'

        });
      }
    })


})

.controller('noticiasArgosCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  var RefNotiHero= new Firebase("https://livefutsal1.firebaseio.com/NoticiasArgos");
        $scope.todasNoticiasHero = $firebaseArray(RefNotiHero);
        $scope.todasNoticiasHero.$loaded().then(function(dataResultados)
        {


            if(dataResultados.length)

            {

                $scope.noticiasAll=dataResultados;

            }
            else
            {
                $scope.todasNoticiasHero.$add({
                titulo:'2016' ,
                texto:'equipo1'

               });



            }

       })

})

.controller('calendarioArgosCtrl', function($scope, $http, $firebaseArray, $rootScope) {

  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/CalendarioArgos");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.calendarios = dataResultados;
      } else {
        $scope.todosResultados.$add({
          equipo: 'leones',
          ciudad: 'pasto',
          imagen: 'fuente',
          urlPagina: 'facebook'

        });
      }
    })

})

.controller('equiposHeroCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/EquiposHero");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.equipos = dataResultados;
      } else {
        $scope.todosResultados.$add({
          equipo: 'leones',
          ciudad: 'pasto',
          imagen: 'fuente',
          urlPagina: 'facebook'

        });
      }
    })

})

.controller('equiposArgosCtrl', function($scope, $http, $firebaseArray, $rootScope) {
  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/EquiposArgos");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.equipos = dataResultados;
      } else {
        $scope.todosResultados.$add({
          equipo: 'leones',
          ciudad: 'pasto',
          imagen: 'fuente',
          urlPagina: 'facebook'

        });
      }
    })

})

.controller('equiposMundialCtrl', function($scope) {

})

.controller('calendarioMundialCtrl', function($scope) {

})

.controller('posicionesHeroCtrl', function($scope, $http, $firebaseArray, $rootScope, $sce) {
  $scope.trustSrc = function(src) {
   return $sce.trustAsResourceUrl(src);
 }

  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/PosicionesHero");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.posiciones = dataResultados;
      } else {
        $scope.todosResultados.$add({
          titulo: 'leones',
          url: 'pasto',
          fuente: 'fuente'

        });
      }
    })



})

.controller('posicionesArgosCtrl', function($scope) {

})

.controller('posicionesMundialCtrl', function($scope) {

})

.controller('imagenesHeroCtrl', function($scope, $http, $firebaseArray, $rootScope, $sce) {
  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/ImagenesHero");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.imagenes = dataResultados;
      } else {
        $scope.todosResultados.$add({
          titulo: 'leones',
          url: 'pasto',
          fuente: 'fuente'

        });
      }
    })

})

.controller('videosHeroCtrl', function($scope, $http, $firebaseArray, $rootScope, $sce) {

  $scope.trustSrc = function(src) {
   return $sce.trustAsResourceUrl(src);
 }

  var RefUser = new Firebase("https://livefutsal1.firebaseio.com/VideosHero");
    $scope.todosResultados = $firebaseArray(RefUser);
    $scope.todosResultados.$loaded().then(function(dataResultados) {
      if (dataResultados.length) {
        $scope.videos = dataResultados;
      } else {
        $scope.todosResultados.$add({
          titulo: 'leones',
          url: 'pasto',
          fuente: 'fuente'

        });
      }
    })



})

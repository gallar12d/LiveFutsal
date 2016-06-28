angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.resultados', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/resultados.html',
        controller: 'resultadosCtrl'
      }
    }
  })

  .state('tabsController.noticias', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('tabsController.calendario', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/calendario.html',
        controller: 'calendarioCtrl'
      }
    }
  })

  .state('tabsController.equipos', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/equipos.html',
        controller: 'equiposCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.resultadosHero', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/resultadosHero.html',
        controller: 'resultadosHeroCtrl'
      }
    }
  })

  .state('tabsController.resultadosMundial', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/resultadosMundial.html',
        controller: 'resultadosMundialCtrl'
      }
    }
  })

  .state('tabsController.noticiasHero', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/noticiasHero.html',
        controller: 'noticiasHeroCtrl'
      }
    }
  })

  .state('tabsController.noticiasMundial', {
    url: '/page17',
    views: {
      'tab2': {
        templateUrl: 'templates/noticiasMundial.html',
        controller: 'noticiasMundialCtrl'
      }
    }
  })

  .state('tabsController.calendarioHero', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/calendarioHero.html',
        controller: 'calendarioHeroCtrl'
      }
    }
  })

  .state('tabsController.resultadosArgos', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/resultadosArgos.html',
        controller: 'resultadosArgosCtrl'
      }
    }
  })

  .state('tabsController.noticiasArgos', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/noticiasArgos.html',
        controller: 'noticiasArgosCtrl'
      }
    }
  })

  .state('tabsController.calendarioArgos', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/calendarioArgos.html',
        controller: 'calendarioArgosCtrl'
      }
    }
  })

  .state('tabsController.equiposHero', {
    url: '/page15',
    views: {
      'tab4': {
        templateUrl: 'templates/equiposHero.html',
        controller: 'equiposHeroCtrl'
      }
    }
  })

  .state('tabsController.equiposArgos', {
    url: '/page23',
    views: {
      'tab4': {
        templateUrl: 'templates/equiposArgos.html',
        controller: 'equiposArgosCtrl'
      }
    }
  })

  .state('tabsController.equiposMundial', {
    url: '/page19',
    views: {
      'tab4': {
        templateUrl: 'templates/equiposMundial.html',
        controller: 'equiposMundialCtrl'
      }
    }
  })

  .state('tabsController.calendarioMundial', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/calendarioMundial.html',
        controller: 'calendarioMundialCtrl'
      }
    }
  })

  .state('tabsController.posicionesHero', {
    url: '/page20',
    views: {
      'tab4': {
        templateUrl: 'templates/posicionesHero.html',
        controller: 'posicionesHeroCtrl'
      }
    }
  })

  .state('tabsController.posicionesArgos', {
    url: '/page21',
    views: {
      'tab4': {
        templateUrl: 'templates/posicionesArgos.html',
        controller: 'posicionesArgosCtrl'
      }
    }
  })

  .state('tabsController.posicionesMundial', {
    url: '/page22',
    views: {
      'tab4': {
        templateUrl: 'templates/posicionesMundial.html',
        controller: 'posicionesMundialCtrl'
      }
    }
  })

  .state('tabsController.imagenesHero', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/imagenesHero.html',
        controller: 'imagenesHeroCtrl'
      }
    }
  })

  .state('tabsController.videosHero', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/videosHero.html',
        controller: 'videosHeroCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')



});

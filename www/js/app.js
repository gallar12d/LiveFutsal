// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'firebase', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngSanitize', 'ion-floating-menu',  'tabSlideBox', 'ion-gallery'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    //funciones de Notificaciones
    var notificationOpenedCallback = function(jsonData) {
   if (jsonData.additionalData) {
     if (jsonData.additionalData.yourUrlKey)
       location.href = jsonData.additionalData.yourUrlKey;
   }
 }

    window.plugins.OneSignal.init("728d2520-4439-4977-b869-752324a718da",
                                   {googleProjectNumber: "136367561171"},
                                   notificationOpenedCallback);

    // Show an alert box if a notification comes in when the user is in your app.
    window.plugins.OneSignal.setSubscription(true);
    window.plugins.OneSignal.enableNotificationWhenActive(true);
    window.plugins.OneSignal.enableInAppAlertNotification(true);
    window.plugins.OneSignal.enableSound(false);
    window.plugins.OneSignal.enableVibrate(false);




    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
app.config(function(ionGalleryConfigProvider) {
  ionGalleryConfigProvider.setGalleryConfig({
                          action_label: 'Close',
                          toggle: false,
                          row_size: 3,
                          fixed_row_size: true
  });
});

angular.module('nasApp')
  .service('nasaService', function($resource) {

    var marsPhotoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
    var apiKey = 'api_key=cryl5WnGW8dJnNH1Fh5KFOhDxNvxPwSnIkVwkf7A';


    var resource = $resource(marsPhotoUrl, {
      getMarsPhotos: {
        method: 'GET',
        URL: marsPhotoUrl + 'sol=:sol' + apiKey
      }
    });

    this.getMarsPhotos = function(sol) {
      return resource.getMarsPhotos({sol:sol}).$promise;
    };

  });

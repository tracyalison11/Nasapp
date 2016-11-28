'use strict';

angular.module('nasApp.version', [
  'nasApp.version.interpolate-filter',
  'nasApp.version.version-directive'
])

.value('version', '0.1');

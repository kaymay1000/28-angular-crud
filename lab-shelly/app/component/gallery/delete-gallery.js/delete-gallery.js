'use strict';

// require('./_delete-gallery.scss');

module.exports = {
  template: require('./delete-gallery.html'),
  controllerAs: 'deleteGalleryCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {

      $log.debug('Delete Gallery Controller');

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then(
          () => $log.log('gallery deleted'),
          err => $log.error(err));
      };
    };
  }],
};

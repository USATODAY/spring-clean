define(
    [
        'jquery',
        'underscore',
        'backbone',
        'dataManager',
        'views/AppView',
        'templates'
    ],
    function(jQuery, _, Backbone, dataManager, AppView, templates) {
        return {
            init: function() {

                //remove page header
                // $('header').fadeOut();

                //Initialize main appView
                var appView = new AppView({
                    el: ".iapp-wrap"
                });

                //Make data request
                dataManager.getData();

                jQuery(window).resize(function() {
                    Backbone.trigger("window:resize");
                });

                if(window.Modernizr !== undefined && window.innerWidth <=1100) {
                    if (Modernizr.touch) {
                        $('.iapp-wrap').addClass('tablet');
                    }
                }
            }
        };
    });

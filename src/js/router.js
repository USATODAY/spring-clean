define([
    "jquery",
    "underscore",
    'lib/BackboneRouter',
    ], 
    function($, _, Backbone) { 
        var Router = Backbone.Router.extend({

            routes: {
                "": "home",
                
                "lab/:lab_id":                 "highlight",    // #/1

            },

            home: function() {
                Backbone.trigger("homeRoute");
            },

            highlight: function(lab_id) {
                Backbone.trigger("router:lab", lab_id);
            }

        });


        return new Router();
});
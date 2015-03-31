define(
    [
        'jquery',
        'underscore',
        'backbone',
        'dataManager'
    ],
    function(jQuery, _, Backbone){

        return Backbone.Model.extend( {
            defaults: {
                'name': '',
                'abbreviation': '',
                'labNum': 0
            },

            initialize: function() {
            }
    });

});

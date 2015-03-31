define(
    [
        'jquery',
        'underscore',
        'backbone',
    ],
    function(jQuery, _, Backbone){

        return Backbone.Model.extend( {

            initialize: function() {
                // this.set({'question_id': parseInt(this.get('question_id'))});
            }
    });

});

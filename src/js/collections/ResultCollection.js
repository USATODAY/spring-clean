define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/StateModel'
    ], 
    function(jQuery, _, Backbone, StateModel) {
        return Backbone.Collection.extend({
            model: StateModel
        });
});

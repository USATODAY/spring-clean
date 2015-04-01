define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/ResultModel'
    ], 
    function(jQuery, _, Backbone, ResultModel) {
        return Backbone.Collection.extend({
            model: ResultModel
        });
});

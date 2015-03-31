define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/QuestionModel'
    ], 
    function(jQuery, _, Backbone, QuestionModel) {
        return Backbone.Collection.extend({
            model: QuestionModel
        });
});

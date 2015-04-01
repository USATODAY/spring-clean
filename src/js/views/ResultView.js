define([
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'api/analytics',
    'models/config',
    'templates'
], function(jQuery, _, Backbone, Analytics, config, templates){
    return Backbone.View.extend({
        template: templates['result.html'],
        className: "iapp-question-card iapp-panel upcoming",
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events: {
            'click .iapp-back-button': 'onBackClick'
        },
        onBackClick: function() {
            Backbone.trigger("show:previous");
        }
    })
});

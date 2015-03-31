define([
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'api/analytics',
    'models/config',
    'templates'
], function(jQuery, _, Backbone, Analytics, config, templates){
    return Backbone.View.extend({
        template: templates['question.html'],
        className: "iapp-question-card iapp-panel upcoming",
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events: {
            'click .iapp-yes-button': 'onYesClick',
            'click .iapp-no-button': 'onNoClick',
            'click .iapp-back-button': 'onBackClick'
        },
        onYesClick: function() {
            if (this.model.get("yes_result") !== "") {
                Backbone.trigger("show:result", this.model.get("yes_result"));
            } else {
                console.log(typeof(this.model.get("yes_question")));
                Backbone.trigger("show:question", this.model.get("yes_question"));
            }
        },
        onNoClick: function() {
            if (this.model.get("no_result") !== "") {
                Backbone.trigger("show:result", this.model.get("no_result"));
            } else {
                Backbone.trigger("show:question", this.model.get("no_question"));
            }
        },
        onBackClick: function() {
            Backbone.trigger("show:previous");
        }
    })
});

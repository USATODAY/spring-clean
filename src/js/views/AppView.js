define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'api/analytics',
    'collections/QuestionCollection',
    'models/config',
    'views/QuestionView',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, QuestionCollection, config, QuestionView, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "show:result", this.onShowResult);
                this.listenTo(Backbone, "show:question", this.onShowQuestion);
                this.listenTo(Backbone, "show:previous", this.onShowPrevious);
            },
            events: {
                "click .iapp-begin-button": "onBeginClick"
            },
            onBeginClick: function() {
                this.$('.intro-panel').removeClass('active').addClass('done');
                this.renderQuestion("1");
            },
            onDataReady: function() {
                this.render();
                console.log(dataManager.data);
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);

                this.questionCollection = new QuestionCollection(dataManager.data.questions);
            },
            onNextClick: function() {
                Analytics.trackEvent('Into next button click.');
                Backbone.trigger("app:advance");
            },
            onInfoShow: function() {
                Backbone.trigger('InfoShow');
            },
            render: function() {
               this.$el.append(this.template());
               return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
            },
            renderQuestion: function(qId) {
                var _this = this;
                var qModel = this.questionCollection.findWhere({'question_id': qId});
                console.log(qId);
                var qView = new QuestionView({model: qModel});
                this.currentQuestion = qView;
                this.$el.append(qView.render().el);
                _.delay(function() {
                    _this.showPanel(qView);
                }, 50);
            },
            renderResult: function(rId) {
                var _this = this;
                var rModel = this.resultCollection.findWhere({'resuld_id': rId});
                var rView = new ResultView({model: rModel});
                this.currentQuestion = rView;
                this.$el.append(rView.render().el);
                _.delay(function() {
                    _.this.showPanel(rView);
                }, 50);
            },
            showPanel: function(viewObj) {
                viewObj.$el.removeClass('upcoming').removeClass('done').addClass('active');
            },
            hidePanel: function(viewObj) {
                viewObj.$el.removeClass('active').addClass('done');
            },
            getURL: function() {
                //returns a string of the current root URL
                return 'http://' + window.location.hostname + window.location.pathname;
            },
            onShowResult: function(result_id) {
                console.log("result: ");
                this.hidePanel(this.currentQuestion);
                this.renderResult(result_id);
            },
            onShowQuestion: function(question_id) {
                this.hidePanel(this.currentQuestion);
                this.previousQuestions.push(this.currentQuestion);
                this.renderQuestion(question_id);
            },
            onShowPrevious: function() {
                var oldQuestion = this.currentQuestion;
                oldQuestion.$el.removeClass("active").addClass("upcoming");
                if (this.previousQuestions.length > 0) {
                    this.currentQuestion = this.previousQuestions.pop();
                    this.showPanel(this.currentQuestion);
                } else {
                    this.currentQuestion = null;
                    this.$('.intro-panel').removeClass('done').addClass('active');
                }
                _.delay(function() {
                    oldQuestion.remove();
                }, 250);

            },
            previousQuestions: []
        });
});

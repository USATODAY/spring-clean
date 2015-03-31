define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;
    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/data/data.json";

    }

    return {
        data: {},
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data = data[0];

                // trigger the dataReady Backbone even which kicks off the app 
                Backbone.trigger("dataReady", this);

            });
        },
        userName: ''
    };
});

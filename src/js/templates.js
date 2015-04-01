define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel intro-panel active">\n    <div class="iapp-img-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/logo.svg" alt="How do I get rid of that?" />\n    </div>\n    <p>' +
((__t = (chatter)) == null ? '' : __t) +
'</p>\n    <div class="iapp-button iapp-button-green iapp-begin-button">\n        <div class="iapp-button-text">\n            Begin\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["question.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="iapp-img-wrap small">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/logo.svg" alt="How do I get rid of that?" />\n    </div>\n\n<h3 class="iapp-question-text">' +
((__t = (question_text)) == null ? '' : __t) +
'</h3>\n<div class="yes-wrap">\n    <div class="iapp-button iapp-button-green iapp-yes-button">\n        <div class="iapp-button-text">yes</div>\n    </div>\n    <div class="iapp-arrow-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/left-arrow.svg" alt="" />\n    </div>\n</div>\n<div class="iapp-button iapp-back-button">\n    <div class="iapp-button-text">\n        back\n    </div>\n</div>\n<div class="no-wrap">\n    <div class="iapp-button iapp-button-green iapp-no-button">\n        <div class="iapp-button-text">no</div>\n    </div>\n    <div class="iapp-arrow-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/right-arrow.svg" alt="" />\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["result.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-img-wrap small">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/logo.svg" alt="How do I get rid of that?" />\n    </div>\n\n<h3 class="iapp-question-text">' +
((__t = (result_text)) == null ? '' : __t) +
'</h3>\n<div class="iapp-button iapp-back-button">\n    <div class="iapp-button-text">\n        back\n    </div>\n</div>\n\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});
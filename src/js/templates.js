define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel intro-panel active">\n    <div class="iapp-img-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/logo.svg" alt="How do I get rid of that?" />\n    </div>\n    <h1>Intro</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <div class="iapp-button iapp-button-green iapp-begin-button">\n        <div class="iapp-button-text">\n            Begin\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["question.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-button">\n    <div class="iapp-button-text iapp-back-button">\n        back\n    </div>\n</div>\n<h3 class="iapp-question-text">' +
((__t = (question_text)) == null ? '' : __t) +
'</h3>\n<div class="yes-wrap">\n    <div class="iapp-button iapp-button-green iapp-yes-button">\n        <div class="iapp-button-text">yes</div>\n    </div>\n    <div class="iapp-arrow-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/left-arrow.svg" alt="" />\n    </div>\n</div>\n<div class="no-wrap">\n    <div class="iapp-button iapp-button-green iapp-no-button">\n        <div class="iapp-button-text">no</div>\n    </div>\n    <div class="iapp-arrow-wrap">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/spring-clean-flowchart/img/right-arrow.svg" alt="" />\n    </div>\n</div>\n';

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
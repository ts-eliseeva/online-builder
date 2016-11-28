ace.define("ace/theme/tse",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-tse";
exports.cssText = ".ace-tse .ace_gutter {\
background: #ebebeb;\
color: #333;\
overflow : hidden;\
}\
.ace-tse .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-tse {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-tse .ace_cursor {\
color: black;\
}\
.ace-tse .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-tse .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-tse .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-tse .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-tse .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-tse .ace_fold {\
}\
.ace-tse .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-tse .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-tse .ace_support.ace_class,\
.ace-tse .ace_support.ace_other {\
color: rgb(109, 121, 222);\
}\
.ace-tse .ace_variable.ace_parameter {\
font-style:italic;\
color:#FD971F;\
}\
.ace-tse .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-tse .ace_comment {\
color: rgb(150,150,150);\
}\
.ace-tse .ace_comment.ace_doc {\
color: #236e24;\
}\
.ace-tse .ace_comment.ace_doc.ace_tag {\
color: #236e24;\
}\
.ace-tse .ace_variable {\
color: rgb(49, 132, 149);\
}\
.ace-tse .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-tse .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-tse .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-tse .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-tse .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-tse .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-tse .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-tse .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-tse .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-tse .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-tse .ace_storage,\
.ace-tse .ace_keyword,\
.ace-tse .ace_meta.ace_tag {\
color: rgb(147, 15, 128);\
}\
.ace-tse .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-tse .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
.ace-tse .ace_meta.ace_tag.ace_tag-name {\
color: rgb(0, 0, 128);\
}\
.ace-tse .ace_tag.ace_punctuation.ace_end-tag-open,\
.ace-tse .ace_tag.ace_punctuation.ace_end-tag-close,\
.ace-tse .ace_meta.ace_tag.ace_tag-open,\
.ace-tse .ace_meta.ace_tag.ace_tag-close {\
color: rgb(51, 51, 51);\
}\
.ace-tse .ace_support.ace_type,\
.ace-tse .ace_entity.ace_other.ace_attribute-name {\
color: rgb(0, 0, 255);\
}\
.ace-tse .ace_string.ace_attribute-value {\
color: rgb(0, 128, 0);\
}\
.ace-tse .ace_constant.ace_language.ace_escape,\
.ace-tse .ace_string{\
color: rgb(24, 54, 145);\
}\
.ace-tse .ace_constant.ace_language.ace_boolean,\
.ace-tse .ace_constant.ace_numeric {\
color: rgb(0, 0, 128);\
font-weight: bold;\
}\
.ace-tse .ace_keyword,\
.ace-tse .ace_storage.ace_type{\
color: rgb(0, 0, 128);\
}\
.ace-tse .ace_storage.ace_type{\
font-weight: bold;\
}\
.ace-tse .ace_entity.ace_name.ace_function {\
color: rgb(50, 140, 185);\
}\
.ace-tse .ace_identifier{\
color:rgb(51, 51, 51);\
}\
.ace-tse .ace_variable.ace_parameter,\
.ace-tse .ace_variable.ace_language{\
color: rgb(167,29,93);\
}\
.ace-tse .ace_variable + .ace_support.ace_function + .ace_identifier,\
.ace-tse .ace_identifier + .ace_support.ace_function + .ace_identifier,\
.ace-tse .ace_variable + .ace_punctuation.ace_operator + .ace_identifier,\
.ace-tse .ace_identifier + .ace_punctuation.ace_operator + .ace_identifier{\
color: rgb(102, 14, 122);\
}\
.ace-tse .ace_paren.ace_lparen,\
.ace-tse .ace_paren.ace_rparen,\
.ace-tse .ace_punctuation.ace_operator{\
color: rgb(167, 29, 93);\
}\
.ace-tse .ace_punctuation.ace_operator{\
font-weight: bold;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

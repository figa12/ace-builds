define('ace/mode/ccs', function(require, exports, module) {

    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var Tokenizer = require("ace/tokenizer").Tokenizer;
    var CCSHighlightRules = require("ace/mode/ccs_highlight_rules").CCSHighlightRules;

    var Mode = function() {
        this.$tokenizer = new Tokenizer(new CCSHighlightRules().getRules());
    };
    oop.inherits(Mode, TextMode);

    (function() {
        // Extra logic goes here. (see below)
    }).call(Mode.prototype);

    exports.Mode = Mode;
});

// Highlighting.
define('ace/mode/ccs_highlight_rules', function(require, exports, module) {

    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var CCSHighlightRules = function() {

        this.$rules = { start:
                        [
                            {
                                token: "keyword.operator", regex: /[+|=\\]/
                            },
                            {
                                token: "variable", regex: /[\s]*[A-Z][a-zA-Z0-9_]*/
                            },
                            {
                                token: "comment", regex: /#.*/
                            }
                        ]
                      };

    };

    oop.inherits(CCSHighlightRules, TextHighlightRules);

    exports.CCSHighlightRules = CCSHighlightRules;
});

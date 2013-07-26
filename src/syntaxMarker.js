var SyntaxMarker = SyntaxMarker || {
    languages: {}
};

SyntaxMarker.highlight = function(input, tokens) {
    var index = 0;
    var outputHtml = "";

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        //copy anything before the next token
        if (index < token.index) {
            outputHtml += input.substring(index, token.index);
            index += token.index - index;
        }

        //add appropriate class to the token
        outputHtml += '<code class="' + token.token + '">';
        outputHtml += token.text;
        outputHtml += '</code>';

        index += token.text.length;

        //copy anything after the last token
        if (i === tokens.length - 1 && index < input.length) {
            outputHtml += input.substring(index);
        }
    }

    if (tokens.length == 0) {
        outputHtml = input;
    }

    return outputHtml;
};

SyntaxMarker.addLanguage = function(name, grammar) {
    SyntaxMarker.languages[name] = grammar;
};

SyntaxMarker.mark = function() {
    for (var key in SyntaxMarker.languages) {
        var matches = document.querySelectorAll('pre.syntax-marker-highlight.' + key);

        for (var i = 0; i < matches.length; i++) {
            var input = matches.item(i).innerHTML;

            var lexer = new TokenJS.Lexer(input, SyntaxMarker.languages[key], true);    //ignore unrecognized characters
            var tokens = lexer.tokenize();
            var newInput = SyntaxMarker.highlight(input, tokens);

            matches.item(i).innerHTML = newInput;
        }
    }
};
module('syntaxMarker');

test("Handles multiple tokens and maintains text that is not considered a token", function () {
    var tokens = [{text: '1', token: 'num1', index: 0},
        {text: '+', token: 'plus', index: 2},
        {text: '2', token: 'num2', index: 4}];

    assertEquals('<code class="num1">1</code> <code class="plus">+</code> <code class="num2">2</code>;', SyntaxMarker.highlight('1 + 2;', tokens));
});
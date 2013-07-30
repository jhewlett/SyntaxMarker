SyntaxMarker.addLanguage('ruby', {
    root: [
        [/\b(puts|BEGIN|END|__ENCODING__|__END__|__FILE__|__LINE__|alias|and|begin|break|case|class|def|defined?|do|else|elsif|end|ensure|false|for|if|in|module|next|nil|not|or|redo|rescue|retry|return|self|super|then|true|undef|unless|until|when|while|yield)\b/,
            'keyword'],
        //[/[_a-zA-Z][_a-zA-Z0-9]*[!=?]?/, 'identifier'],
        [SyntaxMarker.commonExpressions.integer, 'number'],
        [SyntaxMarker.commonExpressions.decimal, 'number'],
        [/:[@$_a-zA-Z][_a-zA-Z0-9]*[!=?]?/, 'symbol'],
        [/#.*/, 'comment'],
        [SyntaxMarker.commonExpressions.doubleQuoteString, 'string'],
        [SyntaxMarker.commonExpressions.singleQuoteString, 'string']
    ]
});
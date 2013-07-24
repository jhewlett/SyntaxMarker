SyntaxMarker.addLanguage('ruby', {
    root: [
        [/puts|BEGIN|END|__ENCODING__|__END__|__FILE__|__LINE__|alias|and|begin|break|case|class|def|defined?|do|else|elsif|end|ensure|false|for|if|in|module|next|nil|not|or|redo|rescue|retry|return|self|super|then|true|undef|unless|until|when|while|yield /,
            'keyword'],
        [/[_a-zA-Z][_a-zA-Z0-9]*[!=?]?/, 'identifier'],
        [/[0-9]+/, 'number'],
        [/:[@$_a-zA-Z][_a-zA-Z0-9]*[!=?]?/, 'symbol'],
        [/#.*$/m, 'comment'],
        [/"[^"]*"/, 'string'],
        [/'[^']*'/, 'string']
    ]
});
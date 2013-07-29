SyntaxMarker.addLanguage('csharp', {
    root: [
        [/\b(enum|lock|base|sizeof|public|private|protected|abstract|internal|interface|class|const|readonly|struct|namespace|using|get|set|throw|new|void|foreach|for|while|do|in|true|false|var|return|null|extern|ref|out|static|event|delegate|try|catch|finally|case|break|continue|goto|virtual|override|sealed|operator|params|this|typeof|unsafe|checked|unchecked|explicit|implicit|fixed|volatile|if|else|switch|typeof|default|is|as|yield|await|dynamic|global|async)\b/, 'keyword'],
        [/\b(byte|sbyte|ulong|ushort|char|int|uint|long|short|bool|double|float|decimal|string|object)\b/, 'types'],
        //[/\b(DateTime|List|Array)\b/, 'types'],
        [/[0-9]+/, 'number'],
        [/[0-9]+\.[0-9]*/, 'number'],
        [/[0-9]*\.[0-9]+/, 'number'],
        [/"[^"]*"/, 'string'],
        [/'[^']*'/, 'symbol'],
        [/\/\/\/.*/, 'comment'],
        [/\/\/.*/, 'comment'],
        [/\/\*(.|\n)*?\*\//, 'comment']
        //scientific notation
        //string/id literals
    ]
})
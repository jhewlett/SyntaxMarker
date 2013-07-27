SyntaxMarker.addLanguage('csharp', {
    root: [
        [/\b(public|private|protected|abstract|internal|interface|class|const|readonly|struct|namespace|using|get|set|throw|new|void|foreach|for|while|do|in|true|false|var|return|null|extern|ref|out|static)\b/, 'keyword'],
        [/\b(int|uint|long|short|bool|double|float|decimal|string)\b/, 'types'],
        //[/\b(DateTime|List|Array)\b/, 'types'],
        [/[0-9]+/, 'number'],
        [/[0-9]*\.[0-9]*/, 'number'],
        [/"[^"]*"/, 'string'],
        [/'[^']*'/, 'symbol'],
        [/\/\/\/.*/, 'doc-comment'],
        [/\/\/.*/, 'comment'],
        [/\/\*(.|\n)*?\*\//, 'multi-comment']
        //scientific notation
        //string/id literals
    ]
})
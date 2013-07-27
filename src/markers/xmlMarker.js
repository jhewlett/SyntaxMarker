SyntaxMarker.addLanguage('xml', {
    root: [
        [/&lt;!--(.|\n)*?--&gt;/, 'number'],
        [/&lt;/, function() {
            this.state('insideNode');
            return TokenJS.Ignore;
        }],
        [/[^&<]+/, 'comment']
    ],
    insideNode: [
        [/[^&<>\s/]+/, 'keyword'],
        [/\s+/, function() {
            this.state('attribute');
            return TokenJS.Ignore;
        }],
        [/&gt;/, function() {
            this.state('root');
            return TokenJS.Ignore;
        }]
    ],
    attribute: [
        [/[^&<>\s=/]+/, 'xmlAttribute'],
        [/&gt;/, function() {           // support for html-style attributes without values
            this.state('root');
            return TokenJS.Ignore;
        }],
        [/\s*=\s*/, function() {
            this.state('attrValue');
            return TokenJS.Ignore;
        }]
    ],
    attrValue: [
        [/"[^<>"]*"/, 'string'],
        [/'[^<>']*'/, 'string'],
        [/\s*\/?&gt;/, function() {
            this.state('root');
            return TokenJS.Ignore;
        }],
        [/\s+/, function() {
            this.state('attribute');
            return TokenJS.Ignore;
        }]
    ]
});
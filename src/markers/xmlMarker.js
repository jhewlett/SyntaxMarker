SyntaxMarker.addLanguage('xml', {
    root: [
        [/&lt;/, function() {
            this.state('insideNode');
            return TokenJS.Ignore;
        }],
        [/[^&<>]+/, 'symbol']
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
        [/[^&<>\s=/]+/, 'string'],
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
        [/\w+/, 'comment'],     //turn these into quote? support both?
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
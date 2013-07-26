SyntaxMarker.addLanguage('xml', {
    root: [
        [/&lt;!--(.|\n)*?--&gt;/, function() {
            //this.state('insideComment');
            return 'number';
         }],
        [/&lt;/, function() {
            this.state('insideNode');
            return TokenJS.Ignore;
        }],
        [/[^&<]+/, 'symbol']
    ],
//    insideComment: [
//        [/--&gt;/]
//    ]
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
        [/"[^<>"]*"/, 'comment'],
        [/'[^<>']*'/, 'comment'],
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
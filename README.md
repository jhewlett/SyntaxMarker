SyntaxMarker
============

SyntaxMarker is a lightweight library for applying syntax highlights to code snippets. Its only dependency is [TokenJS](http://github.com/jhewlett/tokenjs).

Example
-------

Include the CSS, the lexer (TokenJS), SyntaxMarker, the language-specific file, and call `SyntaxMarker.mark()` in a script tag.
Surround the snippet in a `<pre>` tag with the class `syntax-marker-highlight` and the language, e.g. `ruby`.

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/style.css"/>
</head>
<body>

<pre class="syntax-marker-highlight ruby">
def add(a, b)
    return a + b
end
</pre>

<script src="../lib/lexer.js"></script>
<script src="../src/syntaxMarker.js"></script>
<script src="../src/markers/rubyMarker.js"></script>
<script type="text/javascript">
    SyntaxMarker.mark();
</script>
</body>
</html>
```

Language Support
---------------
Currently there is support for Ruby, C#, and Xml/Html. Adding support for additional languages is fairly straightforward.

Note that the Xml marker expects `<` and `>` to be replaced with `&lt;` and `&gt;`.

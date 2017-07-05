# Embeddable JS widget

Build an embeddable widget using [RequireJS](http://requirejs.org) and [Gulp](http://gulpjs.com/).

## How to build the widget

See the blog post on [2amigos](https://2amigos.us/blog/how-to-create-an-embeddable-javascript-widget)

### Bower dependencies

Considering you have installed globally bower:
```bash
# https://github.com/requirejs/almond#almond
bower install almond
# https://github.com/requirejs/text
bower install requirejs-text
bower install jquery
```

Considering you have installed only locally bower:
```bash
node_modules/bower/bin/bower install jquery
node_modules/bower/bin/bower install almond
node_modules/bower/bin/bower install text
```

Then, if locally, you can run:
```bash
node node_modules/gulp/bin/gulp.js build
```

Credits
-------
- [2amigOS! Consulting Group](http://2amigos.us)
- [Antonio Ramirez](https://github.com/tonydspaniard)
- [All Contributors](../../contributors)

License
-------

The BSD License (BSD). Please see [License File](LICENSE.md) for more information.


> [![2amigOS!](http://www.gravatar.com/avatar/55363394d72945ff7ed312556ec041e0.png)](http://www.2amigos.us)  
<i>Web development has never been so fun!</i>  
[www.2amigos.us](http://www.2amigos.us)

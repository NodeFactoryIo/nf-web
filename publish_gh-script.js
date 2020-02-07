var ghpages = require('gh-pages');

ghpages.publish('dist', {
  remote: 'github'
}, function(err){console.error(err)});

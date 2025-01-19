const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    repo: 'git@github.com:Abakar-Issa/portfolio.git',
    message: 'Auto-generated commit',
    force: true
  },
  function(err) {
    if (err) {
      console.error('Deployment error:', err);
    } else {
      console.log('Successfully deployed!');
    }
  }
);

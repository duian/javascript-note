const SingleLinked = require('./review');

const singleLinked = new SingleLinked();

singleLinked.append('one');
singleLinked.append('two');
singleLinked.append('three');

singleLinked.display();

singleLinked.reverse();
singleLinked.display();

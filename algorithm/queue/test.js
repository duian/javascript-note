const QueueBaseOnLinkedList = require('./queueBaseOnLinkedList');

const q = new QueueBaseOnLinkedList();

q.enqueue('a');
q.enqueue('b');


q.display();

q.dequeue();
q.display();

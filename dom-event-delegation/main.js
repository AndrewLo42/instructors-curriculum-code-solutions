var tasks = document.querySelector('.task-list');

tasks.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var taskItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', taskItem);
    taskItem.remove();
  }

});

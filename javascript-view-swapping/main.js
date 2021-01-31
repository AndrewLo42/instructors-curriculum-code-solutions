var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var tabIdx = 0; tabIdx < tabs.length; tabIdx++) {
    if (tabs[tabIdx] === event.target) {
      tabs[tabIdx].className = 'tab active';
    } else {
      tabs[tabIdx].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (var viewIdx = 0; viewIdx < views.length; viewIdx++) {
    if (views[viewIdx].getAttribute('data-view') !== viewName) {
      views[viewIdx].className = 'view hidden';
    } else {
      views[viewIdx].className = 'view';
    }
  }

});

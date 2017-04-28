'use strict';

var Shuffle = window.shuffle;

var element = document.getElementById('grid');

var Demo = function (element) {
  this.element = element;

  this.shuffle = new Shuffle(element, {
    itemSelector: '.item',
  });

  this._activeFilters = [];

  this.addFilterButtons();

  this.mode = 'exclusive';
};

Demo.prototype.toArray = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

Demo.prototype.toggleMode = function () {
  if (this.mode === 'additive') {
    this.mode = 'exclusive';
  } else {
    this.mode = 'additive';
  }
};

/**
 * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
 * for them like you normally would (with jQuery for example). The extra event
 * data is in the `detail` property.
 */
var globalIsFiltered = false;

Demo.prototype.addFilterButtons = function () {
  var options = document.querySelector('#filter-options');

  if (!options) {
    return;
  }

  var filterButtons = this.toArray(
    options.children
  );

  document.addEventListener('click', this._handleAllClick.bind(this), false);
  document.getElementById('ver-todos').addEventListener('click', this._handleAllClick.bind(this), false);
  filterButtons.forEach(function (button) {
    if (button.id == 'ver-todos') {return;}
    button.addEventListener('click', this._handleFilterClick.bind(this), false);
  }, this);
};

Demo.prototype._handleAllClick = function (evt) {
  if (!globalIsFiltered) {
    evt.preventDefault();
    var btnGroup = Shuffle.ALL_ITEMS;

    var filterGroup;
    
    filterGroup = btnGroup;

    this.shuffle.filter(filterGroup);

    var filterButtons = this.toArray(
      document.querySelector('#filter-options').children
    );
    filterButtons.forEach(function (button){
      button.classList.add('before-select');
    });

  }

  globalIsFiltered = false;
};

Demo.prototype._handleFilterClick = function (evt) {
  evt.preventDefault();
  globalIsFiltered = true;
  var btn = evt.currentTarget;
  var btnGroup = btn.getAttribute('data-group');
  if(!btnGroup){
    btnGroup = Shuffle.ALL_ITEMS;
  }
  this._removeActiveClassFromChildren(btn.parentNode);

  var filterGroup;
  
  btn.classList.add('active');
  filterGroup = btnGroup;

  this.shuffle.filter(filterGroup);
};

Demo.prototype._removeActiveClassFromChildren = function (parent) {
  var children = parent.children;
  for (var i = children.length - 1; i >= 0; i--) {
    children[i].classList.remove('before-select');
    children[i].classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.demo = new Demo(document.getElementById('grid'));
});
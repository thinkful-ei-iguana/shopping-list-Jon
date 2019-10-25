'use strict';


$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let userText = $('#shopping-list-entry').val(); 
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${userText}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
    
    `);
  });


  $('ul').on('click', '.shopping-item-delete', function(event){
    $(event.currentTarget).parent().parent().remove();
  });



  //TOGGLE
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.currentTarget ).parent().parent().find('span.shopping-item').toggleClass('shopping-item__checked');
  });

});

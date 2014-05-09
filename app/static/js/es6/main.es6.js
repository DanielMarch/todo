(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.update').click(update);
  }

  function update(){
    $(this).closest('form').submit();
  }
})();

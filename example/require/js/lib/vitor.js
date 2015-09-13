define(["jquery"], function($) {
  $.fn.vitor = function() {
      return this.after('<p>Vítor is Go!</p>');
  };
});
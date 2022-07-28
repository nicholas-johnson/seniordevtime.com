(function($) {
  this.each(function(el) {
    el = $(el);
    var hider = el.find('.hideButton');
    var hiddenSection = el.find('.hiddenSection');
    hider.click(function() {
      hider.toggleClass('hidden');
      hiddenSection.toggleClass('hidden');
    })
  })
})(jQuery)

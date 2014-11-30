var gifBuffer = {
  bufferClass: 'gif-buffer',
  customAttribute: 'data-gif-src',
};

$(document).ready(function() {
  $('.' + gifBuffer.bufferClass).each(function(obj) {
    var gifSrc = $(this).attr(gifBuffer.customAttribute);

    var img = $('<img src="' + gifSrc + '" />');

    $(img).load(function() {
      // console.log('gif loaded');
    });

    $(this).attr('src', gifSrc);
  });
});

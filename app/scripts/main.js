// Create the event.
var event = document.createEvent('Event');
// Define that the event name is 'jqueryLoaded'.
event.initEvent('jqueryLoaded', true, true);

// target can be any Element or other EventTarget.
$(document).ready(function($) {
  Array.prototype.forEach.call(document.querySelectorAll('header[id*="header"]'), function(elem) {
    elem.dispatchEvent(event);
  });
});


module.exports = function(element) {
  var element2Top = element.offsetTop;
  var scrollHeight = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

  return (scrollHeight + window.innerHeight) > element2Top;
};

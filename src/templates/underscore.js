/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
JSONEditor.defaults.templates.underscore = function() {
  if(!window._) return false;

  return {
    compile: function(template) {
      return function(context) {
        return window._.template(template, context);
      };
    }
  };
};

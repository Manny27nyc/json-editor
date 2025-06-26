/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
JSONEditor.defaults.templates.hogan = function() {
  if(!window.Hogan) return false;

  return {
    compile: function(template) {
      var compiled = window.Hogan.compile(template);
      return function(context) {
        return compiled.render(context);
      };
    }
  };
};

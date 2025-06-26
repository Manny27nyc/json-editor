/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
JSONEditor.defaults.templates.default = function() {
  var expandVars = function(vars) {
    var expanded = {};
    $each(vars, function(i,el) {
      if(typeof el === "object" && el !== null) {
        var tmp = {};
        $each(el, function(j,item) {
          tmp[i+'.'+j] = item;
        });
        $extend(expanded,expandVars(tmp));
      }
      else {
        expanded[i] = el;
      }
    });
    return expanded;
  };
  
  return {
    compile: function(template) {
      return function (vars) {
        var expanded = expandVars(vars);
        
        var ret = template+"";
        // Only supports basic {{var}} macro replacement
        $each(expanded,function(key,value) {
          ret = ret.replace(new RegExp('{{\\s*'+key+'\\s*}}','g'),value);
        });
        return ret;
      };
    }
  };
};

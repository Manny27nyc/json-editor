/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
JSONEditor.defaults.editors.integer = JSONEditor.defaults.editors.number.extend({
  sanitize: function(value) {
    value = value + "";
    return value.replace(/[^0-9\-]/g,'');
  },
  getNumColumns: function() {
    return 2;
  }
});

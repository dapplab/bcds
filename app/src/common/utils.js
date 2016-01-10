class FormatUtil {
  static formatMoney(value) {
    return (value / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  static formatPercentage(value) {
    return (value).toFixed(2) + "%";
  }

  static formatDate(value) {
    var date = new Date(value*1000);
    return date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate();
  }
}

class StringUtil {
  static decodeBytes(input) {
    var str = "";
    for (var i = 0; i < input.length; i += 2) {
      var tmp = input.slice(i, i + 2);
      if (tmp != '0x') {
        if (tmp == '00')
          break;
        str += String.fromCharCode('0x' + tmp);
      }
    }
    return str;
  }

}

export default {FormatUtil, StringUtil} ;

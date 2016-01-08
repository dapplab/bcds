export default class FormatUtil {
static formatMoney( value ) {
  return (value/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

static formatPercentage(value) {
  return (value).toFixed(2) + "%" ;
}

static formatDate(value) {
  var date = new Date(value * 1000);
  return date.getFullYear().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getDate();
 }
}

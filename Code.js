function doGet() {
  return HtmlService.createHtmlOutputFromFile('main');
}

function covertToString(hour, minute) {
  var MINUTES = ["Null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "viersehn", "funfsehn", "sechzehn", "siebzehn", "auchtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "vierundzwanzig", "fünfundzwanzig", "sechsundzwanzig", "siebenundzwanzig", "achtundzwanzig", "neunundzwanzig", "dreißig", "einunddreißig", "zweiunddreißig", "dreiunddreißig", "vierunddreißig", "fünfunddreißig", "sechsunddreißig", "siebenunddreißig", "achtunddreißig", "neununddreißig", "vierzig", "einundvierzig", "zweiundvierzig", "dreiundvierzig", "vierundvierzig", "fünfundvierzig", "sechsundvierzig", "siebenundvierzig", "achtundvierzig", "neunundvierzig", "fünfzig", "einundfünfzig", "zweiundfünfzig", "dreiundfünfzig", "vierundfünfzig", "fünfundfünfzig", "sechsundfünfzig", "siebenundfünfzig", "achtundfünfzig", "neunundfünfzig"]
  var HOURS = ["Null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "siben", "acht", "neun", "zehn", "elf", "zwölf", "eins", "zwei", "drei", "vier", "fünf", "sechs", "siben", "acht", "neun", "zehn", "elf", "Null"]
  var time_text = '';
  if(minute == 0) {
    time_text = HOURS[hour];
  } else if(minute > 0 && minute < 15) {
    time_text = MINUTES[minute] + " nach " + HOURS[hour];
  } else if(minute == 15) {
    time_text = "viertel nach " + HOURS[hour];
  } else if(minute > 15 && minute < 30) {
    time_text = MINUTES[30 - minute] + " vor halb " + HOURS[hour + 1];
  } else if(minute == 30) {
    time_text = "halb " + HOURS[hour + 1]
  } else if(minute > 30 && minute < 45) {
    time_text = MINUTES[minute - 30] + " nach halb " + HOURS[hour + 1];
  } else if(minute == 45) {
    time_text = "viertel vor " + HOURS[hour + 1]
  } else {
    time_text = MINUTES[60 - minute] + " vor " + HOURS[hour + 1];
  }
  return time_text;
}

function convertHourMinute(hour, minute) {
  var timeConverted = covertToString(hour, minute)
  return "Es ist " + timeConverted;
}
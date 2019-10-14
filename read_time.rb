# console
MINUTES = %w[
  Null eins zwei drei vier funf sechs sieben acht neun zehn
  elf zwölf dreizehn viersehn funfsehn sechzehn siebzehn auchtzehn neunzehn
  zwanzig einundzwanzig zweiundzwanzig dreiundzwanzig vierundzwanzig
  fünfundzwanzig sechsundzwanzig siebenundzwanzig achtundzwanzig neunundzwanzig
  dreißig einunddreißig zweiunddreißig dreiunddreißig vierunddreißig
  fünfunddreißig sechsunddreißig siebenunddreißig achtunddreißig neununddreißig
  vierzig einundvierzig zweiundvierzig dreiundvierzig vierundvierzig
  fünfundvierzig sechsundvierzig siebenundvierzig achtundvierzig neunundvierzig
  fünfzig einundfünfzig zweiundfünfzig dreiundfünfzig vierundfünfzig
  fünfundfünfzig sechsundfünfzig siebenundfünfzig achtundfünfzig neunundfünfzig
]

HOURS = %w[
  Null eins zwei drei vier funf sechs siben acht neun zehn elf zwölf eins zwei
  drei vier funf sechs siben acht neun zehn elf Null
]

print "Enter Time (example '2 20', '1 00'): "
string_time = gets.split(' ')
hour = string_time[0].to_i
minute = string_time[1].to_i

time_text =
  case minute
  when 0
    HOURS[hour].to_s
  when 1..14
    "#{MINUTES[minute]} nach #{HOURS[hour]}"
  when 15
    "vertel nach #{HOURS[hour]}"
  when 16..29
    "#{MINUTES[30 - minute]} vor halb #{HOURS[hour + 1]}"
  when 30
    "halb #{HOURS[hour + 1]}"
  when 31..44
    "#{MINUTES[minute - 30]} nach halb #{HOURS[hour + 1]}"
  when 45
    "vertel vor #{HOURS[hour + 1]}"
  else
    "#{MINUTES[60 - minute]} vor #{HOURS[hour + 1]}"
  end

puts "Es ist #{time_text}"

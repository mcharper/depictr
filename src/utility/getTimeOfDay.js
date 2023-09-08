
export const getTimeOfDay = (m) => {
  if (!m || !m.isValid()) { return ''; }

  var currentHour = parseFloat(m.format('HH'));
  if (currentHour < 0 || currentHour > 23) { return '' };

  var timesOfDay = [
    'midnight', 'early hours', '2am', '3am',
    'night shift', 'before dawn', 'dawn', 'early morning',
    'coffee', 'morning', 'morning', 'lunch',
    'afternoon', 'afternoon', 'afternoon', 'afternoon',
    'afternoon', 'afternoon', 'evening', 'evening',
    'evening', 'late evening', 'late evening', 'night',
  ];

  return timesOfDay[currentHour];
}


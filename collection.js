let words = [
  'あ','い','う','え', 'お',
  'か','き','く','け', 'こ',
];

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words.length; j++) {
    document.write(words[i] + words[j] + ' ');
  }
  document.write('<br>');
  }
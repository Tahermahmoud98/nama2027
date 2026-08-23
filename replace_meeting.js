const fs = require('fs');
let content = fs.readFileSync('translations.js', 'utf8');

// Replace student meeting title
content = content.replace('داخوازیا جڤینێ', 'داخوازیا کۆمبوونێ');
// Replace "مصلحەتا" with "بەرژەوەندییا"
content = content.replace('مصلحەتا', 'بەرژەوەندییا');
// Replace "جڤینەکا" with "کۆمبوونەکا"
content = content.replace('جڤینەکا', 'کۆمبوونەکا');
// Replace "بۆ جڤینێ:" with "بۆ کۆمبوونێ: ل رێکەفتی"
content = content.replace('دەمێ پێشنیارکری بۆ جڤینێ: ${formattedDate}', 'دەمێ پێشنیارکری بۆ کۆمبوونێ: ل رێکەفتی ${formattedDate}');

fs.writeFileSync('translations.js', content, 'utf8');
console.log('Replacement complete.');

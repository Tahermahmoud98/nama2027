const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const jsContent = fs.readFileSync('translations.js', 'utf8');

const kuBlockMatch = jsContent.match(/ku:\s*\{([\s\S]*?)\n\s*\},\s*en:/);
if (kuBlockMatch) {
    const kuBlock = kuBlockMatch[1];
    const dict = {};
    const regex = /([a-zA-Z0-9_]+)\s*:\s*\"([^\"]+)\"/g;
    let match;
    while ((match = regex.exec(kuBlock)) !== null) {
        dict[match[1]] = match[2];
    }
    
    console.log('Found dict entries: ' + Object.keys(dict).length);
    console.log('reason_health in dict: ' + dict['reason_health']);
    
    let replaceCount = 0;
    html = html.replace(/(data-i18n=\"([a-zA-Z0-9_]+)\"[^>]*>)([^<]*)(<\/[a-zA-Z0-9]+>)/g, (fullMatch, start, key, oldText, end) => {
        if (dict[key]) {
            replaceCount++;
            return start + dict[key] + end;
        }
        return fullMatch;
    });
    
    // Fix Kurdish spelling in HTML: replace ي with ی and ك with ک outside data-i18n?
    // Let's just fix specific spelling errors
    html = html.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
    
    console.log('Replaced ' + replaceCount + ' tags');
    fs.writeFileSync('index.html', html);
} else {
    console.log('Could not find ku block');
}

import re

with open('translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

def insert_after(content, lang, search_key, new_keys_str):
    pattern = r'(' + lang + r':\s*\{[^\}]*' + search_key + r'.*?\n)'
    return re.sub(pattern, r'\1' + new_keys_str, content, count=1)

# Arabic
ar_add = '''        tab_add_single_teacher: "إضافة معلم واحد",
        tab_add_bulk_teacher: "إضافة مجموعة معلمين (Excel)",
        title_saved_teachers: "المعلمون المحفوظون:",
        hint_excel_teacher: "انسخ بيانات المعلمين من ملف إكسل والصقها هنا. (الاسم، رقم الهاتف)",
'''
content = insert_after(content, 'ar', 'tab_add_single: "إضافة طالب واحد",', ar_add)

# Kurdish
ku_add = '''        tab_add_single_teacher: "زێدەکرنا ئێک مامۆستا",
        tab_add_bulk_teacher: "زێدەکرنا مامۆستایان ب کۆمەل (Excel)",
        title_saved_teachers: "مامۆستایێن پاشەکەوتکری:",
        hint_excel_teacher: "پێزانینێن مامۆستایان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، ژمارە)",
'''
content = insert_after(content, 'ku', 'tab_add_single: "زێدەکرنا ئێک قوتابی",', ku_add)

# English
en_add = '''        tab_add_single_teacher: "Add Single Teacher",
        tab_add_bulk_teacher: "Add Bulk Teachers (Excel)",
        title_saved_teachers: "Saved Teachers:",
        hint_excel_teacher: "Copy teachers data from Excel and paste here. (Name, Number)",
'''
content = insert_after(content, 'en', 'tab_add_single: "Add Single Student",', en_add)

with open('translations.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated translations.js with teacher keys')

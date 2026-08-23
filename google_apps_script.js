// نسخة محمية: تشفير كلمات المرور، نظام التحقق (Tokens)، وإدارة المدارس ونظام إشعارات ودعوات المعلمين

// دالة توحيد وتنظيف أرقام الهواتف والبريد الإلكتروني
function normalizeContact(str) {
  if (!str) return "";
  let s = String(str).trim().toLowerCase();
  
  // تحويل الأرقام العربية والفارسية (٠١٢٣٤٥٦٧٨٩) إلى أرقام إنجليزية
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  for (let i = 0; i < 10; i++) {
    s = s.split(arabicDigits[i]).join(String(i));
    s = s.split(persianDigits[i]).join(String(i));
  }
  
  // إذا كان المدخل رقم هاتف: تنظيف الرموز والمسافات وإزالة الصفر أو رمز الدولة 964 لتوحيد المقارنة
  let digitsOnly = s.replace(/\D/g, '');
  if (digitsOnly.length >= 7) {
    if (digitsOnly.startsWith('964')) {
      digitsOnly = digitsOnly.substring(3);
    }
    if (digitsOnly.startsWith('0')) {
      digitsOnly = digitsOnly.substring(1);
    }
    return digitsOnly;
  }
  
  return s;
}

// --- دوال الحماية والتشفير ---
function hashPassword(password) {
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(password || ""));
  let hashStr = '';
  for (let i = 0; i < digest.length; i++) {
    let byteStr = (digest[i] < 0 ? digest[i] + 256 : digest[i]).toString(16);
    if (byteStr.length == 1) byteStr = '0' + byteStr;
    hashStr += byteStr;
  }
  return hashStr;
}

// التحقق من صحة الجلسة والتوكن
function verifyToken(contact, token) {
  if (!token) return false;
  const sheet = getOrCreateSheet("Users");
  const values = sheet.getDataRange().getValues();
  const normUserContact = normalizeContact(contact);
  const cleanToken = String(token).trim();

  for (let i = 1; i < values.length; i++) {
    const rowToken = String(values[i][7] || "").trim();
    if (rowToken === cleanToken) {
      if (!contact || normalizeContact(values[i][3]) === normUserContact || String(values[i][3]).trim().toLowerCase() === String(contact).trim().toLowerCase()) {
        return true; // Session verified
      }
    }
  }
  return false;
}

function doPost(e) {
  let response = { success: false, message: "Unknown action" };
  
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    const authContact = data.contact || data.adminContact || "";
    const authToken = data.token;
    
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    
    try {
      if (action === "register") {
        response = registerUser(data);
      } else if (action === "login") {
        response = loginUser(data);
      } else if (action === "getStudents") {
        if (verifyToken(authContact, authToken)) {
          response = getStudents(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "addStudent") {
        if (verifyToken(authContact, authToken)) {
          response = addStudent(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "searchTeachers") {
        if (verifyToken(authContact, authToken)) {
          response = searchTeachers(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "inviteTeacher") {
        if (verifyToken(authContact, authToken)) {
          response = inviteTeacher(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "unshareTeacher") {
        if (verifyToken(authContact, authToken)) {
          response = unshareTeacher(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "getSchoolTeachers") {
        if (verifyToken(authContact, authToken)) {
          response = getSchoolTeachers(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "getTeacherInvitations") {
        if (verifyToken(authContact, authToken)) {
          response = getTeacherInvitations(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "respondInvitation") {
        if (verifyToken(authContact, authToken)) {
          response = respondInvitation(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      }
    } finally {
      lock.releaseLock();
    }
    
  } catch (error) {
    response = { success: false, message: error.toString() };
  }
  
  return ContentService.createTextOutput(JSON.stringify(response))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doOptions(e) {
  return ContentService.createTextOutput("")
                       .setMimeType(ContentService.MimeType.TEXT);
}
function doGet(e) { return ContentService.createTextOutput("تطبيق الخادم يعمل بنجاح!"); }

// ---------------------------------

function getOrCreateSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (sheetName === "Users") {
      sheet.appendRow(["ID", "FirstName", "LastName", "Contact", "Role", "PasswordHash", "CreatedAt", "Token", "SchoolName"]);
    } else if (sheetName === "Students") {
      sheet.appendRow(["ID", "OwnerContact", "StudentName", "Class", "Section", "ParentNumber", "CreatedAt", "SchoolName"]);
    } else if (sheetName === "SchoolTeachers") {
      sheet.appendRow(["ID", "AdminContact", "SchoolName", "TeacherContact", "TeacherName", "Status", "CreatedAt", "AdminName"]);
    }
  }
  return sheet;
}

function registerUser(data) {
  const sheet = getOrCreateSheet("Users");
  const values = sheet.getDataRange().getValues();
  const rawContact = String(data.contact || "").trim();
  const normInput = normalizeContact(rawContact);

  for (let i = 1; i < values.length; i++) {
    const rowContact = String(values[i][3] || "").trim();
    if (normalizeContact(rowContact) === normInput || rowContact.toLowerCase() === rawContact.toLowerCase()) {
      return { success: false, message: "رقم الهاتف أو البريد الإلكتروني مسجل بالفعل." };
    }
  }

  const token = Utilities.getUuid();
  const passwordHash = hashPassword(data.password);
  
  sheet.appendRow([
    Utilities.getUuid(),
    String(data.firstName || "").trim(),
    String(data.lastName || "").trim(),
    rawContact,
    data.role || "teacher",
    passwordHash,
    new Date(),
    token,
    String(data.schoolName || "").trim()
  ]);

  return {
    success: true,
    token: token,
    user: {
      firstName: data.firstName,
      lastName: data.lastName,
      contact: rawContact,
      role: data.role,
      schoolName: data.schoolName || "",
      token: token
    }
  };
}

function loginUser(data) {
  const sheet = getOrCreateSheet("Users");
  const values = sheet.getDataRange().getValues();
  const inputHash = hashPassword(data.password);
  const rawInput = String(data.contact || data.username || "").trim();
  const normInput = normalizeContact(rawInput);

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const rowContact = String(row[3] || "").trim();
    const rowFullName = (String(row[1] || "") + " " + String(row[2] || "")).trim();
    const rowFirstName = String(row[1] || "").trim();
    const rowStoredPassword = String(row[5] || "");

    // مطابقة مرنة: برقم الهاتف الموحد، أو البريد، أو الاسم الكامل، أو الاسم الأول
    const isContactMatch = (normInput && normalizeContact(rowContact) === normInput) || 
                           (rowContact.toLowerCase() === rawInput.toLowerCase()) ||
                           (rowFullName.toLowerCase() === rawInput.toLowerCase()) ||
                           (rowFirstName.toLowerCase() === rawInput.toLowerCase());

    if (isContactMatch) {
      // مطابقة كلمة المرور سواء كانت مشفرة SHA256 أو نص عادي قديم
      const isPasswordMatch = (rowStoredPassword === inputHash) || 
                              (rowStoredPassword === data.password) ||
                              (hashPassword(rowStoredPassword) === inputHash);

      if (isPasswordMatch) {
        const token = Utilities.getUuid();
        sheet.getRange(i + 1, 8).setValue(token);

        return {
          success: true,
          token: token,
          user: {
            id: row[0],
            firstName: row[1],
            lastName: row[2] || "",
            contact: row[3],
            role: row[4],
            schoolName: row[8] || "",
            token: token
          }
        };
      } else {
        return { success: false, message: "كلمة المرور غير صحيحة." };
      }
    }
  }

  return { success: false, message: "المستخدم غير موجود. تأكد من رقم الهاتف أو البريد الإلكتروني." };
}

function getStudents(data) {
  const usersSheet = getOrCreateSheet("Users");
  const userValues = usersSheet.getDataRange().getValues();
  const normUserContact = normalizeContact(data.contact);
  let userRole = "admin";

  for (let i = 1; i < userValues.length; i++) {
    if (normalizeContact(userValues[i][3]) === normUserContact) {
      userRole = userValues[i][4];
      break;
    }
  }

  const sheet = getOrCreateSheet("Students");
  const values = sheet.getDataRange().getValues();
  const students = [];

  // إذا كان مديراً: يجلب طلابه
  // إذا كان معلماً: يجلب طلاب المدارس التي قبل دعوتها فقط (accepted)
  let allowedContacts = [normUserContact];
  if (userRole === "teacher") {
    const stSheet = getOrCreateSheet("SchoolTeachers");
    const stValues = stSheet.getDataRange().getValues();
    for (let i = 1; i < stValues.length; i++) {
      if (normalizeContact(stValues[i][3]) === normUserContact && (stValues[i][5] == "accepted" || stValues[i][5] == "active")) {
        allowedContacts.push(normalizeContact(stValues[i][1])); // Admin Contact
      }
    }
  }
  
  for (let i = 1; i < values.length; i++) {
    const normOwnerContact = normalizeContact(values[i][1]);
    
    if (allowedContacts.indexOf(normOwnerContact) !== -1) {
      students.push({
        id: values[i][0], name: values[i][2], class: values[i][3],
        section: values[i][4], parentNumber: values[i][5]
      });
    }
  }
  return { success: true, students: students };
}

function addStudent(data) {
  const sheet = getOrCreateSheet("Students");
  sheet.appendRow([
    Utilities.getUuid(),
    String(data.contact || "").trim(),
    data.student.name,
    data.student.class,
    data.student.section,
    data.student.parentNumber,
    new Date(),
    data.schoolName || ""
  ]);
  return { success: true, message: "تم إضافة الطالب بنجاح." };
}

// --- ميزات البحث والدعوة للمعلمين والإشعارات ---

function searchTeachers(data) {
  const usersSheet = getOrCreateSheet("Users");
  const userValues = usersSheet.getDataRange().getValues();
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const stValues = stSheet.getDataRange().getValues();
  const normAdminContact = normalizeContact(data.contact);

  // المعلمون وحالات دعوتهم لدى هذا المدير
  const teacherStatusMap = {};
  for (let i = 1; i < stValues.length; i++) {
    if (normalizeContact(stValues[i][1]) === normAdminContact) {
      teacherStatusMap[normalizeContact(stValues[i][3])] = stValues[i][5]; // 'pending', 'accepted', 'rejected'
    }
  }

  const query = (data.query || "").toLowerCase().trim();
  const normQuery = normalizeContact(query);
  const teachers = [];

  for (let i = 1; i < userValues.length; i++) {
    const row = userValues[i];
    const role = row[4];
    if (role === "teacher") {
      const fullName = (row[1] + " " + (row[2] || "")).trim();
      const contact = String(row[3] || "").trim();
      const schoolName = String(row[8] || "").trim();
      const normTeacherContact = normalizeContact(contact);

      const matches = !query || 
                      fullName.toLowerCase().indexOf(query) !== -1 || 
                      contact.toLowerCase().indexOf(query) !== -1 ||
                      (normQuery && normTeacherContact.indexOf(normQuery) !== -1) ||
                      schoolName.toLowerCase().indexOf(query) !== -1;

      if (matches) {
        const status = teacherStatusMap[normTeacherContact] || "none";
        teachers.push({
          id: row[0],
          name: fullName,
          contact: contact,
          schoolName: schoolName,
          status: status, // 'none', 'pending', 'accepted', 'rejected'
          isJoined: status === "accepted" || status === "active"
        });
      }
    }
  }

  return { success: true, teachers: teachers };
}

function inviteTeacher(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const normAdminContact = normalizeContact(data.adminContact);
  const normTeacherContact = normalizeContact(data.teacherContact);

  // فحص إذا كان الربط موجوداً مسبقاً
  for (let i = 1; i < values.length; i++) {
    if (normalizeContact(values[i][1]) === normAdminContact && normalizeContact(values[i][3]) === normTeacherContact) {
      stSheet.getRange(i + 1, 6).setValue("pending");
      stSheet.getRange(i + 1, 3).setValue(data.schoolName || "");
      stSheet.getRange(i + 1, 8).setValue(data.adminName || "");
      return { success: true, message: "تم إرسال دعوة جديدة للمعلم بنجاح وبانتظار موافقته." };
    }
  }

  stSheet.appendRow([
    Utilities.getUuid(),
    String(data.adminContact || "").trim(),
    String(data.schoolName || "").trim(),
    String(data.teacherContact || "").trim(),
    String(data.teacherName || "").trim(),
    "pending",
    new Date(),
    String(data.adminName || "").trim()
  ]);

  return { success: true, message: "تم إرسال الدعوة للمعلم بنجاح. سيظهر له إشعار للموافقة عند تسجيل دخوله." };
}

function unshareTeacher(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const normAdminContact = normalizeContact(data.adminContact);
  const normTeacherContact = normalizeContact(data.teacherContact);

  for (let i = 1; i < values.length; i++) {
    if (normalizeContact(values[i][1]) === normAdminContact && normalizeContact(values[i][3]) === normTeacherContact) {
      stSheet.getRange(i + 1, 6).setValue("rejected");
      return { success: true, message: "تم إلغاء مشاركة بيانات الطلاب مع المعلم." };
    }
  }

  return { success: false, message: "المعلم غير موجود في قائمة المشاركة." };
}

function getSchoolTeachers(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const normContact = normalizeContact(data.contact);
  const teachers = [];

  for (let i = 1; i < values.length; i++) {
    if (normalizeContact(values[i][1]) === normContact && (values[i][5] == "accepted" || values[i][5] == "active" || values[i][5] == "pending")) {
      teachers.push({
        id: values[i][0],
        adminContact: values[i][1],
        schoolName: values[i][2],
        contact: values[i][3],
        name: values[i][4],
        status: values[i][5]
      });
    }
  }

  return { success: true, teachers: teachers };
}

// جلب الدعوات المعلقة الخاصة بالمعلم
function getTeacherInvitations(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const normTeacherContact = normalizeContact(data.contact);
  const invitations = [];

  for (let i = 1; i < values.length; i++) {
    if (normalizeContact(values[i][3]) === normTeacherContact && values[i][5] == "pending") {
      invitations.push({
        id: values[i][0],
        adminContact: values[i][1],
        schoolName: values[i][2],
        teacherContact: values[i][3],
        teacherName: values[i][4],
        status: values[i][5],
        date: values[i][6],
        adminName: values[i][7] || "مدير المدرسة"
      });
    }
  }

  return { success: true, invitations: invitations };
}

// رد المعلم على الدعوة (قبول أو رفض)
function respondInvitation(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const isAccept = data.response === "accept";
  const newStatus = isAccept ? "accepted" : "rejected";

  const normTeacherContact = normalizeContact(data.contact);

  for (let i = 1; i < values.length; i++) {
    if (values[i][0] == data.invitationId && (normalizeContact(values[i][3]) === normTeacherContact || values[i][3] == data.contact)) {
      stSheet.getRange(i + 1, 6).setValue(newStatus);
      
      if (isAccept) {
        return { 
          success: true, 
          status: "accepted", 
          schoolName: values[i][2],
          message: "تم قبول الدعوة بنجاح! تم تفعيل مشاركة بيانات طلاب المدرسة معكم." 
        };
      } else {
        return { 
          success: true, 
          status: "rejected", 
          message: "تم رفض الدعوة." 
        };
      }
    }
  }

  return { success: false, message: "لم يتم العثور على الدعوة المحددة." };
}


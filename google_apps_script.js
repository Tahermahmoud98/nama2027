// نسخة محمية: تشفير كلمات المرور، نظام التحقق (Tokens)، وإدارة المدارس ونظام إشعارات ودعوات المعلمين

function doPost(e) {
  let response = { success: false, message: "Unknown action" };
  
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    
    try {
      if (action === "register") {
        response = registerUser(data);
      } else if (action === "login") {
        response = loginUser(data);
      } else if (action === "getStudents") {
        if (verifyToken(data.contact, data.token)) {
          response = getStudents(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "addStudent") {
        if (verifyToken(data.contact, data.token)) {
          response = addStudent(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "searchTeachers") {
        if (verifyToken(data.contact, data.token)) {
          response = searchTeachers(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "inviteTeacher") {
        if (verifyToken(data.contact, data.token)) {
          response = inviteTeacher(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "unshareTeacher") {
        if (verifyToken(data.contact, data.token)) {
          response = unshareTeacher(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "getSchoolTeachers") {
        if (verifyToken(data.contact, data.token)) {
          response = getSchoolTeachers(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "getTeacherInvitations") {
        if (verifyToken(data.contact, data.token)) {
          response = getTeacherInvitations(data);
        } else {
          response = { success: false, message: "صلاحية غير صالحة. يرجى تسجيل الدخول مجدداً." };
        }
      } else if (action === "respondInvitation") {
        if (verifyToken(data.contact, data.token)) {
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

// --- دوال الحماية والتشفير ---
function hashPassword(password) {
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
  let hashStr = '';
  for (let i = 0; i < digest.length; i++) {
    let byteStr = (digest[i] < 0 ? digest[i] + 256 : digest[i]).toString(16);
    if (byteStr.length == 1) byteStr = '0' + byteStr;
    hashStr += byteStr;
  }
  return hashStr;
}

// التحقق من صحة الجلسة باستخدام التوكن
function verifyToken(contact, token) {
  if (!contact || !token) return false;
  const sheet = getOrCreateSheet("Users");
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (values[i][3] == contact && values[i][7] == token) {
      return true; // Token matches
    }
  }
  return false;
}

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

  for (let i = 1; i < values.length; i++) {
    if (values[i][3] == data.contact) {
      return { success: false, message: "رقم الهاتف أو البريد الإلكتروني مسجل بالفعل." };
    }
  }

  const token = Utilities.getUuid();
  const passwordHash = hashPassword(data.password);
  
  sheet.appendRow([
    Utilities.getUuid(),
    data.firstName,
    data.lastName,
    data.contact,
    data.role,
    passwordHash,
    new Date(),
    token,
    data.schoolName || ""
  ]);

  return {
    success: true,
    user: {
      firstName: data.firstName,
      lastName: data.lastName,
      contact: data.contact,
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

  for (let i = 1; i < values.length; i++) {
    if (values[i][3] == data.username) {
      if (values[i][5] == inputHash) {
        const token = Utilities.getUuid();
        sheet.getRange(i + 1, 8).setValue(token);

        return {
          success: true,
          user: {
            firstName: values[i][1],
            lastName: values[i][2],
            contact: values[i][3],
            role: values[i][4],
            schoolName: values[i][8] || "",
            token: token
          }
        };
      } else {
        return { success: false, message: "كلمة المرور غير صحيحة." };
      }
    }
  }

  return { success: false, message: "المستخدم غير موجود." };
}

function getStudents(data) {
  const usersSheet = getOrCreateSheet("Users");
  const userValues = usersSheet.getDataRange().getValues();
  let userRole = "admin";

  for (let i = 1; i < userValues.length; i++) {
    if (userValues[i][3] == data.contact) {
      userRole = userValues[i][4];
      break;
    }
  }

  const sheet = getOrCreateSheet("Students");
  const values = sheet.getDataRange().getValues();
  const students = [];

  // إذا كان مديراً: يجلب طلابه
  // إذا كان معلماً: يجلب طلاب المدارس التي قبل دعوتها فقط (accepted)
  let allowedContacts = [data.contact];
  if (userRole === "teacher") {
    const stSheet = getOrCreateSheet("SchoolTeachers");
    const stValues = stSheet.getDataRange().getValues();
    for (let i = 1; i < stValues.length; i++) {
      if (stValues[i][3] == data.contact && (stValues[i][5] == "accepted" || stValues[i][5] == "active")) {
        allowedContacts.push(stValues[i][1]); // Admin Contact
      }
    }
  }
  
  for (let i = 1; i < values.length; i++) {
    const ownerContact = values[i][1];
    
    if (allowedContacts.indexOf(ownerContact) !== -1) {
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
    data.contact,
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

  // المعلمون وحالات دعوتهم لدى هذا المدير
  const teacherStatusMap = {};
  for (let i = 1; i < stValues.length; i++) {
    if (stValues[i][1] == data.contact) {
      teacherStatusMap[stValues[i][3]] = stValues[i][5]; // 'pending', 'accepted', 'rejected'
    }
  }

  const query = (data.query || "").toLowerCase().trim();
  const teachers = [];

  for (let i = 1; i < userValues.length; i++) {
    const row = userValues[i];
    const role = row[4];
    if (role === "teacher") {
      const fullName = (row[1] + " " + (row[2] || "")).trim();
      const contact = String(row[3] || "");
      const schoolName = String(row[8] || "");

      const matches = !query || 
                      fullName.toLowerCase().indexOf(query) !== -1 || 
                      contact.toLowerCase().indexOf(query) !== -1 ||
                      schoolName.toLowerCase().indexOf(query) !== -1;

      if (matches) {
        const status = teacherStatusMap[contact] || "none";
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

  // فحص إذا كان الربط موجوداً مسبقاً
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] == data.adminContact && values[i][3] == data.teacherContact) {
      stSheet.getRange(i + 1, 6).setValue("pending");
      stSheet.getRange(i + 1, 3).setValue(data.schoolName || "");
      stSheet.getRange(i + 1, 8).setValue(data.adminName || "");
      return { success: true, message: "تم إرسال دعوة جديدة للمعلم بنجاح وبانتظار موافقته." };
    }
  }

  stSheet.appendRow([
    Utilities.getUuid(),
    data.adminContact,
    data.schoolName || "",
    data.teacherContact,
    data.teacherName || "",
    "pending",
    new Date(),
    data.adminName || ""
  ]);

  return { success: true, message: "تم إرسال الدعوة للمعلم بنجاح. سيظهر له إشعار للموافقة عند تسجيل دخوله." };
}

function unshareTeacher(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();

  for (let i = 1; i < values.length; i++) {
    if (values[i][1] == data.adminContact && values[i][3] == data.teacherContact) {
      stSheet.getRange(i + 1, 6).setValue("rejected");
      return { success: true, message: "تم إلغاء مشاركة بيانات الطلاب مع المعلم." };
    }
  }

  return { success: false, message: "المعلم غير موجود في قائمة المشاركة." };
}

function getSchoolTeachers(data) {
  const stSheet = getOrCreateSheet("SchoolTeachers");
  const values = stSheet.getDataRange().getValues();
  const teachers = [];

  for (let i = 1; i < values.length; i++) {
    if (values[i][1] == data.contact && (values[i][5] == "accepted" || values[i][5] == "active" || values[i][5] == "pending")) {
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
  const invitations = [];

  for (let i = 1; i < values.length; i++) {
    if (values[i][3] == data.contact && values[i][5] == "pending") {
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

  for (let i = 1; i < values.length; i++) {
    if (values[i][0] == data.invitationId && values[i][3] == data.contact) {
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


document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // --- State Variables ---
    let currentLang = localStorage.getItem('nama_currentLang') || 'ku';
    let currentMode = 'students'; // 'students' or 'teachers'
    let appStudents = [];
    let appTeachers = [];
    let isBulkMode = false;
    let selectedBulkStudents = [];
    let queueIndex = 0;

    // --- DOM Elements - Main ---
    const studentNameInput = document.getElementById('studentName');
    const studentClassInput = document.getElementById('studentClass');
    const studentSectionInput = document.getElementById('studentSection');
    const parentNumberInput = document.getElementById('parentNumber');
    const eventDateInput = document.getElementById('eventDate');
    const eventTimeInput = document.getElementById('eventTime');
    const studentReasonsGrid = document.getElementById('studentReasonsGrid');
    const teacherReasonsGrid = document.getElementById('teacherReasonsGrid');
    const reasonRadios = document.querySelectorAll('input[name="reason"]');
    const teacherReasonRadios = document.querySelectorAll('input[name="teacher_reason"]');
    
    // --- Mode Switcher ---
    const modeSwitcherContainer = document.getElementById('modeSwitcherContainer');
    const modeStudentsBtn = document.getElementById('modeStudentsBtn');
    const modeTeachersBtn = document.getElementById('modeTeachersBtn');
    
    const messagePreview = document.getElementById('messagePreview');
    const previewTime = document.getElementById('previewTime');
    const sendBtn = document.getElementById('sendBtn');
    const langSelect = document.getElementById('langSelect');
    const authLangSelect = document.getElementById('authLangSelect');
    const studentsListDatalist = document.getElementById('studentsList');

    // --- Auth DOM Elements ---
    const authContainer = document.getElementById('authContainer');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const mainAppContainer = document.getElementById('mainAppContainer');
    const showRegisterLink = document.getElementById('showRegisterLink');
    const showLoginLink = document.getElementById('showLoginLink');
    
    // Login Elements
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    
    // Register Elements
    const regFirstName = document.getElementById('regFirstName');
    const regLastName = document.getElementById('regLastName');
    const regSchoolName = document.getElementById('regSchoolName');
    const regContact = document.getElementById('regContact');
    const regRole = document.getElementById('regRole');
    const regPassword = document.getElementById('regPassword');
    const regConfirmPassword = document.getElementById('regConfirmPassword');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // School Badge & Teacher Search DOM Elements
    const userSchoolBadge = document.getElementById('userSchoolBadge');
    const displaySchoolName = document.getElementById('displaySchoolName');
    const displayUserRole = document.getElementById('displayUserRole');
    const searchTeachersBtn = document.getElementById('searchTeachersBtn');

    const searchTeachersModal = document.getElementById('searchTeachersModal');
    const closeSearchTeachersModal = document.getElementById('closeSearchTeachersModal');
    const modalCurrentSchoolName = document.getElementById('modalCurrentSchoolName');
    const tabSearchTeachers = document.getElementById('tabSearchTeachers');
    const tabMySchoolTeachers = document.getElementById('tabMySchoolTeachers');
    const panelSearchTeachers = document.getElementById('panelSearchTeachers');
    const panelMySchoolTeachers = document.getElementById('panelMySchoolTeachers');
    const searchTeacherInput = document.getElementById('searchTeacherInput');
    const teachersSearchResults = document.getElementById('teachersSearchResults');
    const mySchoolTeachersList = document.getElementById('mySchoolTeachersList');

    // --- Current User State ---
    let currentUser = null;
    let localSchoolTeachers = [];

    // --- DOM Elements - Modals & Buttons ---
    const manageStudentsBtn = document.getElementById('manageStudentsBtn');
    const bulkSelectBtn = document.getElementById('bulkSelectBtn');
    const cancelBulkBtn = document.getElementById('cancelBulkBtn');
    
    const manageStudentsModal = document.getElementById('manageStudentsModal');
    const closeManageModal = document.getElementById('closeManageModal');
    const tabAddSingle = document.getElementById('tabAddSingle');
    const tabAddBulk = document.getElementById('tabAddBulk');
    const panelAddSingle = document.getElementById('panelAddSingle');
    const panelAddBulk = document.getElementById('panelAddBulk');
    const saveSingleStudentBtn = document.getElementById('saveSingleStudentBtn');
    const saveBulkStudentsBtn = document.getElementById('saveBulkStudentsBtn');
    const studentsTableBody = document.getElementById('studentsTableBody');

    const bulkSelectModal = document.getElementById('bulkSelectModal');
    const closeBulkModal = document.getElementById('closeBulkModal');
    const searchBulk = document.getElementById('searchBulk');
    const bulkListContainer = document.getElementById('bulkListContainer');
    const confirmBulkBtn = document.getElementById('confirmBulkBtn');
    const selectedCountMsg = document.getElementById('selectedCountMsg');

    const reasonModal = document.getElementById('reasonModal');
    const closeReasonModal = document.getElementById('closeReasonModal');
    const openReasonModalBtn = document.getElementById('openReasonModalBtn');
    const selectedReasonDisplay = document.getElementById('selectedReasonDisplay');

    const queueModal = document.getElementById('queueModal');
    const queueProgressText = document.getElementById('queueProgressText');
    const queueProgressBar = document.getElementById('queueProgressBar');
    const queueStudentName = document.getElementById('queueStudentName');
    const queueSendBtn = document.getElementById('queueSendBtn');
    const queueNextBtn = document.getElementById('queueNextBtn');
    const queueCancelBtn = document.getElementById('queueCancelBtn');

    // --- DOM Elements - Custom Dialog ---
    const customDialogOkBtn = document.getElementById('customDialogOkBtn');

    // --- Auth Logic ---
    
    // Check if user is logged in
    const checkAuth = () => {
        const storedUser = localStorage.getItem('nama_currentUser');
        if (storedUser) {
            try {
                // Decode obfuscated token
                currentUser = decodeData(storedUser);
                authContainer.style.display = 'none';
                mainAppContainer.style.display = 'block';
                applyRolePermissions();
            } catch (e) {
                // Data was tampered with or old format
                localStorage.removeItem('nama_currentUser');
                authContainer.style.display = 'block';
                mainAppContainer.style.display = 'none';
            }
        } else {
            authContainer.style.display = 'block';
            mainAppContainer.style.display = 'none';
        }
    };

    // --- Security Helpers ---
    const sanitizeHtml = (str) => {
        return String(str).replace(/[&<>"'`=\/]/g, function (s) {
            return {
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
                '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
            }[s];
        });
    };

    const encodeData = (data) => btoa(encodeURIComponent(JSON.stringify(data)));
    const decodeData = (str) => JSON.parse(decodeURIComponent(atob(str)));

    // --- API Configuration ---
    // ضع رابط تطبيق الويب الخاص بـ Google Apps Script هنا
    const API_URL = "https://script.google.com/macros/s/AKfycbw1uj5IdZU60JGMbWpH_8Giy0uay8oA9OZq7ECWkG4p-fgi4EuA9Ud_v12IbkZB_eXxhg/exec"; 

    // --- Loading State Helper ---
    const setLoading = (btn, isLoading, originalText = '') => {
        if (isLoading) {
            btn.disabled = true;
            btn.dataset.originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التحميل...';
        } else {
            btn.disabled = false;
            if (btn.dataset.originalText) {
                btn.innerHTML = btn.dataset.originalText;
            } else if (originalText) {
                btn.innerHTML = originalText;
            }
        }
    };

    // --- API Functions ---
    const callApi = async (action, payload) => {
        if (!API_URL) {
            throw new Error('لم يتم إضافة رابط API. يرجى إضافة الرابط في بداية ملف script.js أولاً.');
        }
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({ action, ...payload })
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw new Error('حدث خطأ أثناء الاتصال بالسيرفر. تأكد من اتصالك بالإنترنت ورابط الـ API.');
        }
    };

    const applyRolePermissions = async () => {
        if (!currentUser) return;
        
        // Update School Badge & User Info in Header
        if (userSchoolBadge && displaySchoolName) {
            userSchoolBadge.style.display = 'flex';
            displaySchoolName.textContent = currentUser.schoolName || (currentLang === 'ckb' ? 'قوتابخانە' : (currentLang === 'ku' ? 'قوتابخانە' : (currentLang === 'en' ? 'School' : 'المدرسة')));
            let roleTitle = currentUser.role === 'admin' ? 
                (currentLang === 'ckb' ? 'بەڕێوەبەر' : (currentLang === 'ku' ? 'رێڤەبەر' : (currentLang === 'en' ? 'Principal' : 'مدير'))) :
                (currentLang === 'ckb' ? 'مامۆستا' : (currentLang === 'ku' ? 'مامۆستا' : (currentLang === 'en' ? 'Teacher' : 'معلم')));
            displayUserRole.textContent = roleTitle;
        }

        if (currentUser.role === 'admin') {
            modeSwitcherContainer.style.display = 'flex';
            if (searchTeachersBtn) searchTeachersBtn.style.display = 'inline-flex';
            if (modalCurrentSchoolName) modalCurrentSchoolName.textContent = currentUser.schoolName || '...';
        } else if (currentUser.role === 'teacher') {
            if (searchTeachersBtn) searchTeachersBtn.style.display = 'none';
            modeSwitcherContainer.style.display = 'none';
            currentMode = 'students';
            modeStudentsBtn.classList.add('active');
            modeTeachersBtn.classList.remove('active');
            modeStudentsBtn.style.background = 'var(--accent-color)';
            modeStudentsBtn.style.color = 'white';
            modeTeachersBtn.style.background = 'transparent';
            modeTeachersBtn.style.color = 'var(--text-secondary)';
            studentReasonsGrid.style.display = 'grid';
            teacherReasonsGrid.style.display = 'none';
            
            document.getElementById('lblStudentName').setAttribute('data-i18n', 'lbl_student_name');
            studentNameInput.setAttribute('data-i18n-ph', 'ph_student_name');
            document.getElementById('lblParentNumber').setAttribute('data-i18n', 'lbl_parent_number');
            parentNumberInput.setAttribute('data-i18n-ph', 'ph_parent_number');
            document.getElementById('classSectionGroup').style.display = 'grid';
            
            if (typeof applyTranslations === 'function') setTimeout(applyTranslations, 100);
            if (typeof updatePreview === 'function') setTimeout(updatePreview, 100);
        }

        // Fetch students for this user from Google Sheets
        if (API_URL) {
            try {
                // تمرير التوکن للحماية
                const res = await callApi('getStudents', { 
                    contact: currentUser.contact,
                    token: currentUser.token 
                });
                if (res.success && res.students) {
                    appStudents = res.students;
                    refreshDatalist();
                    renderStudentsTable();
                } else if (res.message && res.message.includes('غير صالحة')) {
                    // Token expired or invalid
                    localStorage.removeItem('nama_currentUser');
                    checkAuth();
                    showDialog('انتهت الجلسة لأسباب أمنية. يرجى تسجيل الدخول مجدداً.');
                }
            } catch (err) {
                console.error('Failed to load students:', err);
            }
        }
    };

    // Show Register / Login
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle Register
    registerSubmitBtn.addEventListener('click', async () => {
        if (!API_URL) {
            showDialog('عذراً، يجب إعداد رابط Google Apps Script أولاً في الكود.');
            return;
        }

        const firstName = sanitizeHtml(regFirstName.value.trim());
        const lastName = sanitizeHtml(regLastName.value.trim());
        const schoolName = sanitizeHtml(regSchoolName ? regSchoolName.value.trim() : '');
        const contact = sanitizeHtml(regContact.value.trim());
        const role = regRole.value;
        const password = sanitizeHtml(regPassword.value);
        const confirmPassword = sanitizeHtml(regConfirmPassword.value);

        if (!firstName || !lastName || !schoolName || !contact || !password) {
            let msg = 'يرجى تعبئة جميع الحقول المطلوبة بما في ذلك اسم المدرسة.';
            if (currentLang === 'ckb') msg = 'تکایە هەموو خانە پێویستەکان پڕبکەرەوە لەوانەش ناوی قوتابخانە.';
            else if (currentLang === 'ku') msg = 'هیڤیدارین هەمی خانەیێن پێدڤی پر بکەی دگەل ناڤێ قوتابخانێ.';
            else if (currentLang === 'en') msg = 'Please fill in all required fields including school name.';
            showDialog(msg);
            return;
        }

        if (password !== confirmPassword) {
            let msg = 'كلمة المرور غير متطابقة.';
            if (currentLang === 'ckb') msg = 'وشەی نهێنی (تێپەڕوشە) وەک یەک نییە.';
            else if (currentLang === 'ku') msg = 'پەیڤێن دەربازبوونێ وەک ئێک نینن.';
            else if (currentLang === 'en') msg = 'Passwords do not match.';
            showDialog(msg);
            return;
        }

        setLoading(registerSubmitBtn, true);
        try {
            const res = await callApi('register', { firstName, lastName, schoolName, contact, role, password });
            
            if (res.success) {
                let successMsg = 'تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.';
                if (currentLang === 'ckb') successMsg = 'هەژمار بە سەرکەوتوویی دروستکرا! ئێستا دەتوانیت بچیتە ژوورەوە.';
                else if (currentLang === 'ku') successMsg = 'هەژمار ب سەرکەفتی هاتە دروستکرن! نوکە دشێی بچیە ژوور.';
                else if (currentLang === 'en') successMsg = 'Account created successfully! You can now sign in.';
                showDialog(successMsg);
                registerForm.style.display = 'none';
                loginForm.style.display = 'block';
                regFirstName.value = ''; regLastName.value = ''; regContact.value = '';
                if (regSchoolName) regSchoolName.value = '';
                regPassword.value = ''; regConfirmPassword.value = '';
            } else {
                showDialog(res.message || 'حدث خطأ أثناء التسجيل.');
            }
        } catch (err) {
            showDialog(err.message);
        } finally {
            setLoading(registerSubmitBtn, false, 'إنشاء الحساب');
        }
    });

    // Handle Login
    loginSubmitBtn.addEventListener('click', async () => {
        if (!API_URL) {
            showDialog('عذراً، يجب إعداد رابط Google Apps Script أولاً في الكود.');
            return;
        }

        const contact = sanitizeHtml(loginUsername.value.trim());
        const password = sanitizeHtml(loginPassword.value);
        
        if (!contact || !password) {
            showDialog('يرجى إدخال اسم المستخدم وكلمة المرور.');
            return;
        }

        setLoading(loginSubmitBtn, true);
        try {
            const res = await callApi('login', { contact, password });
            if (res.success) {
                currentUser = res.user;
                currentUser.token = res.token; // Save the secure session token
                // Obfuscate localstorage data
                localStorage.setItem('nama_currentUser', encodeData(currentUser));
                loginUsername.value = ''; loginPassword.value = '';
                checkAuth();
            } else {
                showDialog(res.message || 'بيانات الدخول غير صحيحة.');
            }
        } catch (err) {
            showDialog(err.message);
        } finally {
            setLoading(loginSubmitBtn, false, 'تسجيل الدخول');
        }
    });

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('nama_currentUser');
            currentUser = null;
            checkAuth();
        });
    }

    // Call checkAuth on init
    checkAuth();

    const customDialogTitleText = document.getElementById('customDialogTitleText');
    const customDialogMessage = document.getElementById('customDialogMessage');
    const customDialogConfirmBtn = document.getElementById('customDialogConfirmBtn');
    const customDialogCancelBtn = document.getElementById('customDialogCancelBtn');
    
    let dialogConfirmCallback = null;
    let dialogCancelCallback = null;

    const showDialog = (message, isConfirm = false, onConfirm = null, onCancel = null) => {
        customDialogMessage.textContent = message;
        if (isConfirm) {
            customDialogCancelBtn.style.display = 'inline-block';
            customDialogTitleText.textContent = currentLang === 'ckb' ? 'پشتڕاستکردنەوە' : (currentLang === 'ku' ? 'پشتڕاستکرن' : (currentLang === 'en' ? 'Confirm' : 'تأكيد'));
        } else {
            customDialogCancelBtn.style.display = 'none';
            customDialogTitleText.textContent = currentLang === 'ckb' ? 'ئاگاداری' : (currentLang === 'ku' ? 'ئاگەهداری' : (currentLang === 'en' ? 'Alert' : 'تنبيه'));
        }
        
        dialogConfirmCallback = onConfirm;
        dialogCancelCallback = onCancel;
        
        customDialogModal.style.display = 'block';
    };

    const closeDialog = () => {
        customDialogModal.style.display = 'none';
        dialogConfirmCallback = null;
        dialogCancelCallback = null;
    };

    customDialogConfirmBtn.addEventListener('click', () => {
        const cb = dialogConfirmCallback;
        closeDialog();
        if (cb) cb();
    });

    customDialogCancelBtn.addEventListener('click', () => {
        const cb = dialogCancelCallback;
        closeDialog();
        if (cb) cb();
    });

    // --- Initializations ---
    const now = new Date();
    eventDateInput.value = now.toISOString().split('T')[0];
    eventTimeInput.value = now.toTimeString().split(' ')[0].substring(0, 5);
    previewTime.textContent = now.toTimeString().split(' ')[0].substring(0, 5);

    // --- Database Functions ---
    // Initialize Data
    const initData = () => {
        // Only load static initial data if API_URL is NOT set yet (for testing purposes)
        // Once connected to Google Sheets, appStudents is loaded in applyRolePermissions
        if (!API_URL && typeof studentsDatabase !== 'undefined') {
            appStudents = [...studentsDatabase];
        }
    };

    const saveDatabase = () => {
        if (currentMode === 'students') {
            localStorage.setItem('appStudents', JSON.stringify(appStudents));
        } else {
            localStorage.setItem('appTeachers', JSON.stringify(appTeachers));
        }
        refreshDatalist();
        renderStudentsTable();
    };

    const refreshDatalist = () => {
        studentsListDatalist.innerHTML = '';
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        currentData.forEach(person => {
            const option = document.createElement('option');
            option.value = person.name;
            studentsListDatalist.appendChild(option);
        });
    };

    // --- Manage Students Logic ---
    const openManageModal = () => manageStudentsModal.style.display = 'block';
    const closeManageModalFn = () => manageStudentsModal.style.display = 'none';

    tabAddSingle.addEventListener('click', () => {
        tabAddSingle.classList.add('active');
        tabAddBulk.classList.remove('active');
        panelAddSingle.style.display = 'block';
        panelAddBulk.style.display = 'none';
    });

    tabAddBulk.addEventListener('click', () => {
        tabAddBulk.classList.add('active');
        tabAddSingle.classList.remove('active');
        panelAddBulk.style.display = 'block';
        panelAddSingle.style.display = 'none';
    });

    saveSingleStudentBtn.addEventListener('click', async () => {
        const name = sanitizeHtml(document.getElementById('newStudentName').value.trim());
        const cls = sanitizeHtml(document.getElementById('newStudentClass').value.trim());
        const sec = sanitizeHtml(document.getElementById('newStudentSection').value.trim());
        const num = sanitizeHtml(document.getElementById('newStudentNumber').value.trim());

        if(!name || !num) return showDialog('يجب إدخال الاسم ورقم الهاتف على الأقل.');

        const newStudent = { name, class: cls, section: sec, parentNumber: num };

        if (API_URL && currentUser && currentMode === 'students') {
            setLoading(saveSingleStudentBtn, true);
            try {
                const res = await callApi('addStudent', { 
                    contact: currentUser.contact,
                    token: currentUser.token,
                    student: newStudent 
                });
                if (res.success) {
                    appStudents.push(newStudent);
                    refreshDatalist();
                    renderStudentsTable();
                    closeModal(manageStudentsModal);
                    
                    document.getElementById('newStudentName').value = '';
                    document.getElementById('newStudentClass').value = '';
                    document.getElementById('newStudentSection').value = '';
                    document.getElementById('newStudentNumber').value = '';
                    showDialog('تم حفظ الطالب بنجاح في قاعدة البيانات.');
                } else {
                    showDialog(res.message || 'حدث خطأ أثناء حفظ الطالب');
                    if (res.message && res.message.includes('غير صالحة')) {
                        localStorage.removeItem('nama_currentUser');
                        checkAuth();
                    }
                }
            } catch (err) {
                showDialog(err.message);
            } finally {
                setLoading(saveSingleStudentBtn, false, '<i class="fa-solid fa-save"></i> <span data-i18n="btn_save">حفظ</span>');
            }
        } else {
            // Local fallback or Teachers
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            currentData.push(newStudent);
            saveDatabase();
            
            document.getElementById('newStudentName').value = '';
            document.getElementById('newStudentClass').value = '';
            document.getElementById('newStudentSection').value = '';
            document.getElementById('newStudentNumber').value = '';
        }
    });

    // --- Modal Logic ---
    if (openReasonModalBtn) {
        openReasonModalBtn.addEventListener('click', () => {
            if (reasonModal.style.display === 'block') {
                reasonModal.style.display = 'none';
            } else {
                reasonModal.style.display = 'block';
            }
        });
    }

    if (closeReasonModal) {
        closeReasonModal.addEventListener('click', () => {
            reasonModal.style.display = 'none';
        });
    }

    saveBulkStudentsBtn.addEventListener('click', () => {
        const text = document.getElementById('bulkExcelData').value.trim();
        const defaultClass = document.getElementById('bulkDefaultClass').value.trim();
        const defaultSection = document.getElementById('bulkDefaultSection').value.trim();

        if(!text) return;

        const rows = text.split('\n');
        let addedCount = 0;

        rows.forEach(row => {
            const cols = row.split('\t'); // Excel copy uses tabs
            if (cols.length >= 1) {
                const name = cols[0] ? cols[0].trim() : '';
                
                let cls = defaultClass;
                let sec = defaultSection;
                let num = '';

                if (cols.length >= 4) {
                    cls = cols[1] ? cols[1].trim() : defaultClass;
                    sec = cols[2] ? cols[2].trim() : defaultSection;
                    num = cols[3] ? cols[3].trim() : '';
                } else if (cols.length === 3) {
                    cls = cols[1] ? cols[1].trim() : defaultClass;
                    num = cols[2] ? cols[2].trim() : '';
                } else if (cols.length === 2) {
                    num = cols[1] ? cols[1].trim() : '';
                }

                if (name) {
                    const currentData = currentMode === 'students' ? appStudents : appTeachers;
                    currentData.push({ name, class: cls, section: sec, parentNumber: num });
                    addedCount++;
                }
            }
        });

        if (addedCount > 0) {
            saveDatabase();
            document.getElementById('bulkExcelData').value = '';
            showDialog(`تم إضافة ${addedCount} طلاب بنجاح!`);
        }
    });

    const renderStudentsTable = () => {
        studentsTableBody.innerHTML = '';
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        currentData.forEach((student, index) => {
            const tr = document.createElement('tr');
            tr.style.cursor = 'pointer';
            tr.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="student-row-checkbox" data-index="${index}"></td>
                <td>${student.name}</td>
                <td style="${currentMode === 'teachers' ? 'display:none;' : ''}">${student.class || '-'}</td>
                <td style="${currentMode === 'teachers' ? 'display:none;' : ''}">${student.section || '-'}</td>
                <td dir="ltr">${student.parentNumber}</td>
                <td><button onclick="window.deleteStudent(${index}); event.stopPropagation();"><i class="fa-solid fa-trash"></i></button></td>
            `;
            
            tr.addEventListener('click', (e) => {
                if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') return;
                if (e.target.closest('button')) return;

                const cb = tr.querySelector('.student-row-checkbox');
                cb.checked = !cb.checked;
                updateDeleteSelectedBtnVisibility();
            });

            studentsTableBody.appendChild(tr);
        });

        document.querySelectorAll('.student-row-checkbox').forEach(cb => {
            cb.addEventListener('change', updateDeleteSelectedBtnVisibility);
        });
        
        const selectAllCb = document.getElementById('selectAllTableCheckbox');
        if (selectAllCb) selectAllCb.checked = false;
        
        updateDeleteSelectedBtnVisibility();
    };

    window.deleteStudent = (index) => {
        const msg = translations[currentLang].msg_confirm_delete_single || 'هل أنت متأكد من حذف هذا الطالب؟';
        showDialog(msg, true, () => {
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            currentData.splice(index, 1);
            saveDatabase();
        });
    };

    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
    const selectAllTableCheckbox = document.getElementById('selectAllTableCheckbox');

    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', () => {
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            if (currentData.length === 0) return;
            const msg = translations[currentLang].msg_confirm_delete_all || 'هل أنت متأكد من مسح جميع الطلاب؟';
            showDialog(msg, true, () => {
                if (currentMode === 'students') appStudents = [];
                else appTeachers = [];
                saveDatabase();
            });
        });
    }

    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener('click', () => {
            const checkedBoxes = document.querySelectorAll('.student-row-checkbox:checked');
            if (checkedBoxes.length === 0) return;
            
            let msg = translations[currentLang].msg_confirm_delete_selected || `هل أنت متأكد من حذف ${checkedBoxes.length} طلاب؟`;
            msg = msg.replace('{count}', checkedBoxes.length);
            
            showDialog(msg, true, () => {
                const currentData = currentMode === 'students' ? appStudents : appTeachers;
                const indicesToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.getAttribute('data-index'))).sort((a, b) => b - a);
                indicesToDelete.forEach(index => {
                    currentData.splice(index, 1);
                });
                saveDatabase();
            });
        });
    }

    if (selectAllTableCheckbox) {
        selectAllTableCheckbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            document.querySelectorAll('.student-row-checkbox').forEach(cb => {
                cb.checked = isChecked;
            });
            updateDeleteSelectedBtnVisibility();
        });
    }

    const updateDeleteSelectedBtnVisibility = () => {
        if (!deleteSelectedBtn) return;
        const checkedCount = document.querySelectorAll('.student-row-checkbox:checked').length;
        if (checkedCount > 0) {
            deleteSelectedBtn.style.display = 'inline-block';
            const baseText = translations[currentLang].btn_delete_selected || 'حذف المحدد';
            deleteSelectedBtn.textContent = `${baseText} (${checkedCount})`;
        } else {
            deleteSelectedBtn.style.display = 'none';
        }
    };

    // --- Bulk Select Logic ---
    const openBulkModal = () => {
        renderBulkCheckboxes('');
        bulkSelectModal.style.display = 'block';
    };
    
    const closeBulkModalFn = () => bulkSelectModal.style.display = 'none';

    const renderBulkCheckboxes = (filterText) => {
        bulkListContainer.innerHTML = '';
        const lowerFilter = filterText.toLowerCase().trim();
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        const filtered = currentData.filter(s => {
            if (!lowerFilter) return true;
            const matchName = s.name.toLowerCase().includes(lowerFilter);
            const matchClass = s.class && s.class.toLowerCase().includes(lowerFilter);
            const matchSection = s.section && s.section.toLowerCase().includes(lowerFilter);
            return matchName || matchClass || matchSection;
        });
        
        filtered.forEach(student => {
            const isChecked = selectedBulkStudents.some(s => s.name === student.name);
            const label = document.createElement('label');
            label.className = 'student-checkbox-item';
            label.innerHTML = `
                <input type="checkbox" value="${student.name}" ${isChecked ? 'checked' : ''}>
                <span>${student.name}</span>
                <small style="margin-left: auto;">${student.class || ''} - ${student.section || ''}</small>
            `;
            const checkbox = label.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    if (!selectedBulkStudents.some(s => s.name === student.name)) {
                        selectedBulkStudents.push(student);
                    }
                } else {
                    selectedBulkStudents = selectedBulkStudents.filter(s => s.name !== student.name);
                }
                updateBulkSelectedCount();
            });
            bulkListContainer.appendChild(label);
        });
        updateBulkSelectedCount();
    };

    searchBulk.addEventListener('input', (e) => renderBulkCheckboxes(e.target.value));

    const selectAllFilteredBtn = document.getElementById('selectAllFilteredBtn');
    if (selectAllFilteredBtn) {
        selectAllFilteredBtn.addEventListener('click', () => {
            const filterText = searchBulk.value.toLowerCase().trim();
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            const filtered = currentData.filter(s => {
                if (!filterText) return true;
                const matchName = s.name.toLowerCase().includes(filterText);
                const matchClass = s.class && s.class.toLowerCase().includes(filterText);
                const matchSection = s.section && s.section.toLowerCase().includes(filterText);
                return matchName || matchClass || matchSection;
            });
            
            filtered.forEach(student => {
                if (!selectedBulkStudents.some(s => s.name === student.name)) {
                    selectedBulkStudents.push(student);
                }
            });
            
            renderBulkCheckboxes(searchBulk.value);
        });
    }

    const updateBulkSelectedCount = () => {
        selectedCountMsg.textContent = `${selectedBulkStudents.length} طلاب محددين`;
    };

    confirmBulkBtn.addEventListener('click', () => {
        if (selectedBulkStudents.length > 0) {
            isBulkMode = true;
            studentNameInput.value = `تم تحديد ${selectedBulkStudents.length} طلاب (إرسال جماعي)`;
            studentNameInput.disabled = true;
            studentClassInput.disabled = true;
            studentSectionInput.disabled = true;
            parentNumberInput.disabled = true;
            cancelBulkBtn.style.display = 'block';
            closeBulkModalFn();
            updatePreview();
        } else {
            resetBulkSelection();
            closeBulkModalFn();
        }
    });

    cancelBulkBtn.addEventListener('click', () => {
        resetBulkSelection();
    });

    const resetBulkSelection = () => {
        isBulkMode = false;
        selectedBulkStudents = [];
        studentNameInput.disabled = false;
        studentClassInput.disabled = false;
        studentSectionInput.disabled = false;
        parentNumberInput.disabled = false;
        studentNameInput.value = '';
        studentClassInput.value = '';
        studentSectionInput.value = '';
        parentNumberInput.value = '';
        cancelBulkBtn.style.display = 'none';
        // Clear search
        searchBulk.value = '';
        renderBulkCheckboxes('');
        updateBulkSelectedCount();
    };

    // Close Modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === manageStudentsModal) {
            manageStudentsModal.style.display = 'none';
        }
        if (e.target === bulkSelectModal) {
            bulkSelectModal.style.display = 'none';
        }
        
        // Handle dropdown click outside
        if (reasonModal && reasonModal.style.display === 'block') {
            if (!reasonModal.contains(e.target) && e.target !== openReasonModalBtn && !openReasonModalBtn.contains(e.target)) {
                reasonModal.style.display = 'none';
            }
        }
    });


    // --- Message Logic ---
    const applyTranslations = () => {
        const dict = translations[currentLang] || translations.ku || translations.ar;
        if (!dict) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) el.setAttribute('placeholder', dict[key]);
        });

        // Update User Role and School in Header
        if (currentUser && displayUserRole) {
            let roleTitle = currentUser.role === 'admin' ? 
                (dict.role_admin || (currentLang === 'ckb' ? 'بەڕێوەبەر' : (currentLang === 'ku' ? 'رێڤەبەر' : (currentLang === 'en' ? 'Principal' : 'مدير')))) :
                (dict.role_teacher || (currentLang === 'ckb' ? 'مامۆستا' : (currentLang === 'ku' ? 'مامۆستا' : (currentLang === 'en' ? 'Teacher' : 'معلم'))));
            displayUserRole.textContent = roleTitle;
        }
        if (currentUser && displaySchoolName) {
            displaySchoolName.textContent = currentUser.schoolName || (currentLang === 'ckb' ? 'قوتابخانە' : (currentLang === 'ku' ? 'قوتابخانە' : (currentLang === 'en' ? 'School' : 'المدرسة')));
        }
    };

    const langNames = {
        'ar': 'عربی',
        'ku': 'کوردی (بادینی)',
        'ckb': 'کوردی (سۆرانی)',
        'en': 'English'
    };

    const updateLangPickerUI = () => {
        const activeLabel = langNames[currentLang] || langNames.ku;
        document.querySelectorAll('.lang-current-label').forEach(el => {
            el.textContent = activeLabel;
        });

        document.querySelectorAll('.lang-option').forEach(el => {
            const lang = el.getAttribute('data-lang');
            if (lang === currentLang) {
                el.classList.add('selected');
            } else {
                el.classList.remove('selected');
            }
        });
    };

    const setupCustomLangPickers = () => {
        const pickers = [
            { btn: document.getElementById('authLangPickerBtn'), menu: document.getElementById('authLangDropdown') },
            { btn: document.getElementById('mainLangPickerBtn'), menu: document.getElementById('mainLangDropdown') }
        ];

        pickers.forEach(({ btn, menu }) => {
            if (!btn || !menu) return;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = menu.classList.contains('show');
                document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.lang-picker-btn').forEach(b => b.classList.remove('active'));

                if (!isOpen) {
                    menu.classList.add('show');
                    btn.classList.add('active');
                }
            });

            menu.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.getAttribute('data-lang');
                    if (lang) {
                        changeLanguage(lang);
                    }
                    menu.classList.remove('show');
                    btn.classList.remove('active');
                });
            });
        });

        window.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-lang-picker')) {
                document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.lang-picker-btn').forEach(b => b.classList.remove('active'));
            }
        });
    };

    const changeLanguage = (newLang) => {
        if (typeof newLang === 'string' && translations[newLang]) {
            currentLang = newLang;
        }
        localStorage.setItem('nama_currentLang', currentLang);

        document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
        document.documentElement.lang = currentLang;
        applyTranslations();
        updateLangPickerUI();
        updatePreview();
        if (typeof renderStudentsTable === 'function') renderStudentsTable();
    };

    const handleStudentSelection = () => {
        if(isBulkMode) return;
        const selectedName = studentNameInput.value;
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        const person = currentData.find(s => s.name === selectedName);
        if (person) {
            studentClassInput.value = person.class;
            studentSectionInput.value = person.section || '';
            parentNumberInput.value = person.parentNumber;
        }
        updatePreview();
    };

    const generateMessageForStudent = (studentName, studentClass, studentSection) => {
        const date = eventDateInput.value;
        const time = eventTimeInput.value;
        const selector = currentMode === 'students' ? 'input[name="reason"]:checked' : 'input[name="teacher_reason"]:checked';
        const selectedReasonElement = document.querySelector(selector);
        if (!selectedReasonElement) return "";
        
        return getLocalizedMessageTemplate(currentLang, selectedReasonElement.value, studentName, studentClass, studentSection, date, time);
    };

    const updatePreview = () => {
        if (isBulkMode) {
            if(selectedBulkStudents.length > 0) {
                const firstStudent = selectedBulkStudents[0];
                const msg = generateMessageForStudent(firstStudent.name, firstStudent.class, firstStudent.section);
                let bulkPrefix = `[وضع الإرسال الجماعي لـ ${selectedBulkStudents.length} طلاب]\n\nمثال للرسالة الأولى:\n\n${msg}`;
                if (currentLang === 'ku') {
                    bulkPrefix = `[بارێ فرێکرنا ب کۆمەل بۆ ${selectedBulkStudents.length} قوتابییان]\n\nنموونەیا نامەیا ئێکێ:\n\n${msg}`;
                } else if (currentLang === 'ckb') {
                    bulkPrefix = `[دۆخی ناردنی بەکۆمەڵ بۆ ${selectedBulkStudents.length} قوتابی]\n\nنموونەی پەیامی یەکەم:\n\n${msg}`;
                } else if (currentLang === 'en') {
                    bulkPrefix = `[Bulk Send Mode for ${selectedBulkStudents.length} students]\n\nExample of first message:\n\n${msg}`;
                }
                messagePreview.innerText = bulkPrefix;
            }
        } else {
            const msg = generateMessageForStudent(studentNameInput.value, studentClassInput.value, studentSectionInput.value);
            messagePreview.innerText = msg;
        }
        
        // Update display if reason changes
        const selector = currentMode === 'students' ? 'input[name="reason"]:checked' : 'input[name="teacher_reason"]:checked';
        const selectedReasonElement = document.querySelector(selector);
        if (selectedReasonElement && selectedReasonDisplay) {
            const content = selectedReasonElement.nextElementSibling.innerHTML;
            selectedReasonDisplay.innerHTML = content;
        }
    };

    const formatPhoneNumber = (number) => {
        if (!number) return '';
        let cleaned = number.replace(/[^\d+]/g, '');
        if (cleaned.startsWith('+')) {
            cleaned = cleaned.substring(1);
        } else if (cleaned.startsWith('00')) {
            cleaned = cleaned.substring(2);
        } else if (cleaned.startsWith('07')) {
            cleaned = '964' + cleaned.substring(1);
        }
        return cleaned;
    };

    // --- Sending Logic ---
    const sendWhatsAppMessage = () => {
        if (isBulkMode) {
            startQueue();
        } else {
            const number = formatPhoneNumber(parentNumberInput.value);
            if (!number) {
                const alertPhone = currentLang === 'ckb' ? 'تکایە ژمارەی تەلەفۆن بنووسە.' : (currentLang === 'ku' ? 'هیڤیدارین ژمارەیا تەلەفۆنێ بنڤیسی.' : (currentLang === 'en' ? 'Please enter phone number.' : 'يرجى إدخال رقم الهاتف.'));
                return showDialog(alertPhone);
            }
            if (!studentNameInput.value) {
                const alertName = currentLang === 'ckb' ? 'تکایە ناوی قوتابی بنووسە.' : (currentLang === 'ku' ? 'هیڤیدارین ناڤێ قوتابیی بنڤیسی.' : (currentLang === 'en' ? 'Please enter student name.' : 'يرجى إدخال اسم الطالب.'));
                return showDialog(alertName);
            }

            const message = messagePreview.innerText;
            // Use api.whatsapp.com for better Windows Desktop app compatibility
            window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    // --- Queue Logic ---
    const startQueue = () => {
        if (selectedBulkStudents.length === 0) return;
        queueIndex = 0;
        queueModal.style.display = 'block';
        updateQueueUI();
    };

    const updateQueueUI = () => {
        const student = selectedBulkStudents[queueIndex];
        const currentNum = queueIndex + 1;
        const totalNum = selectedBulkStudents.length;
        const progressPercentage = (queueIndex / totalNum) * 100;

        let queueTxt = `رسالة ${currentNum} من ${totalNum}`;
        if (currentLang === 'ckb') queueTxt = `پەیامی ${currentNum} لە ${totalNum}`;
        else if (currentLang === 'ku') queueTxt = `نامەیا ${currentNum} ژ ${totalNum}`;
        else if (currentLang === 'en') queueTxt = `Message ${currentNum} of ${totalNum}`;

        queueProgressText.textContent = queueTxt;
        queueProgressBar.style.width = `${progressPercentage}%`;
        queueStudentName.textContent = student.name;
        
        queueNextBtn.disabled = true;
        
        if (queueIndex >= totalNum) {
            queueModal.style.display = 'none';
            let finishMsg = 'تم الانتهاء من الإرسال لجميع الطلاب المحددين!';
            if (currentLang === 'ckb') finishMsg = 'ناردن بۆ هەموو قوتابییە دیاریکراوەکان کۆتایی هات!';
            else if (currentLang === 'ku') finishMsg = 'فرێکرن بۆ هەمی قوتابیێن دیارکری ب دووماهی هات!';
            else if (currentLang === 'en') finishMsg = 'Finished sending to all selected students!';
            showDialog(finishMsg);
        }
    };

    queueSendBtn.addEventListener('click', () => {
        const student = selectedBulkStudents[queueIndex];
        const number = formatPhoneNumber(student.parentNumber);
        
        if (number) {
            const message = generateMessageForStudent(student.name, student.class, student.section);
            // Use api.whatsapp.com for better Windows Desktop app compatibility
            window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, '_blank');
        } else {
            showDialog(`الطالب ${student.name} لا يملك رقم هاتف صالح.`);
        }
        
        // Enable next button after clicking send
        queueNextBtn.disabled = false;
        
        // If it's the last student, change Next button text to Finish
        if (queueIndex === selectedBulkStudents.length - 1) {
            queueNextBtn.textContent = "إنهاء";
        }
    });

    queueNextBtn.addEventListener('click', () => {
        queueIndex++;
        if (queueIndex >= selectedBulkStudents.length) {
            queueModal.style.display = 'none';
            isBulkMode = false; // Reset
            selectedBulkStudents = [];
            studentNameInput.disabled = false;
            studentClassInput.disabled = false;
            studentSectionInput.disabled = false;
            parentNumberInput.disabled = false;
            studentNameInput.value = '';
            studentClassInput.value = '';
            studentSectionInput.value = '';
            parentNumberInput.value = '';
            updatePreview();
        } else {
            updateQueueUI();
        }
    });

    queueCancelBtn.addEventListener('click', () => {
        showDialog('هل أنت متأكد من إلغاء الإرسال الجماعي؟', true, () => {
            queueModal.style.display = 'none';
        });
    });


    // --- Event Listeners Setup ---
    if (langSelect) langSelect.addEventListener('change', () => changeLanguage(langSelect.value));
    if (authLangSelect) authLangSelect.addEventListener('change', () => changeLanguage(authLangSelect.value));
    studentNameInput.addEventListener('input', handleStudentSelection);
    studentClassInput.addEventListener('input', updatePreview);
    studentSectionInput.addEventListener('input', updatePreview);
    eventDateInput.addEventListener('change', updatePreview);
    eventTimeInput.addEventListener('change', () => {
        updatePreview();
        previewTime.textContent = eventTimeInput.value || now.toTimeString().split(' ')[0].substring(0, 5);
    });
    
    reasonRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updatePreview();
            setTimeout(() => {
                if (reasonModal) reasonModal.style.display = 'none';
            }, 150);
        });
    });

    teacherReasonRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updatePreview();
            setTimeout(() => {
                if (reasonModal) reasonModal.style.display = 'none';
            }, 150);
        });
    });
    sendBtn.addEventListener('click', sendWhatsAppMessage);

    manageStudentsBtn.addEventListener('click', openManageModal);
    closeManageModal.addEventListener('click', closeManageModalFn);
    
    bulkSelectBtn.addEventListener('click', openBulkModal);
    closeBulkModal.addEventListener('click', closeBulkModalFn);

    window.onclick = (event) => {
        if (event.target == manageStudentsModal) closeManageModalFn();
        if (event.target == bulkSelectModal) closeBulkModalFn();
        if (event.target == customDialogModal) closeDialog();
    };

    // --- Mode Switcher Logic ---
    const setMode = (mode) => {
        currentMode = mode;
        
        if (mode === 'students') {
            modeStudentsBtn.classList.add('active');
            modeStudentsBtn.style.background = 'var(--accent-color)';
            modeStudentsBtn.style.color = 'white';
            
            modeTeachersBtn.classList.remove('active');
            modeTeachersBtn.style.background = 'transparent';
            modeTeachersBtn.style.color = 'var(--text-secondary)';
            
            studentReasonsGrid.style.display = 'flex';
            teacherReasonsGrid.style.display = 'none';
            
            document.getElementById('classSectionGroup').style.display = 'grid';
            document.getElementById('newStudentClass').style.display = 'inline-block';
            document.getElementById('newStudentSection').style.display = 'inline-block';
            document.getElementById('bulkClassSectionGroup').style.display = 'grid';
            
            // update i18n keys
            document.getElementById('lblStudentName').setAttribute('data-i18n', 'lbl_student_name');
            studentNameInput.setAttribute('data-i18n-ph', 'ph_student_name');
            document.getElementById('lblParentNumber').setAttribute('data-i18n', 'lbl_parent_number');
            parentNumberInput.setAttribute('data-i18n-ph', 'ph_parent_number');
            
            document.querySelector('.wa-name').setAttribute('data-i18n', 'wa_name');
            
            manageStudentsBtn.querySelector('span').setAttribute('data-i18n', 'btn_manage_students');
            document.querySelector('#manageStudentsModal h2').setAttribute('data-i18n', 'modal_manage_title');
            
            document.getElementById('tabAddSingle').setAttribute('data-i18n', 'tab_add_single');
            document.getElementById('tabAddBulk').setAttribute('data-i18n', 'tab_add_bulk');
            document.querySelector('h3[data-i18n^="title_saved_"]').setAttribute('data-i18n', 'title_saved_students');
            document.querySelector('.hint-text').setAttribute('data-i18n', 'hint_excel');
            
            document.getElementById('newStudentName').setAttribute('data-i18n-ph', 'ph_student_name');
            document.getElementById('newStudentNumber').setAttribute('data-i18n-ph', 'ph_parent_number');
            
            const thClass = document.querySelector('[data-i18n="th_class"]');
            if(thClass) thClass.style.display = '';
            const thSection = document.querySelector('[data-i18n="th_section"]');
            if(thSection) thSection.style.display = '';

            const checkedStudentReason = document.querySelector('input[name="reason"]:checked');
            if (checkedStudentReason) {
                selectedReasonDisplay.innerHTML = checkedStudentReason.nextElementSibling.innerHTML;
            }
        } else {
            modeTeachersBtn.classList.add('active');
            modeTeachersBtn.style.background = 'var(--accent-color)';
            modeTeachersBtn.style.color = 'white';
            
            modeStudentsBtn.classList.remove('active');
            modeStudentsBtn.style.background = 'transparent';
            modeStudentsBtn.style.color = 'var(--text-secondary)';
            
            studentReasonsGrid.style.display = 'none';
            teacherReasonsGrid.style.display = 'flex';
            
            document.getElementById('classSectionGroup').style.display = 'none';
            document.getElementById('newStudentClass').style.display = 'none';
            document.getElementById('newStudentSection').style.display = 'none';
            document.getElementById('bulkClassSectionGroup').style.display = 'none';
            
            // update i18n keys
            document.getElementById('lblStudentName').setAttribute('data-i18n', 'lbl_teacher_name');
            studentNameInput.setAttribute('data-i18n-ph', 'ph_teacher_name');
            document.getElementById('lblParentNumber').setAttribute('data-i18n', 'lbl_teacher_number');
            parentNumberInput.setAttribute('data-i18n-ph', 'ph_teacher_number');
            
            document.querySelector('.wa-name').setAttribute('data-i18n', 'wa_teacher_name');
            
            manageStudentsBtn.querySelector('span').setAttribute('data-i18n', 'btn_manage_teachers');
            document.querySelector('#manageStudentsModal h2').setAttribute('data-i18n', 'modal_manage_teachers_title');
            
            document.getElementById('tabAddSingle').setAttribute('data-i18n', 'tab_add_single_teacher');
            document.getElementById('tabAddBulk').setAttribute('data-i18n', 'tab_add_bulk_teacher');
            document.querySelector('h3[data-i18n^="title_saved_"]').setAttribute('data-i18n', 'title_saved_teachers');
            document.querySelector('.hint-text').setAttribute('data-i18n', 'hint_excel_teacher');
            document.querySelector('[data-i18n="th_class"]').style.display = 'none';
            document.querySelector('[data-i18n="th_section"]').style.display = 'none';
            
            document.getElementById('newStudentName').setAttribute('data-i18n-ph', 'ph_teacher_name');
            document.getElementById('newStudentNumber').setAttribute('data-i18n-ph', 'ph_teacher_number');
            
            const checkedTeacherReason = document.querySelector('input[name="teacher_reason"]:checked');
            if (checkedTeacherReason) {
                selectedReasonDisplay.innerHTML = checkedTeacherReason.nextElementSibling.innerHTML;
            }
        }
        
        applyTranslations();
        refreshDatalist();
        renderStudentsTable();
        
        // clear inputs when switching mode
        studentNameInput.value = '';
        studentClassInput.value = '';
        studentSectionInput.value = '';
        parentNumberInput.value = '';
        
        updatePreview();
    };

    modeStudentsBtn.addEventListener('click', () => setMode('students'));
    modeTeachersBtn.addEventListener('click', () => setMode('teachers'));

    // --- Teacher Search & Invite Logic ---
    const openSearchTeachersModal = () => {
        if (!currentUser) return;
        if (modalCurrentSchoolName) modalCurrentSchoolName.textContent = currentUser.schoolName || '...';
        if (searchTeachersModal) searchTeachersModal.style.display = 'block';
        loadSchoolTeachers();
        performTeacherSearch(searchTeacherInput ? searchTeacherInput.value.trim() : '');
    };

    const closeSearchTeachersModalFn = () => {
        if (searchTeachersModal) searchTeachersModal.style.display = 'none';
    };

    if (searchTeachersBtn) {
        searchTeachersBtn.addEventListener('click', openSearchTeachersModal);
    }
    if (closeSearchTeachersModal) {
        closeSearchTeachersModal.addEventListener('click', closeSearchTeachersModalFn);
    }

    if (tabSearchTeachers && tabMySchoolTeachers) {
        tabSearchTeachers.addEventListener('click', () => {
            tabSearchTeachers.classList.add('active');
            tabMySchoolTeachers.classList.remove('active');
            if (panelSearchTeachers) panelSearchTeachers.style.display = 'block';
            if (panelMySchoolTeachers) panelMySchoolTeachers.style.display = 'none';
            performTeacherSearch(searchTeacherInput ? searchTeacherInput.value.trim() : '');
        });

        tabMySchoolTeachers.addEventListener('click', () => {
            tabMySchoolTeachers.classList.add('active');
            tabSearchTeachers.classList.remove('active');
            if (panelMySchoolTeachers) panelMySchoolTeachers.style.display = 'block';
            if (panelSearchTeachers) panelSearchTeachers.style.display = 'none';
            renderMySchoolTeachers();
        });
    }

    if (searchTeacherInput) {
        let debounceTimer;
        searchTeacherInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                performTeacherSearch(e.target.value.trim());
            }, 300);
        });
    }

    const getStoredSchoolTeachers = () => {
        if (!currentUser) return [];
        try {
            const key = 'nama_school_teachers_' + currentUser.contact;
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    };

    const saveStoredSchoolTeachers = (list) => {
        if (!currentUser) return;
        const key = 'nama_school_teachers_' + currentUser.contact;
        localStorage.setItem(key, JSON.stringify(list));
    };

    const loadSchoolTeachers = async () => {
        localSchoolTeachers = getStoredSchoolTeachers();
        if (API_URL && currentUser) {
            try {
                const res = await callApi('getSchoolTeachers', {
                    contact: currentUser.contact,
                    token: currentUser.token
                });
                if (res.success && res.teachers) {
                    localSchoolTeachers = res.teachers;
                    saveStoredSchoolTeachers(localSchoolTeachers);
                }
            } catch (err) {
                console.error('Failed to fetch school teachers:', err);
            }
        }
        renderMySchoolTeachers();
    };

    const performTeacherSearch = async (query = '') => {
        if (!teachersSearchResults) return;
        const dict = translations[currentLang] || translations.ku;
        teachersSearchResults.innerHTML = '<div style="text-align: center; padding: 1.5rem; color: var(--text-secondary);"><i class="fa-solid fa-spinner fa-spin"></i> ...</div>';

        let results = [];
        if (API_URL && currentUser) {
            try {
                const res = await callApi('searchTeachers', {
                    contact: currentUser.contact,
                    token: currentUser.token,
                    query: query
                });
                if (res.success && res.teachers) {
                    results = res.teachers;
                }
            } catch (err) {
                console.error('Search API error, fallback to local:', err);
            }
        }

        // Local sample and registered teachers fallback
        if (results.length === 0) {
            const baseTeachers = [
                { id: "t1", name: "مامۆستا کاروان علی", contact: "+9647501234567", schoolName: currentUser ? currentUser.schoolName : "ئامادەیی زانیاری" },
                { id: "t2", name: "مامۆستا شنۆ ئەحمەد", contact: "+9647507654321", schoolName: "قوتابخانەی نەورۆز" },
                { id: "t3", name: "أ. خليل إبراهيم مصطفى", contact: "+9647509988776", schoolName: "مدرسة المستقبل" },
                { id: "t4", name: "مامۆستا دیار کامەران", contact: "+9647503344556", schoolName: currentUser ? currentUser.schoolName : "قوتابخانەی ئامادەیی" }
            ];
            const q = query.toLowerCase().trim();
            results = baseTeachers.filter(t => 
                !q || t.name.toLowerCase().includes(q) || t.contact.includes(q) || (t.schoolName && t.schoolName.toLowerCase().includes(q))
            );
        }

        const invitedContacts = new Set(localSchoolTeachers.map(t => t.contact));

        teachersSearchResults.innerHTML = '';
        if (results.length === 0) {
            teachersSearchResults.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-secondary);"><i class="fa-solid fa-user-slash" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i> ${dict.msg_no_teachers_found || 'لم يتم العثور على معلمين'}</div>`;
            return;
        }

        results.forEach(teacher => {
            const isJoined = invitedContacts.has(teacher.contact);
            const card = createTeacherCardElement(teacher, isJoined, false);
            teachersSearchResults.appendChild(card);
        });
    };

    const renderMySchoolTeachers = () => {
        if (!mySchoolTeachersList) return;
        const dict = translations[currentLang] || translations.ku;
        mySchoolTeachersList.innerHTML = '';
        
        if (localSchoolTeachers.length === 0) {
            mySchoolTeachersList.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-secondary);"><i class="fa-solid fa-users" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i> ${currentLang === 'ckb' ? 'هیچ مامۆستایەک پەیوەست نەکراوە تا ئێستا.' : (currentLang === 'ku' ? 'چ مامۆستا نەهاتینە پەیوەستکرن هەتا نوکە.' : 'لم يتم ربط أي معلمين بهذه المدرسة حتى الآن.')}</div>`;
            return;
        }

        localSchoolTeachers.forEach(teacher => {
            const card = createTeacherCardElement(teacher, true, true);
            mySchoolTeachersList.appendChild(card);
        });
    };

    const createTeacherCardElement = (teacher, isJoined, isMySchoolTab) => {
        const dict = translations[currentLang] || translations.ku;
        const card = document.createElement('div');
        card.className = 'teacher-item-card';

        const initial = teacher.name ? teacher.name.trim().charAt(0).toUpperCase() : 'T';
        const schoolDisplay = teacher.schoolName || (currentLang === 'ckb' ? 'دیاری نەکراوە' : (currentLang === 'ku' ? 'دیار نینە' : 'غير محدد'));

        card.innerHTML = `
            <div class="teacher-card-info">
                <div class="teacher-avatar-circle">${initial}</div>
                <div class="teacher-details">
                    <div class="teacher-name-title">${teacher.name}</div>
                    <div class="teacher-meta">
                        <span><i class="fa-solid fa-phone" style="color: var(--primary-color);"></i> ${teacher.contact}</span>
                        <span><i class="fa-solid fa-school" style="color: #818cf8;"></i> ${schoolDisplay}</span>
                    </div>
                </div>
            </div>
            <div class="teacher-card-actions">
                ${isJoined ? 
                    `<span class="teacher-badge badge-joined-pill"><i class="fa-solid fa-check-circle"></i> ${dict.badge_joined || 'منضم ومشارك'}</span>
                     <button class="btn-unshare-action" title="${dict.btn_unshare_teacher}"><i class="fa-solid fa-user-minus"></i> ${dict.btn_unshare_teacher || 'إلغاء المشاركة'}</button>` :
                    `<button class="btn-invite-action"><i class="fa-solid fa-user-plus"></i> ${dict.btn_invite_share || 'دعوة ومشاركة الطلاب'}</button>`
                }
                <button class="btn-wa-invite-action" title="${dict.btn_send_wa_invite}"><i class="fa-brands fa-whatsapp"></i> ${dict.btn_send_wa_invite || 'واتساب'}</button>
            </div>
        `;

        // Event listeners for actions
        const inviteBtn = card.querySelector('.btn-invite-action');
        if (inviteBtn) {
            inviteBtn.addEventListener('click', () => handleInviteTeacher(teacher));
        }

        const unshareBtn = card.querySelector('.btn-unshare-action');
        if (unshareBtn) {
            unshareBtn.addEventListener('click', () => handleUnshareTeacher(teacher));
        }

        const waBtn = card.querySelector('.btn-wa-invite-action');
        if (waBtn) {
            waBtn.addEventListener('click', () => sendDirectTeacherWhatsAppInvite(teacher));
        }

        return card;
    };

    const handleInviteTeacher = async (teacher) => {
        if (!currentUser) return;
        const dict = translations[currentLang] || translations.ku;

        if (API_URL) {
            try {
                await callApi('inviteTeacher', {
                    adminContact: currentUser.contact,
                    schoolName: currentUser.schoolName,
                    teacherContact: teacher.contact,
                    teacherName: teacher.name,
                    token: currentUser.token
                });
            } catch (err) {
                console.error('Invite API error:', err);
            }
        }

        // Update local list
        const existingIdx = localSchoolTeachers.findIndex(t => t.contact === teacher.contact);
        if (existingIdx === -1) {
            localSchoolTeachers.push({
                contact: teacher.contact,
                name: teacher.name,
                schoolName: currentUser.schoolName || teacher.schoolName,
                status: 'active'
            });
        }
        saveStoredSchoolTeachers(localSchoolTeachers);

        showDialog(dict.msg_invite_success || 'تمت دعوة المعلم ومشاركة بيانات طلاب المدرسة معه بنجاح!');
        performTeacherSearch(searchTeacherInput ? searchTeacherInput.value.trim() : '');
        renderMySchoolTeachers();
    };

    const handleUnshareTeacher = async (teacher) => {
        if (!currentUser) return;
        const dict = translations[currentLang] || translations.ku;

        if (API_URL) {
            try {
                await callApi('unshareTeacher', {
                    adminContact: currentUser.contact,
                    teacherContact: teacher.contact,
                    token: currentUser.token
                });
            } catch (err) {
                console.error('Unshare API error:', err);
            }
        }

        localSchoolTeachers = localSchoolTeachers.filter(t => t.contact !== teacher.contact);
        saveStoredSchoolTeachers(localSchoolTeachers);

        showDialog(dict.msg_unshare_success || 'تم إلغاء مشاركة بيانات طلاب المدرسة مع هذا المعلم.');
        performTeacherSearch(searchTeacherInput ? searchTeacherInput.value.trim() : '');
        renderMySchoolTeachers();
    };

    const sendDirectTeacherWhatsAppInvite = (teacher) => {
        const phone = formatPhoneNumber(teacher.contact);
        const schoolName = (currentUser && currentUser.schoolName) ? currentUser.schoolName : '';
        let inviteMsg = '';

        if (currentLang === 'ckb') {
            inviteMsg = `سڵاو مامۆستا ${teacher.name}ی بەڕێز،\nکارگێڕیی قوتابخانەی (${schoolName}) بانگهێشتتان دەکات بۆ بەکارهێنانی پلاتفۆرمی ئاگادارییەکانی قوتابخانە و هاوبەشکردنی داتای قوتابیان لەگەڵتان.\nدەتوانن ئێستا بە هەژمارەکەتان بچنە ژوورەوە و داتای پۆلەکان ببینن.`;
        } else if (currentLang === 'ku') {
            inviteMsg = `سلاڤ مامۆستا ${teacher.name}ێ هێژا،\nکارگێڕیا قوتابخانا (${schoolName}) هەوە داخاز دکەت بۆ بکارئینانا پلاتفۆرما ئاگەهداریێن قوتابخانێ و پشکداریکرنا داتایا قوتابییان دگەل هەوە.\nهوین دشێن نوکە ب هەژمارا خۆ بچنە ژوور و داتایێن پۆلان ببینن.`;
        } else if (currentLang === 'en') {
            inviteMsg = `Greetings Teacher ${teacher.name},\nThe administration of (${schoolName}) invites you to access the School Notification Platform where student data has been shared with you.\nYou can now log in to view your students list.`;
        } else {
            inviteMsg = `السلام عليكم الأستاذ/المعلم الفاضل ${teacher.name}،\nتدعوكم إدارة مدرسة (${schoolName}) للانضمام إلى منصة الإشعارات المدرسية حيث تم تفعيل مشاركة بيانات طلاب المدرسة معكم.\nيمكنكم الآن تسجيل الدخول بحسابكم والاطلاع على قوائم الطلاب وإرسال التبليغات.`;
        }

        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(inviteMsg)}`, '_blank');
    };

    // Update window.onclick to close search modal
    const originalWindowOnClick = window.onclick;
    window.onclick = (event) => {
        if (originalWindowOnClick) originalWindowOnClick(event);
        if (event.target == searchTeachersModal) closeSearchTeachersModalFn();
    };

    // Start
    setupCustomLangPickers();
    checkAuth();
    changeLanguage(currentLang);
});

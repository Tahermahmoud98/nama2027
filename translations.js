const translations = {
    ar: {
        title: "منصة الإشعارات المدرسية",
        subtitle: "قم بتجهيز وإرسال رسائل واتساب لأولياء الأمور بسهولة",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> اسم الطالب",
        ph_student_name: "أدخل اسم الطالب الثلاثي",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> الصف",
        ph_student_class: "مثال: الأول المتوسط",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> الشعبة",
        ph_student_section: "مثال: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> رقم واتساب ولي الأمر",
        ph_parent_number: "مثال: +9647XXXXXXXXX",
        hint_parent_number: "يرجى إدخال الرقم مع رمز الدولة (مثل +964 للعراق)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> تاريخ الحضور",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> وقت الحضور",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> سبب الإشعار (اختر واحداً)",
        reason_absence: "كثرة الغياب",
        reason_badBehavior: "سلوك سيئ",
        reason_lowGrades: "درجات منخفضة",
        reason_goodBehavior: "سلوك جيد",
        reason_highGrades: "درجات عالية",
        reason_fight: "شجار بالمدرسة",
        reason_reward: "مكافأة / تكريم",
        reason_meeting: "دعوة لاجتماع",
        reason_late: "تأخر صباحي",
        reason_homework: "عدم أداء الواجب",
        reason_phone: "جلب الهاتف",
        reason_uniform: "مخالفة الزي",
        reason_cheating: "الغش في الامتحان",
        reason_vandalism: "تخريب الممتلكات",
        reason_truancy: "الهروب من المدرسة",
        reason_books: "عدم جلب الكتب",
        reason_bullying: "التنمر",
        reason_sleeping: "النوم في الفصل",
        reason_hygiene: "النظافة الشخصية",
        reason_profanity: "ألفاظ نابية",
        reason_smoking: "التدخين",
        reason_leave_early: "مغادرة مبكرة",
        reason_participation: "عدم المشاركة",
        reason_forbidden: "مواد ممنوعة",
        reason_health: "وعكة صحية",
        reason_trip: "رحلة مدرسية",
        reason_fees: "أقساط مدرسية",
        reason_parent_council: "مجلس الآباء",
        reason_exam_schedule: "جدول الامتحانات",
        reason_document_missing: "نواقص في المستمسكات",
        reason_excellent_project: "مشروع متميز",
        reason_activity: "مشاركة بنشاط مدرسي",
        reason_late_pickup: "التأخر في استلام الطالب",
        reason_bus_issue: "مشكلة في النقل",
        reason_forgot_id: "عدم ارتداء باج المدرسة",
        reason_disrespect_teacher: "عدم احترام المعلم",
        reason_lack_focus: "قلة التركيز والتشتت",
        reason_eating_in_class: "الأكل أثناء الحصة",
        reason_chewing_gum: "مضغ العلكة في الصف",
        reason_failing_exam: "الرسوب في الامتحان",
        reason_damaging_books: "تخريب أو تمزيق الكتب",
        reason_makeup_accessories: "مكياج أو إكسسوارات مخالفة",
        reason_hallway_noise: "إحداث فوضى في الممرات",
        reason_leave_class_no_permission: "مغادرة الصف بدون إذن",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> قسم الطلاب",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> تنبيه معلم",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> اسم المعلم",
        ph_teacher_name: "أدخل اسم المعلم الثلاثي",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> المادة الدراسية",
        ph_teacher_subject: "مثال: الرياضيات",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> رقم هاتف المعلم",
        ph_teacher_number: "مثال: +9647XXXXXXXXX",
        btn_manage_teachers: "إدارة المعلمين",
        modal_manage_teachers_title: "إدارة المعلمين",
        reason_t_absence: "غياب عن الدوام",
        reason_t_late: "تأخر عن الدوام",
        reason_t_meeting: "دعوة لاجتماع إدارة",
        reason_t_duty: "تذكير بالمناوبة",
        reason_t_thanks: "شكر وتقدير",
        reason_t_violation: "مخالفة تعليمات",
        reason_t_grades: "تسليم الدرجات",
        reason_t_notice: "تبليغ هام",
        reason_t_exam_questions: "تسليم أسئلة الامتحانات",
        reason_t_lesson_plan: "الخطة اليومية/السنوية",
        reason_t_class_management: "إدارة الصف",
        reason_t_parent_meeting: "لقاء مع أولياء الأمور",
        reason_t_training: "دورة تدريبية/تطويرية",
        reason_t_activity_supervision: "الإشراف على نشاط",
        reason_t_student_issue: "مشكلة تخص طالب",
        reason_t_excellent_performance: "أداء متميز في التدريس",
        reason_t_leave_early: "مغادرة مبكرة",
        reason_t_schedule_change: "تغيير في جدول الدروس",
        reason_t_supplies: "نقص في المستلزمات",
        reason_t_technology: "استخدام الوسائل التعليمية",
        reason_t_cooperation: "تعاون مع الزملاء",
        reason_t_committee: "اجتماع لجنة",
        reason_t_celebration: "احتفالية مدرسية",
        reason_t_vacation_approval: "الموافقة على الإجازة",
        reason_t_vacation_rejection: "رفض الإجازة",
        reason_t_evaluation: "تقييم الأداء",
        reason_t_warning: "توجيه لفت نظر",
        reason_t_emergency: "حالة طارئة",

        // --- Modals & Buttons ---
        btn_manage_students: "إدارة الطلاب",
        btn_bulk_select: "تحديد متعدد",
        modal_manage_title: "إدارة الطلاب",
        tab_add_single: "إضافة طالب واحد",
        tab_add_bulk: "إضافة مجموعة (إكسل)",
        tab_add_single_teacher: "إضافة معلم واحد",
        tab_add_bulk_teacher: "إضافة مجموعة (إكسل)",
        title_saved_teachers: "المعلمون المحفوظون:",
        hint_excel_teacher: "قم بنسخ بيانات المعلمين من إكسل ولصقها هنا. (الاسم، الرقم)",
        btn_save: "حفظ",
        hint_excel: "قم بنسخ بيانات الطلاب من إكسل ولصقها هنا. الترتيب: (الاسم، الصف، الشعبة، الرقم)",
        btn_save_bulk: "حفظ المجموعة",
        title_saved_students: "الطلاب المحفوظون:",
        th_name: "الاسم",
        th_class: "الصف",
        th_section: "الشعبة",
        th_number: "الرقم",
        th_action: "إجراء",
        modal_bulk_title: "تحديد مجموعة طلاب",
        modal_reason_title: "اختر السبب",
        ph_search: "ابحث عن طالب...",
        btn_confirm: "تأكيد",
        modal_queue_title: "جاري الإرسال الجماعي",
        btn_delete_all: "مسح الكل",
        btn_delete_selected: "حذف المحدد",
        msg_confirm_delete_all: "هل أنت متأكد من مسح جميع الطلاب؟",
        msg_confirm_delete_selected: "هل أنت متأكد من حذف {count} طلاب؟",
        msg_confirm_delete_single: "هل أنت متأكد من حذف هذا الطالب؟",

        preview_title: "<i class='fa-regular fa-eye'></i> معاينة الرسالة",
        wa_name: "ولي الأمر",
        wa_teacher_name: "المعلم",
        wa_status: "متصل الآن",
        preview_placeholder: "الرجاء إدخال بيانات الطالب لرؤية المعاينة هنا...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> إرسال عبر واتساب",

        // Auth
        auth_login_title: "<i class='fa-solid fa-right-to-bracket'></i> تسجيل الدخول",
        lbl_login_user: "<i class='fa-solid fa-envelope'></i> البريد الإلكتروني أو رقم الهاتف",
        ph_login_user: "أدخل البريد أو رقم الهاتف",
        lbl_login_pass: "<i class='fa-solid fa-lock'></i> كلمة المرور",
        ph_login_pass: "أدخل كلمة المرور",
        btn_login: "تسجيل الدخول",
        txt_no_account: "ليس لديك حساب؟",
        link_create_account: "إنشاء حساب جديد",
        auth_register_title: "<i class='fa-solid fa-user-plus'></i> إنشاء حساب",
        lbl_first_name: "الاسم الأول",
        ph_first_name: "الاسم",
        lbl_last_name: "اسم العائلة",
        ph_last_name: "اسم العائلة",
        lbl_reg_contact: "<i class='fa-solid fa-phone'></i> رقم الهاتف أو البريد الإلكتروني",
        ph_reg_contact: "أدخل رقم الهاتف أو البريد",
        lbl_account_type: "<i class='fa-solid fa-user-tie'></i> نوع الحساب",
        role_teacher: "معلم",
        role_admin: "مدير",
        lbl_reg_pass: "كلمة المرور",
        ph_reg_pass: "كلمة المرور",
        lbl_confirm_pass: "تأكيد كلمة المرور",
        ph_confirm_pass: "تأكيد كلمة المرور",
        btn_register: "إنشاء الحساب",
        txt_have_account: "لديك حساب بالفعل؟",
        link_login: "تسجيل الدخول",

        // School & Teacher Invite
        lbl_school_name: "<i class='fa-solid fa-school'></i> اسم المدرسة",
        ph_school_name: "أدخل اسم مدرستك",
        btn_search_invite_teachers: "دعوة المعلمين",
        modal_search_teachers_title: "<i class='fa-solid fa-user-plus'></i> البحث عن معلمين ودعوتهم للمدرسة",
        ph_search_teacher: "ابحث باسم المعلم، رقم الهاتف، أو المدرسة...",
        lbl_my_school_badge: "المدرسة:",
        badge_joined: "منضم ومشارك",
        badge_not_invited: "غير مدعو",
        btn_invite_share: "دعوة ومشاركة الطلاب",
        btn_unshare_teacher: "إلغاء المشاركة",
        btn_send_wa_invite: "إرسال الدعوة عبر واتساب",
        tab_search_teachers: "بحث عن معلمين",
        tab_my_school_teachers: "معلمو مدرستي",
        msg_invite_success: "تمت دعوة المعلم ومشاركة بيانات طلاب المدرسة معه بنجاح!",
        msg_unshare_success: "تم إلغاء مشاركة بيانات طلاب المدرسة مع هذا المعلم.",
        msg_no_teachers_found: "لم يتم العثور على معلمين يطابقون البحث.",
        lbl_teacher_contact: "رقم الهاتف:",
        lbl_teacher_school: "المدرسة المسجلة:",
        lbl_status: "الحالة:",
        tag_shared_students: "بيانات الطلاب المشتركة مفعلة",
        btn_logout: "خروج",
        btn_notifications: "الإشعارات",
        modal_invitations_title: "<i class='fa-solid fa-bell'></i> دعوات المدارس ومشاركة بيانات الطلاب",
        btn_accept_invite: "قبول ومشاركة الطلاب",
        btn_reject_invite: "رفض",
        badge_pending: "قيد الانتظار",
        badge_accepted: "مقبولة ومشارك",
        badge_rejected: "مرفوضة",
        msg_no_invitations: "لا توجد أي دعوات جديدة حالياً.",
        txt_invited_by: "دعوة من المدير:",
        txt_school_shared: "المدرسة:",
        msg_invite_accepted: "تم قبول الدعوة بنجاح! تم تنزيل بيانات طلاب المدرسة بحسابك.",
        msg_invite_rejected: "تم رفض الدعوة."
    },
    ku: {
        title: "پلاتفۆرما ئاگەهداریێن قوتابخانێ",
        subtitle: "ب ساناهی نامەیێن واتسئاپێ بۆ سمیانێن قوتابییان بەرهەڤ بکە و فرێ بکە",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> ناڤێ قوتابی",
        ph_student_name: "ناڤێ قوتابیی یێ سێقۆڵی بنڤیسە",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> پۆل",
        ph_student_class: "نموونە: حەفتێ بنەڕەتی",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> هۆبە",
        ph_student_section: "نموونە: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> ژمارەیا واتسئاپا سمیانی",
        ph_parent_number: "نموونە: +9647XXXXXXXXX",
        hint_parent_number: "هیڤیدارین ژمارەیێ دگەل کۆدێ وەلاتی بنڤیسە (وەک +964 بۆ عێراقێ)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> رێکەفتا سەرەدانێ",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> دەمێ سەرەدانێ",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> ئەگەرێ ئاگەهداریێ (ئێکێ هەلبژێرە)",
        reason_absence: "گەلەک نەهاتن",
        reason_badBehavior: "رەفتارا خراب",
        reason_lowGrades: "نمرەیێن نزم",
        reason_goodBehavior: "رەفتارا باش",
        reason_highGrades: "نمرێن بلند",
        reason_fight: "شەڕکرن ل قوتابخانێ",
        reason_reward: "پاداشت / رێزلێنان",
        reason_meeting: "داخازکر بۆ کۆمبوونێ",
        reason_late: "درەنگ هاتن",
        reason_homework: "ئەنجام نەدانا ئەرکێن مال",
        reason_phone: "ئینانا مۆبایلێ",
        reason_uniform: "نەپێگیری ب جلوبەرگان",
        reason_cheating: "کۆپیکرن (غشکرن)",
        reason_vandalism: "تێکدانا کەلوپەلان",
        reason_truancy: "رەڤین ژ قوتابخانێ",
        reason_books: "نەئینانا پەرتووکان",
        reason_bullying: "زۆرداری کرن",
        reason_sleeping: "نڤستن ل پۆلێ",
        reason_hygiene: "نەپاقژی",
        reason_profanity: "ئاخفتنێن نەجوان و کرێت",
        reason_smoking: "جگارە کێشان",
        reason_leave_early: "دەرکەفتن بەری دووماهی هاتنێ",
        reason_participation: "نەپشکداریکرن",
        reason_forbidden: "ئینانا تشتێن قەدەغەکری",
        reason_health: "نەخۆشی",
        reason_trip: "گەشتا زانستی",
        reason_fees: "پارەیێ قوتابخانێ",
        reason_parent_council: "جڤاتا سمیانان",
        reason_exam_schedule: "خشتەیێ ئەزموونان",
        reason_document_missing: "کێماسی د بەلگەنامەیان دا",
        reason_excellent_project: "پرۆژەیێ نایاب",
        reason_activity: "پشکداریکرن د چالاکیەکێ دا",
        reason_late_pickup: "درەنگ وەرگرتنا قوتابی",
        reason_bus_issue: "کێشە د ڤەگوهاستنێ دا",
        reason_forgot_id: "نەپێڤەکرنا ناسنامەیێ",
        reason_disrespect_teacher: "رێزنەگرتنا مامۆستای",
        reason_lack_focus: "کێم تەرکیزی",
        reason_eating_in_class: "خوارن د ناڤ پۆلێ دا",
        reason_chewing_gum: "جووینا بنیشتی",
        reason_failing_exam: "دەرنەچوون د ئەزموونێ دا",
        reason_damaging_books: "تێکدانا پەرتووکان",
        reason_makeup_accessories: "بکارئینانا تشتێن نەگونجای (مکیاج)",
        reason_hallway_noise: "دەنگەدەنگ د مەمەڕان دا",
        reason_leave_class_no_permission: "دەرکەفتن بێی دەستویریێ",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> بەشێ قوتابییان",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> ئاگەهدارکرنا مامۆستای",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> ناڤێ مامۆستای",
        ph_teacher_name: "ناڤێ مامۆستایی یێ سێقۆڵی بنڤیسە",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> بابەتێ وانەیێ",
        ph_teacher_subject: "نموونە: بیرکاری",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> ژمارەیا مامۆستای",
        ph_teacher_number: "نموونە: +9647XXXXXXXXX",
        btn_manage_teachers: "رێڤەبرنا مامۆستایان",
        modal_manage_teachers_title: "رێڤەبرنا مامۆستایان",
        reason_t_absence: "ئامادەنەبوون",
        reason_t_late: "درەنگ کەفتن",
        reason_t_meeting: "داخازکر بۆ کۆمبوونێ",
        reason_t_duty: "ئەرکێ چاڤدێریێ",
        reason_t_thanks: "سوپاس و پێزانین",
        reason_t_violation: "پێشێلکرنا رێنمایان",
        reason_t_grades: "رادەستکرنا نمرەیان",
        reason_t_notice: "ئاگەهدارییەکا پێدڤی",
        reason_t_exam_questions: "رادەستکرنا پرسیارێن ئەزموونان",
        reason_t_lesson_plan: "پلانا وانەیێ",
        reason_t_class_management: "رێڤەبرنا پۆلێ",
        reason_t_parent_meeting: "دیدار دگەل سمیانان",
        reason_t_training: "خولا راهێنانێ",
        reason_t_activity_supervision: "سەرپەرشتیا چالاکیەکێ",
        reason_t_student_issue: "کێشەیا قوتابییەکێ",
        reason_t_excellent_performance: "ئاستێ نایاب د وانەگۆتنێ دا",
        reason_t_leave_early: "دەرکەفتنا زوو",
        reason_t_schedule_change: "گوهۆڕین د خشتەیێ وانەیان دا",
        reason_t_supplies: "کێماسی د پێداویستیان دا",
        reason_t_technology: "بکارئینانا ئامرازێن فێرکرنێ",
        reason_t_cooperation: "هەڤکاریکرن دگەل هەڤالان",
        reason_t_committee: "کۆمبوونا کۆمیتەیێ",
        reason_t_celebration: "ئاهەنگا قوتابخانێ",
        reason_t_vacation_approval: "پەسەندکرنا دەستویریێ",
        reason_t_vacation_rejection: "رەتکرنا دەستویریێ",
        reason_t_evaluation: "هەلسەنگاندنا ئاستی",
        reason_t_warning: "تێبینی و هۆشداری",
        reason_t_emergency: "رەوشا ژنیشکێڤە",

        // --- Modals & Buttons ---
        btn_manage_students: "رێڤەبرنا قوتابییان",
        btn_bulk_select: "دیارکرنا ب کۆمەل",
        modal_manage_title: "رێڤەبرنا قوتابییان",
        tab_add_single: "زێدەکرنا ئێک قوتابی",
        tab_add_bulk: "زێدەکرنا ب کۆمەل (Excel)",
        tab_add_single_teacher: "زێدەکرنا ئێک مامۆستا",
        tab_add_bulk_teacher: "زێدەکرنا ب کۆمەل (Excel)",
        title_saved_teachers: "مامۆستایێن پاشەکەوتکری:",
        hint_excel_teacher: "پێزانینێن مامۆستایان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، ژمارە)",
        btn_save: "پاشەکەوتکرن",
        hint_excel: "پێزانینێن قوتابییان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، پۆل، هۆبە، ژمارە)",
        btn_save_bulk: "پاشەکەوتکرنا کۆمەڵێ",
        title_saved_students: "قوتابیێن پاشەکەوتکری:",
        th_name: "ناڤ",
        th_class: "پۆل",
        th_section: "هۆبە",
        th_number: "ژمارە",
        th_action: "کردار",
        modal_bulk_title: "دیارکرنا کۆمەلا قوتابییان",
        modal_reason_title: "ئەگەرێ ئاگەهداریێ هەلبژێرە",
        ph_search: "ل قوتابی بگەڕە...",
        btn_confirm: "پەسەندکرن",
        modal_queue_title: "فرێکرنا ب کۆمەل",
        btn_delete_all: "سڕینا هەمیان",
        btn_delete_selected: "سڕینا یێن دیارکری",
        msg_confirm_delete_all: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت هەمی قوتابییان ژێ ببەی؟",
        msg_confirm_delete_selected: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤان {count} قوتابییان ژێ ببەی؟",
        msg_confirm_delete_single: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤی قوتابیی ژێ ببەی؟",

        preview_title: "<i class='fa-regular fa-eye'></i> پێشخاندنا نامەیێ",
        wa_name: "سمیانێ قوتابی",
        wa_teacher_name: "مامۆستا",
        wa_status: "ئۆنلاینە",
        preview_placeholder: "هیڤیدارین پێزانینێن قوتابیی بنڤیسە دا کو نامەیێ ل ڤێرێ ببینی...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> فرێکرن ب واتسئاپێ",

        // Auth
        auth_login_title: "<i class='fa-solid fa-right-to-bracket'></i> چوونەژوور",
        lbl_login_user: "<i class='fa-solid fa-envelope'></i> ئیمەیل یان ژمارەیا تەلەفۆنێ",
        ph_login_user: "ئیمەیل یان ژمارەیێ بنڤیسە",
        lbl_login_pass: "<i class='fa-solid fa-lock'></i> پەیڤا دەربازبوونێ",
        ph_login_pass: "پەیڤا دەربازبوونێ بنڤیسە",
        btn_login: "چوونەژوور",
        txt_no_account: "تە هەژمار نینە؟",
        link_create_account: "دروستکرنا هەژمارەکا نوی",
        auth_register_title: "<i class='fa-solid fa-user-plus'></i> دروستکرنا هەژمارێ",
        lbl_first_name: "ناڤێ ئێکێ",
        ph_first_name: "ناڤ",
        lbl_last_name: "ناڤێ مالباتێ",
        ph_last_name: "ناڤێ مالباتێ",
        lbl_reg_contact: "<i class='fa-solid fa-phone'></i> ژمارەیا تەلەفۆنێ یان ئیمەیل",
        ph_reg_contact: "ژمارە یان ئیمەیل بنڤیسە",
        lbl_account_type: "<i class='fa-solid fa-user-tie'></i> جۆرێ هەژمارێ",
        role_teacher: "مامۆستا",
        role_admin: "رێڤەبەر",
        lbl_reg_pass: "پەیڤا دەربازبوونێ",
        ph_reg_pass: "پەیڤا دەربازبوونێ",
        lbl_confirm_pass: "پشتڕاستکرنا پەیڤا دەربازبوونێ",
        ph_confirm_pass: "پشتڕاستکرنا پەیڤا دەربازبوونێ",
        btn_register: "دروستکرنا هەژمارێ",
        txt_have_account: "تە هەژمار یا هەی؟",
        link_login: "چوونەژوور",

        // School & Teacher Invite
        lbl_school_name: "<i class='fa-solid fa-school'></i> ناڤێ قوتابخانێ",
        ph_school_name: "ناڤێ قوتابخانا خۆ بنڤیسە",
        btn_search_invite_teachers: "داخازکرنا مامۆستایان",
        modal_search_teachers_title: "<i class='fa-solid fa-user-plus'></i> لێگەڕیان ل مامۆستایان و داخازکرنا وان",
        ph_search_teacher: "ل مامۆستایی بگەڕە ب ناڤ، ژمارە، یان قوتابخانە...",
        lbl_my_school_badge: "قوتابخانە:",
        badge_joined: "پشکدار و پەیوەستکری",
        badge_not_invited: "نەهاتیە داخازکرن",
        btn_invite_share: "داخازکرن و پشکداریکرنا قوتابییان",
        btn_unshare_teacher: "هەلوەشاندنا پشکداریێ",
        btn_send_wa_invite: "فرێکرنا داخازیێ ب واتسئاپێ",
        tab_search_teachers: "لێگەڕیان ل مامۆستایان",
        tab_my_school_teachers: "مامۆستایێن قوتابخانا من",
        msg_invite_success: "داخازنامە هاتە فرێکرن و داتایا قوتابییان هاتە پشکداریکرن ب سەرکەفتی!",
        msg_unshare_success: "پشکداریکرنا داتایا قوتابییان هاتە هەلوەشاندن بۆ ڤی مامۆستایی.",
        msg_no_teachers_found: "چ مامۆستا نەهاتنە دیتن ل دیڤ ڤی ناڤی.",
        lbl_teacher_contact: "ژمارەیا تەلەفۆنێ:",
        lbl_teacher_school: "قوتابخانا تۆمارکری:",
        lbl_status: "رەوش:",
        tag_shared_students: "داتایا پشکداریکری یا قوتابییان یا کارایە",
        btn_logout: "دەرکەفتن",
        btn_notifications: "ئاگەهداری",
        modal_invitations_title: "<i class='fa-solid fa-bell'></i> داخازنامەیێن قوتابخانەیان و پشکداریکرنا قوتابییان",
        btn_accept_invite: "قەبوولکرن و پشکداری",
        btn_reject_invite: "ڕەتکرن",
        badge_pending: "ل هیڤیێ",
        badge_accepted: "قەبوولکری و پشکدار",
        badge_rejected: "ڕەتکری",
        msg_no_invitations: "چ داخازنامەیێن نوی نینن نوکە.",
        txt_invited_by: "داخازنامە ژ لایێ رێڤەبەری:",
        txt_school_shared: "قوتابخانە:",
        msg_invite_accepted: "داخازی هاتە قەبوولکرن ب سەرکەفتی! داتایا قوتابییان هاتە بەردەستکرن.",
        msg_invite_rejected: "داخازی هاتە ڕەتکرن."
    },
    ckb: {
        title: "پلاتفۆرمی ئاگادارییەکانی قوتابخانە",
        subtitle: "بە ئاسانی نامەکانی واتسئەپ بۆ دایک و باوکی قوتابیان ئامادە بکە و بنێرە",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> ناوی قوتابی",
        ph_student_name: "ناوی سیانیی قوتابی بنووسە",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> پۆل",
        ph_student_class: "نموونە: حەوتەمی بنەڕەتی",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> بەش / شۆبە",
        ph_student_section: "نموونە: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> ژمارەی واتسئەپی بەخێوکەر",
        ph_parent_number: "نموونە: +9647XXXXXXXXX",
        hint_parent_number: "تکایە ژمارەکە لەگەڵ کۆدی وڵات بنووسە (وەک +964 بۆ عێراق)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> بەرواری ئامادەبوون",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> کاتی ئامادەبوون",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> هۆکاری ئاگاداری (یەکێکیان هەڵبژێرە)",
        reason_absence: "غیاب و نەهاتنی زۆر",
        reason_badBehavior: "ڕەفتاری نەشیاو",
        reason_lowGrades: "نمرەی نزم",
        reason_goodBehavior: "ڕەفتاری باش و شایستە",
        reason_highGrades: "نمرەی بەرز و نایاب",
        reason_fight: "شەڕکردن لە قوتابخانە",
        reason_reward: "پاداشت / ڕێزلێنان",
        reason_meeting: "بانگهێشت بۆ کۆبوونەوە",
        reason_late: "دواکەوتنی بەیانیان",
        reason_homework: "ئەنجامنەدانی ئەرکی ماڵەوە",
        reason_phone: "هێنانی مۆبایل",
        reason_uniform: "پابەندنەبوون بە جلوبەرگ",
        reason_cheating: "فێڵکردن لە تاقیکردنەوە",
        reason_vandalism: "تێکدانی کەلوپەلی قوتابخانە",
        reason_truancy: "ڕاکردن لە قوتابخانە",
        reason_books: "نەهێنانی کتێب و دەفتەر",
        reason_bullying: "توندوتیژی و گێچەڵپێکردن",
        reason_sleeping: "خەوتن لە پۆلدا",
        reason_hygiene: "پاکوخاوێنی کەسی",
        reason_profanity: "بەکارهێنانی قسەی نەشیاو",
        reason_smoking: "جگەرەکێشان",
        reason_leave_early: "چوونەدەرەوەی پێشوەختە",
        reason_participation: "بەشدارینەکردن لە وانە",
        reason_forbidden: "هێنانی شتی قەدەغەکراو",
        reason_health: "تێکچوونی باری تەندروستی",
        reason_trip: "گەشتی زانستی و فێرکاری",
        reason_fees: "قیستی قوتابخانە",
        reason_parent_council: "ئەنجومەنی دایک و باوکان",
        reason_exam_schedule: "خشتەی تاقیکردنەوەکان",
        reason_document_missing: "کەموکوڕی لە بەڵگەنامەکان",
        reason_excellent_project: "پڕۆژەی نایاب و داهێنەرانە",
        reason_activity: "بەشداری لە چالاکیی قوتابخانە",
        reason_late_pickup: "دواکەوتن لە بردنەوەی قوتابی",
        reason_bus_issue: "کێشەی هێڵی گواستنەوە (پاس)",
        reason_forgot_id: "نەبەستنی باجی قوتابخانە",
        reason_disrespect_teacher: "ڕێزنەگرتن لە مامۆستا",
        reason_lack_focus: "کەمیی سەرنجدان و بێئاگایی",
        reason_eating_in_class: "خواردن لە کاتی وانەدا",
        reason_chewing_gum: "جوینی بنێشت لە پۆلدا",
        reason_failing_exam: "دەرنەچوون لە تاقیکردنەوەدا",
        reason_damaging_books: "دڕاندن و تێکدانی کتێب",
        reason_makeup_accessories: "مکیاج و کەرەستەی نەشیاو",
        reason_hallway_noise: "دروستکردنی ژاوەژاو لە ڕاڕەوەکاندا",
        reason_leave_class_no_permission: "چوونەدەرەوە لە پۆل بێ مۆڵەت",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> بەشی قوتابیان",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> ئاگادارکردنەوەی مامۆستا",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> ناوی مامۆستا",
        ph_teacher_name: "ناوی سیانیی مامۆستا بنووسە",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> مادەی خوێندن / وانە",
        ph_teacher_subject: "نموونە: بیرکاری",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> ژمارەی تەلەفۆنی مامۆستا",
        ph_teacher_number: "نموونە: +9647XXXXXXXXX",
        btn_manage_teachers: "بەڕێوەبردنی مامۆستایان",
        modal_manage_teachers_title: "بەڕێوەبردنی مامۆستایان",
        reason_t_absence: "غیاب و نەهاتن بۆ دەوام",
        reason_t_late: "دواکەوتن لە کاتی دەوام",
        reason_t_meeting: "بانگهێشت بۆ کۆبوونەوەی کارگێڕی",
        reason_t_duty: "بیرهێنانەوەی سەرپەرشتی و نۆبەداری",
        reason_t_thanks: "سوپاس و پێزانین",
        reason_t_violation: "پێشێلکردنی ڕێنماییەکان",
        reason_t_grades: "ڕادەستکردنی نمرەکان",
        reason_t_notice: "ئاگادارییەکی گرنگ",
        reason_t_exam_questions: "ڕادەستکردنی پرسیاری تاقیکردنەوەکان",
        reason_t_lesson_plan: "پلانی ڕۆژانە / ساڵانە",
        reason_t_class_management: "بەڕێوەبردنی پۆل",
        reason_t_parent_meeting: "کۆبوونەوە لەگەڵ دایک و باوکان",
        reason_t_training: "خولی ڕاهێنان و پەرەپێدان",
        reason_t_activity_supervision: "سەرپەرشتیکردنی چالاکی",
        reason_t_student_issue: "کێشەی تایبەت بە قوتابییەک",
        reason_t_excellent_performance: "ئاست و وانەوتنەوەی نایاب",
        reason_t_leave_early: "چوونەدەرەوەی پێشوەختە",
        reason_t_schedule_change: "گۆڕانکاری لە خشتەی وانەکاندا",
        reason_t_supplies: "کەمیی پێداویستییەکانی پۆل",
        reason_t_technology: "بەکارهێنانی هۆکارە تەکنەلۆژییەکان",
        reason_t_cooperation: "هاوکاری لەگەڵ هاوپیشەکان",
        reason_t_committee: "کۆبوونەوەی لێژنە",
        reason_t_celebration: "ئاهەنگی قوتابخانە",
        reason_t_vacation_approval: "پەسەندکردنی داواکاریی مۆڵەت",
        reason_t_vacation_rejection: "ڕەتکردنەوەی داواکاریی مۆڵەت",
        reason_t_evaluation: "هەڵسەنگاندنی ئاستی کارکردن",
        reason_t_warning: "ئاگادارکردنەوە و سەرنجڕاکێشان",
        reason_t_emergency: "حاڵەتی کتوپڕ و بەپەلە",

        // --- Modals & Buttons ---
        btn_manage_students: "بەڕێوەبردنی قوتابیان",
        btn_bulk_select: "دیاریکردنی بەکۆمەڵ",
        modal_manage_title: "بەڕێوەبردنی قوتابیان",
        tab_add_single: "زیادکردنی یەک قوتابی",
        tab_add_bulk: "زیادکردنی بەکۆمەڵ (Excel)",
        tab_add_single_teacher: "زیادکردنی یەک مامۆستا",
        tab_add_bulk_teacher: "زیادکردنی بەکۆمەڵ (Excel)",
        title_saved_teachers: "مامۆستا تۆمارکراوەکان:",
        hint_excel_teacher: "داتای مامۆستایان لە ئێکسڵ کۆپی بکە و لێرە دایبنێ. (ناو، ژمارە)",
        btn_save: "پاشەکەوتکردن",
        hint_excel: "داتای قوتابیان لە ئێکسڵ کۆپی بکە و لێرە دایبنێ. (ناو، پۆل، بەش، ژمارە)",
        btn_save_bulk: "پاشەکەوتکردنی کۆمەڵە",
        title_saved_students: "قوتابییە تۆمارکراوەکان:",
        th_name: "ناو",
        th_class: "پۆل",
        th_section: "بەش / شۆبە",
        th_number: "ژمارە",
        th_action: "کردار",
        modal_bulk_title: "دیاریکردنی کۆمەڵێک قوتابی",
        modal_reason_title: "هۆکار هەڵبژێرە",
        ph_search: "بگەڕێ بەدوای قوتابیدا...",
        btn_confirm: "پشتڕاستکردنەوە",
        modal_queue_title: "ناردنی بەکۆمەڵ لە جێبەجێکردندایە",
        btn_delete_all: "سڕینەوەی هەمووی",
        btn_delete_selected: "سڕینەوەی دیاریکراوەکان",
        msg_confirm_delete_all: "ئایا دڵنیایت لە سڕینەوەی هەموو قوتابیان؟",
        msg_confirm_delete_selected: "ئایا دڵنیایت لە سڕینەوەی {count} قوتابی؟",
        msg_confirm_delete_single: "ئایا دڵنیایت لە سڕینەوەی ئەم قوتابییە؟",

        preview_title: "<i class='fa-regular fa-eye'></i> پێشبینینی پەیام",
        wa_name: "بەخێوکەری قوتابی",
        wa_teacher_name: "مامۆستا",
        wa_status: "ئۆنلاینە",
        preview_placeholder: "تکایە زانیاریی قوتابی بنووسە بۆ بینینی پێشبینینی پەیامەکە لێرە...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> ناردن لەڕێگەی واتسئەپەوە",

        // Auth
        auth_login_title: "<i class='fa-solid fa-right-to-bracket'></i> چوونەژوورەوە",
        lbl_login_user: "<i class='fa-solid fa-envelope'></i> ئیمەیڵ یان ژمارەی مۆبایل",
        ph_login_user: "ئیمەیڵ یان ژمارەی مۆبایل بنووسە",
        lbl_login_pass: "<i class='fa-solid fa-lock'></i> تێپەڕوشە",
        ph_login_pass: "تێپەڕوشە بنووسە",
        btn_login: "چوونەژوورەوە",
        txt_no_account: "هەژمارت نییە؟",
        link_create_account: "دروستکردنی هەژماری نوێ",
        auth_register_title: "<i class='fa-solid fa-user-plus'></i> دروستکردنی هەژمار",
        lbl_first_name: "ناوی یەکەم",
        ph_first_name: "ناو",
        lbl_last_name: "ناوی بنەماڵە",
        ph_last_name: "ناوی بنەماڵە",
        lbl_reg_contact: "<i class='fa-solid fa-phone'></i> ژمارەی تەلەفۆن یان ئیمەیڵ",
        ph_reg_contact: "ژمارە یان ئیمەیڵ بنووسە",
        lbl_account_type: "<i class='fa-solid fa-user-tie'></i> جۆری هەژمار",
        role_teacher: "مامۆستا",
        role_admin: "بەڕێوەبەر",
        lbl_reg_pass: "تێپەڕوشە",
        ph_reg_pass: "تێپەڕوشە",
        lbl_confirm_pass: "دووپاتکردنەوەی تێپەڕوشە",
        ph_confirm_pass: "دووپاتکردنەوەی تێپەڕوشە",
        btn_register: "دروستکردنی هەژمار",
        txt_have_account: "هەژمارت هەیە پێشتر؟",
        link_login: "چوونەژوورەوە",

        // School & Teacher Invite
        lbl_school_name: "<i class='fa-solid fa-school'></i> ناوی قوتابخانە",
        ph_school_name: "ناوی قوتابخانەکەت بنووسە",
        btn_search_invite_teachers: "بانگهێشتی مامۆستایان",
        modal_search_teachers_title: "<i class='fa-solid fa-user-plus'></i> گەڕان بەدوای مامۆستایاندا و بانگهێشتکردنیان",
        ph_search_teacher: "بەپێی ناوی مامۆستا، ژمارە، یان قوتابخانە بگەڕێ...",
        lbl_my_school_badge: "قوتابخانە:",
        badge_joined: "بەشدار و پەیوەستکراو",
        badge_not_invited: "بانگهێشت نەکراوە",
        btn_invite_share: "بانگهێشت و هاوبەشکردنی قوتابیان",
        btn_unshare_teacher: "هەڵوەشاندنەوەی هاوبەشی",
        btn_send_wa_invite: "ناردنی بانگهێشتنامە بە واتسئەپ",
        tab_search_teachers: "گەڕان بەدوای مامۆستایاندا",
        tab_my_school_teachers: "مامۆستایانی قوتابخانەکەم",
        msg_invite_success: "بانگهێشتنامە نێردرا و داتای قوتابیان بە سەرکەوتوویی لەگەڵ مامۆستا هاوبەش کرا!",
        msg_unshare_success: "هاوبەشکردنی داتای قوتابیان لەگەڵ ئەم مامۆستایە هەڵوەشێندرایەوە.",
        msg_no_teachers_found: "هیچ مامۆستایەک بەپێی ئەم گەڕانە نەدۆزرایەوە.",
        lbl_teacher_contact: "ژمارەی تەلەفۆن:",
        lbl_teacher_school: "قوتابخانەی تۆمارکراو:",
        lbl_status: "دۆخ:",
        tag_shared_students: "داتای هاوبەشکراوی قوتابیان چالاکە",
        btn_logout: "دەرچوون",
        btn_notifications: "ئاگادارییەکان",
        modal_invitations_title: "<i class='fa-solid fa-bell'></i> بانگهێشتنامەی قوتابخانەکان و هاوبەشکردنی قوتابیان",
        btn_accept_invite: "قبووڵکردن و هاوبەشی",
        btn_reject_invite: "ڕەتکردنەوە",
        badge_pending: "چاوەڕوانکراو",
        badge_accepted: "قبووڵکراو و پەیوەستکراو",
        badge_rejected: "ڕەتکراوە",
        msg_no_invitations: "هیچ بانگهێشتنامەیەکی نوێ نییە لە ئێستادا.",
        txt_invited_by: "بانگهێشت لەلایەن بەڕێوەبەر:",
        txt_school_shared: "قوتابخانە:",
        msg_invite_accepted: "بانگهێشتنامە بە سەرکەوتوویی قبووڵ کرا! داتای قوتابیان لە هەژمارەکەت بارکرا.",
        msg_invite_rejected: "بانگهێشتنامە ڕەتکرایەوە."
    },
    en: {
        title: "School Notification Platform",
        subtitle: "Easily prepare and send WhatsApp messages to parents",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> Student Name",
        ph_student_name: "Enter full student name",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> Grade",
        ph_student_class: "e.g.: 7th Grade",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> Section",
        ph_student_section: "e.g.: A",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> Parent WhatsApp Number",
        ph_parent_number: "e.g.: +9647XXXXXXXXX",
        hint_parent_number: "Please enter number with country code (e.g. +964 for Iraq)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> Attendance Date",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> Attendance Time",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> Notification Reason (Select One)",
        reason_absence: "Frequent Absence",
        reason_badBehavior: "Bad Behavior",
        reason_lowGrades: "Low Grades",
        reason_goodBehavior: "Good Behavior",
        reason_highGrades: "High Grades",
        reason_fight: "Fighting at School",
        reason_reward: "Reward / Honor",
        reason_meeting: "Meeting Invitation",
        reason_late: "Late Arrival",
        reason_homework: "Missing Homework",
        reason_phone: "Brought Phone",
        reason_uniform: "Uniform Violation",
        reason_cheating: "Cheating in Exam",
        reason_vandalism: "Vandalism",
        reason_truancy: "Truancy / Escaping",
        reason_books: "Missing Books",
        reason_bullying: "Bullying",
        reason_sleeping: "Sleeping in Class",
        reason_hygiene: "Personal Hygiene",
        reason_profanity: "Using Profanity",
        reason_smoking: "Smoking",
        reason_leave_early: "Leaving Early",
        reason_participation: "No Participation",
        reason_forbidden: "Forbidden Items",
        reason_health: "Health Issue",
        reason_trip: "School Trip",
        reason_fees: "School Fees",
        reason_parent_council: "Parents Council",
        reason_exam_schedule: "Exam Schedule",
        reason_document_missing: "Missing Documents",
        reason_excellent_project: "Excellent Project",
        reason_activity: "School Activity Participation",
        reason_late_pickup: "Late Pickup",
        reason_bus_issue: "Transportation Issue",
        reason_forgot_id: "Forgot Student ID/Badge",
        reason_disrespect_teacher: "Disrespecting Teacher",
        reason_lack_focus: "Lack of Focus/Distraction",
        reason_eating_in_class: "Eating in Class",
        reason_chewing_gum: "Chewing Gum in Class",
        reason_failing_exam: "Failing an Exam",
        reason_damaging_books: "Damaging School Books",
        reason_makeup_accessories: "Prohibited Makeup/Accessories",
        reason_hallway_noise: "Making Noise in Hallways",
        reason_leave_class_no_permission: "Leaving Class Without Permission",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> Students Mode",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> Teacher Warning",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> Teacher Name",
        ph_teacher_name: "Enter full teacher name",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> Subject",
        ph_teacher_subject: "e.g., Mathematics",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> Teacher Phone Number",
        ph_teacher_number: "e.g., +9647XXXXXXXXX",
        btn_manage_teachers: "Manage Teachers",
        modal_manage_teachers_title: "Manage Teachers",
        reason_t_absence: "Absence",
        reason_t_late: "Late Arrival",
        reason_t_meeting: "Meeting Invitation",
        reason_t_duty: "Duty Reminder",
        reason_t_thanks: "Thanks & Appreciation",
        reason_t_violation: "Instruction Violation",
        reason_t_grades: "Grades Submission",
        reason_t_notice: "Important Notice",
        reason_t_exam_questions: "Exam Questions",
        reason_t_lesson_plan: "Lesson Plan",
        reason_t_class_management: "Class Management",
        reason_t_parent_meeting: "Parent Meeting",
        reason_t_training: "Training Course",
        reason_t_activity_supervision: "Activity Supervision",
        reason_t_student_issue: "Student Issue",
        reason_t_excellent_performance: "Excellent Performance",
        reason_t_leave_early: "Early Leave",
        reason_t_schedule_change: "Schedule Change",
        reason_t_supplies: "Supplies Shortage",
        reason_t_technology: "Use of Technology",
        reason_t_cooperation: "Peer Cooperation",
        reason_t_committee: "Committee Meeting",
        reason_t_celebration: "School Celebration",
        reason_t_vacation_approval: "Vacation Approval",
        reason_t_vacation_rejection: "Vacation Rejection",
        reason_t_evaluation: "Performance Evaluation",
        reason_t_warning: "Warning Notice",
        reason_t_emergency: "Emergency",

        // --- Modals & Buttons ---
        btn_manage_students: "Manage Students",
        btn_bulk_select: "Bulk Select",
        modal_manage_title: "Manage Students",
        tab_add_single: "Add Single Student",
        tab_add_bulk: "Add Bulk (Excel)",
        tab_add_single_teacher: "Add Single Teacher",
        tab_add_bulk_teacher: "Add Bulk (Excel)",
        title_saved_teachers: "Saved Teachers:",
        hint_excel_teacher: "Copy teacher data from Excel and paste here. (Name, Number)",
        btn_save: "Save",
        hint_excel: "Copy student data from Excel and paste here. (Name, Class, Section, Number)",
        btn_save_bulk: "Save Bulk",
        title_saved_students: "Saved Students:",
        th_name: "Name",
        th_class: "Class",
        th_section: "Section",
        th_number: "Number",
        th_action: "Action",
        modal_bulk_title: "Select Multiple Students",
        modal_reason_title: "Select Reason",
        ph_search: "Search for a student...",
        btn_confirm: "Confirm",
        modal_queue_title: "Sending Bulk Messages",
        btn_delete_all: "Delete All",
        btn_delete_selected: "Delete Selected",
        msg_confirm_delete_all: "Are you sure you want to delete all students?",
        msg_confirm_delete_selected: "Are you sure you want to delete {count} students?",
        msg_confirm_delete_single: "Are you sure you want to delete this student?",

        preview_title: "<i class='fa-regular fa-eye'></i> Message Preview",
        wa_name: "Parent",
        wa_teacher_name: "Teacher",
        wa_status: "online",
        preview_placeholder: "Please enter student details to see the preview here...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> Send via WhatsApp",

        // Auth
        auth_login_title: "<i class='fa-solid fa-right-to-bracket'></i> Sign In",
        lbl_login_user: "<i class='fa-solid fa-envelope'></i> Email or Phone Number",
        ph_login_user: "Enter email or phone",
        lbl_login_pass: "<i class='fa-solid fa-lock'></i> Password",
        ph_login_pass: "Enter password",
        btn_login: "Sign In",
        txt_no_account: "Don't have an account?",
        link_create_account: "Create New Account",
        auth_register_title: "<i class='fa-solid fa-user-plus'></i> Create Account",
        lbl_first_name: "First Name",
        ph_first_name: "First name",
        lbl_last_name: "Last Name",
        ph_last_name: "Last name",
        lbl_reg_contact: "<i class='fa-solid fa-phone'></i> Phone Number or Email",
        ph_reg_contact: "Enter phone or email",
        lbl_account_type: "<i class='fa-solid fa-user-tie'></i> Account Type",
        role_teacher: "Teacher",
        role_admin: "Admin",
        lbl_reg_pass: "Password",
        ph_reg_pass: "Password",
        lbl_confirm_pass: "Confirm Password",
        ph_confirm_pass: "Confirm password",
        btn_register: "Register",
        txt_have_account: "Already have an account?",
        link_login: "Sign In",

        // School & Teacher Invite
        lbl_school_name: "<i class='fa-solid fa-school'></i> School Name",
        ph_school_name: "Enter your school name",
        btn_search_invite_teachers: "Search & Invite Teachers",
        modal_search_teachers_title: "<i class='fa-solid fa-user-plus'></i> Search & Invite Teachers to School",
        ph_search_teacher: "Search by teacher name, phone, or school...",
        lbl_my_school_badge: "School:",
        badge_joined: "Joined & Shared",
        badge_not_invited: "Not Invited",
        btn_invite_share: "Invite & Share Students",
        btn_unshare_teacher: "Remove Access",
        btn_send_wa_invite: "Send WhatsApp Invite",
        tab_search_teachers: "Search Teachers",
        tab_my_school_teachers: "My School Teachers",
        msg_invite_success: "Teacher invited and school students shared successfully!",
        msg_unshare_success: "Student data sharing removed for this teacher.",
        msg_no_teachers_found: "No teachers found matching your search.",
        lbl_teacher_contact: "Phone Number:",
        lbl_teacher_school: "Registered School:",
        lbl_status: "Status:",
        tag_shared_students: "Shared Students Data Active",
        btn_logout: "Logout",
        btn_notifications: "Notifications",
        modal_invitations_title: "<i class='fa-solid fa-bell'></i> School Invitations & Student Sharing",
        btn_accept_invite: "Accept & Share Students",
        btn_reject_invite: "Reject",
        badge_pending: "Pending",
        badge_accepted: "Accepted",
        badge_rejected: "Rejected",
        msg_no_invitations: "No pending invitations at this time.",
        txt_invited_by: "Invited by Principal:",
        txt_school_shared: "School:",
        msg_invite_accepted: "Invitation accepted! School students data is now active in your account.",
        msg_invite_rejected: "Invitation was rejected."
    }
};

const getLocalizedMessageTemplate = (lang, reason, studentName, studentClass, studentSection, date, time) => {
    const isKu = lang === 'ku';
    const isCkb = lang === 'ckb' || lang === 'sorani';
    const isEn = lang === 'en';
    const isTeacher = reason && reason.startsWith('t_');
    
    const tFormattedDate = date ? date : (isKu ? "[رێکەفت]" : (isCkb ? "[بەروار]" : (isEn ? "[Date]" : "[التاريخ]")));
    const tFormattedTime = time ? time : (isKu ? "[دەم]" : (isCkb ? "[کاتژمێر]" : (isEn ? "[Time]" : "[الوقت]")));
    
    if (isTeacher) {
        let tName = studentName.trim() ? `*${studentName.trim()}*` : (isKu ? "[ناڤێ مامۆستای]" : (isCkb ? "[ناوی مامۆستا]" : (isEn ? "[Teacher Name]" : "[اسم المعلم]")));
        let tSubject = studentClass.trim() ? studentClass.trim() : (isKu ? "[بابەت]" : (isCkb ? "[مادەی وانە]" : (isEn ? "[Subject]" : "[المادة]")));
        let msg = "";
        
        if (isKu) {
            msg = `سلاڤ،\nکارگێڕیا قوتابخانێ دڤێت ب رێیا ڤێ نامەیێ پەیوەندیێ ب هەوە بکەت.\n`;
            msg += `ئەم حەز دکەین ڤی بابەتی دگەل مامۆستا: ${tName} بەحس بکەین.\n`;
            msg += `بابەتێ وانەیێ: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *بابەت: ئاگەهداری ل دۆر نەئامادەبوونا هەوە ژ دەوامێ*\nتکایە کارگێڕیێ ئاگەهدار بکەن ل دۆر ئەگەرێ نەئامادەبوونا هەوە ل رێکەفتی ${tFormattedDate}. دیسان هیڤیدارین مۆلەتا فەرمی پێشکێش بکەن ژبۆ رێکخستنا کارێ رۆژانە یێ قوتابخانێ.`; break;
                case 't_late': msg += `⏰ *بابەت: ئاگەهداری ل دۆر درەنگ گەهشتن بۆ دەوامی*\nمە تێبینی کریە کو هوین درەنگ گەهشتینە دەوامێ یان وانەیێن خۆ یێن دەستپێکێ. پابەندبوون ب دەمژمێرێن دەوامێ گەلەک یا گرنگە بۆ سەقامگیریا پرۆسێسا فێرکرنێ.`; break;
                case 't_meeting': msg += `🤝 *بابەت: داخازنامە بۆ ئامادەبوون د کۆمبوونا کارگێڕیێ دا*\nرێڤەبەریا قوتابخانێ ب رێزڤە هەوە داخاز دکەت بۆ ئامادەبوون د کۆمبوونا کارگێڕیێ دا ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} بۆ بەحسکرنا چەندین بابەتێن گرنگ.`; break;
                case 't_duty': msg += `📋 *بابەت: بیرئینان ب ئەرکێ چاڤدێری و مناوبێ*\nئەم هەوە بیر دئینین کو هوین بەرپرسن ژ ئەرکێ چاڤدێریێ ل رێکەفتی ${tFormattedDate}. هیڤیدارین ل دەمێ خۆ یێ دیارکری ئامادە بن بۆ پاراستنا نەزم و ئەولەهیا قوتابخانێ.`; break;
                case 't_thanks': msg += `🌟 *بابەت: سوپاس و پێزانین ژ لایێ رێڤەبەریێ ڤە*\nدەستخۆشیێ ل هەوە دکەین بۆ ماندیبوون و ئاستێ نایاب یێ هوین پێشکێش دکەن. کارێ هەوە یێ دلسۆزانە جهێ شانازی و پێزانینا مە هەمیانە.`; break;
                case 't_violation': msg += `⚠️ *بابەت: ئاگەهداری لسەر پێشێلکرنا رێنمایێن کارگێڕی*\nئەڤ نامەیە هۆشداریەکە ل دۆر پێشێلکرنا رێنمایێن فەرمی. هیڤیدارین پابەندیێ ب بڕیار و یاسایێن پەروەردەیی بکەن بۆ پاراستنا بەرژەوەندیا گشتی.`; break;
                case 't_grades': msg += `📊 *بابەت: رادەستکرنا نمرە و هەلسەنگاندنان*\nهیڤیدارین نمرە و راپۆرتێن هەلسەنگاندنا قوتابییان ب زووترین دەم و بەری رێکەفتی ${tFormattedDate} رادەستی کارگێڕیێ بکەن بۆ بجهئینانا مامەلەیان.`; break;
                case 't_notice': msg += `📢 *بابەت: ئاگەهداریەکا فەرمی و گرنگ*\nئاگەهداریەکا گرنگ یا پەروەردەیی و فەرمی هەیە، هیڤیدارین سەرەدانا ئۆفیسا کارگێڕیێ بکەن بۆ وەرگرتنا زانیاریێن پێدڤی.`; break;
                case 't_exam_questions': msg += `📝 *بابەت: رادەستکرنا پرسیارێن ئەزموونان*\nتکایە پرسیارێن ئەزموونێ یێن مادێ خۆ دگەل بەرسڤا نموونەیی رادەست بکەن بەری رێکەفتی ${tFormattedDate}.`; break;
                case 't_lesson_plan': msg += `📖 *بابەت: رێکخستن و تەواوکرنا پلانا وانەیێ*\nتکایە دەفتەرا پلانا وانەیێ یا رۆژانە و سالانە پێشکێشی سەرپەرشت یان کارگێڕیێ بکەن بۆ پێداچوونێ.`; break;
                case 't_class_management': msg += `🎯 *بابەت: تێبینی لسەر رێکخستن و رێڤەبرنا پۆلێ*\nمە دڤێت هندەک رێنمایان بەحس بکەین بۆ باشترکرنا کۆنترۆل و رێڤەبرنا پۆلێ د دەمێ وانەگۆتنێ دا.`; break;
                case 't_parent_meeting': msg += `👨‍👩‍👧 *بابەت: ئامادەبوون د دیدارا سمیانان دا*\nدیدارەکا تایبەت هاتیە رێکخستن دگەل سمیانێن قوتابییان ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}، هیڤیدارین ئامادە بن.`; break;
                case 't_training': msg += `🎓 *بابەت: پشکداریکرن د خولا راهێنانێ دا*\nخولەکا پێشخستن و راهێنانێ یا هاتیە رێکخستن، ئامادەبوونا هەوە یا پێدڤیە ل رێکەفتی ${tFormattedDate}.`; break;
                case 't_activity_supervision': msg += `🏆 *بابەت: راسپاردن ب سەرپەرشتیکردنا چالاکیەکێ*\nهوین هاتینە دەستنیشانکرن بۆ سەرپەرشتیا چالاکیا قوتابخانێ ل رێکەفتی ${tFormattedDate}.`; break;
                case 't_student_issue': msg += `👤 *بابەت: بەحسکرنا رەوشا قوتابییەکێ*\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${tFormattedDate} بۆ بەحسکرنا رەوشا قوتابییەکی ژ لایێ زانستی یان رەوشتی ڤە.`; break;
                case 't_excellent_performance': msg += `👏 *بابەت: دەستخۆشی بۆ ئاستێ نایاب یێ وانەگۆتنێ*\nکارگێڕی ب دلگەرمی دەستخۆشیێ ل هەوە دکەت بۆ پێشکێشکرنا وانەیێن نموونەیی و سەرکەفتی.`; break;
                case 't_leave_early': msg += `🚪 *بابەت: تێبینی لسەر دەرکەفتنا زوو بەری دەمێ فەرمی*\nدەرکەفتن بەری دووماهی هاتنا دەوامێ بێی وەرگرتنا دەستویریێ جهێ تێبینیێ یە، تکایە پێگیریێ بکەن.`; break;
                case 't_schedule_change': msg += `📅 *بابەت: ئاگەهداری ب گوهۆڕینێن د خشتەیێ وانەیان دا*\nهندەک گوهۆڕین د خشتەیێ وانەیان دا هاتینە کرن، هیڤیدارین خشتەیێ نوی وەربگرن ژ کارگێڕیێ.`; break;
                case 't_supplies': msg += `📦 *بابەت: پێداویستیێن وانەگۆتنێ*\nداخوازیا هەوە یا دابینکرنا پێداویستیان گەهشتیە مە و کار لسەر دابینکرنا وان دهێتە کرن ب زووترین دەم.`; break;
                case 't_technology': msg += `💻 *بابەت: هاندان بۆ بکارئینانا ئامرازێن تەکنەلۆژی*\nهیڤیدارین پتر مفا ژ ئامرازێن هۆشمەند و شاشەیان وەربگرن د دەمێ وانەگۆتنێ دا بۆ باشترکرنا فێرکرنێ.`; break;
                case 't_cooperation': msg += `🤝 *بابەت: سوپاس بۆ گیانێ هەڤکاریێ*\nسوپاس بۆ هاریکاری و کارکرنا ب گیانێ تیمێ دگەل مامۆستا و کارمەندێن دی یێن قوتابخانێ.`; break;
                case 't_committee': msg += `👥 *بابەت: کۆمبوونا لێژنەیا قوتابخانێ*\nوەک ئەندامێ لێژنەیێ، داخازکری نە بۆ کۆمبوونێ ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *بابەت: پشکداری د رێکخستنا ئاهەنگێ دا*\nهیڤیدارین پشکدار بن د رێکخستن و سەرپەرشتیا ئاهەنگا قوتابخانێ دا ل رێکەفتی ${tFormattedDate}.`; break;
                case 't_vacation_approval': msg += `✅ *بابەت: پەسەندکرنا داخوازیا مۆلەتێ*\nداخوازیا هەوە یا وەرگرتنا مۆلەتێ ب فەرمی هاتیە پەسەندکرن ژ لایێ کارگێڕیێ ڤە.`; break;
                case 't_vacation_rejection': msg += `❌ *بابەت: رەتکرنا داخوازیا مۆلەتێ*\nژبەر پێدڤیا کاری و قەرەبالغیا وانەیان، نەکر داخوازیا هەوە یا مۆلەتێ بهێتە پەسەندکرن د ڤی دەمی دا.`; break;
                case 't_evaluation': msg += `📊 *بابەت: ئەنجامێ هەلسەنگاندنا سالانە*\nراپۆرتا هەلسەنگاندنا ئاستێ هەوە ئامادەیە، هیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ دیتنا ئەنجامان.`; break;
                case 't_warning': msg += `⚠️ *بابەت: هۆشداری و تێبینیا فەرمی*\nئەڤە هۆشداریەکا فەرمی یە لسەر بابەتەکێ تایبەت ب دەوامی، هیڤیدارین ب زووترین دەم راستڤەکردن بهێتە کرن.`; break;
                case 't_emergency': msg += `🚨 *بابەت: رەوشا ژنیشکێڤە و گەلەک بەپەلە*\nتکایە دەستبەجێ پەیوەندیێ ب کارگێڕیێ بکەن یان ئامادەبن ژبەر روودانا رەوشەکا کتوپڕ و گرنگ.`; break;
                default: msg += `ئاگەهداریەکا گشتی ژ کارگێڕیا قوتابخانێ بۆ مامۆستایێ بەڕێز.`;
            }
            msg += `\n\nدگەل رێز و سڵاڤان،\n*کارگێڕیا قوتابخانێ*`;
        } else if (isCkb) {
            msg = `سڵاو،\nکارگێڕیی قوتابخانە دەخوازێت لەڕێگەی ئەم پەیامەوە پەیوەندیتان پێوە بکات.\n`;
            msg += `ئێمە دەمانەوێت ئەم بابەتە لەگەڵ مامۆستا: ${tName} تاوتوێ بکەین.\n`;
            msg += `بابەتی وانە: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *بابەت: ئاگاداری سەبارەت بە ئامادەنەبوونی بەڕێزتان لە دەوام*\nتکایە کارگێڕیی قوتابخانە ئاگادار بکەنەوە لە هۆکاری نەهاتنتان لە بەرواری ${tFormattedDate}. هەروەها داواکارین مۆڵەتی فەرمی پێشکەش بکەن بۆ ڕێکخستنی دەوامی ڕۆژانە.`; break;
                case 't_late': msg += `⏰ *بابەت: ئاگاداری سەبارەت بە دواکەوتن لە کاتی دەوام*\nتێبینیمان کردووە کە بەڕێزتان درەنگ گەیشتوونەتە دەوام یان وانەکانی سەرەتاتان. پابەندبوون بە کاتی دەوام زۆر گرنگە بۆ پاراستنی ڕێکخستنی پرۆسەی پەروەردە و فێرکردن.`; break;
                case 't_meeting': msg += `🤝 *بابەت: بانگهێشتنامە بۆ ئامادەبوون لە کۆبوونەوەی کارگێڕی*\nبەڕێوەبەرایەتیی قوتابخانە بەڕێزەوە داواتان لێ دەکات بۆ ئامادەبوون لە کۆبوونەوەی کارگێڕی لە بەرواری ${tFormattedDate} کاتژمێر ${tFormattedTime} بە مەبەستی تاوتوێکردنی چەند پرسێکی گرنگ.`; break;
                case 't_duty': msg += `📋 *بابەت: بیرهێنانەوەی ئەرکی سەرپەرشتی و نۆبەداری (مناوبە)*\nبەڕێزتان بیردەخەینەوە کە ئەرکی نۆبەداری و چاودێریکردنتان لەسەرە لە بەرواری ${tFormattedDate}. تکایە لە کاتی دیاریکراودا ئامادە بن بۆ پاراستنی نەزم و ئاسایشی قوتابخانە.`; break;
                case 't_thanks': msg += `🌟 *بابەت: سوپاس و پێزانین لە لایەن بەڕێوەبەرایەتییەوە*\nدەستخۆشییەکی گەرمتان لێ دەکەین بۆ ماندووبوون و ئەو ئاستە بەرز و نایابەی پێشکەشی دەکەن. کار و دڵسۆزیتان جێگەی شانازی و پێزانینی هەموومانە.`; break;
                case 't_violation': msg += `⚠️ *بابەت: ئاگاداری سەبارەت بە پێشێلکردنی ڕێنماییە کارگێڕییەکان*\nئەم پەیامە وەک ئاگادارکردنەوەیەکە سەبارەت بە ڕەچاونەکردنی هەندێک ڕێنمایی فەرمی. داواکارین پابەندی تەواو بن بە یاسا و ڕێساکانی پەروەردە بۆ بەرژەوەندیی گشتی.`; break;
                case 't_grades': msg += `📊 *بابەت: ڕادەستکردنی نمرە و هەڵسەنگاندنەکان*\nتکایە نمرە و ڕاپۆرتی هەڵسەنگاندنی قوتابیان بە زووترین کات و پێش بەرواری ${tFormattedDate} ڕادەستی کارگێڕی بکەن بۆ ڕاییکردنی مامەڵەکان.`; break;
                case 't_notice': msg += `📢 *بابەت: ئاگادارییەکی گرنگ و فەرمی*\nئاگادارییەکی پەروەردەیی گرنگ و پێویست هەیە، تکایە سەردانی ژووری کارگێڕی بکەن بۆ وەرگرتنی ڕێنمایی و زانیارییەکان.`; break;
                case 't_exam_questions': msg += `📝 *بابەت: ڕادەستکردنی پرسیارەکانی تاقیکردنەوە*\nتکایە پرسیارەکانی تاقیکردنەوەی وانەکەتان لەگەڵ وەڵامی نموونەیی پێش بەرواری ${tFormattedDate} ڕادەستی کارگێڕیی قوتابخانە بکەن.`; break;
                case 't_lesson_plan': msg += `📖 *بابەت: ڕێکخستن و تەواوکردنی پلانی وانە*\nتکایە دەفتەری پلانی ڕۆژانە و ساڵانەی وانەکەتان ئامادە بکەن و پێشکەشی کارگێڕی یان سەرپەرشتیاری بکەن بۆ پێداچوونەوە.`; break;
                case 't_class_management': msg += `🎯 *بابەت: تێبینی سەبارەت بە بەڕێوەبردن و کۆنترۆڵی پۆل*\nدەمانەوێت چەند سەرنج و ڕێنماییەک تاوتوێ بکەین بۆ باشترکردنی بەڕێوەبردنی پۆل و ڕەخساندنی ژینگەیەکی لەبارتر لە کاتی وانەدا.`; break;
                case 't_parent_meeting': msg += `👨‍👩‍👧 *بابەت: ئامادەبوون لە کۆبوونەوەی دایک و باوکان*\nکۆبوونەوەیەکی تایبەت لەگەڵ دایک و باوکی قوتابیان ڕێکخراوە لە بەرواری ${tFormattedDate} کاتژمێر ${tFormattedTime}، داواکارین ئامادە بن.`; break;
                case 't_training': msg += `🎓 *بابەت: بەشداریکردن لە خولی ڕاهێنان و پەرەپێدان*\nخولێکی ڕاهێنان و پەرەپێدانی تواناکان ڕێکخراوە، ئامادەبوونی بەڕێزتان پێویست و گرنگە لە بەرواری ${tFormattedDate}.`; break;
                case 't_activity_supervision': msg += `🏆 *بابەت: ڕاسپاردن بە سەرپەرشتیکردنی چالاکیی قوتابخانە*\nبەڕێزتان دەستنیشان کراون بۆ سەرپەرشتیکردن و سەرخستنی چالاکیی قوتابخانە لە بەرواری ${tFormattedDate}.`; break;
                case 't_student_issue': msg += `👤 *بابەت: تاوتوێکردنی باری تایبەتی قوتابییەک*\nداواکارین سەردانی کارگێڕی بکەن لە بەرواری ${tFormattedDate} بۆ تاوتوێکردنی دۆخی زانستی یان ڕەوشتیی قوتابییەک.`; break;
                case 't_excellent_performance': msg += `👏 *بابەت: دەستخۆشی بۆ وانەوتنەوە و ئاستی نایاب*\nکارگێڕیی قوتابخانە بەوپەڕی شانازییەوە دەستخۆشیتان لێ دەکات بۆ شێوازی وانەوتنەوەی نموونەیی و سەرکەوتووانەتان.`; break;
                case 't_leave_early': msg += `🚪 *بابەت: تێبینی سەبارەت بە چوونەدەرەوەی پێشوەختە*\nچوونەدەرەوە لە قوتابخانە پێش کۆتاییهاتنی دەوامی فەرمی بێ مۆڵەتی کارگێڕی جێگەی سەرنجە، تکایە پابەندی کاتی دەوام بن.`; break;
                case 't_schedule_change': msg += `📅 *بابەت: ئاگاداری سەبارەت بە گۆڕانکاری لە خشتەی وانەکاندا*\nچەند گۆڕانکارییەکی پێویست لە خشتەی هەفتانەی وانەکاندا کراوە، داواکارین خشتە نوێکراوەکە لە کارگێڕی وەربگرن.`; break;
                case 't_supplies': msg += `📦 *بابەت: پێداویستییەکانی وانەوتنەوە و کەرەستەی پۆل*\nداواکارییەکەتان بۆ دابینکردنی پێداویستییەکان بەدەستمان گەیشتووە و کار لەسەر دابینکردنیان دەکرێت لە زووترین کاتدا.`; break;
                case 't_technology': msg += `💻 *بابەت: هاندان بۆ بەکارهێنانی تەکنەلۆژیا و هۆکارەکانی فێرکردن*\nداواکارین زیاتر سوود لە شاشەی زیرەک و ئامرازە تەکنەلۆژییە بەردەستەکان وەربگرن لە کاتی پێشکەشکردنی وانەکاندا.`; break;
                case 't_cooperation': msg += `🤝 *بابەت: سوپاس بۆ گیانی هاوکاری و پێکەوەکارکردن*\nسوپاسی بێپایان بۆ ڕۆحی هاوکاری و هەماهەنگیی بەردەوامتان لەگەڵ هاوپیشەکانتان لە ستافی قوتابخانەدا.`; break;
                case 't_committee': msg += `👥 *بابەت: کۆبوونەوەی لێژنەی قوتابخانە*\nوەک ئەندامێکی کارای لێژنە، بانگهێشت کراون بۆ کۆبوونەوە لە بەرواری ${tFormattedDate} کاتژمێر ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *بابەت: بەشداریکردن لە ئامادەکاریی ئاهەنگی قوتابخانە*\nداواکارین هاوکار و بەشدار بن لە ڕێکخستن و سەرپەرشتیکردنی ئاهەنگی گەورەی قوتابخانە لە بەرواری ${tFormattedDate}.`; break;
                case 't_vacation_approval': msg += `✅ *بابەت: پەسەندکردنی داواکاریی مۆڵەت*\nبە خۆشحاڵییەوە ئاگادارتان دەکەینەوە کە داواکاریی مۆڵەتەکەتان لە لایەن کارگێڕیی قوتابخانەوە بە فەرمی پەسەند کرا.`; break;
                case 't_vacation_rejection': msg += `❌ *بابەت: ڕەتکردنەوەی داواکاریی مۆڵەت*\nبەهۆی پێویستیی زۆری دەوام و پڕبوونی خشتەی وانەکان، بەداخەوە لە ئێستادا ناتوانرێت داواکاریی مۆڵەتەکەتان پەسەند بکرێت.`; break;
                case 't_evaluation': msg += `📊 *بابەت: ئەنجامی هەڵسەنگاندنی ساڵانەی ئاست*\nڕاپۆرتی هەڵسەنگاندنی ساڵانەی ئاستی کارکردنتان ئامادەیە، تکایە سەردانی کارگێڕی بکەن بۆ بینین و تاوتوێکردنی.`; break;
                case 't_warning': msg += `⚠️ *بابەت: ئاگادارکردنەوە و هۆشداریی کارگێڕی*\nئەم پەیامە وەک هۆشدارییەکی کارگێڕیی فەرمییە سەبارەت بە تێبینییەکی دەوام، تکایە بەزوویی هەنگاو بنێن بۆ چاککردنی.`; break;
                case 't_emergency': msg += `🚨 *بابەت: باری لەناکاو و زۆر بەپەلە*\nتکایە دەستبەجێ پەیوەندی بە کارگێڕییەوە بکەن یان ئامادە بن بەهۆی ڕوودانی بابەتێکی کتوپڕ و زۆر هەستیار.`; break;
                default: msg += `ئاگادارییەکی گشتی لە کارگێڕیی قوتابخانەوە بۆ مامۆستای بەڕێز.`;
            }
            msg += `\n\nلەگەڵ ڕێز و پێزانین،\n*کارگێڕیی قوتابخانە*`;
        } else if (isEn) {
            msg = `Greetings,\nThe school administration would like to communicate with you through this message.\n`;
            msg += `We would like to discuss this matter with Teacher: ${tName}.\n`;
            msg += `Subject: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *Subject: Notice Regarding Your Absence*\nPlease inform the administration of the reason for your absence on ${tFormattedDate}. Also kindly submit an official leave request to help organize daily work.`; break;
                case 't_late': msg += `⏰ *Subject: Notice Regarding Late Arrival*\nWe noticed that you were late for duty or your initial classes. Punctuality is essential for the stability of the educational process.`; break;
                case 't_meeting': msg += `🤝 *Subject: Invitation to an Administrative Meeting*\nThe administration kindly invites you to attend a meeting on ${tFormattedDate} at ${tFormattedTime} to discuss several important topics.`; break;
                case 't_duty': msg += `📋 *Subject: Reminder for School Supervision Duty*\nThis is a reminder that you are on duty on ${tFormattedDate}. Please be present on time to maintain school order and safety.`; break;
                case 't_thanks': msg += `🌟 *Subject: Appreciation and Recognition*\nWe extend our warmest appreciation for your dedicated efforts and excellent teaching performance. Your hard work is valued.`; break;
                case 't_violation': msg += `⚠️ *Subject: Notice of Instruction Violation*\nThis message serves as a formal notice regarding adherence to official regulations. Please follow the instructions for the general interest.`; break;
                case 't_grades': msg += `📊 *Subject: Submission of Grades and Assessments*\nPlease submit the students' grades and assessment reports before ${tFormattedDate} to complete administrative procedures.`; break;
                case 't_notice': msg += `📢 *Subject: Important Official Notice*\nThere is an important official notice; please visit the administration office to receive the necessary information.`; break;
                case 't_exam_questions': msg += `📝 *Subject: Submission of Exam Questions*\nPlease submit the exam questions and model answers for your subject before ${tFormattedDate}.`; break;
                case 't_lesson_plan': msg += `📖 *Subject: Lesson Plan Preparation*\nPlease prepare and submit your daily and annual lesson plan notebook to the administration or supervisor for review.`; break;
                case 't_class_management': msg += `🎯 *Subject: Class Management Notes*\nWe would like to share some pedagogical notes with you to improve classroom management and engagement during lessons.`; break;
                case 't_parent_meeting': msg += `👨‍👩‍👧 *Subject: Attendance at Parent-Teacher Conference*\nA parent-teacher conference is scheduled on ${tFormattedDate} at ${tFormattedTime}; your presence is appreciated.`; break;
                case 't_training': msg += `🎓 *Subject: Training & Development Workshop*\nA professional development workshop has been arranged; your attendance is required on ${tFormattedDate}.`; break;
                case 't_activity_supervision': msg += `🏆 *Subject: Activity Supervision Assignment*\nYou have been assigned to supervise the school activity scheduled on ${tFormattedDate}.`; break;
                case 't_student_issue': msg += `👤 *Subject: Discussion of Student Case*\nPlease visit the administration on ${tFormattedDate} to discuss an academic or behavioral matter concerning a student.`; break;
                case 't_excellent_performance': msg += `👏 *Subject: Commendation for Outstanding Teaching*\nThe school administration commends your exemplary teaching skills and positive classroom environment.`; break;
                case 't_leave_early': msg += `🚪 *Subject: Note on Early Departure*\nLeaving before official school hours without prior permission has been noted; please adhere to the schedule.`; break;
                case 't_schedule_change': msg += `📅 *Subject: Timetable Update Notification*\nChanges have been made to the teaching timetable; please collect your updated schedule from the office.`; break;
                case 't_supplies': msg += `📦 *Subject: Classroom Supplies Request*\nYour request for classroom supplies has been received and is being processed promptly.`; break;
                case 't_technology': msg += `💻 *Subject: Encouragement of Technology Use*\nWe encourage incorporating interactive smart boards and available digital tools during lessons.`; break;
                case 't_cooperation': msg += `🤝 *Subject: Appreciation for Teamwork*\nThank you for your constructive cooperation and positive team spirit with your colleagues.`; break;
                case 't_committee': msg += `👥 *Subject: School Committee Meeting*\nAs a committee member, you are invited to attend the meeting on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *Subject: School Celebration Organization*\nPlease join the organizing committee for the upcoming school celebration on ${tFormattedDate}.`; break;
                case 't_vacation_approval': msg += `✅ *Subject: Leave Request Approved*\nWe are pleased to inform you that your leave request has been officially approved by the administration.`; break;
                case 't_vacation_rejection': msg += `❌ *Subject: Leave Request Not Approved*\nDue to urgent operational needs and schedule constraints, your leave request cannot be approved at this time.`; break;
                case 't_evaluation': msg += `📊 *Subject: Annual Performance Evaluation*\nYour annual performance review report is ready. Please visit the office to discuss the results.`; break;
                case 't_warning': msg += `⚠️ *Subject: Administrative Warning Notice*\nThis serves as an administrative warning regarding a duty observation; corrective action is required promptly.`; break;
                case 't_emergency': msg += `🚨 *Subject: Urgent Emergency Notice*\nPlease contact the administration immediately or report to the office regarding an urgent and critical matter.`; break;
                default: msg += `General notification from school administration for the esteemed teacher.`;
            }
            msg += `\n\nWith respect and regards,\n*School Administration*`;
        } else {
            // Arabic
            msg = `السلام عليكم ورحمة الله وبركاته،\nتود إدارة المدرسة التواصل معكم من خلال هذا التبليغ الرسمي.\n`;
            msg += `نود التباحث بهذا الشأن مع الأستاذ/المعلم الفاضل: ${tName}.\n`;
            msg += `المادة الدراسية: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *الموضوع: إشعار غياب عن الدوام الرسمي*\nيرجى بيان سبب عدم حضوركم للدوام المدرسي في تاريخ ${tFormattedDate}، وتزويد الإدارة بالإجازة الرسمية أو العذر المعتمد أصولياً لتنظيم الجدول المدرسي.`; break;
                case 't_late': msg += `⏰ *الموضوع: تنبيه بشأن التأخر الصباحي عن موعد الدوام*\nتم رصد تأخركم عن الحضور في الوقت المحدد لبدء الدوام الرسمي أو الحصص الدراسية الأولى. نؤكد على أهمية الالتزام التام بالمواعيد المحددة لضمان سير العملية التربوية.`; break;
                case 't_meeting': msg += `🤝 *الموضوع: دعوة لحضور اجتماع الهيئة التعليمية / الإدارية*\nتدعوكم إدارة المدرسة لحضور الاجتماع الإداري الهام المزمع عقده بتاريخ ${tFormattedDate} في تمام الساعة ${tFormattedTime} لمناقشة المستجدات التربوية.`; break;
                case 't_duty': msg += `📋 *الموضوع: تذكير بجدول المناوبة المدرسية والإشراف اليومي*\nنود تذكيركم بموعد مناوبتكم المقررة ومسؤولية الإشراف على ساحات المدرسة وممراتها بتاريخ ${tFormattedDate}. يرجى التواجد في الموعد لضمان سلامة وانضباط الطلاب.`; break;
                case 't_thanks': msg += `🌟 *الموضوع: كتاب شكر وتقدير وثناء على الجهود المتميزة*\nتتقدم إدارة المدرسة بوافر الشكر وعظيم الامتنان لكم على جهودكم المخلصة وأدائكم التدريسی المتميز. إن تفانيكم وعطاءكم المستمر محل فخر واعتزاز.`; break;
                case 't_violation': msg += `⚠️ *الموضوع: توجيه بخصوص مخالفة التعليمات واللوائح المدرسية*\nتود الإدارة لفت انتباهكم بخصوص مخالفة بعض اللوائح المنظمة للعمل، ونأمل منكم التقيد والالتزام التام بالتعليمات الصادرة بما يخدم المصلحة العامة.`; break;
                case 't_grades': msg += `📊 *الموضوع: التذكير بضرورة تسليم سجلات الدرجات والتقييمات*\nيرجى العمل على تسليم سجلات الدرجات الشهرية أو الفصلية وتقارير تقييم الطلاب قبل موعد ${tFormattedDate} لإكمال الإجراءات والتدقيق.`; break;
                case 't_notice': msg += `📢 *الموضوع: تعميم إداري وتبليغ هام وعاجل*\nيرجى مراجعة إدارة المدرسة للاطلاع على التوجيهات والقرارات الصادرة، والعمل بموجبها فوراً.`; break;
                case 't_exam_questions': msg += `📝 *الموضوع: تسليم نماذج أسئلة الامتحانات والأجوبة النموذجية*\nيرجى تسليم نماذج الأسئلة الامتحانية مع دليل الإجابة النموذجي لمادتكم الدراسية إلى اللجنة الامتحانية قبل تاريخ ${tFormattedDate}.`; break;
                case 't_lesson_plan': msg += `📖 *الموضوع: متابعة وإعداد دفاتر الخطة اليومية والسنوية*\nيرجى تجهيز وتقديم دفتر الخطة الدراسية (اليومية والسنوية) إلى الإدارة أو المشرف التربوي للاطلاع والمصادقة.`; break;
                case 't_class_management': msg += `🎯 *الموضوع: توجيهات تربوية بشأن إدارة وضبط الصف الدراسي*\nنود مناقشة بعض الملاحظات والتوجيهات التربوية الكفيلة بتعزيز السيطرة الصفية وضمان بيئة تعليمية هادئة وتفاعلية أثناء الحصص.`; break;
                case 't_parent_meeting': msg += `👨‍👩‍👧 *الموضوع: الحضور والمشاركة في اللقاء الدوري مع أولياء الأمور*\nتقرر عقد لقاء مشترك مع أولياء أمور الطلاب بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}، نرجو حضوركم للإجابة عن استفساراتهم.`; break;
                case 't_training': msg += `🎓 *الموضوع: الترشيح والمشاركة في الدورة التدريبية والتطويرية*\nتم ترشيحكم للمشاركة في الدورة التدريبية لتطوير المهارات، والمقرر انعقادها بتاريخ ${tFormattedDate}. نأمل لكم دوام التوفيق.`; break;
                case 't_activity_supervision': msg += `🏆 *الموضوع: التكليف بالإشراف على النشاط والفعالية المدرسية*\nتم اختياركم للإشراف على تنظيم وإنجاح الفعالية المدرسية المحددة بتاريخ ${tFormattedDate}. كفاءتكم محل ثقتنا التامة.`; break;
                case 't_student_issue': msg += `👤 *الموضوع: التباحث المشترك بشأن حالة طالب دراسية أو سلوكية*\nيرجى مراجعة الإدارة بتاريخ ${tFormattedDate} للتباحث في الحالة الخاصة بالطالب ومناقشة الحلول التربوية المقترحة.`; break;
                case 't_excellent_performance': msg += `👏 *الموضوع: إشادة بالأداء التربوي المتميز والأساليب التدريسية الحديثة*\nتثمن الإدارة عالياً أسلوبكم التدريسي الراقي والمبتكر وتفاعلكم الإيجابي مع الطلاب داخل الفصل. دمتم نبراساً للعطاء.`; break;
                case 't_leave_early': msg += `🚪 *الموضوع: تنبيه بخصوص المغادرة المبكرة قبل نهاية وقت الدوام*\nلوحظ مغادرتكم المدرسة قبل انتهاء الدوام الرسمي دون إذن مسبق. نؤكد على ضرورة الاستئذان الرسمي حفاظاً على الانضباط العام.`; break;
                case 't_schedule_change': msg += `📅 *الموضوع: إشعار بالتعديل والتغيير في جدول الحصص الأسبوعي*\nنحيطكم علماً بأنه قد تم إجراء تعديلات على جدول الحصص الأسبوعي، يرجى استلام النسخة المحدثة من الإدارة للعمل بموجبها.`; break;
                case 't_supplies': msg += `📦 *الموضوع: متابعة طلب توفير المستلزمات والوسائل التعليمية*\nنود إعلامكم بأن طلبكم الخاص بتوفير المستلزمات الصفية قيد التنفيذ وسيتم توفيرها في أقرب وقت لدعم العملية التعليمية.`; break;
                case 't_technology': msg += `💻 *الموضوع: الحث على استخدام وتفعيل الوسائل التعليمية والتكنولوجية*\nتشجع إدارة المدرسة على توظيف الشاشات التفاعلية والوسائل التعليمية الرقمية المتاحة أثناء الشرح لإثراء تجربة الطلاب.`; break;
                case 't_cooperation': msg += `🤝 *الموضوع: تقدير عميق لروح الفريق والتعاون البناء مع الزملاء*\nتود الإدارة تقديم شكرها الجزيل على روح التعاون الإيجابية والعمل بروح الفريق الواحد التي تظهرونها دائماً مع زملائكم.`; break;
                case 't_committee': msg += `👥 *الموضوع: دعوة رسمية لحضور الاجتماع المقرر للجنة المدرسية*\nنوجه لكم دعوة لحضور الاجتماع الدوري للجنة المدرسية بتاريخ ${tFormattedDate} في تمام الساعة ${tFormattedTime} لمناقشة جدول الأعمال.`; break;
                case 't_celebration': msg += `🎉 *الموضوع: طلب الانضمام والمشاركة في تنظيم الاحتفالية المدرسية*\nيسعدنا دعوتكم لتكونوا جزءاً من اللجنة المنظمة للاحتفالية الكبرى بتاريخ ${tFormattedDate}. مشاركتكم ستضيف الكثير للفعالية.`; break;
                case 't_vacation_approval': msg += `✅ *الموضوع: إشعار رسمي بالموافقة على طلب الإجازة المقدم*\nيسرنا إبلاغكم بأنه تمت الموافقة رسمياً على طلب الإجازة المقدم من قبلكم. نتمنى لكم إجازة مريحة والعودة بالسلامة.`; break;
                case 't_vacation_rejection': msg += `❌ *الموضوع: اعتذار رسمي عن عدم إمكانية الموافقة على طلب الإجازة*\nنأسف لإعلامكم بتعذر الموافقة على طلب الإجازة في الوقت الراهن نظراً لضغط العمل وحاجة المدرسة الماسة لتواجدكم.`; break;
                case 't_evaluation': msg += `📊 *الموضوع: إشعار بصدور واستكمال تقرير تقييم الأداء السنوي*\nنود إعلامكم بأن تقرير تقييم الأداء السنوي قد استكمل، يرجى مراجعة الإدارة للاطلاع على النتائج ومناقشتها.`; break;
                case 't_warning': msg += `⚠️ *الموضوع: توجيه إنذار إداري تنبيهي رسمي يتطلب إجراءً تصحيحياً*\nتمثل هذه الرسالة تنبيهاً إدارياً رسمياً يتعلق بوقوع خلل في الأداء أو الالتزام، ونطالبكم بالعمل الفوري على تصحيحه لتفادي الإجراءات الصارمة.`; break;
                case 't_emergency': msg += `🚨 *الموضوع: حالة طوارئ قصوى وعاجلة جداً - مطلوب التدخل الفوري*\nيرجى الاتصال الفوري بالإدارة أو الحضور العاجل لمكتب الإدارة لمتابعة أمر طارئ وحرج للغاية يتطلب تدخلكم المباشر.`; break;
                default: msg += `إشعار عام من إدارة المدرسة للأستاذ/المعلم الفاضل للمتابعة.`;
            }
            msg += `\n\nمع الاحترام والتقدير،\n*إدارة المدرسة*`;
        }
        return msg;
    }

    let nameFallback = "[اسم الطالب الثلاثي]";
    let classFallback = "[الصف]";
    let sectionFallback = "[الشعبة]";
    let dateFallback = "[التاريخ]";
    let timeFallback = "[الوقت]";

    if (isKu) {
        nameFallback = "[ناڤێ قوتابی یێ سێقۆڵی]";
        classFallback = "[پۆل]";
        sectionFallback = "[هۆبە]";
        dateFallback = "[رێکەفت]";
        timeFallback = "[دەم]";
    } else if (isCkb) {
        nameFallback = "[ناوی سیانیی قوتابی]";
        classFallback = "[پۆل]";
        sectionFallback = "[بەش / شۆبە]";
        dateFallback = "[بەروار]";
        timeFallback = "[کاتژمێر]";
    } else if (isEn) {
        nameFallback = "[Student Name]";
        classFallback = "[Grade]";
        sectionFallback = "[Section]";
        dateFallback = "[Date]";
        timeFallback = "[Time]";
    }

    const name = studentName.trim() ? `*${studentName.trim()}*` : nameFallback;
    const sClass = studentClass.trim() ? studentClass.trim() : classFallback;
    const sSection = studentSection.trim() ? studentSection.trim() : sectionFallback;
    const formattedDate = date ? date : dateFallback;
    const formattedTime = time ? time : timeFallback;

    let msg = "";

    if (isKu) {
        msg = `سلاڤ و رێز،\nکارگێڕیا قوتابخانێ دڤێت پەیوەندیێ ب هەوە بکەت وەک هەڤپشکێن مە د رێکا پەروەردەیی دا.\n`;
        msg += `ئەڤ ئاگەهداریە یا تایبەتە ب قوتابیێ بەڕێز: ${name}\n`;
        msg += `پۆل: ${sClass} | هۆبە: ${sSection}\n\n`;

        switch (reason) {
            case 'absence': msg += `📌 *بابەت: گەلەک نەهاتنا قوتابی بۆ قوتابخانێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری ل ڤان دووماهیان گەلەک یێ نەهاتییە قوتابخانێ بێی دەستویری یان عوزرەکێ فەرمی.\nژبەر گرنگیا بەردەوامیا دەوامێ بۆ پێشڤەچوونا وی یا زانستی، هیڤیدارین سەرەدانا کارگێڕیا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا ڤی بابەتی.`; break;
            case 'badBehavior': msg += `📌 *بابەت: ئاگەهداری ل سەر رەفتارەکا نەگونجای*\nهندەک رەفتارێن نەگونجای و نە پەسەندکری ژ لایێ قوتابیێ ناڤبری ڤە هاتینە تومارکرن ل ناڤ پۆلێ یان قوتابخانێ.\nئەم ل کارگێڕیا قوتابخانێ گرنگیەکا زۆر ددەینە پەروەردە و رەوشتێ قوتابییان، لەوما هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنا رێکێن راستڤەکرنا ڤێ رەوشێ.`; break;
            case 'lowGrades': msg += `📌 *بابەت: نزمبوونا ئاستێ زانستی و نمرەیان*\nد دیڤچوونا مە یا بەردەوام دا بۆ ئەنجامێن ئەزموون و هەلسەنگاندنان، مە تێبینی کرییە کو ئاستێ زانستی یێ قوتابیێ ناڤبری داکەفتییە.\nژبەر خەمخۆریا مە بۆ پاشەرۆژا وی، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ دانانا پلانەکێ ژبۆ بلندکرنا ئاستێ وی.`; break;
            case 'goodBehavior': msg += `🌟 *بابەت: سوپاس و پێزانین بۆ رەوشت و رەفتارا جوان*\nکارگێڕیا قوتابخانێ ب کەیفخۆشی ڤە دەستخۆشیێ ل قوتابیێ ناڤبری دکەت ژبەر رەوشتێ وی یێ بەرز و پابەندبوونا وی ب رێنمایێن قوتابخانێ.\nئەڤ پێگیریە بەرهەمێ پەروەردەیا هەوە یا جوانە. دەستێن هەوە خۆش بن و هیڤیا سەرکەفتنێ بۆ وی دکەین.`; break;
            case 'highGrades': msg += `🎓 *بابەت: پیرۆزباهی بۆ نمرەیێن بلند و ئاستێ نایاب*\nپیرۆزباهییەکا گەرم ل هەوە دکەین ژبۆ ئاستێ نایاب و نمرەیێن بلند یێن قوتابیێ ناڤبری ب دەستڤەئیناین د ئەزموونان دا.\nئەڤ سەرکەفتنە جهێ شانازیا مەیە و نیشانا ماندیبوونا هەوە و قوتابی یە. هیڤیا بەردەوامی و پلەیێن بەرزتر بۆ دخوازین.`; break;
            case 'fight': msg += `⚠️ *بابەت: پشکداریکرن د شەرەدەڤەکێ یان پێکدادانەکێ دا*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری پشکداری د شەرەدەڤەکێ یان شەرەکێ دا کریە د ناڤ حەوشا قوتابخانێ دا.\nژبەر گرنگیا پاراستنا ئارامی و ئەولەهیا هەمی قوتابییان، داخاز دکەین ب زووترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'reward': msg += `🏆 *بابەت: پاداشتکرن و رێزلێنان*\nب سەرفەرازی ڤە هەوە ئاگەهدار دکەین کو بڕیار هاتیە دان قوتابیێ ناڤبری بهێتە پاداشتکرن و رێزلێنان ژبەر چالاکی و ئەنجامێن وی یێن باش.\nدەستخۆشیێ ل هەوە و وی دکەین و ئەڤ پاداشتە هاندەرەکە بۆ سەرکەفتنێن مەزنتر.`; break;
            case 'meeting': msg += `🤝 *بابەت: داخازنامە بۆ ئامادەبوون د کۆمبوونێ دا*\nژبۆ بەرژەوەندیا قوتابیێ ناڤبری و ژینگەها پەروەردەیی، ب رێزڤە هەوە داخاز دکەین بۆ کۆمبوونەکێ دگەل دەستەیا کارگێڕی و فێرکرنێ.\nدەمێ پێشنیارکری ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} یە. سوپاس بۆ هەڤکاریا هەوە.`; break;
            case 'late': msg += `📌 *بابەت: درەنگ هاتنا بەردەوام ل سپێدەهیان*\nمە تێبینی کریە کو قوتابیێ ناڤبری ل ڤان رۆژێن دووماهیێ چەندین جاران درەنگ گەهشتیە دەوامێ سپێدێ بێی عوزرەکێ دیار.\nدرەنگ هاتن کارتێکرنێ ل دەستپێکا وانەیان دکەت، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ چارەسەرکرنا ڤی بابەتی.`; break;
            case 'homework': msg += `📌 *بابەت: نەکرنا ئەرکێن مالێ ب بەردەوامی*\nقوتابیێ ناڤبری ئەرک و واجبێن خۆ یێن رۆژانە یێن مالێ ب دروستی ئەنجام نادەت.\nنەکرنا ئەرکان ئاستێ وی دێ لاواز کەت، لەوما داخازێ ژ هەوە دکەین سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} دا پێکڤە چارەسەریەکێ بینین.`; break;
            case 'phone': msg += `⚠️ *بابەت: ئینانا مۆبایلێ بۆ ناڤ پۆلێ و قوتابخانێ*\nوەک هوین دزانن ئینانا مۆبایلێ بۆ ناڤ قوتابخانێ قەدەغەیە، بەلێ مۆبایل د دەستێ قوتابیێ ناڤبری دا هاتیە دیتن و دەستەسەرکرن.\nداخاز دکەین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ وەرگرتنا مۆبایلێ و ئاگەهداریێ.`; break;
            case 'uniform': msg += `📌 *بابەت: نەپێگیریکرن ب جلوبەرگێن فەرمی یێن قوتابخانێ*\nقوتابیێ ناڤبری پێگیری ب پۆشینا جلوبەرگێن فەرمی یێن قوتابخانێ نەکریە.\nپابەندبوون ب جلوبەرگان بەشەکێ سەرەکی یێ رێنمایانە، هیڤیدارین چاڤدێریا ڤی بابەتی بکەن و سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'cheating': msg += `⚠️ *بابەت: کۆپیکرن (غش) د ئەزموونێ دا*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری هاتیە دیتن ل دەمێ ئەنجامدانا غشێ د ئەزموونێ دا.\nئەڤ رەفتارە ب تەمامی دژی یاسا و ئەخلاقێ فێرکرنێ یە، هیڤیدارین ب لەز سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'vandalism': msg += `⚠️ *بابەت: تێکدان یان زەرەرگەیاندن ب مەلکێ قوتابخانێ*\nقوتابیێ ناڤبری ب ئەنقەست یان ژ کەمتەرخەمی زەرەر گەیاندیە کەلوپەلێن قوتابخانێ (وەک رەحلە، دەرگەهـ، یان کەلوپەلێن دی).\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا چاککرن یان قەرەبووکرنا ڤان زەرەران.`; break;
            case 'truancy': msg += `⚠️ *بابەت: رەڤین ژ قوتابخانێ د دەمێ دەوامێ دا*\nقوتابیێ ناڤبری د ناڤبەرا دەوامێ دا یان بەری ب دووماهی هاتنا وانەیان بێ دەستویری ژ قوتابخانێ دەرکەفتییە.\nئەڤ کارە گەلەک مەترسیدارە بۆ پاراستنا وی، لەوما ب لەز سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'books': msg += `📌 *بابەت: نەئینانا پەرتووک و دەفتەران*\nقوتابیێ ناڤبری چەندین جاران پەرتووک و پێداویستیێن وانەیان نەئیناینە پۆلێ.\nئەڤە دبیتە ئەگەرێ پاشکەفتنا وی ژ وانەیان، هیڤیدارین دیڤچوونێ بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *بابەت: زۆرداری و بێزارکرنا هەڤالان (التنمر)*\nتێبینی هاتیە کرن کو قوتابیێ ناڤبری رەفتارێن نەجوان و زۆرداریێ ل بەرامبەر هەڤالێن خۆ بکار دئینیت.\nژینگەها قوتابخانێ دڤێت یا پاراستی بیت بۆ هەمیان، داخاز دکەین ب زووترین دەم سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'sleeping': msg += `📌 *بابەت: نڤستن و بێ ئاگەهی ل پۆلێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری د دەمێ وانەیان دا دنڤیت یان گەلەک یێ بێ ئاگەهە.\nئەڤ چەندە کارتێکرنێ ل تێگەهشتنا وی دکەت، هیڤیدارین دیڤچوونا دەمێ خەوا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *بابەت: تێبینی لسەر پاقژییا قوتابی*\nب رێزڤە مە دڤێت سەرنجا هەوە رابکێشین کو پێدڤییە قوتابیێ ناڤبری پتر گرنگییێ ب پاقژییا خۆ یا کەسی و جلوبەرگێن خۆ بدەت.\nپاقژی بەشەکێ گرنگە ژ ساخلەمی و ژینگەها قوتابخانێ، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}. سوپاس بۆ هەڤکارییا هەوە.`; break;
            case 'profanity': msg += `⚠️ *بابەت: بکارئینانا ئاخفتنێن نەجوان و کرێت*\nئاگەهدارییا هەوە دکەین کو قوتابیێ ناڤبری ئاخفتنێن نەجوان و کرێت و نەگونجای دگەل رەوشتی بکارئیناینە.\nئەڤ رەفتارە ب تەمامی نەیا پەسەندکرییە، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ راستڤەکرنا ڤێ رەفتارێ.`; break;
            case 'smoking': msg += `⚠️ *بابەت: جگارە کێشان ل قوتابخانێ*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری هاتییە دیتن ل دەمێ کێشانا جگارێ ل ناڤ قوتابخانێ.\nئەڤ رەفتارە مەترسییەکە لسەر ساخلەمییا وی و دژی رێنمایێن پەروەردێ نە. هیڤیدارین ب زووترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *بابەت: دەرکەفتن بەری ب دووماهی هاتنا خواندنێ*\nقوتابیێ ناڤبری بێی دەستویرییا کارگێڕیێ قوتابخانە بجهـ هێلتییە بەری کو خواندن ب دووماهی بهێت.\nئەڤ چەندە مەترسییێ لسەر پاراستنا وی دروست دکەت، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'participation': msg += `📌 *بابەت: لاوازیا پشکداریکرنێ د وانەیێ دا*\nمامۆستایێن قوتابیێ ناڤبری تێبینی کرینە کو پشکدارییا وی د وانەیان دا گەلەک یا لاوازە.\nئەڤە کارتێکرنێ ل ئاستێ وی یێ زانستی دکەت، هیڤیدارین پالپشتییا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'forbidden': msg += `⚠️ *بابەت: ئینانا تشتێن قەدەغەکری*\nئاگەهدارییا هەوە دکەین کو ئینانا تشتێن قەدەغەکری ل دەف قوتابیێ ناڤبری هاتینە دیتن.\nئەڤە دژی یاسایێن پەروەردێ و قوتابخانێ یە، هیڤیدارین ب لەز سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'health': msg += `🏥 *بابەت: تێکچوونا ساخلەمییێ*\nمە دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری تووشی نەخۆشییەکێ یان تێکچوونەکا ساخلەمییێ بوویە د ناڤ قوتابخانێ دا.\nهیڤیدارین ب زووترین دەم سەرەدانا مە بکەن یان پەیوەندیێ پێڤە بکەن بۆ پشتڕاستبوون ژ رەوشا وی.`; break;
            case 'trip': msg += `🚌 *بابەت: گەشتا زانستی*\nقوتابخانە دێ رابیت ب رێکخستنا گەشتەکا زانستی و فێرکاری.\nداخوازا پەسەندکرنا هەوە دکەین بۆ پشکداریکرنا قوتابیێ ناڤبری د ڤێ گەشتێ دا ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}. هیڤیدارین پەیوەندیێ ب کارگێڕیێ بکەن.`; break;
            case 'fees': msg += `💰 *بابەت: پارەیێ قوتابخانێ*\nمە دڤێت هەوە ئاگەهدار بکەین ل سەر درەنگ کەفتنا دانا پارەیێ قوتابخانێ یێن پێدڤی لسەر قوتابیێ ناڤبری.\nهیڤیدارین ب زووترین دەم سەرەدانا بەشێ ژمێریارییێ بکەن.`; break;
            case 'parent_council': msg += `👥 *بابەت: جڤاتا سمیانان*\nمە دڤێت هەوە داخاز بکەین بۆ ئامادەبوون د کۆمبوونا جڤاتا سمیانان دا.\nپشکدارییا هەوە د بەحسکرنا رەوشا قوتابییان دا گەلەک گرنگە، هیڤیدارین ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} ئامادە بن.`; break;
            case 'exam_schedule': msg += `📅 *بابەت: خشتەیێ ئەزموونان*\nمە دڤێت هەوە ئاگەهدار بکەین کو خشتەیێ ئەزموونێن داهاتی هاتیە بەلاڤکرن.\nهیڤیدارین پالپشتییا قوتابیێ ناڤبری بکەن بۆ خوەئامادەکرنەکا باش.`; break;
            case 'document_missing': msg += `📄 *بابەت: کێماسی د بەلگەنامەیان دا*\nهندەک کێماسی د بەلگەنامەیێن پێدڤی یێن قوتابیێ ناڤبری دا هەنە (وەک وێنە یان ناسنامە).\nهیڤیدارین ب زووترین دەم ڤان بەلگەنامەیان بۆ کارگێڕیا قوتابخانێ دابین بکەن.`; break;
            case 'excellent_project': msg += `💡 *بابەت: پرۆژەیێ نایاب*\nئەم سوپاسییا هەوە و قوتابیێ ناڤبری دکەین بۆ ئەنجامدانا پرۆژەیەکێ زانستی یان هونەری یێ گەلەک نایاب.\nئەڤ بەرهەمە نیشانا ژێهاتیبوونێ یە، دەستخۆشیێ لێ دکەین.`; break;
            case 'activity': msg += `🎭 *بابەت: پشکداریکرن د چالاکیەکێ دا*\nمە دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری هاتیە دەستنیشانکرن بۆ پشکداریکرن د چالاکیەکا قوتابخانێ دا.\nپالپشتییا هەوە دێ بیتە هاندەرەک مەزن بۆ وی.`; break;
            case 'late_pickup': msg += `⏰ *بابەت: درەنگ وەرگرتنا قوتابی پشتی دەوامێ*\nتێبینی هاتیە کرن کو قوتابیێ ناڤبری گەلەک درەنگ دهێتە برن پشتی ب دووماهی هاتنا دەوامێ.\nتکایە ل دەمێ خۆ وەرگرن بۆ پاراستنا سەلامەتیا وی.`; break;
            case 'bus_issue': msg += `🚐 *بابەت: کێشە د ڤەگوهاستنا قوتابخانێ دا*\nئاگەهداریەکا گرنگ هەیە دەربارەی هێلا ڤەگوهاستنا قوتابیێ ناڤبری د پاسا قوتابخانێ دا.\nهیڤیدارین پەیوەندیێ ب شۆفێری یان کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'forgot_id': msg += `📌 *بابەت: ئاگەهداری لسەر نەپێڤەکرنا ناسنامەیا (باجێ) قوتابخانێ*\nمە تێبینی کریە کو قوتابیێ ناڤبری بێی پێڤەکرنا ناسنامە یان باجا قوتابخانێ ئامادە بوویە.\nپێڤەکرنا باجێ یا گرنگە بۆ سەلامەتی و ناسینێ، تکایە دیڤچوونێ بکەن.`; break;
            case 'disrespect_teacher': msg += `⚠️ *بابەت: ئاگەهداریا ب لەز ژبەر رێزنەگرتنا مامۆستای*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری رەفتارەکا نەشیاو و کێم رێزی بەرامبەر مامۆستایێ خۆ نیشان دایە.\nرێزگرتنا مامۆستای بنەمایێ پەروەردێ یە، لەوما ب لەز سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            case 'lack_focus': msg += `📌 *بابەت: کێم تەرکیزی و سەرقالبوون د پۆلێ دا*\nمامۆستایان ئاماژە ب وێ چەندێ کریە کو قوتابیێ ناڤبری کێم تەرکیزە و ب تشتێن دی ڤە سەرقال دبیت د دەمێ شلوڤەکرنا وانەیان دا.\nهیڤیدارین دیڤچوونا رەوشا وی بکەن بۆ چارەسەرکرنا ڤێ کێشێ.`; break;
            case 'eating_in_class': msg += `📌 *بابەت: خوارن و ڤەخوارن د ناڤ پۆلێ دا*\nقوتابیێ ناڤبری د دەمێ وانەیێ دا خوارن یان ڤەخوارن خوارینە کو ئەڤە دژی رێنمایێن پۆلێ یە.\nتکایە رێنمایا وی بکەن کو تەنها د دەمێ بێهنڤەدانێ دا خوارنێ بخۆت.`; break;
            case 'chewing_gum': msg += `📌 *بابەت: جووینا بنیشتی د دەمێ وانەیێ دا*\nهاتیە دیتن کو قوتابیێ ناڤبری بنیشت دجویت د دەمێ وانەیێ دا، ئەڤ چەندە نەگونجایە د ژینگەها خواندنێ دا.\nهیڤیدارین هۆشیاریێ بدەنێ بۆ پاراستنا نەزما پۆلێ.`; break;
            case 'failing_exam': msg += `⚠️ *بابەت: دەرنەچوون د ئەزموونا دووماهیێ دا*\nب مخابنی ڤە رادگەهینین کو ئەنجامێن ئەزموونا دووماهیێ یا قوتابیێ ناڤبری د ئاستێ پێدڤی دا نەبوون و دەرنەچوویە.\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا رێکێن چارەسەریێ.`; break;
            case 'damaging_books': msg += `⚠️ *بابەت: تێکدان یان دڕاندنا پەرتووکێن قوتابخانێ*\nتێبینی هاتیە کرن کو قوتابیێ ناڤبری پەرتووکێن خۆ تێکداینە یان لاپەر ژێ دڕاندینە ب شێوەیەکێ نەگونجای.\nتکایە تێبینیێ بدەنێ لسەر گرنگیا پاراستنا پەرتووکان.`; break;
            case 'makeup_accessories': msg += `📌 *بابەت: بکارئینانا مکیاج یان تشتێن نەگونجای د ناڤ قوتابخانێ دا*\nقوتابیێ ناڤبری مکیاج یان کەلوپەلێن نەگونجای دگەل رێنمایێن قوتابخانێ بکارئیناینە.\nتکایە دلسۆزانە چاڤدێریا وی بکەن بۆ پابەندبوون ب رێنمایان.`; break;
            case 'hallway_noise': msg += `📌 *بابەت: دروستکرنا دەنگەدەنگ و بێزاریێ د مەمەڕان دا*\nقوتابیێ ناڤبری دەنگەدەنگ یان راکردن ئەنجام دایە د مەمەڕێن قوتابخانێ دا د دەمێ وانەیان دا.\nتکایە ئامۆژگاریا وی بکەن بۆ پاراستنا هێمنی و ئارامیا قوتابخانێ.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *بابەت: دەرکەفتن ژ پۆلێ بێ دەستویریا مامۆستای*\nقوتابیێ ناڤبری بێی وەرگرتنا دەستویریێ ژ مامۆستای پۆل بجهـ هێلایە د دەمێ وانەیێ دا.\nئەڤ چەندە ب تەمامی نەیا قەبوولکرییە، داخاز دکەین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`; break;
            default: msg += `ئاگەهداریەکا فەرمی ژ لایێ کارگێڕیا قوتابخانێ ڤە دەربارەی قوتابیێ ناڤبری بۆ دیڤچوونێ.`;
        }

        msg += `\n\nدگەل رێز و پێزانین،\n*کارگێڕیا قوتابخانێ*`;
    } else if (isCkb) {
        msg = `سڵاو و ڕێز،\nکارگێڕیی قوتابخانە دەخوازێت پەیوەندیتان پێوە بکات وەک هاوبەشی ئێمە لە ڕێڕەوی پەروەردەییدا.\n`;
        msg += `ئەم ئاگادارییە تایبەتە بە قوتابی بەڕێز: ${name}\n`;
        msg += `پۆل: ${sClass} | شۆبە: ${sSection}\n\n`;

        switch (reason) {
            case 'absence': msg += `📌 *بابەت: ئاگاداری سەبارەت بە غیاب و نەهاتنی زۆری قوتابی*\nتێبینیمان کردووە کە قوتابیی ناوبراو لەم دواییانەدا بە شێوەیەکی بەرچاو لە دەوامی فەرمیی قوتابخانە غیاب بووە بەبێ ئاگاداری یان مۆڵەتی فەرمی.\nلەبەر گرنگیی بەردەوامی لە وانەکان بۆ داهاتووی زانستیی قوتابی، داواکارین سەردانی کارگێڕیی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ تاوتوێکردنی بابەتەکە.`; break;
            case 'badBehavior': msg += `📌 *بابەت: ئاگاداری سەبارەت بە ڕەفتاری نەشیاو*\nهەندێک ڕەفتاری نەشیاو و نادروست لە لایەن قوتابیی ناوبراوەوە تۆمار کراوە لە پۆل یان لە ناو حەوشەی قوتابخانەدا.\nئێمە لە کارگێڕیی قوتابخانە گرنگییەکی زۆر بە پەروەردە و ڕەوشتی بەرزی قوتابیان دەدەین، بۆیە داواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ دۆزینەوەی ڕێگەچارەی گونجاو.`; break;
            case 'lowGrades': msg += `📌 *بابەت: ئاگاداری سەبارەت بە دابەزینی ئاستی زانستی و نمرەکان*\nلە ڕێگەی بەدواداچوونی بەردەواممان بۆ ئەنجامی تاقیکردنەوە و هەڵسەنگاندنەکان، هەستمان بە دابەزینی ئاستی زانستیی قوتابیی ناوبراو کردووە لەم دواییانەدا.\nلەبەر پەرۆشیمان بۆ پێشکەوتنی قوتابی، داواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ دانانی پلانێکی هاوبەش بۆ بەرزکردنەوەی ئاستی زانستیی قوتابی.`; break;
            case 'goodBehavior': msg += `🌟 *بابەت: سوپاس و پێزانین بۆ ڕەوشت و ڕەفتاری شایستە*\nکارگێڕیی قوتابخانە بە خۆشحاڵی و شانازییەوە سوپاس و دەستخۆشی لە قوتابیی ناوبراو دەکات بەهۆی ڕەوشتی بەرز، ئەدەب و پابەندبوونی تەواوی بە یاسا و ڕێساکانی قوتابخانە.\nئەم ئاستە بەرزە ڕەنگدانەوەی پەروەردەی جوانی بەڕێزتانە. دەستی ماندووبوونتان دەگوشین و هیوای سەرکەوتنی زیاتری بۆ دەخوازین.`; break;
            case 'highGrades': msg += `🎓 *بابەت: پیرۆزبایی بەبۆنەی بەدەستهێنانی نمرەی بەرز و نایاب*\nگەرمترین پیرۆزباییتان ئاراستە دەکەین بەبۆنەی سەرکەوتنی گەورە و بەدەستهێنانی نمرەی زۆر بەرز لە لایەن قوتابیی ناوبراوەوە لە تاقیکردنەوەکاندا.\nئەم دەستکەوتە بەرهەمی کۆشش و شەونخوونیی قوتابی و پاڵپشتیی دڵسۆزانەی ئێوەیە. جێگەی شانازیی قوتابخانەکەمانە و هیوای پلەی بەرزتری بۆ دەخوازین.`; break;
            case 'fight': msg += `⚠️ *بابەت: بانگهێشتکردن بەهۆی شەڕکردن و دەمەقاڵێ لە قوتابخانە*\nبەداخەوە ئاگادارتان دەکەینەوە کە قوتابیی ناوبراو بەشدار بووە لە شەڕ و دەمەقاڵێ لەگەڵ هاوپۆلەکانی لە ناو حەرەمی قوتابخانەدا.\nلەبەر پاراستنی ئارامی و سەلامەتیی گشتیی قوتابیان، داواکارین بە زووترین کات سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ ڕێگریکردن لە دووبارەبوونەوەی.`; break;
            case 'reward': msg += `🏆 *بابەت: پاداشت و ڕێزلێنان*\nبە شانازییەوە ئاگادارتان دەکەینەوە کە بڕیار دراوە قوتابیی ناوبراو پاداشت و ڕێزلێنانی پێ ببەخشرێت وەک پێزانینێک بۆ هەوڵ، ئاکار و چالاکییە نایابەکانی لە قوتابخانەدا.\nدەستخۆشیتان لێ دەکەین و هیوادارین ئەم پاداشتە ببێتە هاندەرێکی گەورە بۆ سەرکەوتنی زیاتر.`; break;
            case 'meeting': msg += `🤝 *بابەت: بانگهێشتنامە بۆ کۆبوونەوەی تایبەت لەگەڵ دەستەی کارگێڕی*\nلە پێناو بەرژەوەندیی قوتابیی ناوبراو و دابینکردنی باشترین ژینگەی فێرکاری، بەڕێزەوە بانگهێشتتان دەکەین بۆ کۆبوونەوەیەکی تایبەت سەبارەت بە باری پەروەردەیی قوتابی.\nکاتی پێشنیارکراو بۆ کۆبوونەوەکە لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} دەبێت. سوپاس بۆ هاوکاریی بەردەوامتان.`; break;
            case 'late': msg += `📌 *بابەت: ئاگاداری سەبارەت بە دواکەوتنی بەیانیان لە کاتی دەوام*\nتێبینیمان کردووە کە قوتابیی ناوبراو لەم چەند ڕۆژەی ڕابردوودا چەندین جار لە کاتی دەوامی بەیانیان دواکەوتووە بەبێ هۆکارێکی موعزەم.\nدواکەوتن دەبێتە هۆی لەدەستدانی سەرەتای وانە گرنگەکان، بۆیە داواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ چارەسەرکردنی ئەم بابەتە.`; break;
            case 'homework': msg += `📌 *بابەت: کەمتەرخەمی لە ئەنجامدانی ئەرکی ماڵەوە*\nقوتابیی ناوبراو بە بەردەوامی ئەرک و وانەکانی ماڵەوە پشتگوێ دەخات و ئەنجامیان نادات.\nئەنجامنەدانی ئەرکی ماڵەوە کاریگەریی ڕاستەوخۆی نەرێنی دەبێت لەسەر تێگەیشتن و نمرەکانی، بۆیە داواکارین چاودێریی بکەن و سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'phone': msg += `⚠️ *بابەت: هێنانی مۆبایل بۆ ناو قوتابخانە*\nهەروەک ئاگادارن هێنانی مۆبایلی زیرەک بە هەموو شێوەیەک قەدەغەیە بەپێی ڕێنماییەکانی قوتابخانە، مۆبایل لە لایەن قوتابیی ناوبراوەوە هێنراوە و دەستی بەسەردا گیراوە.\nداواکارین سەردانی کارگێڕی بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ وەرگرتنەوەی مۆبایلەکە و ئاگادارکردنەوەی پێویست.`; break;
            case 'uniform': msg += `📌 *بابەت: پابەندنەبوون بە جلوبەرگی فەرمیی قوتابخانە*\nقوتابیی ناوبراو پابەندی پۆشینی جلوبەرگی یەکپۆشیی دیاریکراوی فەرمیی قوتابخانە نەبووە.\nپابەندبوون بە پۆشاکی فەرمی بەشێکی سەرەکییە لە ڕێسا پەروەردەییەکان، داواکارین چاودێریی بکەن و سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'cheating': msg += `⚠️ *بابەت: فێڵکردن (غەش) لە کاتی تاقیکردنەوەدا*\nبە داخەوە ئاگادارتان دەکەینەوە کە قوتابیی ناوبراو بینراوە لە کاتی ئەنجامدانی غەش لە تاقیکردنەوەدا.\nئەم ڕەفتارە بە تەواوی دژی بنەما ئەخلاقی و فێرکارییەکانە، داواکارین بە پەلە سەردانی کارگێڕیی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'vandalism': msg += `⚠️ *بابەت: زیانگەیاندن و تێکدانی کەلوپەلی قوتابخانە*\nتێبینیمان کردووە کە قوتابیی ناوبراو زیانی بە هەندێک لە کەلوپەل و دارایی گشتیی قوتابخانە گەیاندووە (وەک ڕەحلە، دەرگا، یان کەلوپەلی تر).\nپاراستنی کەرەستەی قوتابخانە ئەرکی هەموانە، داواکارین سەردانی کارگێڕی بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ ڕێکخستنی قەرەبووکردنەوە یان چاککردنەوەی.`; break;
            case 'truancy': msg += `⚠️ *بابەت: هەڵاتن لە قوتابخانە لە کاتی دەوامدا*\nبەداخەوە قوتابیی ناوبراو لە کاتی دەوامی فەرمیدا و بەبێ وەرگرتنی مۆڵەتی کارگێڕی لە قوتابخانە دەرچووە و هەڵاتووە.\nئەم ڕەفتارە مەترسی بۆ سەر سەلامەتیی قوتابی دروست دەکات، داوا دەکەین دەستبەجێ سەردانی کارگێڕی بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'books': msg += `📌 *بابەت: نەهێنانی کتێب و دەفتەری وانەکان*\nقوتابیی ناوبراو بە بەردەوامی کتێب و دەفتەر و پێداویستییەکانی وانەکان لەگەڵ خۆی ناهێنێت بۆ پۆل.\nئەمە دەبێتە ڕێگر لە بەردەم تێگەیشتنی وانەکان، تکایە بەدواداچوونی بۆ بکەن و سەردانمان بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *بابەت: توندوتیژی و گێچەڵپێکردن بە هاوپۆلەکان (Bullying)*\nئاگادارتان دەکەینەوە کە قوتابیی ناوبراو هەڵسوکەوتی نەشیاو و گێچەڵپێکردنی بەرامبەر هاوڕێکانی ئەنجامداوە.\nئێمە ژینگەیەکی پارێزراو بۆ هەموو قوتابیان دەڕەخسێنین، بۆیە داواکارین بە زووترین کات سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'sleeping': msg += `📌 *بابەت: خەوتن و بێئاگایی لە کاتی وانەدا*\nمامۆستایان تێبینییان کردووە کە قوتابیی ناوبراو لە کاتی وانەکاندا دەخەوێت یان زۆر بێئاگایە و سەرنجی لەسەر وانە نییە.\nئەمە کاریگەریی خراپ دەکاتە سەر تێگەیشتنی، داواکارین چاودێریی کاتی خەوی بکەن لە ماڵەوە و سەردانمان بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *بابەت: سەرنجدان لەسەر پاکوخاوێنیی کەسیی قوتابی*\nبەڕێزەوە دەمانەوێت سەرنجتان رابکێشین کە پێویستە قوتابیی ناوبراو زیاتر گرنگی بە پاکوخاوێنیی کەسی و جلوبەرگی خۆی بدات.\nپاکوخاوێنی بنەمای تەندروستی و فێرکردنە، داواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}. سوپاس بۆ هاوکاریتان.`; break;
            case 'profanity': msg += `⚠️ *بابەت: بەکارهێنانی وشە و قسەی نەشیاو*\nئاگادارتان دەکەینەوە کە قوتابیی ناوبراو وشە و دەستەواژەی نەشیاو و دوور لە ئەدەبی بەکارهێناوە لە ناو قوتابخانەدا.\nئەم ڕەفتارە بەهیچ شێوەیەک قبووڵکراو نییە، داواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ ڕاستکردنەوەی ئەم هەڵسوکەوتە.`; break;
            case 'smoking': msg += `⚠️ *بابەت: جگەرەکێشان لە ناو حەرەمی قوتابخانەدا*\nبە داخێکی زۆرەوە ئاگادارتان دەکەینەوە کە قوتابیی ناوبراو بینراوە لە کاتی کێشانی جگەرەدا لە ناو قوتابخانەدا.\nئەمە پێشێلکردنی ئاشکرای یاساکانە و مەترسییە بۆ سەر تەندروستیی قوتابی، داوا دەکەین بە پەلە سەردانی کارگێڕی بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *بابەت: چوونەدەرەوە لە قوتابخانە پێش کۆتاییهاتنی دەوام*\nقوتابیی ناوبراو بەبێ وەرگرتنی مۆڵەتی کارگێڕی، پێش تەواوبوونی کاتی دەوام لە قوتابخانە ڕۆیشتووە.\nئەم کارە مەترسی بۆ سەر پاراستنی قوتابی دروست دەکات، تکایە سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'participation': msg += `📌 *بابەت: لاوازی لە بەشداریکردنی ناو پۆل*\nمامۆستایانی وانەکان تێبینییان کردووە کە قوتابیی ناوبراو بەشداریی لە گفتوگۆ و چالاکییەکانی ناو پۆلدا زۆر لاوازە.\nئەمە کاریگەری دەکاتە سەر ئاستی زانستی، داواکارین هانی بدەن و سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'forbidden': msg += `⚠️ *بابەت: هێنانی کەرەستەی قەدەغەکراو بۆ ناو قوتابخانە*\nئاگادارتان دەکەینەوە کە کەرەستەی قەدەغەکراو لە لایەن قوتابیی ناوبراوەوە هێنراوەتە ناو قوتابخانە کە دژی ڕێنماییەکانە.\nداواکارین دەستبەجێ سەردانی کارگێڕیی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'health': msg += `🏥 *بابەت: تێکچوونی باری تەندروستیی قوتابی*\nئاگادارتان دەکەینەوە کە قوتابیی ناوبراو لە کاتی دەوامدا تووشی باری ناڕەحەتی یان نەخۆشی بووە لە ناو قوتابخانەدا.\nتکایە بە زووترین کات پەیوەندیمان پێوە بکەن یان سەردانی قوتابخانە بکەن بۆ دڵنیابوونەوە لە تەندروستیی قوتابی.`; break;
            case 'trip': msg += `🚌 *بابەت: گەشتی زانستی و فێرکاری*\nقوتابخانەکەمان هەڵدەستێت بە ڕێکخستنی گەشتێکی زانستی و فێرکاریی بەسوود بۆ قوتابیان.\nداوای ڕەزامەندیی بەڕێزتان دەکەین بۆ بەشداریکردنی قوتابیی ناوبراو لەم گەشتەدا کە ئەنجام دەدرێت لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}. تکایە پەیوەندی بە کارگێڕییەوە بکەن.`; break;
            case 'fees': msg += `💰 *بابەت: ئاگاداری سەبارەت بە قیستی قوتابخانە*\nئاگادارتان دەکەینەوە سەبارەت بە دواکەوتنی پێدانی قیست و شایستە داراییەکانی تایبەت بە خوێندنی قوتابیی ناوبراو.\nداواکارین لە زووترین کاتدا سەردانی بەشی ژمێریاریی قوتابخانە بکەن بۆ ڕێکخستنی.`; break;
            case 'parent_council': msg += `👥 *بابەت: بانگهێشت بۆ کۆبوونەوەی ئەنجومەنی دایک و باوکان*\nبەڕێزەوە داواتان لێ دەکەین بۆ بەشداریکردن لە کۆبوونەوەی وەرزیی ئەنجومەنی دایک و باوکان.\nئامادەبوونتان زۆر گرنگە بۆ هاوبەشی لە بڕیارە پەروەردەییەکاندا، تکایە لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} ئامادە بن.`; break;
            case 'exam_schedule': msg += `📅 *بابەت: بڵاوکردنەوەی خشتەی تاقیکردنەوەکان*\nئاگادارتان دەکەینەوە کە خشتەی تاقیکردنەوەکانی داهاتوو دیاری کراوە و بڵاوکراوەتەوە.\nداواکارین پاڵپشتی و هاوکاریی قوتابیی ناوبراو بکەن لە ئامادەکاریی باشدا بۆ سەرکەوتنی.`; break;
            case 'document_missing': msg += `📄 *بابەت: کەموکوڕی لە دۆسیە و بەڵگەنامە فەرمییەکاندا*\nهەندێک کەموکوڕی لە بەڵگەنامە فەرمییەکانی پێویست بۆ دۆسیەی قوتابیی ناوبراودا هەیە (وەک وێنە، ناسنامە یان فۆرمەکان).\nداواکارین لە زووترین کاتدا ئەم بەڵگەنامانە ڕادەستی کارگێڕیی قوتابخانە بکەن.`; break;
            case 'excellent_project': msg += `💡 *بابەت: دەستخۆشی بۆ ئەنجامدانی پڕۆژەی نایاب و داهێنەرانە*\nبە ناوی کارگێڕیی قوتابخانەوە دەستخۆشیی گەرم لە بەڕێزتان و لە قوتابیی ناوبراو دەکەین بۆ ئەنجامدانی پڕۆژەیەکی زانستی و داهێنەرانەی زۆر نایاب.\nئەم بەرهەمە نیشانەی زیرەکی و لێهاتووییە و جێگەی شانازیمانە.`; break;
            case 'activity': msg += `🎭 *بابەت: بەشداریکردن لە چالاکییەکانی قوتابخانەدا*\nخۆشحاڵین ئاگادارتان بکەینەوە کە قوتابیی ناوبراو دەستنیشان کراوە بۆ بەشداریکردن لە چالاکییەکی گرنگی هونەری یان وەرزشیی قوتابخانەدا.\nپاڵپشتی و هاندانی بەڕێزتان دەبێتە مایەی سەرکەوتنی زیاتری.`; break;
            case 'late_pickup': msg += `⏰ *بابەت: دواکەوتن لە بردنەوەی قوتابی دوای تەواوبوونی دەوام*\nتێبینیمان کردووە کە بەڕێزتان زۆر درەنگ دەگەن بۆ بردنەوەی قوتابی دوای کۆتاییهاتنی دەوامی فەرمی.\nلە پێناو سەلامەتی و پاراستنی قوتابیدا، داواکارین لە کاتی دیاریکراودا ئامادە بن بۆ بردنەوەی.`; break;
            case 'bus_issue': msg += `🚐 *بابەت: کێشەی هێڵی گواستنەوەی قوتابخانە (پاس)*\nئاگادارییەکی گرنگ هەیە سەبارەت بە هێڵی گواستنەوەی قوتابیی ناوبراو یان دواکەوتنی لە کاتی سواربووندا.\nداواکارین پەیوەندی بە شۆفێری هێڵەکەوە بکەن یان سەردانی کارگێڕیی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'forgot_id': msg += `📌 *بابەت: ئاگاداری سەبارەت بە نەبەستنی باجی قوتابخانە*\nتێبینیمان کردووە کە قوتابیی ناوبراو چەندین جار بەبێ بەستنی ناسنامە (باج)ی فەرمیی قوتابخانە ئامادەی دەوام بووە.\nبەستنی باج پێویستە بۆ ناسینەوە و پاراستنی ئاسایشی ناو قوتابخانە، تکایە جەختی لێ بکەنەوە.`; break;
            case 'disrespect_teacher': msg += `⚠️ *بابەت: بانگهێشتی بەپەلە بەهۆی ڕێزنەگرتن لە مامۆستا*\nبە داخێکی زۆرەوە ئاگادارتان دەکەینەوە کە قوتابیی ناوبراو هەڵسوکەوتێکی نەشیاو و بێڕێزی بەرامبەر مامۆستای وانەکەی ئەنجامداوە.\nڕێزگرتن لە مامۆستا کۆڵەکەی سەرەکیی پەروەردەیە، داواکارین بە زووترین کات سەردانمان بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            case 'lack_focus': msg += `📌 *بابەت: کەمیی سەرنجدان و بێئاگایی لە ناو پۆلدا*\nمامۆستایان ئاماژەیان بەوە کردووە کە قوتابیی ناوبراو کەم سەرنج دەدات و زۆر سەرقاڵ دەبێت بە شتی ترەوە لە کاتی ڕوونکردنەوەی وانەکاندا.\nداواکارین لە ماڵەوە قسەی لەگەڵدا بکەن و هاوکارمان بن بۆ چارەسەرکردنی ئەم کێشەیە.`; break;
            case 'eating_in_class': msg += `📌 *بابەت: خواردن لە کاتی وانەدا لە ناو پۆلدا*\nقوتابیی ناوبراو لە کاتی بەڕێوەچوونی وانەدا خواردن یان خواردنەوەی خواردووە کە ئەمەش پێچەوانەی ڕێساکانی پۆلە.\nتکایە ئامۆژگاریی بکەن کە تەنها لە کاتی پشووی دیاریکراودا خواردن بخوات.`; break;
            case 'chewing_gum': msg += `📌 *بابەت: جوینی بنێشت لە کاتی وانەدا*\nبینراوە کە قوتابیی ناوبراو لە کاتی شیکردنەوەی وانەکاندا بنێشتی جویوە، ئەم ڕەفتارە لەگەڵ ژینگەی فێربووندا ناگونجێت.\nداواکارین ڕێنمایی بکەن بۆ ڕەچاوکردنی ئادابی پۆل.`; break;
            case 'failing_exam': msg += `⚠️ *بابەت: دەرنەچوون لە تاقیکردنەوەی کۆتاییدا*\nبەداخەوە ئاگادارتان دەکەینەوە کە ئەنجامی تاقیکردنەوەی کۆتایی قوتابیی ناوبراو لە ئاستی پێویستدا نەبووە و دەرنەچووە لە مادەکەدا.\nداواکارین سەردانی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime} بۆ داڕشتنی پلانێکی بەهێزکردن.`; break;
            case 'damaging_books': msg += `⚠️ *بابەت: تێکدان و دڕاندنی کتێب و دەفتەری قوتابخانە*\nتێبینیمان کردووە کە قوتابیی ناوبراو کتێبەکانی تێکداوە یان لاپەڕەی لێ دڕاندووە بە شێوەیەکی نەگونجاو.\nتکایە هۆشیاریی پێ بدەن لەسەر گرنگیی پاراستن و ڕێزگرتن لە پەڕتووک و کەرەستەکانی خوێندن.`; break;
            case 'makeup_accessories': msg += `📌 *بابەت: بەکارهێنانی مکیاج و کەرەستەی نەگونجاو لە قوتابخانەدا*\nقوتابیی ناوبراو مکیاج یان کەرەستەی نەگونجاوی بەکارهێناوە کە لەگەڵ ڕێنماییەکانی پۆشاکی فەرمیدا یەکناگرێتەوە.\nداواکارین بە وردی چاودێریی بکەن بۆ ئەوەی بە تەواوی پابەندی ڕێنماییەکان بێت.`; break;
            case 'hallway_noise': msg += `📌 *بابەت: دروستکردنی ژاوەژاو و دەنگەدەنگ لە ڕاڕەوەکانی قوتابخانەدا*\nقوتابیی ناوبراو دەنگەدەنگ و ژاوەژاوی دروستکردووە لە ڕاڕەوەکانی قوتابخانەدا لە کاتی وانەکاندا.\nتکایە هانی بدەن بۆ پابەندبوون بە بێدەنگی و پاراستنی ئارامیی قوتابخانە.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *بابەت: چوونەدەرەوە لە پۆل بێ مۆڵەتی مامۆستا*\nقوتابیی ناوبراو لە کاتی وانەدا و بەبێ وەرگرتنی مۆڵەت لە مامۆستای وانەکە لە پۆل چووەتە دەرەوە.\nئەم ڕەفتارە بە تەواوی نادروستە، داواکارین سەردانی کارگێڕیی قوتابخانە بکەن لە بەرواری ${formattedDate} کاتژمێر ${formattedTime}.`; break;
            default: msg += `ئاگادارییەکی فەرمی لە کارگێڕیی قوتابخانەوە سەبارەت بە قوتابیی ناوبراو بۆ بەدواداچوون.`;
        }

        msg += `\n\nلەگەڵ ڕێز و سوپاس،\n*کارگێڕیی قوتابخانە*`;
    } else if (isEn) {
        msg = `Greetings,\nThe school administration would like to reach out to you as our partner in the educational journey.\n`;
        msg += `This notification concerns our student: ${name}\n`;
        msg += `Grade: ${sClass} | Section: ${sSection}\n\n`;

        switch (reason) {
            case 'absence': msg += `📌 *Subject: Notice of Frequent Absence*\nWe noticed that the aforementioned student has been frequently absent from school recently without prior notice or an official excuse.\nGiven the utmost importance of regular attendance for their academic progress, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss this matter.`; break;
            case 'badBehavior': msg += `📌 *Subject: Notice of Bad Behavior*\nInappropriate behavior has been recorded by the aforementioned student.\nWe at the school administration attach great importance to correcting students' behaviors alongside their education. We hope you visit the school on ${formattedDate} at ${formattedTime} to discuss guidance measures.`; break;
            case 'lowGrades': msg += `📌 *Subject: Notice of Academic Decline*\nThrough our continuous evaluations and exams, we noticed that the student's academic level has declined recently.\nOut of our concern for their future, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss ways to improve their performance.`; break;
            case 'goodBehavior': msg += `🌟 *Subject: Commendation for Good Behavior*\nThe school administration is pleased with the student for their excellent behavior, high morals, and adherence to school rules.\nThis commitment reflects your good upbringing. Thank you for your efforts, and we wish the student continued success.`; break;
            case 'highGrades': msg += `🎓 *Subject: Congratulations on Academic Excellence*\nWe send our warmest congratulations on the occasion of the outstanding academic success and high grades achieved by the student in the exams.\nThis progress is the fruit of their continuous hard work and your support. We are very proud of them.`; break;
            case 'fight': msg += `⚠️ *Subject: Summons Due to an Altercation*\nWe regret to inform you that the student got into an altercation with their peers inside the school premises.\nAccording to school guidelines regarding student safety, we request that you visit the school on ${formattedDate} at ${formattedTime} to discuss the necessary disciplinary measures.`; break;
            case 'reward': msg += `🏆 *Subject: Reward Notification*\nWith great pride, we are pleased to inform you of the decision to reward the student in appreciation of their continuous efforts and active participation.\nWe hope this reward will serve as a strong incentive for even more progress and excellence.`; break;
            case 'meeting': msg += `🤝 *Subject: Request for a Parent-Teacher Meeting*\nFor the benefit of the student, we invite you to visit the school for a special meeting regarding important educational matters.\nThe proposed time is on ${formattedDate} at ${formattedTime}. Thank you for your continued cooperation.`; break;
            case 'late': msg += `📌 *Subject: Notice of Frequent Late Arrivals*\nWe noticed that the student has arrived late to school several times recently without an acceptable excuse.\nTo ensure they do not miss crucial morning instruction, we hope you visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'homework': msg += `📌 *Subject: Neglect of Homework Assignments*\nWe noticed that the student has repeatedly failed to complete their homework assignments recently.\nConsistently doing homework is vital for academic success; please follow up and visit us on ${formattedDate} at ${formattedTime}.`; break;
            case 'phone': msg += `⚠️ *Subject: Bringing a Mobile Phone to School*\nBringing a smartphone to school is strictly prohibited by our guidelines. The student's phone has been confiscated.\nPlease visit the school on ${formattedDate} at ${formattedTime} to retrieve the phone and discuss this matter.`; break;
            case 'uniform': msg += `📌 *Subject: Non-compliance with School Uniform*\nThe student has not complied with the official required school uniform.\nAdhering to the uniform is essential; we hope you follow up on this and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'cheating': msg += `⚠️ *Subject: Notice of Cheating in Exam*\nWe regret to inform you that the student was caught cheating during an exam.\nThis behavior strongly violates academic integrity; please visit the school on ${formattedDate} at ${formattedTime} to discuss the matter.`; break;
            case 'vandalism': msg += `⚠️ *Subject: Damaging School Property*\nWe noticed that the student has caused damage to some school property or facilities.\nProtecting school property is a shared duty; please visit the school on ${formattedDate} at ${formattedTime} to arrange proper remedy.`; break;
            case 'truancy': msg += `⚠️ *Subject: Truancy / Leaving Without Permission*\nWe regret to inform you that the student left the school premises during school hours without permission.\nThis behavior poses a risk to their safety; please visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'books': msg += `📌 *Subject: Failure to Bring Textbooks and Materials*\nThe student has repeatedly failed to bring required textbooks and notebooks to school.\nThis hinders classroom participation; please follow up and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *Subject: Incident of Bullying*\nWe inform you that the student has engaged in bullying behavior towards their peers.\nWe maintain a safe environment for all students; please visit the school on ${formattedDate} at ${formattedTime} to address this.`; break;
            case 'sleeping': msg += `📌 *Subject: Sleeping and Lack of Attention in Class*\nTeachers noticed that the student frequently sleeps or is highly inattentive during classes.\nThis affects their comprehension; please monitor their sleeping schedule and visit us on ${formattedDate} at ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *Subject: Note on Personal Hygiene*\nWe kindly draw your attention to the importance of the student maintaining good personal hygiene and clean attire.\nCleanliness is fundamental to a healthy school environment; please visit us on ${formattedDate} at ${formattedTime}.`; break;
            case 'profanity': msg += `⚠️ *Subject: Use of Inappropriate Language*\nWe inform you that the student has used inappropriate language inside the school.\nThis behavior is unacceptable; please visit the school on ${formattedDate} at ${formattedTime} to help correct this conduct.`; break;
            case 'smoking': msg += `⚠️ *Subject: Smoking on School Premises*\nWe regret to inform you that the student was caught smoking inside the school premises.\nThis poses a health risk and violates school rules; please visit the school immediately on ${formattedDate} at ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *Subject: Leaving Early Before End of Day*\nThe student left school before dismissal time without permission from the administration.\nThis affects their safety; please visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'participation': msg += `📌 *Subject: Lack of Classroom Participation*\nTeachers noted that the student's participation in classroom discussions is very low.\nThis affects their academic standing; please encourage them and visit us on ${formattedDate} at ${formattedTime}.`; break;
            case 'forbidden': msg += `⚠️ *Subject: Bringing Prohibited Items*\nProhibited items were found with the student inside the school, violating school safety regulations.\nPlease visit the school urgently on ${formattedDate} at ${formattedTime}.`; break;
            case 'health': msg += `🏥 *Subject: Health Issue Notification*\nWe inform you that the student experienced a health issue or felt unwell during the school day.\nPlease contact us or visit the school promptly to check on their condition.`; break;
            case 'trip': msg += `🚌 *Subject: Educational School Trip*\nThe school is organizing an educational and recreational trip for students.\nWe request your consent for the student to participate on ${formattedDate} at ${formattedTime}. Please contact the administration.`; break;
            case 'fees': msg += `💰 *Subject: Outstanding School Fees*\nWe would like to remind you regarding overdue tuition or school fees for the student.\nPlease visit the accounts department at your earliest convenience.`; break;
            case 'parent_council': msg += `👥 *Subject: Parents Council Meeting Invitation*\nYou are cordially invited to attend the Parents Council meeting.\nYour input is valuable; please attend on ${formattedDate} at ${formattedTime}.`; break;
            case 'exam_schedule': msg += `📅 *Subject: Exam Schedule Announcement*\nThe upcoming examination schedule has been finalized and published.\nPlease support and prepare the student for their exams.`; break;
            case 'document_missing': msg += `📄 *Subject: Missing Official Documents*\nThere are missing official documents in the student's file (such as photos, ID copies, or records).\nPlease provide these documents to the administration as soon as possible.`; break;
            case 'excellent_project': msg += `💡 *Subject: Commendation for an Outstanding Project*\nWe express our gratitude and commend the student for completing an exceptional, creative project.\nThis reflects their ingenuity; congratulations to you and the student.`; break;
            case 'activity': msg += `🎭 *Subject: Participation in School Activity*\nThe student has been selected to participate in an important school event or activity.\nYour support and encouragement will be a great motivation for them.`; break;
            case 'late_pickup': msg += `⏰ *Subject: Late Pickup After School Hours*\nIt was noted that the student was picked up very late after the end of the school day.\nPlease ensure timely pickup to guarantee their safety and well-being.`; break;
            case 'bus_issue': msg += `🚐 *Subject: School Bus Transportation Note*\nThere is an important notice regarding the student's school bus transportation or arrival at pickup points.\nPlease contact the bus driver or administration on ${formattedDate} at ${formattedTime}.`; break;
            case 'forgot_id': msg += `📌 *Subject: Notice of Missing School ID/Badge*\nWe noticed that the student attended school without wearing their required school ID badge.\nWearing the badge is necessary for identification and school safety; please remind them.`; break;
            case 'disrespect_teacher': msg += `⚠️ *Subject: Urgent Summons Regarding Disrespect to Teacher*\nWe regret to inform you that the student behaved inappropriately and showed disrespect towards a teacher.\nRespect for educators is fundamental; please visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'lack_focus': msg += `📌 *Subject: Lack of Focus and Distraction in Class*\nTeachers reported that the student is frequently distracted and inattentive during lessons.\nPlease discuss this at home and work with us to improve their focus and performance.`; break;
            case 'eating_in_class': msg += `📌 *Subject: Eating Food During Class*\nThe student was eating food or drinking during lecture time, violating classroom discipline rules.\nPlease advise them to eat only during designated recess breaks.`; break;
            case 'chewing_gum': msg += `📌 *Subject: Chewing Gum in Class*\nThe student was observed repeatedly chewing gum during lessons, which is contrary to classroom decorum.\nPlease advise them to observe classroom discipline.`; break;
            case 'failing_exam': msg += `⚠️ *Subject: Notice of Failing Recent Exam*\nWe regret to inform you that the student's score on the recent exam did not meet the required passing standard.\nPlease visit the school on ${formattedDate} at ${formattedTime} to discuss a remedial improvement plan.`; break;
            case 'damaging_books': msg += `⚠️ *Subject: Damaging School Textbooks*\nIt was observed that the student has damaged or torn pages of their textbooks.\nPlease advise them on the importance of respecting and preserving educational materials.`; break;
            case 'makeup_accessories': msg += `📌 *Subject: Unauthorized Makeup or Accessories*\nThe student used makeup or wore accessories conflicting with the official school dress code.\nPlease ensure strict compliance with school guidelines.`; break;
            case 'hallway_noise': msg += `📌 *Subject: Making Noise in School Hallways*\nThe student caused disruptions and excessive noise in school hallways during classes.\nPlease advise them to maintain quietness and respect the learning environment.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *Subject: Leaving Class Without Teacher's Permission*\nThe student left the classroom during a lesson without seeking permission from the teacher.\nThis behavior is unacceptable; please visit the school on ${formattedDate} at ${formattedTime}.`; break;
            default: msg += `General notification from the school administration regarding the aforementioned student for follow-up.`;
        }

        msg += `\n\nWith respect and regards,\n*School Administration*`;
    } else {
        // Arabic
        msg = `السلام عليكم ورحمة الله وبركاته،\nتود إدارة المدرسة التواصل معكم بصفتكم شركاءنا في المسيرة التعليمية والتربوية.\n`;
        msg += `هذا الإشعار يخص الطالب/ـة المحترم/ـة: ${name}\n`;
        msg += `الصف: ${sClass} | الشعبة: ${sSection}\n\n`;

        switch (reason) {
            case 'absence': msg += `📌 *الموضوع: إشعار بالغياب المتكرر عن المدرسة*\nلقد لوحظ تكرار غياب الطالب المذكور عن الدوام المدرسي خلال الفترة الأخيرة دون تقديم عذر مقبول مسبقاً.\nنظراً لما يترتب على هذا الغياب من ضياع للحصص الدراسية وتأخر في التحصيل العلمي، نأمل منكم التكرم بزيارة إدارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الأمر والاطمئنان على وضعه.`; break;
            case 'badBehavior': msg += `📌 *الموضوع: إشعار بمخالفة سلوكية غير مقبولة*\nتم تسجيل بعض التصرفات والسلوكيات غير اللائقة من قبل الطالب المذكور داخل الحرم المدرسي.\nإننا في إدارة المدرسة نولي تقويم السلوك أهمية قصوى توازي اهتمامنا بالجانب التعليمي، لذا نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للتعاون معنا في معالجة هذا السلوك وتوجيهه بالشكل السليم.`; break;
            case 'lowGrades': msg += `📌 *الموضوع: إشعار بتراجع المستوى الدراسي والتحصيل العلمي*\nمن خلال المتابعة المستمرة لنتائج الامتحانات والتقييمات، لاحظنا تراجعاً ملحوظاً في درجات الطالب المذكور ومستواه العلمي.\nحرصاً منا على مستقبله وتفوقه، نرجو منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمقابلة الكادر التدريسي والاطلاع على نقاط الضعف ووضع خطة مشتركة لرفع مستواه.`; break;
            case 'goodBehavior': msg += `🌟 *الموضوع: كتاب شكر وتقدير لحسن السيرة والسلوك*\nيسر إدارة المدرسة أن تعرب لكم عن بالغ فخرها واعتزازها بالطالب المذكور، وذلك لما يتمتع به من خلق رفيع، وأدب جم، والتزام تام بأنظمة وتعليمات المدرسة.\nإن هذا الالتزام المتميز يعكس بلا شك حسن تربيتكم ومتابعتكم المستمرة. شكراً لجهودكم ونتمنى له دوام التميز والنجاح.`; break;
            case 'highGrades': msg += `🎓 *الموضوع: تهنئة وتبريكات بالتفوق الدراسي الباهر*\nنرفع إليكم أسمى آيات التهاني والتبريكات بمناسبة التفوق الدراسي والدرجات العالية المتميزة التي حققها الطالب المذكور في الامتحانات.\nإن هذا الإنجاز الرائع هو ثمرة جهده ومثابرته ودعمكم اللامحدود له. إدارة المدرسة فخورة جداً به وتتمنى له مستقبلاً باهراً وحافلاً بالنجاحات.`; break;
            case 'fight': msg += `⚠️ *الموضوع: استدعاء عاجل بسبب المشاركة في شجار بالمدرسة*\nنأسف لإبلاغكم بأن الطالب المذكور قد تورط في شجار وسلوك عدائي مع زملائه داخل الحرم المدرسي.\nانطلاقاً من حرصنا الشديد على توفير بيئة آمنة للجميع وتطبيق لوائح الانضباط، نطلب منكم الحضور عاجلاً إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الحادثة واتخاذ الإجراءات اللازمة.`; break;
            case 'reward': msg += `🏆 *الموضوع: إشعار بمنح مكافأة / تكريم للطالب*\nبكل فخر واعتزاز، يسعدنا إبلاغكم بصدور قرار تكريم الطالب المذكور ومنحه مكافأة تشجيعية تقديراً لتميزه وجهوده المستمرة ومشاركته الفعالة.\nنبارك لكم وله هذا التكريم، ونتمنى أن يكون دافعاً قوياً له لتحقيق المزيد من التقدم والإبداع في مسيرته.`; break;
            case 'meeting': msg += `🤝 *الموضوع: دعوة خاصة لحضور اجتماع مع إدارة المدرسة*\nحرصاً على مصلحة الطالب المذكور وتوفير أفضل بيئة تعليمية له، نوجه لكم هذه الدعوة الكريمة لزيارتنا وعقد اجتماع لمناقشة بعض الأمور الهامة.\nالموعد المقترح هو بتاريخ ${formattedDate} الساعة ${formattedTime}. يرجى تأكيد الحضور أو التواصل لترتيب موعد آخر، شاكرين تعاونكم المستمر.`; break;
            case 'late': msg += `📌 *الموضوع: إشعار بتكرار التأخر الصباحي عن طابور الصباح*\nلوحظ تكرار تأخر الطالب المذكور عن موعد الاصطفاف الصباحي وبداية الحصة الأولى لعدة مرات دون عذر مقبول.\nنظراً لأهمية بداية اليوم الدراسي في استيعاب الدروس، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الأمر والحد من تكراره.`; break;
            case 'homework': msg += `📌 *الموضوع: إشعار بإهمال أداء الواجبات المدرسية*\nنود إحاطتكم علماً بأن الطالب المذكور قد تكرر منه عدم حل وأداء الواجبات المنزلية والمهام الموكلة إليه.\nإن إهمال الواجبات يؤثر سلباً على استيعابه ومستواه التحصيلي، لذا نأمل منكم متابعته في المنزل وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'phone': msg += `⚠️ *الموضوع: إشعار بمخالفة إحضار الهاتف المحمول إلى المدرسة*\nكما تعلمون فإن إحضار الهواتف الذكية إلى الحرم المدرسي ممنوع تماماً بموجب اللوائح المنظمة. وقد تم ضبط الهاتف بحوزة الطالب المذكور داخل المدرسة.\nنرجو منكم الحضور شخصياً لاستلام الهاتف بتاريخ ${formattedDate} الساعة ${formattedTime} والتوقيع على التعهد بعدم تكرار ذلك.`; break;
            case 'uniform': msg += `📌 *الموضوع: إشعار بعدم الالتزام بالزي المدرسي الموحد*\nلوحظ عدم التزام الطالب المذكور بالزي المدرسي المعتمد والمظهر العام اللائق لطلاب المدرسة.\nإن الالتزام بالزي جزء لا يتجزأ من الانضباط المدرسي، لذا نأمل منكم توجيهه ومتابعة التزامه وزيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'cheating': msg += `⚠️ *الموضوع: إشعار بضبط حالة غش أثناء الامتحان*\nنأسف لإبلاغكم بأنه قد تم ضبط الطالب المذكور في حالة غش ومخالفة صريحة للتعليمات أثناء أداء الامتحان.\nإن هذا السلوك يتنافى مع قيم الأمانة العلمية وقوانين الامتحانات، لذا يرجى الحضور عاجلاً بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات المتخذة.`; break;
            case 'vandalism': msg += `⚠️ *الموضوع: إشعار بالتسبب في إتلاف أو تخريب ممتلكات المدرسة*\nتسبب الطالب المذكور في إلحاق الضرر أو إتلاف بعض ممتلكات ومرافق المدرسة نتيجة الإهمال أو السلوك غير المنضبط.\nالمحافظة على الممتلكات مسؤولية الجميع، لذا نأمل منكم زيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر وتحمل تكاليف الإصلاح إن لزم.`; break;
            case 'truancy': msg += `⚠️ *الموضوع: إشعار بالهروب من المدرسة أو الحصص الدراسية*\nنحيطكم علماً ببالغ القلق بأن الطالب المذكور قد غادر المدرسة أو تخلف عن حضور الحصص دون إذن رسمي مسبق.\nنظراً لخطورة هذا السلوك على سلامته وتحصيله، نرجو منكم مراجعة الإدارة بشكل عاجل بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'books': msg += `📌 *الموضوع: إشعار بعدم إحضار الكتب والدفاتر المدرسية*\nتكرر عدم إحضار الطالب المذكور للكتب والدفاتر المدرسية المخصصة للمواد الدراسية المقررة.\nإن هذا الإهمال يعيق متابعته للشرح ومشاركته الصفية، لذا نأمل منكم التأكيد عليه ومتابعة حقيبته وزيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *الموضوع: إشعار بممارسة سلوك التنمر أو إيذاء الزملاء*\nنود إبلاغكم بأن الطالب المذكور قد صدرت منه تصرفات تنطوي على تنمر أو إساءة نفسية أو جسدية تجاه زملائه.\nإننا نرفض هذه السلوكيات تماماً في مدرستنا، ونطلب منكم الحضور عاجلاً بتاريخ ${formattedDate} الساعة ${formattedTime} للتعامل مع هذا الموقف بحزم وتوجيهه.`; break;
            case 'sleeping': msg += `📌 *الموضوع: إشعار بالنوم أو قلة الانتباه أثناء الحصص*\nأفاد معلمو الطالب المذكور بأنه ينام بشكل متكرر أو يظهر خمولاً شديداً وعدم تركيز أثناء سير الحصص الدراسية.\nهذا الأمر يفقده الفائدة المرجوة من الدروس، نأمل منكم مراجعة ساعات نومه وصحته في المنزل وزيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *الموضوع: لفت انتباه بخصوص النظافة والمظهر الشخصي*\nانطلاقاً من اهتمامنا بصحة وسلامة أبنائنا الطلاب والمظهر اللائق للجميع، نود لفت انتباهكم الكريم إلى ضرورة متابعة النظافة الشخصية والملبس للطالب المذكور.\nشاكرين لكم حسن تعاونكم وحرصكم الدائم وزيارتنا إن رغبتم بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'profanity': msg += `⚠️ *الموضوع: إشعار باستخدام ألفاظ غير لائقة أو نابية*\nلقد تم رصد استخدام الطالب المذكور لكلمات وألفاظ نابية لا تليق بالبيئة التربوية والتعليمية.\nنرجو منكم التحدث معه بجدية وتوجيهه، وزيارة إدارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لضمان عدم تكرار مثل هذه التصرفات.`; break;
            case 'smoking': msg += `⚠️ *الموضوع: ضبط حالة تدخين داخل الحرم المدرسي*\nنبلغكم بأسف شديد أنه قد تم ضبط الطالب المذكور وهو يقوم بالتدخين أو حيازة أدواته داخل مرافق المدرسة.\nنظراً لخطورة هذا الأمر قانونياً وصحياً على الطالب وزملائه، نرجو منكم الحضور الفوري والعاجل إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *الموضوع: إشعار بمغادرة المدرسة قبل نهاية الدوام الرسمي*\nقام الطالب المذكور بالخروج من المدرسة ومغادرتها قبل موعد الانصراف الرسمي ودون الحصول على إذن وموافقة الإدارة.\nنظراً لما يشكله ذلك من خطر على سلامته، نأمل منكم الحضور لمناقشة الواقعة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'participation': msg += `📌 *الموضوع: إشعار بضعف التفاعل والمشاركة الصفية*\nلوحظ من قبل المعلمين قلة مشاركة الطالب المذكور وتفاعله أثناء شرح الدروس والأنشطة الصفية.\nإن التفاعل المستمر ضروري لتثبيت المعلومات، لذا نأمل منكم تشجيعه في المنزل ومراجعتنا بتاريخ ${formattedDate} الساعة ${formattedTime} لبحث سبل تحفيزه.`; break;
            case 'forbidden': msg += `⚠️ *الموضوع: إشعار بحيازة مواد أو أدوات ممنوعة في المدرسة*\nتم العثور بحوزة الطالب المذكور على مواد أو أدوات يحظر جلبها منعاً باتاً إلى المدرسة لما تشكله من خطر أو إخلال بالنظام.\nنطلب منكم الحضور عاجلاً إلى المدرسة لمناقشة هذا الأمر بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'health': msg += `🏥 *الموضوع: إشعار بوعكة صحية طارئة للطالب*\nنود إعلامكم بأن الطالب المذكور قد تعرض لعارض أو وعكة صحية مفاجئة أثناء تواجده في المدرسة وقد تم تقديم الإسعاف الأولي له.\nنرجو منكم التواصل الفوري معنا أو القدوم للاطمئنان عليه ومتابعته طبياً.`; break;
            case 'trip': msg += `🚌 *الموضوع: دعوة للمشاركة في رحلة مدرسية علمية / ترفيهية*\nتعتزم المدرسة تنظيم رحلة مدرسية هادفة ومفيدة للطلاب بهدف تنمية معارفهم وصقل خبراتهم.\nيسعدنا طلب موافقتكم الكريمة لمشاركة الطالب المذكور في هذه الرحلة المزمع إقامتها بتاريخ ${formattedDate} الساعة ${formattedTime}. يرجى التواصل لتأكيد الموافقة.`; break;
            case 'fees': msg += `💰 *الموضوع: إشعار بخصوص الأقساط والرسوم المدرسية المستحقة*\nنود تذكيركم بموعد سداد الرسوم أو الأقساط المدرسية المقررة الخاصة بالطالب المذكور والتي استحق موعد دفعها.\nنأمل منكم التكرم بمراجعة قسم الحسابات والإدارة المالية بالمدرسة لتسوية الأمر في أقرب وقت.`; break;
            case 'parent_council': msg += `👥 *الموضوع: دعوة لحضور اجتماع مجلس الآباء والمعلمين*\nيسر إدارة المدرسة دعوتكم الكريمة لحضور الاجتماع الدوري لمجلس الآباء والمعلمين.\nإن حضوركم ومشاركتكم الفعالة ركيزة أساسية لتطوير البيئة المدرسية ونجاح أبنائنا. موعدنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'exam_schedule': msg += `📅 *الموضوع: إشعار بجدول الامتحانات وتعليماتها*\nنحيطكم علماً بأنه قد تم إعلان وتوزيع جدول الامتحانات القادمة الخاصة بصف الطالب المذكور.\nنأمل منكم توفير الأجواء المناسبة له في المنزل وتنظيم وقته لتحقيق أعلى درجات النجاح والتفوق.`; break;
            case 'document_missing': msg += `📄 *الموضوع: إشعار بوجود نواقص في المستمسكات والوثائق الرسمية*\nنود تذكيركم بوجود بعض النواقص في الأوراق الثبوتية والوثائق الرسمية الخاصة بملف الطالب المذكور.\nيرجى تزويد إدارة المدرسة بالوثائق المطلوبة في أسرع وقت ممكن لاستكمال وتحديث إضبارته الرسمية.`; break;
            case 'excellent_project': msg += `💡 *الموضوع: كتاب شكر وتقدير لإنجاز مشروع متميز وإبداعي*\nتتقدم إدارة المدرسة بوافر الشكر والتقدير للطالب المذكور على تميزه وإبداعه في إنجاز المشروع المدرسي بشكل نال إعجاب وتقدير الكادر التعليمي.\nنبارك لكم هذا التميز ونتمنى له مزيداً من الإبداع والابتكار في مسيرته الدراسية.`; break;
            case 'activity': msg += `🎭 *الموضوع: إشعار بمشاركة الطالب المتميزة في نشاط مدرسي*\nنود إعلامكم باختيار ومشاركة الطالب المذكور في النشاط والفعالية المدرسية المقامة بالمدرسة.\nإن مشاركته تعزز ثقته بنفسه وتطور مهاراته، ونشكر لكم دعمكم المستمر له.`; break;
            case 'late_pickup': msg += `⏰ *الموضوع: إشعار بالتأخر المتكرر في استلام الطالب بعد انتهاء الدوام*\nلوحظ تأخركم لعدة مرات في الحضور لاستلام الطالب المذكور بعد انتهاء وقت الدوام المدرسي وانصراف الطلاب.\nحرصاً على سلامته وراحة الكادر، نرجو منكم الالتزام بالحضور في الموعد المحدد للانصراف.`; break;
            case 'bus_issue': msg += `🚐 *الموضوع: إشعار بوجود مشكلة تتعلق بخط النقل المدرسي*\nنعلمكم بوجود ملاحظة هامة أو مشكلة تتعلق بنقل الطالب المذكور في حافلة المدرسة أو تأخره في التواجد عند نقاط التجمع.\nحرصاً على انتظام وصوله وانصرافه، نأمل منكم المبادرة بالتواصل مع سائق الخط المسؤول أو مراجعة إدارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر.`; break;
            case 'forgot_id': msg += `📌 *الموضوع: إشعار بعدم ارتداء هوية المدرسة (الباج) المدرسية*\nلقد لاحظنا تكرار حضور الطالب المذكور للدوام المدرسي بدون ارتداء أو إبراز هوية المدرسة (الباج) المخصصة له.\nنود تذكيركم بأن ارتداء الهوية ضروري ومهم جداً لتسهيل عملية التعرف على الطلاب وضمان حمايتهم داخل الحرم المدرسي، نأمل منكم المتابعة والتأكيد عليه.`; break;
            case 'disrespect_teacher': msg += `⚠️ *الموضوع: استدعاء عاجل بسبب عدم احترام المعلم*\nنبلغكم ببالغ الأسف والاستياء أن الطالب المذكور قد تجاوز حدوده وقام بتصرف غير لائق وأظهر قلة احترام لأحد معلميه أثناء أداء واجبه.\nاحترام المعلم وتقديره هو من أهم ركائز التربية والأخلاق في مدرستنا، لذا نأمل منكم زيارتنا بصورة عاجلة بتاريخ ${formattedDate} الساعة ${formattedTime} لاتخاذ الموقف الحازم.`; break;
            case 'lack_focus': msg += `📌 *الموضوع: إشعار بقلة التركيز وكثرة التشتت أثناء الحصص*\nلقد أفاد عدد من المعلمين بأن الطالب المذكور يعاني من قلة التركيز بشكل واضح وكثرة التشتت والانشغال بأشياء أخرى وتحدثه مع زملائه أثناء الشرح.\nهذا التشتت يضعف من قدرته على الفهم والمتابعة، لذا نأمل منكم الجلوس معه ومتابعة وضعه الدراسي والأسري لكي يتحسن تركيزه ومستواه.`; break;
            case 'eating_in_class': msg += `📌 *الموضوع: إشعار بمخالفة تناول الأطعمة داخل الفصل المدرسي*\nقام الطالب المذكور بتناول الأطعمة أو المشروبات داخل الفصل وأثناء سير الحصة الدراسية، وهو تصرف يتنافى مع قوانين الانضباط الصفي المعتمدة.\nنأمل منكم توجيهه ونصحه بضرورة احترام وقت الحصة والالتزام بتناول الوجبات فقط خلال أوقات الفسحة والاستراحة المخصصة لذلك.`; break;
            case 'chewing_gum': msg += `📌 *الموضوع: إشعار بمخالفة مضغ العلكة أثناء الدروس*\nلقد لوحظ مراراً أن الطالب المذكور يقوم بمضغ العلكة داخل الفصل وأثناء شرح المعلم، وهو تصرف يعكس عدم الجدية ومخالف لقوانين المدرسة.\nنأمل منكم التحدث معه ودعمه للالتزام بالتعليمات المدرسية التي تهدف إلى توفير بيئة صفية يسودها الانضباط والاحترام المتبادل.`; break;
            case 'failing_exam': msg += `⚠️ *الموضوع: إشعار بالرسوب وضعف الأداء في الامتحان الأخير*\nمع الأسف الشديد، نعلمكم بأن نتائج الامتحان الأخير للطالب المذكور لم تكن في المستوى الأكاديمي المطلوب مما أدى إلى رسوبه في المادة.\nلمعرفة مكامن الضعف ووضع خطة علاجية لرفع مستواه، نأمل منكم زيارتنا في المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة وضعه العلمي بتفصيل.`; break;
            case 'damaging_books': msg += `⚠️ *الموضوع: إشعار بإهمال وتخريب أو تمزيق الكتب المدرسية*\nلقد لاحظنا أن الطالب المذكور لا يعتني بكتبه المدرسية المعطاة له، بل قام بتخريبها، الكتابة عليها، أو تمزيق صفحات منها بشكل متعمد أو نتيجة الإهمال.\nنأمل منكم توجيه إنذار له وتحذيره حول أهمية احترام وحماية مواد الدراسة والكتب المدرسية التي توفرها الدولة كعهد في ذمته.`; break;
            case 'makeup_accessories': msg += `📌 *الموضوع: إشعار باستخدام مستحضرات تجميل أو إكسسوارات غير لائقة*\nقام الطالب/الطالبة المذكور(ة) بإحضار أو استخدام المكياج ومواد التجميل أو ارتداء إكسسوارات تخالف بشكل صريح قوانين الزي الرسمي والتربية داخل الحرم المدرسي.\nنأمل منكم المتابعة الدقيقة والتأكد من خروجه(ا) من المنزل بمظهر يتوافق تماماً مع التعليمات المدرسية الصارمة بهذا الخصوص.`; break;
            case 'hallway_noise': msg += `📌 *الموضوع: إشعار بإحداث ضوضاء وإزعاج في الممرات المدرسية*\nتسبب الطالب المذكور في إحداث ضوضاء وأصوات مزعجة عالية والركض في الممرات المدرسية أثناء الحصص أو فترة الاستراحة مما أدى إلى إرباك وإزعاج الفصول الأخرى.\nنأمل منكم التحدث معه بجدية لحثه على الالتزام بالهدوء واحترام حق زملائه في بيئة تعليمية هادئة ومنضبطة.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *الموضوع: إشعار بمغادرة الفصل الدراسي بدون إذن المعلم*\nفي تصرف يدل على التمرد، غادر الطالب المذكور الفصل الدراسي أثناء سير الحصة وبدون طلب أو الحصول على إذن مسبق من المعلم المسؤول.\nهذا السلوك الاستفزازي غير مقبول إطلاقاً ويعيق سير الدرس، لذا نأمل منكم زيارتنا بصورة عاجلة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة هذه المخالفة الانضباطية.`; break;
            default: msg += `رسالة وإشعار عام من إدارة المدرسة يخص الطالب المذكور أعلاه للمتابعة.`;
        }

        msg += `\n\nمع الاحترام والتقدير،\n*إدارة المدرسة*`;
    }
    return msg;
};

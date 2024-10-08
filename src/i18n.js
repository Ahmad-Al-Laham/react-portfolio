import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, Translation } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          portfolio: "portfolio",
          About: "About",
          Home: "Home",
          Experience: "Experience",
          Projects: "Projects",
          Contact: "Contact",
          FrontendDeveloper: "Frontend Developer",
          FrontDescription:
            "I'm  a  frontend developer with experience in building responsive  and optimized sites",
          BackendDeveloper: "Backend Developer",
          BackDescription:
            " I have experience developing fast and optimised and APIs",
          UiDesiner: "Ui Desiner",
          UiDescription:
            "  I have designed multiple landing pages and have create design system as well",
          greeting: "Hi,I'm Ahmad",
          description:
            "I'm a frontend developer I 'am using react .Reach out if you'd like to learn more",
          btn: "Contact Me",
          Contact: "Contact Us",
          p: "Feel free to reach out",
          labelMessage: "Send me a message",
          userName: "Your Name",
          userEmail: "Your Email",
          message: "Message",
          send: "SEND",
          location: "Location",
        },
      },
      ar: {
        translation: {
          portfolio: "ملف الخبرة",
          About: "حول",
          Home: "الصفحة الرئيسية",
          Experience: "الخبرة",
          Projects: "المشاريع",
          Contact: "اتصل بنا",
          FrontendDeveloper: "مطور فرونت ايند",
          FrontDescription:
            "أنا مطور واجهة أمامية ولدي خبرة في بناء مواقع متجاوبة ومُحسَّنة",
          BackendDeveloper: "مطور باك ايند",
          BackDescription:
            "لدي خبرة في تطوير واجهات برمجة التطبيقات السريعة والمحسّنة",
          UiDesiner: "مصمم واجهات",
          UiDescription:
            "لقد قمت بتصميم العديد من صفحات الهبوط وقمت بإنشاء نظام تصميم أيضًا",
          greeting: "مرحبا , انا احمد",
          description:
            "أنا مطور واجهة أمامية وأستخدم React.تواصل معنا إذا كنت ترغب في معرفة المزيد",
          btn: "تواصل معي",
          Contact: "تواصل معنا",
          p: "لا تتردد في التواصل معنا",
          labelMessage: "ارسل لي رسالة",
          userName: "اسم المستخدم",
          userEmail: "البريد الالكتروني",
          message: "رسالة",
          send: "ارسل",
          location: "موقع",
        },
      },
    },
  });

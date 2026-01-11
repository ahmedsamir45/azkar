import './About.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function About() {
  return (
    <div className="about">
      <h1>نبذة عنا</h1>
      <div className="wrapper">


      <p>
        هذا التطبيق مخصص لعرض الأذكار اليومية بطريقة منظمة وسهلة الاستخدام. 
        يمكنك تصفح جميع الفئات ومتابعة الأذكار اليومية بسهولة.
      </p>
      <p>
        تم تصميم هذا المشروع باستخدام React وSCSS وReact Router لإنشاء تجربة مستخدم سلسة وسريعة.
      </p>

      </div>
      <div className="social-links">
        <a href="https://github.com/ahmedsamir45" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/ahmedsamir45/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  )
}

export default About

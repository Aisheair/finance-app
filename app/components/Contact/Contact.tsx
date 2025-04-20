
import phone from '../../assets/OR6G0P0.jpg'
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact</h2>
      <p>Get in touch with our team for support or inquiries</p>
      <div className="contact-content">
        <div className="contact-info">
          <div className="image-overlay">
            <img src={phone} alt="Contact background" className="contact-image" />
            <div className="info-box">
              <p><FaEnvelope /> support@f2b.com</p>
              <p><FaPhoneAlt /> (800) 123-4567</p>
              <p><FaMapMarkerAlt /> 123 Financial Street, Suite 456<br />San Francisco, CA 94105</p>
              <div className="social-icons">
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://linkedin.com"><FaLinkedin /></a>
                <a href="https://github.com"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" />

            <label htmlFor="subject">Subject</label>
            <select id="subject">
              <option>Select a subject</option>
              <option>Support</option>
              <option>Sales</option>
              <option>General Inquiry</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can we help you?"></textarea>

            <div className="checkbox">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a></label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

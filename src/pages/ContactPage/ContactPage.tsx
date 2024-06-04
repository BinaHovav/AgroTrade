import React from 'react';
import './styles.scss';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>
        We are here to help you. Contact us through any of the following ways:
      </p>
      <ul>
        <li>Email: support@yourcompany.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>
          Chat: Click the chat icon in the bottom right corner to start a chat
        </li>
      </ul>
      <h3>Frequently Asked Questions</h3>
      <div className="faq">
        <p>
          <strong>Q: How can I track my order?</strong>
        </p>
        <p>A: You can track your order through your account dashboard.</p>
        <p>
          <strong>Q: What is your return policy?</strong>
        </p>
        <p>
          A: We accept returns within 30 days of purchase. Please refer to our
          return policy page for more details.
        </p>
        {/* Add more FAQs as needed */}
      </div>
    </section>
  );
};

export default ContactPage;

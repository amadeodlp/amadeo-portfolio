import { useState, ChangeEvent, FormEvent } from 'react';
import { ContactProps, ContactFormData } from './types';
import HeroSection from '@/components/organisms/HeroSection';
import SectionHeader from '@/components/molecules/SectionHeader';
import emailjs from "emailjs-com";

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID as string;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY as string;
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
    
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error sending email:", err);
      setError('There was a problem submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'amadeodlp@hotmail.com',
      link: 'mailto:amadeodlp@hotmail.com',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Phone',
      value: '+54 11-2785-2352',
      link: 'tel:+541127852352',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Buenos Aires, Argentina',
      link: 'https://maps.google.com/?q=Buenos+Aires,Argentina',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amadeodlp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/amadeodlp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/amadeodlp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>

      ),
    },
  ];

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">CONTACT</span>
          </>
        }
        pageType="contact"
        contactForm={
          <div className="w-full bg-dark-light/70 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10 max-w-2xl md:min-w-[675px] lg:min-w-[750px] xl:min-w-[825px]">
            <h3 className="text-xl font-bold mb-4 text-white">Send me a message</h3>
            
            {isSubmitted ? (
              <div
                className="bg-green-500/20 border border-green-500/30 text-green-500 p-4 rounded-lg mb-2"
              >
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-sm font-medium underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 text-red-500 p-3 rounded-lg mb-2 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-white/90 mb-1 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-dark-light/70 border border-white/20 rounded-lg focus:outline-none focus:border-[#00E9C5] text-white shadow-inner"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/90 mb-1 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-dark-light/70 border border-white/20 rounded-lg focus:outline-none focus:border-[#00E9C5] text-white shadow-inner"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/90 mb-1 text-sm">
                  Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-dark-light/70 border border-white/20 rounded-lg focus:outline-none focus:border-[#00E9C5] text-white shadow-inner"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/90 mb-1 text-sm">
                  Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-dark-light/70 border border-white/20 rounded-lg focus:outline-none focus:border-[#00E9C5] text-white resize-none shadow-inner"
                  ></textarea>
                </div>
                
                <div className="mt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-[#653490] text-white font-medium rounded-lg transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#7e4aaa] hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        }
      />

      <section className="bg-dark py-20 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader title="WHERE TO FIND ME" color="cyan" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-light p-6 rounded-lg flex flex-col items-center text-center hover:bg-[#1E1E1E] transition-colors"
              >
                <div className="text-[#00E9C5] mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
                <p className="text-white/70">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10">
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Follow me on social media</h3>
              
              <div className="bg-dark-light p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-dark rounded-lg hover:bg-[#181818] transition-colors"
                    >
                      <div className="text-[#00E9C5] mr-4">
                        {social.icon}
                      </div>
                      <span className="text-white font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-3">
                    <h4 className="text-xl font-bold mb-4 text-white">Working hours</h4>
                  </div>
                  <div className="p-3 bg-dark rounded-lg">
                    <div className="text-white/80 font-medium mb-1">Monday to Friday</div>
                    <div className="text-white font-semibold">09 AM - 8 PM</div>
                  </div>
                  <div className="p-3 bg-dark rounded-lg">
                    <div className="text-white/80 font-medium mb-1">Saturday</div>
                    <div className="text-white font-semibold">09 AM - 1 PM</div>
                  </div>
                  <div className="p-3 bg-dark rounded-lg">
                    <div className="text-white/80 font-medium mb-1">Sunday</div>
                    <div className="text-white font-semibold">Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

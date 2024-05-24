import { ContactHeader } from '@/components/contact-details/contact-details';
import ContactForm from '@/components/contact-form/contact-form';
import ContactImage from '@/assets/Contact.webp';
const Contact: React.FC = () => {
  return (
    <div className="pt-8 bg-lightPink flex flex-col items-center justify-center px-8 lg:py-16  mx-auto text-center">
      <ContactHeader title="Contact Form" subtitle="Get In Touch" />
      <br />
      <ContactForm contactImage={ContactImage} formAction="#" />
    </div>
  );
};

export default Contact;

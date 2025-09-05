import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_qklbs5m';
const EMAILJS_TEMPLATE_ID = 'template_7y0p3dd';
const EMAILJS_PUBLIC_KEY = 'VHqdZf6et7WQV3YAA';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData extends Record<string, unknown> {
  name: string;
  email: string;
  question: string;
  phone?: string;
  interested_in?: string;
  form_source: string;
  submission_date: string;
  page_url: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      data
    );
    
    if (response.status !== 200) {
      throw new Error(`EmailJS error: ${response.text}`);
    }
    
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
};

export const createEmailData = (
  formData: any, 
  formSource: string, 
  questionField = 'question'
): EmailData => {
  return {
    name: formData.name || formData.fullName,
    email: formData.email,
    question: formData[questionField] || formData.message,
    phone: formData.phone || '',
    interested_in: formData.interestedIn || '',
    form_source: formSource,
    submission_date: new Date().toLocaleString(),
    page_url: window.location.href,
  };
};
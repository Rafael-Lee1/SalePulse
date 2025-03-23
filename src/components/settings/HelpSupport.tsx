
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const HelpSupport = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Contact form submitted:", contactForm);
    
    // Reset form
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
      duration: 3000,
    });
  };

  const faqs = [
    {
      question: "How do I change my account password?",
      answer: "You can change your password by going to the Security tab in your Settings. From there, enter your current password followed by your new password twice to confirm.",
    },
    {
      question: "Can I connect multiple devices to my account?",
      answer: "Yes, you can sign in to your account from multiple devices. You can view and manage all active sessions from the Security tab in your Settings.",
    },
    {
      question: "How do I enable Two-Factor Authentication?",
      answer: "To enable 2FA, go to the Security tab in your Settings and toggle on Two-Factor Authentication. Follow the prompts to set it up with an authenticator app.",
    },
    {
      question: "How can I delete my account?",
      answer: "Account deletion is permanent and cannot be undone. To delete your account, please contact our support team through the Contact Support form.",
    },
    {
      question: "What happens to my data when I delete my account?",
      answer: "When you delete your account, all your personal information is permanently removed from our systems. However, anonymized usage data may be retained for analytics purposes.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* FAQs */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-4 flex items-center">
          <HelpCircle size={16} className="mr-2" />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#30313A]">
              <AccordionTrigger className="text-white text-sm py-3 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#87888C] text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Troubleshooting Guides */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-4">
          Troubleshooting Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Connection Issues", icon: <ArrowUpRight size={16} /> },
            { title: "Payment Problems", icon: <ArrowUpRight size={16} /> },
            { title: "Account Access", icon: <ArrowUpRight size={16} /> },
            { title: "Performance Optimization", icon: <ArrowUpRight size={16} /> },
          ].map((guide, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between bg-[#171821] p-3 rounded-md text-white hover:bg-[#262732] transition-colors"
            >
              <span>{guide.title}</span>
              {guide.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-4 flex items-center">
          <MessageSquare size={16} className="mr-2" />
          Contact Support
        </h2>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#87888C] text-sm mb-1">Name</label>
              <Input
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
                className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
              />
            </div>
            <div>
              <label className="block text-[#87888C] text-sm mb-1">Email</label>
              <Input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
                className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#87888C] text-sm mb-1">Subject</label>
            <Input
              name="subject"
              value={contactForm.subject}
              onChange={handleContactChange}
              required
              className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
            />
          </div>
          <div>
            <label className="block text-[#87888C] text-sm mb-1">Message</label>
            <Textarea
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              required
              className="w-full min-h-[120px] bg-[#171821] text-white rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#A9DFD8] text-[#171821] px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-[#8BCEC7]"
            >
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

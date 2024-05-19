import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Judicature, and how does it work?",
    answer:
      "Judicature is a platform that simplifies the legal process. Clients can sign up, fill out forms for various case categories, and receive proposals from lawyers. Once a lawyer is selected, they work together to file and track the case.",
  },
  {
    question: "How do I sign up as a client on judicature?",
    answer:
      "To sign up as a client, visit our website, then click on the 'Sign Up' button. Follow the prompts to create your account.",
  },
  {
    question:
      "Can I use judicature to find legal help for different types of cases?",
    answer:
      "Yes, judicature offers solutions for a wide range of case categories, allowing you to find legal assistance tailored to your specific needs.",
  },
  {
    question: "How do lawyers join judicature and submit proposals?",
    answer:
      "Lawyers can sign up on judicature as well. Once registered, they can view open cases, submit proposals, and communicate with clients directly through the platform.",
  },
  {
    question: "How are lawyers on judicature vetted?",
    answer:
      "We have a rigorous vetting process for lawyers to ensure they meet our standards. This includes verifying their credentials and professional experience.",
  },
  {
    question: "Can I communicate with lawyers on judicature securely?",
    answer:
      "Yes, our platform offers secure and private messaging tools for clients and lawyers to communicate and exchange information about their cases.",
  },
  {
    question: "What happens after I select a lawyer?",
    answer:
      "After selecting a lawyer, you can work together to finalize and file your case. judicature provides a collaborative environment to streamline this process.",
  },
  {
    question: "How can I track the progress of my case on judicature?",
    answer:
      "judicature provides a tracking feature that allows you to monitor the progress of your case, receive updates, and stay informed about important milestones.",
  },
  {
    question: "Is my personal and case information safe on judicature?",
    answer:
      "Yes, we take data privacy seriously and use robust security measures to protect your personal and case information.",
  },
  {
    question: "What fees are associated with using judicature?",
    answer:
      "judicature offers flexible pricing options. Clients and lawyers can find detailed information about our fees on our website or within the app.",
  },
];

const Faq = () => {
  return (
    <div>
      <div className="flex justify-start m-10">
        <div className="flex-col justify-center my-40 mx-auto">
          <div className=" text-4xl font-bold">Frequently asked questions</div>
          <div className="text-2xl font-semibold mt-5">
            Can’t find the answer you’re looking for?
            <br />
            <Link href="/contactUs">
              <u>Reach out to our customer support team.</u>
            </Link>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <p className="mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

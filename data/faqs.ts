export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How long does it take to publish a book?",
    answer: "The timeline varies depending on the services you need. Generally, a full publishing project—including editing, design, and distribution setup—can take anywhere from 3 to 6 months. We work closely with you to meet your specific deadlines."
  },
  {
    id: 2,
    question: "Do I keep the rights to my book?",
    answer: "Absolutely! At Benjamin Publishers, authors retain 100% of their intellectual property rights. We are a service provider, not a traditional publisher that takes your rights."
  },
  {
    id: 3,
    question: "Can you help me get my book on Amazon?",
    answer: "Yes, we specialize in Amazon KDP setup, including both eBook and paperback formats. We also help with optimization (keywords and categories) to ensure your book is discoverable."
  },
  {
    id: 4,
    question: "What types of books do you work with?",
    answer: "We work with almost all genres, including fiction (of all sub-genres), non-fiction, memoirs, business books, children's books, and specialized academic or technical works."
  },
  {
    id: 5,
    question: "Do you offer marketing services?",
    answer: "Yes, we offer comprehensive marketing packages including Amazon Ads management, social media campaigns, author branding, and media outreach."
  }
];

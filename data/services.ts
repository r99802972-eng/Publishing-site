import { Service } from './types';

// Data for all 7 service pages
export const servicesData: Record<string, Service> = {
  writing: {
    slug: 'writing',
    title: 'Writing',
    heroTitle: 'Professional Book Writing Services',
    heroSubtitle: 'Our professional book writing team is here to transform your dreams into captivating stories that soar. We\'re here to pave the way for your literary triumph, crafting a manuscript that becomes the very bedrock of your book\'s success.',
    heroTag: 'Writing Services',
    subServices: [
      {
        title: 'Fiction Writing',
        description: 'Craft compelling stories with our expert fiction writing services. Whether it\'s a thrilling novel, a heartfelt romance, or an epic fantasy, we bring your imagination to life with professional storytelling.',
        icon: 'FaPenNib',
      },
      {
        title: 'Memoir Writing',
        description: 'Your story deserves to be told. Our memoir writing services help you document your experiences, emotions, and legacy in a beautifully written and impactful book.',
        icon: 'FaBook',
      },
      {
        title: 'Non-Fiction Writing',
        description: 'Educate, inspire, and inform with non-fiction writing that captivates readers. From self-help to business books, biographies, and thought leadership content, we help you present your ideas with clarity and depth.',
        icon: 'FaLightbulb',
      },
      {
        title: "Children's Books",
        description: "Create magical stories for young readers with our children's book writing services. We craft engaging tales with the perfect blend of creativity, simplicity, and learning elements.",
        icon: 'FaStar',
      },
      {
        title: 'Comic Book Writing',
        description: 'Bring your characters to life with dynamic storytelling for comic books and graphic novels. Our skilled writers create exciting narratives that perfectly complement your artistic vision.',
        icon: 'FaBolt',
      },
      {
        title: 'Custom Ghostwriting & Specialty Services',
        description: 'Need a personal touch or something unique? Our expert ghostwriters work closely with you to create books tailored to your voice, vision, and audience.',
        icon: 'FaFeather',
      },
    ],
  },
  editing: {
    slug: 'editing',
    title: 'Editing',
    heroTitle: 'Professional Book Editing Services',
    heroSubtitle: 'Our expert editors refine your manuscript to perfection — polishing every sentence, chapter, and idea so your book reads beautifully and leaves a lasting impression on every reader.',
    heroTag: 'Editing Services',
    subServices: [
      {
        title: 'Developmental Editing',
        description: 'Big-picture editing that focuses on structure, pacing, character development, and overall narrative arc. We help you shape your story from the ground up.',
        icon: 'FaEdit',
      },
      {
        title: 'Copy Editing',
        description: 'Line-by-line editing that corrects grammar, spelling, punctuation, and style inconsistencies while preserving your authentic voice throughout the manuscript.',
        icon: 'FaCheck',
      },
      {
        title: 'Proofreading',
        description: 'The final polish before publishing. We catch every last typo, formatting error, and inconsistency to ensure your book is completely error-free.',
        icon: 'FaSearchPlus',
      },
      {
        title: 'Line Editing',
        description: 'Sentence-level editing that improves flow, clarity, and style. We make your prose sing without changing your unique voice.',
        icon: 'FaAlignLeft',
      },
      {
        title: 'Beta Reading',
        description: 'Get real reader feedback before your book goes live. Our beta readers evaluate your manuscript from a reader\'s perspective and provide detailed notes.',
        icon: 'FaEye',
      },
      {
        title: 'Manuscript Assessment',
        description: 'A comprehensive evaluation of your manuscript with a full written report covering strengths, weaknesses, and actionable improvement steps.',
        icon: 'FaClipboardList',
      },
    ],
  },
  design: {
    slug: 'design',
    title: 'Design',
    heroTitle: 'Stunning Book Cover & Interior Design',
    heroSubtitle: 'Your book\'s design is its first impression — we make it unforgettable with covers and layouts that captivate readers from the very first glance and keep them turning pages.',
    heroTag: 'Design Services',
    subServices: [
      {
        title: 'Custom Cover Design',
        description: 'Eye-catching print and eBook covers designed to stand out on Amazon, bookstore shelves, and everywhere readers discover books.',
        icon: 'FaPalette',
      },
      {
        title: 'Interior Formatting & Layout',
        description: 'Professional typesetting and layout for print and digital formats — ensuring your book looks beautiful inside and reads comfortably on any device.',
        icon: 'FaLayerGroup',
      },
      {
        title: 'Author Branding Graphics',
        description: 'Build a cohesive author brand with custom logos, social media graphics, author website visuals, and promotional materials.',
        icon: 'FaBrush',
      },
      {
        title: 'Illustration Collaboration',
        description: 'We connect you with skilled illustrators for children\'s books, graphic novels, and books that need original artwork tailored to your vision.',
        icon: 'FaDraftingCompass',
      },
      {
        title: 'eBook Formatting',
        description: 'Properly formatted EPUB and MOBI files that display perfectly across all e-readers, tablets, and reading apps.',
        icon: 'FaTabletAlt',
      },
      {
        title: 'Print-Ready Files',
        description: 'Industry-standard PDF files prepared for offset and print-on-demand printing through IngramSpark, Amazon KDP, and other platforms.',
        icon: 'FaPrint',
      },
    ],
  },
  publishing: {
    slug: 'publishing',
    title: 'Publishing',
    heroTitle: 'End-to-End Book Publishing Services',
    heroSubtitle: 'From ISBN registration and global distribution to Amazon KDP setup — we handle everything so your book reaches readers worldwide, professionally published and perfectly presented.',
    heroTag: 'Publishing Services',
    subServices: [
      {
        title: 'ISBN & Copyright Registration',
        description: 'We secure your ISBN and help you register your copyright so your book is properly identified and protected from day one.',
        icon: 'FaShieldAlt',
      },
      {
        title: 'Amazon KDP Setup',
        description: 'Complete setup of your Amazon Kindle Direct Publishing account with optimized listings, categories, and keywords to maximize discoverability.',
        icon: 'FaAmazon',
      },
      {
        title: 'IngramSpark Distribution',
        description: 'Global distribution through IngramSpark to get your book into bookstores, libraries, and retailers worldwide — both print and digital.',
        icon: 'FaGlobe',
      },
      {
        title: 'eBook Conversion & Distribution',
        description: 'Convert your manuscript to EPUB/MOBI and distribute to Apple Books, Barnes & Noble, Kobo, and other major digital platforms.',
        icon: 'FaTabletAlt',
      },
      {
        title: 'Barnes & Noble & Apple Books',
        description: 'Set up and optimize your listings on Barnes & Noble Press and Apple Books to reach millions of additional readers.',
        icon: 'FaStore',
      },
      {
        title: 'Publishing Consultation',
        description: 'Not sure which publishing path is right for you? Our publishing consultants guide you through every option so you can make the best decision for your book.',
        icon: 'FaComments',
      },
    ],
  },
  printing: {
    slug: 'printing',
    title: 'Printing',
    heroTitle: 'High-Quality Book Printing Services',
    heroSubtitle: 'From short-run print-on-demand to large offset print orders — we deliver beautifully printed books with premium paper, vibrant color, and durable bindings your readers will love.',
    heroTag: 'Printing Services',
    subServices: [
      {
        title: 'Print-on-Demand',
        description: 'Eliminate upfront inventory costs with print-on-demand. Each copy is printed and shipped directly as orders come in — zero risk, zero storage.',
        icon: 'FaPrint',
      },
      {
        title: 'Offset Printing',
        description: 'For authors ordering 500+ copies, offset printing delivers the best per-unit price and the highest professional quality available.',
        icon: 'FaIndustry',
      },
      {
        title: 'Hardcover & Softcover',
        description: 'Choose from paperback, hardcover, or case-laminate binding. We match the format to your book\'s audience and price point.',
        icon: 'FaBook',
      },
      {
        title: 'Full-Color Interior Printing',
        description: 'Vibrant full-color printing for children\'s books, photo books, art books, and illustrated titles that need every color to pop.',
        icon: 'FaPalette',
      },
      {
        title: 'Bulk Order Fulfillment',
        description: 'Need 100 copies for a conference or 1,000 for a bookstore launch? We handle bulk orders with fast turnaround and careful quality control.',
        icon: 'FaBoxes',
      },
      {
        title: 'International Shipping',
        description: 'We ship printed books worldwide, directly to you or your fulfillment center, with tracking and reliable delivery partners.',
        icon: 'FaGlobe',
      },
    ],
  },
  marketing: {
    slug: 'marketing',
    title: 'Marketing',
    heroTitle: 'Powerful Book Marketing Services',
    heroSubtitle: 'From book launch campaigns to ongoing Amazon advertising and social media promotion — we build your author brand and connect your book with the readers who are waiting to discover it.',
    heroTag: 'Marketing Services',
    subServices: [
      {
        title: 'Book Launch Campaigns',
        description: 'A strategic launch plan designed to create buzz, drive early reviews, and hit bestseller lists from day one of your book\'s release.',
        icon: 'FaRocket',
      },
      {
        title: 'Amazon Marketing (AMS)',
        description: 'Targeted Amazon Ads that put your book in front of readers actively searching for titles just like yours — fully managed by our marketing team.',
        icon: 'FaAmazon',
      },
      {
        title: 'Social Media Marketing',
        description: 'Engaging social media content, ads, and campaigns across Instagram, Facebook, TikTok, and more to grow your author following and drive sales.',
        icon: 'FaHashtag',
      },
      {
        title: 'Author Website & Branding',
        description: 'A professional author website that showcases your books, tells your story, captures email subscribers, and converts visitors into readers.',
        icon: 'FaLaptop',
      },
      {
        title: 'Press Releases & Media',
        description: 'Professional press releases distributed to journalists, bloggers, and media outlets to generate publicity and reviews for your book.',
        icon: 'FaNewspaper',
      },
      {
        title: 'Email Marketing',
        description: 'Build and nurture your reader email list with compelling newsletters, launch announcements, and automated sequences that convert subscribers into buyers.',
        icon: 'FaEnvelope',
      },
    ],
  },
  'audio-book': {
    slug: 'audio-book',
    title: 'Audio Book',
    heroTitle: 'Professional Audio Book Production',
    heroSubtitle: 'Reach the billions of audiobook listeners worldwide. We handle everything from professional narration and studio recording to ACX/Audible distribution — producing a polished audio experience your listeners will love.',
    heroTag: 'Audio Book Services',
    subServices: [
      {
        title: 'Professional Narration',
        description: 'Choose from our roster of professional voice actors or bring your own narrator. We match the perfect voice to your book\'s genre and target audience.',
        icon: 'FaMicrophone',
      },
      {
        title: 'Studio-Quality Recording',
        description: 'Crystal-clear audio recorded in professional studios, free from background noise, with perfect pacing and natural delivery throughout.',
        icon: 'FaHeadphones',
      },
      {
        title: 'Audio Editing & Mastering',
        description: 'Professional editing, noise removal, and mastering to meet ACX compliance standards and deliver a polished, broadcast-quality final file.',
        icon: 'FaSlidersH',
      },
      {
        title: 'ACX & Audible Distribution',
        description: 'We set up your ACX account, upload your audio files, and distribute your audiobook to Audible, Amazon, and Apple Books for maximum reach.',
        icon: 'FaBroadcastTower',
      },
      {
        title: 'Findaway Voices Distribution',
        description: 'Distribute beyond Audible with Findaway Voices, placing your audiobook in libraries, Spotify, Libro.fm, and 40+ additional retailers.',
        icon: 'FaGlobe',
      },
      {
        title: 'Author Narrated Production',
        description: 'Want to narrate your own book? We provide recording guidance, coaching, editing, and mastering to make your self-narrated audiobook sound professional.',
        icon: 'FaUserAlt',
      },
    ],
  },
};

export const servicesList = [
  { slug: 'writing', title: 'Writing', label: 'Writing' },
  { slug: 'editing', title: 'Editing', label: 'Editing' },
  { slug: 'design', title: 'Design', label: 'Design' },
  { slug: 'publishing', title: 'Publishing', label: 'Publishing' },
  { slug: 'printing', title: 'Printing', label: 'Printing' },
  { slug: 'marketing', title: 'Marketing', label: 'Marketing' },
  { slug: 'audio-book', title: 'Audio Book', label: 'Audio Book' },
];

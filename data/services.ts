import { Service } from './types';

// Data for all 7 service pages
export const servicesData: Record<string, Service> = {
  writing: {
    slug: 'writing',
    title: 'Writing',
    heroTitle: 'Your Story Deserves to Be Written the Right Way',
    cardsTitle: 'Writing Solutions',
    workflowTitle: 'Ghost Writing',
    heroSubtitle: "We don’t just write books—we transform raw ideas into powerful, professionally crafted manuscripts that are ready to publish and sell.\n\nIf you’ve ever thought “I want to publish a book but don’t know how” or “I need someone to write my book”, you’re exactly where most successful authors once started. Our book writing services, including ghostwriting, editing support, and proofreading, turn confusion into clarity and ideas into structured, compelling manuscripts built for self publishing services, ebook publishing services, and Amazon success. From shaping your concept to preparing it for Amazon KDP publishing, we guide you through a process that removes doubt and replaces it with direction—so you can confidently publish your book on Amazon and become a published author.",
    heroClosing: 'Every published author starts with an unfinished idea—the difference is who helps them bring it to life.',
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
    workflowSteps: [
      {
        title: "Share Your Vision",
        desc: "Tell us about your book idea in a detailed call or written brief. Whether it's a memoir, fiction, or a business book, we take the time to understand your goals and writing style."
      },
      {
        title: "Research & Structured Outline",
        desc: "We create a detailed outline based on your input and our research, ensuring a strong foundation for your book. This stage includes recorded brainstorming sessions for reference."
      },
      {
        title: "Writing & Feedback Loop",
        desc: "Our expert ghostwriters bring your story to life, providing regular chapter drafts for your feedback. We offer unlimited revisions and real-time discussions via scheduled calls."
      },
      {
        title: "Refinement & Finalization",
        desc: "After incorporating all revisions, we polish the manuscript with professional editing. Every step is recorded and shared, ensuring transparency and alignment with your vision."
      }
    ],
  },
  editing: {
    slug: 'editing',
    title: 'Editing',
    heroTitle: 'Turn Your Draft Into a Book People Actually Want to Read',
    cardsTitle: 'Editing Solutions',
    workflowTitle: 'Editing',
    heroSubtitle: "Most manuscripts don’t fail because of ideas—they fail because they’re not refined properly. We turn rough drafts into professional, publication-ready manuscripts that feel clear, engaging, and impossible to put down.\n\nWhether you’re searching for a professional book editor or need to edit your manuscript before publishing, our book editing services focus on structure, clarity, flow, and emotional impact—while protecting your original voice. From proofreading your book to preparing it for self publishing services, ebook publishing services, or Amazon KDP publishing, we make sure your writing meets real publishing standards—not just “good enough.”",
    heroClosing: 'A powerful story doesn’t just get edited—it gets elevated.',
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
    workflowSteps: [
      {
        title: "Submit Your Manuscript",
        desc: "Whether your manuscript is rough, unfinished, or already complete, we step in exactly where you need us. Share your draft, and we’ll assess its strengths, gaps, and opportunities—so nothing gets overlooked."
      },
      {
        title: "Deep Editorial Review",
        desc: "Our editors perform a detailed analysis of your manuscript—structure, clarity, tone, and flow. You’ll receive clear insights on what’s working, what’s not, and what needs refinement to elevate your book."
      },
      {
        title: "Precision Editing & Feedback",
        desc: "We edit your manuscript line-by-line—enhancing clarity, fixing inconsistencies, and sharpening your voice without losing your originality. You stay involved with regular updates and feedback rounds."
      },
      {
        title: "Final Polish & Perfection",
        desc: "We finalize your manuscript with professional proofreading and polishing—ensuring it’s clean, consistent, and ready for publishing. What you get is not just edited—it’s elevated."
      }
    ],
  },
  design: {
    slug: 'design',
    title: 'Design',
    heroTitle: 'Design That Decides Whether Your Book Gets Read or Ignored',
    cardsTitle: 'Design Solutions',
    workflowPrefix: 'Our',
    workflowTitle: 'Book Design',
    heroSubtitle: "Before a reader trusts your words, they judge your book in seconds. We create visually powerful book covers and layouts that instantly capture attention and build credibility.\n\nFrom book cover design and ebook cover design to interior book layout design, every detail is crafted to match your genre, audience, and message—so your book doesn’t just exist, it competes. Our professional book cover designers ensure your book looks market-ready for Amazon KDP publishing and other platforms where first impressions decide everything. We also provide complete book formatting services, ensuring your manuscript is perfectly structured for both print and digital publishing.",
    heroClosing: 'Readers don’t read books they overlook—and design is what decides that moment.',
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
    workflowSteps: [
      {
        title: "Share Your Vision",
        desc: "Share your ideas, inspirations, or even rough concepts. Whether you have a clear vision or no direction at all, we dive deep into your genre, audience, and goals to understand exactly how your book should feel visually."
      },
      {
        title: "Concept & Creative Direction",
        desc: "Our design team develops multiple creative directions tailored to your book’s theme and market. From cover concepts to layout styles, we craft designs that don’t just look good—they attract attention and sell."
      },
      {
        title: "Design Creation & Revisions",
        desc: "We create your book cover and interior layouts with precision and creativity. You’ll review, give feedback, and request revisions until everything aligns perfectly with your vision and expectations."
      },
      {
        title: "Final Delivery & Ready-to-Publish Files",
        desc: "We deliver high-quality, print-ready and digital files optimized for platforms like Amazon KDP. Every detail is finalized to ensure your book looks exceptional—online and in print."
      }
    ],
  },
  publishing: {
    slug: 'publishing',
    title: 'Publishing',
    heroTitle: 'Your Book Isn’t Meant to Stay Unpublished',
    cardsTitle: 'Publishing Solutions',
    workflowTitle: 'Publishing',
    heroSubtitle: "You didn’t come this far just to leave your book unfinished. We turn unfinished manuscripts into published books on Amazon and beyond.\n\nWhether you're searching for how to publish a book, need self publishing services, or full ebook publishing services, we remove the confusion and handle everything for you. Most authors get stuck in “almost there.” We make sure you don’t. From Amazon KDP publishing help to full distribution, your book is positioned to be discovered, not ignored.",
    heroClosing: 'The only thing separating you from becoming a published author is execution—we handle that.',
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
    workflowSteps: [
      {
        title: "Submit Your Final Manuscript",
        desc: "Share your final manuscript with us, and we’ll review it for publishing readiness. We ensure everything is aligned—from formatting to file structure—so your book is set up for a smooth launch."
      },
      {
        title: "Formatting & Platform Setup",
        desc: "Our team professionally formats your book for print and digital platforms like Amazon KDP. We also handle account setup, metadata, ISBN guidance, and category optimization to position your book for visibility."
      },
      {
        title: "Publishing & Listing Optimization",
        desc: "We publish your book with optimized titles, descriptions, keywords, and categories to maximize discoverability. Every detail is crafted to help your book stand out and attract the right audience."
      },
      {
        title: "Launch Support & Distribution",
        desc: "We guide you through the launch process and ensure your book is live, accessible, and professionally presented across platforms. From final checks to distribution readiness—we make sure nothing is left to chance."
      }
    ],
  },
  printing: {
    slug: 'printing',
    title: 'Printing',
    heroTitle: 'Your Book Was Meant to Be Held, Not Just Stored',
    cardsTitle: 'Printing Solutions',
    workflowPrefix: 'Our',
    workflowTitle: 'Book Printing',
    heroSubtitle: "There’s a powerful shift when your book moves from a screen into someone’s hands. Our book printing services transform your manuscript into a tangible, professional product with premium paperback and hardcover printing options.\n\nBecause readers don’t just buy books—they trust what feels real. Whether you're producing one copy or a full launch batch, we ensure your book looks like it belongs on a bestseller shelf.",
    heroClosing: 'If it looks like a real book, it gets treated like one.',
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
    workflowSteps: [
      {
        title: "File Preparation",
        desc: "We carefully review and optimize your files to meet professional printing standards—ensuring proper formatting, resolution, and layout accuracy for flawless results."
      },
      {
        title: "Print Setup & Specifications",
        desc: "From paper type and binding to trim size and finish, we configure every detail to create a high-quality book that looks and feels premium."
      },
      {
        title: "Proofing & Approval",
        desc: "We provide print-ready proofs so you can review every detail and request final adjustments before moving into full production."
      },
      {
        title: "Production & Delivery",
        desc: "Your books are printed with precision and consistency, then delivered ready for distribution, sales, or personal use."
      }
    ],
  },
  marketing: {
    slug: 'marketing',
    title: 'Marketing',
    heroTitle: 'A Book Without Marketing Is a Story No One Finds',
    cardsTitle: 'Marketing Solutions',
    workflowTitle: 'Marketing',
    heroSubtitle: "Publishing is easy. Being discovered is where most authors fail. At Northcrest Book Publishers, our book marketing services are built to put your book in front of real readers—not just uploads sitting unnoticed.\n\nFrom Amazon book promotion to full book launch services, we help your book move from “published” to “purchased.” Because visibility isn’t luck—it’s strategy. If you're asking how to increase book sales, the answer is simple: your book needs attention, not just existence.",
    heroClosing: 'Great books don’t sell themselves—strategic visibility sells them.',
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
    workflowSteps: [
      {
        title: "Strategy & Positioning",
        desc: "We analyze your target audience, genre, and competition to position your book effectively and create a focused marketing strategy."
      },
      {
        title: "Brand & Asset Creation",
        desc: "We design compelling visuals, ad creatives, and messaging that align with your brand and instantly grab attention."
      },
      {
        title: "Campaign Launch",
        desc: "We launch targeted campaigns across relevant platforms to drive traffic, build awareness, and generate interest in your book."
      },
      {
        title: "Growth & Optimization",
        desc: "We monitor performance, optimize campaigns, and scale winning strategies to maximize reach, engagement, and conversions."
      }
    ],
  },
  'audio-book': {
    slug: 'audio-book',
    title: 'Audio Book',
    heroTitle: 'Your Book Should Be Heard Everywhere Your Readers Are',
    cardsTitle: 'Audio Solutions',
    workflowPrefix: 'Our',
    workflowTitle: 'Audio Book',
    heroSubtitle: "People don’t just read anymore—they listen. With our audiobook production services, we turn your manuscript into a professionally narrated experience using expert audiobook narration services and studio-quality production.\n\nYour story becomes something people can consume while driving, working, or resting—multiplying your reach without rewriting a single word. If your book isn’t an audiobook, you’re missing half your audience.",
    heroClosing: 'If your story can be heard, it can travel further than you ever imagined.',
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
    workflowSteps: [
      {
        title: "Script Preparation",
        desc: "We refine your manuscript into a clear, narration-ready script optimized for flow, pacing, and listener engagement."
      },
      {
        title: "Voice Selection & Direction",
        desc: "Choose from professional voice artists, with guidance to match tone, style, and audience expectations."
      },
      {
        title: "Recording & Production",
        desc: "We handle recording, editing, and mastering to deliver a polished, immersive listening experience."
      },
      {
        title: "Final Delivery & Distribution",
        desc: "Your audiobook is delivered in industry-standard formats, fully prepared for distribution across major platforms."
      }
    ],
  },
  'author-website': {
    slug: 'author-website',
    title: 'Author Website',
    heroTitle: 'Where Authors Become Recognized, Not Forgotten',
    cardsTitle: 'Website Solutions',
    workflowPrefix: 'Our Author',
    workflowTitle: 'Website Creation',
    heroSubtitle: "We don’t just help you publish your book—we help you build your identity as an author people remember, trust, and follow. A book alone is not enough in today’s world. Readers don’t just buy books—they connect with authors, stories, and presence. That’s why we offer professional author website services designed to turn your name into a brand.\n\nIf you’re searching for how to become a published author or want to stand out after using self publishing services or Amazon KDP publishing, your author platform is what gives your book long-term visibility. We create powerful author websites that position you as a credible writer with a story worth following. From showcasing your book to building your personal brand, we help you turn a single publication into a growing author identity.",
    heroClosing: 'Because in publishing, visibility creates authority—and authority creates success.',
    heroTag: 'Author Website Services',
    subServices: [
      {
        title: 'Custom Website Design',
        description: 'Bespoke, visually stunning websites tailored to your unique author brand and genre.',
        icon: 'FaLaptop',
      },
      {
        title: 'Book Landing Pages',
        description: 'High-conversion sales pages dedicated to your latest release, optimized for Amazon clicks and direct sales.',
        icon: 'FaStore',
      },
      {
        title: 'Email List Integration',
        description: 'Set up your newsletter and lead magnets to capture readers and build a loyal fanbase you own.',
        icon: 'FaEnvelope',
      },
      {
        title: 'Author SEO',
        description: 'Optimize your name and book titles to appear at the top of search results when readers look for you.',
        icon: 'FaSearch',
      },
      {
        title: 'E-commerce Integration',
        description: 'Sell signed copies, merch, and digital downloads directly from your own professional author platform.',
        icon: 'FaShoppingCart',
      },
      {
        title: 'Social Media Sync',
        description: 'Seamlessly connect your Instagram, TikTok, and Facebook feeds to your website for a unified online presence.',
        icon: 'FaHashtag',
      },
    ],
    workflowSteps: [
      {
        title: "Discovery & Planning",
        desc: "We understand your story, goals, and audience to map out a website structure that reflects your identity and supports your growth."
      },
      {
        title: "Design & User Experience",
        desc: "We create a clean, modern design with intuitive navigation that engages visitors and encourages them to explore your work."
      },
      {
        title: "Development & Content Integration",
        desc: "Your website is developed with fast loading speeds, mobile responsiveness, and optimized content for a seamless user experience."
      },
      {
        title: "Launch & Optimization",
        desc: "We test, launch, and fine-tune your website to ensure it performs smoothly and converts visitors into loyal readers."
      }
    ],
  },
  about: {
    slug: 'about',
    title: 'About Us',
    heroTitle: 'We Don’t Just Publish Books—We Build Authors',
    cardsTitle: 'Our Values',
    workflowTitle: 'Our Story',
    heroSubtitle: "We believe every powerful book starts with a simple idea—but only becomes real with the right guidance, structure, and execution.\n\nMost aspiring authors don’t struggle because they lack stories. They struggle because they don’t know how to turn their idea into a finished, published book. That’s where we come in. We are a full-service publishing partner offering book writing, editing, cover design, formatting, publishing, printing, marketing, and audiobook production—everything you need to take your book from concept to global platforms like Amazon KDP and beyond. Whether you're searching for how to publish a book, need help with self publishing services, or want a complete team to turn your manuscript into a professional book, Northcrest Book Publishers is built to guide you through every step. We don’t overwhelm you with technical jargon or complicated processes. We simplify publishing so you can focus on what matters most—your story.",
    heroClosing: 'Your legacy is one book away—let’s write it together.',
    heroTag: 'About Northcrest Book Publishers',
    subServices: [],
  },
  contact: {
    slug: 'contact',
    title: 'Contact Us',
    heroTitle: 'Let’s Create Something Worth Remembering',
    cardsTitle: 'Contact Options',
    workflowTitle: 'Our Process',
    heroSubtitle: "At Northcrest Book Publishers, we don’t just publish books—we help shape ideas into powerful, lasting works. Whether you're at the beginning or ready to launch, our team ensures your journey is seamless, professional, and thoughtfully guided.\n\nNo noise. No pressure. Just expertise, creativity, and results. Get in touch today—and let’s build something exceptional.",
    heroClosing: 'Your journey from manuscript to masterpiece begins with a single conversation.',
    heroTag: 'Contact Northcrest Book Publishers',
    subServices: [],
  },
  illustration: {
    slug: 'illustration',
    title: 'Illustration',
    heroTitle: 'Where Your Story Becomes a Visual Experience',
    cardsTitle: 'Illustration Solutions',
    workflowPrefix: 'Our',
    workflowTitle: 'Book Illustration',
    heroSubtitle: "Great books don’t just tell stories—they create worlds readers can see. We transform your manuscript into a visually immersive experience through powerful illustrations, cover design, and layout artistry.\n\nFrom book cover design and ebook cover design to interior illustrations and book formatting, every visual element is designed to deepen emotional connection and strengthen your story’s identity. Our professional book cover designers ensure your book stands out instantly across platforms like Amazon KDP publishing, while maintaining consistency, emotion, and market appeal. Whether you’re planning to publish your ebook online or release a printed edition, we ensure your visuals don’t just support your story—they amplify it.",
    heroClosing: 'A story is remembered not only by what it says—but by what it makes people see.',
    heroTag: 'Illustration Services',
    subServices: [
      {
        title: 'Character Design',
        description: 'Bring your protagonists to life with custom character designs that capture their essence, personality, and world perfectly.',
        icon: 'FaUserAlt',
      },
      {
        title: 'Book Cover Illustration',
        description: 'Bespoke, high-impact illustrations for your book cover that stop readers in their tracks and demand to be picked up.',
        icon: 'FaPalette',
      },
      {
        title: "Children's Book Art",
        description: 'Whimsical and engaging illustrations specifically crafted for young readers, perfect for picture books and early readers.',
        icon: 'FaStar',
      },
      {
        title: 'Interior Spot Art',
        description: 'Add visual interest to your pages with professional spot illustrations that highlight key moments and themes throughout your book.',
        icon: 'FaPenFancy',
      },
      {
        title: 'Technical Illustration',
        description: 'Clear, professional diagrams, maps, and technical drawings for non-fiction, educational, and fantasy world-building.',
        icon: 'FaDraftingCompass',
      },
      {
        title: 'Storyboarding',
        description: 'Visualize your narrative flow with professional storyboards, ideal for graphic novels or complex scene planning.',
        icon: 'FaLayerGroup',
      },
    ],
    workflowSteps: [
      {
        title: "Share Your Story & Vision",
        desc: "Share your story, characters, themes, or even rough ideas. Whether it’s a children’s book, graphic novel, or illustrated guide, we take the time to understand the emotions and message behind your content."
      },
      {
        title: "Style Exploration & Concept Sketches",
        desc: "Our illustrators develop initial concepts and sketch styles that match your story and audience. From character design to scene composition, we create a visual foundation that captures your book’s personality."
      },
      {
        title: "Illustration Creation & Feedback Loop",
        desc: "We create detailed illustrations with consistent style and storytelling flow. You review each stage, provide feedback, and request revisions to ensure every visual aligns perfectly with your vision."
      },
      {
        title: "Final Artwork & Delivery",
        desc: "We finalize high-resolution illustrations, fully optimized for print and digital publishing. Every detail is refined so your visuals not only look stunning—but elevate the entire reading experience"
      }
    ],
  },
};

export const servicesList = [
  { slug: 'writing', title: 'Writing', label: 'Writing' },
  { slug: 'editing', title: 'Editing', label: 'Editing' },
  { slug: 'design', title: 'Design', label: 'Design' },
  { slug: 'illustration', title: 'Illustration', label: 'Illustration' },
  { slug: 'publishing', title: 'Publishing', label: 'Publishing' },
  { slug: 'printing', title: 'Printing', label: 'Printing' },
  { slug: 'marketing', title: 'Marketing', label: 'Marketing' },
  { slug: 'audio-book', title: 'Audio Book', label: 'Audio Book' },
  { slug: 'author-website', title: 'Author Website', label: 'Author Website' },
];

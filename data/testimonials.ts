export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Fiction Author",
    review: "Working with Benjamin Publishers was the best decision I made for my writing career. Their editors are insightful, and my cover is absolutely stunning. I felt supported throughout the entire process.",
    initials: "SW"
  },
  {
    id: 2,
    name: "Dr. Robert Chen",
    role: "Non-Fiction Author",
    review: "The level of professionalism at Benjamin Publishers is unparalleled. They helped me transform my research into a readable, impactful book that is now reaching a global audience.",
    initials: "RC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Children's Book Author",
    review: "Building a children's book requires a special touch, and the design team here really delivered. The layout is perfect, and their marketing guidance launched my book successfully.",
    initials: "ER"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Memoir Author",
    review: "They treated my life story with such respect and care. The ghostwriting assistance was phenomenal, capturing my voice perfectly. I couldn't be happier with the final book.",
    initials: "MT"
  }
];

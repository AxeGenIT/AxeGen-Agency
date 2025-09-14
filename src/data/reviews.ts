// types/review.ts
export interface Review {
  id: number;
  name: string;
  company: string;
  role: string;
  photo: string;
  review: string;
  rating: number;
}

// data/reviews.ts
export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechNova",
    role: "Marketing Director",
    photo: "/sarah.jpg", // Replace with your image paths
    review: "The service was exceptional! Our engagement increased by 40% within the first month of using their platform. The team is responsive and truly understands our needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DataSphere",
    role: "CTO",
    photo: "/michcel.jpg",
    review: "Reliable and innovative solution that has transformed our workflow. The implementation was smooth and their support team is available 24/7 for any issues.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "GreenFuture",
    role: "Product Manager",
    photo: "/emma.jpg",
    review: "We've been using this service for over a year now and it continues to exceed our expectations. The regular updates with new features show they really care about their customers.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    company: "UrbanSolutions",
    role: "CEO",
    photo: "/diivid.jpg",
    review: "The analytics dashboard alone is worth the investment. It gives us insights we never had before and has helped us make data-driven decisions that improved our bottom line.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Smith",
    company: "CreativeMinds",
    role: "Design Lead",
    photo: "/olivia.jpg",
    review: "As a designer, I appreciate the attention to detail in the UI. It's not just powerful but also a joy to use every day. The onboarding process was particularly well-designed.",
    rating: 4,
  },
];
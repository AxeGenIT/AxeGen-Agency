"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Review } from "@/utils/data";
import { Rating } from "@smastrom/react-rating";
import { Check, ChevronRight } from "lucide-react";

// Import the CSS or create a custom rating style
import "@smastrom/react-rating/style.css";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [12, -12]);
  const rotateY = useTransform(x, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  // Custom star SVG (using Lucide's star icon path)
  const star = (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  );

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg overflow-hidden group transform-gpu w-full h-full"
      >
        {/* Futuristic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />

        {/* Top glow line */}
        <div className="absolute top-0 left-0 h-0.5 w-full bg-blue-500/20 blur-sm rounded-t-xl" />

        {/* Client info */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative">
            <Image
              width={56}
              height={56}
              src={review.photo}
              alt={`${review.name}'s profile`}
              className="rounded-full border-2 border-white/20 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center shadow-sm">
              <Check className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg tracking-tight">
              {review.name}
            </h3>
            <p className="text-gray-300 text-sm">
              {review.company} • {review.role}
            </p>
          </div>
        </div>

        {/* Review text with side border */}
        <div className="relative mb-6 pl-3 border-l-2 border-white/10">
          <p className="text-gray-200 italic leading-relaxed">
            {review.review}
          </p>
        </div>

        {/* Rating + Action */}
        <div className="flex items-center justify-between relative z-10">
          <Rating
            value={review.rating}
            readOnly
            itemStyles={{
              itemShapes: star,
              activeFillColor: "#f59e0b", // amber-500
              inactiveFillColor: "#ffedd5", // amber-100
              itemStrokeWidth: 0,
            }}
            style={{ maxWidth: 120 }}
            className="h-5" // controls the size
          />
          <button className="text-xs tracking-wider text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 group/button">
            <span>READ MORE</span>
            <ChevronRight className="w-3 h-3 transition-transform group-hover/button:translate-x-1" />
          </button>
        </div>

        {/* Bottom shine */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/20 blur-sm rounded-b-xl" />
      </motion.div>
    </div>
  );
};

export default ReviewCard;
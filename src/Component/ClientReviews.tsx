"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ReviewCard from "@/Component/UI/ReviewCard";
import { reviews } from "@/utils/data";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientReviews = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };
  return (
    <section ref={ref} className="py-12 bg-gradient-to-br from-slate-900 to-indigo-950 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl bg-fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Trusted by <span className="text-cyan-400">Thousands</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Don&apos;t just take our word for it - hear what our clients say
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
            el: '.review-pagination',
            bulletClass: 'review-bullet',
            bulletActiveClass: 'review-bullet-active'
          }}
          navigation={{
            nextEl: '.review-next',
            prevEl: '.review-prev'
          }}
          breakpoints={{
            640: {
              coverflowEffect: {
                depth: 150,
                modifier: 1.5
              }
            },
            1024: {
              coverflowEffect: {
                depth: 200,
                modifier: 2.5
              }
            }
          }}
          className="relative"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex justify-center px-2 py-8"
              style={{ width: "auto" }}
            >
              <div className="w-72 md:w-80 lg:w-96 h-full">
                <ReviewCard review={review} />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="review-prev p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border-[#29293d] border hover:border-[#00ffff66]">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="review-pagination flex gap-2 items-center" />
            
            <button className="review-next p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border-[#29293d] border hover:border-[#00ffff66]">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientReviews;
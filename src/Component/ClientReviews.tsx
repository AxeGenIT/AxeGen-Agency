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

const ClientReviews = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Don&apos;t just take our word for it - hear what our clients say
          </p>
        </div>

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
            <button className="review-prev p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="review-pagination flex gap-2 items-center" />
            
            <button className="review-next p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
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
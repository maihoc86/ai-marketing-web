"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

const testimonialsData = {
  vi: [
    {
      id: 1,
      content:
        "DXAI Marketing Platform được xây dựng từ những vấn đề thực tế mà chúng tôi và nhiều doanh nghiệp Việt gặp phải khi dùng AI rời rạc. Nền tảng giúp gom mọi công cụ AI vào một chỗ, dễ dùng và chi phí hợp lý cho doanh nghiệp.",
      author: "Anh Nguyễn Văn Minh",
      role: "Tổng Giám đốc",
      company: "Tiên Phong CDS",
      avatar: "/professional-asian-man-ceo-portrait.jpg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Điều mình thích nhất là mọi công cụ AI cần cho marketing đều nằm trong một nền tảng. Tạo video, viết content, thiết kế hình ảnh nhanh hơn nhiều và không phải quản lý quá nhiều tài khoản khác nhau.",
      author: "Chị Trần Thu Hà",
      role: "Giám đốc Marketing",
      company: "Công ty TNHH ABC",
      avatar: "/asian-marketing-director.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "DXAI Marketing Platform giúp chúng tôi quản lý marketing và việc sử dụng AI của đội ngũ trên cùng một hệ thống. Mọi thứ rõ ràng hơn, dễ theo dõi và kiểm soát tốt hơn so với trước đây.",
      author: "Anh Lê Hoàng Nam",
      role: "Giám đốc",
      company: "Công ty XYZ",
      avatar: "/professional-asian-man-business-director-portrait.jpg",
      rating: 5,
    },
  ],
  en: [
    {
      id: 1,
      content:
        "DXAI Marketing Platform was built from real problems that we and many Vietnamese businesses face when using fragmented AI tools. The platform helps consolidate all AI tools in one place, easy to use and cost-effective for businesses.",
      author: "Mr. Nguyen Van Minh",
      role: "CEO",
      company: "Tien Phong CDS",
      avatar: "/professional-asian-man-ceo-portrait.jpg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "What I like most is that all AI tools needed for marketing are in one platform. Creating videos, writing content, designing images is much faster and I don't have to manage too many different accounts.",
      author: "Ms. Tran Thu Ha",
      role: "Marketing Director",
      company: "ABC Company Ltd.",
      avatar: "/asian-marketing-director.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "DXAI Marketing Platform helps us manage marketing and our team's AI usage on the same system. Everything is clearer, easier to track and control better than before.",
      author: "Mr. Le Hoang Nam",
      role: "Director",
      company: "XYZ Company",
      avatar: "/professional-asian-man-business-director-portrait.jpg",
      rating: 5,
    },
  ],
}

const AUTO_SLIDE_INTERVAL = 5000

export function TestimonialsOpturaStyle() {
  const { locale } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const testimonials = locale === "vi" ? testimonialsData.vi : testimonialsData.en

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, AUTO_SLIDE_INTERVAL)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, nextSlide])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-optura relative overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-display-md font-bold text-gray-900 mb-4">
            {locale === "vi" ? "Khách hàng" : "What our"}{" "}
            <span className="italic text-gradient">
              {locale === "vi" ? "nói gì" : "customers say"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            {locale === "vi"
              ? "Câu chuyện thành công từ những doanh nghiệp tin dùng"
              : "Success stories from businesses who trust us"}
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial card */}
          <div
            className={`glass-card-strong rounded-3xl p-8 md:p-12 relative overflow-hidden ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            <div className="relative space-y-6">
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                    <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for avatar - can add Image component here */}
                      <div className="avatar-gradient-blue w-full h-full flex items-center justify-center text-2xl font-bold text-white">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author details */}
                <div>
                  <div className="font-serif text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 floating-label w-12 h-12 rounded-full flex items-center justify-center hover:shadow-optura transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 floating-label w-12 h-12 rounded-full flex items-center justify-center hover:shadow-optura transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  currentIndex === index ? "w-8 bg-gradient-to-r from-blue-600 to-cyan-600" : "w-2 bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

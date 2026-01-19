"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

// ============================================================
// TYPES
// ============================================================
export type Locale = "vi" | "en"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

// ============================================================
// TRANSLATIONS - COMPREHENSIVE FOR ALL SECTIONS
// ============================================================
const translations: Record<Locale, Record<string, string>> = {
  vi: {
    // Navigation
    "nav.features": "Tính năng",
    "nav.pricing": "Bảng giá",
    "nav.about": "Về chúng tôi",
    "nav.faq": "FAQ",
    "nav.login": "Đăng nhập",
    "nav.trial": "Dùng thử",
    "nav.trialFree": "Dùng thử miễn phí",

    // Hero Section
    "hero.badge": "Nền tảng AI Marketing #1 Việt Nam",
    "hero.title": "Nền tảng AI Marketing",
    "hero.titleHighlight": "tự động hóa",
    "hero.title.line1": "NỀN TẢNG AI MARKETING",
    "hero.title.line2": "CHO MỌI DOANH NGHIỆP",
    "hero.subtitle": "Tự động hóa quy trình Marketing từ ý tưởng đến xuất bản nội dung, tiết kiệm 80% thời gian.",
    "hero.cta.trial": "Dùng thử miễn phí",
    "hero.cta.demo": "Xem Demo",
    "hero.dashboard.title": "AI Marketing Dashboard",
    "hero.dashboard.subtitle": "Quản lý toàn bộ chiến dịch marketing từ một nền tảng",
    "hero.stats.videos": "Video/tháng",
    "hero.stats.savings": "Tiết kiệm",

    // Process Section
    "process.badge": "Quy trình tự động",
    "process.step1.title": "Ý tưởng",
    "process.step1.desc": "Mô tả nội dung bạn muốn làm",
    "process.step1.placeholder": "Write anything...",
    "process.step2.title": "AI xử lý",
    "process.step2.desc": "Phân tích & tạo nội dung tự động",
    "process.step2.processing": "Processing...",
    "process.step3.title": "Đa định dạng",
    "process.step3.desc": "Video • Ảnh • Content",
    "process.step3.video": "Video Reels/Shorts",
    "process.step3.image": "Hình ảnh Marketing",
    "process.step3.content": "Content SEO",
    "process.step4.title": "Đa nền tảng",
    "process.step4.desc": "Tự động đăng bài",

    // Features Section
    "features.badge": "Tại sao chọn AI Marketing?",
    "features.title": "Tính năng",
    "features.titleHighlight": "vượt trội",
    "features.subtitle": "Mọi công cụ bạn cần để tự động hóa marketing",
    "features.video.title": "Sản xuất Video Tự động",
    "features.video.description":
      "Biến ý tưởng thành video viral trong vài giây. AI tự động tạo script, voiceover, và editing chuyên nghiệp.",
    "features.video.desc":
      "Biến ý tưởng thành video viral trong vài giây. AI tự động tạo script, voiceover, và editing chuyên nghiệp.",
    "features.video.stats": "1000+ videos/tháng",
    "features.content.title": "Content Đa kênh",
    "features.content.description":
      "Tạo nội dung chuẩn SEO cho mọi nền tảng. Blog, social posts, email marketing - tất cả trong một.",
    "features.content.desc":
      "Tạo nội dung chuẩn SEO cho mọi nền tảng. Blog, social posts, email marketing - tất cả trong một.",
    "features.content.stats": "50+ templates",
    "features.schedule.title": "Lên lịch Thông minh",
    "features.schedule.description": "Đăng bài tự động đúng giờ vàng. AI phân tích thời điểm tối ưu cho từng nền tảng.",
    "features.schedule.desc": "Đăng bài tự động đúng giờ vàng. AI phân tích thời điểm tối ưu cho từng nền tảng.",
    "features.schedule.stats": "24/7 tự động",
    "features.design.title": "Thiết kế Hình ảnh AI",
    "features.design.description": "Tạo banner, thumbnail và creative quảng cáo chuyên nghiệp. Chỉnh sửa nhanh với AI.",
    "features.image.title": "Thiết kế Hình ảnh AI",
    "features.image.desc": "Tạo banner, thumbnail và creative quảng cáo chuyên nghiệp. Chỉnh sửa nhanh với AI.",
    "features.image.stats": "Không giới hạn",
    "features.analytics.title": "Phân tích Thông minh",
    "features.analytics.description":
      "Dashboard trực quan với insights sâu sắc. Theo dõi ROI và hiệu suất campaign real-time.",
    "features.analytics.desc":
      "Dashboard trực quan với insights sâu sắc. Theo dõi ROI và hiệu suất campaign real-time.",
    "features.analytics.stats": "10+ metrics",
    "features.integration.title": "Tích hợp Liền mạch",
    "features.integration.description": "Kết nối với Facebook, Instagram, TikTok, LinkedIn, YouTube và 20+ nền tảng khác.",
    "features.integration.desc": "Kết nối với Facebook, Instagram, TikTok, LinkedIn, YouTube và 20+ nền tảng khác.",
    "features.integration.stats": "20+ platforms",

    // Pricing Section
    "pricing.title": "Bảng giá",
    "pricing.titleHighlight": "linh hoạt",
    "pricing.subtitle": "Chọn gói phù hợp với nhu cầu của bạn",
    "pricing.billing.monthly": "Hàng tháng",
    "pricing.billing.quarterly": "Hàng quý",
    "pricing.billing.yearly": "Hàng năm",
    "pricing.billing.discount": "Tiết kiệm 15%",
    "pricing.cta": "Bắt đầu ngay",
    "pricing.cta.start": "Bắt đầu ngay",
    "pricing.cta.contact": "Liên hệ tư vấn",
    "pricing.popular": "Phổ biến nhất",
    "pricing.credits": "credits",
    "pricing.per.monthly": "tháng",
    "pricing.per.quarterly": "quý",
    "pricing.per.yearly": "năm",
    "pricing.guarantee": "Dùng thử 14 ngày miễn phí. Không cần thẻ tín dụng.",
    "pricing.features.ssl": "Bảo mật SSL",
    "pricing.features.support": "Hỗ trợ 24/7",
    "pricing.features.cancel": "Hủy bất kỳ lúc nào",
    "pricing.features.included": "Tính năng bao gồm:",
    "pricing.benefits": "Quyền lợi:",
    "pricing.month": "tháng",
    "pricing.quarter": "quý",
    "pricing.year": "năm",
    "pricing.contact": "Liên hệ",
    "pricing.trusted": "Được tin dùng bởi hơn 350,000 doanh nghiệp",
    "pricing.startup.name": "Startup",
    "pricing.startup.desc": "Trải nghiệm & Kênh nhỏ",
    "pricing.startup.subtitle": "Dành cho doanh nghiệp nhỏ muốn xây kênh tần suất thấp",
    "pricing.growth.name": "Growth",
    "pricing.growth.desc": "Tăng tốc - Best Seller",
    "pricing.growth.subtitle": "Dành cho Agency hoặc SME muốn phủ nội dung video hàng ngày",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Tập đoàn",
    "pricing.enterprise.subtitle": "Dành cho chuỗi bán lẻ hoặc hệ thống cần Custom",

    // ROI Section
    "roi.title": "Tại sao bạn nên chọn chúng tôi?",
    "roi.subtitle": "So sánh hiệu quả giữa Nhân sự truyền thống và Hệ thống AI",
    "roi.traditional": "Truyền thống",
    "roi.traditional.title": "Tuyển Editor/Content",
    "roi.traditional.subtitle": "Phương pháp truyền thống",
    "roi.aiSystem": "DXAI Marketing Platform",
    "roi.ai.title": "Hệ thống DXAI Marketing Platform",
    "roi.ai.subtitle": "Giải pháp thông minh",
    "roi.best": "Khuyên dùng",
    "roi.bestMobile": "Tốt nhất",
    "roi.criteria": "Tiêu chí so sánh",
    "roi.cost": "Chi phí",
    "roi.videoOutput": "Sản lượng Video",
    "roi.time": "Thời gian",
    "roi.multitask": "Đa nhiệm",
    "roi.operation": "Vận hành",
    "roi.save": "Tiết kiệm",
    "roi.times": "Gấp {x} lần",
    "roi.cta.text": "Tiết kiệm chi phí và tăng hiệu suất gấp 10 lần với DXAI Marketing Platform",
    "roi.cta.button": "Bắt đầu ngay",
    "roi.cost.traditional": "~15.000.000đ",
    "roi.cost.ai": "6.900.000đ",
    "roi.cost.highlight": "Tiết kiệm 54%",
    "roi.video.traditional": "10-15 Video/tháng",
    "roi.video.ai": "~25 Video/tháng",
    "roi.video.highlight": "Gấp 2 lần",
    "roi.time.traditional": "1-2 ngày/video",
    "roi.time.ai": "2 phút/video",
    "roi.multitask.traditional": "Chỉ 1 việc",
    "roi.multitask.ai": "Video + Ảnh + Viết bài + Chatbot",
    "roi.operation.traditional": "Cần KPI, nghỉ phép",
    "roi.operation.ai": "Tự động 24/7",
    "roi.note": "*Converted at ~27,000 VND = 1 USD (approx.)",

    // Why Choose Section
    "whyChoose.title": "Tại sao nên chọn DXAI Marketing Platform?",
    "whyChoose.subtitle": "Trang bị AI cho toàn công ty chỉ từ",
    "whyChoose.price": "500,000đ/người/tháng",
    "whyChoose.aiModels.title": "Chỉ 1 tài khoản – sử dụng nhiều công cụ AI",
    "whyChoose.aiModels.description":
      "Thay vì đăng ký và quản lý nhiều tài khoản AI khác nhau, doanh nghiệp chỉ cần một tài khoản duy nhất để truy cập tất cả các công cụ AI tiên tiến: tạo Video, viết Content, thiết kế hình ảnh, chatbot tư vấn và nhiều hơn nữa.",
    "whyChoose.team.title": "Trang bị AI cho toàn bộ nhân sự",
    "whyChoose.team.description":
      "Nền tảng cho phép cấp phát tài khoản AI cho toàn bộ nhân viên trong công ty. Mỗi nhân viên có thể sử dụng AI trong công việc hàng ngày, từ Marketing, Sales, đến Chăm sóc khách hàng - tất cả được quản lý tập trung.",
    "whyChoose.cost.title": "Chủ động cấp phát, thu hồi và kiểm soát chi phí",
    "whyChoose.cost.description":
      "Doanh nghiệp có thể quản lý tài khoản AI tập trung, dễ dàng cấp phát, thu hồi và chỉnh sửa định mức ngay khi có thay đổi nhân sự. Báo cáo chi tiết giúp theo dõi mức độ sử dụng và tối ưu chi phí.",
    "whyChoose.mobile.title": "Hỗ trợ tốt trên cả Web và Mobile",
    "whyChoose.mobile.description":
      "Ứng dụng di động tiện lợi, cho phép nhân sự sử dụng AI mọi lúc, mọi nơi. Giao diện thân thiện, dễ sử dụng trên mọi thiết bị từ máy tính để bàn đến điện thoại di động.",
    "whyChoose.tools.aiModels": "GPT 5.1, Gemini 2.5 Pro, DeepSeek-R1, Claude 4.7",
    "whyChoose.tools.team": "Marketing, Sales, Support, HR",
    "whyChoose.tools.cost": "Cấp phát, Thu hồi, Báo cáo, Ngân sách",
    "whyChoose.tools.mobile": "iOS App, Android, Web App, Desktop",
    "whyChoose.mockup.title": "DXAI Marketing Platform",
    "whyChoose.mockup.subtitle": "Dashboard Overview",
    "whyChoose.mockup.videos": "Videos/tháng",
    "whyChoose.mockup.accuracy": "Độ chính xác",
    "whyChoose.mockup.tools": "Công cụ AI đang sử dụng",
    "whyChoose.mockup.videoAi": "Video AI",
    "whyChoose.mockup.content": "Content",
    "whyChoose.mockup.imageGen": "Image Gen",
    "whyChoose.mockup.chatbot": "Chatbot",
    "whyChoose.mockup.members": "Thành viên đang hoạt động",
    "whyChoose.mockup.others": "+42 người khác",

    // Testimonials Section
    "testimonials.badge": "TESTIMONIALS",
    "testimonials.title": "Khách hàng nói gì về chúng tôi?",
    "testimonials.prev": "Testimonial trước",
    "testimonials.next": "Testimonial tiếp theo",
    "testimonials.view": "Xem testimonial {n}",

    // FAQ Section
    "faq.title": "Câu hỏi",
    "faq.titleHighlight": "thường gặp",
    "faq.subtitle": "Tìm câu trả lời cho những câu hỏi phổ biến nhất",
    "faq.stillHaveQuestions": "Vẫn còn câu hỏi?",
    "faq.contactUs": "Liên hệ với chúng tôi",
    "faq.notFound": "Không tìm thấy câu trả lời bạn cần?",
    "faq.contact": "Liên hệ với chúng tôi",
    "faq.q1": "DXAI Marketing Platform là gì?",
    "faq.a1":
      "DXAI Marketing Platform là nền tảng hợp nhất nhiều công cụ AI hàng đầu như tạo Video, viết Content, thiết kế hình ảnh... vào một hệ thống duy nhất. Doanh nghiệp chỉ cần cấp một tài khoản cho mỗi nhân viên để sử dụng linh hoạt nhiều công cụ AI, thay vì mua và quản lý từng tài khoản riêng lẻ.",
    "faq.q2": "DXAI Marketing Platform hỗ trợ những gì cho doanh nghiệp?",
    "faq.a2":
      "Tiết kiệm chi phí & thời gian: Mua một lần – sử dụng cho toàn đội ngũ. Quản lý tập trung: Cấp phát, thu hồi, điều chỉnh định mức AI cho nhân viên chỉ với vài thao tác. Báo cáo chi tiết: Lãnh đạo dễ dàng theo dõi và đánh giá mức độ ứng dụng AI trong doanh nghiệp.",
    "faq.q3": "Có được sử dụng DXAI Marketing Platform miễn phí không?",
    "faq.a3":
      "Có. DXAI Marketing Platform cung cấp gói dùng thử 7 ngày miễn phí với đầy đủ tính năng. Khách hàng có thể nâng cấp lên gói trả phí để có nhiều Credits hơn và truy cập toàn bộ công cụ AI nâng cao.",
    "faq.q4": "DXAI Marketing Platform có đáp ứng sử dụng trên điện thoại không?",
    "faq.a4":
      "Có. DXAI Marketing Platform hỗ trợ đầy đủ trên iOS và Android. Giao diện được tối ưu cho trải nghiệm di động, cho phép nhân sự sử dụng AI mọi lúc, mọi nơi.",
    "faq.q5": "DXAI Marketing Platform có cập nhật các công cụ AI mới nhất không?",
    "faq.a5":
      "Chúng tôi luôn nỗ lực xem xét và tích hợp các công cụ AI tiên tiến nhất, với ưu tiên cân bằng giữa lợi ích của khách hàng và hiệu quả chi phí. Khi xuất hiện những công cụ mới, DXAI Marketing Platform sẽ đánh giá và cân nhắc cập nhật nhằm giúp khách hàng tận dụng tốt nhất giá trị từ AI.",

    // CTA Section
    "cta.title": "Khai phóng sức mạnh AI cho doanh nghiệp của bạn",
    "cta.subtitle": "Dùng thử miễn phí 7 ngày - Không cần thẻ tín dụng",
    "cta.emailPlaceholder": "Nhập email của bạn",
    "cta.button": "Đăng ký ngay",
    "cta.thankYou": "Cảm ơn bạn đã đăng ký!",
    "cta.thankYouSub": "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    "cta.trusted": "Đã có {count} doanh nghiệp tin dùng",
    "cta.ssl": "Bảo mật SSL",
    "cta.noCard": "Không cần thẻ",

    // Footer
    "footer.description":
      "Giải pháp Marketing tự động hoá toàn diện dành cho doanh nghiệp. Tiên phong ứng dụng AI vào quy trình sản xuất nội dung thực chiến.",
    "footer.product": "Sản phẩm",
    "footer.product.overview": "Tổng quan",
    "footer.product.features": "Tính năng",
    "footer.product.pricing": "Bảng giá",
    "footer.product.trial": "Dùng thử ngay",
    "footer.support": "Hỗ trợ",
    "footer.support.guide": "Hướng dẫn sử dụng",
    "footer.support.faq": "Câu hỏi thường gặp",
    "footer.support.contact": "Liên hệ hỗ trợ",
    "footer.support.privacy": "Chính sách bảo mật",
    "footer.contact": "Liên hệ",
    "footer.copyright": "© {year} Tiên Phong CDS. Tất cả quyền được bảo lưu.",
    "footer.terms": "Điều khoản sử dụng",
    "footer.privacy": "Chính sách bảo mật",

    // About Hero Section
    "about.hero.breadcrumb.home": "Trang chủ",
    "about.hero.breadcrumb.about": "Về chúng tôi",
    "about.hero.title": "Về chúng tôi",
    "about.hero.subtitle": "Tiên Phong CDS & DXAI – DXAI Marketing Platform",
    "about.hero.description":
      "Đối tác chuyển đổi số Marketing đa kênh hàng đầu, tự động hóa quy trình từ ý tưởng đến xuất bản nội dung.",
    "about.cta.trial": "Dùng thử miễn phí",
    "about.cta.contact": "Liên hệ tư vấn",

    // About Company Section
    "about.company.title": "Tiên Phong CDS",
    "about.company.subtitle": "Đối tác chuyển đổi số đa kênh cho doanh nghiệp Việt",
    "about.company.desc1":
      "Công ty Cổ phần Tiên Phong CDS là đơn vị tiên phong trong lĩnh vực chuyển đổi số Marketing tại Việt Nam. Chúng tôi chuyên cung cấp các giải pháp AI Marketing toàn diện, giúp doanh nghiệp tối ưu hóa quy trình marketing và gia tăng hiệu quả kinh doanh.",
    "about.company.desc2":
      "Với triết lý Data-driven và AI-first, chúng tôi cam kết mang đến những giải pháp công nghệ tiên tiến nhất, tối ưu chi phí vận hành và đo lường hiệu quả bằng số liệu thực tế.",
    "about.company.highlight1": "Triển khai nhanh chóng trong 2-4 tuần",
    "about.company.highlight2": "Tùy biến theo đặc thù từng ngành",
    "about.company.highlight3": "Bảo mật dữ liệu & minh bạch chi phí",
    "about.company.highlight4": "Đo lường hiệu quả bằng số liệu thực",
    "about.company.cta": "Liên hệ",

    // About Why Choose Us
    "about.why.title": "Vì sao chọn chúng tôi",
    "about.why.subtitle":
      "Chúng tôi tin rằng kinh nghiệm, kỹ năng và sự tận tâm là những yếu tố quan trọng nhất cho sự thành công của dự án.",
    "about.why.expertise.title": "Chuyên môn AI Marketing",
    "about.why.expertise.desc": "Kinh nghiệm triển khai nội dung và quảng cáo đa kênh với công nghệ AI tiên tiến nhất.",
    "about.why.optimize.title": "Tối ưu & đo lường",
    "about.why.optimize.desc": "Báo cáo chi tiết, KPI rõ ràng, và cải tiến liên tục dựa trên dữ liệu thực tế.",
    "about.why.speed.title": "Tốc độ triển khai",
    "about.why.speed.desc": "Quy trình rõ ràng, sprint nhanh, bàn giao đúng tiến độ cam kết.",
    "about.why.support.title": "Hỗ trợ tận tâm",
    "about.why.support.desc": "Đồng hành dài hạn, training chuyên sâu, onboarding chu đáo cho đội ngũ.",

    // About Process
    "about.process.title": "Quy trình",
    "about.process.description":
      "Chúng tôi áp dụng quy trình làm việc toàn diện và có cấu trúc để đảm bảo mọi dự án đều được bàn giao đúng tiến độ, trong ngân sách và đáp ứng đúng nhu cầu của khách hàng.",
    "about.process.cta": "Xem dự án gần đây",
    "about.process.discovery.title": "Discovery",
    "about.process.discovery.desc":
      "Tìm hiểu sâu về doanh nghiệp, mục tiêu, đối tượng khách hàng và đối thủ cạnh tranh để xác định phạm vi dự án.",
    "about.process.planning.title": "Planning",
    "about.process.planning.desc":
      "Lập kế hoạch chi tiết với timeline, deliverables và milestone rõ ràng. Đảm bảo các bên cùng nắm rõ mục tiêu.",
    "about.process.design.title": "Design",
    "about.process.design.desc":
      "Thiết kế giao diện và trải nghiệm người dùng tối ưu, tạo wireframes và prototypes để xác nhận hướng đi.",
    "about.process.development.title": "Development",
    "about.process.development.desc":
      "Phát triển với các công nghệ hiện đại, tối ưu hiệu năng, bảo mật và khả năng mở rộng.",
    "about.process.testing.title": "Testing",
    "about.process.testing.desc":
      "Kiểm thử toàn diện về chức năng, bảo mật, hiệu năng. Đảm bảo sản phẩm không có lỗi trước khi ra mắt.",
    "about.process.launch.title": "Launch",
    "about.process.launch.desc":
      "Triển khai lên môi trường production, giám sát chặt chẽ và hỗ trợ đội ngũ khách hàng sử dụng.",

    // About Product Section
    "about.product.badge": "SẢN PHẨM",
    "about.product.title": "DXAI - DXAI Marketing Platform",
    "about.product.subtitle":
      "Nền tảng AI Marketing toàn diện, tự động hóa quy trình từ ý tưởng đến xuất bản nội dung đa nền tảng.",
    "about.product.why.title": "Tại sao chọn DXAI?",
    "about.product.why.allinone.title": "All-in-One Platform",
    "about.product.why.allinone.desc": "Tích hợp tất cả công cụ AI Marketing trong một nền tảng duy nhất.",
    "about.product.why.cost.title": "Chi phí tối ưu",
    "about.product.why.cost.desc": "Tiết kiệm đến 80% so với việc sử dụng nhiều công cụ riêng lẻ.",
    "about.product.why.multiplatform.title": "Đa nền tảng",
    "about.product.why.multiplatform.desc": "Tự động đăng bài lên Facebook, Instagram, TikTok, YouTube, LinkedIn.",
    "about.product.why.ai.title": "AI tiên tiến nhất",
    "about.product.why.ai.desc": "Tích hợp GPT-4, Gemini, Claude và các mô hình AI hàng đầu.",
    "about.product.capabilities.title": "Khả năng của DXAI",
    "about.product.capabilities.video": "Sản xuất Video tự động",
    "about.product.capabilities.image": "Thiết kế hình ảnh Marketing",
    "about.product.capabilities.content": "Viết Content chuẩn SEO",
    "about.product.capabilities.chatbot": "Chatbot AI tư vấn 24/7",
    "about.product.capabilities.analytics": "Phân tích dữ liệu thông minh",
    "about.product.capabilities.schedule": "Lên lịch đăng bài tự động",
    "about.product.capabilities.report": "Báo cáo hiệu suất chi tiết",
    "about.product.capabilities.integration": "Tích hợp đa nền tảng",
    "about.product.tech.title": "Công nghệ đằng sau DXAI",
    "about.product.tech.subtitle": "Tích hợp các mô hình AI hàng đầu thế giới",

    // About CTA Section
    "about.cta.title": "Sẵn sàng chuyển đổi số Marketing?",
    "about.cta.subtitle": "Hãy liên hệ với chúng tôi!",
    "about.cta.description":
      "Chúng tôi rất mong được tìm hiểu thêm về doanh nghiệp của bạn và cách DXAI có thể giúp bạn đạt được mục tiêu trong thế giới số.",

    // Modal CTA
    "modal.cta.title": "ĐỪNG BỎ LỠ!",
    "modal.cta.benefit1": "Demo miễn phí DXAI Marketing Platform",
    "modal.cta.benefit2": "Báo giá cá nhân hóa theo quy mô doanh nghiệp",
    "modal.cta.benefit3": "Tư vấn 1:1 bởi chuyên gia Marketing",
    "modal.cta.trust": "Doanh nghiệp đã tin chọn",
    "modal.cta.powered": "Powered by Tiên Phong CDS & DXAI",
    "modal.cta.formTitle": "BÁO GIÁ & DÙNG THỬ NGAY!",
    "modal.cta.formBadge": "Chỉ 10s – Nhận demo toàn bộ tính năng",
    "modal.cta.submit": "Nhận báo giá & Demo miễn phí",

    // Common
    "common.learnMore": "Tìm hiểu thêm",
    "common.getStarted": "Bắt đầu ngay",
    "common.contactUs": "Liên hệ",
    "common.readMore": "Đọc thêm",
    "common.viewAll": "Xem tất cả",
    "common.loading": "Đang tải...",
    "common.error": "Có lỗi xảy ra",
    "common.success": "Thành công",
    "common.required": "Bắt buộc",

    // Trusted Businesses Section
    "trustedBusinesses.title": "Hơn 12.000 doanh nghiệp tin dùng trên khắp cả nước",
    "trustedBusinesses.subtitle": "Được lựa chọn bởi doanh nghiệp ở nhiều lĩnh vực khác nhau",
    "trustedBusinesses.category.retail": "Ngành bán lẻ",
    "trustedBusinesses.category.commerce": "Ngành thương mại",
    "trustedBusinesses.category.realestate": "Ngành bất động sản",
    "trustedBusinesses.category.manufacturing": "Ngành sản xuất",
    "trustedBusinesses.stats.businesses": "Doanh nghiệp",
    "trustedBusinesses.stats.provinces": "Tỉnh thành",
    "trustedBusinesses.stats.industries": "Ngành nghề",
  },
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About Us",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.trial": "Free Trial",
    "nav.trialFree": "Start Free Trial",

    // Hero Section
    "hero.badge": "#1 AI Marketing Platform in Vietnam",
    "hero.title": "AI Marketing Platform",
    "hero.titleHighlight": "automated",
    "hero.title.line1": "AI MARKETING PLATFORM",
    "hero.title.line2": "FOR EVERY BUSINESS",
    "hero.subtitle": "Automate Marketing workflow from idea to content publishing, save 80% of time.",
    "hero.cta.trial": "Start Free Trial",
    "hero.cta.demo": "Watch Demo",
    "hero.dashboard.title": "AI Marketing Dashboard",
    "hero.dashboard.subtitle": "Manage all your marketing campaigns from one platform",
    "hero.stats.videos": "Videos/month",
    "hero.stats.savings": "Savings",

    // Process Section
    "process.badge": "Automated Workflow",
    "process.step1.title": "Idea",
    "process.step1.desc": "Describe the content you want to create",
    "process.step1.placeholder": "Write anything...",
    "process.step2.title": "AI Processing",
    "process.step2.desc": "Analyze & create content automatically",
    "process.step2.processing": "Processing...",
    "process.step3.title": "Multi-format",
    "process.step3.desc": "Video • Image • Content",
    "process.step3.video": "Video Reels/Shorts",
    "process.step3.image": "Marketing Images",
    "process.step3.content": "SEO Content",
    "process.step4.title": "Multi-platform",
    "process.step4.desc": "Auto-post everywhere",

    // Features Section
    "features.badge": "Why choose AI Marketing?",
    "features.title": "Features",
    "features.titleHighlight": "overview",
    "features.subtitle": "Everything you need to automate your marketing",
    "features.video.title": "Auto Video Production",
    "features.video.description":
      "Turn ideas into viral videos in seconds. AI automatically creates scripts, voiceover, and professional editing.",
    "features.video.desc":
      "Turn ideas into viral videos in seconds. AI automatically creates scripts, voiceover, and professional editing.",
    "features.video.stats": "1000+ videos/month",
    "features.content.title": "Multi-channel Content",
    "features.content.description":
      "Create SEO-optimized content for all platforms. Blog, social posts, email marketing - all in one.",
    "features.content.desc":
      "Create SEO-optimized content for all platforms. Blog, social posts, email marketing - all in one.",
    "features.content.stats": "50+ templates",
    "features.schedule.title": "Smart Scheduling",
    "features.schedule.description": "Auto-post at golden hours. AI analyzes optimal timing for each platform.",
    "features.schedule.desc": "Auto-post at golden hours. AI analyzes optimal timing for each platform.",
    "features.schedule.stats": "24/7 automatic",
    "features.design.title": "AI Image Design",
    "features.design.description": "Create professional banners, thumbnails and ad creatives. Quick editing with AI.",
    "features.image.title": "AI Image Design",
    "features.image.desc": "Create professional banners, thumbnails and ad creatives. Quick editing with AI.",
    "features.image.stats": "Unlimited",
    "features.analytics.title": "Smart Analytics",
    "features.analytics.description":
      "Intuitive dashboard with deep insights. Track ROI and campaign performance in real-time.",
    "features.analytics.desc":
      "Intuitive dashboard with deep insights. Track ROI and campaign performance in real-time.",
    "features.analytics.stats": "10+ metrics",
    "features.integration.title": "Seamless Integration",
    "features.integration.description": "Connect with Facebook, Instagram, TikTok, LinkedIn, YouTube and 20+ other platforms.",
    "features.integration.desc": "Connect with Facebook, Instagram, TikTok, LinkedIn, YouTube and 20+ other platforms.",
    "features.integration.stats": "20+ platforms",

    // Pricing Section
    "pricing.title": "Pricing",
    "pricing.titleHighlight": "plans",
    "pricing.subtitle": "Choose the plan that fits your needs",
    "pricing.billing.monthly": "Monthly",
    "pricing.billing.quarterly": "Quarterly",
    "pricing.billing.yearly": "Yearly",
    "pricing.billing.discount": "Save 15%",
    "pricing.cta": "Get Started",
    "pricing.cta.start": "Get Started",
    "pricing.cta.contact": "Contact Sales",
    "pricing.popular": "Most Popular",
    "pricing.credits": "credits",
    "pricing.per.monthly": "month",
    "pricing.per.quarterly": "quarter",
    "pricing.per.yearly": "year",
    "pricing.guarantee": "14-day free trial. No credit card required.",
    "pricing.features.ssl": "SSL Security",
    "pricing.features.support": "24/7 Support",
    "pricing.features.cancel": "Cancel anytime",
    "pricing.features.included": "Features included:",
    "pricing.benefits": "Benefits:",
    "pricing.month": "month",
    "pricing.quarter": "quarter",
    "pricing.year": "year",
    "pricing.contact": "Contact",
    "pricing.trusted": "Trusted by 350,000+ businesses",
    "pricing.startup.name": "Startup",
    "pricing.startup.desc": "Experience & Small Channels",
    "pricing.startup.subtitle": "For small businesses looking to build low-frequency channels",
    "pricing.growth.name": "Growth",
    "pricing.growth.desc": "Accelerate - Best Seller",
    "pricing.growth.subtitle": "For Agencies or SMEs wanting daily video content coverage",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Corporation",
    "pricing.enterprise.subtitle": "For retail chains or systems requiring customization",

    // ROI Section
    "roi.title": "Why Choose DXAI Marketing Platform?",
    "roi.subtitle": "Compare traditional marketing workflows vs an AI-powered solution",
    "roi.traditional": "Traditional",
    "roi.traditional.title": "Traditional Editor/Content",
    "roi.traditional.subtitle": "Manual approach",
    "roi.aiSystem": "DXAI Marketing Platform",
    "roi.ai.title": "DXAI Marketing Platform",
    "roi.ai.subtitle": "Automated solution",
    "roi.best": "BEST CHOICE",
    "roi.bestMobile": "Best",
    "roi.criteria": "Comparison Criteria",
    "roi.cost": "Cost",
    "roi.videoOutput": "Video Output",
    "roi.time": "Time per Video",
    "roi.multitask": "Multitasking",
    "roi.operation": "Operation",
    "roi.save": "Save",
    "roi.times": "{x}x faster",
    "roi.cta.text": "Save costs and increase productivity 10x with DXAI Marketing Platform",
    "roi.cta.button": "Watch Demo",
    "roi.cost.traditional": "~$555 / month",
    "roi.cost.ai": "~$255 / month",
    "roi.cost.highlight": "Save ~54%",
    "roi.video.traditional": "10–15 videos/month",
    "roi.video.ai": "~25 videos/month",
    "roi.video.highlight": "10x more",
    "roi.time.traditional": "1–2 days/video",
    "roi.time.ai": "~2 minutes/video",
    "roi.multitask.traditional": "Single task",
    "roi.multitask.ai": "Video + Images + Articles + Chatbot",
    "roi.operation.traditional": "Requires shifts, leave, manual oversight",
    "roi.operation.ai": "Automated 24/7",
    "roi.note": "* Converted at ~27,000 VND = 1 USD (approx.)",

    // Why Choose Section
    "whyChoose.title": "Why Choose DXAI Marketing Platform?",
    "whyChoose.subtitle": "Equip AI for your entire company starting from",
    "whyChoose.price": "$500/user/month",
    "whyChoose.aiModels.title": "One account – use multiple AI tools",
    "whyChoose.aiModels.description":
      "Instead of subscribing and managing multiple AI accounts separately, businesses only need one account to access all advanced AI tools: video creation, content writing, image design, consultation chatbots, and more.",
    "whyChoose.team.title": "Equip AI for your entire team",
    "whyChoose.team.description":
      "The platform allows for the distribution of AI accounts to all employees within the company. Each employee can use AI in their daily work, from Marketing to Sales to Customer Support – all managed centrally.",
    "whyChoose.cost.title": "Proactively allocate, revoke, and control costs",
    "whyChoose.cost.description":
      "Businesses can centrally manage AI accounts, easily allocate, revoke, and adjust quotas when there are personnel changes. Detailed reports help track usage levels and optimize costs.",
    "whyChoose.mobile.title": "Supports both Web and Mobile",
    "whyChoose.mobile.description":
      "Convenient mobile application, allowing staff to use AI anytime, anywhere. User-friendly interface on all devices from desktop computers to mobile phones.",
    "whyChoose.tools.aiModels": "GPT 5.1, Gemini 2.5 Pro, DeepSeek-R1, Claude 4.7",
    "whyChoose.tools.team": "Marketing, Sales, Support, HR",
    "whyChoose.tools.cost": "Allocation, Revocation, Reporting, Budget",
    "whyChoose.tools.mobile": "iOS App, Android, Web App, Desktop",
    "whyChoose.mockup.title": "DXAI Marketing Platform",
    "whyChoose.mockup.subtitle": "Dashboard Overview",
    "whyChoose.mockup.videos": "Videos/month",
    "whyChoose.mockup.accuracy": "Accuracy",
    "whyChoose.mockup.tools": "AI Tools in Use",
    "whyChoose.mockup.videoAi": "Video AI",
    "whyChoose.mockup.content": "Content",
    "whyChoose.mockup.imageGen": "Image Gen",
    "whyChoose.mockup.chatbot": "Chatbot",
    "whyChoose.mockup.members": "Active Members",
    "whyChoose.mockup.others": "+42 others",

    // Testimonials Section
    "testimonials.badge": "TESTIMONIALS",
    "testimonials.title": "What Our Clients Say",
    "testimonials.prev": "Previous testimonial",
    "testimonials.next": "Next testimonial",
    "testimonials.view": "View testimonial {n}",

    // FAQ Section
    "faq.title": "Frequently Asked",
    "faq.titleHighlight": "Questions",
    "faq.subtitle": "Find answers to the most common questions",
    "faq.stillHaveQuestions": "Still have questions?",
    "faq.contactUs": "Contact us",
    "faq.notFound": "Can't find the answer you need?",
    "faq.contact": "Contact us",
    "faq.q1": "What is DXAI Marketing Platform?",
    "faq.a1":
      "DXAI Marketing Platform is a platform that unifies leading AI tools like Video creation, Content writing, Image design... into a single system. Businesses only need to provide one account per employee to flexibly use multiple AI tools, instead of buying and managing separate accounts.",
    "faq.q2": "What does DXAI Marketing Platform support for businesses?",
    "faq.a2":
      "Save costs & time: Buy once - use for the entire team. Centralized management: Allocate, revoke, adjust AI quotas for employees with just a few operations. Detailed reports: Leaders can easily track and evaluate AI adoption levels in the business.",
    "faq.q3": "Can I use DXAI Marketing Platform for free?",
    "faq.a3":
      "Yes. DXAI Marketing Platform offers a 7-day free trial with full features. Customers can upgrade to paid plans for more Credits and access to all advanced AI tools.",
    "faq.q4": "Does DXAI Marketing Platform work on mobile phones?",
    "faq.a4":
      "Yes. DXAI Marketing Platform fully supports iOS and Android. The interface is optimized for mobile experience, allowing staff to use AI anytime, anywhere.",
    "faq.q5": "Does DXAI Marketing Platform update with the latest AI tools?",
    "faq.a5":
      "We constantly strive to review and integrate the most advanced AI tools, with priority on balancing customer benefits and cost efficiency. When new tools emerge, DXAI Marketing Platform will evaluate and consider updates to help customers maximize value from AI.",

    // CTA Section
    "cta.title": "Unleash AI Power for Your Business",
    "cta.subtitle": "7-day free trial - No credit card required",
    "cta.emailPlaceholder": "Enter your email",
    "cta.button": "Sign Up Now",
    "cta.thankYou": "Thank you for signing up!",
    "cta.thankYouSub": "We will contact you as soon as possible.",
    "cta.trusted": "{count}+ businesses trust us",
    "cta.ssl": "SSL Secured",
    "cta.noCard": "No card needed",

    // Footer
    "footer.description":
      "Comprehensive automated Marketing solution for businesses. Pioneering AI application in practical content production workflows.",
    "footer.product": "Product",
    "footer.product.overview": "Overview",
    "footer.product.features": "Features",
    "footer.product.pricing": "Pricing",
    "footer.product.trial": "Try Now",
    "footer.support": "Support",
    "footer.support.guide": "User Guide",
    "footer.support.faq": "FAQ",
    "footer.support.contact": "Contact Support",
    "footer.support.privacy": "Privacy Policy",
    "footer.contact": "Contact",
    "footer.copyright": "© {year} Tien Phong CDS. All rights reserved.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",

    // About Hero Section
    "about.hero.breadcrumb.home": "Home",
    "about.hero.breadcrumb.about": "About Us",
    "about.hero.title": "About Us",
    "about.hero.subtitle": "Tien Phong CDS & DXAI – DXAI Marketing Platform",
    "about.hero.description":
      "Multi-channel Digital Marketing Transformation Partner, automating workflow from idea to content publishing.",
    "about.cta.trial": "Start Free Trial",
    "about.cta.contact": "Contact Us",

    // About Company Section
    "about.company.title": "Tien Phong CDS",
    "about.company.subtitle": "Multi-channel digital transformation partner for Vietnamese businesses",
    "about.company.desc1":
      "Tien Phong CDS is a pioneer in the field of Digital Marketing Transformation in Vietnam. We specialize in providing comprehensive AI Marketing solutions, helping businesses optimize marketing processes and increase business efficiency.",
    "about.company.desc2":
      "With a Data-driven and AI-first philosophy, we are committed to delivering the most advanced technology solutions, optimizing operating costs and measuring effectiveness with real data.",
    "about.company.highlight1": "Fast deployment in 2-4 weeks",
    "about.company.highlight2": "Customized for each industry",
    "about.company.highlight3": "Data security & cost transparency",
    "about.company.highlight4": "Measure effectiveness with real data",
    "about.company.cta": "Contact Us",

    // About Why Choose Us
    "about.why.title": "Why Choose Us",
    "about.why.subtitle":
      "We believe that experience, skills and dedication are the most important factors for the success of a project.",
    "about.why.expertise.title": "AI Marketing Expertise",
    "about.why.expertise.desc":
      "Experience in deploying content and multi-channel advertising with the most advanced AI technology.",
    "about.why.optimize.title": "Optimize & Measure",
    "about.why.optimize.desc": "Detailed reports, clear KPIs, and continuous improvement based on real data.",
    "about.why.speed.title": "Deployment Speed",
    "about.why.speed.desc": "Clear process, fast sprints, on-time delivery as committed.",
    "about.why.support.title": "Dedicated Support",
    "about.why.support.desc": "Long-term partnership, in-depth training, thorough onboarding for your team.",

    // About Process
    "about.process.title": "Process",
    "about.process.description":
      "We apply a comprehensive and structured working process to ensure every project is delivered on time, within budget and meets the exact needs of customers.",
    "about.process.cta": "View Recent Projects",
    "about.process.discovery.title": "Discovery",
    "about.process.discovery.desc":
      "Deep understanding of business, goals, target audience and competitors to define project scope.",
    "about.process.planning.title": "Planning",
    "about.process.planning.desc":
      "Detailed planning with timeline, deliverables and clear milestones. Ensure all parties understand goals.",
    "about.process.design.title": "Design",
    "about.process.design.desc": "Optimal UI/UX design, create wireframes and prototypes to confirm direction.",
    "about.process.development.title": "Development",
    "about.process.development.desc":
      "Development with modern technologies, optimized performance, security and scalability.",
    "about.process.testing.title": "Testing",
    "about.process.testing.desc":
      "Comprehensive testing of functionality, security, performance. Ensure bug-free product before launch.",
    "about.process.launch.title": "Launch",
    "about.process.launch.desc": "Deploy to production, closely monitor and support customer team in usage.",

    // About Product Section
    "about.product.badge": "PRODUCT",
    "about.product.title": "DXAI - DXAI Marketing Platform",
    "about.product.subtitle":
      "Comprehensive AI Marketing platform, automating workflow from idea to multi-platform content publishing.",
    "about.product.why.title": "Why choose DXAI?",
    "about.product.why.allinone.title": "All-in-One Platform",
    "about.product.why.allinone.desc": "Integrate all AI Marketing tools in a single platform.",
    "about.product.why.cost.title": "Optimized Cost",
    "about.product.why.cost.desc": "Save up to 80% compared to using multiple separate tools.",
    "about.product.why.multiplatform.title": "Multi-platform",
    "about.product.why.multiplatform.desc": "Auto-post to Facebook, Instagram, TikTok, YouTube, LinkedIn.",
    "about.product.why.ai.title": "Most Advanced AI",
    "about.product.why.ai.desc": "Integrated GPT-4, Gemini, Claude and leading AI models.",
    "about.product.capabilities.title": "DXAI Capabilities",
    "about.product.capabilities.video": "Auto Video Production",
    "about.product.capabilities.image": "Marketing Image Design",
    "about.product.capabilities.content": "SEO Content Writing",
    "about.product.capabilities.chatbot": "24/7 AI Chatbot",
    "about.product.capabilities.analytics": "Smart Data Analytics",
    "about.product.capabilities.schedule": "Auto Post Scheduling",
    "about.product.capabilities.report": "Detailed Performance Reports",
    "about.product.capabilities.integration": "Multi-platform Integration",
    "about.product.tech.title": "Technology Behind DXAI",
    "about.product.tech.subtitle": "Integrated with world's leading AI models",

    // About CTA Section
    "about.cta.title": "Ready for Digital Marketing Transformation?",
    "about.cta.subtitle": "Contact us today!",
    "about.cta.description":
      "We look forward to learning more about your business and how DXAI can help you achieve your goals in the digital world.",

    // Modal CTA
    "modal.cta.title": "DON'T MISS OUT!",
    "modal.cta.benefit1": "Free DXAI Marketing Platform Demo",
    "modal.cta.benefit2": "Personalized pricing based on your business scale",
    "modal.cta.benefit3": "1:1 consultation with Marketing experts",
    "modal.cta.trust": "Businesses have trusted us",
    "modal.cta.powered": "Powered by Tien Phong CDS & DXAI",
    "modal.cta.formTitle": "GET QUOTE & TRY NOW!",
    "modal.cta.formBadge": "Just 10s – Get full feature demo",
    "modal.cta.submit": "Get Quote & Free Demo",

    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.contactUs": "Contact Us",
    "common.readMore": "Read More",
    "common.viewAll": "View All",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success",
    "common.required": "Required",

    // Trusted Businesses Section
    "trustedBusinesses.title": "Trusted by over 500 businesses nationwide",
    "trustedBusinesses.subtitle": "Chosen by businesses across various industries",
    "trustedBusinesses.category.retail": "Retail Industry",
    "trustedBusinesses.category.commerce": "E-Commerce Industry",
    "trustedBusinesses.category.realestate": "Real Estate Industry",
    "trustedBusinesses.category.manufacturing": "Manufacturing Industry",
    "trustedBusinesses.stats.businesses": "Businesses",
    "trustedBusinesses.stats.provinces": "Provinces",
    "trustedBusinesses.stats.industries": "Industries",
  },
}

// ============================================================
// CONTEXT
// ============================================================
const I18nContext = createContext<I18nContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = "dxai_locale"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
      if (stored && (stored === "vi" || stored === "en")) {
        setLocaleState(stored)
      }
    } catch (error) {
      console.error("Failed to read locale from localStorage:", error)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = locale
    }
  }, [locale, isHydrated])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    } catch (error) {
      console.error("Failed to save locale to localStorage:", error)
    }
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let text = translations[locale][key] || translations.vi[key] || key

      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(value))
        })
      }

      return text
    },
    [locale],
  )

  // Prevent hydration mismatch by not rendering until client-side hydration is complete
  if (!isHydrated) {
    return null
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

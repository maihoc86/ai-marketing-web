"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

// ============================================================
// TYPES
// ============================================================
export type Locale = "vi" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
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
    "hero.badge": "#1 AI MARKETING PLATFORM TẠI VIỆT NAM",
    "hero.title": "Nền tảng AI Marketing",
    "hero.titleHighlight": "tự động hóa",
    "hero.title.line1": "TĂNG DOANH THU 300%",
    "hero.title.line2": "VỚI AI MARKETING THÔNG MINH",
    "hero.subtitle":
      "Hệ thống AI duy nhất tại Việt Nam giúp doanh nghiệp tạo nội dung đa kênh, quản lý khách hàng và tối ưu quảng cáo tự động. Từ 1 ý tưởng đến hàng nghìn nội dung viral.",
    "hero.cta.trial": "Dùng Thử 14 Ngày Miễn Phí",
    "hero.cta.trial.sub": "Không cần thẻ tín dụng • Setup trong 5 phút",
    "hero.cta.demo": "Xem Demo 3 Phút",
    "hero.dashboard.title": "AI Marketing Dashboard",
    "hero.dashboard.subtitle":
      "Quản lý toàn bộ chiến dịch marketing từ một nền tảng",
    "hero.stats.videos": "Video/tháng",
    "hero.stats.savings": "Tiết kiệm",
    "hero.valueProp.videos": "Tạo 1000+ video/tháng tự động",
    "hero.valueProp.channels": "Quản lý 50+ kênh social cùng lúc",
    "hero.valueProp.roi": "ROI tăng trung bình 285% sau 3 tháng",
    "hero.valueProp.savings": "Tiết kiệm 80% thời gian + 60% chi phí nhân sự",
    "hero.trust.users": "12,000+ doanh nghiệp",
    "hero.trust.provinces": "Tin dùng bởi 63 tỉnh thành",
    "hero.trust.soc2": "SOC 2 Type II",
    "hero.trust.iso": "ISO 27001",
    "hero.trust.uptime": "99.9% Uptime SLA",
    "hero.trust.dataResidency": "Dữ liệu lưu trữ tại Việt Nam",
    "hero.trust.videoTime": "2-phút tạo video",
    "hero.trust.avgRoi": "ROI trung bình +285%",
    "hero.trust.rating": "4.8/5 rating (2,400+ reviews)",
    "hero.trust.noCard": "Miễn phí hoàn toàn 14 ngày đầu",
    "hero.trust.setup": "Setup tự động trong 5 phút",
    "hero.trust.security": "Bảo mật cấp ngân hàng",
    "hero.tech.title": "Tích hợp các AI Model hàng đầu thế giới",
    "hero.tech.poweredBy": "Hỗ trợ bởi",
    "hero.dashboard.live": "TRỰC TIẾP",
    "hero.dashboard.version": "LIVE DASHBOARD V3.0",
    "hero.dashboard.totalReach": "TỔNG TIẾP CẬN",
    "hero.dashboard.aiEfficiency": "HIỆU SUẤT AI",
    "hero.dashboard.contentCreated": "NỘI DUNG ĐÃ TẠO",
    "hero.dashboard.activeCampaigns": "CHIẾN DỊCH ĐANG CHẠY",
    "hero.dashboard.active": "HOẠT ĐỘNG",
    "hero.dashboard.regionTitle": "Tỷ lệ chuyển đổi trung bình theo khu vực",
    "hero.dashboard.region.vietnam": "Việt Nam",
    "hero.dashboard.region.sea": "Đông Nam Á",
    "hero.dashboard.region.latam": "LATAM",
    "hero.dashboard.region.apac": "APAC",
    "hero.dashboard.activity.contentGen":
      "Hoàn thành tạo nội dung - 25 bài viết đã tạo",
    "hero.dashboard.activity.vnSync": "Đồng bộ thị trường Việt Nam - Vừa xong",
    "hero.dashboard.activity.fbOptimized":
      "Chiến dịch Facebook đã tự động tối ưu",
    "hero.dashboard.activity.tiktokBatch":
      "Batch Video TikTok: 12 video sẵn sàng",
    "hero.dashboard.activity.aiAnalysis":
      "Phân tích AI: Hashtags trending đã cập nhật",
    "hero.dashboard.platforms": "20+ nền tảng đã kết nối",

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
    "features.learnMore": "Tìm hiểu thêm",
    "features.chatbot.title": "AI Chatbot CSKH 24/7",
    "features.chatbot.desc":
      "Giải pháp tự động hóa chăm sóc khách hàng thông minh, được huấn luyện với dữ liệu thực tế của doanh nghiệp.",
    "features.chatbot.stats":
      "Phản hồi tức thì 24/7 • Giảm 99% thời gian chờ đợi",
    "features.video.title": "AI Video Factory",
    "features.video.desc":
      "Sản xuất video marketing với KOL Ảo trong vài phút. Không cần quay phim, không cần studio, không cần KOL thật.",
    "features.video.stats": "50 Credit/video • 5 phút sản xuất • Tiết kiệm 95%",
    "features.video.feature1.name": "KOL Ảo thuyết minh",
    "features.video.feature1.desc":
      "Đại sứ thương hiệu nổi theo script với Character Consistency 100%",
    "features.video.feature2.name": "Giọng AI tự nhiên",
    "features.video.feature2.desc":
      "Sử dụng AI Voice, hỗ trợ nhiều ngôn ngữ khác nhau",
    "features.video.feature3.name": "Multi-scene editor",
    "features.video.feature3.desc":
      "Hỗ trợ nhiều khung hình/cảnh trong một video",
    "features.video.feature4.name": "Gợi ý AI",
    "features.video.feature4.desc": "Tự động đề xuất nội dung cảnh phù hợp",
    "features.video.feature5.name": "Lip-sync tự động",
    "features.video.feature5.desc":
      "Tự động sync môi chính xác với kịch bản lời thoại",
    "features.video.metric1.name": "Chi phí sản xuất",
    "features.video.metric1.value": "0 VNĐ (đã bao gồm)",
    "features.video.metric1.note": "Tiết kiệm 95% vs KOL truyền thống",
    "features.video.metric2.name": "Thời gian sản xuất",
    "features.video.metric2.value": "5 phút",
    "features.video.metric2.note": "Nhanh hơn 99% so với 3-7 ngày",
    "features.video.metric3.name": "Định dạng xuất",
    "features.video.metric3.value": "720p, 1080p, 4K",
    "features.video.metric3.note": "16:9 (YouTube) • 9:16 (TikTok) • 8-60 giây",
    "features.email.title": "Email Marketing Automation",
    "features.email.desc":
      "Hệ thống chăm sóc khách hàng tự động 100% - Journey khách hàng hoàn chỉnh.",
    "features.email.stats":
      "100% tự động • Tích hợp CRM • A/B Testing thông minh",
    "features.email.feature1.name": "Responsive Design",
    "features.email.feature1.desc":
      "Hiển thị hoàn hảo trên Mobile/Desktop, tự động tối ưu giao diện",
    "features.email.feature2.name": "Smart Tracking",
    "features.email.feature2.desc":
      "Tối ưu Open Rate & Click Rate, theo dõi hành vi khách hàng",
    "features.email.feature3.name": "100% Automated",
    "features.email.feature3.desc":
      "Workflow tự động, không cần thao tác, chạy 24/7",
    "features.email.feature4.name": "Tích hợp CRM",
    "features.email.feature4.desc":
      "Đồng bộ dữ liệu khách hàng, cá nhân hóa nội dung email",
    "features.email.feature5.name": "A/B Testing tự động",
    "features.email.feature5.desc":
      "Tự động test subject line và content để tối ưu hiệu quả",
    "features.email.metric1.name": "Các giai đoạn chăm sóc",
    "features.email.metric1.value": "4 giai đoạn",
    "features.email.metric1.note": "Welcome, Nhắc nhở, Phản hồi, Re-marketing",
    "features.email.metric2.name": "Tự động hóa",
    "features.email.metric2.value": "100%",
    "features.email.metric2.note": "Không cần thao tác thủ công",
    "features.email.metric3.name": "Tối ưu hiệu quả",
    "features.email.metric3.value": "Open Rate +35%",
    "features.email.metric3.note": "Nhờ A/B Testing & Smart Tracking",
    "features.multiPlatform.title": "Quản lý Đa nền tảng",
    "features.multiPlatform.desc":
      "Một Dashboard - Điều khiển tất cả. Quản trị tập trung đa kênh và tương tác thông minh 24/7.",
    "features.multiPlatform.stats":
      "5 nền tảng • Tiết kiệm 90% thời gian • Trợ lý ảo 24/7",
    "features.multiPlatform.feature1.name": "Lên lịch & Đăng hàng loạt",
    "features.multiPlatform.feature1.desc":
      "Tiết kiệm 90% thời gian thao tác thủ công trên từng ứng dụng",
    "features.multiPlatform.feature2.name": "Content Calendar",
    "features.multiPlatform.feature2.desc":
      "Giao diện lịch trực quan, phân loại nội dung bằng Color-coding",
    "features.multiPlatform.feature3.name": "Drag & Drop",
    "features.multiPlatform.feature3.desc":
      "Dễ dàng kéo thả để thay đổi lịch đăng bài nhanh chóng",
    "features.multiPlatform.feature4.name": "AI Comment Reply",
    "features.multiPlatform.feature4.desc":
      "Tự động trả lời bình luận với văn phong cá nhân hóa, giữ tương tác cao",
    "features.multiPlatform.feature5.name": "AI DM Chatbot 24/7",
    "features.multiPlatform.feature5.desc":
      "Trả lời tin nhắn, giải đáp thắc mắc và thu thập thông tin khách hàng",
    "features.multiPlatform.feature6.name": "Unified Inbox",
    "features.multiPlatform.feature6.desc":
      "Gom tất cả tin nhắn & bình luận từ mọi nền tảng về một nơi duy nhất",
    "features.multiPlatform.metric1.name": "Nền tảng hỗ trợ",
    "features.multiPlatform.metric1.value": "5 nền tảng",
    "features.multiPlatform.metric1.note":
      "Facebook, Instagram, TikTok, YouTube, Zalo OA",
    "features.multiPlatform.metric2.name": "Tiết kiệm thời gian",
    "features.multiPlatform.metric2.value": "90%",
    "features.multiPlatform.metric2.note":
      "So với thao tác thủ công từng ứng dụng",
    "features.multiPlatform.metric3.name": "Chi phí auto reply",
    "features.multiPlatform.metric3.value": "1 Credit/lượt",
    "features.multiPlatform.metric3.note": "Tự động trả lời comment",
    "features.ads.title": "AI Ads Management & Analytics",
    "features.ads.desc":
      "Do lường chính xác, ra quyết định dựa trên Data. Dashboard phân tích toàn diện với độ chính xác 99.9%.",
    "features.ads.stats":
      "99.9% chính xác • Tự động tối ưu ngân sách • ROI Calculator",
    "features.ads.feature1.name": "Budget Optimization",
    "features.ads.feature1.desc":
      "Tự động điều chỉnh ngân sách theo CPA/ROAS mục tiêu",
    "features.ads.feature2.name": "Audience Suggestions",
    "features.ads.feature2.desc":
      "Đề xuất Custom & Lookalike audiences từ data khách hàng",
    "features.ads.feature3.name": "Smart A/B Testing",
    "features.ads.feature3.desc":
      "Thử nghiệm tự động Headline, CTA để tìm mẫu quảng cáo tốt nhất",
    "features.ads.feature4.name": "Performance Alerts",
    "features.ads.feature4.desc":
      "Cảnh báo Realtime khi chiến dịch kém hiệu quả hoặc cạn ngân sách",
    "features.ads.metric1.name": "Chỉ số do lường",
    "features.ads.metric1.value": "8+ metrics",
    "features.ads.metric1.note":
      "Impressions, CTR, Conversions, CPA, ROAS, LTV, NPS",
    "features.ads.metric2.name": "ROI Calculator",
    "features.ads.metric2.value": "Tích hợp sẵn",
    "features.ads.metric2.note":
      "So sánh trực tiếp chi phí KOL AI vs Truyền thống",
    "features.ads.metric3.name": "Auto Report",
    "features.ads.metric3.value": "Tuần/Tháng",
    "features.ads.metric3.note": "Tự động gửi báo cáo hiệu suất qua Email",
    "features.content.title": "AI Content Creator",
    "features.content.desc":
      "Hệ thống sản xuất nội dung đa định dạng tự động hóa hoàn toàn, tạo content chuyên nghiệp trong 30 giây.",
    "features.content.stats":
      "50+ templates • Tạo hình ảnh 4K • Caption tối ưu SEO",
    "features.content.feature1.name": "Tạo ảnh KOL với sản phẩm",
    "features.content.feature1.desc":
      "Tạo hình ảnh KOL chuyên nghiệp với sản phẩm hoặc bối cảnh tùy chỉnh theo yêu cầu",
    "features.content.feature2.name": "Character Consistency Engine",
    "features.content.feature2.desc":
      "Công nghệ giữ vững nhận diện gương mặt KOL trên mọi hình ảnh",
    "features.content.feature3.name": "Độ phân giải 4K",
    "features.content.feature3.desc":
      "Sẵn sàng cho in ấn và quảng cáo billboard",
    "features.content.feature4.name": "Viết caption bắt trend",
    "features.content.feature4.desc":
      "Tự động viết caption hấp dẫn từ thông tin sản phẩm hoặc brief sơ sài",
    "features.content.feature5.name": "Gợi ý hashtag thông minh",
    "features.content.feature5.desc":
      "Đề xuất hashtag để tối đa hóa lượt tiếp cận (Reach) tự nhiên",
    "features.content.feature6.name": "Tối ưu SEO",
    "features.content.feature6.desc": "Viết bài chuẩn SEO cho blog và website",
    "features.content.metric1.name": "Thời gian tạo ảnh",
    "features.content.metric1.value": "10-30 giây",
    "features.content.metric1.note": "Chất lượng 4K chuyên nghiệp",
    "features.content.metric2.name": "Chi phí tạo content",
    "features.content.metric2.value": "2 Credit/ảnh",
    "features.content.metric2.note": "Tiết kiệm 90% vs thuê designer",
    "features.content.metric3.name": "Đa dạng phong cách",
    "features.content.metric3.value": "50+ styles",
    "features.content.metric3.note": "Thực tế, 3D, Minh họa, Trừu tượng",
    "features.trends.title": "AI Hot Trends Discovery",
    "features.trends.desc":
      "Hệ thống AI tìm Trends và tối ưu hóa Brief thông minh, không bao giờ hết ý tưởng.",
    "features.trends.stats":
      "~30 giây/Brief • 4 bước xử lý • Chấm điểm realtime",
    "features.trends.feature1.name": "INPUT ENGINE",
    "features.trends.feature1.desc":
      "Thu thập & Xử lý Brief: Thông tin thương hiệu (Tên, Ngành, Sản phẩm), Đối tượng & Chiến lược (Persona, Pain points, Mục tiêu), Định dạng đầu ra",
    "features.trends.feature2.name": "QUALITY EVALUATION",
    "features.trends.feature2.desc":
      "Chấm điểm Brief Realtime theo thang 100: Blocking (<50), Warning (50-79), Excellent (≥80)",
    "features.trends.feature3.name": "IDEA GENERATION",
    "features.trends.feature3.desc":
      "AI Brainstorming với Fit Score (0.0-1.0), Effort Level (Low/Medium/High), Estimated Impact",
    "features.trends.feature4.name": "CAMPAIGN MAPPER",
    "features.trends.feature4.desc":
      "Kế hoạch hành động: Content Outline, Hooks & CTAs, Phân bổ Platform",
    "features.trends.metric1.name": "Trọng số đánh giá",
    "features.trends.metric1.value": "Brand 30% • Chiến lược 40% • Đầu ra 30%",
    "features.trends.metric1.note": "Bonus +5 điểm nếu Pain points > 3",
    "features.trends.metric2.name": "Định dạng hỗ trợ",
    "features.trends.metric2.value": "7+ formats",
    "features.trends.metric2.note":
      "Bài viết, Video script, Infographic, Landing page, Hook, CTA",
    "features.trends.metric3.name": "Tốc độ xử lý",
    "features.trends.metric3.value": "~30 giây",
    "features.trends.metric3.note": "Từ Brief đến Campaign hoàn chỉnh",
    "features.schedule.title": "Lên lịch Thông minh",
    "features.schedule.desc":
      "Đăng bài tự động đúng giờ vàng. AI phân tích thời điểm tối ưu cho từng nền tảng.",
    "features.schedule.stats": "24/7 tự động",
    "features.image.title": "Thiết kế Hình ảnh AI",
    "features.image.desc":
      "Tạo banner, thumbnail và creative quảng cáo chuyên nghiệp. Chỉnh sửa nhanh với AI.",
    "features.image.stats": "Không giới hạn",
    "features.analytics.title": "Phân tích Thông minh",
    "features.analytics.desc":
      "Dashboard trực quan với insights sâu sắc. Theo dõi ROI và hiệu suất campaign real-time.",
    "features.analytics.stats": "10+ metrics",
    "features.integration.title": "Tích hợp Liền mạch",
    "features.integration.desc":
      "Kết nối với Facebook, Instagram, TikTok, LinkedIn, YouTube và 20+ nền tảng khác.",
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
    "pricing.startup.subtitle":
      "Dành cho doanh nghiệp nhỏ muốn xây kênh tần suất thấp",
    "pricing.growth.name": "Growth",
    "pricing.growth.desc": "Tăng tốc - Best Seller",
    "pricing.growth.subtitle":
      "Dành cho Agency hoặc SME muốn phủ nội dung video hàng ngày",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Tập đoàn",
    "pricing.enterprise.subtitle":
      "Dành cho chuỗi bán lẻ hoặc hệ thống cần Custom",
    "pricing.currency": "VNĐ",
    "pricing.credits.unlimited": "Không giới hạn Credits",
    "pricing.credits.perMonth": "{count} Credits/tháng",
    "pricing.enterprise.title": "Bảng giá",
    "pricing.enterprise.titleHighlight": "dành cho Doanh nghiệp",
    "pricing.enterprise.subtitle.full":
      "Giá minh bạch, có thể mở rộng cho mọi giai đoạn chuyển đổi AI của bạn. Không có phí ẩn.",
    "pricing.enterprise.billing.monthly": "Theo tháng",
    "pricing.enterprise.billing.yearly": "Theo năm",
    "pricing.enterprise.save15": "Tiết kiệm 15%",
    "pricing.enterprise.startup.name": "Khởi nghiệp",
    "pricing.enterprise.startup.description":
      "Dành cho doanh nghiệp nhỏ xây dựng hiện diện marketing",
    "pricing.enterprise.startup.cta": "Dùng thử miễn phí",
    "pricing.enterprise.growth.name": "Tăng trưởng",
    "pricing.enterprise.growth.description":
      "Dành cho agency và SME mở rộng sản xuất nội dung",
    "pricing.enterprise.growth.cta": "Bắt đầu ngay",
    "pricing.enterprise.enterprise.name": "Doanh nghiệp",
    "pricing.enterprise.enterprise.description":
      "Dành cho chuỗi bán lẻ và giải pháp doanh nghiệp tùy chỉnh",
    "pricing.enterprise.enterprise.cta": "Liên hệ Sales",
    "pricing.enterprise.custom": "Liên hệ",
    "pricing.enterprise.perMonth": "/tháng",
    "pricing.enterprise.perYear": "/năm",
    "pricing.enterprise.comparison.title": "So sánh chi tiết tính năng",
    "pricing.enterprise.comparison.features": "TÍNH NĂNG",
    "pricing.enterprise.comparison.feature1": "Điều phối LLM toàn cầu",
    "pricing.enterprise.comparison.feature2":
      "Tạo nội dung đa ngôn ngữ (40+ ngôn ngữ)",
    "pricing.enterprise.comparison.feature3": "Phân tích hiệu suất dự đoán",
    "pricing.enterprise.comparison.feature4": "Bảo mật & Giới hạn API",
    "pricing.enterprise.comparison.feature5": "Loại triển khai",
    "pricing.enterprise.cta.help":
      "Cần tư vấn thêm về gói phù hợp với doanh nghiệp của bạn?",
    "pricing.enterprise.cta.expert": "Liên hệ chuyên gia tư vấn",
    "pricing.enterprise.startup.feature1": "Tối đa 10 Video AI/tháng",
    "pricing.enterprise.startup.feature2": "1,500 bài viết nội dung/tháng",
    "pricing.enterprise.startup.feature3":
      "Đăng đa kênh (Facebook, Instagram, TikTok)",
    "pricing.enterprise.startup.feature4": "50+ mẫu nội dung",
    "pricing.enterprise.startup.feature5": "Lên lịch tự động",
    "pricing.enterprise.startup.feature6": "Phân tích cơ bản",
    "pricing.enterprise.startup.feature7": "Hỗ trợ qua email",
    "pricing.enterprise.growth.feature1": "Tất cả tính năng Startup",
    "pricing.enterprise.growth.feature2": "Tối đa 25 Video AI/tháng",
    "pricing.enterprise.growth.feature3": "2,500 bài viết nội dung/tháng",
    "pricing.enterprise.growth.feature4": "Bonus 1,000 Credits (tổng 7,500)",
    "pricing.enterprise.growth.feature5": "Thiết kế banner & thumbnail AI",
    "pricing.enterprise.growth.feature6": "Đăng 20+ nền tảng",
    "pricing.enterprise.growth.feature7": "Phân tích nâng cao & ROI tracking",
    "pricing.enterprise.growth.feature8": "Hỗ trợ ưu tiên (phản hồi 2h)",
    "pricing.enterprise.growth.feature9": "A/B testing cho campaigns",
    "pricing.enterprise.enterprise.feature1": "Tất cả tính năng Growth",
    "pricing.enterprise.enterprise.feature2": "Video & Nội dung không giới hạn",
    "pricing.enterprise.enterprise.feature3": "Server chuyên dụng",
    "pricing.enterprise.enterprise.feature4":
      "Mô hình AI tùy chỉnh (fine-tuned)",
    "pricing.enterprise.enterprise.feature5": "API Access tích hợp hệ thống",
    "pricing.enterprise.enterprise.feature6": "Account Manager chuyên trách",
    "pricing.enterprise.enterprise.feature7": "SLA 99.9% uptime",
    "pricing.enterprise.enterprise.feature8": "Hỗ trợ 24/7 Hotline/Chat",
    "pricing.enterprise.enterprise.feature9": "Onboarding & Training cho team",
    "pricing.enterprise.enterprise.feature10":
      "Giải pháp White-label (tùy chọn)",

    // ROI Section
    "roi.badge": "SO SÁNH HIỆU QUẢ",
    "roi.title.why": "Tại sao",
    "roi.title.brand": "DXAI Marketing",
    "roi.title.excels": "vượt trội?",
    "roi.title.full": "Tại sao {brand} vượt trội?",
    "roi.subtitle.full":
      "So sánh quy trình marketing truyền thống với giải pháp tự động hóa AI. Tiết kiệm chi phí, tăng hiệu suất gấp 100 lần.",
    "roi.watchDemo": "Xem Video Demo",
    "roi.header.criteria": "Tiêu chí",
    "roi.header.traditional": "Marketing Truyền thống",
    "roi.header.traditional.manual": "Quy trình thủ công",
    "roi.header.recommended": "ĐƯỢC ĐỀ XUẤT",
    "roi.header.dxai": "DXAI Marketing AI",
    "roi.header.dxai.auto": "Tự động hóa 100%",
    "roi.mobile.traditional": "Truyền thống",
    "roi.cta.ready": "Sẵn sàng chuyển đổi số và tăng trưởng với AI Marketing?",
    "roi.cta.start": "Bắt đầu ngay",
    "roi.cta.learn": "Tìm hiểu thêm",
    "roi.disclaimer":
      "* Số liệu dựa trên khảo sát 500+ doanh nghiệp Việt Nam sử dụng DXAI Marketing Platform",
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
    "roi.cta.text":
      "Tiết kiệm chi phí và tăng hiệu suất gấp 10 lần với DXAI Marketing Platform",
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
    // ROI Comparison Rows
    "roi.row1.criteria": "Chi phí vận hành",
    "roi.row1.traditional": "~$555/tháng",
    "roi.row1.traditionalDesc": "(Nhân sự + Tools)",
    "roi.row1.ai": "~$255/tháng",
    "roi.row1.aiDesc": "(All-in-one)",
    "roi.row1.savings": "Tiết kiệm ~54%",
    "roi.row2.criteria": "Sản lượng Video",
    "roi.row2.traditional": "10-15 video",
    "roi.row2.traditionalDesc": "/tháng",
    "roi.row2.ai": "1000+ video",
    "roi.row2.aiDesc": "/tháng",
    "roi.row3.criteria": "Thời gian/Video",
    "roi.row3.traditional": "1-2 ngày",
    "roi.row3.traditionalDesc": "(Thủ công)",
    "roi.row3.ai": "2 phút",
    "roi.row3.aiDesc": "(Tự động)",
    "roi.row4.criteria": "Đa nhiệm",
    "roi.row4.traditional": "Khó khăn",
    "roi.row4.traditionalDesc": "(1-2 kênh)",
    "roi.row4.ai": "50+ kênh",
    "roi.row4.aiDesc": "(Cùng lúc)",
    "roi.row5.criteria": "Vận hành",
    "roi.row5.traditional": "8-10 giờ",
    "roi.row5.traditionalDesc": "/ngày",
    "roi.row5.ai": "24/7",
    "roi.row5.aiDesc": "(Tự động)",

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
    "whyChoose.tools.aiModels":
      "GPT 5.1, Gemini 2.5 Pro, DeepSeek-R1, Claude 4.7",
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
    "testimonials.title.customers": "Khách hàng",
    "testimonials.title.say": "nói gì",
    "testimonials.subtitle":
      "Câu chuyện thành công từ những doanh nghiệp tin dùng",

    // Why Choose Section (Optura Style)
    "whyChoose.optura.title": "Why Choose",
    "whyChoose.optura.brand": "DXAI Marketing Platform",
    "whyChoose.optura.subtitle":
      "So sánh quy trình marketing truyền thống với giải pháp tự động hóa AI",
    "whyChoose.optura.criteria": "Tiêu chí so sánh",
    "whyChoose.optura.traditional": "Phương pháp truyền thống",
    "whyChoose.optura.traditional.manual": "Tiếp cận thủ công",
    "whyChoose.optura.bestChoice": "LỰA CHỌN TỐT NHẤT",
    "whyChoose.optura.dxai": "Nền tảng DXAI Marketing",
    "whyChoose.optura.dxai.auto": "Giải pháp tự động",
    "whyChoose.optura.guarantee.title": "Cam kết hiệu quả",
    "whyChoose.optura.guarantee.desc":
      "Các chỉ số dựa trên dữ liệu trung bình từ hơn 500+ doanh nghiệp đã chuyển đổi sang hệ sinh thái DXAI. Tiết kiệm 80% chi phí được tính toán trên tổng ngân sách nhân sự và sản xuất.",
    "whyChoose.optura.tryNow": "Trải nghiệm ngay",
    "whyChoose.optura.consult.title": "Cần tư vấn chuyên sâu?",
    "whyChoose.optura.consult.desc":
      "Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí để giúp bạn tìm ra giải pháp phù hợp nhất cho doanh nghiệp.",
    "whyChoose.optura.consultBtn": "Tư vấn giải pháp",
    "whyChoose.optura.watchDemo": "Watch Demo",
    "whyChoose.optura.mobilePlatform": "Nền tảng DXAI",
    // Why Choose Optura Comparison Rows
    "whyChoose.optura.row1.criteria": "Chi phí",
    "whyChoose.optura.row1.traditional": "~$555 / tháng",
    "whyChoose.optura.row1.dxai": "~$255 / tháng",
    "whyChoose.optura.row1.savings": "Tiết kiệm ~54%",
    "whyChoose.optura.row2.criteria": "Sản lượng Video",
    "whyChoose.optura.row2.traditional": "10–15 video/tháng",
    "whyChoose.optura.row2.dxai": "~25 video/tháng",
    "whyChoose.optura.row3.criteria": "Thời gian/Video",
    "whyChoose.optura.row3.traditional": "1–2 ngày/video",
    "whyChoose.optura.row3.dxai": "~2 phút/video",
    "whyChoose.optura.row4.criteria": "Đa nhiệm",
    "whyChoose.optura.row4.traditional": "Công việc đơn lẻ",
    "whyChoose.optura.row4.dxai": "Video + Hình ảnh + Bài viết + Chatbot",
    "whyChoose.optura.row5.criteria": "Vận hành",
    "whyChoose.optura.row5.traditional":
      "Cần ca làm việc, nghỉ phép, giám sát thủ công",
    "whyChoose.optura.row5.dxai": "Tự động 24/7",

    // Trusted Businesses Section
    "trusted.title.prefix": "Được tin dùng bởi hơn",
    "trusted.title.count": "500 doanh nghiệp",
    "trusted.title.suffix": "toàn quốc",
    "trusted.subtitle":
      "Đồng hành cùng các doanh nghiệp hàng đầu và phát triển tại Việt Nam với giải pháp marketing AI.",
    "trusted.stats.businesses": "Doanh nghiệp tin dùng",
    "trusted.stats.provinces": "Tỉnh thành Việt Nam",
    "trusted.stats.industries": "Ngành nghề chính",
    "trusted.badge.soc2.title": "SOC 2 Type II Certified",
    "trusted.badge.soc2.desc":
      "Tiêu chuẩn bảo mật cấp doanh nghiệp cho dữ liệu của bạn.",
    "trusted.badge.uptime.title": "99.9% Uptime SLA",
    "trusted.badge.uptime.desc":
      "Đảm bảo độ tin cậy nền tảng cho hoạt động 24/7.",
    "trusted.copyright":
      "© 2024 DXAI Marketing. Tất cả quyền được bảo lưu. Tín hiệu tin cậy chuyên nghiệp cho thị trường Việt Nam và Quốc tế.",
    "trusted.industry.retail": "Ngành Bán Lẻ",
    "trusted.industry.ecommerce": "Thương Mại Điện Tử",
    "trusted.industry.realestate": "Bất Động Sản",
    "trusted.industry.manufacturing": "Sản Xuất",

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
    "faq.q4":
      "DXAI Marketing Platform có đáp ứng sử dụng trên điện thoại không?",
    "faq.a4":
      "Có. DXAI Marketing Platform hỗ trợ đầy đủ trên iOS và Android. Giao diện được tối ưu cho trải nghiệm di động, cho phép nhân sự sử dụng AI mọi lúc, mọi nơi.",
    "faq.q5":
      "DXAI Marketing Platform có cập nhật các công cụ AI mới nhất không?",
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
    "about.hero.badge": "Về Chúng Tôi",
    "about.hero.title": "Về chúng tôi",
    "about.hero.title.prefix": "Nền tảng",
    "about.hero.title.brand": "DXAI Marketing",
    "about.hero.title.suffix": "Tiên Phong",
    "about.hero.subtitle": "Tiên Phong CDS & DXAI – DXAI Marketing Platform",
    "about.hero.description":
      "Đối tác chuyển đổi số Marketing đa kênh hàng đầu, tự động hóa quy trình từ ý tưởng đến xuất bản nội dung.",
    "about.hero.desc":
      "Chúng tôi định nghĩa lại cách doanh nghiệp vận hành với triết lý AI-First, thúc đẩy chuyển đổi số toàn diện và tối ưu hóa hiệu suất Marketing tự động.",
    "about.hero.cta.contact": "Liên hệ ngay",
    "about.hero.cta.learn": "Tìm hiểu thêm",
    "about.hero.image.alt": "Đội ngũ chuyên nghiệp Tiên Phong CDS",
    "about.hero.stat.uptime": "Thời gian hoạt động",
    "about.hero.stat.operational": "Hoạt động tốt",
    "about.hero.stat.businesses": "Doanh nghiệp",
    "about.cta.trial": "Dùng thử miễn phí",
    "about.cta.contact": "Liên hệ tư vấn",

    // About Company Section
    "about.company.title": "Tiên Phong CDS",
    "about.company.subtitle":
      "Đối tác chuyển đổi số đa kênh cho doanh nghiệp Việt",
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
    "about.why.expertise.desc":
      "Kinh nghiệm triển khai nội dung và quảng cáo đa kênh với công nghệ AI tiên tiến nhất.",
    "about.why.optimize.title": "Tối ưu & đo lường",
    "about.why.optimize.desc":
      "Báo cáo chi tiết, KPI rõ ràng, và cải tiến liên tục dựa trên dữ liệu thực tế.",
    "about.why.speed.title": "Tốc độ triển khai",
    "about.why.speed.desc":
      "Quy trình rõ ràng, sprint nhanh, bàn giao đúng tiến độ cam kết.",
    "about.why.support.title": "Hỗ trợ tận tâm",
    "about.why.support.desc":
      "Đồng hành dài hạn, training chuyên sâu, onboarding chu đáo cho đội ngũ.",

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
    "about.product.badge": "Sản phẩm của chúng tôi",
    "about.product.title": "DXAI Marketing Platform",
    "about.product.subtitle":
      "Nền tảng marketing AI toàn diện, tự động hóa mọi khía cạnh từ sáng tạo nội dung đến phân phối đa kênh",
    "about.product.why.title": "Tại sao chọn DXAI?",
    "about.product.why.subtitle":
      "Giải pháp AI Marketing toàn diện dành cho doanh nghiệp hiện đại",
    "about.product.why.allinone.title": "Tất cả trong một",
    "about.product.why.allinone.desc":
      "Tích hợp đầy đủ các công cụ marketing AI trong một nền tảng duy nhất",
    "about.product.why.cost.title": "Tiết kiệm chi phí",
    "about.product.why.cost.desc":
      "Giảm tới 85% chi phí so với thuê đội ngũ marketing truyền thống",
    "about.product.why.multiplatform.title": "Đa nền tảng",
    "about.product.why.multiplatform.desc":
      "Đăng tự động lên 20+ nền tảng mạng xã hội và marketing",
    "about.product.why.ai.title": "AI thông minh",
    "about.product.why.ai.desc":
      "Sử dụng 6 mô hình AI hàng đầu để tối ưu hóa mọi nội dung",
    "about.product.core.title": "Khả năng Cốt lõi",
    "about.product.core.desc":
      "8 tính năng chính giúp doanh nghiệp tự động hóa và tối ưu hóa toàn bộ quy trình marketing",
    "about.product.feature.video.title": "Sản xuất Video AI",
    "about.product.feature.video.desc": "1000+ videos/tháng",
    "about.product.feature.image.title": "Thiết kế Hình ảnh",
    "about.product.feature.image.desc": "Không giới hạn",
    "about.product.feature.content.title": "Nội dung Đa kênh",
    "about.product.feature.content.desc": "50+ mẫu",
    "about.product.feature.chatbot.title": "Chatbot Thông minh",
    "about.product.feature.chatbot.desc": "Tích hợp AI",
    "about.product.feature.analytics.title": "Phân tích Thông minh",
    "about.product.feature.analytics.desc": "10+ chỉ số",
    "about.product.feature.schedule.title": "Lên lịch Tự động",
    "about.product.feature.schedule.desc": "24/7 tự động",
    "about.product.feature.report.title": "Báo cáo Hiệu suất",
    "about.product.feature.report.desc": "Thời gian thực",
    "about.product.feature.integration.title": "Tích hợp Liền mạch",
    "about.product.feature.integration.desc": "20+ nền tảng",
    "about.product.tech.badge": "Công nghệ AI",
    "about.product.tech.title": "Công nghệ đằng sau DXAI",
    "about.product.tech.subtitle":
      "Tích hợp 6 mô hình AI hàng đầu thế giới để cung cấp kết quả tối ưu nhất",
    "about.product.stat.businesses": "Doanh nghiệp",
    "about.product.capabilities.title": "Khả năng của DXAI",
    "about.product.capabilities.video": "Sản xuất Video tự động",
    "about.product.capabilities.image": "Thiết kế hình ảnh Marketing",
    "about.product.capabilities.content": "Viết Content chuẩn SEO",
    "about.product.capabilities.chatbot": "Chatbot AI tư vấn 24/7",
    "about.product.capabilities.analytics": "Phân tích dữ liệu thông minh",
    "about.product.capabilities.schedule": "Lên lịch đăng bài tự động",
    "about.product.capabilities.report": "Báo cáo hiệu suất chi tiết",
    "about.product.capabilities.integration": "Tích hợp đa nền tảng",

    // About CTA Section
    "about.cta.title": "Sẵn sàng chuyển đổi số Marketing?",
    "about.cta.subtitle": "Hãy liên hệ với chúng tôi!",
    "about.cta.description":
      "Chúng tôi rất mong được tìm hiểu thêm về doanh nghiệp của bạn và cách DXAI có thể giúp bạn đạt được mục tiêu trong thế giới số.",

    // About Philosophy Section
    "about.philosophy.title": "Triết lý AI-First của chúng tôi",
    "about.philosophy.description":
      "Tiên Phong CDS không chỉ là một công cụ, mà là bộ não số hóa giúp doanh nghiệp nâng cao năng lực cạnh tranh và hiệu quả vận hành tối đa thông qua tự động hóa thông minh.",
    "about.philosophy.benefit1.title": "Triển khai nhanh",
    "about.philosophy.benefit1.desc":
      "Hệ thống sẵn sàng vận hành chỉ trong 48 giờ",
    "about.philosophy.benefit2.title": "Tùy chỉnh linh hoạt",
    "about.philosophy.benefit2.desc":
      "Module hóa các tính năng phù hợp từng ngành nghề",
    "about.philosophy.benefit3.title": "Bảo mật tối đa",
    "about.philosophy.benefit3.desc": "Tiêu chuẩn bảo mật ISO/IEC 27001",
    "about.philosophy.benefit4.title": "Tối ưu ROI",
    "about.philosophy.benefit4.desc":
      "Giảm 40% chi phí vận hành, tăng 25% tỷ lệ chuyển đổi",

    // About Workflow Section
    "about.workflow.badge": "Phương pháp của chúng tôi",
    "about.workflow.title": "Quy trình làm việc 6 bước",
    "about.workflow.subtitle":
      "Phương pháp tiếp cận có cấu trúc của chúng tôi đảm bảo triển khai thành công và tối ưu hóa liên tục",
    "about.workflow.step1.title": "Khám phá",
    "about.workflow.step1.desc":
      "Kiểm tra doanh nghiệp và đánh giá mức độ sẵn sàng AI",
    "about.workflow.step2.title": "Chiến lược",
    "about.workflow.step2.desc":
      "Lộ trình AI Marketing tùy chỉnh tập trung vào KPI tăng trưởng",
    "about.workflow.step3.title": "Tích hợp",
    "about.workflow.step3.desc":
      "Kết nối liền mạch DXAI với dữ liệu và công cụ hiện có",
    "about.workflow.step4.title": "Tối ưu hóa",
    "about.workflow.step4.desc":
      "Tinh chỉnh mô hình để đạt hiệu suất và hiệu quả",
    "about.workflow.step5.title": "Kiểm thử",
    "about.workflow.step5.desc":
      "Đảm bảo chất lượng nghiêm ngặt và theo dõi hiệu suất",
    "about.workflow.step6.title": "Ra mắt",
    "about.workflow.step6.desc":
      "Triển khai toàn diện và giám sát tăng trưởng liên tục",

    // About Why Choose Section
    "about.whyChoose.badge": "Tại sao chọn chúng tôi",
    "about.whyChoose.title": "Tại sao chọn chúng tôi",
    "about.whyChoose.subtitle":
      "Chúng tôi kết hợp chuyên môn marketing sâu rộng với cơ sở hạ tầng AI hiện đại để thúc đẩy tăng trưởng doanh nghiệp.",
    "about.whyChoose.expertise1.title": "Chuyên môn AI",
    "about.whyChoose.expertise1.desc":
      "Tận dụng khả năng sản phẩm DXAI để đạt hiệu quả marketing xuất sắc",
    "about.whyChoose.expertise2.title": "Hỗ trợ Doanh nghiệp",
    "about.whyChoose.expertise2.desc":
      "Độ tin cậy 24/7 chuyên dụng cho hoạt động cấp doanh nghiệp",
    "about.whyChoose.expertise3.title": "Cơ sở hạ tầng Mở rộng",
    "about.whyChoose.expertise3.desc":
      "Kiến trúc mạnh mẽ được xây dựng để phát triển cùng nhu cầu kinh doanh",
    "about.whyChoose.expertise4.title": "Kết quả Dựa trên Dữ liệu",
    "about.whyChoose.expertise4.desc":
      "Tối ưu hiệu suất thông qua tinh chỉnh mô hình AI tiên tiến",

    // About Final CTA Section
    "about.finalCta.badge": "Bắt đầu ngay hôm nay",
    "about.finalCta.title.prefix": "Sẵn sàng tối ưu hóa ",
    "about.finalCta.title.highlight": "quy trình marketing",
    "about.finalCta.title.suffix": " của bạn?",
    "about.finalCta.description":
      "Tham gia cùng hơn 500 doanh nghiệp đang chuyển đổi marketing với AI. Bắt đầu hành trình tự động hóa của bạn ngay hôm nay.",
    "about.finalCta.cta.demo": "Đặt lịch Demo",
    "about.finalCta.cta.roadmap": "Tải Roadmap",
    "about.finalCta.trust.noCard": "Không cần thẻ tín dụng",
    "about.finalCta.trust.setup": "Thiết lập trong 48 giờ",
    "about.finalCta.trust.support": "Hỗ trợ 24/7",

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
    "trustedBusinesses.title":
      "Hơn 12.000 doanh nghiệp tin dùng trên khắp cả nước",
    "trustedBusinesses.subtitle":
      "Được lựa chọn bởi doanh nghiệp ở nhiều lĩnh vực khác nhau",
    "trustedBusinesses.category.retail": "Ngành bán lẻ",
    "trustedBusinesses.category.commerce": "Ngành thương mại",
    "trustedBusinesses.category.realestate": "Ngành bất động sản",
    "trustedBusinesses.category.manufacturing": "Ngành sản xuất",
    "trustedBusinesses.stats.businesses": "Doanh nghiệp",
    "trustedBusinesses.stats.provinces": "Tỉnh thành",
    "trustedBusinesses.stats.industries": "Ngành nghề",

    // Hero Light Theme Section
    "heroLight.badge": "NỀN TẢNG AI MARKETING HÀNG ĐẦU VIỆT NAM",
    "heroLight.title.line1": "TĂNG DOANH THU",
    "heroLight.title.line2": "VỚI",
    "heroLight.title.highlight": "AI MARKETING THÔNG MINH",
    "heroLight.subtitle.part1":
      "Hệ thống AI duy nhất tại Việt Nam giúp doanh nghiệp",
    "heroLight.subtitle.multichannel": "tạo nội dung đa kênh",
    "heroLight.subtitle.customers": "quản lý khách hàng",
    "heroLight.subtitle.ads": "tối ưu quảng cáo tự động",
    "heroLight.subtitle.part2": "Từ 1 ý tưởng đến hàng nghìn nội dung viral.",
    "heroLight.stats.videos": "1000+ video/tháng",
    "heroLight.stats.videosAuto": "tự động",
    "heroLight.stats.channels": "50+ kênh",
    "heroLight.stats.channelsManage": "Quản lý",
    "heroLight.stats.channelsSim": "cùng lúc",
    "heroLight.stats.roi": "+285%",
    "heroLight.stats.roiText": "ROI tăng",
    "heroLight.stats.roiTime": "sau 3 tháng",
    "heroLight.stats.saveTime": "80% thời gian",
    "heroLight.stats.saveText": "Tiết kiệm",
    "heroLight.stats.saveCost": "+ 60% chi phí",
    "heroLight.cta.trial": "Dùng Thử 14 Ngày Miễn Phí",
    "heroLight.cta.demo": "Xem Demo 3 Phút",
    "heroLight.trust.noCard": "Không cần thẻ tín dụng",
    "heroLight.trust.setup": "Setup trong 5 phút",
    "heroLight.trust.security": "Bảo mật cấp ngân hàng",
    "heroLight.dashboard.live": "Trực tiếp",
    "heroLight.dashboard.version": "Dashboard v3.0",
    "heroLight.dashboard.reach": "Tổng tiếp cận",
    "heroLight.dashboard.aiEfficiency": "Hiệu suất AI",
    "heroLight.dashboard.contentCreated": "Nội dung đã tạo",
    "heroLight.dashboard.active": "HOẠT ĐỘNG",
    "heroLight.dashboard.campaigns": "Chiến dịch đang chạy",
    "heroLight.tech.title": "Công nghệ đằng sau DXAI",
    "heroLight.tech.subtitle": "Tích hợp với các mô hình AI hàng đầu thế giới",
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
    "hero.badge": "#1 AI MARKETING PLATFORM IN VIETNAM",
    "hero.title": "AI Marketing Platform",
    "hero.titleHighlight": "automated",
    "hero.title.line1": "BOOST REVENUE 300%",
    "hero.title.line2": "WITH SMART AI MARKETING",
    "hero.subtitle":
      "The only AI system in Vietnam helping businesses create multi-channel content, manage customers and auto-optimize ads. From 1 idea to thousands of viral content.",
    "hero.cta.trial": "Start 14-Day Free Trial",
    "hero.cta.trial.sub": "No credit card required • Setup in 5 minutes",
    "hero.cta.demo": "Watch 3-Min Demo",
    "hero.dashboard.title": "AI Marketing Dashboard",
    "hero.dashboard.subtitle":
      "Manage all your marketing campaigns from one platform",
    "hero.stats.videos": "Videos/month",
    "hero.stats.savings": "Savings",
    "hero.valueProp.videos": "Create 1000+ videos/month automatically",
    "hero.valueProp.channels": "Manage 50+ social channels simultaneously",
    "hero.valueProp.roi": "Average ROI increase 285% after 3 months",
    "hero.valueProp.savings": "Save 80% time + 60% staffing costs",
    "hero.trust.users": "12,000+ businesses",
    "hero.trust.provinces": "Trusted by all 63 provinces",
    "hero.trust.soc2": "SOC 2 Type II",
    "hero.trust.iso": "ISO 27001",
    "hero.trust.uptime": "99.9% Uptime SLA",
    "hero.trust.dataResidency": "Vietnamese Data Residency",
    "hero.trust.videoTime": "2-min video creation",
    "hero.trust.avgRoi": "Average ROI +285%",
    "hero.trust.rating": "4.8/5 rating (2,400+ reviews)",
    "hero.trust.noCard": "Completely free for 14 days",
    "hero.trust.setup": "Auto setup in 5 minutes",
    "hero.trust.security": "Bank-grade security",
    "hero.tech.title": "Integrated with world-leading AI Models",
    "hero.tech.poweredBy": "Powered by",
    "hero.dashboard.live": "LIVE",
    "hero.dashboard.version": "LIVE DASHBOARD V3.0",
    "hero.dashboard.totalReach": "TOTAL REACH",
    "hero.dashboard.aiEfficiency": "AI EFFICIENCY",
    "hero.dashboard.contentCreated": "CONTENT CREATED",
    "hero.dashboard.activeCampaigns": "ACTIVE CAMPAIGNS",
    "hero.dashboard.active": "ACTIVE",
    "hero.dashboard.regionTitle": "Average conversion rate by region",
    "hero.dashboard.region.vietnam": "Vietnam",
    "hero.dashboard.region.sea": "SEA Region",
    "hero.dashboard.region.latam": "LATAM",
    "hero.dashboard.region.apac": "APAC",
    "hero.dashboard.activity.contentGen":
      "Content Generation Complete - 25 posts created",
    "hero.dashboard.activity.vnSync": "Vietnamese Market Sync - Just now",
    "hero.dashboard.activity.fbOptimized": "Facebook Campaign Auto-optimized",
    "hero.dashboard.activity.tiktokBatch":
      "TikTok Video Batch: 12 videos ready",
    "hero.dashboard.activity.aiAnalysis":
      "AI Analysis: Trending hashtags updated",
    "hero.dashboard.platforms": "20+ platforms connected",

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
    "features.learnMore": "Learn more",
    "features.chatbot.title": "AI Chatbot Customer Service 24/7",
    "features.chatbot.desc":
      "Intelligent customer care automation solution, trained with real business data.",
    "features.chatbot.stats": "Instant response 24/7 • 99% less waiting time",
    "features.chatbot.feature1.name": "Product & Service Consultation",
    "features.chatbot.feature1.desc":
      "Automatically provide detailed consultation on product packages, services, and features based on customer needs with personalized scripts",
    "features.chatbot.feature2.name": "Instant Quotation",
    "features.chatbot.feature2.desc":
      "Calculate and provide estimated quotes instantly based on customer input requirements 24/7",
    "features.chatbot.feature3.name": "Schedule Check & Appointment Booking",
    "features.chatbot.feature3.desc":
      "Real-time connection with calendar system to check availability and support automatic appointment booking",
    "features.chatbot.feature4.name": "Quality Lead Transfer",
    "features.chatbot.feature4.desc":
      "Classify lead potential levels (Hot/Warm/Cold) and automatically push information to CRM or notify Sales team",
    "features.chatbot.metric1.name": "Average Response Time",
    "features.chatbot.metric1.value": "~3 seconds",
    "features.chatbot.metric1.note": "99% reduction vs manual",
    "features.chatbot.metric2.name": "Lead Conversion Rate",
    "features.chatbot.metric2.value": "+45%",
    "features.chatbot.metric2.note": "Thanks to instant response",
    "features.chatbot.metric3.name": "Continuous Operation",
    "features.chatbot.metric3.value": "24/7/365",
    "features.chatbot.metric3.note": "Never miss a customer",
    "features.content.title": "AI Content Creator",
    "features.content.desc":
      "Fully automated multi-format content production system, creating professional content in 30 seconds.",
    "features.content.stats":
      "50+ templates • 4K image generation • SEO-optimized captions",
    "features.content.feature1.name": "KOL Product Photography",
    "features.content.feature1.desc":
      "Create professional KOL images with products or customized backgrounds as requested",
    "features.content.feature2.name": "Character Consistency Engine",
    "features.content.feature2.desc":
      "Technology that maintains KOL facial recognition across all images",
    "features.content.feature3.name": "4K Resolution",
    "features.content.feature3.desc":
      "Ready for print and billboard advertising",
    "features.content.feature4.name": "Trending Caption Writing",
    "features.content.feature4.desc":
      "Automatically write engaging captions from product info or brief outline",
    "features.content.feature5.name": "Smart Hashtag Suggestions",
    "features.content.feature5.desc":
      "Suggest hashtags to maximize organic reach",
    "features.content.feature6.name": "SEO Optimization",
    "features.content.feature6.desc":
      "Write SEO-optimized articles for blogs and websites",
    "features.content.metric1.name": "Image Generation Time",
    "features.content.metric1.value": "10-30 seconds",
    "features.content.metric1.note": "Professional 4K quality",
    "features.content.metric2.name": "Content Creation Cost",
    "features.content.metric2.value": "2 Credits/image",
    "features.content.metric2.note": "90% savings vs hiring designer",
    "features.content.metric3.name": "Style Variety",
    "features.content.metric3.value": "50+ styles",
    "features.content.metric3.note": "Realistic, 3D, Illustration, Abstract",
    "features.trends.title": "AI Hot Trends Discovery",
    "features.trends.desc":
      "AI system that finds Trends and optimizes Briefs intelligently, never run out of ideas.",
    "features.trends.stats":
      "~30 seconds/Brief • 4-step process • Real-time scoring",
    "features.trends.feature1.name": "INPUT ENGINE",
    "features.trends.feature1.desc":
      "Collect & Process Brief: Brand info (Name, Industry, Product), Target & Strategy (Persona, Pain points, Goals), Output format",
    "features.trends.feature2.name": "QUALITY EVALUATION",
    "features.trends.feature2.desc":
      "Real-time Brief scoring on 100-point scale: Blocking (<50), Warning (50-79), Excellent (≥80)",
    "features.trends.feature3.name": "IDEA GENERATION",
    "features.trends.feature3.desc":
      "AI Brainstorming with Fit Score (0.0-1.0), Effort Level (Low/Medium/High), Estimated Impact",
    "features.trends.feature4.name": "CAMPAIGN MAPPER",
    "features.trends.feature4.desc":
      "Action plan: Content Outline, Hooks & CTAs, Platform distribution",
    "features.trends.metric1.name": "Evaluation weights",
    "features.trends.metric1.value": "Brand 30% • Strategy 40% • Output 30%",
    "features.trends.metric1.note": "Bonus +5 points if Pain points > 3",
    "features.trends.metric2.name": "Supported formats",
    "features.trends.metric2.value": "7+ formats",
    "features.trends.metric2.note":
      "Articles, Video scripts, Infographics, Landing pages, Hooks, CTAs",
    "features.trends.metric3.name": "Processing speed",
    "features.trends.metric3.value": "~30 seconds",
    "features.trends.metric3.note": "From Brief to complete Campaign",
    "features.table.mainFeatures": "Main Features",
    "features.table.featureName": "Feature",
    "features.table.description": "Detailed Description",
    "features.table.performance": "Performance Metrics",
    "features.table.metric": "Metric",
    "features.table.value": "Value",
    "features.table.note": "Note",
    "features.video.title": "AI Video Factory",
    "features.video.desc":
      "Produce marketing videos with Virtual KOL in minutes. No filming, no studio, no real KOL needed.",
    "features.video.stats": "50 Credits/video • 5 min production • 95% savings",
    "features.video.feature1.name": "Virtual KOL Presenter",
    "features.video.feature1.desc":
      "Brand ambassador narrates from script with 100% Character Consistency",
    "features.video.feature2.name": "Natural AI Voice",
    "features.video.feature2.desc":
      "Uses AI Voice, supports multiple languages",
    "features.video.feature3.name": "Multi-scene editor",
    "features.video.feature3.desc":
      "Supports multiple frames/scenes in one video",
    "features.video.feature4.name": "AI Suggestions",
    "features.video.feature4.desc":
      "Automatically suggests suitable scene content",
    "features.video.feature5.name": "Auto Lip-sync",
    "features.video.feature5.desc":
      "Automatically syncs lips precisely with script dialogue",
    "features.video.metric1.name": "Production cost",
    "features.video.metric1.value": "0 VND (included)",
    "features.video.metric1.note": "95% savings vs traditional KOL",
    "features.video.metric2.name": "Production time",
    "features.video.metric2.value": "5 minutes",
    "features.video.metric2.note": "99% faster than 3-7 days",
    "features.video.metric3.name": "Export formats",
    "features.video.metric3.value": "720p, 1080p, 4K",
    "features.video.metric3.note": "16:9 (YouTube) • 9:16 (TikTok) • 8-60 sec",
    "features.email.title": "Email Marketing Automation",
    "features.email.desc":
      "100% automated customer care system - Complete customer journey.",
    "features.email.stats":
      "100% automated • CRM integration • Smart A/B Testing",
    "features.email.feature1.name": "Responsive Design",
    "features.email.feature1.desc":
      "Perfect display on Mobile/Desktop, auto-optimized interface",
    "features.email.feature2.name": "Smart Tracking",
    "features.email.feature2.desc":
      "Optimize Open Rate & Click Rate, track customer behavior",
    "features.email.feature3.name": "100% Automated",
    "features.email.feature3.desc":
      "Automated workflow, no manual operation, runs 24/7",
    "features.email.feature4.name": "CRM Integration",
    "features.email.feature4.desc":
      "Sync customer data, personalize email content",
    "features.email.feature5.name": "Auto A/B Testing",
    "features.email.feature5.desc":
      "Automatically test subject lines and content to optimize results",
    "features.email.metric1.name": "Care stages",
    "features.email.metric1.value": "4 stages",
    "features.email.metric1.note": "Welcome, Reminder, Feedback, Re-marketing",
    "features.email.metric2.name": "Automation",
    "features.email.metric2.value": "100%",
    "features.email.metric2.note": "No manual operation required",
    "features.email.metric3.name": "Performance optimization",
    "features.email.metric3.value": "Open Rate +35%",
    "features.email.metric3.note": "Thanks to A/B Testing & Smart Tracking",
    "features.multiPlatform.title": "Multi-Platform Management",
    "features.multiPlatform.desc":
      "One Dashboard - Control everything. Centralized multi-channel management and smart interaction 24/7.",
    "features.multiPlatform.stats":
      "5 platforms • 90% time saved • 24/7 virtual assistant",
    "features.multiPlatform.feature1.name": "Batch Scheduling & Posting",
    "features.multiPlatform.feature1.desc":
      "Save 90% of manual operation time across each app",
    "features.multiPlatform.feature2.name": "Content Calendar",
    "features.multiPlatform.feature2.desc":
      "Intuitive calendar interface, color-coded content classification",
    "features.multiPlatform.feature3.name": "Drag & Drop",
    "features.multiPlatform.feature3.desc":
      "Easily drag and drop to quickly reschedule posts",
    "features.multiPlatform.feature4.name": "AI Comment Reply",
    "features.multiPlatform.feature4.desc":
      "Auto-reply to comments with personalized tone, maintain high engagement",
    "features.multiPlatform.feature5.name": "AI DM Chatbot 24/7",
    "features.multiPlatform.feature5.desc":
      "Answer messages, resolve queries and collect customer information",
    "features.multiPlatform.feature6.name": "Unified Inbox",
    "features.multiPlatform.feature6.desc":
      "Consolidate all messages & comments from every platform in one place",
    "features.multiPlatform.metric1.name": "Supported platforms",
    "features.multiPlatform.metric1.value": "5 platforms",
    "features.multiPlatform.metric1.note":
      "Facebook, Instagram, TikTok, YouTube, Zalo OA",
    "features.multiPlatform.metric2.name": "Time saved",
    "features.multiPlatform.metric2.value": "90%",
    "features.multiPlatform.metric2.note":
      "Compared to manual operation per app",
    "features.multiPlatform.metric3.name": "Auto reply cost",
    "features.multiPlatform.metric3.value": "1 Credit/reply",
    "features.multiPlatform.metric3.note": "Automatic comment reply",
    "features.ads.title": "AI Ads Management & Analytics",
    "features.ads.desc":
      "Accurate measurement, data-driven decisions. Comprehensive analytics dashboard with 99.9% accuracy.",
    "features.ads.stats":
      "99.9% accuracy • Auto budget optimization • ROI Calculator",
    "features.ads.feature1.name": "Budget Optimization",
    "features.ads.feature1.desc":
      "Automatically adjust budget based on target CPA/ROAS",
    "features.ads.feature2.name": "Audience Suggestions",
    "features.ads.feature2.desc":
      "Suggest Custom & Lookalike audiences from customer data",
    "features.ads.feature3.name": "Smart A/B Testing",
    "features.ads.feature3.desc":
      "Automatically test Headlines, CTAs to find best performing ads",
    "features.ads.feature4.name": "Performance Alerts",
    "features.ads.feature4.desc":
      "Real-time alerts when campaigns underperform or budget runs low",
    "features.ads.metric1.name": "Measurement metrics",
    "features.ads.metric1.value": "8+ metrics",
    "features.ads.metric1.note":
      "Impressions, CTR, Conversions, CPA, ROAS, LTV, NPS",
    "features.ads.metric2.name": "ROI Calculator",
    "features.ads.metric2.value": "Built-in",
    "features.ads.metric2.note":
      "Direct comparison of AI KOL cost vs Traditional",
    "features.ads.metric3.name": "Auto Report",
    "features.ads.metric3.value": "Weekly/Monthly",
    "features.ads.metric3.note":
      "Automatically send performance reports via Email",

    // Registration Success
    "registration.skipLink": "Skip to main content",
    "registration.successIcon": "Success icon",
    "registration.successTitle": "Registration Successful!",
    "registration.successMessage":
      "Thank you for your interest in DXAI Marketing Platform. Our team will contact you within 24 hours.",
    "registration.loginLabel": "Login to system",
    "registration.loginButton": "Login Now",
    "registration.registerAnotherLabel": "Register another person",
    "registration.registerAnotherButton": "Register another account",
    "registration.backToHome": "Back to home",

    // Registration Form
    "registration.form.trial": "Start 14-day free trial",
    "registration.form.hero.title": "Elevate Enterprise Marketing with AI",
    "registration.form.hero.subtitle":
      "Over 2,500+ businesses have successfully transformed digitally with DXAI. Join today to receive exclusive benefits.",
    "registration.form.benefit1": "1-on-1 expert consultation",
    "registration.form.benefit2": "Live product demo",
    "registration.form.benefit3": "Get special offers for SMBs",
    "registration.form.rating": "4.9/5 based on user reviews",
    "registration.form.testimonial":
      "DXAI helped us optimize our workflow and increase conversion rate by 30% in the first 3 months.",
    "registration.form.title": "Sign up for free trial",
    "registration.form.subtitle":
      "Fill in the information to start experiencing DXAI",
    "registration.form.package.starter": "Starter",
    "registration.form.package.starterTitle": "For individuals",
    "registration.form.package.starterDesc":
      "Free full-feature experience for 14 days.",
    "registration.form.package.business": "Business",
    "registration.form.package.businessTitle": "For organizations",
    "registration.form.package.businessDesc":
      "Custom solution with admin and permissions.",
    "registration.form.company.name": "Company / Organization name",
    "registration.form.company.namePlaceholder": "Enter official name",
    "registration.form.company.taxCode": "Tax ID (TIN)",
    "registration.form.company.taxCodePlaceholder": "Example: 0101234567",
    "registration.form.company.type": "Business type",
    "registration.form.company.typeEnterprise": "LLC/JSC",
    "registration.form.company.typeHousehold": "Household business",
    "registration.form.company.typeOther": "Other organization",
    "registration.form.company.address": "Office address",
    "registration.form.company.addressPlaceholder":
      "House number, street, District, City/Province",
    "registration.form.contact.fullName": "Full name",
    "registration.form.contact.fullNamePlaceholder": "John Doe",
    "registration.form.contact.email": "Work email",
    "registration.form.contact.emailPlaceholder": "name@company.com",
    "registration.form.contact.phone": "Phone number",
    "registration.form.contact.phonePlaceholder": "912 345 678",
    "registration.form.contact.jobPosition": "Job position",
    "registration.form.contact.jobPositionPlaceholder": "Select position",
    "registration.form.jobPosition.ceo": "CEO / Founder",
    "registration.form.jobPosition.cmo": "CMO",
    "registration.form.jobPosition.marketingManager": "Marketing Manager",
    "registration.form.jobPosition.growthHacker": "Growth Hacker",
    "registration.form.jobPosition.other": "Other",
    "registration.form.submit.processing": "Processing...",
    "registration.form.submit.button": "Start free trial",
    "registration.form.login.text": "Already have an account?",
    "registration.form.login.link": "Login now",
    "registration.form.terms.text": "By signing up, you agree to our",
    "registration.form.terms.service": "Terms of Service",
    "registration.form.terms.and": "and",
    "registration.form.terms.privacy": "Privacy Policy",
    "registration.form.terms.suffix": ".",

    "features.schedule.title": "Smart Scheduling",
    "features.schedule.desc":
      "Auto-post at golden hours. AI analyzes optimal timing for each platform.",
    "features.schedule.stats": "24/7 automatic",
    "features.image.title": "AI Image Design",
    "features.image.desc":
      "Create professional banners, thumbnails and ad creatives. Quick editing with AI.",
    "features.image.stats": "Unlimited",
    "features.analytics.title": "Smart Analytics",
    "features.analytics.desc":
      "Intuitive dashboard with deep insights. Track ROI and campaign performance in real-time.",
    "features.analytics.stats": "10+ metrics",
    "features.integration.title": "Seamless Integration",
    "features.integration.desc":
      "Connect with Facebook, Instagram, TikTok, LinkedIn, YouTube and 20+ other platforms.",
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
    "pricing.startup.subtitle":
      "For small businesses looking to build low-frequency channels",
    "pricing.growth.name": "Growth",
    "pricing.growth.desc": "Accelerate - Best Seller",
    "pricing.growth.subtitle":
      "For Agencies or SMEs wanting daily video content coverage",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Corporation",
    "pricing.enterprise.subtitle":
      "For retail chains or systems requiring customization",
    "pricing.currency": "VND",
    "pricing.credits.unlimited": "Unlimited Credits",
    "pricing.credits.perMonth": "{count} Credits/month",
    "pricing.enterprise.title": "Enterprise-Ready",
    "pricing.enterprise.titleHighlight": "Plans",
    "pricing.enterprise.subtitle.full":
      "Transparent, scalable pricing for every stage of your AI transformation journey. No hidden fees.",
    "pricing.enterprise.billing.monthly": "Monthly",
    "pricing.enterprise.billing.yearly": "Yearly",
    "pricing.enterprise.save15": "Save 15%",
    "pricing.enterprise.startup.name": "Startup",
    "pricing.enterprise.startup.description":
      "For small businesses building marketing presence",
    "pricing.enterprise.startup.cta": "Start Free Trial",
    "pricing.enterprise.growth.name": "Growth",
    "pricing.enterprise.growth.description":
      "For agencies and SMEs scaling content production",
    "pricing.enterprise.growth.cta": "Get Started",
    "pricing.enterprise.enterprise.name": "Enterprise",
    "pricing.enterprise.enterprise.description":
      "For retail chains and custom enterprise solutions",
    "pricing.enterprise.enterprise.cta": "Contact Sales",
    "pricing.enterprise.custom": "Custom",
    "pricing.enterprise.perMonth": "/mo",
    "pricing.enterprise.perYear": "/yr",
    "pricing.enterprise.comparison.title": "Detailed Feature Comparison",
    "pricing.enterprise.comparison.features": "FEATURES",
    "pricing.enterprise.comparison.feature1": "Global LLM Orchestration",
    "pricing.enterprise.comparison.feature2":
      "Localized Content Gen (40+ Languages)",
    "pricing.enterprise.comparison.feature3":
      "Predictive Performance Analytics",
    "pricing.enterprise.comparison.feature4": "Security & API Limits",
    "pricing.enterprise.comparison.feature5": "Deployment Type",
    "pricing.enterprise.cta.help":
      "Need help choosing the right plan for your business?",
    "pricing.enterprise.cta.expert": "Talk to an Expert",
    "pricing.enterprise.startup.feature1": "Up to 10 AI Videos/month",
    "pricing.enterprise.startup.feature2": "1,500 content posts/month",
    "pricing.enterprise.startup.feature3":
      "Multi-channel publishing (Facebook, Instagram, TikTok)",
    "pricing.enterprise.startup.feature4": "50+ content templates",
    "pricing.enterprise.startup.feature5": "Auto-scheduling",
    "pricing.enterprise.startup.feature6": "Basic analytics",
    "pricing.enterprise.startup.feature7": "Email support",
    "pricing.enterprise.growth.feature1": "All Startup features",
    "pricing.enterprise.growth.feature2": "Up to 25 AI Videos/month",
    "pricing.enterprise.growth.feature3": "2,500 content posts/month",
    "pricing.enterprise.growth.feature4": "Bonus 1,000 Credits (7,500 total)",
    "pricing.enterprise.growth.feature5": "AI banner & thumbnail design",
    "pricing.enterprise.growth.feature6": "20+ platform publishing",
    "pricing.enterprise.growth.feature7": "Advanced Analytics & ROI tracking",
    "pricing.enterprise.growth.feature8": "Priority support (2hr response)",
    "pricing.enterprise.growth.feature9": "A/B testing for campaigns",
    "pricing.enterprise.enterprise.feature1": "All Growth features",
    "pricing.enterprise.enterprise.feature2": "Unlimited Videos & Content",
    "pricing.enterprise.enterprise.feature3": "Dedicated Server",
    "pricing.enterprise.enterprise.feature4":
      "Custom AI Models (brand fine-tuned)",
    "pricing.enterprise.enterprise.feature5":
      "API Access for system integration",
    "pricing.enterprise.enterprise.feature6": "Dedicated Account Manager",
    "pricing.enterprise.enterprise.feature7": "99.9% SLA uptime guarantee",
    "pricing.enterprise.enterprise.feature8": "24/7 Hotline/Chat support",
    "pricing.enterprise.enterprise.feature9": "Team onboarding & training",
    "pricing.enterprise.enterprise.feature10":
      "White-label solution (optional)",

    // ROI Section
    "roi.badge": "EFFICIENCY COMPARISON",
    "roi.title.brand": "DXAI Marketing",
    "roi.title": "Why Choose DXAI Marketing Platform?",
    "roi.title.full": "Why {brand} excels?",
    "roi.subtitle.full":
      "Compare traditional marketing workflows vs an AI-powered solution. Save time, reduce costs, and boost productivity exponentially.",
    "roi.watchDemo": "Watch Demo Video",
    "roi.header.criteria": "Criteria",
    "roi.subtitle":
      "Compare traditional marketing workflows vs an AI-powered solution",
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
    "roi.cta.text":
      "Save costs and increase productivity 10x with DXAI Marketing Platform",
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
    // ROI Comparison Rows
    "roi.row1.criteria": "Operating Cost",
    "roi.row1.traditional": "~$555/month",
    "roi.row1.traditionalDesc": "(Staff + Tools)",
    "roi.row1.ai": "~$255/month",
    "roi.row1.aiDesc": "(All-in-one)",
    "roi.row1.savings": "Save ~54%",
    "roi.row2.criteria": "Video Output",
    "roi.row2.traditional": "10-15 videos",
    "roi.row2.traditionalDesc": "/month",
    "roi.row2.ai": "1000+ videos",
    "roi.row2.aiDesc": "/month",
    "roi.row3.criteria": "Time per Video",
    "roi.row3.traditional": "1-2 days",
    "roi.row3.traditionalDesc": "(Manual)",
    "roi.row3.ai": "2 minutes",
    "roi.row3.aiDesc": "(Automated)",
    "roi.row4.criteria": "Multitasking",
    "roi.row4.traditional": "Difficult",
    "roi.row4.traditionalDesc": "(1-2 channels)",
    "roi.row4.ai": "50+ channels",
    "roi.row4.aiDesc": "(Simultaneous)",
    "roi.row5.criteria": "Operation",
    "roi.row5.traditional": "8-10 hours",
    "roi.row5.traditionalDesc": "/day",
    "roi.row5.ai": "24/7",
    "roi.row5.aiDesc": "(Automated)",
    "roi.header.traditional.manual": "Manual Approach",
    "roi.header.traditional": "Traditional Marketing",
    "roi.header.recommended": "RECOMMENDED",
    "roi.header.dxai": "DXAI Marketing AI",
    "roi.header.dxai.auto": "Automated 100%",
    "roi.mobile.traditional": "Traditional",
    "roi.cta.ready": "Ready to Transform with AI Marketing?",
    "roi.cta.start": "Get Started",
    "roi.cta.learn": "Learn More",
    "roi.disclaimer":
      "* Data based on survey of 500+ Vietnamese businesses using DXAI Marketing Platform",

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
    "whyChoose.tools.aiModels":
      "GPT 5.1, Gemini 2.5 Pro, DeepSeek-R1, Claude 4.7",
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
    "testimonials.title.customers": "What Our Clients",
    "testimonials.title.say": "Say",
    "testimonials.subtitle": "Success stories from businesses that trust us",

    // Why Choose Section (Optura Style)
    "whyChoose.optura.title": "Why Choose",
    "whyChoose.optura.brand": "DXAI Marketing Platform",
    "whyChoose.optura.subtitle":
      "Compare traditional marketing workflows vs AI-powered automation solution",
    "whyChoose.optura.criteria": "Comparison Criteria",
    "whyChoose.optura.traditional": "Traditional Method",
    "whyChoose.optura.traditional.manual": "Manual Approach",
    "whyChoose.optura.bestChoice": "BEST CHOICE",
    "whyChoose.optura.dxai": "DXAI Marketing Platform",
    "whyChoose.optura.dxai.auto": "Automated Solution",
    "whyChoose.optura.guarantee.title": "Guaranteed Results",
    "whyChoose.optura.guarantee.desc":
      "Metrics based on average data from 500+ businesses that have transitioned to the DXAI ecosystem. 80% cost savings calculated on total staffing and production budget.",
    "whyChoose.optura.tryNow": "Try Now",
    "whyChoose.optura.consult.title": "Need Expert Consultation?",
    "whyChoose.optura.consult.desc":
      "Our team of experts is ready to provide free consultation to help you find the best solution for your business.",
    "whyChoose.optura.consultBtn": "Get Consultation",
    "whyChoose.optura.watchDemo": "Watch Demo",
    "whyChoose.optura.mobilePlatform": "DXAI Platform",
    // Why Choose Optura Comparison Rows
    "whyChoose.optura.row1.criteria": "Cost",
    "whyChoose.optura.row1.traditional": "~$555 / month",
    "whyChoose.optura.row1.dxai": "~$255 / month",
    "whyChoose.optura.row1.savings": "Save ~54%",
    "whyChoose.optura.row2.criteria": "Video Output",
    "whyChoose.optura.row2.traditional": "10–15 videos/month",
    "whyChoose.optura.row2.dxai": "~25 videos/month",
    "whyChoose.optura.row3.criteria": "Time per Video",
    "whyChoose.optura.row3.traditional": "1–2 days/video",
    "whyChoose.optura.row3.dxai": "~2 minutes/video",
    "whyChoose.optura.row4.criteria": "Multitasking",
    "whyChoose.optura.row4.traditional": "Single task",
    "whyChoose.optura.row4.dxai": "Video + Images + Articles + Chatbot",
    "whyChoose.optura.row5.criteria": "Operation",
    "whyChoose.optura.row5.traditional":
      "Requires shifts, leave, manual oversight",
    "whyChoose.optura.row5.dxai": "Automated 24/7",

    // Trusted Businesses Section
    "trusted.title.prefix": "Trusted by over",
    "trusted.title.count": "500 businesses",
    "trusted.title.suffix": "nationwide",
    "trusted.subtitle":
      "Partnering with leading and growing businesses in Vietnam with AI marketing solutions.",
    "trusted.stats.businesses": "Businesses Trust Us",
    "trusted.stats.provinces": "Vietnamese Provinces",
    "trusted.stats.industries": "Main Industries",
    "trusted.badge.soc2.title": "SOC 2 Type II Certified",
    "trusted.badge.soc2.desc":
      "Enterprise-grade security standards for your data.",
    "trusted.badge.uptime.title": "99.9% Uptime SLA",
    "trusted.badge.uptime.desc":
      "Platform reliability guaranteed for 24/7 operations.",
    "trusted.copyright":
      "© 2024 DXAI Marketing. All rights reserved. Professional trust signals for Vietnam and International markets.",
    "trusted.industry.retail": "Retail Industry",
    "trusted.industry.ecommerce": "E-Commerce",
    "trusted.industry.realestate": "Real Estate",
    "trusted.industry.manufacturing": "Manufacturing",

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
    "about.hero.badge": "About Us",
    "about.hero.title": "About Us",
    "about.hero.title.prefix": "Pioneering",
    "about.hero.title.brand": "DXAI Marketing",
    "about.hero.title.suffix": "Platform",
    "about.hero.subtitle": "Tien Phong CDS & DXAI – DXAI Marketing Platform",
    "about.hero.description":
      "Multi-channel Digital Marketing Transformation Partner, automating workflow from idea to content publishing.",
    "about.hero.desc":
      "We redefine how businesses operate with an AI-First philosophy, driving comprehensive digital transformation and optimizing automated marketing performance.",
    "about.hero.cta.contact": "Contact Now",
    "about.hero.cta.learn": "Learn More",
    "about.hero.image.alt": "Professional Tien Phong CDS Team",
    "about.hero.stat.uptime": "Uptime",
    "about.hero.stat.operational": "All systems operational",
    "about.hero.stat.businesses": "Businesses",
    "about.cta.trial": "Start Free Trial",
    "about.cta.contact": "Contact Us",

    // About Company Section
    "about.company.title": "Tien Phong CDS",
    "about.company.subtitle":
      "Multi-channel digital transformation partner for Vietnamese businesses",
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
    "about.why.optimize.desc":
      "Detailed reports, clear KPIs, and continuous improvement based on real data.",
    "about.why.speed.title": "Deployment Speed",
    "about.why.speed.desc":
      "Clear process, fast sprints, on-time delivery as committed.",
    "about.why.support.title": "Dedicated Support",
    "about.why.support.desc":
      "Long-term partnership, in-depth training, thorough onboarding for your team.",

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
    "about.process.design.desc":
      "Optimal UI/UX design, create wireframes and prototypes to confirm direction.",
    "about.process.development.title": "Development",
    "about.process.development.desc":
      "Development with modern technologies, optimized performance, security and scalability.",
    "about.process.testing.title": "Testing",
    "about.process.testing.desc":
      "Comprehensive testing of functionality, security, performance. Ensure bug-free product before launch.",
    "about.process.launch.title": "Launch",
    "about.process.launch.desc":
      "Deploy to production, closely monitor and support customer team in usage.",

    // About Product Section
    "about.product.badge": "Our Product",
    "about.product.title": "DXAI Marketing Platform",
    "about.product.subtitle":
      "Comprehensive AI marketing platform, automating every aspect from content creation to multi-channel distribution",
    "about.product.why.title": "Why Choose DXAI?",
    "about.product.why.subtitle":
      "Comprehensive AI Marketing solution for modern businesses",
    "about.product.why.allinone.title": "All-in-One Platform",
    "about.product.why.allinone.desc":
      "Complete AI marketing toolkit integrated in a single platform",
    "about.product.why.cost.title": "Cost Effective",
    "about.product.why.cost.desc":
      "Save up to 85% compared to traditional marketing teams",
    "about.product.why.multiplatform.title": "Multi-Platform",
    "about.product.why.multiplatform.desc":
      "Auto-publish to 20+ social and marketing platforms",
    "about.product.why.ai.title": "Intelligent AI",
    "about.product.why.ai.desc":
      "Leverages 6 leading AI models to optimize every content",
    "about.product.core.title": "Core Capabilities",
    "about.product.core.desc":
      "8 core features helping businesses automate and optimize the entire marketing workflow",
    "about.product.feature.video.title": "AI Video Production",
    "about.product.feature.video.desc": "1000+ videos/month",
    "about.product.feature.image.title": "Image Design",
    "about.product.feature.image.desc": "Unlimited",
    "about.product.feature.content.title": "Multi-Channel Content",
    "about.product.feature.content.desc": "50+ templates",
    "about.product.feature.chatbot.title": "Smart Chatbot",
    "about.product.feature.chatbot.desc": "AI-Powered",
    "about.product.feature.analytics.title": "Smart Analytics",
    "about.product.feature.analytics.desc": "10+ metrics",
    "about.product.feature.schedule.title": "Auto Scheduling",
    "about.product.feature.schedule.desc": "24/7 automation",
    "about.product.feature.report.title": "Performance Reports",
    "about.product.feature.report.desc": "Real-time",
    "about.product.feature.integration.title": "Seamless Integration",
    "about.product.feature.integration.desc": "20+ platforms",
    "about.product.tech.badge": "AI Technology",
    "about.product.tech.title": "Technology Behind DXAI",
    "about.product.tech.subtitle":
      "Integrated with 6 world-leading AI models to deliver optimal results",
    "about.product.stat.businesses": "Businesses",
    "about.product.capabilities.title": "DXAI Capabilities",
    "about.product.capabilities.video": "Auto Video Production",
    "about.product.capabilities.image": "Marketing Image Design",
    "about.product.capabilities.content": "SEO Content Writing",
    "about.product.capabilities.chatbot": "24/7 AI Chatbot",
    "about.product.capabilities.analytics": "Smart Data Analytics",
    "about.product.capabilities.schedule": "Auto Post Scheduling",
    "about.product.capabilities.report": "Detailed Performance Reports",
    "about.product.capabilities.integration": "Multi-platform Integration",

    // About CTA Section
    "about.cta.title": "Ready for Digital Marketing Transformation?",
    "about.cta.subtitle": "Contact us today!",
    "about.cta.description":
      "We look forward to learning more about your business and how DXAI can help you achieve your goals in the digital world.",

    // About Philosophy Section
    "about.philosophy.title": "Our AI-First Philosophy",
    "about.philosophy.description":
      "Tiên Phong CDS is not just a tool, but a digital brain that helps businesses enhance competitiveness and maximize operational efficiency through intelligent automation.",
    "about.philosophy.benefit1.title": "Rapid Deployment",
    "about.philosophy.benefit1.desc":
      "System ready to operate in just 48 hours",
    "about.philosophy.benefit2.title": "Flexible Customization",
    "about.philosophy.benefit2.desc":
      "Modular features tailored for each industry",
    "about.philosophy.benefit3.title": "Maximum Security",
    "about.philosophy.benefit3.desc": "ISO/IEC 27001 security standards",
    "about.philosophy.benefit4.title": "Optimized ROI",
    "about.philosophy.benefit4.desc":
      "40% reduced costs, 25% increased conversion",

    // About Workflow Section
    "about.workflow.badge": "Our Methodology",
    "about.workflow.title": "6-Step Process Workflow",
    "about.workflow.subtitle":
      "Our structured approach ensures successful implementation and continuous optimization",
    "about.workflow.step1.title": "Discovery",
    "about.workflow.step1.desc": "Business audit and AI readiness assessment",
    "about.workflow.step2.title": "Strategy",
    "about.workflow.step2.desc":
      "Tailored AI Marketing roadmap focused on growth KPIs",
    "about.workflow.step3.title": "Integration",
    "about.workflow.step3.desc":
      "Seamlessly connecting DXAI with existing data and tools",
    "about.workflow.step4.title": "Optimization",
    "about.workflow.step4.desc":
      "Model fine-tuning for performance and efficiency",
    "about.workflow.step5.title": "Testing",
    "about.workflow.step5.desc":
      "Rigorous quality assurance and performance tracking",
    "about.workflow.step6.title": "Launch",
    "about.workflow.step6.desc":
      "Full-scale deployment and continuous growth monitoring",

    // About Why Choose Section
    "about.whyChoose.badge": "Why Choose Us",
    "about.whyChoose.title": "Why Choose Us",
    "about.whyChoose.subtitle":
      "We combine deep marketing expertise with state-of-the-art AI infrastructure to drive enterprise growth.",
    "about.whyChoose.expertise1.title": "AI Expertise",
    "about.whyChoose.expertise1.desc":
      "Leveraging DXAI product capabilities for marketing excellence",
    "about.whyChoose.expertise2.title": "Enterprise Support",
    "about.whyChoose.expertise2.desc":
      "Dedicated 24/7 reliability for enterprise-grade operations",
    "about.whyChoose.expertise3.title": "Scalable Infrastructure",
    "about.whyChoose.expertise3.desc":
      "Robust architecture built to grow with your business needs",
    "about.whyChoose.expertise4.title": "Data-Driven Results",
    "about.whyChoose.expertise4.desc":
      "Optimizing performance through advanced AI model fine-tuning",

    // About Final CTA Section
    "about.finalCta.badge": "Get Started Today",
    "about.finalCta.title.prefix": "Ready to streamline your ",
    "about.finalCta.title.highlight": "marketing workflow",
    "about.finalCta.title.suffix": "?",
    "about.finalCta.description":
      "Join over 500 businesses transforming marketing with AI. Start your automation journey today.",
    "about.finalCta.cta.demo": "Schedule a Demo",
    "about.finalCta.cta.roadmap": "Download Roadmap",
    "about.finalCta.trust.noCard": "No credit card required",
    "about.finalCta.trust.setup": "48-hour setup",
    "about.finalCta.trust.support": "24/7 support",

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
    "trustedBusinesses.subtitle":
      "Chosen by businesses across various industries",
    "trustedBusinesses.category.retail": "Retail Industry",
    "trustedBusinesses.category.commerce": "E-Commerce Industry",
    "trustedBusinesses.category.realestate": "Real Estate Industry",
    "trustedBusinesses.category.manufacturing": "Manufacturing Industry",
    "trustedBusinesses.stats.businesses": "Businesses",
    "trustedBusinesses.stats.provinces": "Provinces",
    "trustedBusinesses.stats.industries": "Industries",

    // Hero Light Theme Section
    "heroLight.badge": "LEADING AI MARKETING PLATFORM IN VIETNAM",
    "heroLight.title.line1": "BOOST REVENUE",
    "heroLight.title.line2": "WITH",
    "heroLight.title.highlight": "SMART AI MARKETING",
    "heroLight.subtitle.part1":
      "Vietnam's only AI system that helps businesses",
    "heroLight.subtitle.multichannel": "create multi-channel content",
    "heroLight.subtitle.customers": "manage customers",
    "heroLight.subtitle.ads": "optimize ads automatically",
    "heroLight.subtitle.part2": "From 1 idea to thousands of viral content.",
    "heroLight.stats.videos": "1000+ videos/month",
    "heroLight.stats.videosAuto": "automated",
    "heroLight.stats.channels": "50+ channels",
    "heroLight.stats.channelsManage": "Manage",
    "heroLight.stats.channelsSim": "simultaneously",
    "heroLight.stats.roi": "+285%",
    "heroLight.stats.roiText": "ROI boost",
    "heroLight.stats.roiTime": "in 3 months",
    "heroLight.stats.saveTime": "80% time",
    "heroLight.stats.saveText": "Save",
    "heroLight.stats.saveCost": "+ 60% cost",
    "heroLight.cta.trial": "Try Free for 14 Days",
    "heroLight.cta.demo": "Watch 3-Min Demo",
    "heroLight.trust.noCard": "No credit card required",
    "heroLight.trust.setup": "5-minute setup",
    "heroLight.trust.security": "Bank-level security",
    "heroLight.dashboard.live": "Live",
    "heroLight.dashboard.version": "Dashboard v3.0",
    "heroLight.dashboard.reach": "Total Reach",
    "heroLight.dashboard.aiEfficiency": "AI Efficiency",
    "heroLight.dashboard.vnContent": "Vietnamese Content",
    "heroLight.dashboard.active": "ACTIVE",
    "heroLight.dashboard.campaigns": "Active Campaigns",
    "heroLight.tech.title": "Technology Behind DXAI",
    "heroLight.tech.subtitle": "Integrated with world's leading AI models",
  },
};

// ============================================================
// CONTEXT
// ============================================================
const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "dxai_locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (stored && (stored === "vi" || stored === "en")) {
        setLocaleState(stored);
      }
    } catch (error) {
      console.error("Failed to read locale from localStorage:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = locale;
    }
  }, [locale, isHydrated]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch (error) {
      console.error("Failed to save locale to localStorage:", error);
    }
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let text = translations[locale][key] || translations.vi[key] || key;

      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          text = text.replace(
            new RegExp(`\\{${paramKey}\\}`, "g"),
            String(value),
          );
        });
      }

      return text;
    },
    [locale],
  );

  // Prevent hydration mismatch by not rendering until client-side hydration is complete
  if (!isHydrated) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

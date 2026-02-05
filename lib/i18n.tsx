"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "./i18n-config";

// ============================================================
// TYPES - Re-export from i18n-config
// ============================================================

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

    "featurePage.content.problems.oldWay.header": "Cách cũ",
    "featurePage.content.problems.UniksmartWay.header": "Giải pháp",

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
    "hero.trust.users": "500+ doanh nghiệp",
    "hero.trust.provinces": "Tin dùng bởi 63 tỉnh thành",
    "hero.trust.soc2": "SOC 2 Type II",
    "hero.trust.iso": "ISO 27001",
    "hero.trust.uptime": "99.9% Uptime SLA",
    "hero.trust.dataResidency": "Dữ liệu lưu trữ tại Việt Nam",
    "hero.trust.videoTime": "2-phút tạo video",
    "hero.trust.avgRoi": "ROI trung bình +120%",
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
      "Hệ thống chatbot AI thông minh tự động hóa toàn bộ quy trình chăm sóc khách hàng — từ tư vấn sản phẩm, báo giá tự động, tới đặt lịch hẹn và phân loại lead — hoạt động 24/7 trên nhiều nền tảng.",
    "features.chatbot.stats":
      "Phản hồi tức thì 24/7 • Giảm 99% thời gian chờ đợi",
    "features.chatbot.feature1.name": "Tư vấn Sản phẩm & Dịch vụ Cá nhân hoá",
    "features.chatbot.feature1.desc":
      "AI được huấn luyện trên dữ liệu doanh nghiệp bạn — hiểu ngành hàng, sản phẩm và giọng điệu thương hiệu.",
    "features.chatbot.feature2.name": "Báo giá Tự động tức thì",
    "features.chatbot.feature2.desc":
      "Tính toán và cung cấp báo giá ước tính trong vài giây, bất cứ lúc nào trong ngày.",
    "features.chatbot.feature3.name": "So sánh Sản phẩm & Gợi ý Thông minh",
    "features.chatbot.feature3.desc":
      "Giúp khách hàng so sánh sản phẩm và nhận gợi ý phù hợp ngay trong cuộc hội thoại.",
    "features.chatbot.feature4.name":
      "Tích hợp Lịch & Đặt hẹn Theo thời gian thực",
    "features.chatbot.feature4.desc":
      "Tự động kiểm tra lịch trống và lên lịch tư vấn, demo hoặc cuộc họp từ trong chat.",
    "features.chatbot.feature5.name":
      "Đánh giá Lead Thông minh (Hot / Warm / Cold)",
    "features.chatbot.feature5.desc":
      "Đánh giá mức độ quan tâm và đồng bộ lead đủ điều kiện vào CRM tự động.",
    "features.chatbot.feature6.name": "Chuyển giao cho Nhân viên Mượt mà",
    "features.chatbot.feature6.desc":
      "Chuyển ngay các yêu cầu phức tạp cho nhân viên với đầy đủ ngữ cảnh hội thoại.",
    "features.chatbot.metric1.name": "Thời gian Phản hồi Trung bình",
    "features.chatbot.metric1.value": "~3 giây",
    "features.chatbot.metric1.note": "Giảm 99% so với thủ công",
    "features.chatbot.metric2.name": "Tỷ lệ Chuyển đổi Lead",
    "features.chatbot.metric2.value": "+45%",
    "features.chatbot.metric2.note": "Nhờ phản hồi tức thì",
    "features.chatbot.metric3.name": "Vận hành Liên tục",
    "features.chatbot.metric3.value": "24/7/365",
    "features.chatbot.metric3.note": "Không bỏ lỡ khách hàng nào",
    "features.chatbot.why.title": "Tại sao chọn Chatbot CSKH AI?",
    "features.chatbot.why.bullet1":
      "Phản hồi ngay lập tức — không bỏ lỡ cơ hội bán hàng",
    "features.chatbot.why.bullet2":
      "Giảm khối lượng công việc cho đội hỗ trợ lên đến 80%",
    "features.chatbot.why.bullet3":
      "Hoạt động 24/7/365 — bao gồm ngày lễ và cuối tuần",
    "features.chatbot.why.bullet4":
      "Tăng tỷ lệ chuyển đổi nhờ phản hồi cá nhân hoá, hiểu ngữ cảnh",
    "features.chatbot.cta": "Liên hệ chuyên gia",
    "features.video.title": "Nhà máy Video AI",
    "features.video.desc":
      "Tạo video marketing chuyên nghiệp với đại sứ thương hiệu ảo chạy bằng AI. Sản xuất nội dung video nhanh, tiết kiệm chi phí và kiểm soát hoàn toàn thông điệp thương hiệu — không cần quay phim.",
    "features.video.stats": "50 Credit/video • 5 phút sản xuất • Tiết kiệm 95%",
    "features.video.feature1.name": "Video Đại Sứ Thương Hiệu AI",
    "features.video.feature1.desc":
      "Tạo video với đại sứ AI độc quyền của bạn — kiểm soát nội dung 100%, không tốn phí nhân sự.",
    "features.video.feature2.name": "Công nghệ Lip-sync Siêu Thực",
    "features.video.feature2.desc":
      "Chuyển động môi tự nhiên đồng bộ hoàn hảo với lời nói — không phân biệt được với cảnh quay thật.",
    "features.video.feature3.name": "Ba Chế Độ Tạo Nội Dung Linh Hoạt",
    "features.video.feature3.desc":
      "Script-to-Video | Text-to-Video | Image-to-Video — chọn quy trình làm việc phù hợp.",
    "features.video.feature4.name": "Giọng AI Tự Nhiên & Hỗ Trợ Đa Ngôn Ngữ",
    "features.video.feature4.desc":
      "Giọng nói giống con người trong 30+ ngôn ngữ cho thị trường trong nước và quốc tế.",
    "features.video.feature5.name":
      "Trình chỉnh sửa Nhiều Cảnh với Gợi ý Bố cục AI",
    "features.video.feature5.desc":
      "Tuỳ chỉnh video dễ dàng với bố cục cảnh được AI đề xuất.",
    "features.video.feature6.name": "Xuất Nhiều Định Dạng (HD đến 4K)",
    "features.video.feature6.desc":
      "Xuất theo tỉ lệ dọc, ngang, vuông — HD, Full HD và 4K.",
    "features.video.metric1.name": "Chi phí sản xuất",
    "features.video.metric1.value": "0 VNĐ",
    "features.video.metric1.note":
      "Tiết kiệm 95% so với phương pháp truyền thống",
    "features.video.metric2.name": "Thời gian sản xuất",
    "features.video.metric2.value": "5 phút",
    "features.video.metric2.note":
      "Nhanh hơn nhiều so với quy trình truyền thống",
    "features.video.metric3.name": "Định dạng xuất",
    "features.video.metric3.value": "HD, Full HD, 4K",
    "features.video.metric3.note": "Hỗ trợ dọc, ngang, vuông",
    "features.email.title": "Tự động hoá Email Marketing",
    "features.email.desc":
      "Hệ thống email automation thông minh giúp nuôi dưỡng, tương tác và giữ chân khách hàng suốt vòng đời — từ sau mua đến mua lại và giới thiệu — được tối ưu bởi AI.",
    "features.email.stats": "Tự động 100% • Tích hợp CRM • Cá nhân hóa bằng AI",
    "features.email.feature1.name": "Email Xác nhận & Chào mừng Tự động",
    "features.email.feature1.desc":
      "Gửi ngay xác nhận đơn hàng, hoá đơn điện tử và hướng dẫn onboarding sau giao dịch.",
    "features.email.feature2.name": "Nhắc lịch & Gia hạn Thông minh",
    "features.email.feature2.desc":
      "Nhắc tự động cho cuộc hẹn, hạn chót và gia hạn đăng ký.",
    "features.email.feature3.name": "Thu thập Đánh giá & Khảo sát",
    "features.email.feature3.desc":
      "Tự động yêu cầu đánh giá và thu thập phản hồi khách hàng vào thời điểm tối ưu.",
    "features.email.feature4.name": "Chiến dịch Tái Tương tác dựa trên Hành vi",
    "features.email.feature4.desc":
      "Ưu đãi sinh nhật, nhắc mua lại và khuyến nghị cá nhân hoá dựa trên hành vi.",
    "features.email.feature5.name": "Cá nhân hóa bằng AI",
    "features.email.feature5.desc":
      "Nội dung động được cá nhân hoá bằng dữ liệu CRM và lịch sử tương tác.",
    "features.email.feature6.name": "Tự động Hoàn Toàn",
    "features.email.feature6.desc":
      "Thiết lập một lần — toàn bộ hành trình khách hàng chạy tự động, tiết kiệm thời gian và nguồn lực.",
    "features.email.metric1.name": "Các giai đoạn chăm sóc",
    "features.email.metric1.value": "4 giai đoạn",
    "features.email.metric1.note": "Welcome, Nhắc nhở, Phản hồi, Re-marketing",
    "features.email.metric2.name": "Tự động hóa",
    "features.email.metric2.value": "100%",
    "features.email.metric2.note": "Không cần thao tác thủ công",
    "features.email.metric3.name": "Tối ưu hiệu quả",
    "features.email.metric3.value": "Open Rate +35%",
    "features.email.metric3.note": "Nhờ A/B Testing & Theo dõi Thông minh",
    "features.multiPlatform.title": "Quản lý Mạng Xã Hội Đa Nền Tảng",
    "features.multiPlatform.desc":
      "Một trung tâm điều phối tập trung để lên lịch, đăng bài và quản lý tương tác trên tất cả kênh xã hội của bạn từ một dashboard duy nhất — được hỗ trợ bởi AI để phản hồi thông minh 24/7.",
    "features.multiPlatform.stats":
      "5 nền tảng • Tiết kiệm 90% thời gian • Phản hồi AI 24/7",
    "features.multiPlatform.feature1.name": "Quản lý Đa nền tảng Thống nhất",
    "features.multiPlatform.feature1.desc":
      "Quản lý Facebook, Instagram, TikTok, YouTube và hơn thế nữa mà không cần chuyển nền tảng.",
    "features.multiPlatform.feature2.name":
      "Lên lịch & Đăng tự động (Hàng loạt)",
    "features.multiPlatform.feature2.desc":
      "Lên lịch và đăng nhiều bài cùng lúc — giảm 90% công việc thủ công.",
    "features.multiPlatform.feature3.name":
      "Lịch Nội dung Trực quan với Mã màu",
    "features.multiPlatform.feature3.desc":
      "Xem toàn bộ kế hoạch nội dung trong nháy mắt — dễ theo dõi tiến độ chiến dịch.",
    "features.multiPlatform.feature4.name": "Điều chỉnh Lịch bằng Kéo & Thả",
    "features.multiPlatform.feature4.desc":
      "Điều chỉnh lịch đăng ngay lập tức khi chiến dịch cần thay đổi nhanh.",
    "features.multiPlatform.feature5.name": "Tự động trả lời bình luận bằng AI",
    "features.multiPlatform.feature5.desc":
      "AI phân tích ngữ cảnh và phản hồi phù hợp — duy trì tương tác 24/7.",
    "features.multiPlatform.feature6.name": "Hộp thư xã hội Thống nhất",
    "features.multiPlatform.feature6.desc":
      "Tập hợp tất cả tin nhắn và bình luận từ mọi nền tảng về một giao diện duy nhất.",
    "features.multiPlatform.metric1.name": "Nền tảng hỗ trợ",
    "features.multiPlatform.metric1.value": "5 nền tảng",
    "features.multiPlatform.metric1.note":
      "Facebook, Instagram, TikTok, YouTube, Zalo OA",
    "features.multiPlatform.metric2.name": "Tiết kiệm thời gian",
    "features.multiPlatform.metric2.value": "90%",
    "features.multiPlatform.metric2.note":
      "So với thao tác thủ công trên từng nền tảng",
    "features.multiPlatform.metric3.name": "Chi phí trả lời tự động",
    "features.multiPlatform.metric3.value": "1 Credit/lượt",
    "features.multiPlatform.metric3.note": "Tự động trả lời bình luận",
    "features.ads.title": "Quản lý Quảng cáo & Phân tích Trí tuệ Nhân tạo (AI)",
    "features.ads.desc":
      "Hệ thống tối ưu hoá quảng cáo dựa trên dữ liệu giúp doanh nghiệp đo lường hiệu suất chiến dịch chính xác và tối đa hoá ROI theo thời gian thực bằng phân tích AI tiên tiến.",
    "features.ads.stats":
      "99.9% chính xác • Tự động tối ưu ngân sách • Máy tính ROAS",
    "features.ads.feature1.name": "Bảng điều khiển hiệu suất thời gian thực",
    "features.ads.feature1.desc":
      "Theo dõi reach, tương tác, số lượng người theo dõi, lượt xem video và hiệu suất kênh theo thời gian thực.",
    "features.ads.feature2.name": "Máy tính ROAS & So sánh KOL",
    "features.ads.feature2.desc":
      "So sánh chi phí và hiệu quả giữa đại sứ AI (AI spokesperson) và influencer truyền thống.",
    "features.ads.feature3.name": "Tối ưu ngân sách tự động",
    "features.ads.feature3.desc":
      "AI tự động điều chỉnh chi tiêu dựa trên chi phí/mỗi chuyển đổi (CPA) và mục tiêu hiệu suất.",
    "features.ads.feature4.name": "Gợi ý nhắm mục tiêu bằng AI",
    "features.ads.feature4.desc":
      "Đề xuất audience tuỳ chỉnh và lookalike dựa trên dữ liệu thực tế để tối ưu hoá hiệu suất.",
    "features.ads.feature5.name": "Kiểm thử A/B creative tự động",
    "features.ads.feature5.desc":
      "Tự động thử headline, hình ảnh và CTA để tìm biến thể quảng cáo hiệu suất cao nhất.",
    "features.ads.feature6.name": "Cảnh báo hiệu suất theo thời gian thực",
    "features.ads.feature6.desc":
      "Cảnh báo tức thì khi chiến dịch kém hiệu quả hoặc ngân sách thấp — giúp ngăn chặn chi tiêu lãng phí.",
    "features.ads.metric1.name": "Chỉ số theo dõi",
    "features.ads.metric1.value": "8+ chỉ số",
    "features.ads.metric1.note":
      "Impressions, CTR, Conversions, CPA, ROAS, LTV, NPS",
    "features.ads.metric2.name": "Máy tính ROAS",
    "features.ads.metric2.value": "Tích hợp sẵn",
    "features.ads.metric2.note":
      "So sánh trực tiếp chi phí và hiệu quả giữa đại sứ AI và phương án truyền thống",
    "features.ads.metric3.name": "Báo cáo tự động",
    "features.ads.metric3.value": "Tuần/Tháng",
    "features.ads.metric3.note": "Gửi báo cáo hiệu suất tự động qua Email",
    "features.content.title": "Trình tạo nội dung AI",
    "features.content.desc":
      "Một nền tảng AI toàn diện giúp doanh nghiệp tạo hình ảnh chất lượng cao, bài viết và nội dung mạng xã hội trong vài giây — duy trì tính nhất quán thương hiệu trong khi tối đa hoá độ tiếp cận và tương tác.",
    "features.content.stats": "50+ mẫu thiết kế • Ảnh 4K • Caption chuẩn SEO",
    "features.content.feature1.name": "Studio Ảnh AI (Đến 4K)",
    "features.content.feature1.desc":
      "Tạo hình ảnh bắt mắt cho thương mại điện tử, mạng xã hội, quảng cáo và in ấn.",
    "features.content.feature2.name": "Công nghệ Nhân vật Đồng nhất",
    "features.content.feature2.desc":
      "Giữ nguyên khuôn mặt và nhận diện nhân vật AI trên tất cả hình ảnh được tạo.",
    "features.content.feature3.name": "Tạo Ảnh Sản phẩm & Lifestyle",
    "features.content.feature3.desc":
      "Tạo ảnh sản phẩm tùy chỉnh và cảnh lifestyle — không cần studio hay người mẫu.",
    "features.content.feature4.name": "Viết Caption bằng AI + Phân tích Trend",
    "features.content.feature4.desc":
      "Tạo caption hấp dẫn từ brief đơn giản, tối ưu cho xu hướng hiện tại.",
    "features.content.feature5.name": "Gợi ý Hashtag Thông minh",
    "features.content.feature5.desc":
      "Gợi ý hashtag do AI đề xuất, tối ưu cho từng nền tảng để tăng lượt tiếp cận tự nhiên.",
    "features.content.feature6.name": "Nhiều Giọng Nội dung",
    "features.content.feature6.desc":
      "Sales, Chuyên nghiệp, Thân thiện, Gen-Z, Kỹ thuật, Kể chuyện — phù hợp với mọi đối tượng.",
    "features.content.metric1.name": "Thời gian tạo ảnh",
    "features.content.metric1.value": "10-30 giây",
    "features.content.metric1.note": "Chất lượng 4K chuyên nghiệp",
    "features.content.metric2.name": "Chi phí tạo nội dung",
    "features.content.metric2.value": "2 Credit/ảnh",
    "features.content.metric2.note": "Tiết kiệm 90% vs thuê designer",
    "features.content.metric3.name": "Đa dạng phong cách",
    "features.content.metric3.value": "50+ phong cách",
    "features.content.metric3.note": "Thực tế, 3D, Minh họa, Trừu tượng",
    "features.trends.title":
      "Khám phá Xu hướng & Lập kế hoạch Nội dung bằng AI",
    "features.trends.desc":
      "Hệ thống trí tuệ thị trường chạy bằng AI giúp xác định các xu hướng mới nổi, sinh ý tưởng nội dung và xây dựng chiến lược chiến dịch — giúp doanh nghiệp luôn dẫn trước đối thủ.",
    "features.trends.stats":
      "24/7 quét trends • 5+ nền tảng • Dự đoán viral sớm 48h",
    "features.trends.feature1.name": "Phát hiện Xu hướng theo Ngành & Nền tảng",
    "features.trends.feature1.desc":
      "Phân tích hành vi người dùng và dữ liệu thị trường để phát hiện các xu hướng mới trong lĩnh vực của bạn.",
    "features.trends.feature2.name": "Phân tích & Tối ưu Brief Nội dung",
    "features.trends.feature2.desc":
      "Chuẩn hóa và nâng cao brief nội dung trước khi bắt đầu sản xuất.",
    "features.trends.feature3.name":
      "Chấm điểm Chất lượng Brief Theo thời gian Thực (0-100)",
    "features.trends.feature3.desc":
      "Nhận phản hồi tức thì về chất lượng brief kèm gợi ý cải thiện có thể hành động.",
    "features.trends.feature4.name": "Động cơ Ý tưởng Nội dung bằng AI",
    "features.trends.feature4.desc":
      "Lọc và phân tích trends riêng theo ngành: F&B, Retail, Beauty, Tech, Education...",
    "features.trends.feature5.name": "Tạo Ý tưởng Nội dung",
    "features.trends.feature5.desc":
      "AI gợi ý 10+ ý tưởng content sáng tạo từ mỗi trend đang hot, phù hợp brand voice",
    "features.trends.feature6.name": "Theo dõi Xu hướng Đối thủ",
    "features.trends.feature6.desc":
      "Theo dõi trends mà đối thủ đang khai thác để không bỏ lỡ cơ hội thị trường",
    "features.trends.metric1.name": "Trọng số đánh giá",
    "features.trends.metric1.value":
      "Thương hiệu 30% • Chiến lược 40% • Đầu ra 30%",
    "features.trends.metric1.note": "Bonus +5 điểm nếu Pain points > 3",
    "features.trends.metric2.name": "Định dạng hỗ trợ",
    "features.trends.metric2.value": "7+ định dạng",
    "features.trends.metric2.note":
      "Bài viết, Kịch bản Video, Đồ họa thông tin, Trang đích, Câu dẫn, CTA.",
    "features.trends.metric3.name": "Tốc độ xử lý",
    "features.trends.metric3.value": "~30 giây",
    "features.trends.metric3.note": "Từ Kịch bản đến Chiến dịch hoàn chỉnh",
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
    "features.integration.stats": "20+ nền tảng",

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
    "pricing.popular": "Giá trị tốt nhất",
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
    "pricing.growth.name": "Tăng trưởng",
    "pricing.growth.desc": "Tăng tốc - Bán chạy nhất",
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
    "pricing.enterprise.save20": "Tiết kiệm 20%",
    "pricing.enterprise.startup.name": "Chuyên nghiệp",
    "pricing.enterprise.startup.description":
      "Dành cho các doanh nghiệp đang phát triển",
    "pricing.enterprise.startup.cta": "Dùng thử miễn phí",
    "pricing.enterprise.growth.name": "Doanh nghiệp",
    "pricing.enterprise.growth.description":
      "Dành cho các Agency và công ty đang mở rộng quy mô",
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
    "pricing.enterprise.comparison.priceMonthly": "Giá hàng tháng",
    "pricing.enterprise.comparison.priceAnnual": "Giá hàng năm (giảm 20%)",
    "pricing.enterprise.comparison.freeTrial": "Dùng thử miễn phí",
    "pricing.enterprise.comparison.socialAccounts": "Tài khoản mạng xã hội",
    "pricing.enterprise.comparison.platformsSupported": "Nền tảng hỗ trợ",
    "pricing.enterprise.comparison.multiLang": "Tạo nội dung đa ngôn ngữ",
    "pricing.enterprise.comparison.aiText": "Bài viết văn bản AI",
    "pricing.enterprise.comparison.aiImages": "Hình ảnh AI/tháng",
    "pricing.enterprise.comparison.aiVideos": "Video AI/tháng",
    "pricing.enterprise.comparison.aiBanner": "Banner & Thumbnail AI",
    "pricing.enterprise.comparison.customModel": "Mô hình AI tùy chỉnh",
    "pricing.enterprise.comparison.basicAnalytics": "Phân tích cơ bản",
    "pricing.enterprise.comparison.advancedAnalytics": "Phân tích nâng cao",
    "pricing.enterprise.comparison.roi": "Theo dõi ROI",
    "pricing.enterprise.comparison.abTesting": "A/B Testing",
    "pricing.enterprise.comparison.onboarding": "Onboarding 1-1",
    "pricing.enterprise.comparison.strategy": "Tư vấn chiến lược",
    "pricing.enterprise.comparison.accountManager": "Quản lý tài khoản",
    "pricing.enterprise.comparison.supportResponse": "Phản hồi hỗ trợ",
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
    "pricing.enterprise.startup.feature8": "20 kênh mạng xã hội",
    "pricing.enterprise.startup.feature9":
      "Nền tảng hỗ trợ: Facebook, Instagram, TikTok",
    "pricing.enterprise.startup.feature10": "Hỗ trợ đa ngôn ngữ: 30+ ngôn ngữ",
    "pricing.enterprise.startup.feature11":
      "Bài viết văn bản AI: Không giới hạn",
    "pricing.enterprise.startup.feature12": "Hình ảnh AI: 500/tháng",
    "pricing.enterprise.startup.feature13":
      "Video AI: 20 video/tháng (tối đa 3 phút mỗi video)",
    "pricing.enterprise.startup.feature14":
      "Huấn luyện giọng thương hiệu: 3 giọng thương hiệu",
    "pricing.enterprise.startup.feature15": "Content Calendar ",
    "pricing.enterprise.startup.feature16": "Thời điểm đăng tốt nhất (AI) ",
    "pricing.enterprise.startup.feature17": "Bulk upload: Lên đến 100 bài",
    "pricing.enterprise.startup.feature18": "Báo cáo hiệu suất: Hàng tuần",
    "pricing.enterprise.startup.feature19": "Theo dõi đối thủ: 3 đối thủ",
    "pricing.enterprise.startup.feature20":
      "Onboarding 1-1: Session chuyên dụng",
    "pricing.enterprise.startup.feature21":
      "Tư vấn chiến lược: Phiên hàng tháng",
    "pricing.enterprise.startup.feature22":
      "Hỗ trợ triển khai: Hỗ trợ thiết lập đầy đủ",
    "pricing.enterprise.startup.feature23": "Quản lý tài khoản chuyên dụng ",
    "pricing.enterprise.startup.feature24":
      "Phản hồi hỗ trợ ưu tiên trong 2 giờ",
    "pricing.enterprise.startup.feature25":
      "Kênh hỗ trợ: Email + Chat + Điện thoại",
    "pricing.enterprise.growth.feature1": "Tất cả tính năng Startup",
    "pricing.enterprise.growth.feature2": "Tối đa 25 Video AI/tháng",
    "pricing.enterprise.growth.feature3": "2,500 bài viết nội dung/tháng",
    "pricing.enterprise.growth.feature4": "Bonus 1,000 Credits (tổng 7,500)",
    "pricing.enterprise.growth.feature5": "Thiết kế banner & thumbnail AI",
    "pricing.enterprise.growth.feature6": "Đăng 20+ nền tảng",
    "pricing.enterprise.growth.feature7": "Phân tích nâng cao & ROI tracking",
    "pricing.enterprise.growth.feature8": "Hỗ trợ ưu tiên (phản hồi 2h)",
    "pricing.enterprise.growth.feature9": "A/B testing cho campaigns",
    "pricing.enterprise.growth.feature10":
      "Tài khoản mạng xã hội: Không giới hạn",
    "pricing.enterprise.growth.feature11":
      "Nền tảng hỗ trợ: Facebook, Instagram, TikTok, YouTube, LinkedIn, X, Threads",
    "pricing.enterprise.growth.feature12":
      "Đăng nội dung đa ngôn ngữ: 30+ ngôn ngữ",
    "pricing.enterprise.growth.feature13": "AI text posts: Không giới hạn",
    "pricing.enterprise.growth.feature14":
      "Hình ảnh AI: 5,000/tháng (10x Professional)",
    "pricing.enterprise.growth.feature15":
      "Video AI: 100 videos/tháng (5x Professional)",
    "pricing.enterprise.growth.feature16": "Thiết kế banner & thumbnail AI",
    "pricing.enterprise.growth.feature17":
      "Huấn luyện giọng thương hiệu: Voices không giới hạn",
    "pricing.enterprise.growth.feature19": "Lên lịch tự động: Không giới hạn",
    "pricing.enterprise.growth.feature20": "Content Calendar: Nâng cao",
    "pricing.enterprise.growth.feature21": "Best Time to Post AI",
    "pricing.enterprise.growth.feature22": "Bulk Upload: Không giới hạn",
    "pricing.enterprise.growth.feature23":
      "Analytics Dashboard: Phân tích nâng cao",
    "pricing.enterprise.growth.feature24": "ROI Tracking: Đo lường ROI đầy đủ",
    "pricing.enterprise.growth.feature25":
      "AI Performance Insights: Khuyến nghị do AI cung cấp",
    "pricing.enterprise.growth.feature26": "A/B Testing: Tối ưu hoá chiến dịch",
    "pricing.enterprise.growth.feature27":
      "Competitor Tracking: Đối thủ không giới hạn",
    "pricing.enterprise.growth.feature28": "Onboarding 1-1: Phiên chuyên dụng",
    "pricing.enterprise.growth.feature29":
      "Strategy Consultation: Phiên hàng tháng",
    "pricing.enterprise.growth.feature30":
      "Implementation Support: Hỗ trợ thiết lập đầy đủ",
    "pricing.enterprise.growth.feature31": "Quản lý tài khoản chuyên trách: Có",
    "pricing.enterprise.growth.feature32":
      "Phản hồi hỗ trợ: Ưu tiên trong vòng 2 giờ",
    "pricing.enterprise.growth.feature33":
      "Kênh hỗ trợ: Email + Chat + Điện thoại",
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
    "roi.title.brand": "Uniksmart",
    "roi.title.excels": "vượt trội?",
    "roi.title.full": "Tại sao {brand} vượt trội?",
    "roi.subtitle.full":
      "So sánh quy trình marketing truyền thống với giải pháp tự động hóa AI. Tiết kiệm chi phí, tăng hiệu suất gấp 100 lần.",
    "roi.watchDemo": "Xem Video Demo",
    "roi.header.criteria": "Tiêu chí",
    "roi.header.traditional": "Marketing Truyền thống",
    "roi.header.traditional.manual": "Quy trình thủ công",
    "roi.header.recommended": "ĐƯỢC ĐỀ XUẤT",
    "roi.header.Uniksmart": "Uniksmart AI",
    "roi.header.Uniksmart.auto": "Tự động hóa 100%",
    "roi.mobile.traditional": "Truyền thống",
    "roi.cta.ready": "Sẵn sàng chuyển đổi số và tăng trưởng với AI Marketing?",
    "roi.cta.start": "Bắt đầu ngay",
    "roi.cta.learn": "Tìm hiểu thêm",
    "roi.disclaimer":
      "* Số liệu dựa trên khảo sát 500+ doanh nghiệp Việt Nam sử dụng Uniksmart",
    "roi.title": "Tại sao bạn nên chọn chúng tôi?",
    "roi.subtitle": "So sánh hiệu quả giữa Nhân sự truyền thống và Hệ thống AI",
    "roi.traditional": "Truyền thống",
    "roi.traditional.title": "Tuyển Editor/Content",
    "roi.traditional.subtitle": "Phương pháp truyền thống",
    "roi.aiSystem": "Uniksmart",
    "roi.ai.title": "Hệ thống Uniksmart",
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
      "Tiết kiệm chi phí và tăng hiệu suất gấp 10 lần với Uniksmart",
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
    "roi.row1.traditional": "~20.000.000vnđ/tháng",
    "roi.row1.traditionalDesc": "(Nhân sự + Tools)",
    "roi.row1.ai": "~9.980.000vnđ/tháng",
    "roi.row1.aiDesc": "(All-in-one)",
    "roi.row1.savings": "Tiết kiệm ~50% ",
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
    "roi.row4.ai": "10+ kênh",
    "roi.row4.aiDesc": "(Cùng lúc)",
    "roi.row5.criteria": "Vận hành",
    "roi.row5.traditional": "8-10 giờ",
    "roi.row5.traditionalDesc": "/ngày",
    "roi.row5.ai": "24/7",
    "roi.row5.aiDesc": "(Tự động)",

    // Why Choose Section
    "whyChoose.title": "Tại sao nên chọn Uniksmart?",
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
    "whyChoose.mockup.title": "Uniksmart",
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
    "registration.form.contact.phonePlaceholder": "0123456789",

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
    "whyChoose.optura.brand": "Uniksmart",
    "whyChoose.optura.subtitle":
      "So sánh quy trình marketing truyền thống với giải pháp tự động hóa AI",
    "whyChoose.optura.criteria": "Tiêu chí so sánh",
    "whyChoose.optura.traditional": "Phương pháp truyền thống",
    "whyChoose.optura.traditional.manual": "Tiếp cận thủ công",
    "whyChoose.optura.bestChoice": "LỰA CHỌN TỐT NHẤT",
    "whyChoose.optura.Uniksmart": "Nền tảng Uniksmart",
    "whyChoose.optura.Uniksmart.auto": "Giải pháp tự động",
    "whyChoose.optura.guarantee.title": "Cam kết hiệu quả",
    "whyChoose.optura.guarantee.desc":
      "Các chỉ số dựa trên dữ liệu trung bình từ hơn 500+ doanh nghiệp đã chuyển đổi sang hệ sinh thái Uniksmart. Tiết kiệm 80% chi phí được tính toán trên tổng ngân sách nhân sự và sản xuất.",
    "whyChoose.optura.tryNow": "Trải nghiệm ngay",
    "whyChoose.optura.consult.title": "Cần tư vấn chuyên sâu?",
    "whyChoose.optura.consult.desc":
      "Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí để giúp bạn tìm ra giải pháp phù hợp nhất cho doanh nghiệp.",
    "whyChoose.optura.consultBtn": "Tư vấn giải pháp",
    "whyChoose.optura.watchDemo": "Watch Demo",
    "whyChoose.optura.mobilePlatform": "Nền tảng Uniksmart",
    // Why Choose Optura Comparison Rows
    "whyChoose.optura.row1.criteria": "Chi phí",
    "whyChoose.optura.row1.traditional": "~$555 / tháng",
    "whyChoose.optura.row1.Uniksmart": "~$255 / tháng",
    "whyChoose.optura.row1.savings": "Tiết kiệm ~54%",
    "whyChoose.optura.row2.criteria": "Sản lượng Video",
    "whyChoose.optura.row2.traditional": "10–15 video/tháng",
    "whyChoose.optura.row2.Uniksmart": "~25 video/tháng",
    "whyChoose.optura.row3.criteria": "Thời gian/Video",
    "whyChoose.optura.row3.traditional": "1–2 ngày/video",
    "whyChoose.optura.row3.Uniksmart": "~2 phút/video",
    "whyChoose.optura.row4.criteria": "Đa nhiệm",
    "whyChoose.optura.row4.traditional": "Công việc đơn lẻ",
    "whyChoose.optura.row4.Uniksmart": "Video + Hình ảnh + Bài viết + Chatbot",
    "whyChoose.optura.row5.criteria": "Vận hành",
    "whyChoose.optura.row5.traditional":
      "Cần ca làm việc, nghỉ phép, giám sát thủ công",
    "whyChoose.optura.row5.Uniksmart": "Tự động 24/7",

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
      "© 2024 Uniksmart. Tất cả quyền được bảo lưu. Tín hiệu tin cậy chuyên nghiệp cho thị trường Việt Nam và Quốc tế.",
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
    "faq.q1": "Uniksmart là gì?",
    "faq.a1":
      "Uniksmart là nền tảng hợp nhất nhiều công cụ AI hàng đầu như tạo Video, viết Content, thiết kế hình ảnh... vào một hệ thống duy nhất. Doanh nghiệp chỉ cần cấp một tài khoản cho mỗi nhân viên để sử dụng linh hoạt nhiều công cụ AI, thay vì mua và quản lý từng tài khoản riêng lẻ.",
    "faq.q2": "Uniksmart hỗ trợ những gì cho doanh nghiệp?",
    "faq.a2":
      "Tiết kiệm chi phí & thời gian: Mua một lần – sử dụng cho toàn đội ngũ. Quản lý tập trung: Cấp phát, thu hồi, điều chỉnh định mức AI cho nhân viên chỉ với vài thao tác. Báo cáo chi tiết: Lãnh đạo dễ dàng theo dõi và đánh giá mức độ ứng dụng AI trong doanh nghiệp.",
    "faq.q3": "Có được sử dụng Uniksmart miễn phí không?",
    "faq.a3":
      "Có. Uniksmart cung cấp gói dùng thử 7 ngày miễn phí với đầy đủ tính năng. Khách hàng có thể nâng cấp lên gói trả phí để có nhiều Credits hơn và truy cập toàn bộ công cụ AI nâng cao.",
    "faq.q4": "Uniksmart có đáp ứng sử dụng trên điện thoại không?",
    "faq.a4":
      "Có. Uniksmart hỗ trợ đầy đủ trên iOS và Android. Giao diện được tối ưu cho trải nghiệm di động, cho phép nhân sự sử dụng AI mọi lúc, mọi nơi.",
    "faq.q5": "Uniksmart có cập nhật các công cụ AI mới nhất không?",
    "faq.a5":
      "Chúng tôi luôn nỗ lực xem xét và tích hợp các công cụ AI tiên tiến nhất, với ưu tiên cân bằng giữa lợi ích của khách hàng và hiệu quả chi phí. Khi xuất hiện những công cụ mới, Uniksmart sẽ đánh giá và cân nhắc cập nhật nhằm giúp khách hàng tận dụng tốt nhất giá trị từ AI.",

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

    // CTA Modal
    "modal.cta.dontMiss": "ĐỪNG BỎ LỠ!",
    "modal.cta.benefit1": "Demo miễn phí Uniksmart",
    "modal.cta.benefit2": "Báo giá cá nhân hóa theo quy mô doanh nghiệp",
    "modal.cta.benefit3": "Tư vấn 1:1 bởi chuyên gia Marketing",
    "modal.cta.stats.businesses": "Doanh nghiệp đã tin chọn",
    "modal.cta.poweredBy": "Powered by Uniksmart",
    "modal.cta.badge": "Chỉ 10s – Nhận demo toàn bộ tính năng",
    "modal.cta.title": "BÁO GIÁ & DÙNG THỬ NGAY!",
    "modal.cta.submit": "Nhận báo giá & Demo miễn phí",
    "modal.cta.submitting": "Đang gửi...",
    "modal.cta.terms": "Bằng việc đăng ký, bạn đồng ý với",
    "modal.cta.termsLink": "Điều khoản sử dụng",
    "modal.cta.and": "và",
    "modal.cta.privacyLink": "Chính sách bảo mật",
    "modal.cta.close": "Đóng",
    "modal.cta.closeModal": "Đóng modal",
    "modal.cta.success.title": "Đăng ký thành công!",
    "modal.cta.success.message":
      "Cảm ơn bạn đã quan tâm đến Uniksmart. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
    "modal.cta.submit.sending": "Đang gửi đăng ký",
    "modal.cta.submit.get": "Nhận báo giá & Demo miễn phí",

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
    "footer.copyright": "© {year} Uniksmart. Tất cả quyền được bảo lưu.",
    "footer.terms": "Điều khoản sử dụng",
    "footer.privacy": "Chính sách bảo mật",

    // Terms of Service Page
    "terms.backToHome": "Quay lại trang chủ",
    "terms.title": "Điều Khoản Sử Dụng Dịch Vụ",
    "terms.lastUpdated": "Cập nhật lần cuối: 24 tháng 11, 2025",
    "terms.viewPrivacy": "Xem Chính sách Bảo mật",
    "terms.registerTrial": "Đăng ký dùng thử",

    // Privacy Policy Page
    "privacy.backToHome": "Quay lại trang chủ",
    "privacy.title": "Chính Sách Bảo Mật",
    "privacy.lastUpdated": "Cập nhật lần cuối: 24 tháng 11, 2025",
    "privacy.viewTerms": "Xem Điều khoản Sử dụng",
    "privacy.registerTrial": "Đăng ký dùng thử",

    // About Hero Section
    "about.hero.breadcrumb.home": "Trang chủ",
    "about.hero.breadcrumb.about": "Về chúng tôi",
    "about.hero.badge": "Về Chúng Tôi",
    "about.hero.title": "Về chúng tôi",
    "about.hero.title.prefix": "Nền tảng",
    "about.hero.title.brand": "Uniksmart",
    "about.hero.title.suffix": "Tiên Phong",
    "about.hero.subtitle": "Uniksmart",
    "about.hero.description":
      "Đối tác chuyển đổi số Marketing đa kênh hàng đầu, tự động hóa quy trình từ ý tưởng đến xuất bản nội dung.",
    "about.hero.desc":
      "Chúng tôi định nghĩa lại cách doanh nghiệp vận hành với triết lý AI-First, thúc đẩy chuyển đổi số toàn diện và tối ưu hóa hiệu suất Marketing tự động.",
    "about.hero.cta.contact": "Liên hệ ngay",
    "about.hero.cta.learn": "Tìm hiểu thêm",
    "about.hero.image.alt": "Đội ngũ chuyên nghiệp Uniksmart",
    "about.hero.stat.uptime": "Thời gian hoạt động",
    "about.hero.stat.operational": "Hoạt động tốt",
    "about.hero.stat.businesses": "Doanh nghiệp",
    "about.cta.trial": "Dùng thử miễn phí",
    "about.cta.contact": "Liên hệ tư vấn",

    // About Company Section
    "about.company.title": "Uniksmart",
    "about.company.subtitle":
      "Đối tác chuyển đổi số đa kênh cho doanh nghiệp Việt",
    "about.company.desc1":
      "Uniksmart là đơn vị tiên phong trong lĩnh vực chuyển đổi số Marketing tại Việt Nam. Chúng tôi chuyên cung cấp các giải pháp AI Marketing toàn diện, giúp doanh nghiệp tối ưu hóa quy trình marketing và gia tăng hiệu quả kinh doanh.",
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
    "about.product.title": "Uniksmart",
    "about.product.subtitle":
      "Nền tảng marketing AI toàn diện, tự động hóa mọi khía cạnh từ sáng tạo nội dung đến phân phối đa kênh",
    "about.product.why.title": "Tại sao chọn Uniksmart?",
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
    "about.product.tech.title": "Công nghệ đằng sau Uniksmart",
    "about.product.tech.subtitle":
      "Tích hợp 6 mô hình AI hàng đầu thế giới để cung cấp kết quả tối ưu nhất",
    "about.product.stat.businesses": "Doanh nghiệp",
    "about.product.capabilities.title": "Khả năng của Uniksmart",
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
      "Chúng tôi rất mong được tìm hiểu thêm về doanh nghiệp của bạn và cách Uniksmart có thể giúp bạn đạt được mục tiêu trong thế giới số.",

    // About Philosophy Section
    "about.philosophy.title": "Triết lý AI-First của chúng tôi",
    "about.philosophy.description":
      "Uniksmart không chỉ là một công cụ, mà là bộ não số hóa giúp doanh nghiệp nâng cao năng lực cạnh tranh và hiệu quả vận hành tối đa thông qua tự động hóa thông minh.",
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
      "Kết nối liền mạch Uniksmart với dữ liệu và công cụ hiện có",
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
      "Tận dụng khả năng sản phẩm Uniksmart để đạt hiệu quả marketing xuất sắc",
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
    "modal.cta.trust": "Doanh nghiệp đã tin chọn",
    "modal.cta.powered": "Powered by Uniksmart",
    "modal.cta.formTitle": "BÁO GIÁ & DÙNG THỬ NGAY!",
    "modal.cta.formBadge": "Chỉ 10s – Nhận demo toàn bộ tính năng",

    // Registration Form
    "registration.form.company.name": "Tên công ty",
    "registration.form.company.namePlaceholder": "Nhập tên công ty",
    "registration.form.company.taxCode": "Mã số thuế",
    "registration.form.company.taxCodePlaceholder": "Nhập mã số thuế",
    "registration.form.company.type": "Loại hình kinh doanh",
    "registration.form.company.typePlaceholder": "Chọn loại hình doanh nghiệp",
    "registration.form.company.typeEnterprise": "Doanh nghiệp",
    "registration.form.company.typeHousehold": "Hộ kinh doanh",
    "registration.form.company.typeOther": "Khác",
    "registration.form.contact.firstName": "Họ và đệm",
    "registration.form.contact.firstNamePlaceholder": "Nguyễn Văn",
    "registration.form.contact.lastName": "Tên",
    "registration.form.contact.lastNamePlaceholder": "An",
    "registration.form.contact.email": "Email",
    "registration.form.contact.emailPlaceholder": "vd: nguyenvanan@company.com",
    "registration.form.contact.phone": "Số điện thoại",
    // Comparison table values (professional / business)
    "pricing.enterprise.comparison.value.socialAccounts.professional":
      "3 nền tảng",
    "pricing.enterprise.comparison.value.socialAccounts.business":
      "<b>7+ nền tảng</b>",
    "pricing.enterprise.comparison.value.platformsSupported.professional":
      "3 nền tảng",
    "pricing.enterprise.comparison.value.platformsSupported.business":
      "<b>7+ nền tảng</b>",
    "pricing.enterprise.comparison.value.multiLang.professional":
      "30+ ngôn ngữ",
    "pricing.enterprise.comparison.value.multiLang.business": "30+ ngôn ngữ",
    "pricing.enterprise.comparison.value.aiText.professional": "Không giới hạn",
    "pricing.enterprise.comparison.value.aiText.business": "Không giới hạn",
    "pricing.enterprise.comparison.value.aiImages.professional": "500/tháng",
    "pricing.enterprise.comparison.value.aiImages.business":
      "<b>5.000/tháng</b>",
    "pricing.enterprise.comparison.value.aiVideos.professional":
      "20 video/tháng",
    "pricing.enterprise.comparison.value.aiVideos.business":
      "<b>100 video/tháng</b>",
    "pricing.enterprise.comparison.value.onboarding.professional":
      "Chuyên dụng",
    "pricing.enterprise.comparison.value.onboarding.business": "Chuyên dụng",
    "pricing.enterprise.comparison.value.strategy.business":
      "<b>Chuyên dụng</b>",
    "pricing.enterprise.comparison.value.supportResponse.business":
      "<b>Ưu tiên: phản hồi trong 2 giờ</b>",
    "registration.form.contact.jobPosition": "Vị trí công việc",
    "registration.form.contact.jobPositionPlaceholder": "Chọn vị trí công việc",
    "registration.form.jobPosition.ceo": "CEO / Giám đốc",
    "registration.form.jobPosition.marketingDirector": "Giám đốc Marketing",
    "registration.form.jobPosition.marketingManager": "Quản lý Marketing",
    "registration.form.jobPosition.contentManager": "Quản lý Nội dung",
    "registration.form.jobPosition.socialMediaManager": "Quản lý Mạng xã hội",
    "registration.form.jobPosition.designer": "Nhà thiết kế",
    "registration.form.jobPosition.developer": "Nhà phát triển",
    "registration.form.jobPosition.other": "Khác",
    "registration.form.required": "Bắt buộc",

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
    "heroLight.stats.roi": "+120%",
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
    "heroLight.tech.title": "Công nghệ đằng sau Uniksmart",
    "heroLight.tech.subtitle": "Tích hợp với các mô hình AI hàng đầu thế giới",

    // Feature Page - Common
    "featurePage.backToFeatures": "Quay lại tính năng",
    "featurePage.tryFree": "Dùng thử miễn phí",
    "featurePage.viewPricing": "Xem bảng giá",
    "featurePage.keyFeatures": "Tính năng chính",
    "featurePage.keyFeaturesDesc":
      "Khám phá các tính năng mạnh mẽ giúp tự động hóa marketing của bạn",
    "featurePage.seeInAction": "Xem hoạt động thực tế",
    "featurePage.ctaTitle": "Sẵn sàng bắt đầu?",
    "featurePage.ctaDesc":
      "Đăng ký dùng thử miễn phí 14 ngày và trải nghiệm sức mạnh của AI Marketing",
    "featurePage.startTrial": "Bắt đầu dùng thử",
    "featurePage.exploreMore": "Khám phá thêm tính năng",

    // Feature Page - Chatbot
    "featurePage.chatbot.automated": "TỰ ĐỘNG HÓA",
    "featurePage.chatbot.hero.title1": "Không Bỏ Lỡ Bất Kỳ",
    "featurePage.chatbot.hero.title2": "Cuộc Trò Chuyện Nào",
    "featurePage.chatbot.hero.description":
      "Trao quyền cho doanh nghiệp với trợ lý hỗ trợ không bao giờ ngủ. Biến câu hỏi thành đơn hàng ngay lập tức với độ chính xác giống con người.",
    "featurePage.chatbot.metric.response": "Phản hồi",
    "featurePage.chatbot.metric.accuracy": "Độ chính xác",
    "featurePage.chatbot.metric.costReduction": "Giảm chi phí",
    "featurePage.chatbot.cta.deploy": "Triển khai ngay",
    "featurePage.chatbot.cta.watchDemo": "Xem Demo",
    "featurePage.chatbot.demo.agentName": "UniksMarK AI Agent",
    "featurePage.chatbot.demo.status": "Trực tuyến & Sẵn sàng",
    "featurePage.chatbot.demo.message1":
      'Tôi đang tìm gói marketing cao cấp cho startup của mình. Bạn có slot nào cho tuần sau không?"',
    "featurePage.chatbot.demo.label1": "Câu hỏi sản phẩm",
    "featurePage.chatbot.demo.message2":
      "Chắc chắn rồi! Chúng tôi có hai slot cho gói Elite Growth. Bạn muốn xem bảng giá hay đặt lịch tư vấn?",
    "featurePage.chatbot.demo.label2": "Phản hồi AI",
    "featurePage.chatbot.demo.message3":
      "Hãy đặt lịch tư vấn cho thứ Hai lúc 10 giờ sáng.",
    "featurePage.chatbot.demo.message4":
      "Thành công! Tôi đã đặt lịch tư vấn cho thứ Hai, 21/10 lúc 10:00 sáng. Lời mời lịch đã được gửi tới email của bạn.",
    "featurePage.chatbot.demo.label3": "ĐÃ XÁC NHẬN ĐẶT LỊCH",
    "featurePage.chatbot.problems.heading":
      "Thách Thức Hỗ Trợ Khách Hàng Của Bạn, Được Giải Quyết",
    "featurePage.chatbot.problems.subheading":
      "Hỗ trợ truyền thống chậm và tốn kém. Chúng tôi xây dựng giải pháp cho quy mô hiện đại.",
    "featurePage.chatbot.problems.problem1.title": "Vấn đề",
    "featurePage.chatbot.problems.problem1.desc":
      "Thời gian chờ vượt quá 4 giờ trong giờ cao điểm, dẫn đến tỷ lệ thoát 40% tại trang thanh toán.",
    "featurePage.chatbot.problems.solution1.title": "Giải pháp",
    "featurePage.chatbot.problems.solution1.desc":
      "Phân loại và giải quyết ngay lập tức bằng AI. 0 thời gian chờ, 100% mọi lúc, bất kể số lượng người dùng đồng thời.",
    "featurePage.chatbot.problems.problem2.title": "Chi Phí Cao",
    "featurePage.chatbot.problems.problem2.desc":
      "Mở rộng đội ngũ hỗ trợ con người đòi hỏi ngân sách đào tạo khổng lồ và quản lý ca làm việc tốn kém.",
    "featurePage.chatbot.problems.solution2.title": "Hiệu Quả Chi Phí",
    "featurePage.chatbot.problems.solution2.desc":
      "Giảm chi phí vận hành 80% trong khi tăng năng lực hỗ trợ gấp 10 lần chỉ trong một đêm.",
    "featurePage.chatbot.capabilities.badge": "Khả năng cốt lõi",
    "featurePage.chatbot.capabilities.heading": "Mọi Thứ Bạn Cần",
    "featurePage.chatbot.capabilities.bentoDesc":
      "Triển khai các module AI cấp doanh nghiệp để chuyển đổi quy trình làm việc và tăng hiệu suất lên đến 90%.",
    "featurePage.chatbot.capabilities.viewAll": "Xem tất cả tính năng",
    "featurePage.chatbot.capabilities.learnMore": "Tìm hiểu thêm",
    "featurePage.chatbot.capabilities.bento.badge1": "Phản hồi < 2 giây",
    "featurePage.chatbot.capabilities.bento.badge2": "Thời gian thực",
    "featurePage.chatbot.capabilities.bento.badge3": "95+ ngôn ngữ",
    "featurePage.chatbot.capabilities.bento.badge4": "Không cần thao tác",
    "featurePage.chatbot.capabilities.bento.badge5": "Bảo mật cấp ngân hàng",
    "featurePage.chatbot.capabilities.bento.badge6": "Độ chính xác 99.9%",
    "featurePage.chatbot.capabilities.capability1.title": "Tư Vấn Cá Nhân Hóa",
    "featurePage.chatbot.capabilities.capability1.desc":
      "AI nhớ lịch sử khách hàng để đưa ra lời khuyên phù hợp và đề xuất sản phẩm.",
    "featurePage.chatbot.capabilities.capability2.title": "Báo Giá Tức Thì",
    "featurePage.chatbot.capabilities.capability2.desc":
      "Phân tích yêu cầu ngay lập tức và cung cấp ước tính giá chính xác theo thời gian thực.",
    "featurePage.chatbot.capabilities.capability3.title": "Dịch Toàn Cầu",
    "featurePage.chatbot.capabilities.capability3.desc":
      "Hỗ trợ khách hàng bằng 95+ ngôn ngữ với độ trôi chảy cấp độ người bản xứ và nhận thức văn hóa.",
    "featurePage.chatbot.capabilities.capability4.title": "Đặt Lịch Thông Minh",
    "featurePage.chatbot.capabilities.capability4.desc":
      "Tích hợp trực tiếp với lịch của bạn để quản lý cuộc hẹn mà không cần can thiệp của con người.",
    "featurePage.chatbot.capabilities.capability5.title":
      "Bảo Mật Doanh Nghiệp",
    "featurePage.chatbot.capabilities.capability5.desc":
      "Mã hóa đầu cuối và tuân thủ GDPR cho mọi tương tác khách hàng.",
    "featurePage.chatbot.capabilities.capability6.title": "Phân Tích Cảm Xúc",
    "featurePage.chatbot.capabilities.capability6.desc":
      "Phát hiện cảm xúc khách hàng theo thời gian thực và chuyển các vấn đề phức tạp cho con người ngay lập tức.",
    "featurePage.chatbot.feature5.name": "Hỗ trợ đa ngôn ngữ",
    "featurePage.chatbot.feature5.desc":
      "Tự động phát hiện và trả lời bằng ngôn ngữ của khách hàng",
    "featurePage.chatbot.feature6.name": "Tích hợp CRM",
    "featurePage.chatbot.feature6.desc":
      "Đồng bộ dữ liệu khách hàng với hệ thống CRM của bạn",
    "featurePage.chatbot.metric1.label": "Hoạt động liên tục",
    "featurePage.chatbot.metric2.label": "Thời gian phản hồi",
    "featurePage.chatbot.metric3.label": "Tỷ lệ chuyển đổi",
    "featurePage.chatbot.metric4.label": "Giảm thời gian chờ",
    "featurePage.chatbot.benefitsTitle": "Tại sao chọn AI Chatbot?",
    "featurePage.chatbot.benefitsDesc":
      "Chatbot AI thông minh giúp doanh nghiệp chăm sóc khách hàng 24/7 mà không cần nhân sự.",
    "featurePage.chatbot.benefit1":
      "Phản hồi khách hàng ngay lập tức, không cần chờ đợi",
    "featurePage.chatbot.benefit2": "Giảm chi phí nhân sự chăm sóc khách hàng",
    "featurePage.chatbot.benefit3": "Thu thập và phân loại lead chất lượng cao",
    "featurePage.chatbot.benefit4": "Tích hợp dễ dàng với website và fanpage",

    // Feature Page - Chatbot Demo Live
    "featurePage.chatbot.demo.live.heading": "Xem AI Chatbot Hoạt Động",
    "featurePage.chatbot.demo.live.subheading":
      "Trải nghiệm cách trợ lý AI giúp khách hàng tư vấn dịch vụ, đặt lịch hẹn và hoàn tất thanh toán liền mạch trong ngành làm đẹp.",
    "featurePage.chatbot.demo.live.terminal": "DXAI Nails — Trợ Lý Đặt Lịch AI",
    "featurePage.chatbot.demo.live.message1":
      "Xin chào! Tôi là trợ lý DXAI Nails. Tôi có thể giúp bạn chọn dịch vụ, xem mẫu nail và đặt lịch hẹn. Bạn cần gì hôm nay?",
    "featurePage.chatbot.demo.live.message2":
      "Chào! Tôi muốn làm nail cho tiệc sinh nhật tuần sau. Muốn kiểu gì đó sang trọng nhưng không quá lòe loẹt. Ngân sách khoảng $60-80.",
    "featurePage.chatbot.demo.live.message3":
      "Tuyệt vời! Đây là các dịch vụ phù hợp nhất cho tiệc sinh nhật trong tầm giá của bạn:",
    "featurePage.chatbot.demo.live.message3.cta":
      "Bạn thích dịch vụ nào, hay tôi gợi ý thêm?",
    "featurePage.chatbot.demo.live.message4":
      "Gel Manicure trông tuyệt! Bạn cho tôi biết thêm chi tiết được không? Thời gian làm bao lâu vậy?",
    "featurePage.chatbot.demo.live.message5":
      "Lựa chọn rất phổ biến! Gel Manicure là dịch vụ được yêu thích nhất tại tiệm. Đây là thông tin chi tiết:",
    "featurePage.chatbot.demo.live.message5.details":
      "Chi tiết Gel Manicure:\n• Thời gian: 45-60 phút\n• Bền: 2-3 tuần không tróc\n• Bao gồm: Dũa, cắt da, sơn gel 2 lớp, top coat\n• Màu: 200+ màu sắc có sẵn\n• Thêm nail art: +$10-15",
    "featurePage.chatbot.demo.live.message5.note":
      "Với tiệc sinh nhật, mình gợi ý thêm nail art đơn giản như kim tuyến hoặc đá nhỏ để thêm phần lấp lánh nhé!",
    "featurePage.chatbot.demo.live.message6":
      "Hay quá! Mình muốn Gel Manicure với nail art kim tuyến. Cho mình đặt lịch luôn được không?",
    "featurePage.chatbot.demo.live.message7":
      "Tuyệt! Mình đã thêm dịch vụ vào lịch hẹn. Bạn có muốn thêm dịch vụ nào không?",
    "featurePage.chatbot.demo.live.message7.cart":
      "Dịch vụ đã chọn:\n• Gel Manicure — $65.00\n• Nail Art Kim Tuyến — $12.00\n• Tổng: $77.00",
    "featurePage.chatbot.demo.live.message7.cta":
      "Bạn muốn thêm dịch vụ hay đặt lịch ngay?",
    "featurePage.chatbot.demo.live.message8":
      "Thêm Paraffin Hand Treatment nữa nhé. Rồi đặt lịch luôn!",
    "featurePage.chatbot.demo.live.message9":
      "Đã thêm Paraffin Hand Treatment! Đây là lịch hẹn trống trong tuần tới:",
    "featurePage.chatbot.demo.live.message9.summary":
      "Tóm tắt đặt lịch:\n• Gel Manicure — $65.00\n• Nail Art Kim Tuyến — $12.00\n• Paraffin Hand Treatment — $25.00\n• Tổng thời gian: ~90 phút\n• Tổng cộng: $102.00",
    "featurePage.chatbot.demo.live.message9.cta":
      "Chọn thời gian phù hợp với bạn nhé!",
    "featurePage.chatbot.demo.live.message10":
      "Mình chọn Thứ 7, 10:00 sáng nhé! Tên mình là Linh Nguyễn, số điện thoại 0901-234-567.",
    "featurePage.chatbot.demo.live.message11":
      "Cảm ơn Linh! Mình đang xác nhận lịch hẹn...",
    "featurePage.chatbot.demo.live.message11.processing":
      "Đang kiểm tra lịch...",
    "featurePage.chatbot.demo.live.message11.secure": "Xác nhận với thợ nail",
    "featurePage.chatbot.demo.live.message11.success": "Đặt lịch thành công!",
    "featurePage.chatbot.demo.live.message11.order":
      "Xác nhận lịch hẹn #DXAI-N-2025-0341",
    "featurePage.chatbot.demo.live.message11.shipping":
      "Thông tin lịch hẹn:\nLinh Nguyễn\nThứ 7, 25/01/2025 — 10:00 AM\nThợ nail: Jessica T.",
    "featurePage.chatbot.demo.live.message11.delivery":
      "Thời gian dự kiến: 90 phút (10:00 - 11:30 AM)",
    "featurePage.chatbot.demo.live.message11.email":
      "Xác nhận đã gửi qua SMS đến 0901-234-567",
    "featurePage.chatbot.demo.live.message11.tracking":
      "Nhắc nhở tự động trước 24 giờ",
    "featurePage.chatbot.demo.live.message11.cta":
      "Mình có thể giúp gì thêm cho Linh?",
    "featurePage.chatbot.demo.live.message12":
      "Cảm ơn nhiều! Quá tiện lợi luôn. Mình có thể thanh toán trước không?",
    "featurePage.chatbot.demo.live.message13": "Dĩ nhiên rồi Linh!",
    "featurePage.chatbot.demo.live.message13.email":
      "Mình đã gửi link thanh toán qua SMS. Bạn cũng có thể thanh toán tại tiệm.",
    "featurePage.chatbot.demo.live.message13.details":
      "Chi tiết lịch hẹn:\n• Mã: #DXAI-N-2025-0341\n• Dịch vụ: Gel Manicure + Nail Art + Paraffin\n• Tổng: $102.00\n• Thời gian: Thứ 7, 10:00 AM",
    "featurePage.chatbot.demo.live.message13.ref":
      "Đến sớm 5 phút để thợ nail chuẩn bị cho bạn nhé. Chúc Linh có bộ nail thật xinh!",
    "featurePage.chatbot.demo.live.message13.closing":
      "Chúc tiệc sinh nhật thật vui!",
    "featurePage.chatbot.demo.live.placeholder": "Nhập tin nhắn của bạn...",
    "featurePage.chatbot.demo.live.send": "Gửi",
    "featurePage.chatbot.demo.live.product1.name": "Classic Manicure",
    "featurePage.chatbot.demo.live.product1.price": "$35.00",
    "featurePage.chatbot.demo.live.product2.name": "Gel Manicure",
    "featurePage.chatbot.demo.live.product2.price": "$65.00",
    "featurePage.chatbot.demo.live.product3.name": "Acrylic Full Set",
    "featurePage.chatbot.demo.live.product3.price": "$75.00",
    "featurePage.chatbot.demo.live.buy": "Đặt lịch",
    "featurePage.chatbot.demo.live.addToCart": "Thêm dịch vụ",
    "featurePage.chatbot.demo.live.addon1.name": "Paraffin Hand Treatment",
    "featurePage.chatbot.demo.live.addon1.price": "$25.00",
    "featurePage.chatbot.demo.live.addon2.name": "Nail Art Cơ Bản",
    "featurePage.chatbot.demo.live.addon2.price": "$15.00",

    // Feature Page - Chatbot Steps
    "featurePage.chatbot.steps.heading": "Bắt Đầu Với",
    "featurePage.chatbot.steps.headingHighlight": "3 Bước Đơn Giản",
    "featurePage.chatbot.steps.subheading":
      "Nền tảng của chúng tôi được thiết kế để triển khai nhanh chóng mà không làm giảm độ sâu.",
    "featurePage.chatbot.steps.badge": "Thời gian thiết lập tổng: Dưới 1 giờ",
    "featurePage.chatbot.steps.step1.title": "Huấn Luyện",
    "featurePage.chatbot.steps.step1.desc":
      "Kết nối trung tâm trợ giúp, tài liệu hoặc URL trang web của bạn. AI của chúng tôi lập chỉ mục dữ liệu của bạn trong vài phút, xây dựng cơ sở kiến thức toàn diện tự động.",
    "featurePage.chatbot.steps.step1.link": "Tìm hiểu về thu thập dữ liệu",
    "featurePage.chatbot.steps.step2.title": "Tùy Chỉnh",
    "featurePage.chatbot.steps.step2.desc":
      "Xác định giọng điệu thương hiệu, cá tính và quy tắc xử lý. Thiết kế giao diện để phù hợp hoàn hảo với thương hiệu của bạn bằng trình chỉnh sửa trực quan với xem trước theo thời gian thực.",
    "featurePage.chatbot.steps.step2.link": "Khám phá tùy chỉnh",
    "featurePage.chatbot.steps.step3.title": "Triển Khai",
    "featurePage.chatbot.steps.step3.desc":
      "Thêm một dòng mã vào trang web của bạn hoặc kết nối qua API để bắt đầu giải quyết các yêu cầu ngay lập tức. Xem khối lượng hỗ trợ giảm ngay lập tức.",
    "featurePage.chatbot.steps.step3.link": "Xem hướng dẫn tích hợp",

    // Feature Page - Chatbot Industries
    "featurePage.chatbot.industries.heading": "Xây Dựng Cho Mọi Ngành",
    "featurePage.chatbot.industries.ecommerce.name": "Thương Mại Điện Tử",
    "featurePage.chatbot.industries.realestate.name": "Bất Động Sản",
    "featurePage.chatbot.industries.education.name": "Giáo Dục",
    "featurePage.chatbot.industries.healthcare.name": "Chăm Sóc Sức Khỏe",
    "featurePage.chatbot.industries.commonQuery": "Câu hỏi phổ biến",
    "featurePage.chatbot.industries.aiResponse": "Phản hồi AI",
    "featurePage.chatbot.industries.readyBoost":
      "Sẵn sàng nâng cao chỉ số của bạn?",
    "featurePage.chatbot.industries.description":
      "Các mô hình chuyên biệt của chúng tôi được đào tạo trước trên các tập dữ liệu cụ thể theo ngành để đảm bảo độ chính xác cao ngay từ ngày đầu tiên.",
    "featurePage.chatbot.industries.cta.start": "Bắt Đầu Mở Rộng",
    "featurePage.chatbot.industries.cta.view": "Xem Tất Cả Ngành",
    "featurePage.chatbot.industries.ecommerce.query":
      "Gói hàng của tôi ở đâu và tôi có thể thay đổi kích cỡ không?",
    "featurePage.chatbot.industries.ecommerce.response":
      "Kết nối với API Shopify, cung cấp theo dõi thời gian thực và kiểm tra tồn kho cho việc hoán đổi kích cỡ tự động.",
    "featurePage.chatbot.industries.ecommerce.stat1": "Giảm yêu cầu",
    "featurePage.chatbot.industries.ecommerce.stat2": "Tăng ROI",
    "featurePage.chatbot.industries.realestate.query":
      "Tôi cần lên lịch xem nhà 3 phòng ngủ trong khu vực Quận 2.",
    "featurePage.chatbot.industries.realestate.response":
      "Phân tích sở thích và đề xuất 5 danh sách phù hợp nhất, tự động đặt lịch xem với đại lý.",
    "featurePage.chatbot.industries.realestate.stat1": "Tỷ lệ phản hồi lead",
    "featurePage.chatbot.industries.realestate.stat2": "Tăng tốc độ đóng",
    "featurePage.chatbot.industries.education.query":
      "Học phí cho chương trình MBA là bao nhiêu và khi nào nộp đơn?",
    "featurePage.chatbot.industries.education.response":
      "Cung cấp chi tiết chi phí, lịch trình và hướng dẫn từng bước về ứng dụng với liên kết đến tài chính.",
    "featurePage.chatbot.industries.education.stat1":
      "Thời gian phản hồi nhanh hơn",
    "featurePage.chatbot.industries.education.stat2": "Tăng đăng ký",
    "featurePage.chatbot.industries.healthcare.query":
      "Tôi cần đặt lịch khám tổng quát với bác sĩ tim mạch.",
    "featurePage.chatbot.industries.healthcare.response":
      "Kiểm tra tính khả dụng của bác sĩ, xác minh bảo hiểm và đặt lịch hẹn tuân thủ HIPAA.",
    "featurePage.chatbot.industries.healthcare.stat1": "Độ chính xác đặt lịch",
    "featurePage.chatbot.industries.healthcare.stat2": "Giảm không đến",

    // Feature Page - Content
    "featurePage.content.hero.title1": "Tạo Nội Dung Đỉnh Cao Chỉ Trong",
    "featurePage.content.hero.title2": "Vài Giây",
    "featurePage.content.hero.title3": "Không Phải Vài Giờ",
    "featurePage.content.hero.description":
      "Giải phóng sức mạnh AI chuyên biệt cho hình ảnh marketing cao cấp, chụp ảnh sản phẩm và nội dung mạng xã hội thống nhất thương hiệu.",
    "featurePage.content.metric.perImage": "Trên mỗi ảnh",
    "featurePage.content.metric.resolution": "Độ phân giải",
    "featurePage.content.metric.commercial": "Bản quyền thương mại",
    "featurePage.content.cta.generate": "Dùng thử Demo",
    "featurePage.content.cta.viewGallery": "Xem Bộ Sưu Tập",
    "featurePage.content.problems.title": "Nội Dung Đang Gặp Khó Khăn?",
    "featurePage.content.problems.subtitle":
      "Ngừng lãng phí nguồn lực vào quy trình lỗi thời.",
    "featurePage.content.problems.oldWay.title": "Cách Cũ",
    "featurePage.content.problems.oldWay.problem1.title": "Chụp ảnh Thủ công",
    "featurePage.content.problems.oldWay.problem1.desc":
      "Nhiều ngày lên kế hoạch, di chuyển và thuê thiết bị đắt đỏ.",
    "featurePage.content.problems.oldWay.problem2.title":
      "Vòng Chỉnh Sửa Bất Tận",
    "featurePage.content.problems.oldWay.problem2.desc":
      "Chờ 48h cho các chỉnh sửa cơ bản và sửa ánh sáng.",
    "featurePage.content.problems.oldWay.problem3.title":
      "Hình Stock Nhàm Chán",
    "featurePage.content.problems.oldWay.problem3.desc":
      "Hình ảnh chung chung mà mọi người đã dùng.",
    "featurePage.content.problems.UniksmartWay.title": "Cách của Uniksmart",
    "featurePage.content.problems.UniksmartWay.solution1.title":
      "Chân Thực Tức Thì",
    "featurePage.content.problems.UniksmartWay.solution1.desc":
      "Tạo cảnh chất lượng studio từ văn bản đơn giản.",
    "featurePage.content.problems.UniksmartWay.solution2.title":
      "Lặp Lại Siêu Nhanh",
    "featurePage.content.problems.UniksmartWay.solution2.desc":
      "Thay đổi màu sắc, ánh sáng hoặc đạo cụ trong dưới 10 giây.",
    "featurePage.content.problems.UniksmartWay.solution3.title":
      "Độc Đáo Thật Sự",
    "featurePage.content.problems.UniksmartWay.solution3.desc":
      "Tài sản độc nhất phù hợp hoàn hảo với DNA thương hiệu của bạn.",
    "featurePage.content.capabilities.badge": "Hệ Sinh Thái Studio",
    "featurePage.content.capabilities.title": "Studio Nội Dung AI Hoàn Chỉnh",
    "featurePage.content.capabilities.aiStudio.title": "AI Image Studio",
    "featurePage.content.capabilities.aiStudio.description":
      "Công cụ chuyển văn bản thành hình ảnh tiên tiến nhất thế giới được điều chỉnh đặc biệt cho marketing, thời trang và thiết kế sản phẩm.",
    "featurePage.content.capabilities.aiStudio.cta": "Vào Studio",
    "featurePage.content.capabilities.aiStudio.badge": "Công cụ PRO v4.2",
    "featurePage.content.capabilities.characterEngine.title":
      "Bộ Đồng Nhất Nhân Vật",
    "featurePage.content.capabilities.characterEngine.description":
      "Đảm bảo mô hình AI của bạn trông giống hệt nhau trong mọi chiến dịch, trang phục và bối cảnh.",
    "featurePage.content.capabilities.characterEngine.cta":
      "Duy trì nhận diện Thương hiệu",
    "featurePage.content.demo.badge": "Trải Nghiệm Studio",
    "featurePage.content.demo.title": "Thử AI Tạo Hình Ảnh — Miễn Phí",
    "featurePage.content.demo.description":
      "Biến ý tưởng sản phẩm thành hình ảnh marketing chuyên nghiệp ngay lập tức.",
    "featurePage.content.demo.uploadTitle": "Kéo thả hình ảnh sản phẩm vào đây",
    "featurePage.content.demo.uploadDesc": "PNG, JPG tối đa 10MB",
    "featurePage.content.demo.4kReady": "Hình ảnh chất lượng cao",
    "featurePage.content.demo.promptLabel": "Mô tả",
    "featurePage.content.demo.promptPlaceholder":
      "Mô tả cảnh sản phẩm... VD: 'Chai gốm sứ trên bệ đá cẩm thạch với ánh sáng buổi sáng'",
    "featurePage.content.demo.presetMinimalist": "Tối giản",
    "featurePage.content.demo.presetOrganic": "Tự nhiên",
    "featurePage.content.demo.presetCinematic": "Điện ảnh",
    "featurePage.content.demo.styleLabel": "Phong cách",
    "featurePage.content.demo.styleProduct": "Sản phẩm",
    "featurePage.content.demo.styleLifestyle": "Lifestyle",
    "featurePage.content.demo.styleEcom": "E-com",
    "featurePage.content.demo.aspectLabel": "Tỷ lệ",
    "featurePage.content.demo.generateBtn": "Tạo hình ảnh",
    "featurePage.content.demo.generating": "Đang tạo...",
    "featurePage.content.demo.freeRemaining": "Còn 3 lượt tạo miễn phí",
    "featurePage.content.demo.downloadHD": "Tải HD",
    "featurePage.content.demo.tryAgain": "Thử lại",
    "featurePage.content.demo.history": "Lịch sử",
    "featurePage.content.demo.viewAll": "Xem tất cả",
    "featurePage.content.demo.field": "Lĩnh vực",
    "featurePage.content.demo.noImage": "Chưa có hình ảnh được thực hiện",
    "featurePage.content.demo.rateLimitError":
      "Không thể kiểm tra giới hạn sử dụng. Vui lòng thử lại.",
    "featurePage.content.demo.rateLimitLoading":
      "Đang tải thông tin giới hạn...",
    "featurePage.content.demo.noCreditsRemaining":
      "Bạn đã hết lượt tạo hình ảnh miễn phí. Vui lòng nâng cấp gói để tiếp tục.",
    "featurePage.content.demo.promptRequired":
      "Vui lòng nhập mô tả để tạo hình ảnh.",
    "featurePage.content.demo.uploadRequired":
      "Vui lòng tải lên ít nhất một hình ảnh.",
    "featurePage.content.demo.recaptchaFailed":
      "Xác minh reCAPTCHA thất bại. Vui lòng thử lại.",
    "featurePage.content.demo.defaultPrompt":
      "Tạo hình ảnh sản phẩm chất lượng cao",
    "featurePage.content.gallery.title": "Được Tạo Với AI của Uniksmart",
    "featurePage.content.gallery.subtitle":
      "Khám phá cách các thương hiệu hàng đầu mở rộng sản xuất sáng tạo.",
    "featurePage.content.gallery.filter.all": "Tất cả",
    "featurePage.content.gallery.filter.product": "Sản phẩm",
    "featurePage.content.gallery.filter.lifestyle": "Phong cách sống",
    "featurePage.content.gallery.filter.social": "Mạng xã hội",
    "featurePage.content.steps.title": "Từ Ý Tưởng Đến Nội Dung Trong 3 Bước",
    "featurePage.content.steps.subtitle":
      "Đơn giản hóa quy trình sáng tạo với quy trình liền mạch.",
    "featurePage.content.steps.step1.title": "Mô Tả",
    "featurePage.content.steps.step1.description":
      "Nhập prompt hoặc tải lên hình ảnh tham khảo để xác định tầm nhìn và hướng dẫn phong cách thương hiệu.",
    "featurePage.content.steps.step2.title": "Tạo",
    "featurePage.content.steps.step2.description":
      "AI của chúng tôi tạo ra 4 biến thể độ phân giải cao. Tinh chỉnh chi tiết với lệnh ngôn ngữ tự nhiên đơn giản.",
    "featurePage.content.steps.step3.title": "Xuất Bản",
    "featurePage.content.steps.step3.description":
      "Tải xuống tài sản độ phân giải cao hoặc đẩy trực tiếp lên kênh mạng xã hội và quản lý quảng cáo chỉ bằng một cú nhấp chuột.",
    "featurePage.content.cta.title": "Sẵn Sàng Chuyển Đổi Quy Trình Sáng Tạo?",
    "featurePage.content.cta.description":
      "Tham gia hàng nghìn công ty sử dụng Uniksmart để mở rộng sản xuất hình ảnh một cách dễ dàng.",
    "featurePage.content.cta.startTrial": "Bắt Đầu Dùng Thử Miễn Phí",
    "featurePage.content.cta.bookDemo": "Đặt Lịch Demo",
    "featurePage.content.marketingNeeds.title":
      "Nội Dung Cho Mọi Nhu Cầu Marketing",
    "featurePage.content.marketingNeeds.social.title": "Mạng Xã Hội",
    "featurePage.content.marketingNeeds.social.desc":
      "Tạo bài viết viral-ready, caption và hashtag tối ưu cho Instagram, TikTok và LinkedIn chỉ trong vài giây.",
    "featurePage.content.marketingNeeds.social.feature1":
      "Tự động resize cho tất cả nền tảng",
    "featurePage.content.marketingNeeds.social.feature2":
      "Gợi ý âm thanh trending",
    "featurePage.content.marketingNeeds.social.feature3":
      "Lịch đăng bài tối ưu bằng AI",
    "featurePage.content.marketingNeeds.social.cta": "Khám Phá Công Cụ Social",
    "featurePage.content.marketingNeeds.ecommerce.title": "Thương Mại Điện Tử",
    "featurePage.content.marketingNeeds.ecommerce.desc":
      "Mô tả sản phẩm chuyển đổi cao, quảng cáo và hình ảnh cửa hàng biến người xem thành người mua.",
    "featurePage.content.marketingNeeds.ecommerce.feature1":
      "Tiêu đề tối ưu SEO",
    "featurePage.content.marketingNeeds.ecommerce.feature2": "Tự động xóa nền",
    "featurePage.content.marketingNeeds.ecommerce.feature3":
      "Bản sao đa ngôn ngữ",
    "featurePage.content.marketingNeeds.ecommerce.cta": "Tăng Doanh Số Ngay",
    "featurePage.content.marketingNeeds.advertising.title": "Quảng Cáo",
    "featurePage.content.marketingNeeds.advertising.desc":
      "A/B test biến thể quảng cáo quy mô lớn. Tạo hàng trăm mẫu sáng tạo cho Meta, Google và Amazon.",
    "featurePage.content.marketingNeeds.advertising.feature1":
      "Dự đoán tỷ lệ nhấp chuột",
    "featurePage.content.marketingNeeds.advertising.feature2":
      "Theo dõi chi tiêu quảng cáo tự động",
    "featurePage.content.marketingNeeds.advertising.feature3":
      "Tạo CTA có tác động cao",
    "featurePage.content.marketingNeeds.advertising.cta": "Mở Rộng Quảng Cáo",
    "featurePage.content.metrics.title": "Con Số Không Biết Nói Dối",
    "featurePage.content.metrics.speed.label": "Thời Gian Tạo",
    "featurePage.content.metrics.speed.desc":
      "Thời gian trung bình để tạo một chiến dịch marketing hoàn chỉnh, đồng nhất thương hiệu từ một prompt.",
    "featurePage.content.metrics.quality.label": "Chất Lượng",
    "featurePage.content.metrics.quality.desc":
      "Độ phân giải rõ nét cho mọi hình ảnh và video, sẵn sàng cho in ấn quy mô lớn chuyên nghiệp.",
    "featurePage.content.metrics.cost.label": "Chi Phí Sáng Tạo",
    "featurePage.content.metrics.cost.desc":
      "Loại bỏ chi phí outsource đắt đỏ và nhiều vòng chỉnh sửa. Đội ngũ nội bộ trở thành nhà sáng tạo.",
    "featurePage.content.comparison.title": "Xem Sự Khác Biệt",
    "featurePage.content.comparison.subtitle":
      "So sánh đầu ra AI generic tiêu chuẩn với công cụ neural tinh chỉnh cho thương hiệu của Uniksmart.",
    "featurePage.content.comparison.standardAI": "AI Tiêu Chuẩn",
    "featurePage.content.comparison.UniksmartPro": "Uniksmart",
    "featurePage.content.comparison.hint":
      "Kéo thanh trượt để khám phá sự nâng cấp chi tiết",

    // Feature Page - Trends
    "featurePage.trends.metric1.label": "Theo dõi liên tục",
    "featurePage.trends.metric2.label": "Phân tích nhanh",
    "featurePage.trends.metric3.label": "Định dạng hỗ trợ",
    "featurePage.trends.metric4.label": "Độ chính xác",
    "featurePage.trends.benefitsTitle": "Tại sao chọn AI Hot Trends?",
    "featurePage.trends.benefitsDesc":
      "Luôn cập nhật xu hướng mới nhất để content luôn viral.",
    "featurePage.trends.benefit1": "Phát hiện xu hướng viral trước đối thủ",
    "featurePage.trends.benefit2": "Gợi ý ý tưởng content theo trend",
    "featurePage.trends.benefit3": "Theo dõi đối thủ cạnh tranh real-time",
    "featurePage.trends.benefit4": "Dự đoán xu hướng sắp tới với AI",

    // Feature Page - Trends (New Detailed Page)
    "featurePage.trends.hero.badge": "AI-POWERED INTELLIGENCE",
    "featurePage.trends.hero.title1": "Không bỏ lỡ",
    "featurePage.trends.hero.title2": "Xu hướng Viral",
    "featurePage.trends.hero.description":
      "Phát hiện xu hướng trước đối thủ 48 giờ. AI phân tích hàng triệu dữ liệu để dự đoán content viral với độ chính xác 92%.",

    // Trends Hero Metrics
    "featurePage.trends.metric.scanning": "Quét Trends",
    "featurePage.trends.metric.accuracy": "Độ chính xác",
    "featurePage.trends.metric.earlyDetection": "Phát hiện sớm",

    // Trends Demo Visualization
    "featurePage.trends.demo.title": "Bảng điều khiển Xu hướng",
    "featurePage.trends.demo.status": "Đang quét & Phân tích",
    "featurePage.trends.demo.prediction": "Dự đoán AI",
    "featurePage.trends.demo.trend1.title": "AI Video Marketing",
    "featurePage.trends.demo.trend1.category": "Công nghệ",
    "featurePage.trends.demo.trend2.title": "Bền vững & Xanh",
    "featurePage.trends.demo.trend2.category": "Lifestyle",
    "featurePage.trends.demo.aiInsight.label": "Gợi ý AI",
    "featurePage.trends.demo.aiInsight.text":
      "Xu hướng 'AI Video' đang tăng mạnh trên TikTok. Đề xuất tạo nội dung trong 24h để đón đầu.",

    // Trends Capabilities
    "featurePage.trends.capabilities.badge": "Tính năng cốt lõi",
    "featurePage.trends.capabilities.heading": "Mọi thứ bạn cần",
    "featurePage.trends.capabilities.bentoDesc":
      "Triển khai các module AI cấp doanh nghiệp giúp chuyển đổi quy trình làm việc và tăng hiệu quả đến 90%.",
    "featurePage.trends.capabilities.learnMore": "Tìm hiểu thêm",
    "featurePage.trends.capabilities.bento.badge1": "+142% Velocity",
    "featurePage.trends.capabilities.bento.badge2": "Tối ưu AI",
    "featurePage.trends.capabilities.bento.badge3": "Dự đoán chính xác",
    "featurePage.trends.capabilities.bento.badge4": "Thời gian thực",
    "featurePage.trends.capabilities.bento.badge5": "Vô hạn ý tưởng",
    "featurePage.trends.capabilities.bento.badge6": "Tự động hoá",
    "featurePage.trends.capabilities.trendDetection.title":
      "Phát hiện Xu hướng Ngành",
    "featurePage.trends.capabilities.trendDetection.desc":
      "Phát hiện tín hiệu mới nổi trước khi chúng đạt đỉnh với công cụ phân tích đường cong tăng trưởng độc quyền.",
    "featurePage.trends.capabilities.briefOptimizer.title": "Tối ưu hóa Brief",
    "featurePage.trends.capabilities.briefOptimizer.desc":
      "Biến ý tưởng mơ hồ thành brief có cấu trúc bằng AI.",
    "featurePage.trends.capabilities.realTimeScoring.title":
      "Chấm điểm Thời gian Thực",
    "featurePage.trends.capabilities.realTimeScoring.desc":
      "Đánh giá tiềm năng viral trực tiếp.",
    "featurePage.trends.capabilities.performancePrediction.title":
      "Dự đoán Hiệu suất",
    "featurePage.trends.capabilities.performancePrediction.desc":
      "Dự báo lượt xem với độ chính xác cao dựa trên dữ liệu lịch sử.",
    "featurePage.trends.capabilities.performancePrediction.accuracy":
      "Tỷ lệ chính xác",
    "featurePage.trends.capabilities.ideationEngine.title":
      "Công cụ Ý tưởng AI",
    "featurePage.trends.capabilities.ideationEngine.desc":
      "Vô hạn góc nhìn nội dung từ một chủ đề.",
    "featurePage.trends.capabilities.campaignBlueprint.title":
      "Bản thiết kế Chiến dịch",
    "featurePage.trends.capabilities.campaignBlueprint.desc":
      "Lịch đăng bài tự động được tạo sẵn.",

    // Trends Workflow
    "featurePage.trends.workflow.title":
      "Từ Tín hiệu đến Chiến lược: Quy trình",
    "featurePage.trends.workflow.subtitle":
      "Vòng lặp liên tục thu thập thông tin, phân tích và thực thi được thiết kế để giữ bạn luôn dẫn đầu.",
    "featurePage.trends.workflow.stepLabel": "Bước {num}",
    "featurePage.trends.workflow.step1.title": "Quét Toàn cầu",
    "featurePage.trends.workflow.step1.desc":
      "Thu thập hàng triệu điểm dữ liệu từ mạng xã hội và nguồn tin tức.",
    "featurePage.trends.workflow.step2.title": "Nhận dạng Mẫu",
    "featurePage.trends.workflow.step2.desc":
      "AI xác định các cấu trúc viral lặp lại và điểm bất thường.",
    "featurePage.trends.workflow.step3.title": "Lọc Liên quan",
    "featurePage.trends.workflow.step3.desc":
      "Lọc nhiễu dựa trên ngách thương hiệu của bạn.",
    "featurePage.trends.workflow.step4.title": "Lập Bản đồ Chiến lược",
    "featurePage.trends.workflow.step4.desc":
      "Ánh xạ xu hướng vào các trụ cột nội dung của bạn.",
    "featurePage.trends.workflow.step5.title": "Tạo Nội dung",
    "featurePage.trends.workflow.step5.desc":
      "Soạn nội dung có tác động cao tự động.",
    "featurePage.trends.workflow.step6.title": "Vòng Tối ưu",
    "featurePage.trends.workflow.step6.desc":
      "Học từ hiệu suất để cải thiện các lần quét tiếp theo.",

    // Trends Stats
    "featurePage.trends.stats.title":
      "Tác động Thực, Đo bằng Tăng trưởng Viral",
    "featurePage.trends.stats.subtitle":
      "Xem cách Uniksmart biến chiến lược nội dung thành công cụ viral có thể dự đoán.",
    "featurePage.trends.stats.viralIncrease.label": "Tăng Viral",
    "featurePage.trends.stats.viralIncrease.note":
      "Trung bình trên người dùng beta",
    "featurePage.trends.stats.timeReduction.label": "Giảm Thời gian",
    "featurePage.trends.stats.timeReduction.note": "Từ nghiên cứu đến đăng bài",
    "featurePage.trends.stats.trendsDetected.label": "Xu hướng Phát hiện",
    "featurePage.trends.stats.trendsDetected.note":
      "Hàng ngày trên các nền tảng",

    // Trends Testimonials
    "featurePage.trends.testimonials.title":
      "Được Tin dùng bởi Các Nhà Lãnh đạo Ngành",
    "featurePage.trends.testimonials.review1.name": "Nguyễn Văn A",
    "featurePage.trends.testimonials.review1.company": "TechFlow",
    "featurePage.trends.testimonials.review1.role": "VP Marketing",
    "featurePage.trends.testimonials.review1.quote":
      "Uniksmart đã hoàn toàn cách mạng hóa chiến lược nội dung của chúng tôi. Dự đoán xu hướng chính xác đáng kinh ngạc.",
    "featurePage.trends.testimonials.review2.name": "Trần Văn B",
    "featurePage.trends.testimonials.review2.company": "ViralLoop",
    "featurePage.trends.testimonials.review2.role": "Growth Lead",
    "featurePage.trends.testimonials.review2.quote":
      "Chúng tôi cắt giảm 85% thời gian nghiên cứu và bắt đầu đạt chỉ số viral trong vài tuần. Công cụ không thể thiếu.",
    "featurePage.trends.testimonials.review3.name": "Lê Thị C",
    "featurePage.trends.testimonials.review3.company": "NextGen",
    "featurePage.trends.testimonials.review3.role": "CMO",
    "featurePage.trends.testimonials.review3.quote":
      "Cuối cùng, một công cụ thực sự hiểu sắc thái đa nền tảng. Thay đổi cuộc chơi cho các thương hiệu toàn cầu.",

    // Trends Integrations
    "featurePage.trends.integrations.title": "Tích hợp Liền mạch",
    "featurePage.trends.integrations.subtitle":
      "Đẩy nội dung trực tiếp đến các nền tảng yêu thích của bạn.",

    // Trends Tech Specs
    "featurePage.trends.techSpecs.badge": "Bên trong Hệ thống",
    "featurePage.trends.techSpecs.title": "Công nghệ Thế hệ Mới cho Nội dung",
    "featurePage.trends.techSpecs.subtitle":
      "Được xây dựng cho các nhà phát triển và power user cần hiệu suất và độ chính xác cao nhất.",
    "featurePage.trends.techSpecs.aiRouting.title": "Định tuyến AI Nâng cao",
    "featurePage.trends.techSpecs.aiRouting.desc":
      "Định tuyến động giữa GPT-5, Claude và Gemini để xử lý ngữ cảnh tối ưu.",
    "featurePage.trends.techSpecs.languages.title": "75+ Ngôn ngữ",
    "featurePage.trends.techSpecs.languages.desc":
      "Phát hiện sắc thái văn hóa ở cấp độ bản địa trên các thị trường toàn cầu.",
    "featurePage.trends.techSpecs.accuracy.title": "92% Độ chính xác Dự đoán",
    "featurePage.trends.techSpecs.accuracy.desc":
      "Thuật toán chấm điểm độc quyền được xác thực trên 50M+ bài viral.",
    "featurePage.trends.techSpecs.apiDocs": "Đọc Tài liệu API",

    // Trends CTA
    "featurePage.trends.cta.title": "Bắt đầu Dự đoán Xu hướng Ngay",
    "featurePage.trends.cta.subtitle":
      "Ngừng đoán xem điều gì sẽ viral. Tham gia 10,000+ creators và brands sử dụng Uniksmart để thống trị feed.",
    "featurePage.trends.cta.getStarted": "Bắt đầu Miễn phí",
    "featurePage.trends.cta.viewPricing": "Xem Bảng giá",
    "featurePage.trends.cta.note":
      "Không cần thẻ tín dụng • Dùng thử miễn phí 14 ngày",

    // Feature Page - Video
    "featurePage.video.feature6.name": "Xuất đa định dạng",
    "featurePage.video.feature6.desc":
      "Hỗ trợ YouTube, TikTok, Reels với các tỷ lệ khung hình phù hợp",
    "featurePage.video.metric1.label": "Thời gian sản xuất",
    "featurePage.video.metric2.label": "Độ phân giải",
    "featurePage.video.metric3.label": "Tiết kiệm chi phí",
    "featurePage.video.metric4.label": "Giọng nói AI",
    "featurePage.video.benefitsTitle": "Tại sao chọn AI Video Factory?",
    "featurePage.video.benefitsDesc":
      "Sản xuất video marketing chuyên nghiệp với chi phí gần như bằng 0.",
    "featurePage.video.benefit1": "Tạo video với KOL ảo chỉ trong 5 phút",
    "featurePage.video.benefit2": "Không cần studio, không cần quay phim",
    "featurePage.video.benefit3": "Lip-sync tự động, giọng AI tự nhiên",
    "featurePage.video.benefit4": "Xuất video 4K cho mọi nền tảng",

    // Feature Page - Video (New Sections)
    "featurePage.video.hero.badge": "AI VIDEO 2.0",
    "featurePage.video.hero.title1": "Tạo Video Chuyên nghiệp",
    "featurePage.video.hero.title2": "Từ Scene",
    "featurePage.video.hero.description":
      "Biến kịch bản thành video chất lượng điện ảnh chỉ trong vài phút. Chọn từ hơn 100+ avatar AI và giọng đọc siêu thực. Không cần kỹ năng chỉnh sửa.",
    "featurePage.video.metric.perVideo": "Mỗi video",
    "featurePage.video.metric.resolution": "Độ phân giải",
    "featurePage.video.metric.aiVoices": "Giọng AI",
    "featurePage.video.cta.createFirst": "Tạo Video Đầu Tiên",
    "featurePage.video.cta.watchDemo": "Xem Demo",
    "featurePage.video.trust.businesses": "Doanh nghiệp tin dùng",
    "featurePage.video.trust.videosCreated": "Video đã tạo",
    "featurePage.video.demo.scenes": "CÁC CẢNH",
    "featurePage.video.demo.rendering": "Đang Render...",

    // Video Capabilities Section
    "featurePage.video.capabilities.badge": "TÍNH NĂNG",
    "featurePage.video.capabilities.heading":
      "Biến văn bản thành video với AI tiên tiến",
    "featurePage.video.capabilities.description":
      "Tất cả những gì bạn cần để tạo video chuyên nghiệp mà không cần máy quay hay ekip.",
    "featurePage.video.capabilities.aiScripts.title": "Kịch Bản AI",
    "featurePage.video.capabilities.aiScripts.desc":
      "Tạo kịch bản sẵn sàng sản xuất trong vài giây. Chỉ cần nhập chủ đề và để AI làm việc nặng.",
    "featurePage.video.capabilities.voices.title": "Giọng AI Chân Thực",
    "featurePage.video.capabilities.voices.desc":
      "Giọng đọc như người thật với hơn 50 ngôn ngữ. Chọn từ các tông giọng, giới tính và giọng điệu khác nhau.",
    "featurePage.video.capabilities.voices.languages": "ngôn ngữ",
    "featurePage.video.capabilities.platform.title": "Tối Ưu Đa Nền Tảng",
    "featurePage.video.capabilities.platform.desc":
      "Tối ưu hóa cho thuật toán YouTube, TikTok và Instagram. Tự động caption và tỷ lệ khung hình.",
    "featurePage.video.capabilities.learnMore": "Tìm hiểu thêm",

    // Video Workflow Section
    "featurePage.video.workflow.title": "Tạo video với DXAI như thế nào?",
    "featurePage.video.workflow.subtitle":
      "Biến ý tưởng thành video sẵn sàng sản xuất chỉ với 4 bước đơn giản.",
    "featurePage.video.workflow.step1.title": "Nhập Prompt",
    "featurePage.video.workflow.step1.desc":
      "Mô tả ý tưởng video bằng văn bản thuần. Chi tiết bao nhiêu tùy bạn.",
    "featurePage.video.workflow.step2.title": "Tạo Tự Động",
    "featurePage.video.workflow.step2.desc":
      "AI phân tích prompt và tạo scenes, kịch bản, và giọng đọc.",
    "featurePage.video.workflow.step3.title": "Chỉnh Sửa",
    "featurePage.video.workflow.step3.desc":
      "Tùy chỉnh scenes, đổi media, điều chỉnh timing hoặc thay đổi giọng.",
    "featurePage.video.workflow.step4.title": "Xuất Bản",
    "featurePage.video.workflow.step4.desc":
      "Xuất video 4K và chia sẻ lên YouTube, TikTok hoặc Instagram.",
    "featurePage.video.workflow.learnMore": "Xem đầy đủ tính năng",

    // Video Testimonials Section
    "featurePage.video.testimonials.title":
      "Được tin dùng bởi creators toàn cầu",
    "featurePage.video.testimonials.subtitle":
      "Tham gia 20,000+ creators đang tạo video nhanh hơn với Uniksmart",
    "featurePage.video.testimonials.1.quote":
      "Công cụ video AI tốt nhất tôi từng dùng. Nó giảm 90% thời gian sản xuất. Giờ tôi có thể đăng bài hàng ngày mà không kiệt sức.",
    "featurePage.video.testimonials.1.name": "Nguyễn Minh Anh",
    "featurePage.video.testimonials.1.role": "Content Creator",
    "featurePage.video.testimonials.2.quote":
      "Chất lượng giọng đọc đáng kinh ngạc. Thư viện stock khổng lồ, tôi hiếm khi cần tìm B-roll ở nơi khác.",
    "featurePage.video.testimonials.2.name": "Trần Hoàng Nam",
    "featurePage.video.testimonials.2.role": "Digital Marketer",
    "featurePage.video.testimonials.3.quote":
      "Agency của chúng tôi dùng Uniksmart cho video giải thích của khách hàng. Tính năng cộng tác là game changer cho team remote.",
    "featurePage.video.testimonials.3.name": "Lê Thị Hương",
    "featurePage.video.testimonials.3.role": "Agency Founder",
    "featurePage.video.testimonials.4.quote":
      "Quy trình text-to-video mượt mà. Tôi chỉ cần dán bài blog và có video sẵn sàng cho social media.",
    "featurePage.video.testimonials.4.name": "Phạm Đức Minh",
    "featurePage.video.testimonials.4.role": "Tech Blogger",

    // Video Bento Features Section
    "featurePage.video.bento.title": "Tính năng AI Video Factory",
    "featurePage.video.bento.subtitle":
      "Mọi thứ bạn cần để tạo video chuyên nghiệp mà không cần máy quay hay ekip.",
    "featurePage.video.bento.ambassador.title": "Video AI Brand Ambassador",
    "featurePage.video.bento.ambassador.desc":
      "Tạo video với người đại diện AI chân thực. Chọn từ thư viện avatar hoặc tải lên hình ảnh riêng của bạn để tạo spokesperson thương hiệu độc nhất.",
    "featurePage.video.bento.learnMore": "Tìm hiểu thêm",
    "featurePage.video.bento.lipSync.title": "Công nghệ Lip-Sync Siêu Thực",
    "featurePage.video.bento.lipSync.desc":
      "Chuyển động môi khớp hoàn hảo với giọng nói AI. Công nghệ deep learning tiên tiến mang lại trải nghiệm video tự nhiên như người thật.",
    "featurePage.video.bento.lipSync.syncing": "Đang đồng bộ...",
    "featurePage.video.bento.creationModes.title":
      "Ba Chế Độ Tạo Video Linh Hoạt",
    "featurePage.video.bento.creationModes.desc":
      "Linh hoạt với 3 phương thức: Script-to-Video từ kịch bản có sẵn, Text-to-Video từ văn bản bất kỳ, hoặc Image-to-Video biến hình ảnh thành video sống động.",
    "featurePage.video.bento.aiVoice.title": "Giọng AI Tự Nhiên Đa Ngôn Ngữ",
    "featurePage.video.bento.aiVoice.desc":
      "Hỗ trợ hơn 30 ngôn ngữ với giọng đọc AI siêu thực. Tùy chỉnh tốc độ, âm điệu và phong cách để phù hợp với thương hiệu của bạn.",
    "featurePage.video.bento.multiScene.title":
      "Trình Chỉnh Sửa Đa Scene với AI Layout",
    "featurePage.video.bento.multiScene.desc":
      "Editor trực quan với đề xuất bố cục thông minh từ AI. Kéo thả scenes, tùy chỉnh transitions và xuất video chất lượng 4K.",
    "featurePage.video.demo.clickToPlay": "Nhấn để phát video demo",

    // Video Pricing Section
    "featurePage.video.pricing.title": "Bảng giá phù hợp nhu cầu của bạn",
    "featurePage.video.pricing.subtitle":
      "Bắt đầu miễn phí, nâng cấp khi phát triển.",
    "featurePage.video.pricing.monthly": "Hàng tháng",
    "featurePage.video.pricing.yearly": "Hàng năm",
    "featurePage.video.pricing.save": "Tiết kiệm",
    "featurePage.video.pricing.popular": "Phổ biến nhất",
    "featurePage.video.pricing.custom": "Tùy chỉnh",
    "featurePage.video.pricing.mo": "tháng",
    "featurePage.video.pricing.free.name": "Miễn Phí",
    "featurePage.video.pricing.free.desc":
      "Hoàn hảo để trải nghiệm sức mạnh của Uniksmart.",
    "featurePage.video.pricing.free.feature1": "10 phút/tuần tạo video",
    "featurePage.video.pricing.free.feature2": "Giọng AI tiêu chuẩn",
    "featurePage.video.pricing.free.feature3": "Xuất có watermark",
    "featurePage.video.pricing.free.feature4": "Độ phân giải 720p",
    "featurePage.video.pricing.free.cta": "Bắt Đầu Miễn Phí",
    "featurePage.video.pricing.enterprise.name": "Doanh Nghiệp",
    "featurePage.video.pricing.enterprise.desc":
      "Cho teams cần sản xuất video có thể mở rộng.",
    "featurePage.video.pricing.enterprise.feature1": "Tạo không giới hạn",
    "featurePage.video.pricing.enterprise.feature2": "Giọng Premium siêu thực",
    "featurePage.video.pricing.enterprise.feature3":
      "Không watermark & White label",
    "featurePage.video.pricing.enterprise.feature4": "Xuất độ phân giải 4K",
    "featurePage.video.pricing.enterprise.feature5": "Full API Access",
    "featurePage.video.pricing.enterprise.cta": "Liên Hệ Sales",
    "featurePage.video.pricing.needMore": "Cần thêm thông tin?",
    "featurePage.video.pricing.contactSales":
      "Liên hệ với đội ngũ sales của chúng tôi",

    // Video FAQ Section
    "featurePage.video.faq.title": "Bạn muốn biết thêm?",
    "featurePage.video.faq.subtitle":
      "Các câu hỏi thường gặp về AI Video Factory",
    "featurePage.video.faq.1.question": "Uniksmart có miễn phí không?",
    "featurePage.video.faq.1.answer":
      "Có! Chúng tôi cung cấp gói miễn phí với 10 phút tạo video mỗi tuần. Bạn có thể nâng cấp bất cứ lúc nào để có thêm dung lượng và tính năng premium.",
    "featurePage.video.faq.2.question":
      "Tôi có thể chỉnh sửa video đã tạo không?",
    "featurePage.video.faq.2.answer":
      "Hoàn toàn có thể! Editor của chúng tôi cho phép bạn tùy chỉnh scenes, đổi media, điều chỉnh timing, và thay đổi giọng đọc trước khi xuất.",
    "featurePage.video.faq.3.question": "Tôi có sở hữu bản quyền video không?",
    "featurePage.video.faq.3.answer":
      "Có, bạn sở hữu toàn bộ quyền sử dụng thương mại đối với video bạn tạo với các gói trả phí. Gói miễn phí có một số hạn chế về sử dụng thương mại.",
    "featurePage.video.faq.4.question": "Hỗ trợ những ngôn ngữ nào?",
    "featurePage.video.faq.4.answer":
      "Chúng tôi hỗ trợ hơn 50 ngôn ngữ cho giọng đọc AI bao gồm Tiếng Việt, Tiếng Anh, Tiếng Trung, Tiếng Nhật, Tiếng Hàn và nhiều hơn nữa.",

    // Video CTA Section
    "featurePage.video.cta.title1": "Biến prompt thành",
    "featurePage.video.cta.title2": "scenes.",
    "featurePage.video.cta.subtitle":
      "Tham gia 5M+ creators đang sử dụng Uniksmart ngay hôm nay.",
    "featurePage.video.cta.button": "Tạo Video Ngay",
    "featurePage.video.cta.note": "Không cần thẻ tín dụng cho gói miễn phí.",

    // Feature Page - Email
    "featurePage.email.hero.badge": "Module v2.0 Mới",
    "featurePage.email.hero.title.part1": "Email Marketing",
    "featurePage.email.hero.title.part2": "Tự động hóa",
    "featurePage.email.hero.description":
      "Hệ thống Chăm sóc Khách hàng Tự động 100%. Xây dựng mối quan hệ tự động với module email cấp doanh nghiệp mở rộng cùng sự phát triển của bạn.",
    "featurePage.email.hero.cta.demo": "Yêu cầu Demo",
    "featurePage.email.hero.cta.video": "Xem Cách Hoạt động",
    "featurePage.email.hero.workflow.status": "Workflow Đang hoạt động",
    "featurePage.email.hero.workflow.lastRun": "Chạy lần cuối: 2 phút trước",
    "featurePage.email.hero.workflow.step1": "Email Chào mừng",
    "featurePage.email.hero.workflow.sent": "Đã gửi",
    "featurePage.email.hero.workflow.step2": "Chờ 2 Ngày",
    "featurePage.email.hero.workflow.completed": "Hoàn tất",

    "featurePage.email.benefits.title":
      "Thúc đẩy tăng trưởng mà không tăng nhân sự",
    "featurePage.email.benefits.subtitle":
      "Mở rộng giao tiếp hiệu quả với các công cụ được thiết kế để xử lý hàng triệu tương tác mà không cần giám sát thủ công.",
    "featurePage.email.benefits.1.name": "Hành trình Hoàn toàn Tự động",
    "featurePage.email.benefits.1.desc":
      "Cài đặt và quên đi workflows phản ứng ngay lập tức với hành vi người dùng.",
    "featurePage.email.benefits.2.name": "Cá nhân hóa theo Quy mô",
    "featurePage.email.benefits.2.desc":
      "Chèn nội dung động cho mọi người dùng dựa trên dữ liệu.",
    "featurePage.email.benefits.3.name": "Tương tác Cao hơn",
    "featurePage.email.benefits.3.desc":
      "Thuật toán gửi đúng thời điểm đảm bảo email của bạn đến khi người dùng đang hoạt động.",
    "featurePage.email.benefits.4.name": "Không Công việc Thủ công",
    "featurePage.email.benefits.4.desc":
      "Loại bỏ các tác vụ lặp đi lặp lại và để AI xử lý lập lịch.",

    "featurePage.email.journey.title": "Dòng Thời gian Hành trình Khách hàng",
    "featurePage.email.journey.subtitle":
      "Hình dung cách hệ thống của chúng tôi nuôi dưỡng khách hàng tiềm năng từ liên hệ đầu tiên đến người ủng hộ trung thành.",
    "featurePage.email.journey.viewDocs": "Xem tài liệu đầy đủ",
    "featurePage.email.journey.step1.name": "Series Chào mừng",
    "featurePage.email.journey.step1.item1": "Kích hoạt Ngay lập tức",
    "featurePage.email.journey.step1.item2": "Câu chuyện Thương hiệu",
    "featurePage.email.journey.step2.name": "Nhắc nhở Thông minh",
    "featurePage.email.journey.step2.item1": "Chờ 2 Ngày",
    "featurePage.email.journey.step2.item2": "Lời kêu gọi Hành động",
    "featurePage.email.journey.step3.name": "Vòng Phản hồi",
    "featurePage.email.journey.step3.item1": "Sau Mua hàng",
    "featurePage.email.journey.step3.item2": "Khảo sát NPS",
    "featurePage.email.journey.step4.name": "Tái Tiếp thị",
    "featurePage.email.journey.step4.item1": "Thu hồi",
    "featurePage.email.journey.step4.item2": "Ưu đãi Động",

    "featurePage.email.howItWorks.title": "Cách tự động hóa hoạt động",
    "featurePage.email.howItWorks.step1.title": "Kết nối CRM của bạn",
    "featurePage.email.howItWorks.step1.desc":
      "Tích hợp một cú nhấp chuột với Salesforce, HubSpot, hoặc nguồn API tùy chỉnh để đồng bộ liên hệ ngay lập tức.",
    "featurePage.email.howItWorks.step2.title": "Xác định Triggers Thông minh",
    "featurePage.email.howItWorks.step2.desc":
      "Đặt điều kiện dựa trên hoạt động người dùng, không hoạt động, lịch sử mua hàng, hoặc sự kiện tùy chỉnh.",
    "featurePage.email.howItWorks.step3.title": "Tự động tạo Nội dung",
    "featurePage.email.howItWorks.step3.desc":
      "Sử dụng công cụ template của chúng tôi để điền tên cá nhân, sản phẩm và gợi ý.",
    "featurePage.email.howItWorks.step4.title": "Theo dõi & Tối ưu",
    "featurePage.email.howItWorks.step4.desc":
      "Dashboard phân tích thời gian thực hiển thị tỷ lệ mở, click-through và doanh thu.",
    "featurePage.email.howItWorks.imageAlt": "Dashboard phân tích dữ liệu",
    "featurePage.email.howItWorks.badge.title": "Tối ưu Hệ thống Hoàn tất",
    "featurePage.email.howItWorks.badge.subtitle": "ROI Chiến dịch tăng 24%",

    "featurePage.email.technical.title": "Khả năng Kỹ thuật",
    "featurePage.email.technical.1.name": "Thiết kế Responsive",
    "featurePage.email.technical.1.desc":
      "Templates trông hoàn hảo trên mọi thiết bị tự động.",
    "featurePage.email.technical.2.name": "Theo dõi Thông minh",
    "featurePage.email.technical.2.desc":
      "Khả năng theo dõi mở và click chính xác từng pixel.",
    "featurePage.email.technical.3.name": "Tích hợp CRM",
    "featurePage.email.technical.3.desc":
      "Đồng bộ hai chiều với tất cả các CRM cấp doanh nghiệp chính.",
    "featurePage.email.technical.4.name": "A/B Testing",
    "featurePage.email.technical.4.desc":
      "Test tiêu đề và biến thể nội dung dễ dàng.",

    "featurePage.email.useCases.title":
      "Được xây dựng cho mọi trường hợp sử dụng",
    "featurePage.email.useCases.1.badge": "SaaS Onboarding",
    "featurePage.email.useCases.1.title": "Kích hoạt Người dùng",
    "featurePage.email.useCases.1.desc":
      "Hướng dẫn người đăng ký mới qua các tính năng sản phẩm trong 14 ngày đầu tiên để tăng tỷ lệ giữ chân.",
    "featurePage.email.useCases.2.badge": "E-commerce",
    "featurePage.email.useCases.2.title": "Giỏ hàng Bị bỏ rơi",
    "featurePage.email.useCases.2.desc":
      "Tự động thu hồi doanh số bị mất bằng cách gửi nhắc nhở 1 giờ sau khi giỏ hàng bị bỏ lại.",
    "featurePage.email.useCases.3.badge": "Gia hạn Dịch vụ",
    "featurePage.email.useCases.3.title": "Tiết kiệm Subscription",
    "featurePage.email.useCases.3.desc":
      "Chủ động thông báo cho khách hàng về ngày hết hạn sắp tới để ngăn churn trước khi xảy ra.",

    "featurePage.email.cta.title":
      "Biến Mọi Email Thành Kênh Doanh thu Tự động",
    "featurePage.email.cta.subtitle":
      "Tham gia 5,000+ doanh nghiệp đang mở rộng mối quan hệ khách hàng với nền tảng của chúng tôi.",
    "featurePage.email.cta.trial": "Bắt đầu Dùng thử Miễn phí",
    "featurePage.email.cta.sales": "Nói chuyện với Sales",

    "featurePage.email.feature6.name": "Phân khúc thông minh",
    "featurePage.email.feature6.desc":
      "Tự động phân loại khách hàng theo hành vi và tương tác",
    "featurePage.email.metric1.label": "Tự động hóa",
    "featurePage.email.metric2.label": "Open Rate tăng",
    "featurePage.email.metric3.label": "Giai đoạn chăm sóc",
    "featurePage.email.metric4.label": "Hoạt động",
    "featurePage.email.benefitsTitle": "Tại sao chọn Email Automation?",
    "featurePage.email.benefitsDesc":
      "Email marketing tự động 100% với customer journey hoàn chỉnh.",
    "featurePage.email.benefit1":
      "Tự động gửi email theo hành trình khách hàng",
    "featurePage.email.benefit2": "A/B Testing thông minh tối ưu open rate",
    "featurePage.email.benefit3": "Cá nhân hóa nội dung theo từng khách hàng",
    "featurePage.email.benefit4": "Báo cáo chi tiết hiệu quả chiến dịch",

    // Feature Page - Multi Platform
    "featurePage.multiPlatform.hero.badge": "Nền tảng quản lý #1",
    "featurePage.multiPlatform.hero.title.part1": "QUẢN LÝ MẠNG XÃ HỘI",
    "featurePage.multiPlatform.hero.title.part2": "ĐA NỀN TẢNG",
    "featurePage.multiPlatform.hero.description":
      "Tối ưu hóa quy trình, tiết kiệm thời gian và tăng trưởng doanh thu với nền tảng quản lý tập trung tất cả các kênh xã hội của bạn từ Facebook, TikTok đến Zalo.",
    "featurePage.multiPlatform.hero.cta.trial": "Dùng thử miễn phí",
    "featurePage.multiPlatform.hero.cta.demo": "Xem demo",
    "featurePage.multiPlatform.hero.feature1": "Không cần thẻ tín dụng",
    "featurePage.multiPlatform.hero.feature2": "Hủy bất kỳ lúc nào",
    "featurePage.multiPlatform.hero.dashboardAlt":
      "Giao diện dashboard hiển thị biểu đồ phân tích và chỉ số mạng xã hội",
    "featurePage.multiPlatform.hero.facebook.metric": "+124% Reach",
    "featurePage.multiPlatform.hero.facebook.label": "Facebook Campaign",
    "featurePage.multiPlatform.hero.tiktok.metric": "Viral Video",
    "featurePage.multiPlatform.hero.tiktok.label": "Trending #Marketing",

    "featurePage.multiPlatform.benefits.title": "Tại sao chọn chúng tôi?",
    "featurePage.multiPlatform.benefits.subtitle":
      "Giải pháp toàn diện giúp doanh nghiệp của bạn bứt phá trên mọi nền tảng số với công nghệ hiện đại.",
    "featurePage.multiPlatform.benefits.1.name": "Quản lý đa nền tảng",
    "featurePage.multiPlatform.benefits.1.desc":
      "Kết nối Facebook, Instagram, TikTok và Zalo vào một giao diện duy nhất.",
    "featurePage.multiPlatform.benefits.2.name": "Giảm 90% thao tác",
    "featurePage.multiPlatform.benefits.2.desc":
      "Tự động hóa các tác vụ lặp lại, đăng bài hàng loạt chỉ với một cú nhấp chuột.",
    "featurePage.multiPlatform.benefits.3.name": "Kiểm soát nội dung",
    "featurePage.multiPlatform.benefits.3.desc":
      "Quy trình duyệt bài chặt chẽ, đảm bảo chất lượng nội dung trước khi xuất bản.",
    "featurePage.multiPlatform.benefits.4.name": "Tương tác 24/7 bằng AI",
    "featurePage.multiPlatform.benefits.4.desc":
      "Chatbot thông minh tự động trả lời bình luận và tin nhắn khách hàng mọi lúc.",

    "featurePage.multiPlatform.unifiedInbox.badge": "Hộp thư xã hội thống nhất",
    "featurePage.multiPlatform.unifiedInbox.title":
      "Không bao giờ bỏ lỡ tin nhắn khách hàng",
    "featurePage.multiPlatform.unifiedInbox.description":
      "Quản lý tất cả bình luận và tin nhắn từ mọi kênh trong một giao diện sạch sẽ, trực quan. Gắn thẻ hội thoại, phân công cho nhân viên và theo dõi lịch sử tương tác dễ dàng.",
    "featurePage.multiPlatform.unifiedInbox.feature1":
      "Tập trung tin nhắn từ Facebook, Instagram, Zalo, TikTok Shop",
    "featurePage.multiPlatform.unifiedInbox.feature2":
      "Bộ lọc thông minh phân loại tin nhắn spam, hỏi giá, khiếu nại",
    "featurePage.multiPlatform.unifiedInbox.feature3":
      "Lưu mẫu câu trả lời nhanh (Saved Replies)",
    "featurePage.multiPlatform.unifiedInbox.cta":
      "Tìm hiểu thêm về Unified Inbox",

    "featurePage.multiPlatform.contentPlanning.badge": "Content Planning",
    "featurePage.multiPlatform.contentPlanning.title":
      "Lên lịch nội dung trực quan",
    "featurePage.multiPlatform.contentPlanning.subtitle":
      "Kéo thả để sắp xếp bài đăng. Xem trước giao diện trên từng nền tảng trước khi xuất bản.",
    "featurePage.multiPlatform.contentPlanning.post1.title":
      "New Product Launch",
    "featurePage.multiPlatform.contentPlanning.post1.time": "09:00 AM",
    "featurePage.multiPlatform.contentPlanning.post2.title":
      "Sale Announcement",
    "featurePage.multiPlatform.contentPlanning.post2.time": "14:30 PM",
    "featurePage.multiPlatform.contentPlanning.post3.title": "Review Recap",

    "featurePage.multiPlatform.aiAssistant.badge": "AI Assistant",
    "featurePage.multiPlatform.aiAssistant.title": "Smart Auto-Reply với AI",
    "featurePage.multiPlatform.aiAssistant.description":
      "Tự động phát hiện ngữ cảnh bình luận và phản hồi khách hàng thông minh. AI giúp bạn giữ tương tác cao mà không cần tốn nhân sự trực page 24/7.",
    "featurePage.multiPlatform.aiAssistant.feature1.name": "Sentiment Analysis",
    "featurePage.multiPlatform.aiAssistant.feature1.desc":
      "Phân tích cảm xúc tích cực/tiêu cực.",
    "featurePage.multiPlatform.aiAssistant.feature2.name": "Auto-Hide Spam",
    "featurePage.multiPlatform.aiAssistant.feature2.desc":
      "Tự động ẩn bình luận chứa từ khóa xấu.",
    "featurePage.multiPlatform.aiAssistant.userComment":
      "Sản phẩm này có size XL không shop ơi? Mình cần gấp ạ.",
    "featurePage.multiPlatform.aiAssistant.justNow": "Vừa xong",
    "featurePage.multiPlatform.aiAssistant.processing": "AI đang phân tích...",
    "featurePage.multiPlatform.aiAssistant.botLabel": "AI Bot trả lời",
    "featurePage.multiPlatform.aiAssistant.botReply":
      "Chào bạn! Dạ hiện tại mẫu này bên mình còn sẵn size XL ạ. Bạn kiểm tra tin nhắn chờ để shop tư vấn kỹ hơn nhé! ❤️",
    "featurePage.multiPlatform.aiAssistant.autoSent":
      "Gửi tự động • Ngay lập tức",

    "featurePage.multiPlatform.howItWorks.title": "Quy trình đơn giản",
    "featurePage.multiPlatform.howItWorks.step1.number": "1",
    "featurePage.multiPlatform.howItWorks.step1.title": "1. Kết nối",
    "featurePage.multiPlatform.howItWorks.step1.desc":
      "Liên kết các tài khoản MXH của bạn.",
    "featurePage.multiPlatform.howItWorks.step2.number": "2",
    "featurePage.multiPlatform.howItWorks.step2.title": "2. Thiết lập",
    "featurePage.multiPlatform.howItWorks.step2.desc":
      "Cài đặt mẫu câu trả lời và quy tắc.",
    "featurePage.multiPlatform.howItWorks.step3.number": "3",
    "featurePage.multiPlatform.howItWorks.step3.title": "3. Lên lịch",
    "featurePage.multiPlatform.howItWorks.step3.desc":
      "Soạn thảo và đặt lịch đăng bài.",
    "featurePage.multiPlatform.howItWorks.step4.number": "4",
    "featurePage.multiPlatform.howItWorks.step4.title": "4. Xuất bản",
    "featurePage.multiPlatform.howItWorks.step4.desc":
      "Hệ thống tự động đăng tải nội dung.",
    "featurePage.multiPlatform.howItWorks.step5.number": "5",
    "featurePage.multiPlatform.howItWorks.step5.title": "5. Phân tích",
    "featurePage.multiPlatform.howItWorks.step5.desc":
      "Theo dõi hiệu quả và tối ưu hóa.",

    "featurePage.multiPlatform.useCases.title":
      "Dành cho mọi quy mô doanh nghiệp",
    "featurePage.multiPlatform.useCases.1.title": "SME & Startups",
    "featurePage.multiPlatform.useCases.1.desc":
      "Tiết kiệm nhân sự, tập trung phát triển kinh doanh cốt lõi.",
    "featurePage.multiPlatform.useCases.2.title": "Marketing Agencies",
    "featurePage.multiPlatform.useCases.2.desc":
      "Quản lý hàng chục khách hàng trên một tài khoản duy nhất.",
    "featurePage.multiPlatform.useCases.3.title": "Enterprise Brands",
    "featurePage.multiPlatform.useCases.3.desc":
      "Quy trình duyệt bài chặt chẽ, bảo mật dữ liệu cấp cao.",
    "featurePage.multiPlatform.useCases.4.title": "E-commerce",
    "featurePage.multiPlatform.useCases.4.desc":
      "Chốt đơn nhanh chóng từ tin nhắn, đồng bộ tồn kho (tích hợp).",

    "featurePage.multiPlatform.cta.title.part1": "Sẵn sàng tăng trưởng",
    "featurePage.multiPlatform.cta.title.highlight": "300%",
    "featurePage.multiPlatform.cta.title.part2": "tương tác?",
    "featurePage.multiPlatform.cta.subtitle":
      "Tham gia cùng 10,000+ doanh nghiệp đang sử dụng Uniksmark để quản lý mạng xã hội hiệu quả hơn mỗi ngày.",
    "featurePage.multiPlatform.cta.trial": "Bắt đầu miễn phí ngay",
    "featurePage.multiPlatform.cta.contact": "Liên hệ tư vấn",

    "featurePage.multiPlatform.metric1.label": "Nền tảng",
    "featurePage.multiPlatform.metric2.label": "Tiết kiệm thời gian",
    "featurePage.multiPlatform.metric3.label": "Trả lời tự động",

    // ============================================================
    // ADS FEATURE PAGE
    // ============================================================
    "featurePage.ads.hero.badge": "AI Engine v2.0 mới",
    "featurePage.ads.hero.title": "QUẢN LÝ QUẢNG CÁO AI",
    "featurePage.ads.hero.titleHighlight": "& PHÂN TÍCH",
    "featurePage.ads.hero.description":
      "Tối ưu hóa chi tiêu quảng cáo tự động với công cụ phân tích AI của chúng tôi. Theo dõi, quản lý và mở rộng chiến dịch trên tất cả nền tảng trong một bảng điều khiển thống nhất.",
    "featurePage.ads.hero.primaryButton": "Dùng thử miễn phí",
    "featurePage.ads.hero.secondaryButton": "Xem Demo",
    "featurePage.ads.hero.trustedBy": "Được tin dùng bởi 10,000+ marketers",

    "featurePage.ads.benefits.title":
      "Tại sao các thương hiệu hàng đầu chọn chúng tôi",
    "featurePage.ads.benefits.subtitle":
      "Nền tảng của chúng tôi kết hợp AI mạnh mẽ với thiết kế trực quan để mang lại lợi thế trong quảng cáo số.",
    "featurePage.ads.benefits.benefit1.title": "Quyết định dựa trên dữ liệu",
    "featurePage.ads.benefits.benefit1.desc":
      "Đưa ra quyết định dựa trên dữ liệu thực, không phải cảm tính. Trực quan hóa xu hướng ngay lập tức.",
    "featurePage.ads.benefits.benefit2.title": "Tối ưu hóa AI",
    "featurePage.ads.benefits.benefit2.desc":
      "Để AI tối ưu giá thầu 24/7 cho ROI và hiệu quả tối đa.",
    "featurePage.ads.benefits.benefit3.title": "Phân tích toàn phễu",
    "featurePage.ads.benefits.benefit3.desc":
      "Theo dõi toàn bộ hành trình khách hàng từ lần nhấp đầu tiên đến chuyển đổi cuối cùng.",
    "featurePage.ads.benefits.benefit4.title": "Cảnh báo thời gian thực",
    "featurePage.ads.benefits.benefit4.desc":
      "Nhận thông báo ngay lập tức qua Slack hoặc Email khi chiến dịch hoạt động kém.",

    "featurePage.ads.dashboard.badge": "Chế độ xem thống nhất",
    "featurePage.ads.dashboard.title": "Tất cả kênh của bạn ở một nơi",
    "featurePage.ads.dashboard.subtitle":
      "Ngừng chuyển đổi tab. Giám sát hiệu suất Facebook, Instagram, TikTok và YouTube từ một nguồn duy nhất.",
    "featurePage.ads.dashboard.cardTitle": "Tổng quan chiến dịch",
    "featurePage.ads.dashboard.timeRange": "30 ngày qua",
    "featurePage.ads.dashboard.export": "Xuất",
    "featurePage.ads.dashboard.metric1.label": "Tổng tiếp cận",
    "featurePage.ads.dashboard.metric1.value": "2.4M",
    "featurePage.ads.dashboard.metric1.change": "12% so với tháng trước",
    "featurePage.ads.dashboard.metric2.label": "Tỷ lệ tương tác",
    "featurePage.ads.dashboard.metric2.value": "4.8%",
    "featurePage.ads.dashboard.metric2.change": "0.5% so với tháng trước",
    "featurePage.ads.dashboard.metric3.label": "Tổng chi tiêu",
    "featurePage.ads.dashboard.metric3.value": "$12,450",
    "featurePage.ads.dashboard.metric3.change": "5% so với tháng trước",
    "featurePage.ads.dashboard.metric4.label": "Chuyển đổi",
    "featurePage.ads.dashboard.metric4.value": "842",
    "featurePage.ads.dashboard.metric4.change": "24% so với tháng trước",

    "featurePage.ads.aiEngine.title": "Công cụ AI mạnh mẽ",
    "featurePage.ads.aiEngine.subtitle":
      "Thuật toán độc quyền của chúng tôi hoạt động 24/7 để đảm bảo ngân sách của bạn được sử dụng đúng chỗ.",
    "featurePage.ads.aiEngine.feature1.title": "Tối ưu ngân sách",
    "featurePage.ads.aiEngine.feature1.desc":
      "Tự động chuyển ngân sách sang bộ quảng cáo hoạt động tốt nhất.",
    "featurePage.ads.aiEngine.feature2.title": "Gợi ý đối tượng",
    "featurePage.ads.aiEngine.feature2.desc":
      "Khám phá đối tượng có ý định cao ẩn.",
    "featurePage.ads.aiEngine.feature3.title": "A/B Testing thông minh",
    "featurePage.ads.aiEngine.feature3.desc":
      "Kiểm thử đa biến với ý nghĩa thống kê.",
    "featurePage.ads.aiEngine.feature4.title": "Cảnh báo hiệu suất",
    "featurePage.ads.aiEngine.feature4.desc":
      "Thông báo ngay lập tức cho các bất thường.",
    "featurePage.ads.aiEngine.scanningTitle": "Đang quét chiến dịch...",
    "featurePage.ads.aiEngine.statusActive": "Hoạt động",
    "featurePage.ads.aiEngine.suggestion1.title": "Cơ hội tối ưu hóa",
    "featurePage.ads.aiEngine.suggestion1.desc":
      'Chuyển $500 từ "Cold Traffic Adset" sang "Retargeting Video" để có khả năng tăng ROAS 15%.',
    "featurePage.ads.aiEngine.applyButton": "Áp dụng gợi ý",
    "featurePage.ads.aiEngine.suggestion2.title": "Làm mới nội dung",
    "featurePage.ads.aiEngine.suggestion2.desc":
      'Nội dung quảng cáo "Summer_Promo_v2" đã được tự động xoay vòng do CTR cao.',

    "featurePage.ads.metrics.title": "Các chỉ số chính được theo dõi",
    "featurePage.ads.metrics.ctr.label": "CTR",
    "featurePage.ads.metrics.ctr.value": "2.4%",
    "featurePage.ads.metrics.cpa.label": "CPA",
    "featurePage.ads.metrics.cpa.value": "$12.50",
    "featurePage.ads.metrics.roas.label": "ROAS",
    "featurePage.ads.metrics.roas.value": "4.2x",
    "featurePage.ads.metrics.cpc.label": "CPC",
    "featurePage.ads.metrics.cpc.value": "$0.85",
    "featurePage.ads.metrics.cpm.label": "CPM",
    "featurePage.ads.metrics.cpm.value": "$5.20",
    "featurePage.ads.metrics.convRate.label": "Tỷ lệ chuyển đổi",
    "featurePage.ads.metrics.convRate.value": "3.1%",
    "featurePage.ads.metrics.retention.label": "Giữ chân",
    "featurePage.ads.metrics.retention.value": "45%",
    "featurePage.ads.metrics.ltv.label": "LTV",
    "featurePage.ads.metrics.ltv.value": "$450",

    "featurePage.ads.howItWorks.title": "Cách thức hoạt động",
    "featurePage.ads.howItWorks.subtitle":
      "Năm bước đơn giản để thống trị quảng cáo",
    "featurePage.ads.howItWorks.step1.title": "Kết nối",
    "featurePage.ads.howItWorks.step1.desc":
      "Liên kết tài khoản quảng cáo của bạn một cách an toàn.",
    "featurePage.ads.howItWorks.step2.title": "Phân tích",
    "featurePage.ads.howItWorks.step2.desc": "AI quét dữ liệu lịch sử.",
    "featurePage.ads.howItWorks.step3.title": "Tối ưu hóa",
    "featurePage.ads.howItWorks.step3.desc": "Áp dụng khuyến nghị AI.",
    "featurePage.ads.howItWorks.step4.title": "Tự động hóa",
    "featurePage.ads.howItWorks.step4.desc": "Đặt quy tắc cho quản lý 24/7.",
    "featurePage.ads.howItWorks.step5.title": "Mở rộng",
    "featurePage.ads.howItWorks.step5.desc":
      "Tăng ngân sách cho những chiến thắng.",

    "featurePage.ads.useCases.title": "Được xây dựng cho mọi đội nhóm",
    "featurePage.ads.useCases.case1.title": "Thương hiệu DTC",
    "featurePage.ads.useCases.case1.desc":
      "Mở rộng doanh số thương mại điện tử với theo dõi ROAS chính xác.",
    "featurePage.ads.useCases.case2.title": "Các công ty",
    "featurePage.ads.useCases.case2.desc":
      "Quản lý hàng trăm tài khoản khách hàng với một lần đăng nhập.",
    "featurePage.ads.useCases.case3.title": "B2B SaaS",
    "featurePage.ads.useCases.case3.desc":
      "Tối ưu cho khách hàng tiềm năng có chất lượng và giảm CPA của bạn.",
    "featurePage.ads.useCases.case4.title": "Đội ngũ Marketing",
    "featurePage.ads.useCases.case4.desc":
      "Cộng tác về nội dung và báo cáo một cách dễ dàng.",

    "featurePage.ads.cta.title": "Biến Dữ Liệu Quảng Cáo Thành Lợi Nhuận",
    "featurePage.ads.cta.subtitle":
      "Tham gia cùng 10,000+ marketers đang tối ưu hơn $500M chi tiêu quảng cáo hàng năm. Bắt đầu dùng thử 14 ngày miễn phí ngay hôm nay.",
    "featurePage.ads.cta.trial": "Bắt đầu miễn phí",
    "featurePage.ads.cta.contact": "Đặt lịch Demo",
    "featurePage.ads.cta.trustNote":
      "Không cần thẻ tín dụng · Hủy bất cứ lúc nào",
    "featurePage.multiPlatform.metric4.label": "Dashboard duy nhất",
    "featurePage.multiPlatform.benefitsTitle": "Tại sao chọn Multi-Platform?",
    "featurePage.multiPlatform.benefitsDesc":
      "Quản lý tất cả kênh social từ một nơi duy nhất.",
    "featurePage.multiPlatform.benefit1":
      "Đăng bài hàng loạt lên 5+ nền tảng cùng lúc",
    "featurePage.multiPlatform.benefit2":
      "Content Calendar trực quan với drag & drop",
    "featurePage.multiPlatform.benefit3":
      "AI tự động trả lời comment và tin nhắn",
    "featurePage.multiPlatform.benefit4": "Unified Inbox gom tất cả tin nhắn",

    // Feature Page - Ads
    "featurePage.ads.feature5.name": "ROI Calculator",
    "featurePage.ads.feature5.desc":
      "Tính toán và dự đoán ROI cho từng chiến dịch quảng cáo",
    "featurePage.ads.feature6.name": "Báo cáo tự động",
    "featurePage.ads.feature6.desc":
      "Gửi báo cáo hiệu suất tự động hàng tuần/tháng",
    "featurePage.ads.metric1.label": "Chỉ số đo lường",
    "featurePage.ads.metric2.label": "Uptime SLA",
    "featurePage.ads.metric3.label": "Hiệu suất ROI",
    "featurePage.ads.metric4.label": "Báo cáo",
    "featurePage.ads.benefitsTitle": "Tại sao chọn AI Ads Analytics?",
    "featurePage.ads.benefitsDesc":
      "Tối ưu quảng cáo và theo dõi ROI với AI thông minh.",
    "featurePage.ads.benefit1": "Tự động tối ưu ngân sách quảng cáo",
    "featurePage.ads.benefit2": "Gợi ý đối tượng target chính xác",
    "featurePage.ads.benefit3": "A/B Testing tự động cho ads",
    "featurePage.ads.benefit4": "Cảnh báo real-time khi chiến dịch có vấn đề",
    "form.packageSelector.label": "Chọn gói dịch vụ",
    "form.packageSelector.popular": "Giá trị tốt nhất",
    "form.package.startup.name": "Chuyên nghiệp",
    "form.package.startup.price": "12.475.000 VNĐ/tháng",
    "form.package.growth.name": "Doanh nghiệp",
    "form.package.growth.price": "19.975.000/tháng",
    "form.package.enterprise.name": "Doanh nghiệp",
    "form.package.enterprise.price": "Liên hệ",
    "registration.form.package.starter": "Chuyên nghiệp",
    "registration.form.package.starterDesc":
      "Trải nghiệm toàn bộ tính năng miễn phí trong 1 tháng",
    "featurePage.content.hero.4kQuality": "Chất lượng 4K",
    "registration.form.package.business": "Doanh nghiệp",
    "registration.form.package.businessTitle": "Dành cho tổ chức",
    "registration.form.package.businessDesc":
      "Giải pháp tùy chỉnh với quản trị và phân quyền.",
    "registration.form.package.starterTitle": "Dành cho cá nhân",
    "registration.form.title": "Đăng ký dùng thử miễn phí",
    "registration.form.subtitle":
      "Điền thông tin để bắt đầu trải nghiệm Uniksmart",
    "registration.form.hero.title": "Nâng tầm Marketing Doanh nghiệp với AI",
    "registration.form.hero.subtitle":
      "Hơn 2,500 doanh nghiệp đã thành công chuyển đổi số với Uniksmart. Tham gia ngay để nhận các ưu đãi độc quyền.",
    "registration.form.benefit1": "Tư vấn trực tiếp với chuyên gia.",
    "registration.form.benefit2": "Trình bày sản phẩm trực tiếp",
    "registration.form.benefit3":
      "Nhận ưu đãi đặc biệt cho doanh nghiệp nhỏ và vừa",
    "registration.form.rating": "4.9/5 dựa trên đánh giá của người dùng",
    "registration.form.testimonial":
      "Uniksmart đã giúp chúng tôi tối ưu hóa quy trình làm việc và tăng tỷ lệ chuyển đổi lên 30% trong 3 tháng đầu tiên.",
    "registration.form.submit.button": "Bắt đầu dùng thử miễn phí",
    "registration.form.company.address": "Địa chỉ công ty",
    "registration.form.company.addressPlaceholder":
      "Ví dụ: 123 Đường Lê Lợi, Quận 1, TP.HCM",
    "registration.form.contact.fullName": "Tên đầy đủ",
    "registration.form.contact.fullNamePlaceholder": "Nguyễn Hoàng K",
    "registration.form.login.text": "Đã có tài khoản?",
    "registration.form.login.link": "Đăng nhập ngay",
    "registration.form.terms.text": "Bằng cách đăng ký, bạn đồng ý với",
    "registration.form.terms.service": "Điều khoản dịch vụ",
    "registration.form.terms.and": "và",
    "registration.form.terms.privacy": "Chính sách bảo mật",
    "registration.form.trial": "Bắt đầu dùng thử miễn phí 14 ngày",
    "featurePage.content.demo.error": "Lỗi khi tải tiến trình tạo ảnh",
  },
  en: {
    "featurePage.content.demo.error": "Error loading image generation progress",
    // Navigation
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About Us",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.trial": "Free Trial",
    "nav.trialFree": "Start Free Trial",

    "featurePage.content.hero.4kQuality": "4K Quality",
    "featurePage.content.problems.oldWay.header": "Old Way",
    "featurePage.content.problems.UniksmartWay.header": "Solution",

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
    "hero.trust.users": "500+ businesses",
    "hero.trust.provinces": "Trusted by all 63 provinces",
    "hero.trust.soc2": "SOC 2 Type II",
    "hero.trust.iso": "ISO 27001",
    "hero.trust.uptime": "99.9% Uptime SLA",
    "hero.trust.dataResidency": "Vietnamese Data Residency",
    "hero.trust.videoTime": "2-min video creation",
    "hero.trust.avgRoi": "Average ROI +120%",
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
    "features.chatbot.title": "AI Customer Support Chatbot 24/7",
    "features.chatbot.desc":
      "An intelligent AI chatbot system that automates your entire customer support workflow - from product consultation and instant quotes to appointment booking and lead qualification - operating 24/7 across multiple platforms.",
    "features.chatbot.stats": "Instant response 24/7 • 99% less waiting time",
    "features.chatbot.feature1.name":
      "Personalized Product & Service Consultation",
    "features.chatbot.feature1.desc":
      "AI trained on your business data - understands your industry, products, and brand voice.",
    "features.chatbot.feature2.name": "Instant Automated Quotes",
    "features.chatbot.feature2.desc":
      "Calculate and deliver preliminary quotes in seconds, any time of day.",
    "features.chatbot.feature3.name":
      "Smart Product Comparison & Recommendations",
    "features.chatbot.feature3.desc":
      "Help customers compare products and get instant, context-aware recommendations during the conversation.",
    "features.chatbot.feature4.name":
      "Real-Time Calendar Integration & Booking",
    "features.chatbot.feature4.desc":
      "Automatically check availability and schedule consultations, demos, or meetings from the chat.",
    "features.chatbot.feature5.name":
      "Intelligent Lead Scoring (Hot / Warm / Cold)",
    "features.chatbot.feature5.desc":
      "Evaluate interest levels and sync qualified leads to your CRM automatically.",
    "features.chatbot.feature6.name": "Seamless Human Handoff",
    "features.chatbot.feature6.desc":
      "Instantly transfer complex inquiries to human agents with full conversation context.",
    "features.chatbot.metric1.name": "Average Response Time",
    "features.chatbot.metric1.value": "~3 seconds",
    "features.chatbot.metric1.note": "99% reduction vs manual",
    "features.chatbot.metric2.name": "Lead Conversion Rate",
    "features.chatbot.metric2.value": "+45%",
    "features.chatbot.metric2.note": "Thanks to instant response",
    "features.chatbot.metric3.name": "Continuous Operation",
    "features.chatbot.metric3.value": "24/7/365",
    "features.chatbot.metric3.note": "Never miss a customer",
    "features.chatbot.why.title": "Why Choose AI Customer Support Chatbot?",
    "features.chatbot.why.bullet1":
      "Respond instantly to customers — never miss a sales opportunity",
    "features.chatbot.why.bullet2":
      "Reduce workload for your support team by up to 80%",
    "features.chatbot.why.bullet3":
      "Available 24/7/365 — including holidays and weekends",
    "features.chatbot.why.bullet4":
      "Increase conversion rates with personalized, context-aware responses",
    "features.chatbot.cta": "Talk to an Expert",
    "features.content.title": "AI Content Generator",
    "features.content.desc":
      "A comprehensive AI platform that helps businesses create high-quality images, articles, and social media content in seconds - maintaining brand consistency while maximizing reach and engagement.",
    "features.content.stats":
      "50+ templates • 4K image generation • SEO-optimized captions",
    "features.content.feature1.name": "AI Image Studio (Up to 4K Resolution)",
    "features.content.feature1.desc":
      "Generate stunning visuals for e-commerce, social media, ads, and print.",
    "features.content.feature2.name": "Consistent Character Technology",
    "features.content.feature2.desc":
      "Maintain the same AI character face and identity across all generated images.",
    "features.content.feature3.name": "Product & Lifestyle Image Generation",
    "features.content.feature3.desc":
      "Create custom product shots and lifestyle scenes - no studio or models required.",
    "features.content.feature4.name": "AI Caption Writer with Trend Analysis",
    "features.content.feature4.desc":
      "Generate engaging captions from simple briefs, optimized for current trends.",
    "features.content.feature5.name": "Smart Hashtag Suggestions",
    "features.content.feature5.desc":
      "AI-recommended hashtags optimized for each social platform to maximize organic reach.",
    "features.content.feature6.name": "Multiple Content Tones",
    "features.content.feature6.desc":
      "Sales, Professional, Friendly, Gen-Z, Technical, Storytelling - adapt to any audience.",
    "features.content.metric1.name": "Image Generation Time",
    "features.content.metric1.value": "10-30 seconds",
    "features.content.metric1.note": "Professional 4K quality",
    "features.content.metric2.name": "Content Creation Cost",
    "features.content.metric2.value": "2 Credits/image",
    "features.content.metric2.note": "90% savings vs hiring designer",
    "features.content.metric3.name": "Style Variety",
    "features.content.metric3.value": "50+ styles",
    "features.content.metric3.note": "Realistic, 3D, Illustration, Abstract",
    "features.trends.title": "AI Trend Discovery & Content Planning",
    "features.trends.desc":
      "An AI-powered market intelligence system that identifies emerging trends, generates content ideas, and builds campaign strategies - keeping your business ahead of the competition.",
    "features.trends.stats":
      "24/7 trend scanning • 5+ platforms • Predict viral 48h ahead",
    "features.trends.feature1.name": "Industry & Platform Trend Detection",
    "features.trends.feature1.desc":
      "Analyze user behavior and market data to surface emerging trends in your niche.",
    "features.trends.feature2.name": "Content Brief Analyzer & Optimizer",
    "features.trends.feature2.desc":
      "Standardize and enhance your content briefs before production begins.",
    "features.trends.feature3.name": "Real-Time Brief Quality Scoring (0-100)",
    "features.trends.feature3.desc":
      "Get instant feedback on brief quality with actionable improvement suggestions.",
    "features.trends.feature4.name": "AI Content Ideation Engine",
    "features.trends.feature4.desc":
      "Generate article, video, and campaign ideas aligned with your business goals.",
    "features.trends.feature5.name":
      "Performance Prediction & Relevance Scoring",
    "features.trends.feature5.desc":
      "Estimate content performance based on historical engagement data.",
    "features.trends.feature6.name": "Complete Campaign Blueprint Generator",
    "features.trends.feature6.desc":
      "Build full content plans including structure, hooks, and calls-to-action",
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
    "features.video.title": "AI Video Factory (Virtual Spokesperson)",
    "features.video.desc":
      "Create professional marketing videos featuring AI-powered virtual brand ambassadors. Produce video content rapidly, cost-effectively, and with complete control over your brand messaging - no filming required.",
    "features.video.stats": "50 Credits/video • 5 min production • 95% savings",
    "features.video.feature1.name": "AI Brand Ambassador Videos",
    "features.video.feature1.desc":
      "Create videos with your exclusive AI spokesperson - 100% content control, no talent fees.",
    "features.video.feature2.name": "Hyper-Realistic Lip Sync Technology",
    "features.video.feature2.desc":
      "Natural lip movements perfectly synchronized with speech - indistinguishable from real footage.",
    "features.video.feature3.name": "Three Flexible Creation Modes",
    "features.video.feature3.desc":
      "Script-to-Video | Text-to-Video | Image-to-Video - choose your workflow.",
    "features.video.feature4.name":
      "Natural AI Voice with Multi-Language Support",
    "features.video.feature4.desc":
      "Human-like voices in 30+ languages for domestic and international markets.",
    "features.video.feature5.name":
      "Multi-Scene Editor with AI Layout Suggestions",
    "features.video.feature5.desc":
      "Easily customize videos with AI-recommended scene compositions.",
    "features.video.feature6.name": "Multi-Format Export (HD to 4K)",
    "features.video.feature6.desc":
      "Export in vertical, horizontal, square - HD, Full HD, and 4K resolutions.",
    "features.video.metric1.name": "Production cost",
    "features.video.metric1.value": "0 VND",
    "features.video.metric1.note": "95% savings vs traditional methods",
    "features.video.metric2.name": "Production time",
    "features.video.metric2.value": "5 minutes",
    "features.video.metric2.note": "99% faster than 3-7 days",
    "features.video.metric3.name": "Export formats",
    "features.video.metric3.value": "720p, 1080p, 4K",
    "features.video.metric3.note": "16:9 (YouTube) • 9:16 (TikTok) • 8-60 sec",
    "features.email.title": "Email Marketing Automation",
    "features.email.desc":
      "An intelligent email automation system that nurtures, engages, and retains customers throughout their entire lifecycle - from post-purchase to repurchase and referral - powered by AI optimization.",
    "features.email.stats":
      "100% automated • CRM integration • AI-powered personalization",
    "features.email.feature1.name": "Automated Welcome & Confirmation Emails",
    "features.email.feature1.desc":
      "Instantly send order confirmations, e-invoices, and onboarding guides post-transaction.",
    "features.email.feature2.name": "Smart Appointment & Renewal Reminders",
    "features.email.feature2.desc":
      "Automated reminders for appointments, deadlines, and subscription renewals.",
    "features.email.feature3.name": "Review Collection & Satisfaction Surveys",
    "features.email.feature3.desc":
      "Automatically request reviews and gather customer feedback at optimal times.",
    "features.email.feature4.name": "Behavior-Based Re-engagement Campaigns",
    "features.email.feature4.desc":
      "Birthday offers, repurchase reminders, and personalized recommendations based on activity.",
    "features.email.feature5.name": "AI-Powered Personalization",
    "features.email.feature5.desc":
      "Dynamic content personalized using CRM data and interaction history.",
    "features.email.feature6.name": "100% Hands-Free Automation",
    "features.email.feature6.desc":
      "Set up once - the entire customer journey runs automatically, saving time and resources.",
    "features.email.metric1.name": "Care stages",
    "features.email.metric1.value": "4 stages",
    "features.email.metric1.note": "Welcome, Reminder, Feedback, Re-marketing",
    "features.email.metric2.name": "Automation",
    "features.email.metric2.value": "100%",
    "features.email.metric2.note": "No manual operation required",
    "features.email.metric3.name": "Performance improvement",
    "features.email.metric3.value": "Open Rate +35%",
    "features.email.metric3.note": "Driven by AI personalization & A/B testing",
    "features.multiPlatform.title": "Multi-Platform Social Manager",
    "features.multiPlatform.desc":
      "A centralized command center for scheduling, publishing, and managing engagement across all your social channels from a single dashboard - powered by AI for 24/7 intelligent response.",
    "features.multiPlatform.stats":
      "5 platforms • 90% time saved • AI replies 24/7",
    "features.multiPlatform.feature1.name": "Unified Multi-Platform Management",
    "features.multiPlatform.feature1.desc":
      "Manage Facebook, Instagram, TikTok, YouTube, and more - no platform switching required.",
    "features.multiPlatform.feature2.name": "Bulk Scheduling & Auto-Publishing",
    "features.multiPlatform.feature2.desc":
      "Schedule and publish multiple posts simultaneously - reduce manual work by 90%.",
    "features.multiPlatform.feature3.name":
      "Visual Content Calendar with Color Coding",
    "features.multiPlatform.feature3.desc":
      "See your entire content plan at a glance - easily track campaign progress.",
    "features.multiPlatform.feature4.name": "Drag-and-Drop Schedule Adjustment",
    "features.multiPlatform.feature4.desc":
      "Instantly reschedule posts when campaigns need quick changes.",
    "features.multiPlatform.feature5.name":
      "AI-Powered Auto-Reply for Comments",
    "features.multiPlatform.feature5.desc":
      "AI analyzes context and responds appropriately - maintain engagement 24/7.",
    "features.multiPlatform.feature6.name": "Unified Social Inbox",
    "features.multiPlatform.feature6.desc":
      "All messages and comments from every platform in one interface.",
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
    "features.ads.title": "Advertising Management & AI Analytics",
    "features.ads.desc":
      "A data-driven advertising optimization system that helps businesses measure campaign performance accurately and maximize ROI in real-time using advanced AI analytics.",
    "features.ads.stats":
      "99.9% accuracy • Auto budget optimization • ROAS Calculator",
    "features.ads.feature1.name": "Real-Time Performance Dashboard",
    "features.ads.feature1.desc":
      "Track reach, engagement, followers, video views, and channel performance live.",
    "features.ads.feature2.name": "ROAS Calculator & KOL Comparison Tool",
    "features.ads.feature2.desc":
      "Compare costs and effectiveness between AI spokespersons and traditional influencers.",
    "features.ads.feature3.name": "Automated Budget Optimization",
    "features.ads.feature3.desc":
      "AI automatically adjusts spend based on cost-per-conversion and performance goals.",
    "features.ads.feature4.name": "AI Audience Targeting Suggestions",
    "features.ads.feature4.desc":
      "Get custom audience and lookalike audience recommendations based on real data.",
    "features.ads.feature5.name": "Automated Creative A/B Testing",
    "features.ads.feature5.desc":
      "Auto-test headlines, images, and CTAs to find the highest-performing ad variations.",
    "features.ads.feature6.name": "Real-Time Performance Alerts",
    "features.ads.feature6.desc":
      "Instant alerts for underperforming campaigns or low budget - prevent wasted spend.",
    "features.ads.metric1.name": "Measurement metrics",
    "features.ads.metric1.value": "8+ metrics",
    "features.ads.metric1.note":
      "Impressions, CTR, Conversions, CPA, ROAS, LTV, NPS",
    "features.ads.metric2.name": "ROAS Calculator",
    "features.ads.metric2.value": "Built-in",
    "features.ads.metric2.note":
      "Direct comparison of AI spokesperson cost vs traditional approaches",
    "features.ads.metric3.name": "Auto Report",
    "features.ads.metric3.value": "Weekly/Monthly",
    "features.ads.metric3.note":
      "Automatically send performance reports via Email",

    // Registration Success
    "registration.skipLink": "Skip to main content",
    "registration.successIcon": "Success icon",
    "registration.successTitle": "Registration Successful!",
    "registration.successMessage":
      "Thank you for your interest in Uniksmart. Our team will contact you within 24 hours.",
    "registration.loginLabel": "Login to system",
    "registration.loginButton": "Login Now",
    "registration.registerAnotherLabel": "Register another person",
    "registration.registerAnotherButton": "Register another account",
    "registration.backToHome": "Back to home",

    // Registration Form
    "registration.form.trial": "Start 14-day free trial",
    "registration.form.hero.title": "Elevate Enterprise Marketing with AI",
    "registration.form.hero.subtitle":
      "Over 2,500+ businesses have successfully transformed digitally with Uniksmart. Join today to receive exclusive benefits.",
    "registration.form.benefit1": "1-on-1 expert consultation",
    "registration.form.benefit2": "Live product demo",
    "registration.form.benefit3": "Get special offers for SMBs",
    "registration.form.rating": "4.9/5 based on user reviews",
    "registration.form.testimonial":
      "Uniksmart helped us optimize our workflow and increase conversion rate by 30% in the first 3 months.",
    "registration.form.title": "Sign up for free trial",
    "registration.form.subtitle":
      "Fill in the information to start experiencing Uniksmart",
    "registration.form.package.starter": "Professional",
    "registration.form.package.starterTitle": "For individuals",
    "registration.form.package.starterDesc":
      "Free full-feature experience for 1 month.",
    "registration.form.package.business": "Business",
    "registration.form.package.businessTitle": "For organizations",
    "registration.form.package.businessDesc":
      "Custom solution with admin and permissions.",
    "registration.form.company.name": "Company / Organization name",
    "registration.form.company.namePlaceholder": "Enter official name",
    "registration.form.company.taxCode": "Tax ID (TIN)",
    "registration.form.company.taxCodePlaceholder": "Example: 0101234567",
    "registration.form.company.type": "Business type",
    "registration.form.company.typePlaceholder": "Select business type",
    "registration.form.company.typeEnterprise": "LLC/JSC",
    "registration.form.company.typeHousehold": "Household business",
    "registration.form.company.typeOther": "Other organization",
    "registration.form.company.address": "Office address",
    "registration.form.company.addressPlaceholder":
      "House number, street, District, City/Province",
    "registration.form.contact.fullName": "Full name",
    "registration.form.contact.fullNamePlaceholder": "John Doe",
    "registration.form.contact.firstName": "First name",
    "registration.form.contact.firstNamePlaceholder": "John",
    "registration.form.contact.lastName": "Last name",
    "registration.form.contact.lastNamePlaceholder": "Doe",
    "registration.form.contact.email": "Work email",
    "registration.form.contact.emailPlaceholder": "name@company.com",
    "registration.form.contact.phone": "Phone number",
    // Comparison table values (professional / business)
    "pricing.enterprise.comparison.value.socialAccounts.professional":
      "3 platforms",
    "pricing.enterprise.comparison.value.socialAccounts.business":
      "<b>7+ platforms</b>",
    "pricing.enterprise.comparison.value.platformsSupported.professional":
      "3 platforms",
    "pricing.enterprise.comparison.value.platformsSupported.business":
      "<b>7+ platforms</b>",
    "pricing.enterprise.comparison.value.multiLang.professional":
      "30+ languages",
    "pricing.enterprise.comparison.value.multiLang.business": "30+ languages",
    "pricing.enterprise.comparison.value.aiText.professional": "Unlimited",
    "pricing.enterprise.comparison.value.aiText.business": "Unlimited",
    "pricing.enterprise.comparison.value.aiImages.professional": "500/month",
    "pricing.enterprise.comparison.value.aiImages.business":
      "<b>5,000/month</b>",
    "pricing.enterprise.comparison.value.aiVideos.professional":
      "20 videos/month",
    "pricing.enterprise.comparison.value.aiVideos.business":
      "<b>100 videos/month</b>",
    "pricing.enterprise.comparison.value.onboarding.professional": "Dedicated",
    "pricing.enterprise.comparison.value.onboarding.business": "Dedicated",
    "pricing.enterprise.comparison.value.strategy.business": "<b>Dedicated</b>",
    "pricing.enterprise.comparison.value.supportResponse.business":
      "<b>Priority 2-hour response</b>",
    "registration.form.contact.jobPosition": "Job position",
    "registration.form.contact.jobPositionPlaceholder": "Select position",
    "registration.form.jobPosition.ceo": "CEO / Director",
    "registration.form.jobPosition.cmo": "CMO",
    "registration.form.jobPosition.marketingDirector": "Marketing Director",
    "registration.form.jobPosition.marketingManager": "Marketing Manager",
    "registration.form.jobPosition.contentManager": "Content Manager",
    "registration.form.jobPosition.socialMediaManager": "Social Media Manager",
    "registration.form.jobPosition.designer": "Designer",
    "registration.form.jobPosition.developer": "Developer",
    "registration.form.jobPosition.growthHacker": "Growth Hacker",
    "registration.form.jobPosition.other": "Other",
    "registration.form.required": "Required",
    "registration.form.submit.processing": "Processing...",
    "registration.form.submit.button": "Start free trial",
    "registration.form.login.text": "Already have an account?",
    "registration.form.login.link": "Login now",
    "registration.form.terms.text": "By signing up, you agree to our",
    "registration.form.terms.service": "Terms of Service",
    "registration.form.terms.and": "and",
    "registration.form.terms.privacy": "Privacy Policy",

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
    "pricing.popular": "Best Value",
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
    "pricing.enterprise.save20": "Save 20%",
    "pricing.enterprise.startup.name": "Professional",
    "pricing.enterprise.startup.description": "For growing businesses",
    "pricing.enterprise.startup.cta": "Start Free Trial",
    "pricing.enterprise.growth.name": "Business",
    "pricing.enterprise.growth.description": "For agencies & scaling companies",
    "pricing.enterprise.growth.cta": "Get Started",
    "pricing.enterprise.enterprise.name": "Enterprise",
    "pricing.enterprise.enterprise.description":
      "For retail chains and custom enterprise solutions",
    "pricing.enterprise.enterprise.cta": "Contact Sales",
    "pricing.enterprise.custom": "Custom",
    "pricing.enterprise.perMonth": "/month",
    "pricing.enterprise.perYear": "/year",
    "pricing.enterprise.comparison.title": "Detailed Feature Comparison",
    "pricing.enterprise.comparison.features": "FEATURES",
    "pricing.enterprise.comparison.feature1": "Global LLM Orchestration",
    "pricing.enterprise.comparison.feature2":
      "Localized Content Gen (40+ Languages)",
    "pricing.enterprise.comparison.feature3":
      "Predictive Performance Analytics",
    "pricing.enterprise.comparison.feature4": "Security & API Limits",
    "pricing.enterprise.comparison.feature5": "Deployment Type",
    "pricing.enterprise.comparison.priceMonthly": "Monthly Price",
    "pricing.enterprise.comparison.priceAnnual": "Annual Price (20% off)",
    "pricing.enterprise.comparison.freeTrial": "Free Trial",
    "pricing.enterprise.comparison.socialAccounts": "Social Media Accounts",
    "pricing.enterprise.comparison.platformsSupported": "Platforms Supported",
    "pricing.enterprise.comparison.multiLang": "Multi-language Publishing",
    "pricing.enterprise.comparison.aiText": "AI Text Posts",
    "pricing.enterprise.comparison.aiImages": "AI Images/month",
    "pricing.enterprise.comparison.aiVideos": "AI Videos/month",
    "pricing.enterprise.comparison.aiBanner": "AI Banner & Thumbnail",
    "pricing.enterprise.comparison.customModel": "Custom AI Model",
    "pricing.enterprise.comparison.basicAnalytics": "Basic Analytics",
    "pricing.enterprise.comparison.advancedAnalytics": "Advanced Analytics",
    "pricing.enterprise.comparison.roi": "ROI Tracking",
    "pricing.enterprise.comparison.abTesting": "A/B Testing",
    "pricing.enterprise.comparison.onboarding": "1-on-1 Onboarding",
    "pricing.enterprise.comparison.strategy": "Strategy Consultation",
    "pricing.enterprise.comparison.accountManager": "Account Manager",
    "pricing.enterprise.comparison.supportResponse": "Support Response",
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
    "pricing.enterprise.startup.feature8": "20 social media channels",
    "pricing.enterprise.startup.feature9":
      "Supported platforms: Facebook, Instagram, TikTok",
    "pricing.enterprise.startup.feature10":
      "Multi-language publishing: 30+ languages",
    "pricing.enterprise.startup.feature11": "AI text posts: Unlimited",
    "pricing.enterprise.startup.feature12": "AI images: 500/month",
    "pricing.enterprise.startup.feature13":
      "AI videos: 20 videos/month (up to 3 min each)",
    "pricing.enterprise.startup.feature14":
      "Brand voice training: 3 brand voices",
    "pricing.enterprise.startup.feature15": "Content Calendar ",
    "pricing.enterprise.startup.feature16": "Best Time to Post AI ",
    "pricing.enterprise.startup.feature17": "Bulk upload: Up to 100 posts",
    "pricing.enterprise.startup.feature18":
      "Performance reports: Weekly reports",
    "pricing.enterprise.startup.feature19":
      "Competitor tracking: 3 competitors",
    "pricing.enterprise.startup.feature20":
      "1-on-1 onboarding: Dedicated session",
    "pricing.enterprise.startup.feature21":
      "Strategy consultation: Monthly sessions",
    "pricing.enterprise.startup.feature22":
      "Implementation support: Full setup assistance",
    "pricing.enterprise.startup.feature23": "Dedicated account manager ",
    "pricing.enterprise.startup.feature24":
      "Support response: Priority 2-hour response",
    "pricing.enterprise.startup.feature25":
      "Support channels: Email + Chat + Phone",
    "pricing.enterprise.growth.feature1": "All Startup features",
    "pricing.enterprise.growth.feature2": "Up to 25 AI Videos/month",
    "pricing.enterprise.growth.feature3": "2,500 content posts/month",
    "pricing.enterprise.growth.feature10": "Social Media Accounts: Unlimited",
    "pricing.enterprise.growth.feature11":
      "Supported Platforms: Facebook, Instagram, TikTok, YouTube, LinkedIn, X, Threads",
    "pricing.enterprise.growth.feature12":
      "Multi-language Publishing: 30+ languages",
    "pricing.enterprise.growth.feature13": "AI Text Posts: Unlimited",
    "pricing.enterprise.growth.feature14":
      "AI Images: 5,000/month (10x Professional)",
    "pricing.enterprise.growth.feature15":
      "AI Videos: 100 videos/month (5x Professional)",
    "pricing.enterprise.growth.feature16": "AI Banner & Thumbnail Design",
    "pricing.enterprise.growth.feature17":
      "Brand Voice Training: Unlimited brand voices",
    "pricing.enterprise.growth.feature19": "Auto-scheduling: Unlimited",
    "pricing.enterprise.growth.feature20": "Content Calendar: Advanced",
    "pricing.enterprise.growth.feature21": "Best Time to Post AI",
    "pricing.enterprise.growth.feature22": "Bulk Upload: Unlimited",
    "pricing.enterprise.growth.feature23":
      "Analytics Dashboard: Advanced Analytics",
    "pricing.enterprise.growth.feature24": "ROI Tracking: Full ROI measurement",
    "pricing.enterprise.growth.feature25":
      "AI Performance Insights: AI-powered recommendations",
    "pricing.enterprise.growth.feature26": "A/B Testing: Campaign optimization",
    "pricing.enterprise.growth.feature27":
      "Competitor Tracking: Unlimited competitors",
    "pricing.enterprise.growth.feature28":
      "1-on-1 Onboarding: Dedicated session",
    "pricing.enterprise.growth.feature29":
      "Strategy Consultation: Monthly sessions",
    "pricing.enterprise.growth.feature30":
      "Implementation Support: Full setup assistance",
    "pricing.enterprise.growth.feature31": "Dedicated Account Manager",
    "pricing.enterprise.growth.feature32":
      "Support Response: Priority 2-hour response",
    "pricing.enterprise.growth.feature33":
      "Support Channels: Email + Chat + Phone",
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
    "roi.title.brand": "Uniksmart",
    "roi.title": "Why Choose Uniksmart?",
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
    "roi.aiSystem": "Uniksmart",
    "roi.ai.title": "Uniksmart",
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
    "roi.cta.text": "Save costs and increase productivity 10x with Uniksmart",
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
    "roi.row1.traditional": "~$800/month",
    "roi.row1.traditionalDesc": "(Staff + Tools)",
    "roi.row1.ai": "~$399/month",
    "roi.row1.aiDesc": "(All-in-one)",
    "roi.row1.savings": "Save ~50% ",
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
    "roi.row4.ai": "10+ channels",
    "roi.row4.aiDesc": "(Simultaneous)",
    "roi.row5.criteria": "Operation",
    "roi.row5.traditional": "8-10 hours",
    "roi.row5.traditionalDesc": "/day",
    "roi.row5.ai": "24/7",
    "roi.row5.aiDesc": "(Automated)",
    "roi.header.traditional.manual": "Manual Approach",
    "roi.header.traditional": "Traditional Marketing",
    "roi.header.recommended": "RECOMMENDED",
    "roi.header.Uniksmart": "Uniksmart AI",
    "roi.header.Uniksmart.auto": "Automated 100%",
    "roi.mobile.traditional": "Traditional",
    "roi.cta.ready": "Ready to Transform with AI Marketing?",
    "roi.cta.start": "Get Started",
    "roi.cta.learn": "Learn More",
    "roi.disclaimer":
      "* Data based on survey of 500+ Vietnamese businesses using Uniksmart",

    // Why Choose Section
    "whyChoose.title": "Why Choose Uniksmart?",
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
    "whyChoose.mockup.title": "Uniksmart",
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
    "whyChoose.optura.brand": "Uniksmart",
    "whyChoose.optura.subtitle":
      "Compare traditional marketing workflows vs AI-powered automation solution",
    "whyChoose.optura.criteria": "Comparison Criteria",
    "whyChoose.optura.traditional": "Traditional Method",
    "whyChoose.optura.traditional.manual": "Manual Approach",
    "whyChoose.optura.bestChoice": "BEST CHOICE",
    "whyChoose.optura.Uniksmart": "Uniksmart",
    "whyChoose.optura.Uniksmart.auto": "Automated Solution",
    "whyChoose.optura.guarantee.title": "Guaranteed Results",
    "whyChoose.optura.guarantee.desc":
      "Metrics based on average data from 500+ businesses that have transitioned to the Uniksmart ecosystem. 80% cost savings calculated on total staffing and production budget.",
    "whyChoose.optura.tryNow": "Try Now",
    "whyChoose.optura.consult.title": "Need Expert Consultation?",
    "whyChoose.optura.consult.desc":
      "Our team of experts is ready to provide free consultation to help you find the best solution for your business.",
    "whyChoose.optura.consultBtn": "Get Consultation",
    "whyChoose.optura.watchDemo": "Watch Demo",
    "whyChoose.optura.mobilePlatform": "Uniksmart Platform",
    // Why Choose Optura Comparison Rows
    "whyChoose.optura.row1.criteria": "Cost",
    "whyChoose.optura.row1.traditional": "~$555 / month",
    "whyChoose.optura.row1.Uniksmart": "~$255 / month",
    "whyChoose.optura.row1.savings": "Save ~54%",
    "whyChoose.optura.row2.criteria": "Video Output",
    "whyChoose.optura.row2.traditional": "10–15 videos/month",
    "whyChoose.optura.row2.Uniksmart": "~25 videos/month",
    "whyChoose.optura.row3.criteria": "Time per Video",
    "whyChoose.optura.row3.traditional": "1–2 days/video",
    "whyChoose.optura.row3.Uniksmart": "~2 minutes/video",
    "whyChoose.optura.row4.criteria": "Multitasking",
    "whyChoose.optura.row4.traditional": "Single task",
    "whyChoose.optura.row4.Uniksmart": "Video + Images + Articles + Chatbot",
    "whyChoose.optura.row5.criteria": "Operation",
    "whyChoose.optura.row5.traditional":
      "Requires shifts, leave, manual oversight",
    "whyChoose.optura.row5.Uniksmart": "Automated 24/7",

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
      "© 2024 Uniksmart. All rights reserved. Professional trust signals for Vietnam and International markets.",
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
    "faq.q1": "What is Uniksmart?",
    "faq.a1":
      "Uniksmart is a platform that unifies leading AI tools like Video creation, Content writing, Image design... into a single system. Businesses only need to provide one account per employee to flexibly use multiple AI tools, instead of buying and managing separate accounts.",
    "faq.q2": "What does Uniksmart support for businesses?",
    "faq.a2":
      "Save costs & time: Buy once - use for the entire team. Centralized management: Allocate, revoke, adjust AI quotas for employees with just a few operations. Detailed reports: Leaders can easily track and evaluate AI adoption levels in the business.",
    "faq.q3": "Can I use Uniksmart for free?",
    "faq.a3":
      "Yes. Uniksmart offers a 7-day free trial with full features. Customers can upgrade to paid plans for more Credits and access to all advanced AI tools.",
    "faq.q4": "Does Uniksmart work on mobile phones?",
    "faq.a4":
      "Yes. Uniksmart fully supports iOS and Android. The interface is optimized for mobile experience, allowing staff to use AI anytime, anywhere.",
    "faq.q5": "Does Uniksmart update with the latest AI tools?",
    "faq.a5":
      "We constantly strive to review and integrate the most advanced AI tools, with priority on balancing customer benefits and cost efficiency. When new tools emerge, Uniksmart will evaluate and consider updates to help customers maximize value from AI.",

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

    // CTA Modal
    "modal.cta.dontMiss": "DON'T MISS OUT!",
    "modal.cta.benefit1": "Free Uniksmart demo",
    "modal.cta.benefit2": "Personalized pricing for your business scale",
    "modal.cta.benefit3": "1:1 consultation with Marketing experts",
    "modal.cta.stats.businesses": "Businesses trust us",
    "modal.cta.poweredBy": "Powered by Uniksmart",
    "modal.cta.badge": "Just 10s – Get full features demo",
    "modal.cta.title": "GET QUOTE & TRY NOW!",
    "modal.cta.submit": "Get Quote & Free Demo",
    "modal.cta.submitting": "Submitting...",
    "modal.cta.terms": "By signing up, you agree to our",
    "modal.cta.termsLink": "Terms of Service",
    "modal.cta.and": "and",
    "modal.cta.privacyLink": "Privacy Policy",
    "modal.cta.close": "Close",
    "modal.cta.closeModal": "Close modal",
    "modal.cta.success.title": "Registration Successful!",
    "modal.cta.success.message":
      "Thank you for your interest in Uniksmart. Our team will contact you within 24 hours.",
    "modal.cta.submit.sending": "Submitting registration",
    "modal.cta.submit.get": "Get Quote & Free Demo",

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
    "footer.copyright": "© {year} Uniksmart. All rights reserved.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",

    // Terms of Service Page
    "terms.backToHome": "Back to Home",
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last updated: November 24, 2025",
    "terms.viewPrivacy": "View Privacy Policy",
    "terms.registerTrial": "Sign Up for Trial",

    // Privacy Policy Page
    "privacy.backToHome": "Back to Home",
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated: November 24, 2025",
    "privacy.viewTerms": "View Terms of Service",
    "privacy.registerTrial": "Sign Up for Trial",

    // About Hero Section
    "about.hero.breadcrumb.home": "Home",
    "about.hero.breadcrumb.about": "About Us",
    "about.hero.badge": "About Us",
    "about.hero.title": "About Us",
    "about.hero.title.prefix": "Pioneering",
    "about.hero.title.brand": "Uniksmart",
    "about.hero.title.suffix": "Platform",
    "about.hero.subtitle": "Uniksmart",
    "about.hero.description":
      "Multi-channel Digital Marketing Transformation Partner, automating workflow from idea to content publishing.",
    "about.hero.desc":
      "We redefine how businesses operate with an AI-First philosophy, driving comprehensive digital transformation and optimizing automated marketing performance.",
    "about.hero.cta.contact": "Contact Now",
    "about.hero.cta.learn": "Learn More",
    "about.hero.image.alt": "Professional Uniksmart Team",
    "about.hero.stat.uptime": "Uptime",
    "about.hero.stat.operational": "All systems operational",
    "about.hero.stat.businesses": "Businesses",
    "about.cta.trial": "Start Free Trial",
    "about.cta.contact": "Contact Us",

    // About Company Section
    "about.company.title": "Uniksmart",
    "about.company.subtitle":
      "Multi-channel digital transformation partner for Vietnamese businesses",
    "about.company.desc1":
      "Uniksmart is a pioneer in the field of Digital Marketing Transformation in Vietnam. We specialize in providing comprehensive AI Marketing solutions, helping businesses optimize marketing processes and increase business efficiency.",
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
    "about.product.title": "Uniksmart",
    "about.product.subtitle":
      "Comprehensive AI marketing platform, automating every aspect from content creation to multi-channel distribution",
    "about.product.why.title": "Why Choose Uniksmart?",
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
    "about.product.tech.title": "Technology Behind Uniksmart",
    "about.product.tech.subtitle":
      "Integrated with 6 world-leading AI models to deliver optimal results",
    "about.product.stat.businesses": "Businesses",
    "about.product.capabilities.title": "Uniksmart Capabilities",
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
      "We look forward to learning more about your business and how Uniksmart can help you achieve your goals in the digital world.",

    // About Philosophy Section
    "about.philosophy.title": "Our AI-First Philosophy",
    "about.philosophy.description":
      "Uniksmart is not just a tool, but a digital brain that helps businesses enhance competitiveness and maximize operational efficiency through intelligent automation.",
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
      "Seamlessly connecting Uniksmart with existing data and tools",
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
      "Leveraging Uniksmart product capabilities for marketing excellence",
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
    "modal.cta.trust": "Businesses have trusted us",
    "modal.cta.powered": "Powered by Uniksmart",
    "modal.cta.formTitle": "GET QUOTE & TRY NOW!",
    "modal.cta.formBadge": "Just 10s – Get full feature demo",

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
    "heroLight.stats.roi": "+120%",
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
    "heroLight.tech.title": "Technology Behind Uniksmart",
    "heroLight.tech.subtitle": "Integrated with world's leading AI models",

    // Feature Page - Common
    "featurePage.backToFeatures": "Back to Features",
    "featurePage.tryFree": "Try Free",
    "featurePage.viewPricing": "View Pricing",
    "featurePage.keyFeatures": "Key Features",
    "featurePage.keyFeaturesDesc":
      "Discover powerful features that automate your marketing",
    "featurePage.seeInAction": "See It In Action",
    "featurePage.ctaTitle": "Ready to Get Started?",
    "featurePage.ctaDesc":
      "Sign up for a free 14-day trial and experience the power of AI Marketing",
    "featurePage.startTrial": "Start Free Trial",
    "featurePage.exploreMore": "Explore More Features",

    // Feature Page - Chatbot
    "featurePage.chatbot.automated": "AUTOMATED",
    "featurePage.chatbot.hero.title1": "Never Miss Another",
    "featurePage.chatbot.hero.title2": "Customer Conversation",
    "featurePage.chatbot.hero.description":
      "Empower your business with a support agent that never sleeps. Transform inquiries into bookings instantly with human-like precision.",
    "featurePage.chatbot.metric.response": "Response",
    "featurePage.chatbot.metric.accuracy": "Accuracy",
    "featurePage.chatbot.metric.costReduction": "Cost Reduction",
    "featurePage.chatbot.cta.deploy": "Deploy Now",
    "featurePage.chatbot.cta.watchDemo": "Watch Demo",
    "featurePage.chatbot.demo.agentName": "UniksMarK AI Agent",
    "featurePage.chatbot.demo.status": "Online & Ready",
    "featurePage.chatbot.demo.message1":
      "I'm looking for a premium marketing package for my startup. Do you have slots for next week?",
    "featurePage.chatbot.demo.label1": "Product Question",
    "featurePage.chatbot.demo.message2":
      "Absolutely! We have two slots available for our Elite Growth package. Would you like to see our pricing or book a consultation?",
    "featurePage.chatbot.demo.label2": "AI Response",
    "featurePage.chatbot.demo.message3":
      "Let's book a consultation for Monday at 10 AM.",
    "featurePage.chatbot.demo.message4":
      "Success! I've scheduled your consultation for Monday, Oct 21st at 10:00 AM. A calendar invite has been sent to your email.",
    "featurePage.chatbot.demo.label3": "BOOKING CONFIRMED",
    "featurePage.chatbot.problems.heading":
      "Your Customer Support Challenges, Solved",
    "featurePage.chatbot.problems.subheading":
      "Traditional support is slow and expensive. We built the solution for the modern scale-up.",
    "featurePage.chatbot.problems.problem1.title": "The Problem",
    "featurePage.chatbot.problems.problem1.desc":
      "Wait times exceeding 4 hours during peak traffic, leading to 40% bounce rates on checkout pages.",
    "featurePage.chatbot.problems.solution1.title": "The Solution",
    "featurePage.chatbot.problems.solution1.desc":
      "Instant AI triage and resolution. 0 wait time, 100% of the time, regardless of concurrent user volume.",
    "featurePage.chatbot.problems.problem2.title": "High Overheads",
    "featurePage.chatbot.problems.problem2.desc":
      "Scaling human support teams requires massive training budgets and expensive shift management.",
    "featurePage.chatbot.problems.solution2.title": "Cost Efficiency",
    "featurePage.chatbot.problems.solution2.desc":
      "Reduce operational costs by 80% while increasing your support capacity by 10x overnight.",
    "featurePage.chatbot.capabilities.badge": "Core Capabilities",
    "featurePage.chatbot.capabilities.heading": "Everything You Need",
    "featurePage.chatbot.capabilities.bentoDesc":
      "Deploy enterprise-grade AI modules that transform your workflow and boost efficiency by up to 90%.",
    "featurePage.chatbot.capabilities.viewAll": "View all features",
    "featurePage.chatbot.capabilities.learnMore": "Learn more",
    "featurePage.chatbot.capabilities.bento.badge1": "Respond < 2 seconds",
    "featurePage.chatbot.capabilities.bento.badge2": "Real-time",
    "featurePage.chatbot.capabilities.bento.badge3": "95+ languages",
    "featurePage.chatbot.capabilities.bento.badge4": "No intervention",
    "featurePage.chatbot.capabilities.bento.badge5": "Bank-level security",
    "featurePage.chatbot.capabilities.bento.badge6": "99.9% Accuracy",
    "featurePage.chatbot.capabilities.capability1.title":
      "Personalized Consultation",
    "featurePage.chatbot.capabilities.capability1.desc":
      "AI that remembers customer history to provide bespoke advice and product recommendations.",
    "featurePage.chatbot.capabilities.capability2.title": "Instant Quote",
    "featurePage.chatbot.capabilities.capability2.desc":
      "Analyze requirements on the fly and provide accurate pricing estimates in real-time.",
    "featurePage.chatbot.capabilities.capability3.title": "Global Translation",
    "featurePage.chatbot.capabilities.capability3.desc":
      "Support customers in 95+ languages with native-level fluency and cultural awareness.",
    "featurePage.chatbot.capabilities.capability4.title": "Smart Booking",
    "featurePage.chatbot.capabilities.capability4.desc":
      "Integrate directly with your calendar to manage appointments without human intervention.",
    "featurePage.chatbot.capabilities.capability5.title": "Enterprise Security",
    "featurePage.chatbot.capabilities.capability5.desc":
      "End-to-end encryption and GDPR compliance for every single customer interaction.",
    "featurePage.chatbot.capabilities.capability6.title": "Sentiment Analysis",
    "featurePage.chatbot.capabilities.capability6.desc":
      "Detect customer emotion in real-time and escalate complex issues to humans instantly.",
    "featurePage.chatbot.feature5.name": "Multi-language Support",
    "featurePage.chatbot.feature5.desc":
      "Auto-detect and respond in customer's language",
    "featurePage.chatbot.feature6.name": "CRM Integration",
    "featurePage.chatbot.feature6.desc":
      "Sync customer data with your CRM system",
    "featurePage.chatbot.metric1.label": "Always Available",
    "featurePage.chatbot.metric2.label": "Response Time",
    "featurePage.chatbot.metric3.label": "Conversion Rate",
    "featurePage.chatbot.metric4.label": "Wait Time Reduced",
    "featurePage.chatbot.benefitsTitle": "Why Choose AI Chatbot?",
    "featurePage.chatbot.benefitsDesc":
      "Smart AI chatbot helps businesses serve customers 24/7 without staff.",
    "featurePage.chatbot.benefit1": "Instant customer response, no waiting",
    "featurePage.chatbot.benefit2": "Reduce customer service personnel costs",
    "featurePage.chatbot.benefit3": "Collect and qualify high-quality leads",
    "featurePage.chatbot.benefit4": "Easy integration with website and fanpage",

    // Feature Page - Chatbot Demo Live
    "featurePage.chatbot.demo.live.heading": "See AI Chatbot in Action",
    "featurePage.chatbot.demo.live.subheading":
      "Experience how our AI assistant helps customers choose nail services, book appointments, and complete payments seamlessly in the beauty industry.",
    "featurePage.chatbot.demo.live.terminal":
      "DXAI Nails — AI Booking Assistant",
    "featurePage.chatbot.demo.live.message1":
      "Hi! I'm your DXAI Nails assistant. I can help you choose nail services, browse designs, and book appointments. What do you need today?",
    "featurePage.chatbot.demo.live.message2":
      "Hi! I want to get my nails done for a birthday party next week. Something classy but not too flashy. Budget around $60-80.",
    "featurePage.chatbot.demo.live.message3":
      "Great! Here are our best services for a birthday party in your budget:",
    "featurePage.chatbot.demo.live.message3.cta":
      "Which service interests you, or should I suggest more?",
    "featurePage.chatbot.demo.live.message4":
      "Gel Manicure looks great! Can you tell me more? How long does it take?",
    "featurePage.chatbot.demo.live.message5":
      "Great pick! Gel Manicure is our most popular service. Here are the details:",
    "featurePage.chatbot.demo.live.message5.details":
      "Gel Manicure Details:\n• Duration: 45-60 minutes\n• Lasts: 2-3 weeks chip-free\n• Includes: Filing, cuticle care, 2 coats gel, top coat\n• Colors: 200+ shades available\n• Add nail art: +$10-15",
    "featurePage.chatbot.demo.live.message5.note":
      "For a birthday party, I'd suggest adding simple nail art like glitter or small gems for extra sparkle!",
    "featurePage.chatbot.demo.live.message6":
      "Love it! I'd like Gel Manicure with glitter nail art. Can I book right now?",
    "featurePage.chatbot.demo.live.message7":
      "Added to your appointment! Would you like any add-ons?",
    "featurePage.chatbot.demo.live.message7.cart":
      "Selected Services:\n• Gel Manicure — $65.00\n• Glitter Nail Art — $12.00\n• Total: $77.00",
    "featurePage.chatbot.demo.live.message7.cta":
      "Want to add more services or book now?",
    "featurePage.chatbot.demo.live.message8":
      "Add a Paraffin Hand Treatment too. Then let's book!",
    "featurePage.chatbot.demo.live.message9":
      "Paraffin Hand Treatment added! Here are available slots next week:",
    "featurePage.chatbot.demo.live.message9.summary":
      "Booking Summary:\n• Gel Manicure — $65.00\n• Glitter Nail Art — $12.00\n• Paraffin Hand Treatment — $25.00\n• Total Duration: ~90 minutes\n• Total: $102.00",
    "featurePage.chatbot.demo.live.message9.cta":
      "Pick a time that works for you!",
    "featurePage.chatbot.demo.live.message10":
      "I'll take Saturday at 10:00 AM! My name is Linh Nguyen, phone 0901-234-567.",
    "featurePage.chatbot.demo.live.message11":
      "Thanks Linh! Confirming your appointment now...",
    "featurePage.chatbot.demo.live.message11.processing":
      "Checking availability...",
    "featurePage.chatbot.demo.live.message11.secure":
      "Confirming with nail technician",
    "featurePage.chatbot.demo.live.message11.success": "Booking confirmed!",
    "featurePage.chatbot.demo.live.message11.order":
      "Appointment Confirmation #DXAI-N-2025-0341",
    "featurePage.chatbot.demo.live.message11.shipping":
      "Appointment Details:\nLinh Nguyen\nSaturday, Jan 25, 2025 — 10:00 AM\nNail Tech: Jessica T.",
    "featurePage.chatbot.demo.live.message11.delivery":
      "Estimated duration: 90 min (10:00 - 11:30 AM)",
    "featurePage.chatbot.demo.live.message11.email":
      "Confirmation sent via SMS to 0901-234-567",
    "featurePage.chatbot.demo.live.message11.tracking":
      "Auto-reminder 24 hours before appointment",
    "featurePage.chatbot.demo.live.message11.cta":
      "Anything else I can help with, Linh?",
    "featurePage.chatbot.demo.live.message12":
      "Thank you so much! So convenient. Can I prepay?",
    "featurePage.chatbot.demo.live.message13": "Of course, Linh!",
    "featurePage.chatbot.demo.live.message13.email":
      "I've sent a payment link via SMS. You can also pay at the salon.",
    "featurePage.chatbot.demo.live.message13.details":
      "Appointment Details:\n• Ref: #DXAI-N-2025-0341\n• Services: Gel Manicure + Nail Art + Paraffin\n• Total: $102.00\n• Time: Saturday, 10:00 AM",
    "featurePage.chatbot.demo.live.message13.ref":
      "Please arrive 5 minutes early so your nail tech can prep. Enjoy your beautiful new nails!",
    "featurePage.chatbot.demo.live.message13.closing":
      "Have an amazing birthday party!",
    "featurePage.chatbot.demo.live.placeholder": "Type your message...",
    "featurePage.chatbot.demo.live.send": "Send",
    "featurePage.chatbot.demo.live.product1.name": "Classic Manicure",
    "featurePage.chatbot.demo.live.product1.price": "$35.00",
    "featurePage.chatbot.demo.live.product2.name": "Gel Manicure",
    "featurePage.chatbot.demo.live.product2.price": "$65.00",
    "featurePage.chatbot.demo.live.product3.name": "Acrylic Full Set",
    "featurePage.chatbot.demo.live.product3.price": "$75.00",
    "featurePage.chatbot.demo.live.buy": "Book Now",
    "featurePage.chatbot.demo.live.addToCart": "Add Service",
    "featurePage.chatbot.demo.live.addon1.name": "Paraffin Hand Treatment",
    "featurePage.chatbot.demo.live.addon1.price": "$25.00",
    "featurePage.chatbot.demo.live.addon2.name": "Basic Nail Art",
    "featurePage.chatbot.demo.live.addon2.price": "$15.00",

    // Feature Page - Chatbot Steps
    "featurePage.chatbot.steps.heading": "Get Started in",
    "featurePage.chatbot.steps.headingHighlight": "3 Simple Steps",
    "featurePage.chatbot.steps.subheading":
      "Our platform is designed for rapid deployment without sacrificing depth.",
    "featurePage.chatbot.steps.badge": "Total setup time: Under 1 hour",
    "featurePage.chatbot.steps.step1.title": "Train",
    "featurePage.chatbot.steps.step1.desc":
      "Connect your help center, docs, or website URL. Our AI indexes your data in minutes, building a comprehensive knowledge base automatically.",
    "featurePage.chatbot.steps.step1.link": "Learn about ingestion",
    "featurePage.chatbot.steps.step2.title": "Customize",
    "featurePage.chatbot.steps.step2.desc":
      "Define brand voice, persona, and handoff rules. Design the UI to match your brand perfectly using our visual editor with real-time preview.",
    "featurePage.chatbot.steps.step2.link": "Explore customization",
    "featurePage.chatbot.steps.step3.title": "Deploy",
    "featurePage.chatbot.steps.step3.desc":
      "Add a single line of code to your site or connect via API to start resolving tickets instantly. Watch as support volume drops immediately.",
    "featurePage.chatbot.steps.step3.link": "View integration guide",

    // Feature Page - Chatbot Industries
    "featurePage.chatbot.industries.heading": "Built for Every Industry",
    "featurePage.chatbot.industries.ecommerce.name": "E-commerce",
    "featurePage.chatbot.industries.realestate.name": "Real Estate",
    "featurePage.chatbot.industries.education.name": "Education",
    "featurePage.chatbot.industries.healthcare.name": "Healthcare",
    "featurePage.chatbot.industries.commonQuery": "Common Query",
    "featurePage.chatbot.industries.aiResponse": "AI Response",
    "featurePage.chatbot.industries.readyBoost": "Ready to boost your metrics?",
    "featurePage.chatbot.industries.description":
      "Our specialized models are pre-trained on industry-specific datasets to ensure high accuracy from day one.",
    "featurePage.chatbot.industries.cta.start": "Start Scaling",
    "featurePage.chatbot.industries.cta.view": "View All Industries",
    "featurePage.chatbot.industries.ecommerce.query":
      "Where is my package and can I change size?",
    "featurePage.chatbot.industries.ecommerce.response":
      "Connects to Shopify API, provides real-time tracking, and checks inventory for size swaps automatically.",
    "featurePage.chatbot.industries.ecommerce.stat1": "Ticket Deflection",
    "featurePage.chatbot.industries.ecommerce.stat2": "ROI Increase",
    "featurePage.chatbot.industries.realestate.query":
      "I need to schedule a 3-bedroom viewing in District 2 area.",
    "featurePage.chatbot.industries.realestate.response":
      "Analyzes preferences and suggests 5 best-match listings, auto-schedules viewing with agent.",
    "featurePage.chatbot.industries.realestate.stat1": "Lead Response Rate",
    "featurePage.chatbot.industries.realestate.stat2": "Faster Close Rate",
    "featurePage.chatbot.industries.education.query":
      "What's the tuition for MBA program and when's the application?",
    "featurePage.chatbot.industries.education.response":
      "Provides cost breakdown, timeline, and step-by-step application guide with links to financial aid.",
    "featurePage.chatbot.industries.education.stat1": "Faster Response",
    "featurePage.chatbot.industries.education.stat2": "Enrollment Increase",
    "featurePage.chatbot.industries.healthcare.query":
      "I need to book a general checkup with a cardiologist.",
    "featurePage.chatbot.industries.healthcare.response":
      "Checks doctor availability, verifies insurance, and books HIPAA-compliant appointment.",
    "featurePage.chatbot.industries.healthcare.stat1": "Booking Accuracy",
    "featurePage.chatbot.industries.healthcare.stat2": "No-Show Reduction",

    // Feature Page - Content
    "featurePage.content.hero.title1": "Create Stunning Content in",
    "featurePage.content.hero.title2": "Seconds",
    "featurePage.content.hero.title3": "Not Hours",
    "featurePage.content.hero.description":
      "Unleash the power of specialized AI trained for high-end marketing visuals, product photography, and brand-consistent social content.",
    "featurePage.content.metric.perImage": "Per Image",
    "featurePage.content.metric.resolution": "Resolution",
    "featurePage.content.metric.commercial": "Commercial Rights",
    "featurePage.content.cta.generate": "Try It Now",
    "featurePage.content.cta.viewGallery": "View Gallery",
    "featurePage.content.problems.title": "Content Creation Bottleneck?",
    "featurePage.content.problems.subtitle":
      "Stop wasting resources on outdated workflows.",
    "featurePage.content.problems.oldWay.title": "The Old Way",
    "featurePage.content.problems.oldWay.problem1.title": "Manual Photoshoots",
    "featurePage.content.problems.oldWay.problem1.desc":
      "Days of planning, travel, and expensive gear rental.",
    "featurePage.content.problems.oldWay.problem2.title":
      "Endless Revision Rounds",
    "featurePage.content.problems.oldWay.problem2.desc":
      "Waiting 48h for basic retouches and lighting fixes.",
    "featurePage.content.problems.oldWay.problem3.title": "Stock Image Burnout",
    "featurePage.content.problems.oldWay.problem3.desc":
      "Generic visuals that everyone else is already using.",
    "featurePage.content.problems.UniksmartWay.title": "The Uniksmart Way",
    "featurePage.content.problems.UniksmartWay.solution1.title":
      "Instant Photorealism",
    "featurePage.content.problems.UniksmartWay.solution1.desc":
      "Generate studio-quality scenes from a simple text prompt.",
    "featurePage.content.problems.UniksmartWay.solution2.title":
      "Lightning-Fast Iteration",
    "featurePage.content.problems.UniksmartWay.solution2.desc":
      "Change colors, lighting, or props in under 10 seconds.",
    "featurePage.content.problems.UniksmartWay.solution3.title":
      "True Brand Originality",
    "featurePage.content.problems.UniksmartWay.solution3.desc":
      "Unique assets that match your brand DNA perfectly.",
    "featurePage.content.capabilities.badge": "The Studio Ecosystem",
    "featurePage.content.capabilities.title": "Your Complete AI Content Studio",
    "featurePage.content.capabilities.aiStudio.title": "AI Image Studio",
    "featurePage.content.capabilities.aiStudio.description":
      "The world's most advanced prompt-to-image engine specifically tuned for marketing, fashion, and product design.",
    "featurePage.content.capabilities.aiStudio.cta": "Enter Studio",
    "featurePage.content.capabilities.aiStudio.badge": "v4.2 PRO ENGINE",
    "featurePage.content.capabilities.characterEngine.title":
      "Character Consistency Engine",
    "featurePage.content.capabilities.characterEngine.description":
      "Ensure your AI models look exactly the same across every campaign, outfit, and setting.",
    "featurePage.content.capabilities.characterEngine.cta": "Maintain Brand ID",
    "featurePage.content.demo.badge": "Interactive Studio",
    "featurePage.content.demo.title": "Try AI Image Generator — Free",
    "featurePage.content.demo.description":
      "Transform your product concepts into high-converting visual assets instantly.",
    "featurePage.content.demo.uploadTitle": "Drop product image here",
    "featurePage.content.demo.uploadDesc": "PNG, JPG up to 10MB",
    "featurePage.content.demo.4kReady": "HIGH QUALITY IMAGE",
    "featurePage.content.demo.promptLabel": "Prompt",
    "featurePage.content.demo.promptPlaceholder":
      "Describe your product scene... e.g. 'A sleek ceramic bottle on a marble pedestal with soft morning light'",
    "featurePage.content.demo.presetMinimalist": "Minimalist",
    "featurePage.content.demo.presetOrganic": "Organic",
    "featurePage.content.demo.presetCinematic": "Cinematic",
    "featurePage.content.demo.styleLabel": "Style",
    "featurePage.content.demo.styleProduct": "Product",
    "featurePage.content.demo.styleLifestyle": "Lifestyle",
    "featurePage.content.demo.styleEcom": "E-com",
    "featurePage.content.demo.aspectLabel": "Aspect Ratio",
    "featurePage.content.demo.generateBtn": "Generate Image",
    "featurePage.content.demo.generating": "Generating...",
    "featurePage.content.demo.freeRemaining":
      "{value} free generations remaining",
    "featurePage.content.demo.downloadHD": "Download HD",
    "featurePage.content.demo.tryAgain": "Try Again",
    "featurePage.content.demo.history": "History",
    "featurePage.content.demo.viewAll": "View All",
    "featurePage.content.demo.field": "Fields",
    "featurePage.content.demo.noImage": "No image have generated yet",
    "featurePage.content.demo.rateLimitError":
      "Unable to check rate limits. Please try again.",
    "featurePage.content.demo.rateLimitLoading": "Loading rate limits...",
    "featurePage.content.demo.noCreditsRemaining":
      "You have no free generation credits remaining. Please upgrade your plan to continue.",
    "featurePage.content.demo.promptRequired":
      "Please enter a prompt to generate an image.",
    "featurePage.content.demo.uploadRequired":
      "Please upload at least one image.",
    "featurePage.content.demo.recaptchaFailed":
      "reCAPTCHA verification failed. Please try again.",
    "featurePage.content.demo.defaultPrompt":
      "Generate high-quality product image",
    "featurePage.content.gallery.title": "Created with Uniksmart AI",
    "featurePage.content.gallery.subtitle":
      "Discover how top brands are scaling their creative output.",
    "featurePage.content.gallery.filter.all": "All",
    "featurePage.content.gallery.filter.product": "Product",
    "featurePage.content.gallery.filter.lifestyle": "Lifestyle",
    "featurePage.content.gallery.filter.social": "Social",
    "featurePage.content.steps.title": "From Idea to Content in 3 Steps",
    "featurePage.content.steps.subtitle":
      "Streamline your creative workflow with our frictionless process.",
    "featurePage.content.steps.step1.title": "Describe",
    "featurePage.content.steps.step1.description":
      "Input a prompt or upload a reference image to define your brand vision and style guidelines.",
    "featurePage.content.steps.step2.title": "Generate",
    "featurePage.content.steps.step2.description":
      "Our AI engine produces 4 high-fidelity variations. Fine-tune details with simple natural language commands.",
    "featurePage.content.steps.step3.title": "Publish",
    "featurePage.content.steps.step3.description":
      "Download high-res assets or push directly to your social channels and ad managers in one click.",
    "featurePage.content.cta.title":
      "Ready to transform your creative workflow?",
    "featurePage.content.cta.description":
      "Join thousands of companies using Uniksmart to scale their visual production effortlessly.",
    "featurePage.content.cta.startTrial": "Start Free Trial",
    "featurePage.content.cta.bookDemo": "Book a Demo",
    "featurePage.content.marketingNeeds.title":
      "Content for Every Marketing Need",
    "featurePage.content.marketingNeeds.social.title": "Social Media",
    "featurePage.content.marketingNeeds.social.desc":
      "Generate viral-ready posts, captions, and hashtags optimized for Instagram, TikTok, and LinkedIn in seconds.",
    "featurePage.content.marketingNeeds.social.feature1":
      "Auto-resize for all platforms",
    "featurePage.content.marketingNeeds.social.feature2":
      "Trending audio suggestions",
    "featurePage.content.marketingNeeds.social.feature3":
      "AI-powered posting schedules",
    "featurePage.content.marketingNeeds.social.cta": "Explore Social Tools",
    "featurePage.content.marketingNeeds.ecommerce.title": "E-commerce",
    "featurePage.content.marketingNeeds.ecommerce.desc":
      "High-converting product descriptions, ad copy, and storefront visuals that turn browsers into buyers.",
    "featurePage.content.marketingNeeds.ecommerce.feature1":
      "SEO-optimized titles",
    "featurePage.content.marketingNeeds.ecommerce.feature2":
      "Dynamic background removal",
    "featurePage.content.marketingNeeds.ecommerce.feature3":
      "Multi-language localized copy",
    "featurePage.content.marketingNeeds.ecommerce.cta": "Boost Sales Now",
    "featurePage.content.marketingNeeds.advertising.title": "Advertising",
    "featurePage.content.marketingNeeds.advertising.desc":
      "A/B test ad variations at scale. Create hundreds of creative iterations for Meta, Google, and Amazon ads.",
    "featurePage.content.marketingNeeds.advertising.feature1":
      "Click-through rate prediction",
    "featurePage.content.marketingNeeds.advertising.feature2":
      "Automatic ad spend tracking",
    "featurePage.content.marketingNeeds.advertising.feature3":
      "High-impact CTA generation",
    "featurePage.content.marketingNeeds.advertising.cta": "Scale Your Ads",
    "featurePage.content.metrics.title": "The Numbers Don't Lie",
    "featurePage.content.metrics.speed.label": "To Create",
    "featurePage.content.metrics.speed.desc":
      "Average time to generate a complete, brand-aligned marketing campaign from a single prompt.",
    "featurePage.content.metrics.quality.label": "Quality",
    "featurePage.content.metrics.quality.desc":
      "Crystal clear resolution for every image and video generated, ready for professional large-scale printing.",
    "featurePage.content.metrics.cost.label": "Creative Fee",
    "featurePage.content.metrics.cost.desc":
      "Eliminate expensive outsourcing costs and multiple revisions. Your internal team becomes a creative powerhouse.",
    "featurePage.content.comparison.title": "See the Difference",
    "featurePage.content.comparison.subtitle":
      "Compare standard generic AI outputs with Uniksmart's brand-tuned neural engine.",
    "featurePage.content.comparison.standardAI": "Standard AI",
    "featurePage.content.comparison.UniksmartPro": "Uniksmart",
    "featurePage.content.comparison.hint":
      "Drag the slider to explore the detail enhancement",

    // Feature Page - Trends
    "featurePage.trends.metric1.label": "Continuous Monitoring",
    "featurePage.trends.metric2.label": "Fast Analysis",
    "featurePage.trends.metric3.label": "Supported Formats",
    "featurePage.trends.metric4.label": "Accuracy",
    "featurePage.trends.benefitsTitle": "Why Choose AI Hot Trends?",
    "featurePage.trends.benefitsDesc":
      "Stay updated with latest trends to keep content viral.",
    "featurePage.trends.benefit1": "Detect viral trends before competitors",
    "featurePage.trends.benefit2": "Get content ideas based on trends",
    "featurePage.trends.benefit3": "Track competitors in real-time",
    "featurePage.trends.benefit4": "Predict upcoming trends with AI",

    // Feature Page - Trends (New Detailed Page)
    "featurePage.trends.hero.badge": "AI-POWERED INTELLIGENCE",
    "featurePage.trends.hero.title1": "Never Miss Another",
    "featurePage.trends.hero.title2": "Viral Trend",
    "featurePage.trends.hero.description":
      "Detect trends 48 hours before competitors. AI analyzes millions of data points to predict viral content with 92% accuracy.",

    // Trends Hero Metrics
    "featurePage.trends.metric.scanning": "Trend Scanning",
    "featurePage.trends.metric.accuracy": "Accuracy",
    "featurePage.trends.metric.earlyDetection": "Early Detection",

    // Trends Demo Visualization
    "featurePage.trends.demo.title": "Trend Dashboard",
    "featurePage.trends.demo.status": "Scanning & Analyzing",
    "featurePage.trends.demo.prediction": "AI Prediction",
    "featurePage.trends.demo.trend1.title": "AI Video Marketing",
    "featurePage.trends.demo.trend1.category": "Technology",
    "featurePage.trends.demo.trend2.title": "Sustainable & Green",
    "featurePage.trends.demo.trend2.category": "Lifestyle",
    "featurePage.trends.demo.aiInsight.label": "AI Insight",
    "featurePage.trends.demo.aiInsight.text":
      "'AI Video' trend is rising fast on TikTok. Recommend creating content within 24h to get ahead.",

    // Trends Capabilities
    "featurePage.trends.capabilities.badge": "Core Capabilities",
    "featurePage.trends.capabilities.heading": "Everything You Need",
    "featurePage.trends.capabilities.bentoDesc":
      "Deploy enterprise-grade AI modules that transform your workflow and boost efficiency by up to 90%.",
    "featurePage.trends.capabilities.learnMore": "Learn more",
    "featurePage.trends.capabilities.bento.badge1": "+142% Velocity",
    "featurePage.trends.capabilities.bento.badge2": "AI Optimized",
    "featurePage.trends.capabilities.bento.badge3": "Accurate Prediction",
    "featurePage.trends.capabilities.bento.badge4": "Real-time",
    "featurePage.trends.capabilities.bento.badge5": "Unlimited Ideas",
    "featurePage.trends.capabilities.bento.badge6": "Automated",
    "featurePage.trends.capabilities.trendDetection.title":
      "Industry Trend Detection",
    "featurePage.trends.capabilities.trendDetection.desc":
      "Spot emerging signals before they peak with our proprietary growth curve analysis engine.",
    "featurePage.trends.capabilities.briefOptimizer.title": "Brief Optimizer",
    "featurePage.trends.capabilities.briefOptimizer.desc":
      "Turn vague ideas into structured briefs using AI.",
    "featurePage.trends.capabilities.realTimeScoring.title":
      "Real-Time Scoring",
    "featurePage.trends.capabilities.realTimeScoring.desc":
      "Live virality potential assessment.",
    "featurePage.trends.capabilities.performancePrediction.title":
      "Performance Prediction",
    "featurePage.trends.capabilities.performancePrediction.desc":
      "Forecast views with extreme accuracy based on historical data.",
    "featurePage.trends.capabilities.performancePrediction.accuracy":
      "Accuracy Rate",
    "featurePage.trends.capabilities.ideationEngine.title":
      "AI Ideation Engine",
    "featurePage.trends.capabilities.ideationEngine.desc":
      "Infinite content angles from one topic.",
    "featurePage.trends.capabilities.campaignBlueprint.title":
      "Campaign Blueprint",
    "featurePage.trends.capabilities.campaignBlueprint.desc":
      "Auto-generated publishing schedules.",

    // Trends Workflow
    "featurePage.trends.workflow.title":
      "From Signal to Strategy: The Workflow",
    "featurePage.trends.workflow.subtitle":
      "A continuous loop of intelligence gathering, analysis, and execution designed to keep you ahead of the curve.",
    "featurePage.trends.workflow.stepLabel": "Step {num}",
    "featurePage.trends.workflow.step1.title": "Global Scanning",
    "featurePage.trends.workflow.step1.desc":
      "Ingesting millions of data points from social & news sources.",
    "featurePage.trends.workflow.step2.title": "Pattern Recognition",
    "featurePage.trends.workflow.step2.desc":
      "AI identifies repeating viral structures and anomalies.",
    "featurePage.trends.workflow.step3.title": "Relevance Filter",
    "featurePage.trends.workflow.step3.desc":
      "Filtering out noise based on your brand niche.",
    "featurePage.trends.workflow.step4.title": "Strategic Map",
    "featurePage.trends.workflow.step4.desc":
      "Mapping trends to your content pillars.",
    "featurePage.trends.workflow.step5.title": "Generation",
    "featurePage.trends.workflow.step5.desc":
      "Drafting high-impact content automatically.",
    "featurePage.trends.workflow.step6.title": "Optimize Loop",
    "featurePage.trends.workflow.step6.desc":
      "Learning from performance to refine future scans.",

    // Trends Stats
    "featurePage.trends.stats.title": "Real Impact, Measured in Viral Growth",
    "featurePage.trends.stats.subtitle":
      "See how Uniksmart transforms content strategies into predictable viral engines.",
    "featurePage.trends.stats.viralIncrease.label": "Viral Increase",
    "featurePage.trends.stats.viralIncrease.note": "Average across beta users",
    "featurePage.trends.stats.timeReduction.label": "Time Reduction",
    "featurePage.trends.stats.timeReduction.note": "From research to posting",
    "featurePage.trends.stats.trendsDetected.label": "Trends Detected",
    "featurePage.trends.stats.trendsDetected.note": "Daily across platforms",

    // Trends Testimonials
    "featurePage.trends.testimonials.title": "Trusted by Industry Leaders",
    "featurePage.trends.testimonials.review1.name": "Sarah Jenkins",
    "featurePage.trends.testimonials.review1.company": "TechFlow",
    "featurePage.trends.testimonials.review1.role": "VP Marketing",
    "featurePage.trends.testimonials.review1.quote":
      "Uniksmart completely revolutionized our content strategy. The trend prediction is scary accurate.",
    "featurePage.trends.testimonials.review2.name": "Mike Ross",
    "featurePage.trends.testimonials.review2.company": "ViralLoop",
    "featurePage.trends.testimonials.review2.role": "Growth Lead",
    "featurePage.trends.testimonials.review2.quote":
      "We cut our research time by 85% and started hitting viral metrics within weeks. A must-have.",
    "featurePage.trends.testimonials.review3.name": "Elena Rodriguez",
    "featurePage.trends.testimonials.review3.company": "NextGen",
    "featurePage.trends.testimonials.review3.role": "CMO",
    "featurePage.trends.testimonials.review3.quote":
      "Finally, a tool that actually understands cross-platform nuance. A game changer for global brands.",

    // Trends Integrations
    "featurePage.trends.integrations.title": "Seamless Integrations",
    "featurePage.trends.integrations.subtitle":
      "Directly push content to your favorite platforms.",

    // Trends Tech Specs
    "featurePage.trends.techSpecs.badge": "Under the Hood",
    "featurePage.trends.techSpecs.title": "Powering the Next Gen of Content",
    "featurePage.trends.techSpecs.subtitle":
      "Built for developers and power users who need raw performance and precision.",
    "featurePage.trends.techSpecs.aiRouting.title": "Advanced AI Routing",
    "featurePage.trends.techSpecs.aiRouting.desc":
      "Dynamic routing between GPT-5, Claude, and Gemini for optimal context handling.",
    "featurePage.trends.techSpecs.languages.title": "75+ Languages",
    "featurePage.trends.techSpecs.languages.desc":
      "Native-level cultural nuance detection across global markets.",
    "featurePage.trends.techSpecs.accuracy.title": "92% Prediction Accuracy",
    "featurePage.trends.techSpecs.accuracy.desc":
      "Proprietary scoring algorithms validated against 50M+ viral posts.",
    "featurePage.trends.techSpecs.apiDocs": "Read the API Docs",

    // Trends CTA
    "featurePage.trends.cta.title": "Start Predicting Trends Today",
    "featurePage.trends.cta.subtitle":
      "Stop guessing what goes viral. Join 10,000+ creators and brands using Uniksmart to dominate the feed.",
    "featurePage.trends.cta.getStarted": "Get Started Free",
    "featurePage.trends.cta.viewPricing": "View Pricing",
    "featurePage.trends.cta.note":
      "No credit card required • 14-day free trial",

    // Feature Page - Video
    "featurePage.video.feature6.name": "Multi-format Export",
    "featurePage.video.feature6.desc":
      "Support YouTube, TikTok, Reels with appropriate aspect ratios",
    "featurePage.video.metric1.label": "Production Time",
    "featurePage.video.metric2.label": "Resolution",
    "featurePage.video.metric3.label": "Cost Savings",
    "featurePage.video.metric4.label": "AI Voices",
    "featurePage.video.benefitsTitle": "Why Choose AI Video Factory?",
    "featurePage.video.benefitsDesc":
      "Produce professional marketing videos at near-zero cost.",
    "featurePage.video.benefit1": "Create videos with virtual KOL in 5 minutes",
    "featurePage.video.benefit2": "No studio, no filming required",
    "featurePage.video.benefit3": "Auto lip-sync, natural AI voice",
    "featurePage.video.benefit4": "Export 4K videos for all platforms",

    // Feature Page - Video (New Sections)
    "featurePage.video.hero.badge": "AI VIDEO 2.0",
    "featurePage.video.hero.title1": "Create Professional Videos",
    "featurePage.video.hero.title2": "Scene by Scene",
    "featurePage.video.hero.description":
      "Transform scripts into cinema-quality video productions in minutes. Choose from 100+ AI avatars and ultra-realistic voiceovers. No editing skills required.",
    "featurePage.video.metric.perVideo": "Per video",
    "featurePage.video.metric.resolution": "Resolution",
    "featurePage.video.metric.aiVoices": "AI Voices",
    "featurePage.video.cta.createFirst": "Create Your First Video",
    "featurePage.video.cta.watchDemo": "Watch Demo",
    "featurePage.video.trust.businesses": "Businesses Trusted",
    "featurePage.video.trust.videosCreated": "Videos Created",
    "featurePage.video.demo.scenes": "SCENES",
    "featurePage.video.demo.rendering": "Rendering Preview...",

    // Video Capabilities Section
    "featurePage.video.capabilities.badge": "CAPABILITIES",
    "featurePage.video.capabilities.heading":
      "Turn text into video with advanced AI",
    "featurePage.video.capabilities.description":
      "Everything you need to create professional videos without a camera or crew.",
    "featurePage.video.capabilities.aiScripts.title": "AI Powered Scripts",
    "featurePage.video.capabilities.aiScripts.desc":
      "Generate production-ready scripts in seconds. Just type your topic and let our LLM do the heavy lifting.",
    "featurePage.video.capabilities.voices.title": "Realistic AI Voices",
    "featurePage.video.capabilities.voices.desc":
      "Human-sounding voiceovers in 50+ languages. Choose from different tones, genders, and accents.",
    "featurePage.video.capabilities.voices.languages": "languages",
    "featurePage.video.capabilities.platform.title": "Set up for success",
    "featurePage.video.capabilities.platform.desc":
      "Optimized for YouTube, TikTok, and Instagram algorithms. Auto-captions and aspect ratios handled instantly.",
    "featurePage.video.capabilities.learnMore": "Learn more",

    // Video Workflow Section
    "featurePage.video.workflow.title":
      "How to generate videos with Uniksmart?",
    "featurePage.video.workflow.subtitle":
      "Turn your ideas into production-ready videos in four simple steps.",
    "featurePage.video.workflow.step1.title": "Prompt",
    "featurePage.video.workflow.step1.desc":
      "Describe your video idea in plain text. Be as detailed as you like.",
    "featurePage.video.workflow.step2.title": "Generate",
    "featurePage.video.workflow.step2.desc":
      "AI analyzes your prompt and creates scenes, script, and voiceover.",
    "featurePage.video.workflow.step3.title": "Edit",
    "featurePage.video.workflow.step3.desc":
      "Customize scenes, swap media, adjust timing, or change the voice.",
    "featurePage.video.workflow.step4.title": "Publish",
    "featurePage.video.workflow.step4.desc":
      "Export your video in up to 4K resolution and share it with the world.",
    "featurePage.video.workflow.learnMore": "See full features list",

    // Video Testimonials Section
    "featurePage.video.testimonials.title": "Trusted by creators worldwide",
    "featurePage.video.testimonials.subtitle":
      "Join 20,000+ creators making videos faster with Uniksmart",
    "featurePage.video.testimonials.1.quote":
      "The best AI video tool I've used. It literally cut my production time by 90%. I can now publish daily without burnout.",
    "featurePage.video.testimonials.1.name": "Sarah Jenkins",
    "featurePage.video.testimonials.1.role": "Content Creator",
    "featurePage.video.testimonials.2.quote":
      "Incredible voice quality. The stock library is massive, I rarely need to look elsewhere for B-roll footage.",
    "featurePage.video.testimonials.2.name": "Mike Thompson",
    "featurePage.video.testimonials.2.role": "Digital Marketer",
    "featurePage.video.testimonials.3.quote":
      "Our agency uses Uniksmart for client explainers. The collaborative features are a game changer for our remote team.",
    "featurePage.video.testimonials.3.name": "Elena Rodriguez",
    "featurePage.video.testimonials.3.role": "Agency Founder",
    "featurePage.video.testimonials.4.quote":
      "The text-to-video workflow is seamless. I just paste my blog post and get a video ready for social media.",
    "featurePage.video.testimonials.4.name": "David Kim",
    "featurePage.video.testimonials.4.role": "Tech Blogger",

    // Video Bento Features Section
    "featurePage.video.bento.title": "Features of AI Video Factory",
    "featurePage.video.bento.subtitle":
      "Everything you need to create professional videos without a camera or crew.",
    "featurePage.video.bento.ambassador.title": "AI Brand Ambassador Videos",
    "featurePage.video.bento.ambassador.desc":
      "Create videos with hyper-realistic AI spokespersons. Choose from our avatar library or upload your own image to create a unique brand spokesperson.",
    "featurePage.video.bento.learnMore": "Learn More",
    "featurePage.video.bento.lipSync.title":
      "Hyper-Realistic Lip Sync Technology",
    "featurePage.video.bento.lipSync.desc":
      "Perfect lip movement synced with AI voice. Advanced deep learning technology delivers a natural video experience like a real person.",
    "featurePage.video.bento.lipSync.syncing": "Syncing...",
    "featurePage.video.bento.creationModes.title":
      "Three Flexible Creation Modes",
    "featurePage.video.bento.creationModes.desc":
      "Flexibility with 3 methods: Script-to-Video from existing scripts, Text-to-Video from any text, or Image-to-Video to transform images into dynamic videos.",
    "featurePage.video.bento.aiVoice.title":
      "Natural AI Voice with Multi-Language Support",
    "featurePage.video.bento.aiVoice.desc":
      "Support for 30+ languages with ultra-realistic AI voices. Customize speed, tone, and style to match your brand.",
    "featurePage.video.bento.multiScene.title":
      "Multi-Scene Editor with AI Layout Suggestions",
    "featurePage.video.bento.multiScene.desc":
      "Intuitive editor with smart AI layout suggestions. Drag and drop scenes, customize transitions, and export 4K quality videos.",
    "featurePage.video.demo.clickToPlay": "Click to play video demo",

    // Video Pricing Section
    "featurePage.video.pricing.title": "Pricing tailored to your needs",
    "featurePage.video.pricing.subtitle":
      "Start for free, upgrade as you scale.",
    "featurePage.video.pricing.monthly": "Monthly",
    "featurePage.video.pricing.yearly": "Yearly",
    "featurePage.video.pricing.save": "Save",
    "featurePage.video.pricing.popular": "Most Popular",
    "featurePage.video.pricing.custom": "Custom",
    "featurePage.video.pricing.mo": "mo",
    "featurePage.video.pricing.free.name": "Free",
    "featurePage.video.pricing.free.desc":
      "Perfect for trying out the power of Uniksmart.",
    "featurePage.video.pricing.free.feature1": "10 mins/week generation",
    "featurePage.video.pricing.free.feature2": "Standard AI voices",
    "featurePage.video.pricing.free.feature3": "Watermarked exports",
    "featurePage.video.pricing.free.feature4": "720p resolution",
    "featurePage.video.pricing.free.cta": "Start Free",
    "featurePage.video.pricing.enterprise.name": "Enterprise",
    "featurePage.video.pricing.enterprise.desc":
      "For teams requiring scalable video production.",
    "featurePage.video.pricing.enterprise.feature1": "Unlimited generation",
    "featurePage.video.pricing.enterprise.feature2":
      "Premium Ultra-realistic voices",
    "featurePage.video.pricing.enterprise.feature3":
      "No watermarks & White label",
    "featurePage.video.pricing.enterprise.feature4": "4K resolution exports",
    "featurePage.video.pricing.enterprise.feature5": "Full API Access",
    "featurePage.video.pricing.enterprise.cta": "Contact Sales",
    "featurePage.video.pricing.needMore": "Need more information?",
    "featurePage.video.pricing.contactSales": "Contact our sales team",

    // Video FAQ Section
    "featurePage.video.faq.title": "Want to know more?",
    "featurePage.video.faq.subtitle":
      "Frequently asked questions about AI Video Factory",
    "featurePage.video.faq.1.question": "Is Uniksmart free to use?",
    "featurePage.video.faq.1.answer":
      "Yes! We offer a free tier with 10 minutes of video generation per week. You can upgrade anytime for more capacity and premium features.",
    "featurePage.video.faq.2.question": "Can I edit the generated video?",
    "featurePage.video.faq.2.answer":
      "Absolutely! Our editor allows you to customize scenes, swap media, adjust timing, and change the voiceover before exporting.",
    "featurePage.video.faq.3.question": "Do I own the copyright to the videos?",
    "featurePage.video.faq.3.answer":
      "Yes, you own full commercial rights to videos you create with paid plans. Free tier has some limitations on commercial use.",
    "featurePage.video.faq.4.question": "What languages are supported?",
    "featurePage.video.faq.4.answer":
      "We support 50+ languages for AI voiceovers including Vietnamese, English, Chinese, Japanese, Korean, and many more.",

    // Video CTA Section
    "featurePage.video.cta.title1": "Turn a prompt into",
    "featurePage.video.cta.title2": "scenes.",
    "featurePage.video.cta.subtitle":
      "Join 5M+ creators using Uniksmart today.",
    "featurePage.video.cta.button": "Generate a video",
    "featurePage.video.cta.note": "No credit card required for free plan.",

    // Feature Page - Email
    "featurePage.email.hero.badge": "New Module v2.0",
    "featurePage.email.hero.title.part1": "Email Marketing",
    "featurePage.email.hero.title.part2": "Automation",
    "featurePage.email.hero.description":
      "100% Automated Customer Care System. Build relationships on autopilot with our enterprise-grade email module that scales with your growth.",
    "featurePage.email.hero.cta.demo": "Request Demo",
    "featurePage.email.hero.cta.video": "See How It Works",
    "featurePage.email.hero.workflow.status": "Workflow Active",
    "featurePage.email.hero.workflow.lastRun": "Last run: 2 mins ago",
    "featurePage.email.hero.workflow.step1": "Welcome Email",
    "featurePage.email.hero.workflow.sent": "Sent",
    "featurePage.email.hero.workflow.step2": "Wait 2 Days",
    "featurePage.email.hero.workflow.completed": "Completed",

    "featurePage.email.benefits.title":
      "Drive growth without increasing headcount",
    "featurePage.email.benefits.subtitle":
      "Scale your communication effectively with tools designed to handle millions of interactions with zero manual oversight.",
    "featurePage.email.benefits.1.name": "Fully Automated Journey",
    "featurePage.email.benefits.1.desc":
      "Set it and forget it workflows that react to user behavior instantly.",
    "featurePage.email.benefits.2.name": "Personalized at Scale",
    "featurePage.email.benefits.2.desc":
      "Dynamic content injection for every single user based on data.",
    "featurePage.email.benefits.3.name": "Higher Engagement",
    "featurePage.email.benefits.3.desc":
      "Timely delivery algorithms ensure your emails land when users are active.",
    "featurePage.email.benefits.4.name": "Zero Manual Work",
    "featurePage.email.benefits.4.desc":
      "Eliminate repetitive tasks and let the AI handle the scheduling.",

    "featurePage.email.journey.title": "Customer Journey Timeline",
    "featurePage.email.journey.subtitle":
      "Visualize how our system nurtures your leads from first contact to loyal advocate.",
    "featurePage.email.journey.viewDocs": "View full documentation",
    "featurePage.email.journey.step1.name": "Welcome Series",
    "featurePage.email.journey.step1.item1": "Instant Trigger",
    "featurePage.email.journey.step1.item2": "Brand Story",
    "featurePage.email.journey.step2.name": "Smart Reminders",
    "featurePage.email.journey.step2.item1": "2 Day Delay",
    "featurePage.email.journey.step2.item2": "Action Prompt",
    "featurePage.email.journey.step3.name": "Feedback Loops",
    "featurePage.email.journey.step3.item1": "Post-Purchase",
    "featurePage.email.journey.step3.item2": "NPS Survey",
    "featurePage.email.journey.step4.name": "Re-marketing",
    "featurePage.email.journey.step4.item1": "Win-back",
    "featurePage.email.journey.step4.item2": "Dynamic Offer",

    "featurePage.email.howItWorks.title": "How automation works",
    "featurePage.email.howItWorks.step1.title": "Connect Your CRM",
    "featurePage.email.howItWorks.step1.desc":
      "One-click integration with Salesforce, HubSpot, or custom API sources to sync contacts instantly.",
    "featurePage.email.howItWorks.step2.title": "Define Smart Triggers",
    "featurePage.email.howItWorks.step2.desc":
      "Set conditions based on user activity, inactivity, purchase history, or custom events.",
    "featurePage.email.howItWorks.step3.title": "Auto-generate Content",
    "featurePage.email.howItWorks.step3.desc":
      "Use our template engine to populate personalized names, products, and suggestions.",
    "featurePage.email.howItWorks.step4.title": "Track & Optimize",
    "featurePage.email.howItWorks.step4.desc":
      "Real-time analytics dashboard shows you open rates, click-throughs, and revenue attribution.",
    "featurePage.email.howItWorks.imageAlt":
      "Data analytics dashboard visualization",
    "featurePage.email.howItWorks.badge.title": "System Optimization Complete",
    "featurePage.email.howItWorks.badge.subtitle":
      "Campaign ROI increased by 24%",

    "featurePage.email.technical.title": "Technical Capabilities",
    "featurePage.email.technical.1.name": "Responsive Design",
    "featurePage.email.technical.1.desc":
      "Templates look perfect on any device automatically.",
    "featurePage.email.technical.2.name": "Smart Tracking",
    "featurePage.email.technical.2.desc":
      "Pixel-perfect open and click tracking capabilities.",
    "featurePage.email.technical.3.name": "CRM Integration",
    "featurePage.email.technical.3.desc":
      "Two-way sync with all major enterprise CRMs.",
    "featurePage.email.technical.4.name": "A/B Testing",
    "featurePage.email.technical.4.desc":
      "Test subject lines and content variants easily.",

    "featurePage.email.useCases.title": "Built for every use case",
    "featurePage.email.useCases.1.badge": "SaaS Onboarding",
    "featurePage.email.useCases.1.title": "User Activation",
    "featurePage.email.useCases.1.desc":
      "Guide new signups through your product features over their first 14 days to increase retention.",
    "featurePage.email.useCases.2.badge": "E-commerce",
    "featurePage.email.useCases.2.title": "Cart Abandonment",
    "featurePage.email.useCases.2.desc":
      "Automatically recover lost sales by sending reminders 1 hour after a cart is left behind.",
    "featurePage.email.useCases.3.badge": "Service Renewals",
    "featurePage.email.useCases.3.title": "Subscription Saver",
    "featurePage.email.useCases.3.desc":
      "Proactively notify customers about upcoming expirations to prevent churn before it happens.",

    "featurePage.email.cta.title":
      "Turn Every Email Into an Automated Revenue Channel",
    "featurePage.email.cta.subtitle":
      "Join 5,000+ enterprise companies scaling their customer relationships with our platform.",
    "featurePage.email.cta.trial": "Start Your Free Trial",
    "featurePage.email.cta.sales": "Talk to Sales",

    "featurePage.email.feature6.name": "Smart Segmentation",
    "featurePage.email.feature6.desc":
      "Auto-categorize customers by behavior and engagement",
    "featurePage.email.metric1.label": "Automation",
    "featurePage.email.metric2.label": "Open Rate Increase",
    "featurePage.email.metric3.label": "Care Stages",
    "featurePage.email.metric4.label": "Operation",
    "featurePage.email.benefitsTitle": "Why Choose Email Automation?",
    "featurePage.email.benefitsDesc":
      "100% automated email marketing with complete customer journey.",
    "featurePage.email.benefit1": "Auto-send emails based on customer journey",
    "featurePage.email.benefit2": "Smart A/B Testing to optimize open rate",
    "featurePage.email.benefit3": "Personalized content for each customer",
    "featurePage.email.benefit4": "Detailed campaign performance reports",

    // Feature Page - Multi Platform
    "featurePage.multiPlatform.hero.badge": "#1 Management Platform",
    "featurePage.multiPlatform.hero.title.part1": "SOCIAL MEDIA MANAGEMENT",
    "featurePage.multiPlatform.hero.title.part2": "MULTI-PLATFORM",
    "featurePage.multiPlatform.hero.description":
      "Streamline workflows, save time, and grow revenue with a centralized platform managing all your social channels from Facebook and TikTok to Zalo.",
    "featurePage.multiPlatform.hero.cta.trial": "Start Free Trial",
    "featurePage.multiPlatform.hero.cta.demo": "Watch Demo",
    "featurePage.multiPlatform.hero.feature1": "No credit card required",
    "featurePage.multiPlatform.hero.feature2": "Cancel anytime",
    "featurePage.multiPlatform.hero.dashboardAlt":
      "Dashboard interface showing analytics graphs and social media metrics",
    "featurePage.multiPlatform.hero.facebook.metric": "+124% Reach",
    "featurePage.multiPlatform.hero.facebook.label": "Facebook Campaign",
    "featurePage.multiPlatform.hero.tiktok.metric": "Viral Video",
    "featurePage.multiPlatform.hero.tiktok.label": "Trending #Marketing",

    "featurePage.multiPlatform.benefits.title": "Why choose us?",
    "featurePage.multiPlatform.benefits.subtitle":
      "Comprehensive solution helping your business break through on every digital platform with modern technology.",
    "featurePage.multiPlatform.benefits.1.name": "Multi-platform Management",
    "featurePage.multiPlatform.benefits.1.desc":
      "Connect Facebook, Instagram, TikTok and Zalo into one unified interface.",
    "featurePage.multiPlatform.benefits.2.name": "90% Less Manual Work",
    "featurePage.multiPlatform.benefits.2.desc":
      "Automate repetitive tasks, bulk post with just one click.",
    "featurePage.multiPlatform.benefits.3.name": "Content Control",
    "featurePage.multiPlatform.benefits.3.desc":
      "Strict approval workflow ensuring content quality before publication.",
    "featurePage.multiPlatform.benefits.4.name": "24/7 AI Engagement",
    "featurePage.multiPlatform.benefits.4.desc":
      "Smart chatbot automatically responds to comments and customer messages anytime.",

    "featurePage.multiPlatform.unifiedInbox.badge": "Unified Social Inbox",
    "featurePage.multiPlatform.unifiedInbox.title":
      "Never miss a customer message",
    "featurePage.multiPlatform.unifiedInbox.description":
      "Manage all comments and messages from every channel in one clean, intuitive interface. Tag conversations, assign to team members, and track interaction history easily.",
    "featurePage.multiPlatform.unifiedInbox.feature1":
      "Centralize messages from Facebook, Instagram, Zalo, TikTok Shop",
    "featurePage.multiPlatform.unifiedInbox.feature2":
      "Smart filters categorize spam, pricing inquiries, and complaints",
    "featurePage.multiPlatform.unifiedInbox.feature3":
      "Save quick reply templates (Saved Replies)",
    "featurePage.multiPlatform.unifiedInbox.cta":
      "Learn more about Unified Inbox",

    "featurePage.multiPlatform.contentPlanning.badge": "Content Planning",
    "featurePage.multiPlatform.contentPlanning.title":
      "Visual content scheduling",
    "featurePage.multiPlatform.contentPlanning.subtitle":
      "Drag and drop to organize posts. Preview layout on each platform before publishing.",
    "featurePage.multiPlatform.contentPlanning.post1.title":
      "New Product Launch",
    "featurePage.multiPlatform.contentPlanning.post1.time": "09:00 AM",
    "featurePage.multiPlatform.contentPlanning.post2.title":
      "Sale Announcement",
    "featurePage.multiPlatform.contentPlanning.post2.time": "14:30 PM",
    "featurePage.multiPlatform.contentPlanning.post3.title": "Review Recap",

    "featurePage.multiPlatform.aiAssistant.badge": "AI Assistant",
    "featurePage.multiPlatform.aiAssistant.title": "Smart Auto-Reply with AI",
    "featurePage.multiPlatform.aiAssistant.description":
      "Automatically detect comment context and respond intelligently. AI helps you maintain high engagement without needing staff to monitor 24/7.",
    "featurePage.multiPlatform.aiAssistant.feature1.name": "Sentiment Analysis",
    "featurePage.multiPlatform.aiAssistant.feature1.desc":
      "Analyze positive/negative sentiment.",
    "featurePage.multiPlatform.aiAssistant.feature2.name": "Auto-Hide Spam",
    "featurePage.multiPlatform.aiAssistant.feature2.desc":
      "Automatically hide comments with bad keywords.",
    "featurePage.multiPlatform.aiAssistant.userComment":
      "Do you have size XL? I need it urgently.",
    "featurePage.multiPlatform.aiAssistant.justNow": "Just now",
    "featurePage.multiPlatform.aiAssistant.processing": "AI analyzing...",
    "featurePage.multiPlatform.aiAssistant.botLabel": "AI Bot Reply",
    "featurePage.multiPlatform.aiAssistant.botReply":
      "Hello! Yes, we currently have size XL available. Please check your inbox for detailed consultation! ❤️",
    "featurePage.multiPlatform.aiAssistant.autoSent": "Auto sent • Instantly",

    "featurePage.multiPlatform.howItWorks.title": "Simple workflow",
    "featurePage.multiPlatform.howItWorks.step1.number": "1",
    "featurePage.multiPlatform.howItWorks.step1.title": "1. Connect",
    "featurePage.multiPlatform.howItWorks.step1.desc":
      "Link your social media accounts.",
    "featurePage.multiPlatform.howItWorks.step2.number": "2",
    "featurePage.multiPlatform.howItWorks.step2.title": "2. Set Up",
    "featurePage.multiPlatform.howItWorks.step2.desc":
      "Configure reply templates and rules.",
    "featurePage.multiPlatform.howItWorks.step3.number": "3",
    "featurePage.multiPlatform.howItWorks.step3.title": "3. Schedule",
    "featurePage.multiPlatform.howItWorks.step3.desc":
      "Compose and schedule posts.",
    "featurePage.multiPlatform.howItWorks.step4.number": "4",
    "featurePage.multiPlatform.howItWorks.step4.title": "4. Publish",
    "featurePage.multiPlatform.howItWorks.step4.desc":
      "System auto-publishes content.",
    "featurePage.multiPlatform.howItWorks.step5.number": "5",
    "featurePage.multiPlatform.howItWorks.step5.title": "5. Analyze",
    "featurePage.multiPlatform.howItWorks.step5.desc":
      "Track performance and optimize.",

    "featurePage.multiPlatform.useCases.title":
      "Built for businesses of all sizes",
    "featurePage.multiPlatform.useCases.1.title": "SME & Startups",
    "featurePage.multiPlatform.useCases.1.desc":
      "Save on headcount, focus on core business development.",
    "featurePage.multiPlatform.useCases.2.title": "Marketing Agencies",
    "featurePage.multiPlatform.useCases.2.desc":
      "Manage dozens of clients from one unified account.",
    "featurePage.multiPlatform.useCases.3.title": "Enterprise Brands",
    "featurePage.multiPlatform.useCases.3.desc":
      "Strict approval workflows, enterprise-grade data security.",
    "featurePage.multiPlatform.useCases.4.title": "E-commerce",
    "featurePage.multiPlatform.useCases.4.desc":
      "Close deals quickly from messages, sync inventory (integration).",

    "featurePage.multiPlatform.cta.title.part1": "Ready to grow",
    "featurePage.multiPlatform.cta.title.highlight": "300%",
    "featurePage.multiPlatform.cta.title.part2": "engagement?",
    "featurePage.multiPlatform.cta.subtitle":
      "Join 10,000+ businesses using Uniksmark to manage social media more effectively every day.",
    "featurePage.multiPlatform.cta.trial": "Start Free Trial",
    "featurePage.multiPlatform.cta.contact": "Contact Sales",

    "featurePage.multiPlatform.metric1.label": "Platforms",
    "featurePage.multiPlatform.metric2.label": "Time Saved",
    "featurePage.multiPlatform.metric3.label": "Auto Response",

    // ============================================================
    // ADS FEATURE PAGE (ENGLISH)
    // ============================================================
    "featurePage.ads.hero.badge": "New AI Engine v2.0",
    "featurePage.ads.hero.title": "AI ADS MANAGEMENT",
    "featurePage.ads.hero.titleHighlight": "& ANALYTICS",
    "featurePage.ads.hero.description":
      "Optimize your ad spend automatically with our AI-driven insights engine. Track, manage, and scale your campaigns across all platforms in one unified dashboard.",
    "featurePage.ads.hero.primaryButton": "Start Free Trial",
    "featurePage.ads.hero.secondaryButton": "Watch Demo",
    "featurePage.ads.hero.trustedBy": "Trusted by 10,000+ marketers",

    "featurePage.ads.benefits.title": "Why leading brands choose us",
    "featurePage.ads.benefits.subtitle":
      "Our platform combines powerful AI with intuitive design to give you the edge in digital advertising.",
    "featurePage.ads.benefits.benefit1.title": "Data-Driven Decisions",
    "featurePage.ads.benefits.benefit1.desc":
      "Make moves based on hard data, not gut feelings. Visualize trends instantly.",
    "featurePage.ads.benefits.benefit2.title": "AI Optimization",
    "featurePage.ads.benefits.benefit2.desc":
      "Let our AI engine optimize your bids 24/7 for maximum ROI and efficiency.",
    "featurePage.ads.benefits.benefit3.title": "Full-Funnel Analytics",
    "featurePage.ads.benefits.benefit3.desc":
      "Track the entire customer journey from the first click to final conversion.",
    "featurePage.ads.benefits.benefit4.title": "Realtime Alerts",
    "featurePage.ads.benefits.benefit4.desc":
      "Get notified instantly via Slack or Email when campaigns underperform.",

    "featurePage.ads.dashboard.badge": "Unified View",
    "featurePage.ads.dashboard.title": "All your channels in one place",
    "featurePage.ads.dashboard.subtitle":
      "Stop switching tabs. Monitor Facebook, Instagram, TikTok, and YouTube performance from a single source of truth.",
    "featurePage.ads.dashboard.cardTitle": "Campaign Overview",
    "featurePage.ads.dashboard.timeRange": "Last 30 Days",
    "featurePage.ads.dashboard.export": "Export",
    "featurePage.ads.dashboard.metric1.label": "Total Reach",
    "featurePage.ads.dashboard.metric1.value": "2.4M",
    "featurePage.ads.dashboard.metric1.change": "12% vs last month",
    "featurePage.ads.dashboard.metric2.label": "Engagement Rate",
    "featurePage.ads.dashboard.metric2.value": "4.8%",
    "featurePage.ads.dashboard.metric2.change": "0.5% vs last month",
    "featurePage.ads.dashboard.metric3.label": "Total Spend",
    "featurePage.ads.dashboard.metric3.value": "$12,450",
    "featurePage.ads.dashboard.metric3.change": "5% vs last month",
    "featurePage.ads.dashboard.metric4.label": "Conversions",
    "featurePage.ads.dashboard.metric4.value": "842",
    "featurePage.ads.dashboard.metric4.change": "24% vs last month",

    "featurePage.ads.aiEngine.title": "Powerful AI Engine",
    "featurePage.ads.aiEngine.subtitle":
      "Our proprietary algorithms work 24/7 to ensure your budget is spent where it matters most.",
    "featurePage.ads.aiEngine.feature1.title": "Budget Optimization",
    "featurePage.ads.aiEngine.feature1.desc":
      "Auto-shift budget to top performing ad sets.",
    "featurePage.ads.aiEngine.feature2.title": "Audience Suggestions",
    "featurePage.ads.aiEngine.feature2.desc":
      "Discover hidden high-intent audiences.",
    "featurePage.ads.aiEngine.feature3.title": "Smart A/B Testing",
    "featurePage.ads.aiEngine.feature3.desc":
      "Multivariate testing with statistical significance.",
    "featurePage.ads.aiEngine.feature4.title": "Performance Alerts",
    "featurePage.ads.aiEngine.feature4.desc":
      "Instant notification for anomalies.",
    "featurePage.ads.aiEngine.scanningTitle": "Scanning Campaigns...",
    "featurePage.ads.aiEngine.statusActive": "Active",
    "featurePage.ads.aiEngine.suggestion1.title": "Optimization Opportunity",
    "featurePage.ads.aiEngine.suggestion1.desc":
      'Shift $500 from "Cold Traffic Adset" to "Retargeting Video" to potentially increase ROAS by 15%.',
    "featurePage.ads.aiEngine.applyButton": "Apply Suggestion",
    "featurePage.ads.aiEngine.suggestion2.title": "Creative Refreshed",
    "featurePage.ads.aiEngine.suggestion2.desc":
      'Ad creative "Summer_Promo_v2" was automatically rotated in due to high CTR.',

    "featurePage.ads.metrics.title": "Key Metrics Tracked",
    "featurePage.ads.metrics.ctr.label": "CTR",
    "featurePage.ads.metrics.ctr.value": "2.4%",
    "featurePage.ads.metrics.cpa.label": "CPA",
    "featurePage.ads.metrics.cpa.value": "$12.50",
    "featurePage.ads.metrics.roas.label": "ROAS",
    "featurePage.ads.metrics.roas.value": "4.2x",
    "featurePage.ads.metrics.cpc.label": "CPC",
    "featurePage.ads.metrics.cpc.value": "$0.85",
    "featurePage.ads.metrics.cpm.label": "CPM",
    "featurePage.ads.metrics.cpm.value": "$5.20",
    "featurePage.ads.metrics.convRate.label": "Conv. Rate",
    "featurePage.ads.metrics.convRate.value": "3.1%",
    "featurePage.ads.metrics.retention.label": "Retention",
    "featurePage.ads.metrics.retention.value": "45%",
    "featurePage.ads.metrics.ltv.label": "LTV",
    "featurePage.ads.metrics.ltv.value": "$450",

    "featurePage.ads.howItWorks.title": "How it works",
    "featurePage.ads.howItWorks.subtitle": "Five simple steps to ad domination",
    "featurePage.ads.howItWorks.step1.title": "Connect",
    "featurePage.ads.howItWorks.step1.desc": "Link your ad accounts securely.",
    "featurePage.ads.howItWorks.step2.title": "Analyze",
    "featurePage.ads.howItWorks.step2.desc": "AI scans historical data.",
    "featurePage.ads.howItWorks.step3.title": "Optimize",
    "featurePage.ads.howItWorks.step3.desc": "Apply AI recommendations.",
    "featurePage.ads.howItWorks.step4.title": "Automate",
    "featurePage.ads.howItWorks.step4.desc": "Set rules for 24/7 management.",
    "featurePage.ads.howItWorks.step5.title": "Scale",
    "featurePage.ads.howItWorks.step5.desc": "Increase budget on winners.",

    "featurePage.ads.useCases.title": "Built for every team",
    "featurePage.ads.useCases.case1.title": "DTC Brands",
    "featurePage.ads.useCases.case1.desc":
      "Scale your e-commerce sales with precise ROAS tracking.",
    "featurePage.ads.useCases.case2.title": "Agencies",
    "featurePage.ads.useCases.case2.desc":
      "Manage hundreds of client accounts with a single login.",
    "featurePage.ads.useCases.case3.title": "B2B SaaS",
    "featurePage.ads.useCases.case3.desc":
      "Optimize for qualified leads and lower your CPA.",
    "featurePage.ads.useCases.case4.title": "Marketing Teams",
    "featurePage.ads.useCases.case4.desc":
      "Collaborate on creatives and reporting effortlessly.",

    "featurePage.ads.cta.title": "Turn Ad Data Into Profit",
    "featurePage.ads.cta.subtitle":
      "Join 10,000+ marketers optimizing over $500M in ad spend annually. Start your 14-day free trial today.",
    "featurePage.ads.cta.trial": "Get Started Free",
    "featurePage.ads.cta.contact": "Schedule Demo",
    "featurePage.ads.cta.trustNote": "No credit card required · Cancel anytime",

    "featurePage.multiPlatform.metric4.label": "Single Dashboard",
    "featurePage.multiPlatform.benefitsTitle": "Why Choose Multi-Platform?",
    "featurePage.multiPlatform.benefitsDesc":
      "Manage all social channels from one place.",
    "featurePage.multiPlatform.benefit1": "Post to 5+ platforms simultaneously",
    "featurePage.multiPlatform.benefit2":
      "Visual Content Calendar with drag & drop",
    "featurePage.multiPlatform.benefit3":
      "AI auto-replies to comments and messages",
    "featurePage.multiPlatform.benefit4": "Unified Inbox for all messages",

    // Feature Page - Ads
    "featurePage.ads.feature5.name": "ROI Calculator",
    "featurePage.ads.feature5.desc":
      "Calculate and predict ROI for each ad campaign",
    "featurePage.ads.feature6.name": "Auto Reports",
    "featurePage.ads.feature6.desc":
      "Send automated weekly/monthly performance reports",
    "featurePage.ads.metric1.label": "Metrics Tracked",
    "featurePage.ads.metric2.label": "Uptime SLA",
    "featurePage.ads.metric3.label": "ROI Performance",
    "featurePage.ads.metric4.label": "Reports",
    "featurePage.ads.benefitsTitle": "Why Choose AI Ads Analytics?",
    "featurePage.ads.benefitsDesc": "Optimize ads and track ROI with smart AI.",
    "featurePage.ads.benefit1": "Auto-optimize ad budget",
    "featurePage.ads.benefit2": "Accurate target audience suggestions",
    "featurePage.ads.benefit3": "Automatic A/B Testing for ads",
    "featurePage.ads.benefit4": "Real-time alerts when campaigns have issues",
    "form.packageSelector.label": "Select Package",
    "form.packageSelector.popular": "Best value",
    "form.package.startup.name": "Professional",
    "form.package.startup.price": "$499/month",
    "form.package.growth.name": "Business",
    "form.package.growth.price": "$799/month",
    "form.package.enterprise.name": "Enterprise",
    "form.package.enterprise.price": "Contact us",
    "registration.form.contact.phonePlaceholder": "55 555 5555",
  },
};

// ============================================================
// CONTEXT
// ============================================================
const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  locale: Locale;
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;

      // Get current path without locale prefix
      const segments = pathname.split("/");
      // Remove empty first segment and locale segment
      const pathWithoutLocale = segments.slice(2).join("/");

      // Navigate to new locale path
      const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`;
      router.push(newPath);
    },
    [locale, pathname, router],
  );

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

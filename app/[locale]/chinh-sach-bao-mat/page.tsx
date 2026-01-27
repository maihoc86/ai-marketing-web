import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật | DSP.ONE - Uniksmart",
  description:
    "Chính sách bảo mật của DSP.ONE - Cam kết bảo vệ dữ liệu và quyền riêng tư của người dùng.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang chủ
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Chính Sách Bảo Mật
            </h1>
          </div>
          <p className="text-emerald-100">
            Cập nhật lần cuối: 24 tháng 11, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Chính sách Bảo mật Tổng thể này (&quot;Chính sách&quot;) giải
              thích cách <strong>Uniksmart</strong>
              (&quot;Uniksmart&quot;, &quot;DSP.one&quot;, &quot;chúng
              tôi&quot;) thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông tin
              khi bạn sử dụng các sản phẩm và dịch vụ kỹ thuật số của chúng tôi.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
              <p className="text-blue-800 text-sm">
                <strong>Quan trọng:</strong> Chính sách này được thiết kế cho
                khách hàng B2B và mô tả vai trò của DSP.one với tư cách là cả
                người kiểm soát dữ liệu (cho dữ liệu tài khoản merchant và hoạt
                động nền tảng) và người xử lý dữ liệu (cho dữ liệu người dùng
                cuối được xử lý thay mặt cho merchant).
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Eye className="w-6 h-6 text-emerald-600" />
                1. Đối Tượng Áp Dụng
              </h2>
              <p className="text-gray-600 mb-4">
                Chính sách này áp dụng toàn cầu cho các nhóm cá nhân sau:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Merchant / Tenant:</strong> Khách hàng doanh nghiệp
                  (công ty, tổ chức, hộ kinh doanh) đăng ký và sử dụng DSP.one.
                </li>
                <li>
                  <strong>Người dùng Được ủy quyền:</strong> Cá nhân được
                  Merchant ủy quyền truy cập Dịch vụ dưới tài khoản của
                  Merchant.
                </li>
                <li>
                  <strong>Người dùng cuối / Người tiêu dùng:</strong> Cá nhân có
                  dữ liệu cá nhân được Merchant thu thập, lưu trữ hoặc phân tích
                  qua Dịch vụ.
                </li>
                <li>
                  <strong>Khách truy cập:</strong> Cá nhân duyệt website công
                  khai, trang marketing hoặc liên hệ với chúng tôi.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Database className="w-6 h-6 text-emerald-600" />
                2. Người Kiểm Soát Dữ Liệu và Thông Tin Liên Hệ
              </h2>
              <p className="text-gray-600 mb-4">
                Đối với hầu hết các hoạt động xử lý liên quan đến vận hành và
                cải thiện hệ sinh thái DSP.one, người kiểm soát dữ liệu là:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <p className="font-semibold text-gray-900 mb-2">
                  CÔNG TY CỔ PHẦN TIÊN PHONG CDS
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <strong>Địa chỉ:</strong> Tầng 01, Tòa nhà 232 Lê Văn Lương,
                    Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam
                  </li>
                  <li>
                    <strong>Mã số thuế:</strong> 0316459939
                  </li>
                  <li>
                    <strong>Email:</strong> mailhoc348@gmail.com
                  </li>
                  <li>
                    <strong>Hotline:</strong> (+84) 378 387 375
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>
                  Chúng tôi đóng vai trò người kiểm soát dữ liệu cho:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Dữ liệu đăng ký tài khoản và thông tin thanh toán của Merchant
                  và Người dùng Được ủy quyền
                </li>
                <li>
                  Dữ liệu kỹ thuật và sử dụng về cách Dịch vụ được sử dụng
                </li>
                <li>
                  Các hoạt động bán hàng, marketing và quan hệ khách hàng của
                  chúng tôi
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                3. Định Nghĩa Chính
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>&quot;Dữ liệu cá nhân&quot;</strong> là bất kỳ thông
                  tin nào liên quan đến một cá nhân đã được xác định hoặc có thể
                  xác định được (ví dụ: tên, email, số điện thoại, địa chỉ, lịch
                  sử giao dịch).
                </li>
                <li>
                  <strong>&quot;Dữ liệu Khách hàng&quot;</strong> là dữ liệu mà
                  Merchant hoặc Người dùng Được ủy quyền gửi đến, lưu trữ trên
                  hoặc thu thập thông qua Dịch vụ.
                </li>
                <li>
                  <strong>&quot;Dữ liệu Nền tảng&quot;</strong> là dữ liệu được
                  truy xuất từ các nền tảng bên ngoài (Meta, Google, Shopee,
                  Lazada, v.v.) qua API.
                </li>
                <li>
                  <strong>&quot;Dữ liệu Sử dụng&quot;</strong> là dữ liệu phân
                  tích, log về cách Dịch vụ được truy cập và sử dụng.
                </li>
                <li>
                  <strong>&quot;Nội dung AI&quot;</strong> là nội dung như văn
                  bản, hình ảnh, ý tưởng được tạo bởi module AI Marketing.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                4. Các Loại Dữ Liệu Chúng Tôi Thu Thập
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 Dữ liệu bạn cung cấp trực tiếp
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>
                  <strong>Dữ liệu tài khoản và đăng ký:</strong> Tên merchant,
                  thông tin pháp nhân, mã số thuế, chi tiết liên hệ, thông tin
                  đăng nhập
                </li>
                <li>
                  <strong>Dữ liệu thanh toán và tài chính:</strong> Địa chỉ
                  thanh toán, thông tin phương thức thanh toán
                </li>
                <li>
                  <strong>Dữ liệu khách hàng và vận hành:</strong> Danh mục sản
                  phẩm, danh sách khách hàng, đơn hàng, dữ liệu nhân viên
                </li>
                <li>
                  <strong>Dữ liệu hỗ trợ và liên lạc:</strong> Nội dung tin
                  nhắn, yêu cầu hỗ trợ, phản hồi khảo sát
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Dữ liệu chúng tôi thu thập tự động
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>
                  Địa chỉ IP, vị trí gần đúng từ IP, loại trình duyệt và ngôn
                  ngữ, hệ điều hành, loại thiết bị
                </li>
                <li>
                  Ngày giờ truy cập, URL đã truy cập, dữ liệu clickstream và
                  thời lượng phiên
                </li>
                <li>
                  Sự kiện log (đăng nhập, API call, lỗi) để giám sát hiệu suất
                  và bảo mật hệ thống
                </li>
                <li>
                  Khi sử dụng ứng dụng di động, có thể thu thập định danh thiết
                  bị và dữ liệu vị trí địa lý (với quyền phù hợp)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Dữ liệu từ nguồn bên thứ ba và tích hợp
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  <strong>Sàn thương mại điện tử:</strong> Shopee, Lazada,
                  TikTok Shop, Tiki - thông tin đơn hàng, chi tiết người mua
                </li>
                <li>
                  <strong>Nền tảng mạng xã hội:</strong> Meta (Facebook,
                  Instagram), YouTube, Google Ads - số liệu chiến dịch,
                  engagement
                </li>
                <li>
                  <strong>Nhà cung cấp vận chuyển:</strong> GHN, GHTK - thông
                  tin gửi/nhận, theo dõi đơn hàng
                </li>
                <li>
                  <strong>Cổng thanh toán:</strong> Thông tin xác nhận giao dịch
                  thành công/thất bại
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                5. Thực Hành Dữ Liệu Theo Module
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bán hàng & Phân phối (Omisell và SDO)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Chi tiết liên hệ người mua, chi tiết đơn hàng, dữ liệu kho
                    và tồn kho, dữ liệu lực lượng bán hàng thực địa.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quản trị doanh nghiệp (HRM, CRM, Kế toán)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dữ liệu nhân viên, thông tin khách hàng tiềm năng, dữ liệu
                    giao dịch và hồ sơ tài chính.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hệ thống Affiliate & Giới thiệu
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Thông tin hồ sơ affiliate, link giới thiệu, sự kiện click và
                    chuyển đổi, tính toán hoa hồng.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI Marketing, CDP và Tự động hóa
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Danh sách liên hệ, luồng sự kiện, tương tác chiến dịch và
                    metadata từ các kênh kết nối.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                6. Module AI Marketing và Tích Hợp Meta / Google
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.1 Quyền Meta (Facebook & Instagram)
              </h3>
              <p className="text-gray-600 mb-4">
                Khi bạn kết nối tài khoản Meta Business, chúng tôi có thể yêu
                cầu các quyền sau:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>
                  <strong>pages_show_list, instagram_basic:</strong> Hiển thị
                  danh sách Pages/Tài khoản để bạn chọn kết nối
                </li>
                <li>
                  <strong>
                    pages_manage_posts, instagram_content_publish:
                  </strong>{" "}
                  Đăng và lên lịch bài viết theo yêu cầu của bạn
                </li>
                <li>
                  <strong>pages_read_engagement, read_insights:</strong> Cung
                  cấp bảng điều khiển chiến dịch và báo cáo hiệu suất
                </li>
                <li>
                  <strong>leads_retrieval:</strong> Đẩy lead từ Lead Ads vào
                  CRM/CDP của bạn
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Bạn có thể thu hồi các quyền này bất cứ lúc nào qua cài đặt
                Business Integrations của Facebook hoặc trong cài đặt tích hợp
                DSP.one.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.2 Dịch vụ Google và YouTube
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>
                  <strong>YouTube Data API:</strong> Tải video lên kênh YouTube
                  và truy xuất số liệu xem
                </li>
                <li>
                  <strong>Google Ads API:</strong> Lấy số liệu chiến dịch để
                  phân tích hiệu suất quảng cáo
                </li>
                <li>
                  <strong>Google Analytics/GA4:</strong> Nhập dữ liệu website
                  cho phân đoạn CDP và phân tích attribution
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.3 AI Tạo sinh và Quyền sở hữu nội dung
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Chúng tôi sử dụng các mô hình ngôn ngữ lớn (LLM) tiên tiến để
                  tạo nội dung marketing
                </li>
                <li>
                  Chúng tôi không sử dụng dữ liệu kinh doanh độc quyền của bạn
                  để huấn luyện bất kỳ mô hình AI công khai nào
                </li>
                <li>
                  Bạn giữ lại bất kỳ quyền nào bạn có thể có trong Đầu ra AI
                  được tạo cho chiến dịch của bạn
                </li>
                <li>
                  Bạn có trách nhiệm xem xét Đầu ra AI trước khi xuất bản và đảm
                  bảo tuân thủ luật quảng cáo, chính sách nền tảng
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                7. Mục Đích và Cơ Sở Pháp Lý Xử Lý
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <strong>1. Cung cấp và vận hành Dịch vụ</strong>
                  <p className="text-sm mt-1">
                    Tạo và quản lý tài khoản, xác thực người dùng, cung cấp hỗ
                    trợ khách hàng, kích hoạt các tính năng cốt lõi.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Cơ sở pháp lý: Thực hiện hợp đồng; Lợi ích hợp pháp trong
                    vận hành nền tảng.
                  </p>
                </li>
                <li>
                  <strong>
                    2. Xử lý giao dịch và thực hiện nghĩa vụ pháp lý
                  </strong>
                  <p className="text-sm mt-1">
                    Xuất hóa đơn, ghi nhận thanh toán, duy trì hồ sơ thuế và kế
                    toán.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Cơ sở pháp lý: Thực hiện hợp đồng; Tuân thủ nghĩa vụ pháp
                    lý.
                  </p>
                </li>
                <li>
                  <strong>
                    3. Phân tích, cải thiện dịch vụ và phát triển sản phẩm
                  </strong>
                  <p className="text-sm mt-1">
                    Phân tích Dữ liệu Sử dụng để hiểu cách Dịch vụ được sử dụng,
                    xác định vấn đề, cải thiện trải nghiệm người dùng.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Cơ sở pháp lý: Lợi ích hợp pháp trong cải thiện và bảo mật
                    Dịch vụ.
                  </p>
                </li>
                <li>
                  <strong>4. Marketing và truyền thông</strong>
                  <p className="text-sm mt-1">
                    Gửi cập nhật sản phẩm, thông báo tính năng, bản tin hoặc ưu
                    đãi khuyến mãi.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Cơ sở pháp lý: Lợi ích hợp pháp trong quảng bá Dịch vụ, hoặc
                    sự đồng ý khi pháp luật yêu cầu. Bạn có thể từ chối bất cứ
                    lúc nào.
                  </p>
                </li>
                <li>
                  <strong>5. Bảo mật, phòng chống gian lận và tuân thủ</strong>
                  <p className="text-sm mt-1">
                    Giám sát hoạt động đáng ngờ, phát hiện và ngăn chặn gian
                    lận, spam và truy cập trái phép.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Cơ sở pháp lý: Lợi ích hợp pháp trong bảo mật hệ thống; Tuân
                    thủ nghĩa vụ pháp lý.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                8. Chia Sẻ và Tiết Lộ Dữ Liệu
              </h2>
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mb-6 rounded-r-lg">
                <p className="text-emerald-800 text-sm font-semibold">
                  Chúng tôi không bán dữ liệu cá nhân cho bên thứ ba.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Chúng tôi chỉ chia sẻ thông tin trong các tình huống hạn chế
                sau:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Nhà xử lý phụ và nhà cung cấp dịch vụ:</strong> Nhà
                  cung cấp hạ tầng đám mây (AWS, Google Cloud), nhà cung cấp
                  dịch vụ AI, công cụ tự động hóa quy trình.
                </li>
                <li>
                  <strong>
                    Tích hợp bên thứ ba theo hướng dẫn của người dùng:
                  </strong>{" "}
                  Khi bạn chọn kết nối DSP.one với dịch vụ bên ngoài.
                </li>
                <li>
                  <strong>Giao dịch doanh nghiệp:</strong> Trong trường hợp sáp
                  nhập, mua lại, tái cơ cấu hoặc bán tài sản.
                </li>
                <li>
                  <strong>Yêu cầu pháp lý và bảo vệ quyền:</strong> Khi cần
                  thiết để tuân thủ nghĩa vụ pháp lý, lệnh tòa án hoặc yêu cầu
                  của cơ quan quản lý.
                </li>
                <li>
                  <strong>Dữ liệu tổng hợp và ẩn danh:</strong> Thông tin không
                  xác định được cá nhân, ví dụ báo cáo benchmark.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Globe className="w-6 h-6 text-emerald-600" />
                9. Chuyển Dữ Liệu Quốc Tế
              </h2>
              <p className="text-gray-600 mb-4">
                Dịch vụ của chúng tôi được thiết kế cho người dùng toàn cầu và
                có thể bao gồm việc chuyển dữ liệu cá nhân đến các quốc gia khác
                nơi dữ liệu được thu thập ban đầu (ví dụ: đến các trung tâm dữ
                liệu tại Singapore, EU hoặc Hoa Kỳ).
              </p>
              <p className="text-gray-600 mb-2">
                Khi chuyển dữ liệu qua biên giới, chúng tôi thực hiện các bước
                thích hợp để đảm bảo mức độ bảo vệ phù hợp với pháp luật áp
                dụng:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Sử dụng Điều khoản Hợp đồng Tiêu chuẩn được cơ quan quản lý
                  phê duyệt
                </li>
                <li>Dựa vào quyết định tương đương khi có thể áp dụng</li>
                <li>
                  Đảm bảo nhà xử lý phụ triển khai các biện pháp bảo mật kỹ
                  thuật và tổ chức mạnh mẽ
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                10. Lưu Giữ Dữ Liệu
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi chỉ lưu giữ dữ liệu cá nhân trong thời gian cần thiết
                hợp lý để thực hiện các mục đích được mô tả trong Chính sách này
                hoặc theo yêu cầu của pháp luật.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Tài khoản merchant đang hoạt động:</strong> Dữ liệu
                  được giữ trong thời gian đăng ký và một khoảng thời gian hợp
                  lý sau đó.
                </li>
                <li>
                  <strong>Token truy cập cho tích hợp mạng xã hội:</strong> Chỉ
                  được lưu trữ khi tích hợp đang hoạt động.
                </li>
                <li>
                  <strong>Hồ sơ tài chính và kế toán:</strong> Được lưu giữ theo
                  khoảng thời gian pháp luật thuế và kế toán yêu cầu (lên đến 10
                  năm tại Việt Nam).
                </li>
                <li>
                  <strong>Log và hồ sơ bảo mật:</strong> Được lưu giữ trong
                  khoảng thời gian phù hợp để hỗ trợ điều tra bảo mật.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Khi dữ liệu không còn cần thiết, chúng tôi sẽ xóa hoặc ẩn danh
                để cá nhân không còn có thể được nhận dạng.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Lock className="w-6 h-6 text-emerald-600" />
                11. Biện Pháp Bảo Mật
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi triển khai chiến lược bảo mật phòng thủ theo chiều sâu
                để bảo vệ dữ liệu cá nhân khỏi truy cập trái phép, mất mát, lạm
                dụng hoặc thay đổi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Mã hóa dữ liệu truyền tải bằng giao thức TLS cập nhật, và mã
                  hóa dữ liệu nhạy cảm lưu trữ bằng thuật toán mạnh như AES-256
                </li>
                <li>
                  Kiểm soát truy cập dựa trên vai trò (RBAC) và xác thực đa yếu
                  tố (MFA) cho hệ thống nội bộ khi áp dụng
                </li>
                <li>
                  Nguyên tắc đặc quyền tối thiểu cho nhân viên và nhà thầu
                </li>
                <li>
                  Bảo vệ mức mạng, tường lửa và hệ thống phát hiện/giám sát xâm
                  nhập
                </li>
                <li>
                  Thực hành phát triển an toàn, quản lý lỗ hổng và đánh giá bảo
                  mật định kỳ
                </li>
                <li>Bảo vệ an ninh vật lý từ nhà cung cấp trung tâm dữ liệu</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4 rounded-r-lg">
                <p className="text-amber-800 text-sm">
                  Mặc dù chúng tôi nỗ lực bảo vệ dữ liệu cá nhân, không có hệ
                  thống nào có thể đảm bảo 100% an toàn. Trong trường hợp chúng
                  tôi nhận thấy vi phạm dữ liệu cá nhân có khả năng gây rủi ro
                  cao cho cá nhân, chúng tôi sẽ thông báo cho Merchant bị ảnh
                  hưởng và cơ quan có thẩm quyền liên quan khi được yêu cầu.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                12. Cookie, Pixel và Công Nghệ Tương Tự
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi và đối tác sử dụng cookie, web beacon, SDK và công
                nghệ tương tự trên website và, khi được Merchant cấu hình, trên
                website và landing page của họ.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Các loại cookie chúng tôi sử dụng:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Cookie cần thiết nghiêm ngặt:</strong> Cần thiết cho
                  chức năng cốt lõi như xác thực, bảo mật và cân bằng tải. Không
                  thể tắt qua banner cookie.
                </li>
                <li>
                  <strong>Cookie chức năng:</strong> Ghi nhớ tùy chọn người dùng
                  như ngôn ngữ, múi giờ hoặc cài đặt giao diện.
                </li>
                <li>
                  <strong>Cookie phân tích:</strong> Giúp hiểu cách khách truy
                  cập sử dụng Dịch vụ để cải thiện trải nghiệm người dùng.
                </li>
                <li>
                  <strong>Cookie marketing và affiliate:</strong> Được sử dụng
                  trong chương trình affiliate/giới thiệu và chiến dịch
                  retargeting.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Bạn có thể quản lý tùy chọn cookie thông qua cài đặt trình duyệt
                và banner cookie khi được cung cấp. Chặn một số cookie có thể
                ảnh hưởng đến chức năng.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                13. Quyền và Kiểm Soát của Bạn
              </h2>
              <p className="text-gray-600 mb-4">
                Tùy thuộc vào vị trí của bạn và luật áp dụng (ví dụ GDPR tại
                EU/EEA, CCPA tại California, Nghị định PDP 13 tại Việt Nam), bạn
                có thể có một số hoặc tất cả các quyền sau đối với dữ liệu cá
                nhân của mình:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>1. Quyền truy cập:</strong> Nhận xác nhận liệu chúng
                  tôi có xử lý dữ liệu cá nhân của bạn không và nếu có, nhận bản
                  sao.
                </li>
                <li>
                  <strong>2. Quyền chỉnh sửa:</strong> Yêu cầu sửa đổi dữ liệu
                  cá nhân không chính xác hoặc không đầy đủ.
                </li>
                <li>
                  <strong>3. Quyền xóa:</strong> Yêu cầu xóa dữ liệu cá nhân
                  trong một số trường hợp nhất định.
                </li>
                <li>
                  <strong>4. Quyền hạn chế xử lý:</strong> Yêu cầu chúng tôi tạm
                  thời giới hạn xử lý trong khi khiếu nại đang được điều tra.
                </li>
                <li>
                  <strong>5. Quyền di chuyển dữ liệu:</strong> Nhận dữ liệu cá
                  nhân bạn cung cấp ở định dạng có cấu trúc, thường được sử
                  dụng, có thể đọc bằng máy.
                </li>
                <li>
                  <strong>6. Quyền phản đối:</strong> Phản đối việc xử lý dựa
                  trên lợi ích hợp pháp hoặc marketing trực tiếp.
                </li>
                <li>
                  <strong>7. Quyền rút lại sự đồng ý:</strong> Khi xử lý dựa
                  trên sự đồng ý của bạn, bạn có thể rút lại bất cứ lúc nào.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi bằng
                thông tin trong Mục 16. Chúng tôi có thể cần xác minh danh tính
                của bạn trước khi hành động theo yêu cầu.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                14. Dữ Liệu Trẻ Em
              </h2>
              <p className="text-gray-600">
                Dịch vụ của chúng tôi được thiết kế để sử dụng bởi doanh nghiệp
                và chuyên gia. Chúng tôi không cố ý nhắm mục tiêu hoặc thu thập
                dữ liệu cá nhân từ trẻ em dưới 13 tuổi (hoặc độ tuổi cao hơn nếu
                luật địa phương yêu cầu) với tư cách là người dùng chính của nền
                tảng. Nếu bạn tin rằng chúng tôi đã vô tình thu thập dữ liệu cá
                nhân từ trẻ em mà không có sự đồng ý thích hợp, vui lòng liên hệ
                với chúng tôi và chúng tôi sẽ thực hiện các bước để xóa dữ liệu
                đó theo yêu cầu của pháp luật.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                15. Thay Đổi Chính Sách Này
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi có thể cập nhật Chính sách này theo thời gian để phản
                ánh thay đổi trong công nghệ, Dịch vụ, yêu cầu pháp lý hoặc các
                yếu tố khác.
              </p>
              <p className="text-gray-600 mb-2">
                Khi chúng tôi thực hiện thay đổi quan trọng, chúng tôi sẽ:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Cập nhật ngày &quot;Cập nhật lần cuối&quot; ở đầu Chính sách
                  này
                </li>
                <li>
                  Cung cấp thông báo bổ sung khi thích hợp, như qua email đến
                  chủ tài khoản hoặc thông báo nổi bật trong Dịch vụ
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Việc tiếp tục sử dụng Dịch vụ sau ngày có hiệu lực của Chính
                sách cập nhật cấu thành sự chấp nhận của bạn đối với các thay
                đổi.
              </p>
            </section>

            {/* Section 16 - Contact */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <Mail className="w-6 h-6 text-emerald-600" />
                16. Liên Hệ Với Chúng Tôi
              </h2>
              <p className="text-gray-600 mb-4">
                Nếu bạn có bất kỳ câu hỏi, lo ngại hoặc yêu cầu nào liên quan
                đến Chính sách này hoặc việc xử lý dữ liệu cá nhân của chúng
                tôi, vui lòng liên hệ:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">
                  CÔNG TY CỔ PHẦN TIÊN PHONG CDS
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Địa chỉ:</strong> Tầng 01, Tòa nhà 232 Lê Văn Lương,
                    Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:mailhoc348@gmail.com"
                      className="text-emerald-600 hover:underline"
                    >
                      mailhoc348@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Hotline:</strong>{" "}
                    <a
                      href="tel:+84378387375"
                      className="text-emerald-600 hover:underline"
                    >
                      (+84) 378 387 375
                    </a>
                  </li>
                  <li>
                    <strong>Biểu mẫu web:</strong>{" "}
                    <a
                      href="https://tienphongcds.com/vi/contact"
                      className="text-emerald-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tienphongcds.com/vi/contact
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="bg-gray-100 rounded-lg p-6 mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Bằng việc sử dụng Dịch vụ DSP.one, bạn xác nhận rằng bạn đã đọc
                và hiểu Chính sách Bảo mật Tổng thể này và đồng ý rằng thông tin
                của bạn có thể được xử lý như được mô tả trong đây.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/terms"
            className="flex-1 text-center px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            Xem Điều khoản Sử dụng
          </Link>
          <Link
            href="/dang-ky"
            className="flex-1 text-center px-6 py-3 bg-emerald-600 rounded-lg text-white hover:bg-emerald-700 transition-colors"
          >
            Đăng ký dùng thử
          </Link>
        </div>
      </div>
    </main>
  );
}

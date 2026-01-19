import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng | DSP.ONE - DXAI Marketing Platform",
  description:
    "Điều khoản sử dụng dịch vụ DSP.ONE - Nền tảng AI Marketing tự động hóa toàn diện cho doanh nghiệp Việt Nam.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang chủ
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Điều Khoản Sử Dụng Dịch Vụ</h1>
          <p className="text-blue-100">Cập nhật lần cuối: 24 tháng 11, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              Các Điều khoản Sử dụng Dịch vụ này ("Điều khoản") điều chỉnh việc truy cập và sử dụng nền tảng DSP.one và
              các dịch vụ liên quan, bao gồm module AI Marketing (gọi chung là "Dịch vụ") được cung cấp bởi
              <strong> Công ty Cổ phần Tiên Phong CDS</strong> ("Tiên Phong CDS", "DSP.one", "chúng tôi").
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
              <p className="text-amber-800 text-sm">
                <strong>Lưu ý quan trọng:</strong> Các Điều khoản này được thiết kế cho mục đích sử dụng kinh doanh
                (B2B). Dịch vụ không dành cho người tiêu dùng cá nhân sử dụng cho mục đích cá nhân.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">1. Định Nghĩa</h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>"Tài khoản"</strong> là tài khoản trực tuyến được đăng ký bởi hoặc thay mặt cho Khách hàng để
                  sử dụng Dịch vụ.
                </li>
                <li>
                  <strong>"Người dùng Được ủy quyền"</strong> là cá nhân được Khách hàng ủy quyền truy cập và sử dụng
                  Dịch vụ (nhân viên, nhà thầu, hoặc đại lý).
                </li>
                <li>
                  <strong>"Nội dung Khách hàng"</strong> là tất cả nội dung, dữ liệu, văn bản, hình ảnh, video mà Khách
                  hàng tải lên hoặc tạo trong Dịch vụ.
                </li>
                <li>
                  <strong>"Dữ liệu Khách hàng"</strong> là dữ liệu liên quan đến khách hàng, khách hàng tiềm năng, người
                  dùng cuối của Khách hàng.
                </li>
                <li>
                  <strong>"Module AI Marketing"</strong> là các tính năng tự động hóa marketing và tạo nội dung của nền
                  tảng DSP.one.
                </li>
                <li>
                  <strong>"Nền tảng Bên thứ ba"</strong> là sản phẩm, dịch vụ hoặc ứng dụng của bên thứ ba tương tác với
                  Dịch vụ (Meta, Google, v.v.).
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                2. Phạm Vi Thỏa Thuận
              </h2>
              <p className="text-gray-600 mb-4">
                Các Điều khoản này tạo thành thỏa thuận ràng buộc giữa Khách hàng và DSP.one và điều chỉnh việc sử dụng
                Dịch vụ của Khách hàng.
              </p>
              <p className="text-gray-600">
                Trong trường hợp có xung đột giữa Điều khoản này và Đơn đặt hàng, Đơn đặt hàng sẽ được ưu tiên áp dụng
                trong phạm vi xung đột.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">3. Mô Tả Dịch Vụ</h2>
              <p className="text-gray-600 mb-4">
                DSP.one cung cấp nền tảng thương mại và marketing đa kênh dựa trên đám mây, cho phép Khách hàng quản lý
                sản phẩm, đơn hàng, khách hàng, website, kênh bán hàng trực tuyến và hoạt động marketing từ một giao
                diện thống nhất.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Dịch vụ có thể bao gồm:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Quản lý danh mục sản phẩm, đơn hàng và tồn kho</li>
                <li>Quản lý khách hàng và liên hệ (tính năng CRM)</li>
                <li>Tạo và lưu trữ website và landing page</li>
                <li>
                  Module AI Marketing: lập kế hoạch chiến dịch, viết nội dung hỗ trợ AI, lên lịch và tự động hóa bài
                  đăng/quảng cáo
                </li>
                <li>Tích hợp với Nền tảng Bên thứ ba như Meta, Google, công cụ email và nhắn tin</li>
                <li>Bảng điều khiển, phân tích, báo cáo và số liệu</li>
                <li>API và webhook cho truy cập lập trình</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                4. Đăng Ký Tài Khoản và Bảo Mật
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Để truy cập Dịch vụ, Khách hàng phải tạo Tài khoản và cung cấp thông tin chính xác, đầy đủ và cập
                  nhật.
                </li>
                <li>
                  Khách hàng có thể tạo đăng nhập riêng cho Người dùng Được ủy quyền theo số lượng được phép bởi gói
                  đăng ký.
                </li>
                <li>
                  Mỗi thông tin đăng nhập là cá nhân cho một người dùng và không được chia sẻ với bất kỳ cá nhân nào
                  khác.
                </li>
                <li>
                  Khách hàng chịu trách nhiệm duy trì tính bảo mật của tất cả thông tin đăng nhập và cho mọi hoạt động
                  xảy ra dưới Tài khoản của mình.
                </li>
                <li>Khách hàng phải thông báo ngay cho DSP.one nếu phát hiện bất kỳ truy cập trái phép nào.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                5. Đơn Đặt Hàng, Thời Hạn Đăng Ký và Gia Hạn
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>Đăng ký Dịch vụ của Khách hàng được chỉ định trong Đơn đặt hàng hoặc lựa chọn gói trực tuyến.</li>
                <li>
                  Trừ khi có quy định khác, đăng ký chạy theo chu kỳ được Khách hàng chọn (hàng tháng, hàng quý hoặc
                  hàng năm).
                </li>
                <li>
                  Đăng ký tự động gia hạn cho các chu kỳ kế tiếp có cùng thời lượng trừ khi một trong hai bên đưa ra
                  thông báo bằng văn bản về việc không gia hạn ít nhất 30 ngày trước.
                </li>
                <li>
                  Khách hàng có thể nâng cấp gói đăng ký, thêm module hoặc tăng giới hạn sử dụng trong Thời hạn Đăng ký.
                </li>
                <li>
                  Hạ cấp có thể chỉ có hiệu lực vào đầu Kỳ gia hạn tiếp theo và có thể dẫn đến mất tính năng hoặc dung
                  lượng.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                6. Phí, Thanh Toán và Lập Hóa Đơn
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Khách hàng sẽ thanh toán tất cả các khoản phí được chỉ định trong Đơn đặt hàng hoặc được trình bày tại
                  thời điểm mua.
                </li>
                <li>
                  Phí được tính theo Dịch vụ đã mua, không phải sử dụng thực tế, trừ khi gói áp dụng nêu rõ thanh toán
                  dựa trên sử dụng.
                </li>
                <li>
                  Phí không bao gồm các loại thuế giá trị gia tăng, thuế bán hàng hoặc các loại thuế tương tự. Khách
                  hàng chịu trách nhiệm cho tất cả các loại thuế.
                </li>
                <li>Phí cho mỗi Thời hạn Đăng ký được tính trước và không được hoàn lại.</li>
                <li>
                  Nếu Khách hàng không thanh toán khoản Phí đến hạn, DSP.one có thể tính lãi chậm trả và/hoặc đình chỉ
                  quyền truy cập.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                7. Dùng Thử Miễn Phí
              </h2>
              <p className="text-gray-600 mb-4">
                DSP.one có thể cung cấp cho Khách hàng quyền truy cập Dịch vụ hoặc một số module trên cơ sở dùng thử
                miễn phí hoặc giảm phí. DSP.one có thể xác định thời lượng và phạm vi của bất kỳ Bản dùng thử nào theo
                quyết định riêng của mình.
              </p>
              <p className="text-gray-600">
                Trong thời gian Dùng thử, Dịch vụ được cung cấp "nguyên trạng" không có bất kỳ bảo đảm, hỗ trợ, cam kết
                mức dịch vụ hoặc nghĩa vụ sao lưu dữ liệu nào.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                8. Trách Nhiệm của Khách Hàng
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Khách hàng chịu trách nhiệm cho:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Cấu hình và sử dụng Dịch vụ</li>
                <li>Đảm bảo Người dùng Được ủy quyền tuân thủ Điều khoản này và tất cả luật pháp áp dụng</li>
                <li>Tính chính xác, chất lượng và hợp pháp của Nội dung và Dữ liệu Khách hàng</li>
                <li>
                  Có được tất cả quyền, giấy phép và sự đồng ý cần thiết để thu thập, lưu trữ và xử lý Dữ liệu Khách
                  hàng
                </li>
                <li>Tuân thủ các điều khoản và chính sách của bất kỳ Nền tảng Bên thứ ba nào</li>
              </ul>
              <p className="text-gray-600 mb-2">
                <strong>Khách hàng không được:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Sử dụng Dịch vụ theo bất kỳ cách nào bất hợp pháp, có hại, phỉ báng hoặc xúc phạm</li>
                <li>Cố gắng truy cập trái phép vào Dịch vụ, tài khoản, hệ thống hoặc mạng</li>
                <li>Can thiệp hoặc làm gián đoạn tính toàn vẹn hoặc hiệu suất của Dịch vụ</li>
                <li>Kỹ thuật đảo ngược, dịch ngược hoặc cố gắng suy ra mã nguồn từ Dịch vụ</li>
                <li>Sử dụng Dịch vụ để gửi thông tin liên lạc hàng loạt không được yêu cầu (spam)</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                9. Nội Dung và Dữ Liệu Khách Hàng
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Khách hàng giữ lại tất cả quyền, quyền sở hữu và lợi ích đối với Nội dung và Dữ liệu Khách hàng.
                </li>
                <li>
                  Khách hàng cấp cho DSP.one giấy phép toàn cầu, không độc quyền, miễn phí bản quyền để lưu trữ, sao
                  chép, sử dụng Nội dung và Dữ liệu Khách hàng nhằm cung cấp và cải thiện Dịch vụ.
                </li>
                <li>
                  DSP.one không giám sát Nội dung hoặc Dữ liệu Khách hàng về việc tuân thủ pháp luật và không chịu trách
                  nhiệm về chúng.
                </li>
                <li>Khách hàng tự chịu trách nhiệm sao lưu và xuất Nội dung và Dữ liệu Khách hàng của mình.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                10. Nội Dung Tạo Bởi AI
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Module AI Marketing có thể tạo nội dung hoặc đề xuất dựa trên lời nhắc, hướng dẫn hoặc Nội dung Khách
                  hàng ("Đầu ra AI").
                </li>
                <li>
                  DSP.one chuyển nhượng cho Khách hàng bất kỳ quyền nào DSP.one có thể có trong Đầu ra AI được tạo cụ
                  thể cho các chiến dịch của Khách hàng.
                </li>
                <li>
                  Khách hàng tự chịu trách nhiệm xem xét, xác minh và phê duyệt tất cả Đầu ra AI trước khi sử dụng.
                </li>
                <li>
                  Đầu ra AI có thể không chính xác, không đầy đủ, thiên vị hoặc không phù hợp. DSP.one không đảm bảo Đầu
                  ra AI không có lỗi hoặc vi phạm.
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                11. Nền Tảng Bên Thứ Ba và Tích Hợp
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Dịch vụ có thể cho phép Khách hàng tích hợp với và xuất bản, đồng bộ hóa hoặc trao đổi dữ liệu với các
                  Nền tảng Bên thứ ba như Meta, Google Analytics hoặc Ads.
                </li>
                <li>
                  Việc sử dụng bất kỳ Nền tảng Bên thứ ba nào của Khách hàng được điều chỉnh hoàn toàn bởi các điều
                  khoản và chính sách của bên thứ ba đó.
                </li>
                <li>DSP.one không kiểm soát và không chịu trách nhiệm về các Nền tảng Bên thứ ba.</li>
                <li>Khách hàng chịu trách nhiệm cấu hình tích hợp và quản lý quyền và token truy cập.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                12. Quyền Sở Hữu Trí Tuệ
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  DSP.one và các bên cấp phép giữ lại tất cả quyền, quyền sở hữu và lợi ích đối với Dịch vụ, Tài liệu,
                  Website, phần mềm cơ bản, thuật toán, mô hình AI, thiết kế giao diện người dùng, nhãn hiệu và tất cả
                  quyền sở hữu trí tuệ liên quan.
                </li>
                <li>
                  DSP.one cấp cho Khách hàng giấy phép hạn chế, không độc quyền, không thể chuyển nhượng để truy cập và
                  sử dụng Dịch vụ cho mục đích kinh doanh nội bộ của Khách hàng.
                </li>
                <li>
                  Khách hàng không được xóa, che khuất hoặc thay đổi bất kỳ thông báo độc quyền nào hiển thị trong Dịch
                  vụ.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                13. Bảo Mật Thông Tin
              </h2>
              <p className="text-gray-600 mb-4">
                Mỗi bên ("Bên Nhận") có thể nhận thông tin bí mật hoặc độc quyền từ bên kia ("Bên Tiết lộ") liên quan
                đến Điều khoản này và Dịch vụ ("Thông tin Bí mật").
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Nghĩa vụ của Bên Nhận:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Sử dụng Thông tin Bí mật chỉ cho mục đích thực hiện nghĩa vụ hoặc thực thi quyền theo Điều khoản này
                </li>
                <li>
                  Bảo vệ Thông tin Bí mật với mức độ cẩn thận ít nhất tương đương với thông tin tương tự của chính mình
                </li>
                <li>Không tiết lộ Thông tin Bí mật cho bất kỳ bên thứ ba nào ngoại trừ nhân viên, nhà thầu cần biết</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                14. Bảo Vệ Dữ Liệu và Bảo Mật
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Mỗi bên sẽ tuân thủ các luật bảo vệ dữ liệu và quyền riêng tư áp dụng liên quan đến việc xử lý dữ liệu
                  cá nhân theo Điều khoản này.
                </li>
                <li>
                  Chi tiết về cách DSP.one thu thập, sử dụng và bảo vệ dữ liệu cá nhân được nêu trong{" "}
                  <Link href="/chinh-sach-bao-mat" className="text-blue-600 hover:underline">
                    Chính sách Bảo mật
                  </Link>{" "}
                  của DSP.one.
                </li>
                <li>
                  DSP.one triển khai các biện pháp bảo mật kỹ thuật và tổ chức hợp lý được thiết kế để bảo vệ Dữ liệu
                  Khách hàng.
                </li>
                <li>
                  Nếu DSP.one biết về vi phạm dữ liệu cá nhân ảnh hưởng đến Dữ liệu Khách hàng, DSP.one sẽ thông báo cho
                  Khách hàng mà không chậm trễ.
                </li>
              </ul>
            </section>

            {/* Section 15 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                15. Khả Dụng Dịch Vụ, Hỗ Trợ và Thay Đổi
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>DSP.one sẽ nỗ lực thương mại hợp lý để làm cho các thành phần cốt lõi của Dịch vụ khả dụng.</li>
                <li>
                  Dịch vụ có thể tạm thời không khả dụng do bảo trì theo kế hoạch hoặc bảo trì khẩn cấp không theo kế
                  hoạch.
                </li>
                <li>
                  DSP.one cung cấp hỗ trợ kỹ thuật tiêu chuẩn cho Dịch vụ thông qua các kênh được mô tả trên Website
                  trong giờ làm việc bình thường.
                </li>
                <li>
                  DSP.one có thể sửa đổi Dịch vụ để cải thiện chức năng, thêm tính năng, đảm bảo bảo mật hoặc tuân thủ
                  pháp luật.
                </li>
              </ul>
            </section>

            {/* Section 16 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                16. Thời Hạn và Chấm Dứt
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Điều khoản này bắt đầu từ Ngày Hiệu lực và tiếp tục miễn là Khách hàng có Thời hạn Đăng ký hoạt động.
                </li>
                <li>
                  Một trong hai bên có thể chấm dứt Điều khoản này vì lý do bằng cách đưa ra thông báo bằng văn bản nếu
                  bên kia vi phạm nghiêm trọng và không khắc phục trong 30 ngày.
                </li>
                <li>
                  DSP.one có thể chấm dứt ngay lập tức nếu Khách hàng không thanh toán Phí trong 30 ngày sau khi nhận
                  được nhắc nhở.
                </li>
                <li>
                  Khi chấm dứt, quyền truy cập và sử dụng Dịch vụ của Khách hàng sẽ chấm dứt và Khách hàng phải thanh
                  toán ngay mọi khoản Phí còn nợ.
                </li>
                <li>
                  Trong khoảng thời gian giới hạn sau chấm dứt (30 ngày), DSP.one có thể cho phép Khách hàng xuất hoặc
                  tải xuống Nội dung và Dữ liệu Khách hàng.
                </li>
              </ul>
            </section>

            {/* Section 17 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                17. Bảo Đảm và Miễn Trừ
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  DSP.one bảo đảm rằng, trong Thời hạn Đăng ký áp dụng, Dịch vụ sẽ hoạt động về mọi mặt trọng yếu theo
                  Tài liệu hướng dẫn.
                </li>
                <li>
                  Ngoại trừ những gì được quy định rõ ràng trong Điều khoản này, Dịch vụ được cung cấp "NGUYÊN TRẠNG" và
                  "NHƯ CÓ SẴN" không có bất kỳ bảo đảm nào.
                </li>
                <li>
                  DSP.one từ chối cụ thể mọi bảo đảm ngầm định về khả năng bán được, sự phù hợp cho một mục đích cụ thể
                  và không vi phạm.
                </li>
                <li>
                  DSP.one không bảo đảm Dịch vụ sẽ không bị gián đoạn, không có lỗi, hoàn toàn an toàn hoặc không có
                  thành phần có hại.
                </li>
              </ul>
            </section>

            {/* Section 18 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                18. Giới Hạn Trách Nhiệm
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Trong phạm vi tối đa được pháp luật cho phép, không bên nào sẽ chịu trách nhiệm cho bất kỳ thiệt hại
                  gián tiếp, ngẫu nhiên, đặc biệt, hệ quả, mang tính răn đe hoặc trừng phạt nào.
                </li>
                <li>
                  Tổng trách nhiệm của mỗi bên sẽ không vượt quá tổng số Phí thực tế được Khách hàng thanh toán trong 12
                  tháng ngay trước sự kiện phát sinh khiếu nại.
                </li>
                <li>
                  Các giới hạn này không áp dụng cho nghĩa vụ thanh toán của Khách hàng, trách nhiệm về tử vong hoặc
                  thương tích cá nhân do sơ suất, gian lận hoặc hành vi sai trái cố ý.
                </li>
              </ul>
            </section>

            {/* Section 19 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">19. Bồi Thường</h2>
              <p className="text-gray-600 mb-4">
                <strong>Bồi thường của Khách hàng:</strong> Khách hàng sẽ bồi thường, bảo vệ và giữ cho DSP.one không bị
                tổn hại khỏi mọi khiếu nại, thiệt hại, tổn thất, trách nhiệm, chi phí và phí tổn phát sinh từ hoặc liên
                quan đến:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Nội dung hoặc Dữ liệu Khách hàng vi phạm quyền sở hữu trí tuệ, quyền riêng tư hoặc quyền khác</li>
                <li>Việc sử dụng Dịch vụ của Khách hàng vi phạm Điều khoản này, chính sách nền tảng hoặc pháp luật</li>
                <li>
                  Bất kỳ thông tin liên lạc, chiến dịch, quảng cáo nào được Khách hàng tạo hoặc phân phối bằng Dịch vụ
                </li>
              </ul>
              <p className="text-gray-600">
                <strong>Bồi thường của DSP.one:</strong> DSP.one sẽ bảo vệ Khách hàng chống lại bất kỳ khiếu nại của bên
                thứ ba nào cáo buộc việc sử dụng Dịch vụ được ủy quyền của Khách hàng vi phạm quyền sở hữu trí tuệ.
              </p>
            </section>

            {/* Section 20 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                20. Sự Kiện Bất Khả Kháng
              </h2>
              <p className="text-gray-600">
                Không bên nào sẽ chịu trách nhiệm cho bất kỳ thất bại hoặc chậm trễ nào trong việc thực hiện nghĩa vụ
                (ngoại trừ nghĩa vụ thanh toán) trong phạm vi gây ra bởi các sự kiện ngoài tầm kiểm soát hợp lý của
                mình, bao gồm nhưng không giới hạn ở thiên tai, chiến tranh, hành vi khủng bố, bất ổn dân sự, đình công,
                tranh chấp lao động, lỗi tiện ích công cộng hoặc mạng viễn thông, hành vi của chính phủ hoặc cơ quan
                quản lý.
              </p>
            </section>

            {/* Section 21 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                21. Luật Áp Dụng và Giải Quyết Tranh Chấp
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Điều khoản này và bất kỳ tranh chấp, khiếu nại hoặc tranh cãi nào phát sinh từ hoặc liên quan đến
                  chúng hoặc Dịch vụ sẽ được điều chỉnh bởi và giải thích theo luật pháp của{" "}
                  <strong>Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>.
                </li>
                <li>
                  Các bên trước tiên sẽ cố gắng giải quyết mọi tranh chấp một cách hòa giải thông qua đàm phán thiện
                  chí.
                </li>
                <li>
                  Nếu các bên không thể giải quyết tranh chấp trong 30 ngày, một trong hai bên có thể đệ trình tranh
                  chấp lên tòa án có thẩm quyền tại <strong>Thành phố Hồ Chí Minh, Việt Nam</strong>, nơi sẽ có thẩm
                  quyền độc quyền.
                </li>
              </ul>
            </section>

            {/* Section 22 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                22. Điều Khoản Khác
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Toàn bộ thỏa thuận:</strong> Điều khoản này, cùng với bất kỳ Đơn đặt hàng, thỏa thuận xử lý dữ
                  liệu và chính sách áp dụng nào, tạo thành toàn bộ thỏa thuận giữa các bên.
                </li>
                <li>
                  <strong>Sửa đổi:</strong> DSP.one có thể cập nhật Điều khoản này theo thời gian. Khi có thay đổi quan
                  trọng, DSP.one sẽ đăng Điều khoản cập nhật trên Website và có thể thông báo cho Khách hàng.
                </li>
                <li>
                  <strong>Chuyển nhượng:</strong> Khách hàng không được chuyển nhượng, chuyển giao hoặc ủy quyền bất kỳ
                  quyền hoặc nghĩa vụ nào mà không có sự đồng ý bằng văn bản trước của DSP.one.
                </li>
                <li>
                  <strong>Nhà thầu độc lập:</strong> Các bên là nhà thầu độc lập và không có gì trong Điều khoản này tạo
                  ra quan hệ đối tác, liên doanh, đại lý hoặc việc làm.
                </li>
                <li>
                  <strong>Tách rời:</strong> Nếu bất kỳ điều khoản nào bị coi là không hợp lệ hoặc không thể thi hành,
                  các điều khoản còn lại sẽ vẫn có hiệu lực đầy đủ.
                </li>
                <li>
                  <strong>Không từ bỏ:</strong> Việc một bên không thi hành bất kỳ quyền hoặc điều khoản nào sẽ không
                  cấu thành sự từ bỏ quyền hoặc điều khoản đó.
                </li>
                <li>
                  <strong>Ngôn ngữ:</strong> Điều khoản này được soạn thảo bằng tiếng Anh. Nếu được dịch sang ngôn ngữ
                  khác, phiên bản tiếng Anh sẽ được ưu tiên trong trường hợp có xung đột.
                </li>
              </ul>
            </section>

            {/* Section 23 - Contact */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">23. Liên Hệ</h2>
              <p className="text-gray-600 mb-4">
                Nếu bạn có bất kỳ câu hỏi nào về Điều khoản này hoặc Dịch vụ, vui lòng liên hệ với DSP.one tại:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">CÔNG TY CỔ PHẦN TIÊN PHONG CDS</p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Địa chỉ:</strong> Tầng 01, Tòa nhà 232 Lê Văn Lương, Phường Tân Hưng, Quận 7, TP. Hồ Chí
                    Minh, Việt Nam
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:mailhoc348@gmail.com" className="text-blue-600 hover:underline">
                      mailhoc348@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Hotline:</strong>{" "}
                    <a href="tel:+84378387375" className="text-blue-600 hover:underline">
                      (+84) 378 387 375
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://tienphongcds.com"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tienphongcds.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/chinh-sach-bao-mat"
            className="flex-1 text-center px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            Xem Chính sách Bảo mật
          </Link>
          <Link
            href="/dang-ky"
            className="flex-1 text-center px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            Đăng ký dùng thử
          </Link>
        </div>
      </div>
    </main>
  )
}

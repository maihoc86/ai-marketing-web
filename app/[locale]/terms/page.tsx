"use client";

import { ArrowLeft } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export default function TermsPage() {
  const { t, locale } = useI18n();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocaleLink
            href="/"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("terms.backToHome")}
          </LocaleLink>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("terms.title")}
          </h1>
          <p className="text-blue-100">{t("terms.lastUpdated")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          {/* Render content based on locale */}
          {locale === "vi" ? <TermsContentVi /> : <TermsContentEn />}
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <LocaleLink
            href="/privacy"
            className="flex-1 text-center px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            {t("terms.viewPrivacy")}
          </LocaleLink>
          <LocaleLink
            href="/dang-ky"
            className="flex-1 text-center px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            {t("terms.registerTrial")}
          </LocaleLink>
        </div>
      </div>
    </main>
  );
}

// Vietnamese Content Component
function TermsContentVi() {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-600 leading-relaxed mb-8">
        Các Điều khoản Sử dụng Dịch vụ này (&quot;Điều khoản&quot;) điều
        chỉnh việc truy cập và sử dụng nền tảng DSP.one và các dịch vụ
        liên quan, bao gồm module AI Marketing (gọi chung là &quot;Dịch
        vụ&quot;) được cung cấp bởi
        <strong> Uniksmart Company</strong> (&quot;Uniksmart&quot;, &quot;DSP.one&quot;, &quot;chúng tôi&quot;).
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
        <p className="text-amber-800 text-sm">
          <strong>Lưu ý quan trọng:</strong> Các Điều khoản này được thiết
          kế cho mục đích sử dụng kinh doanh (B2B). Dịch vụ không dành cho
          người tiêu dùng cá nhân sử dụng cho mục đích cá nhân.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          1. Định Nghĩa
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <strong>&quot;Tài khoản&quot;</strong> là tài khoản trực tuyến
            được đăng ký bởi hoặc thay mặt cho Khách hàng để sử dụng Dịch
            vụ.
          </li>
          <li>
            <strong>&quot;Người dùng Được ủy quyền&quot;</strong> là cá
            nhân được Khách hàng ủy quyền truy cập và sử dụng Dịch vụ
            (nhân viên, nhà thầu, hoặc đại lý).
          </li>
          <li>
            <strong>&quot;Nội dung Khách hàng&quot;</strong> là tất cả nội
            dung, dữ liệu, văn bản, hình ảnh, video mà Khách hàng tải lên
            hoặc tạo trong Dịch vụ.
          </li>
          <li>
            <strong>&quot;Dữ liệu Khách hàng&quot;</strong> là dữ liệu
            liên quan đến khách hàng, khách hàng tiềm năng, người dùng
            cuối của Khách hàng.
          </li>
          <li>
            <strong>&quot;Module AI Marketing&quot;</strong> là các tính
            năng tự động hóa marketing và tạo nội dung của nền tảng
            DSP.one.
          </li>
          <li>
            <strong>&quot;Nền tảng Bên thứ ba&quot;</strong> là sản phẩm,
            dịch vụ hoặc ứng dụng của bên thứ ba tương tác với Dịch vụ
            (Meta, Google, v.v.).
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          2. Phạm Vi Thỏa Thuận
        </h2>
        <p className="text-gray-600 mb-4">
          Các Điều khoản này tạo thành thỏa thuận ràng buộc giữa Khách
          hàng và DSP.one và điều chỉnh việc sử dụng Dịch vụ của Khách
          hàng.
        </p>
        <p className="text-gray-600">
          Trong trường hợp có xung đột giữa Điều khoản này và Đơn đặt
          hàng, Đơn đặt hàng sẽ được ưu tiên áp dụng trong phạm vi xung
          đột.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          3. Mô Tả Dịch Vụ
        </h2>
        <p className="text-gray-600 mb-4">
          DSP.one cung cấp nền tảng thương mại và marketing đa kênh dựa
          trên đám mây, cho phép Khách hàng quản lý sản phẩm, đơn hàng,
          khách hàng, website, kênh bán hàng trực tuyến và hoạt động
          marketing từ một giao diện thống nhất.
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Dịch vụ có thể bao gồm:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Quản lý danh mục sản phẩm, đơn hàng và tồn kho</li>
          <li>Quản lý khách hàng và liên hệ (tính năng CRM)</li>
          <li>Tạo và lưu trữ website và landing page</li>
          <li>
            Module AI Marketing: lập kế hoạch chiến dịch, viết nội dung hỗ
            trợ AI, lên lịch và tự động hóa bài đăng/quảng cáo
          </li>
          <li>
            Tích hợp với Nền tảng Bên thứ ba như Meta, Google, công cụ
            email và nhắn tin
          </li>
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
            Để truy cập Dịch vụ, Khách hàng phải tạo Tài khoản và cung cấp
            thông tin chính xác, đầy đủ và cập nhật.
          </li>
          <li>
            Khách hàng có thể tạo đăng nhập riêng cho Người dùng Được ủy
            quyền theo số lượng được phép bởi gói đăng ký.
          </li>
          <li>
            Mỗi thông tin đăng nhập là cá nhân cho một người dùng và không
            được chia sẻ với bất kỳ cá nhân nào khác.
          </li>
          <li>
            Khách hàng chịu trách nhiệm duy trì tính bảo mật của tất cả
            thông tin đăng nhập và cho mọi hoạt động xảy ra dưới Tài khoản
            của mình.
          </li>
          <li>
            Khách hàng phải thông báo ngay cho DSP.one nếu phát hiện bất
            kỳ truy cập trái phép nào.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          5. Đơn Đặt Hàng, Thời Hạn Đăng Ký và Gia Hạn
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Đăng ký Dịch vụ của Khách hàng được chỉ định trong Đơn đặt
            hàng hoặc lựa chọn gói trực tuyến.
          </li>
          <li>
            Trừ khi có quy định khác, đăng ký chạy theo chu kỳ được Khách
            hàng chọn (hàng tháng, hàng quý hoặc hàng năm).
          </li>
          <li>
            Đăng ký tự động gia hạn cho các chu kỳ kế tiếp có cùng thời
            lượng trừ khi một trong hai bên đưa ra thông báo bằng văn bản
            về việc không gia hạn ít nhất 30 ngày trước.
          </li>
          <li>
            Khách hàng có thể nâng cấp gói đăng ký, thêm module hoặc tăng
            giới hạn sử dụng trong Thời hạn Đăng ký.
          </li>
          <li>
            Hạ cấp có thể chỉ có hiệu lực vào đầu Kỳ gia hạn tiếp theo và
            có thể dẫn đến mất tính năng hoặc dung lượng.
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
            Khách hàng sẽ thanh toán tất cả các khoản phí được chỉ định
            trong Đơn đặt hàng hoặc được trình bày tại thời điểm mua.
          </li>
          <li>
            Phí được tính theo Dịch vụ đã mua, không phải sử dụng thực tế,
            trừ khi gói áp dụng nêu rõ thanh toán dựa trên sử dụng.
          </li>
          <li>
            Phí không bao gồm các loại thuế giá trị gia tăng, thuế bán
            hàng hoặc các loại thuế tương tự. Khách hàng chịu trách nhiệm
            cho tất cả các loại thuế.
          </li>
          <li>
            Phí cho mỗi Thời hạn Đăng ký được tính trước và không được
            hoàn lại.
          </li>
          <li>
            Nếu Khách hàng không thanh toán khoản Phí đến hạn, DSP.one có
            thể tính lãi chậm trả và/hoặc đình chỉ quyền truy cập.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          7. Dùng Thử Miễn Phí
        </h2>
        <p className="text-gray-600 mb-4">
          DSP.one có thể cung cấp cho Khách hàng quyền truy cập Dịch vụ
          hoặc một số module trên cơ sở dùng thử miễn phí hoặc giảm phí.
          DSP.one có thể xác định thời lượng và phạm vi của bất kỳ Bản
          dùng thử nào theo quyết định riêng của mình.
        </p>
        <p className="text-gray-600">
          Trong thời gian Dùng thử, Dịch vụ được cung cấp &quot;nguyên
          trạng&quot; không có bất kỳ bảo đảm, hỗ trợ, cam kết mức dịch vụ
          hoặc nghĩa vụ sao lưu dữ liệu nào.
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
          <li>
            Đảm bảo Người dùng Được ủy quyền tuân thủ Điều khoản này và
            tất cả luật pháp áp dụng
          </li>
          <li>
            Tính chính xác, chất lượng và hợp pháp của Nội dung và Dữ liệu
            Khách hàng
          </li>
          <li>
            Có được tất cả quyền, giấy phép và sự đồng ý cần thiết để thu
            thập, lưu trữ và xử lý Dữ liệu Khách hàng
          </li>
          <li>
            Tuân thủ các điều khoản và chính sách của bất kỳ Nền tảng Bên
            thứ ba nào
          </li>
        </ul>
        <p className="text-gray-600 mb-2">
          <strong>Khách hàng không được:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>
            Sử dụng Dịch vụ theo bất kỳ cách nào bất hợp pháp, có hại, phỉ
            báng hoặc xúc phạm
          </li>
          <li>
            Cố gắng truy cập trái phép vào Dịch vụ, tài khoản, hệ thống
            hoặc mạng
          </li>
          <li>
            Can thiệp hoặc làm gián đoạn tính toàn vẹn hoặc hiệu suất của
            Dịch vụ
          </li>
          <li>
            Kỹ thuật đảo ngược, dịch ngược hoặc cố gắng suy ra mã nguồn từ
            Dịch vụ
          </li>
          <li>
            Sử dụng Dịch vụ để gửi thông tin liên lạc hàng loạt không được
            yêu cầu (spam)
          </li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          9. Nội Dung và Dữ Liệu Khách Hàng
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Khách hàng giữ lại tất cả quyền, quyền sở hữu và lợi ích đối
            với Nội dung và Dữ liệu Khách hàng.
          </li>
          <li>
            Khách hàng cấp cho DSP.one giấy phép toàn cầu, không độc
            quyền, miễn phí bản quyền để lưu trữ, sao chép, sử dụng Nội
            dung và Dữ liệu Khách hàng nhằm cung cấp và cải thiện Dịch vụ.
          </li>
          <li>
            DSP.one không giám sát Nội dung hoặc Dữ liệu Khách hàng về
            việc tuân thủ pháp luật và không chịu trách nhiệm về chúng.
          </li>
          <li>
            Khách hàng tự chịu trách nhiệm sao lưu và xuất Nội dung và Dữ
            liệu Khách hàng của mình.
          </li>
        </ul>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          10. Nội Dung Tạo Bởi AI
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Module AI Marketing có thể tạo nội dung hoặc đề xuất dựa trên
            lời nhắc, hướng dẫn hoặc Nội dung Khách hàng (&quot;Đầu ra
            AI&quot;).
          </li>
          <li>
            DSP.one chuyển nhượng cho Khách hàng bất kỳ quyền nào DSP.one
            có thể có trong Đầu ra AI được tạo cụ thể cho các chiến dịch
            của Khách hàng.
          </li>
          <li>
            Khách hàng tự chịu trách nhiệm xem xét, xác minh và phê duyệt
            tất cả Đầu ra AI trước khi sử dụng.
          </li>
          <li>
            Đầu ra AI có thể không chính xác, không đầy đủ, thiên vị hoặc
            không phù hợp. DSP.one không đảm bảo Đầu ra AI không có lỗi
            hoặc vi phạm.
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
            Dịch vụ có thể cho phép Khách hàng tích hợp với và xuất bản,
            đồng bộ hóa hoặc trao đổi dữ liệu với các Nền tảng Bên thứ ba
            như Meta, Google Analytics hoặc Ads.
          </li>
          <li>
            Việc sử dụng bất kỳ Nền tảng Bên thứ ba nào của Khách hàng
            được điều chỉnh hoàn toàn bởi các điều khoản và chính sách của
            bên thứ ba đó.
          </li>
          <li>
            DSP.one không kiểm soát và không chịu trách nhiệm về các Nền
            tảng Bên thứ ba.
          </li>
          <li>
            Khách hàng chịu trách nhiệm cấu hình tích hợp và quản lý quyền
            và token truy cập.
          </li>
        </ul>
      </section>

      {/* Section 12 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          12. Quyền Sở Hữu Trí Tuệ
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            DSP.one và các bên cấp phép giữ lại tất cả quyền, quyền sở hữu
            và lợi ích đối với Dịch vụ, Tài liệu, Website, phần mềm cơ
            bản, thuật toán, mô hình AI, thiết kế giao diện người dùng,
            nhãn hiệu và tất cả quyền sở hữu trí tuệ liên quan.
          </li>
          <li>
            DSP.one cấp cho Khách hàng giấy phép hạn chế, không độc quyền,
            không thể chuyển nhượng để truy cập và sử dụng Dịch vụ cho mục
            đích kinh doanh nội bộ của Khách hàng.
          </li>
          <li>
            Khách hàng không được xóa, che khuất hoặc thay đổi bất kỳ
            thông báo độc quyền nào hiển thị trong Dịch vụ.
          </li>
        </ul>
      </section>

      {/* Section 13 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          13. Bảo Mật Thông Tin
        </h2>
        <p className="text-gray-600 mb-4">
          Mỗi bên (&quot;Bên Nhận&quot;) có thể nhận thông tin bí mật hoặc
          độc quyền từ bên kia (&quot;Bên Tiết lộ&quot;) liên quan đến
          Điều khoản này và Dịch vụ (&quot;Thông tin Bí mật&quot;).
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Nghĩa vụ của Bên Nhận:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>
            Sử dụng Thông tin Bí mật chỉ cho mục đích thực hiện nghĩa vụ
            hoặc thực thi quyền theo Điều khoản này
          </li>
          <li>
            Bảo vệ Thông tin Bí mật với mức độ cẩn thận ít nhất tương
            đương với thông tin tương tự của chính mình
          </li>
          <li>
            Không tiết lộ Thông tin Bí mật cho bất kỳ bên thứ ba nào ngoại
            trừ nhân viên, nhà thầu cần biết
          </li>
        </ul>
      </section>

      {/* Section 14 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          14. Bảo Vệ Dữ Liệu và Bảo Mật
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Mỗi bên sẽ tuân thủ các luật bảo vệ dữ liệu và quyền riêng tư
            áp dụng liên quan đến việc xử lý dữ liệu cá nhân theo Điều
            khoản này.
          </li>
          <li>
            Chi tiết về cách DSP.one thu thập, sử dụng và bảo vệ dữ liệu
            cá nhân được nêu trong{" "}
            <LocaleLink
              href="/privacy"
              className="text-blue-600 hover:underline"
            >
              Chính sách Bảo mật
            </LocaleLink>{" "}
            của DSP.one.
          </li>
          <li>
            DSP.one triển khai các biện pháp bảo mật kỹ thuật và tổ chức
            hợp lý được thiết kế để bảo vệ Dữ liệu Khách hàng.
          </li>
          <li>
            Nếu DSP.one biết về vi phạm dữ liệu cá nhân ảnh hưởng đến Dữ
            liệu Khách hàng, DSP.one sẽ thông báo cho Khách hàng mà không
            chậm trễ.
          </li>
        </ul>
      </section>

      {/* Section 15 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          15. Khả Dụng Dịch Vụ, Hỗ Trợ và Thay Đổi
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            DSP.one sẽ nỗ lực thương mại hợp lý để làm cho các thành phần
            cốt lõi của Dịch vụ khả dụng.
          </li>
          <li>
            Dịch vụ có thể tạm thời không khả dụng do bảo trì theo kế
            hoạch hoặc bảo trì khẩn cấp không theo kế hoạch.
          </li>
          <li>
            DSP.one cung cấp hỗ trợ kỹ thuật tiêu chuẩn cho Dịch vụ thông
            qua các kênh được mô tả trên Website trong giờ làm việc bình
            thường.
          </li>
          <li>
            DSP.one có thể sửa đổi Dịch vụ để cải thiện chức năng, thêm
            tính năng, đảm bảo bảo mật hoặc tuân thủ pháp luật.
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
            Điều khoản này bắt đầu từ Ngày Hiệu lực và tiếp tục miễn là
            Khách hàng có Thời hạn Đăng ký hoạt động.
          </li>
          <li>
            Một trong hai bên có thể chấm dứt Điều khoản này vì lý do bằng
            cách đưa ra thông báo bằng văn bản nếu bên kia vi phạm nghiêm
            trọng và không khắc phục trong 30 ngày.
          </li>
          <li>
            DSP.one có thể chấm dứt ngay lập tức nếu Khách hàng không
            thanh toán Phí trong 30 ngày sau khi nhận được nhắc nhở.
          </li>
          <li>
            Khi chấm dứt, quyền truy cập và sử dụng Dịch vụ của Khách hàng
            sẽ chấm dứt và Khách hàng phải thanh toán ngay mọi khoản Phí
            còn nợ.
          </li>
          <li>
            Trong khoảng thời gian giới hạn sau chấm dứt (30 ngày),
            DSP.one có thể cho phép Khách hàng xuất hoặc tải xuống Nội
            dung và Dữ liệu Khách hàng.
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
            DSP.one bảo đảm rằng, trong Thời hạn Đăng ký áp dụng, Dịch vụ
            sẽ hoạt động về mọi mặt trọng yếu theo Tài liệu hướng dẫn.
          </li>
          <li>
            Ngoại trừ những gì được quy định rõ ràng trong Điều khoản này,
            Dịch vụ được cung cấp &quot;NGUYÊN TRẠNG&quot; và &quot;NHƯ CÓ
            SẴN&quot; không có bất kỳ bảo đảm nào.
          </li>
          <li>
            DSP.one từ chối cụ thể mọi bảo đảm ngầm định về khả năng bán
            được, sự phù hợp cho một mục đích cụ thể và không vi phạm.
          </li>
          <li>
            DSP.one không bảo đảm Dịch vụ sẽ không bị gián đoạn, không có
            lỗi, hoàn toàn an toàn hoặc không có thành phần có hại.
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
            Trong phạm vi tối đa được pháp luật cho phép, không bên nào sẽ
            chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên,
            đặc biệt, hệ quả, mang tính răn đe hoặc trừng phạt nào.
          </li>
          <li>
            Tổng trách nhiệm của mỗi bên sẽ không vượt quá tổng số Phí
            thực tế được Khách hàng thanh toán trong 12 tháng ngay trước
            sự kiện phát sinh khiếu nại.
          </li>
          <li>
            Các giới hạn này không áp dụng cho nghĩa vụ thanh toán của
            Khách hàng, trách nhiệm về tử vong hoặc thương tích cá nhân do
            sơ suất, gian lận hoặc hành vi sai trái cố ý.
          </li>
        </ul>
      </section>

      {/* Section 19 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          19. Bồi Thường
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Bồi thường của Khách hàng:</strong> Khách hàng sẽ bồi
          thường, bảo vệ và giữ cho DSP.one không bị tổn hại khỏi mọi
          khiếu nại, thiệt hại, tổn thất, trách nhiệm, chi phí và phí tổn
          phát sinh từ hoặc liên quan đến:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
          <li>
            Nội dung hoặc Dữ liệu Khách hàng vi phạm quyền sở hữu trí tuệ,
            quyền riêng tư hoặc quyền khác
          </li>
          <li>
            Việc sử dụng Dịch vụ của Khách hàng vi phạm Điều khoản này,
            chính sách nền tảng hoặc pháp luật
          </li>
          <li>
            Bất kỳ thông tin liên lạc, chiến dịch, quảng cáo nào được
            Khách hàng tạo hoặc phân phối bằng Dịch vụ
          </li>
        </ul>
        <p className="text-gray-600">
          <strong>Bồi thường của DSP.one:</strong> DSP.one sẽ bảo vệ Khách
          hàng chống lại bất kỳ khiếu nại của bên thứ ba nào cáo buộc việc
          sử dụng Dịch vụ được ủy quyền của Khách hàng vi phạm quyền sở
          hữu trí tuệ.
        </p>
      </section>

      {/* Section 20 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          20. Sự Kiện Bất Khả Kháng
        </h2>
        <p className="text-gray-600">
          Không bên nào sẽ chịu trách nhiệm cho bất kỳ thất bại hoặc chậm
          trễ nào trong việc thực hiện nghĩa vụ (ngoại trừ nghĩa vụ thanh
          toán) trong phạm vi gây ra bởi các sự kiện ngoài tầm kiểm soát
          hợp lý của mình, bao gồm nhưng không giới hạn ở thiên tai, chiến
          tranh, hành vi khủng bố, bất ổn dân sự, đình công, tranh chấp
          lao động, lỗi tiện ích công cộng hoặc mạng viễn thông, hành vi
          của chính phủ hoặc cơ quan quản lý.
        </p>
      </section>

      {/* Section 21 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          21. Luật Áp Dụng và Giải Quyết Tranh Chấp
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Điều khoản này và bất kỳ tranh chấp, khiếu nại hoặc tranh cãi
            nào phát sinh từ hoặc liên quan đến chúng hoặc Dịch vụ sẽ được
            điều chỉnh bởi và giải thích theo luật pháp của{" "}
            <strong>Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>.
          </li>
          <li>
            Các bên trước tiên sẽ cố gắng giải quyết mọi tranh chấp một
            cách hòa giải thông qua đàm phán thiện chí.
          </li>
          <li>
            Nếu các bên không thể giải quyết tranh chấp trong 30 ngày, một
            trong hai bên có thể đệ trình tranh chấp lên tòa án có thẩm
            quyền tại <strong>Thành phố Hồ Chí Minh, Việt Nam</strong>,
            nơi sẽ có thẩm quyền độc quyền.
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
            <strong>Toàn bộ thỏa thuận:</strong> Điều khoản này, cùng với
            bất kỳ Đơn đặt hàng, thỏa thuận xử lý dữ liệu và chính sách áp
            dụng nào, tạo thành toàn bộ thỏa thuận giữa các bên.
          </li>
          <li>
            <strong>Sửa đổi:</strong> DSP.one có thể cập nhật Điều khoản
            này theo thời gian. Khi có thay đổi quan trọng, DSP.one sẽ
            đăng Điều khoản cập nhật trên Website và có thể thông báo cho
            Khách hàng.
          </li>
          <li>
            <strong>Chuyển nhượng:</strong> Khách hàng không được chuyển
            nhượng, chuyển giao hoặc ủy quyền bất kỳ quyền hoặc nghĩa vụ
            nào mà không có sự đồng ý bằng văn bản trước của DSP.one.
          </li>
          <li>
            <strong>Nhà thầu độc lập:</strong> Các bên là nhà thầu độc lập
            và không có gì trong Điều khoản này tạo ra quan hệ đối tác,
            liên doanh, đại lý hoặc việc làm.
          </li>
          <li>
            <strong>Tách rời:</strong> Nếu bất kỳ điều khoản nào bị coi là
            không hợp lệ hoặc không thể thi hành, các điều khoản còn lại
            sẽ vẫn có hiệu lực đầy đủ.
          </li>
          <li>
            <strong>Không từ bỏ:</strong> Việc một bên không thi hành bất
            kỳ quyền hoặc điều khoản nào sẽ không cấu thành sự từ bỏ quyền
            hoặc điều khoản đó.
          </li>
          <li>
            <strong>Ngôn ngữ:</strong> Điều khoản này được soạn thảo bằng
            tiếng Anh. Nếu được dịch sang ngôn ngữ khác, phiên bản tiếng
            Anh sẽ được ưu tiên trong trường hợp có xung đột.
          </li>
        </ul>
      </section>

      {/* Section 23 - Contact */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          23. Liên Hệ
        </h2>
        <p className="text-gray-600 mb-4">
          Nếu bạn có bất kỳ câu hỏi nào về Điều khoản này hoặc Dịch vụ,
          vui lòng liên hệ với DSP.one tại:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">
            Uniksmart Company
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Địa chỉ:</strong> Tầng 01, 232 Lê Văn Lương,
              Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hoc.thai@tienphongcds.com"
                className="text-blue-600 hover:underline"
              >
                hoc.thai@tienphongcds.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://uniksmark.dsp.one/en"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://uniksmark.dsp.one/en
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

// English Content Component
function TermsContentEn() {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-600 leading-relaxed mb-8">
        These Terms of Service (&quot;Terms&quot;) govern access to and use of
        the DSP.one platform and related services, including the AI Marketing
        module (collectively, the &quot;Service&quot;) provided by
        <strong> Uniksmart Company</strong> (&quot;Uniksmart&quot;, &quot;DSP.one&quot;, &quot;we&quot;).
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
        <p className="text-amber-800 text-sm">
          <strong>Important Note:</strong> These Terms are designed for
          business use (B2B). The Service is not intended for individual
          consumers for personal use.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          1. Definitions
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <strong>&quot;Account&quot;</strong> means the online account registered by or on behalf of Customer to use the Service.
          </li>
          <li>
            <strong>&quot;Authorized User&quot;</strong> means an individual authorized by Customer to access and use the Service (employees, contractors, or agents).
          </li>
          <li>
            <strong>&quot;Customer Content&quot;</strong> means all content, data, text, images, videos that Customer uploads or creates in the Service.
          </li>
          <li>
            <strong>&quot;Customer Data&quot;</strong> means data related to Customer's customers, prospects, and end users.
          </li>
          <li>
            <strong>&quot;AI Marketing Module&quot;</strong> means the marketing automation and content generation features of the DSP.one platform.
          </li>
          <li>
            <strong>&quot;Third-Party Platform&quot;</strong> means third-party products, services or applications that interact with the Service (Meta, Google, etc.).
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          2. Scope of Agreement
        </h2>
        <p className="text-gray-600 mb-4">
          These Terms constitute a binding agreement between Customer and DSP.one and govern Customer's use of the Service.
        </p>
        <p className="text-gray-600">
          In the event of any conflict between these Terms and an Order, the Order shall prevail to the extent of the conflict.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          3. Service Description
        </h2>
        <p className="text-gray-600 mb-4">
          DSP.one provides a cloud-based omnichannel commerce and marketing platform, enabling Customer to manage products, orders, customers, websites, online sales channels, and marketing activities from a unified interface.
        </p>
        <p className="text-gray-600 mb-2">
          <strong>The Service may include:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Product catalog, order, and inventory management</li>
          <li>Customer and contact management (CRM features)</li>
          <li>Website and landing page creation and hosting</li>
          <li>
            AI Marketing Module: campaign planning, AI-assisted content writing, scheduling, and automation of posts/ads
          </li>
          <li>
            Integration with Third-Party Platforms such as Meta, Google, email and messaging tools
          </li>
          <li>Dashboard, analytics, reporting, and metrics</li>
          <li>APIs and webhooks for programmatic access</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          4. Account Registration and Security
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            To access the Service, Customer must create an Account and provide accurate, complete, and current information.
          </li>
          <li>
            Customer may create separate logins for Authorized Users as permitted by the subscription plan.
          </li>
          <li>
            Each login credential is personal to one user and may not be shared with any other individual.
          </li>
          <li>
            Customer is responsible for maintaining the confidentiality of all login credentials and for all activities occurring under its Account.
          </li>
          <li>
            Customer must notify DSP.one immediately upon becoming aware of any unauthorized access.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          5. Orders, Subscription Term, and Renewal
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Customer's subscription to the Service is specified in the Order or online plan selection.
          </li>
          <li>
            Unless otherwise specified, subscriptions run on cycles chosen by Customer (monthly, quarterly, or annually).
          </li>
          <li>
            Subscriptions automatically renew for subsequent periods of the same duration unless either party gives written notice of non-renewal at least 30 days before.
          </li>
          <li>
            Customer may upgrade the subscription plan, add modules, or increase usage limits during the Subscription Term.
          </li>
          <li>
            Downgrades may only take effect at the start of the next Renewal Term and may result in loss of features or capacity.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          6. Fees, Payment, and Invoicing
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Customer will pay all fees specified in the Order or presented at time of purchase.
          </li>
          <li>
            Fees are based on Services purchased, not actual usage, unless the applicable plan expressly states usage-based billing.
          </li>
          <li>
            Fees do not include value-added taxes, sales taxes, or similar taxes. Customer is responsible for all taxes.
          </li>
          <li>
            Fees for each Subscription Term are billed in advance and are non-refundable.
          </li>
          <li>
            If Customer fails to pay any Fee when due, DSP.one may charge late fees and/or suspend access.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          7. Free Trials
        </h2>
        <p className="text-gray-600 mb-4">
          DSP.one may offer Customer access to the Service or certain modules on a free trial or reduced-fee basis.
          DSP.one may determine the duration and scope of any Trial at its sole discretion.
        </p>
        <p className="text-gray-600">
          During the Trial, the Service is provided &quot;as is&quot; without any warranties, support, service level commitments, or data backup obligations.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          8. Customer Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Customer is responsible for:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
          <li>Configuring and using the Service</li>
          <li>
            Ensuring Authorized Users comply with these Terms and all applicable laws
          </li>
          <li>
            The accuracy, quality, and legality of Customer Content and Data
          </li>
          <li>
            Obtaining all necessary rights, licenses, and consents to collect, store, and process Customer Data
          </li>
          <li>
            Complying with the terms and policies of any Third-Party Platforms
          </li>
        </ul>
        <p className="text-gray-600 mb-2">
          <strong>Customer must not:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>
            Use the Service in any unlawful, harmful, defamatory, or offensive manner
          </li>
          <li>
            Attempt unauthorized access to the Service, accounts, systems, or networks
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Service
          </li>
          <li>
            Reverse engineer, decompile, or attempt to derive source code from the Service
          </li>
          <li>
            Use the Service to send unsolicited bulk communications (spam)
          </li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          9. Customer Content and Data
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Customer retains all rights, title, and interest in Customer Content and Data.
          </li>
          <li>
            Customer grants DSP.one a worldwide, non-exclusive, royalty-free license to store, copy, use Customer Content and Data for the purpose of providing and improving the Service.
          </li>
          <li>
            DSP.one does not monitor Customer Content or Data for legal compliance and is not responsible for them.
          </li>
          <li>
            Customer is solely responsible for backing up and exporting its Customer Content and Data.
          </li>
        </ul>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          10. AI-Generated Content
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            The AI Marketing Module may generate content or suggestions based on prompts, instructions, or Customer Content (&quot;AI Output&quot;).
          </li>
          <li>
            DSP.one assigns to Customer any rights DSP.one may have in AI Output specifically generated for Customer's campaigns.
          </li>
          <li>
            Customer is solely responsible for reviewing, verifying, and approving all AI Output before use.
          </li>
          <li>
            AI Output may be inaccurate, incomplete, biased, or inappropriate. DSP.one does not warrant that AI Output is error-free or non-infringing.
          </li>
        </ul>
      </section>

      {/* Section 11 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          11. Third-Party Platforms and Integrations
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            The Service may allow Customer to integrate with and publish, sync, or exchange data with Third-Party Platforms such as Meta, Google Analytics, or Ads.
          </li>
          <li>
            Customer's use of any Third-Party Platform is governed solely by that third party's terms and policies.
          </li>
          <li>
            DSP.one does not control and is not responsible for Third-Party Platforms.
          </li>
          <li>
            Customer is responsible for configuring integrations and managing permissions and access tokens.
          </li>
        </ul>
      </section>

      {/* Section 12 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          12. Intellectual Property Rights
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            DSP.one and its licensors retain all rights, title, and interest in the Service, Documentation, Website, underlying software, algorithms, AI models, user interface design, trademarks, and all related intellectual property rights.
          </li>
          <li>
            DSP.one grants Customer a limited, non-exclusive, non-transferable license to access and use the Service for Customer's internal business purposes.
          </li>
          <li>
            Customer must not remove, obscure, or alter any proprietary notices displayed in the Service.
          </li>
        </ul>
      </section>

      {/* Section 13 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          13. Confidentiality
        </h2>
        <p className="text-gray-600 mb-4">
          Each party (&quot;Recipient&quot;) may receive confidential or proprietary information from the other party (&quot;Discloser&quot;) relating to these Terms and the Service (&quot;Confidential Information&quot;).
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Recipient obligations:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>
            Use Confidential Information solely for performing obligations or exercising rights under these Terms
          </li>
          <li>
            Protect Confidential Information with at least the same degree of care as similar information of its own
          </li>
          <li>
            Not disclose Confidential Information to any third party except employees and contractors with need-to-know
          </li>
        </ul>
      </section>

      {/* Section 14 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          14. Data Protection and Security
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            Each party will comply with applicable data protection and privacy laws regarding processing of personal data under these Terms.
          </li>
          <li>
            Details on how DSP.one collects, uses, and protects personal data are set forth in DSP.one's{" "}
            <LocaleLink
              href="/privacy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </LocaleLink>.
          </li>
          <li>
            DSP.one implements reasonable technical and organizational security measures designed to protect Customer Data.
          </li>
          <li>
            If DSP.one becomes aware of a personal data breach affecting Customer Data, DSP.one will notify Customer without undue delay.
          </li>
        </ul>
      </section>

      {/* Section 15 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          15. Service Availability, Support, and Changes
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            DSP.one will use commercially reasonable efforts to make the core components of the Service available.
          </li>
          <li>
            The Service may be temporarily unavailable due to scheduled maintenance or unplanned emergency maintenance.
          </li>
          <li>
            DSP.one provides standard technical support for the Service through channels described on the Website during normal business hours.
          </li>
          <li>
            DSP.one may modify the Service to improve functionality, add features, ensure security, or comply with laws.
          </li>
        </ul>
      </section>

      {/* Section 16 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          16. Term and Termination
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            These Terms begin on the Effective Date and continue as long as Customer has an active Subscription Term.
          </li>
          <li>
            Either party may terminate these Terms for cause by giving written notice if the other party materially breaches and fails to cure within 30 days.
          </li>
          <li>
            DSP.one may terminate immediately if Customer fails to pay Fees within 30 days after receiving a reminder.
          </li>
          <li>
            Upon termination, Customer's right to access and use the Service will cease and Customer must pay immediately any outstanding Fees.
          </li>
          <li>
            For a limited period after termination (30 days), DSP.one may allow Customer to export or download Customer Content and Data.
          </li>
        </ul>
      </section>

      {/* Section 17 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          17. Warranties and Disclaimers
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            DSP.one warrants that, during the applicable Subscription Term, the Service will perform in all material respects as described in the Documentation.
          </li>
          <li>
            Except as expressly set forth in these Terms, the Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties.
          </li>
          <li>
            DSP.one specifically disclaims all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </li>
          <li>
            DSP.one does not warrant that the Service will be uninterrupted, error-free, completely secure, or free from harmful components.
          </li>
        </ul>
      </section>

      {/* Section 18 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          18. Limitation of Liability
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            To the maximum extent permitted by law, neither party will be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages.
          </li>
          <li>
            Each party's aggregate liability will not exceed the total Fees actually paid by Customer in the 12 months immediately preceding the event giving rise to the claim.
          </li>
          <li>
            These limitations do not apply to Customer's payment obligations, liability for death or personal injury caused by negligence, fraud, or willful misconduct.
          </li>
        </ul>
      </section>

      {/* Section 19 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          19. Indemnification
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Customer Indemnification:</strong> Customer will indemnify, defend, and hold DSP.one harmless from all claims, damages, losses, liabilities, costs, and expenses arising from or related to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
          <li>
            Customer Content or Data that infringes intellectual property, privacy, or other rights
          </li>
          <li>
            Customer's use of the Service in violation of these Terms, platform policies, or laws
          </li>
          <li>
            Any communications, campaigns, or ads created or distributed by Customer using the Service
          </li>
        </ul>
        <p className="text-gray-600">
          <strong>DSP.one Indemnification:</strong> DSP.one will defend Customer against any third-party claim alleging that Customer's authorized use of the Service infringes intellectual property rights.
        </p>
      </section>

      {/* Section 20 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          20. Force Majeure
        </h2>
        <p className="text-gray-600">
          Neither party will be liable for any failure or delay in performing obligations (except payment obligations) to the extent caused by events beyond its reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, strikes, labor disputes, utility failures or telecommunications failures, acts of government or regulatory authorities.
        </p>
      </section>

      {/* Section 21 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          21. Governing Law and Dispute Resolution
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            These Terms and any dispute, claim, or controversy arising from or relating to them or the Service shall be governed by and construed in accordance with the laws of{" "}
            <strong>the Socialist Republic of Vietnam</strong>.
          </li>
          <li>
            The parties will first attempt to resolve any dispute amicably through good faith negotiations.
          </li>
          <li>
            If the parties cannot resolve the dispute within 30 days, either party may submit the dispute to the competent court in <strong>Ho Chi Minh City, Vietnam</strong>,
            which shall have exclusive jurisdiction.
          </li>
        </ul>
      </section>

      {/* Section 22 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          22. Miscellaneous
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <strong>Entire Agreement:</strong> These Terms, together with any Orders, data processing agreements, and applicable policies, constitute the entire agreement between the parties.
          </li>
          <li>
            <strong>Modifications:</strong> DSP.one may update these Terms from time to time. When material changes are made, DSP.one will post the updated Terms on the Website and may notify Customer.
          </li>
          <li>
            <strong>Assignment:</strong> Customer may not assign, transfer, or delegate any rights or obligations without DSP.one's prior written consent.
          </li>
          <li>
            <strong>Independent Contractors:</strong> The parties are independent contractors and nothing in these Terms creates a partnership, joint venture, agency, or employment relationship.
          </li>
          <li>
            <strong>Severability:</strong> If any provision is held to be invalid or unenforceable, the remaining provisions will remain in full effect.
          </li>
          <li>
            <strong>No Waiver:</strong> A party's failure to enforce any right or provision will not constitute a waiver of that right or provision.
          </li>
          <li>
            <strong>Language:</strong> These Terms are drafted in English. If translated into another language, the English version will control in case of conflict.
          </li>
        </ul>
      </section>

      {/* Section 23 - Contact */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          23. Contact
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about these Terms or the Service,
          please contact DSP.one at:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">
            Uniksmart Company
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Address:</strong> Floor 01, 232 Le Van Luong,
              Tan Hung Ward, District 7, Ho Chi Minh City, Vietnam
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hoc.thai@tienphongcds.com"
                className="text-blue-600 hover:underline"
              >
                hoc.thai@tienphongcds.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://uniksmark.dsp.one/en"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://uniksmark.dsp.one/en
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

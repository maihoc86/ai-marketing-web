import { NextRequest, NextResponse } from "next/server";

interface RegistrationData {
  registration_type: "business" | "starter";
  name: string;
  email: string;
  phone_number: string;
  position: string;
  company_name?: string;
  tax_code?: string;
  activity_field?: string;
  address?: string;
}

/**
 * POST /api/users/register-company
 * Handle company registration
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const data: RegistrationData = await request.json();

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.phone_number ||
      !data.position ||
      !data.registration_type
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng điền đầy đủ thông tin bắt buộc",
        },
        { status: 400 },
      );
    }

    // Validate business-specific fields for business package
    if (data.registration_type === "business" && !data.company_name) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập tên doanh nghiệp",
        },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Email không hợp lệ",
        },
        { status: 400 },
      );
    }

    // Phone validation (9-10 digits)
    const cleanPhone = data.phone_number.replace(/\s/g, "");
    const phoneRegex = /^(0\d{9}|\d{9})$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Số điện thoại không hợp lệ",
        },
        { status: 400 },
      );
    }

    // Forward to backend API
    console.log("Forwarding registration to backend:", {
      registration_type: data.registration_type,
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      position: data.position,
      company_name: data.company_name,
      tax_code: data.tax_code,
      activity_field: data.activity_field,
      address: data.address,
    });

    try {
      const backendResponse = await fetch(
        "https://api-ai-code.dsp.one/api/users/register-company",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await backendResponse.json();

      console.log("Backend response:", {
        status: backendResponse.status,
        ok: backendResponse.ok,
        result,
      });

      // If backend returns success (200-299 status codes)
      if (backendResponse.ok) {
        // Ensure the response has success: true
        return NextResponse.json(
          {
            success: true,
            message:
              result.message ||
              "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
          },
          { status: 200 },
        );
      }

      // Handle error responses
      console.error("Backend API error:", result);
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Có lỗi xảy ra khi đăng ký",
        },
        { status: backendResponse.status },
      );
    } catch (fetchError) {
      console.error("Failed to reach backend API:", fetchError);
      return NextResponse.json(
        {
          success: false,
          message: "Không thể kết nối đến server, vui lòng thử lại sau",
        },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra, vui lòng thử lại sau",
      },
      { status: 500 },
    );
  }
}

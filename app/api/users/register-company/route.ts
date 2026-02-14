import { NextRequest, NextResponse } from "next/server";

interface RegistrationData {
  registration_type: "business" | "starter";
  name: string;
  email: string;
  phone_number: string;
  position: string;
  locale?: string; // 'vi' or 'en'
  company_name?: string;
  tax_code?: string;
  activity_field?: string;
  address?: string;
  additional_information?: {
    facebook_urls?: string[];
    instagram_urls?: string[];
    tiktok_urls?: string[];
    [key: string]: any; // Allow dynamic fields
  };
}

// =============================================================================
// CSRF PROTECTION - Origin Check
// Validates that requests come from allowed origins
// =============================================================================
function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const allowedOrigins: string[] = [
    process.env.NEXT_PUBLIC_APP_URL,
    "https://uniksmart.ai",
    "https://www.uniksmart.ai",
  ].filter((o): o is string => Boolean(o));

  // Development: allow localhost
  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.push(
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
    );
  }

  // Check origin header
  if (origin && allowedOrigins.includes(origin)) {
    return true;
  }

  // Fallback: check referer (some browsers don't send origin for same-origin)
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      if (allowedOrigins.includes(refererOrigin)) {
        return true;
      }
    } catch {
      // Invalid referer URL
    }
  }

  // In development, allow requests without origin (e.g., from API clients)
  if (process.env.NODE_ENV !== "production" && !origin && !referer) {
    return true;
  }

  return false;
}

/**
 * POST /api/users/register-company
 * Handle company registration
 */
export async function POST(request: NextRequest) {
  try {
    // CSRF Protection: Validate origin
    if (!validateOrigin(request)) {
      return NextResponse.json(
        { success: false, message: "Invalid request origin" },
        { status: 403 },
      );
    }

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

    // Phone validation
    const cleanPhone = data.phone_number.replace(/[\s\-().]/g, "");

    // Vietnam format: 0xxxxxxxxx (10 digits starting with 03/05/07/08/09)
    const vnPhoneRegex = /^0[3|5|7|8|9]\d{8}$/;

    // US format: 10 digits starting with 2-9
    const usPhoneRegex = /^[2-9]\d{9}$/;

    const isValidPhone =
      vnPhoneRegex.test(cleanPhone) || usPhoneRegex.test(cleanPhone);

    if (!isValidPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is invalid (VN or US formats only)",
        },
        { status: 400 },
      );
    }

    // Forward to backend API
    // Note: Only log non-PII metadata for debugging (GDPR/PDPA compliant)
    console.log("[Registration] Forwarding to backend:", {
      registration_type: data.registration_type,
      position: data.position,
      activity_field: data.activity_field,
      has_email: Boolean(data.email),
      has_phone: Boolean(data.phone_number),
      has_company: Boolean(data.company_name),
      has_tax_code: Boolean(data.tax_code),
      has_address: Boolean(data.address),
      has_additional_info: Boolean(data.additional_information),
      facebook_urls_count:
        data.additional_information?.facebook_urls?.length || 0,
      instagram_urls_count:
        data.additional_information?.instagram_urls?.length || 0,
      tiktok_urls_count: data.additional_information?.tiktok_urls?.length || 0,
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

      // Note: Only log response metadata, not full result (may contain PII)
      console.log("[Registration] Backend response:", {
        status: backendResponse.status,
        ok: backendResponse.ok,
        success: result?.success,
        hasMessage: Boolean(result?.message),
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

      // Handle error responses (log only non-PII error info)
      console.error("[Registration] Backend API error:", {
        status: backendResponse.status,
        errorCode: result?.code,
        hasMessage: Boolean(result?.message),
      });
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

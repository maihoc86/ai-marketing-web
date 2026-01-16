# AI Marketing Web

Ứng dụng web AI Marketing được xây dựng với Next.js 16, React 19 và Tailwind CSS.

## Công nghệ sử dụng

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **UI Library**: Tailwind CSS 4.1.18
- **Component Library**: Radix UI
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Analytics**: Vercel Analytics
- **Language**: TypeScript 5

## Yêu cầu hệ thống

- Node.js 20+
- pnpm (khuyến nghị)

## Cài đặt

```bash
# Clone repository
git clone https://gitlab.com/omni.channel/ai-marketing-web.git

# Di chuyển vào thư mục dự án
cd ai-marketing-web

# Cài đặt dependencies
pnpm install
```

## Chạy ứng dụng

### Development

```bash
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

### Production Build

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## Cấu trúc thư mục

```
ai-marketing-fe/
├── app/                    # App Router (Next.js 16)
│   ├── actions/           # Server Actions
│   ├── chinh-sach-bao-mat/ # Privacy Policy
│   ├── dang-ky/           # Registration
│   ├── dieu-khoan/        # Terms
│   ├── ve-chung-toi/      # About Us
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utility functions
├── public/                # Static assets
└── next.config.mjs        # Next.js configuration
```

## Quy tắc phát triển

### Branching Strategy

- `main`: Production branch
- `dev`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches

### Commit Convention

Sử dụng Conventional Commits:

```
feat: thêm tính năng mới
fix: sửa lỗi
docs: cập nhật tài liệu
style: thay đổi style (không ảnh hưởng code logic)
refactor: refactor code
test: thêm hoặc sửa tests
chore: cập nhật build, dependencies
```

## Môi trường

Tạo file `.env.local` từ `.env.example` và cấu hình các biến môi trường cần thiết.

## Đóng góp

1. Tạo branch mới từ `dev`
2. Commit thay đổi của bạn
3. Push lên GitLab
4. Tạo Merge Request vào `dev`

## License

Private - All rights reserved

## Liên hệ

- Repository: https://gitlab.com/omni.channel/ai-marketing-web

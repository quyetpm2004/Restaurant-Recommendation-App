# Restaurant Recommendation App

Ứng dụng web gợi ý nhà hàng theo điều kiện người dùng (ngân sách, số người, món ăn, tiện ích), kèm phân tích xu hướng từ trải nghiệm thực tế. Dự án phát triển trong khuôn khổ học phần **ITSS-2 (HUST)**, áp dụngphương pháp phát triển **Lean Startup** để xây dựng **MVP (Minimum Viable Product)**.

## Tính năng chính

- **Tìm kiếm có điều kiện**: số người, ngân sách/người, món mong muốn, tiện ích
- **Xếp hạng độ phù hợp**: điểm 0–100 với trọng số ưu tiên món ăn
- **Kết quả có giải thích**: tiêu chí khớp / chưa khớp từng nhà hàng
- **Chi tiết nhà hàng**: thực đơn, biểu đồ xu hướng (đông/vắng, chờ, giá, tiện ích)
- **Gửi trải nghiệm**: cập nhật biểu đồ 
- **Cá nhân hóa xu hướng**: lọc trải nghiệm từ người có hoàn cảnh tương tự (ngân sách, nhóm, tiện ích)

## Công nghệ sử dụng

| Lớp | Công nghệ |
|-----|-----------|
| Framework | [React](https://react.dev/) 18 |
| Build tool | [Vite](https://vitejs.dev/) 6 |
| Ngôn ngữ | TypeScript |
| Routing | [React Router](https://reactrouter.com/) 7 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 |
| UI components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) pattern |
| Biểu đồ | [Recharts](https://recharts.org/) |
| Thông báo | [Sonner](https://sonner.emilkowal.ski/) |
| Icon | [Lucide React](https://lucide.dev/) |
| Dữ liệu (MVP) | Mock data + `localStorage` |

## Yêu cầu hệ thống

- **Node.js** 18 trở lên (khuyến nghị 20 LTS)
- **npm** hoặc **pnpm**

## Cài đặt và chạy

```bash
# Clone repository (nếu chưa có)
git clone <repository-url>
cd "Restaurant Recommendation App"

# Cài dependency
npm install

# Chạy development server
npm run dev


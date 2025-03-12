<<<<<<< HEAD
# Day1
1. Backend Development là phần phát triển phía sau gọi là server-side, nơi xử lý các logic, cơ sở dữ liệu, người dùng. Bao gồm viết APIs, quản lý dữ liệu và bảo mât.
 - Quan trọng bởi vì có Xử lý dữ liệu, Bảo mật, tương tác với cơ sở dữ liệu.
2. Thành phần chính của Backend: 
  -  Server, Dữ liệu, API, Kiểm tra và cấp quyền truy cập cho người dùng.
3. Sự khác nhau giữa Backend và FrontEnd
  Backend:                                  
  - Xử lý logic, quản lý dữ liệu, xác thực người dùng, giao tiếp với cơ sở dữ liệu
  - Là một hệ thống máy chủ, API
  - Quản lý và truy xuất dữ liệu 
  - Nhận yêu cầu từ frontend, trả về kết quản
  Frontend: 
  - Giao diện người dùng, hiển thị dữ liệu, tương tác với người dùng
  - Gửi yêu cầu đến Backend thông qua API
4. TypeScript: TypeScript là một ngôn ngữ lập trình mở rộng từ JavaScript, bổ sung hệ thống kiểu tĩnh và hỗ trợ các tính năng như interfaces và generics. Typescript giúp bạn phát hiện lỗi ngay ở giai đoạn biên dịch (compile-time) thay vì đợi đến lúc chạy chương trình (runtime), 
5. Redis: Redis là một cơ sở dữ liệu NoSQL dạng key-value hoạt động trong bộ nhớ (in-memory), giúp truy xuất dữ liệu nhanh chóng. Redis thường được dùng để: Lưu trữ cache, Quản lý session, Hàng đợi tin nhắn, Lưu trữ dữ liệu tạm thời.
6. NestJs: NestJS là một framework backend mạnh mẽ cho Node.js, xây dựng trên TypeScript và sử dụng kiến trúc Module + Dependency Injection, giúp dễ dàng mở rộng và bảo trì. NestJS dựa trên Express và phù hợp để xây dựng API RESTful hoặc GraphQL.
7. EsLint: ESLint là một công cụ phân tích mã nguồn giúp phát hiện và sửa lỗi code JavaScript/TypeScript theo các quy tắc (rules) định trước. Nó giúp: Phát hiện lỗi cú pháp và logic, Bắt buộc tuân theo coding style chuẩn, Hạn chế lỗi runtime.
8. Prettier: Prettier là một công cụ định dạng mã nguồn (code formatter) tự động sắp xếp và căn chỉnh code, giúp: Code dễ đọc hơn, Giảm bớt tranh luận về style code, Kết hợp với ESLint để tạo workflow code sạch
9. Package.json: là file cấu hình chính của một dự án Node.js, chứa:
Thông tin dự án (name, version, description, author, license,...)
Danh sách dependencies (các thư viện và phiên bản sử dụng)
Scripts (các lệnh như npm start, npm test,...)
10. dependencies and devDependencies: 
   - dependencies: Chứa các thư viện cần thiết để ứng dụng chạy đúng (dùng cả trong môi trường production và development).Ví dụ: express, mongoose, react,...
   - devDependencies: Chứa các thư viện chỉ dùng trong quá trình phát triển, không cần thiết khi chạy production. Ví dụ: eslint, prettier, webpack,...
11. Sự khác biệt giữa Git merge và Git rebase: 
  - Git merge: 
+  Dùng để hợp nhất hai nhánh, tạo một commit mới.
+  Giữ nguyên lịch sử commit.
+  Thường dùng khi làm việc nhóm để duy trì lịch sử rõ ràng.
  - Git rebase: 
+  Di chuyển toàn bộ lịch sử commit của một nhánh lên đầu của nhánh khác.
+  Không tạo commit merge, giúp lịch sử sạch hơn.
12. Sự khác nhau giữa Git reset, Git checkout, Git revert
  - Git reset: Xóa commit khỏi lịch sử
  - Git checkout: Chuyển nhánh 
  - Git revert: Tạo commit mới để đảo ngược thay đổi của commit trước đó 


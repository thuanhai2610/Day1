/ Day4
1. Database là gì
 - Database (cơ sở dữ liệu) là một hệ thống được tổ chức để lưu trữ, quản lý và truy xuất dữ liệu một cách hiệu quả. Nó giống như một "kho chứa" thông tin, nơi dữ liệu được sắp xếp để dễ dàng truy cập, thêm, sửa hoặc xóa.
2. Collection là gì
 - Collection (bộ sưu tập) là một nhóm các documents trong một database. Nó tương tự như một bảng (table) trong cơ sở dữ liệu quan hệ (SQL), nhưng khác ở chỗ nó không yêu cầu cấu trúc cố định (schema-less). Mỗi collection thường lưu trữ các tài liệu có liên quan với nhau.
3. Document là gì
 - Document  là một đơn vị dữ liệu riêng lẻ trong một collection. Nó tương tự như một hàng (row) trong SQL, nhưng được lưu dưới dạng cặp key-value (thường là JSON hoặc BSON trong MongoDB). Mỗi document có thể có cấu trúc khác nhau, không cần đồng nhất.
4. Schema là gì
 - Schema là cách định nghĩa cấu trúc của dữ liệu trong database. Nó quy định các trường (fields), kiểu dữ liệu (data types), và các ràng buộc (constraints) mà dữ liệu phải tuân theo.
5. Model là gì
 - Model là một lớp được tạo từ schema trong Mongoose, dùng để tương tác với collection trong database. Nó cho phép bạn thực hiện các thao tác như tạo, đọc, cập nhật, xóa (CRUD) trên các document.
6. Indexing là gì
 - Indexing (đánh chỉ mục) là kỹ thuật tạo ra các cấu trúc dữ liệu đặc biệt (indexes) để tăng tốc độ truy vấn trong database. Nó giống như mục lục trong sách, giúp database tìm kiếm nhanh hơn thay vì phải quét toàn bộ dữ liệu.
7. Các loại Index phổ biến:
   - Single Field Index
   - Compound Index
   - Multikey Index
   - Text Index
   - Unique Index
8. Performance Optimization là gì?
- Performance Optimization (tối ưu hóa hiệu suất) là quá trình cải thiện tốc độ và hiệu quả của database hoặc ứng dụng. Trong database, nó bao gồm:
  + Sử dụng indexing để tăng tốc truy vấn.
  + Thiết kế schema hợp lý, tránh dữ liệu dư thừa.
  + Giới hạn số lượng dữ liệu trả về (dùng limit, skip).
  + Tránh quét toàn bộ collection bằng cách dùng truy vấn cụ thể.
  + Sử dụng caching (như Redis) để giảm tải cho database.
9. Transaction là gì?
  - Transaction (giao dịch) là một chuỗi các thao tác database được thực hiện như một đơn vị duy nhất. Nó đảm bảo:
   + Atomicity: Tất cả thao tác thành công hoặc không có thao tác nào được áp dụng.
   + Consistency: Dữ liệu luôn ở trạng thái hợp lệ.
   + Isolation: Các giao dịch không ảnh hưởng lẫn nhau.
   + Durability: Dữ liệu được lưu vĩnh viễn sau khi giao dịch hoàn tất.
10. Cách sử dụng transactions trong Mongoose?
Bước 1: Kết nối với MongoDB và bật replica set
Transactions chỉ hoạt động khi MongoDB chạy dưới dạng replica set (ngay cả với một node).
Bước 2: Viết transaction trong Mongoose
Dùng session để quản lý transaction

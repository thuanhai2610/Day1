
# Day2
1. Primitive Types 
Đây là các kiểu dữ liệu cơ bản trong TypeScript, bao gồm: string, number, boolean, bigint, symbol, null và undefined
2. Object Types
Là kiểu dữ liệu mô tả cấu trúc của một đối tượng. Nó có thể chứa nhiều thuộc tính khác nhau với các kiểu dữ liệu khác nhau.
3. Union Types (|)
Cho phép một biến có thể mang nhiều kiểu dữ liệu. Ví dụ, một biến có thể nhận cả kiểu string và number. 
4.Intersection Types (&)
Là sự kết hợp của nhiều kiểu thành một kiểu mới. Biến thuộc kiểu giao (&) phải chứa tất cả các thuộc tính của các kiểu được kết hợp.
5. Interface vs Type Alias
Interface: Dùng để mô tả cấu trúc của một đối tượng. Có thể mở rộng bằng từ khóa extends.
Type Alias: Dùng để đặt tên cho bất kỳ kiểu dữ liệu nào, không chỉ giới hạn ở đối tượng. Không thể mở rộng bằng extends, nhưng có thể kết hợp kiểu bằng &.
6. Generics
Là một tính năng giúp tạo ra các kiểu dữ liệu tổng quát, linh hoạt mà vẫn đảm bảo tính an toàn về kiểu. Thay vì cố định kiểu dữ liệu, Generics cho phép sử dụng một tham số kiểu (), giúp code dễ tái sử dụng hơn.
7.  Decorators
Là một tính năng đặc biệt trong TypeScript (cần bật experimentalDecorators) giúp mở rộng chức năng của class, method, property, v.v.
8. Optional & Readonly Properties
Optional (?): Cho phép một thuộc tính có thể không bắt buộc khi khai báo đối tượng.
Readonly: Đánh dấu một thuộc tính chỉ có thể gán giá trị một lần duy nhất và không thể thay đổi sau đó.
9.Enum & Tuples
Enum: Là tập hợp các giá trị cố định được đặt tên, giúp code dễ đọc hơn thay vì sử dụng các hằng số thông thường.
Tuple: Là một mảng có số phần tử cố định và mỗi phần tử có kiểu dữ liệu riêng biệt. Giúp đảm bảo tính đúng đắn của dữ liệu khi làm việc với nhiều giá trị liên quan đến nhau.


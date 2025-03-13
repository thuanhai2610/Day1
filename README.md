/ Day3

1. Module trong NestJS là gì? Tại sao nó quan trọng
- Trong NestJS, Module là một cách để tổ chức code thành các nhóm logic nhỏ, dễ quản lý. Một ứng dụng NestJS luôn có ít nhất một Module chính (AppModule), ngoài ra có thể có nhiều module con.
- Quan trọng bởi vì: Chia nhỏ ứng dụng thành các phần dễ bảo trì, Tái sử dụng: Một module có thể import/export để dùng ở nơi khác, Quản lý dependency injection (DI): Module giúp kiểm soát các providers, controllers, services.
2. Sự khác biệt giữa @Module(), @Global(), và @Injectable()
  - @Module():	Định nghĩa một module trong NestJS.
  - @Global():	Đánh dấu một module là global, để tất cả module khác có thể sử dụng mà không cần import.
  - @Injectable():	Định nghĩa một service/provider, cho phép Dependency Injection.
3. Trong NestJS, để chia sẻ providers (services, repositories, factories,...) giữa các module, bạn cần sử dụng imports và exports.
4. Controller trong NestJS đóng vai trò gì:
  - Controller là nơi xử lý HTTP request và trả về response.
    + Chịu trách nhiệm nhận request từ client.
    + Gọi services để xử lý business logic.
    + Trả về response cho client.
5. Cách sử dụng các decorator như @Get(), @Post(), @Param(), và @Body()
  - @Get()	Định nghĩa route GET: lấy dữ liệu
  - @Post()	Định nghĩa route POST: gửi dữ liệu
  - @Param()	Lấy giá trị param từ URL
  - @Body()	Lấy dữ liệu từ body của request
6. Provider trong NestJS là gì? Có những loại provider nào.
  - Là các service, repository, factory, v.v. dùng để chứa business logic. Được inject vào các controller hoặc provider khác.
  - Các loại provider:
    + Service	Dùng để xử lý logic nghiệp vụ.
    + Repository	Làm việc với database.
    + Factory	Dùng để tạo ra instance tùy chỉnh.
7. Sự khác biệt giữa @Injectable() và @Inject()
  - @Injectable():	Định nghĩa một class có thể dùng với Dependency Injection.
  - @Inject():	Thay thế constructor injection nếu cần tên provider tùy chỉnh.
8. Middleware là gì?
  - Middleware trong NestJS là các function chạy trước khi request đến controller.
  - Công dụng: Xác thực request, Log request, Thay đổi request trước khi đến Controller
9. NestJS cung cấp những built-in middleware nào?
  - CORS Middleware
  - Compression Middleware
  - Helmet Middleware
  - Logger Middleware
10. Dependency Injection (DI) là gì: 
  - DI giúp quản lý các dependencies một cách tự động. NestJS sử dụng DI để tự động inject các services, repository, providers vào class khác.
11. Lifecycle Hooks trong NestJS là gì?
  - NestJS có các hook chạy theo vòng đời module/service:
   + onModuleInit()
   + onApplicationBootstrap()
   + onModuleDestroy()
   + onApplicationShutdown()
12. ConfigModule là gì?
ConfigModule là module dùng để quản lý biến môi trường (env).


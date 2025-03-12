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
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> bd166d5 (Day1)

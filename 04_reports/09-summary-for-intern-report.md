# 09 — Tóm tắt dùng cho báo cáo thực tập

## Mục tiêu nghiên cứu

Em được giao khảo sát bản sao công khai của website YEUCODO được tải bằng WinHTTrack. Mục tiêu là hiểu cấu trúc frontend, cách chạy offline và lập kế hoạch cải thiện giao diện mà không tác động website thật.

## Phạm vi và nguyên tắc an toàn

Em chỉ đọc bản gốc tại:

```text
C:\WebsiteBackup\YEUCODO_research\00_original_httrack
```

Mọi thử nghiệm localhost dùng:

```text
C:\WebsiteBackup\YEUCODO_research\01_working_copy
```

Em không đăng nhập, không gửi form, không thử thanh toán, không dò mật khẩu và không thay đổi website production.

## Kết quả kiểm kê

- Bản gốc có 724 file, khoảng 320,8 MiB.
- Có 210 HTML, 78 CSS, 82 JavaScript, 329 ảnh và 15 font.
- Trang chủ thật nằm tại:

```text
00_original_httrack\YEUCODO_backup\www.yeucodo.vn\index.html
```

- Hai file `index.html` ở cấp trên là trang điều hướng do HTTrack tạo.
- Có `hts-log.txt` và `hts-cache`.
- HTTrack báo 12 lỗi và 5 cảnh báo, chủ yếu là ảnh sản phẩm bị HTTP 403.

## Công nghệ frontend

HTML chứa sẵn nội dung đã được server render. Dấu vết frontend cho thấy trang production nhiều khả năng được tạo bởi WordPress, WooCommerce và Elementor, kết hợp jQuery, Happy Addons, Woolentor, Slick, bxSlider, Masonry và Font Awesome.

Tuy nhiên mirror không có source backend, database hay file cấu hình. Vì vậy kết luận đúng là:

> Bản HTTrack không đủ để xác định chắc chắn backend.

## Cách chạy localhost

Chạy PowerShell:

```powershell
cd "C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup"
py -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000/www.yeucodo.vn/
```

Chọn root ở cấp `YEUCODO_backup` giúp các tài nguyên domain phụ mà HTTrack lưu ngang hàng vẫn tải đúng.

## Kết quả kiểm thử

Trang chủ trả HTTP 200 và hiển thị được logo, menu, 3 banner, tin tức, sản phẩm, 12 ảnh gallery và footer. bxSlider, hai carousel Slick và Masonry đều được khởi tạo.

Hai lỗi JavaScript đáng chú ý:

- WooCommerce thiếu đối tượng `Cookies`;
- Elementor cố tải một lightbox chunk từ `beyono.vn`.

Dropdown menu cũng chưa hiển thị đúng trong lần thử. Các chức năng cần backend như tìm kiếm, giỏ hàng, đăng nhập và thanh toán không thể chạy đầy đủ trên mirror frontend.

## Cấu trúc trang chủ hiện tại

Thứ tự hiện tại:

```text
Header
→ Banner
→ Giới thiệu
→ Tin tức (6 bài)
→ YEU CODO CÓ GÌ? (4 card lặp đôi)
→ Cửa hàng (24 sản phẩm)
→ Thư viện (12 ảnh)
→ Footer
```

Thứ tự đã thống nhất:

```text
Header
→ Banner
→ YEU CODO CÓ GÌ?
→ Sản phẩm nổi bật (tối đa khoảng 8)
→ Ảnh hoạt động (tối đa khoảng 12)
→ Tin tức (khoảng 3)
→ Footer
```

## Đề xuất thay đổi

- Tổ chức lại menu thành Trang chủ, Dịch vụ & Hoạt động, Cộng đồng, Cửa hàng thể thao, Tin tức & Thư viện, Về YEUCODO.
- Giữ 4 card dịch vụ hiện tại, không thêm card ở giai đoạn đầu.
- Giảm sản phẩm từ 24 xuống tối đa khoảng 8.
- Giữ 12 ảnh gallery.
- Giảm tin từ 6 xuống khoảng 3 và chuyển xuống dưới gallery.
- Thêm các nút “Xem thêm sản phẩm”, “Xem thêm hình ảnh”, “Xem thêm tin tức”.
- Dùng file CSS và JavaScript custom riêng; không sửa thư viện minified.

## Kế hoạch làm việc an toàn

Trước khi sửa, tạo commit Git baseline và chụp ảnh before. Sau đó thực hiện từng thay đổi nhỏ, kiểm tra localhost, ghi changelog và commit riêng. Nếu có lỗi, hoàn tác đúng commit thay vì sửa chồng chéo.

## Kết luận

Bản mirror đủ để nghiên cứu và cải thiện giao diện desktop tĩnh, nhưng không thể đại diện cho toàn bộ hệ thống production. Giai đoạn tiếp theo chỉ nên bắt đầu sau khi người phụ trách xác nhận báo cáo và cho phép chỉnh `01_working_copy`.

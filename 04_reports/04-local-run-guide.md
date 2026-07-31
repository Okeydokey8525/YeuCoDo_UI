# 04 — Hướng dẫn chạy website offline trên Windows

## Phương án khuyến nghị

Document root nên là:

```text
C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup
```

Lý do: `www.yeucodo.vn` và các domain phụ như `cdn.flmngr.com` được HTTrack lưu ngang hàng. Nếu lấy riêng `www.yeucodo.vn` làm root, đường dẫn `../cdn.flmngr.com/...` sẽ thành 404.

## Chạy bằng Python HTTP server

PowerShell:

```powershell
cd "C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup"
py -m http.server 8000
```

Nếu máy không nhận `py`:

```powershell
cd "C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup"
python -m http.server 8000
```

Mở:

```text
http://localhost:8000/www.yeucodo.vn/
```

Không nên dùng `http://localhost:8000/` làm trang chủ vì URL này mở index dự án HTTrack, không phải trang chủ YEUCODO.

## Dừng server

Tại cửa sổ PowerShell đang chạy server, nhấn:

```text
Ctrl+C
```

Nếu đã chạy nền, tìm và dừng đúng PID của tiến trình đã tạo; không dừng hàng loạt mọi tiến trình Python.

## VS Code Live Server

1. Mở thư mục `C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup`.
2. Chọn `www.yeucodo.vn\index.html`.
3. Dùng **Open with Live Server**.
4. Kiểm tra URL vẫn chứa `/www.yeucodo.vn/`.

Nếu Live Server tự lấy `www.yeucodo.vn` làm root, asset `../cdn.flmngr.com` có thể 404. Khi đó nên dùng Python theo cách trên.

## Kết quả chạy thử thực tế

Đã chạy server thật trên `127.0.0.1:8000`, kiểm tra bằng HTTP và trình duyệt:

| Hạng mục | Kết quả |
|---|---|
| HTTP trang chủ | 200, HTML 204.714 byte |
| Title | `YEUCODO - SPORT AND MORE` |
| Logo | Hiển thị |
| Banner | Hiển thị; 3 ảnh, bxSlider tạo `.bx-viewport` |
| Menu chính | Hiển thị |
| Dropdown | Click không mở; hover đổi `visibility` nhưng submenu vẫn `display:none`, khung 0×0 trong lần thử |
| Tin tức | Có nội dung; Slick được khởi tạo |
| Sản phẩm | Có nội dung; Slick được khởi tạo |
| Gallery | 12 ảnh, Masonry gắn class hoàn tất cho đủ 12 |
| Footer | Hiển thị |
| Widget domain ngang hàng | `cdn.flmngr.com/widgets36d7.js` trả 200 khi dùng root khuyến nghị |

## Số lượng HTML gốc và DOM sau khi plugin chạy

| Khối | HTML gốc | DOM sau khi chạy |
|---|---:|---:|
| Banner | 3 | 3 |
| Bài tin | 6 | 14 node do Slick clone |
| Card “YEU CODO CÓ GÌ?” | 8 node, gồm 4 card lặp đôi | 8 |
| Sản phẩm | 24 | 34 node do Slick clone |
| Ảnh gallery | 12 | 12 |

Khi báo cáo nội dung, phải dùng số HTML gốc; số DOM lớn hơn không phải dữ liệu mới.

## Lỗi console quan sát được

1. `ReferenceError: Cookies is not defined` từ `js\woocommerce.mind03b.js?ver=7.8.1`.
2. `ChunkLoadError: Loading chunk 723 failed` vì Elementor gọi lightbox tại `https://beyono.vn/wp-content/plugins/elementor/...`.

Trang chủ vẫn render, nhưng các chức năng WooCommerce/lightbox có thể không đầy đủ.

## Danh sách lỗi localhost

| Lỗi | File liên quan | Nguyên nhân | Mức độ | Hướng xử lý an toàn |
|---|---|---|---|---|
| `Cookies is not defined` | `js\woocommerce.mind03b.js` | Dependency thiếu trong mirror | Thành phần | Không sửa minified; bổ sung dependency đã xác minh hoặc vô hiệu hóa tính năng trong custom JS |
| Elementor ChunkLoadError | `js\webpack.runtime.minfb6f.js`, `js\frontend3.minfb6f.js` | Chunk tuyệt đối trỏ `beyono.vn` | Thành phần | Local hóa chunk hoặc tắt lightbox bằng cấu hình/override khi được phép |
| Search gửi production | Hai form trong `index.html` | `action="https://www.yeucodo.vn/tim-kiem"` | Rủi ro an toàn | Không submit; khi sửa, đổi thành UI demo/no-op local |
| Một ảnh sản phẩm sai loại | `index.html`, ảnh Puma Energy Cage | HTTrack rewrite URL lỗi 403 thành `.html` | Một card | Placeholder local |
| Link mạng xã hội/yeucodo.com | `index.html` footer | Link tuyệt đối | Không lỗi render, nhưng rời local | Giữ nếu chỉ là link; gắn cảnh báo hoặc vô hiệu hóa trong bản demo nếu cần |
| Font Google | Các link `fonts.googleapis.com` | Phụ thuộc mạng; có thể bị chặn | Typography | Self-host font sau khi kiểm tra giấy phép |
| CORS/production XHR | Các bundle plugin | Một số tính năng mong backend | Chức năng | Không tắt bảo mật trình duyệt; ghi rõ không hỗ trợ |

## Giới hạn của mirror

Không thể chạy đầy đủ giỏ hàng, tìm kiếm, đăng nhập, form, thanh toán hoặc xử lý server trên bản mirror frontend. Không thử gửi các form đang trỏ tới production.


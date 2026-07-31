# 02 — Phân tích log HTTrack

Nguồn kiểm tra:

- `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\hts-log.txt`
- `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\hts-cache\doit.log`
- `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\hts-cache\new.txt`

## Tóm tắt phiên mirror

- HTTrack: `3.49-2`.
- Bắt đầu: 30/07/2026 17:04:11.
- Thời gian: 14 phút 22 giây.
- 711 link được quét.
- 697 file được ghi.
- 329.301.333 byte tổng thể theo log.
- Kết quả log: **12 errors, 5 warnings, 0 messages**.
- Không thấy timeout, lỗi 404 hay lỗi 500 trong `hts-log.txt`.

## Cảnh báo

| Loại | URL/tài nguyên | Ý nghĩa | Mức ảnh hưởng |
|---|---|---|---|
| Redirect | `https://www.yeucodo.vn/robots.txt` → `https://yeucodo.vn/page-not-found.html` | Không lấy được robots.txt chuẩn; log không nói HTTrack đã vượt robots.txt | Không ảnh hưởng giao diện chính |
| Binary không parse | `https://www.yeucodo.vn/upload/fb/3336_20260126095535.php` | Nội dung có vẻ nhị phân dù URL có đuôi PHP | Có thể ảnh hưởng ảnh OG, không ảnh hưởng bố cục chính |
| Redirect | `https://beyono.vn/robots.txt` → trang đăng nhập | Tài nguyên domain ngoài chuyển hướng | Không ảnh hưởng trực tiếp giao diện chính |

Tổng số warning là 5 vì mỗi redirect được ghi thành hai dòng cảnh báo, cộng một cảnh báo binary.

## 12 lỗi 403

| # | Tài nguyên | Trang nguồn | Phân loại |
|---:|---|---|---|
| 1 | Ảnh resize “Giày Puma Future Ultimate Energy Cage TT” | Trang chủ | Có thể ảnh hưởng một card sản phẩm |
| 2–4 | `SP002776 (1).png`, `(4).png`, `(2).png` trên `yeucodo.com` | Chi tiết Kamito Galaxy 1 | Ảnh hưởng gallery của một trang sản phẩm |
| 5–7 | Ba ảnh phụ Puma Future Ultimate Cage TT | Chi tiết sản phẩm loại 806 | Ảnh hưởng gallery của một trang sản phẩm |
| 8–11 | Một ảnh chính và ba ảnh phụ Puma Future Ultimate Energy Cage TT | Chi tiết sản phẩm loại 805 | Ảnh hưởng nghiêm trọng trang sản phẩm đó; trên trang chủ ảnh chính bị rewrite thành `.html` |
| 12 | Ảnh phụ Adidas Predator Accuracy.3L | Chi tiết sản phẩm loại 802 | Ảnh hưởng một ảnh phụ |

Không có lỗi nào trong log cho CSS hoặc JavaScript chính của trang chủ.

## Tài nguyên redirect bất thường trong cache

`hts-cache\new.txt` ghi nhận nhiều tài nguyên font/icon của WooCommerce trả HTTP 302 rồi được lưu dưới dạng HTML 1.130 byte, gồm:

- `fonts/WooCommerce.eot`, `.woff`, `.ttf`, `.svg`;
- `fonts/star.eot`, `.woff`, `.ttf`, `.svg`;
- `images/icons/loader.svg`;
- một số icon thẻ thanh toán.

Những file này có thể tồn tại về tên nhưng sai MIME/nội dung. Chúng chủ yếu ảnh hưởng icon/font WooCommerce và trang mua hàng, không làm sập bố cục trang chủ.

## Lỗi quan sát khi chạy localhost

| Lỗi | File liên quan | Nguyên nhân | Mức độ | Hướng xử lý an toàn |
|---|---|---|---|---|
| `Cookies is not defined` | `www.yeucodo.vn\js\woocommerce.mind03b.js` | Thiếu thư viện `js-cookie` hoặc thứ tự script trong mirror không đầy đủ | Có thể ảnh hưởng giỏ hàng/WooCommerce; trang chủ vẫn hiển thị | Không sửa file minified; nếu cần UI tĩnh thì vô hiệu hóa đoạn khởi tạo bằng custom JS có kiểm soát, hoặc bổ sung đúng bản thư viện sau khi xác minh |
| `ChunkLoadError` cho chunk 723 | `webpack.runtime.minfb6f.js`, `frontend3.minfb6f.js` | Elementor cố tải lightbox từ `https://beyono.vn/wp-content/...` | Ảnh hưởng lightbox/gallery Elementor | Không tắt CORS; thay đường dẫn bằng bản local hoặc bỏ tính năng lightbox trong bản mirror khi được phép sửa |
| Widget FLMNGR 404 khi lấy `www.yeucodo.vn` làm root | Các thẻ `../cdn.flmngr.com/widgets36d7.js` trong `index.html` | Relative path đi ra ngoài document root | Có thể ảnh hưởng widget chèn nội dung | Chạy server ở cấp `YEUCODO_backup`, không cần sửa code |
| Ảnh sản phẩm bị rewrite sang `.html` | `index.html`, card Puma Energy Cage | Lần mirror nhận 403 nên HTTrack lưu/rewrite không đúng loại ảnh | Một card sản phẩm thiếu ảnh | Thay bằng placeholder local hoặc tài nguyên hợp lệ sau khi có xác nhận |

## Ưu tiên trước khi sửa UI

1. Chạy đúng document root `YEUCODO_backup` để giữ các đường dẫn domain ngang hàng.
2. Ghi nhận card Puma Energy Cage có ảnh lỗi; không để lỗi này bị hiểu nhầm là lỗi CSS.
3. Không phụ thuộc lightbox tải từ `beyono.vn`; chức năng này không ổn định offline.
4. Không thử chức năng giỏ hàng, tìm kiếm hoặc thanh toán vì mirror thiếu backend và WooCommerce đang báo lỗi `Cookies`.
5. Không chỉnh bất kỳ file minified nào.


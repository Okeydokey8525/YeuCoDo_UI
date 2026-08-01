# YEUCODO Homepage Final QA

## 1. Thông tin kiểm thử

- Repository: https://github.com/Okeydokey8525/YeuCoDo_UI
- Branch: ui/homepage-restructure
- Commit baseline: 36f7a99
- URL local: http://localhost:8000/www.yeucodo.vn/
- Ngày kiểm thử: 01/08/2026

## 2. Phạm vi đã hoàn thành

- Typography: Đã thiết lập font Be Vietnam Pro, màu chủ đạo #FF8D00, và các token CSS chuẩn.
- Menu desktop: Đã cấu trúc lại, 6 mục cấp 1, có dropdown mở bằng hover và focus-within.
- Dropdown: Fixed tình trạng tràn lấn banner.
- Thứ tự section: Được tối ưu hóa cho flow người dùng mới.
- Sản phẩm: Giới hạn 8 sản phẩm.
- Gallery: Giữ nguyên 12 ảnh với Masonry layout.
- Tin tức: Giữ nguyên 6 tin với Post Carousel.
- CTA: Đã chèn thành công 3 nút Call-to-action điều hướng sâu.
- Visual polish: Căn chỉnh margin, padding, loại bỏ border thừa.
- Tablet/mobile: Menu hamburger, sidebar, overlay, và layout card hoạt động mượt mà.
- Encoding tiếng Việt: Đã phục hồi 100% tiếng Việt từ lỗi mojibake, thêm thẻ `<meta charset="UTF-8">`.

## 3. Cấu trúc trang chủ sau cải tiến

Header
→ Banner
→ Giới thiệu
→ YEU CODO CÓ GÌ?
→ Sản phẩm
→ Gallery
→ Tin tức
→ Footer

## 4. Kết quả kiểm thử theo viewport

### Desktop 1366 × 768

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Header & Logo | Pass | Rõ nét, không lệch |
| Menu & Dropdown | Pass | Mở hover đúng, 6 mục |
| Section Order | Pass | Tuân thủ cấu trúc mới |
| Sản phẩm | Pass | Đủ 8 sản phẩm, CTA đúng |
| Gallery | Pass | Đủ 12 ảnh, layout Masonry |
| Tin tức | Pass | Đủ 6 bài, Carousel tốt |
| Tiếng Việt | Pass | Không còn lỗi mã hóa |
| Horizontal Scroll | Pass | Không có lỗi tràn ngang |

### Tablet 1024 × 768

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Hamburger Menu | Pass | Mở mượt, overlay đúng |
| Section Spacing | Pass | Hợp lý, không dính sát |
| Card Layout | Pass | Carousel hiển thị tốt |
| Horizontal Scroll | Pass | Không có tràn ngang |

### Tablet 768 × 1024

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Menu Sidebar | Pass | Không chồng chéo desktop |
| Submenu | Pass | Có thể bấm mở rộng |
| Horizontal Scroll | Pass | Căn lề chuẩn |

### Mobile 480 × 900

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Hamburger & Overlay | Pass | Escape/Click out để đóng hoạt động |
| Intro & Banner | Pass | Chữ rõ, không tràn màn hình |
| Gallery Columns | Pass | 2 cột đều đặn |
| Horizontal Scroll | Pass | Không bị cuộn ngang |

### Mobile 390 × 844

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Menu | Pass | Submenu click mượt mà |
| Typography | Pass | Chữ không bị gãy dòng sai |
| Horizontal Scroll | Pass | 100% viewport width |

### Mobile 360 × 800

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Marquee & Buttons | Pass | Vừa vặn viewport nhỏ nhất |
| Gallery | Pass | 1 cột chuẩn (do CSS mobile) |
| Horizontal Scroll | Pass | scrollWidth === clientWidth |

## 5. Số lượng nội dung

- 6 menu cấp một
- 4 submenu
- 8 marquee item
- 8 sản phẩm
- 12 ảnh
- 6 tin tức
- 3 CTA

## 6. File đã thay đổi

- `01_working_copy/YEUCODO_backup/www.yeucodo.vn/index.html`: Cấu trúc lại DOM HTML cho menu, section order, xoá placeholder, gỡ script thừa, phục hồi mã hóa UTF-8.
- `css/custom-homepage.css`: Khai báo biến cục bộ, tuỳ chỉnh responsive, UI dropdown, nút bấm.
- `js/custom-homepage.js`: Khởi tạo logic mobile sidebar menu, quản lý sự kiện mở/đóng hamburger, ARIA states.

## 7. Danh sách commit

- 36f7a99 fix: restore Vietnamese text encoding
- 424d03a fix: resolve YEUCODO mobile responsive regressions
- 70a4a91 feat: optimize YEUCODO homepage for mobile
- e4ada3d fix: resolve homepage visual polish regressions
- 870728f style: polish YEUCODO homepage sections
- 2f89644 feat: add homepage gallery CTA
- 7277e2e refactor: limit homepage products to eight
- 24c2a65 refactor: move news section after gallery
- 9ab3dd1 refactor: move YEUCODO services section after intro
- 94c59f5 chore: remove invalid navigation screenshot placeholders
- 193e255 test: validate YEUCODO desktop navigation
- ea3b70d feat: reorganize YEUCODO desktop navigation
- 32ea792 style: add YEUCODO typography foundation

## 8. Lỗi còn lại của mirror

- Cookies is not defined: Lỗi từ plugin woocommerce.mind.
- Elementor ChunkLoadError: Không tải được script popup/lightbox do thiếu file cục bộ.
- asset bên thứ ba có thể thiếu.
- chức năng backend/WordPress không có trong mirror.
- search/cart/form có thể vẫn trỏ production.
- không thể xác nhận truy vấn WordPress mới nhất từ bản tĩnh.

## 9. Hạn chế kiểm thử

- Đây là mirror HTTrack.
- Không có backend WordPress/PHP/MySQL.
- Không kiểm tra được admin, checkout, database, login và query động.
- Một số plugin chỉ hoạt động một phần khi offline.

## 10. Kết luận

- UI trang chủ đã được tổ chức lại.
- Người dùng hiểu rõ hơn YEUCODO làm gì.
- Desktop, tablet và mobile đã được cải thiện.
- Màu thương hiệu và nội dung hiện có được giữ lại.
- Cần triển khai lại trên WordPress thật để xử lý dữ liệu động và backend.

## 11. Đề xuất bước tiếp theo

- Review với quản lý/dev.
- Đưa thay đổi vào theme child hoặc custom CSS/JS của WordPress thật.
- Kiểm thử staging.
- Tối ưu ảnh.
- Fix accessibility sâu hơn.
- Kiểm thử hiệu năng.
- Sau đó mới production.

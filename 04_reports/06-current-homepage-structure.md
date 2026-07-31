# 06 — Cấu trúc trang chủ và menu hiện tại

Nguồn: `www.yeucodo.vn\index.html` trong `00_original_httrack`.

## Thứ tự thực tế

1. Preloader.
2. Header: logo, tìm kiếm, giỏ hàng, menu.
3. Banner bxSlider: 3 ảnh.
4. Khối chào mừng/giới thiệu ngắn.
5. **Tin tức & Ý kiến cộng đồng**: 6 bài, Slick carousel.
6. **YEU CODO CÓ GÌ?**: 4 nội dung duy nhất, lặp đôi trong HTML để marquee liền mạch.
7. **CỬA HÀNG THỂ THAO**: 24 sản phẩm, Slick carousel.
8. **THƯ VIỆN CỘNG ĐỒNG**: 12 ảnh, Masonry.
9. Footer.

## Nội dung và mức phụ thuộc JavaScript

| Section | Nội dung có sẵn trong HTML? | Số lượng gốc | Phụ thuộc JavaScript |
|---|---|---:|---|
| Banner | Có | 3 | Cao: bxSlider cho chuyển slide; ảnh vẫn tồn tại nếu JS lỗi |
| Giới thiệu | Có | 1 khối | Không |
| Tin tức | Có | 6 bài | Cao: Slick để bố trí/chuyển carousel |
| YEU CODO CÓ GÌ? | Có | 4 card duy nhất, lặp thành 8 node | Thấp: animation dùng CSS |
| Sản phẩm | Có | 24 | Cao: Slick/Happy Addons |
| Gallery | Có | 12 | Trung bình: Masonry cho layout; ảnh vẫn là HTML |
| Footer | Có | 1 | Không |

Không có section chính nào được fetch để tạo nội dung sau khi tải. JavaScript chủ yếu nâng cấp layout và tương tác.

## Menu cấp 1 hiện tại

| Cấp 1 | URL | Menu con |
|---|---|---|
| Trang chủ | `index.html#` | Không |
| THƯ VIỆN | `index.html#` | Ảnh hoạt động, Video |
| TIN TỨC | `index.html#` | Tin Yeucodo, Sự kiện sắp tới |
| THAM GIA | `index.html` | Tài trợ, Đối tác, Hội viên, Hoạt động khác |
| YEUCODO CÓ GÌ? | `index.html#` | 6 mục |
| Giới Thiệu | `index.html` | Đội ngũ, Chúng tôi là ai |

## Menu con và URL

### THƯ VIỆN

- Ảnh hoạt động → `bai-viet/anh-hoat-dong.html`
- Video → `bai-viet/video.html`

### TIN TỨC

- Tin Yeucodo → `tin-yeucodo.html`
- Sự kiện sắp tới → `su-kien-sap-toi.html`

### THAM GIA

- Tài trợ → `bai-viet/tai-tro.html`
- Đối tác → `bai-viet/doi-tac.html`
- Hội viên → `bai-viet/hoi-vien.html`
- Hoạt động khác → `bai-viet/hoat-dong-khac.html`

### YEUCODO CÓ GÌ?

- Đào tạo thể thao → `bai-viet/dao-tao-the-thao.html`
- Đặt sân thể thao → `bai-viet/dat-san-the-thao.html`
- Cửa hàng thể thao → `thuong-hieu-yeucodo.html`
- Quảng bá thương hiệu → `bai-viet/quang-ba-thuong-hieu.html`
- Phụng sự cộng đồng → `bai-viet/phung-su-cong-dong.html`
- Tổ chức giải đấu và sự kiện → `bai-viet/to-chuc-giai-dau-va-su-kien.html`

### GIỚI THIỆU

- Đội ngũ → `bai-viet/doi-ngu.html`
- Chúng tôi là ai → `bai-viet/chung-toi-la-ai.html`

## Nhận xét cấu trúc

- Tin tức đang nằm ngay sau giới thiệu, trước khối dịch vụ, sản phẩm và gallery.
- “YEU CODO CÓ GÌ?” trên trang chủ chỉ có 4 card duy nhất: đào tạo, đặt sân, quảng bá, phụng sự. Menu cùng tên có 6 mục nên nội dung menu và section không hoàn toàn trùng.
- Trang chủ render 24 sản phẩm, vượt xa mục tiêu khoảng 8.
- Tin tức render 6 bài, mục tiêu mới là khoảng 3.
- Gallery đã đúng giới hạn 12 ảnh.
- Menu desktop có HTML submenu đầy đủ, nhưng thử localhost cho thấy click không mở và hover không tạo hộp hiển thị; cần xử lý trước khi coi menu mới là hoàn tất.

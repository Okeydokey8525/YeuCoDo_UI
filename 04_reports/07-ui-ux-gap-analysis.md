# 07 — Phân tích chênh lệch UI/UX

## So sánh thứ tự trang chủ

| Vị trí | Hiện tại | Phương án đã chốt | Hành động |
|---:|---|---|---|
| 1 | Header/Menu | Header/Menu | Giữ vị trí, đổi kiến trúc menu |
| 2 | Banner | Banner | Giữ |
| 3 | Giới thiệu ngắn | YEU CODO CÓ GÌ? | Cân nhắc gộp/giảm khối giới thiệu để đưa dịch vụ lên ngay sau banner |
| 4 | Tin tức | Cửa hàng/sản phẩm nổi bật | Chuyển tin tức xuống gần cuối |
| 5 | YEU CODO CÓ GÌ? | Ảnh hoạt động nổi bật | Di chuyển khối dịch vụ lên vị trí 3 |
| 6 | Cửa hàng, 24 sản phẩm | Tin tức, khoảng 3 bài | Giảm còn tối đa khoảng 8 sản phẩm |
| 7 | Thư viện, 12 ảnh | Footer sau tin tức | Giữ tối đa 12 ảnh, thêm CTA |
| 8 | Footer | — | Tin tức phải nằm ngay trước footer |

Thứ tự mục tiêu:

```text
Header/Menu
→ Banner
→ YEU CODO CÓ GÌ?
→ Sản phẩm nổi bật
→ Ảnh hoạt động nổi bật
→ Tin tức
→ Footer
```

## Khoảng cách về menu

| Hiện tại | Mục tiêu | Chênh lệch |
|---|---|---|
| Trang chủ | Trang chủ | Chỉ cần URL rõ ràng, không dùng `#` nếu không cần |
| YEUCODO CÓ GÌ? | Dịch vụ & Hoạt động | Đổi tên, tổ chức lại 4 mục dịch vụ |
| THAM GIA | Cộng đồng | Phân bổ Hội viên, Phụng sự, Hoạt động cộng đồng, Tài trợ |
| Cửa hàng nằm trong submenu | Cửa hàng thể thao cấp 1 | Đưa lên cấp 1 |
| TIN TỨC và THƯ VIỆN tách riêng | Tin tức & Thư viện | Gộp thành một menu cấp 1 |
| Giới Thiệu | Về YEUCODO | Đổi tên và chuyển Đối tác vào đây |

## Menu mục tiêu và URL local có thể tái sử dụng

| Menu mới | Mục con | File local hiện có |
|---|---|---|
| Dịch vụ & Hoạt động | Đào tạo thể thao | `bai-viet/dao-tao-the-thao.html` |
|  | Đặt sân thể thao | `bai-viet/dat-san-the-thao.html` |
|  | Giải đấu & sự kiện | `bai-viet/to-chuc-giai-dau-va-su-kien.html` |
|  | Quảng bá thương hiệu | `bai-viet/quang-ba-thuong-hieu.html` |
| Cộng đồng | Phụng sự cộng đồng | `bai-viet/phung-su-cong-dong.html` |
|  | Hội viên YEUCODO | `bai-viet/hoi-vien.html` |
|  | Hoạt động cộng đồng | `bai-viet/hoat-dong-khac.html` |
|  | Tài trợ & đồng hành | `bai-viet/tai-tro.html` |
| Cửa hàng thể thao | — | `thuong-hieu-yeucodo.html` |
| Tin tức & Thư viện | Tin YEUCODO | `tin-yeucodo.html` |
|  | Sự kiện sắp tới | `su-kien-sap-toi.html` |
|  | Ảnh hoạt động | `bai-viet/anh-hoat-dong.html` |
|  | Video | `bai-viet/video.html` |
| Về YEUCODO | Chúng tôi là ai | `bai-viet/chung-toi-la-ai.html` |
|  | Đội ngũ | `bai-viet/doi-ngu.html` |
|  | Đối tác | `bai-viet/doi-tac.html` |

## Khoảng cách về số lượng nội dung

| Khối | Hiện tại | Mục tiêu | Thay đổi |
|---|---:|---:|---|
| Card YEU CODO CÓ GÌ? | 4 nội dung duy nhất | Giữ card hiện tại | Không thêm card; bỏ hiểu nhầm do 4 card lặp đôi |
| Sản phẩm | 24 | Tối đa khoảng 8 | Giảm 16 card khỏi trang chủ, không xóa trang chi tiết |
| Ảnh hoạt động | 12 | Tối đa khoảng 12 | Giữ số lượng |
| Bài tin | 6 | Khoảng 3 | Giảm 3 bài khỏi trang chủ |

## CTA còn thiếu

- “Xem thêm sản phẩm” — hiện nút ghi `SHOPPING`, nên đổi nhãn rõ nghĩa tiếng Việt.
- “Xem thêm hình ảnh” — chưa có sau gallery.
- “Xem thêm tin tức” — chưa có.

Các CTA nên trỏ tới file local đã có, không trỏ action production.

## Vấn đề UX/kỹ thuật cần xử lý trước

1. Menu dropdown chưa mở đúng trong lần thử localhost.
2. Hai form search vẫn gửi dữ liệu tới production; không được thử submit.
3. Một card sản phẩm Puma có ảnh sai loại do mirror 403.
4. `Cookies is not defined` có thể làm hành vi WooCommerce lỗi.
5. Elementor lightbox phụ thuộc chunk tuyệt đối trên `beyono.vn`.
6. Nhiều bundle/plugin nặng được tải dù trang chủ chỉ dùng một phần nhỏ.
7. Link cấp 1 dùng `index.html#` gây cảm giác click nhưng không đi đâu.

## Phần làm trong giai đoạn đầu

- Đổi menu và URL theo kiến trúc đã chốt.
- Sắp xếp lại 5 section nội dung.
- Giữ đúng 4 card dịch vụ hiện có.
- Chọn tối đa 8 sản phẩm nổi bật.
- Giữ 12 ảnh.
- Chọn 3 tin.
- Thêm 3 CTA tiếng Việt.
- Sửa ảnh card bị hỏng bằng placeholder local.
- Bảo đảm dropdown desktop hoạt động.
- Ngăn search/form gửi production trong bản demo.

## Phần mở rộng sau

- Hero theo chiều cao màn hình.
- Header gọn hơn và search thu nhỏ.
- Khối hoạt động nổi bật mới.
- Khối cộng đồng YEUCODO mới.
- Logo đối tác.
- Bản đồ/liên hệ gần footer.
- Phiên bản mobile.

Không đưa các hạng mục mở rộng vào đợt đầu để tránh tăng phạm vi và rủi ro.


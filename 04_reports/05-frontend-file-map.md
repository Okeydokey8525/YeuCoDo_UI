# 05 — Bản đồ file frontend

HTML trang chủ:

```text
C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\www.yeucodo.vn\index.html
```

## Bản đồ khu vực giao diện

| Khu vực | HTML | CSS thực sự tìm thấy | JavaScript thực sự tìm thấy | Ghi chú |
|---|---|---|---|---|
| Header | `index.html`, khoảng dòng 894–986 | `css\miti9603.css`, `css\style5c5c9.css`, `css\my_stylef700.css`, CSS inline | `js\mainda20.js`, `js\jquery.smartmenus.minf269.js` | Có `header-middle`, `header-left` |
| Logo | `index.html`, khoảng dòng 928–944 | các file theme phía trên | không có JS riêng bắt buộc | `.logo-wrapper`, ảnh logo local |
| Search | `index.html`, khoảng dòng 902–926 và 945–957 | `themeskyce14.css`, CSS theme | `themeskyce14.js` và jQuery | Hai form đều gửi đến production |
| Cart | `index.html`, khoảng dòng 958–969 | WooCommerce/theme CSS | `woocommerce.mind03b.js`, các plugin WooCommerce | Mirror không có backend |
| Main menu | `index.html`, dòng 977–979 | `miti9603.css`, `style5c5c9.css`, `responsivec5c9.css` | `mainda20.js`, `jquery.smartmenus.minf269.js` | `.main-menu`, `.ts-mega-menu-wrapper` |
| Dropdown | `index.html`, dòng 978 chứa 5 `.sub-menu` | theme CSS | SmartMenus/theme JS | Thử local chưa mở đúng |
| Banner | `index.html`, khoảng dòng 1054–1071 | `css\jquery.bxslider.css`, CSS inline | `js\jquery.bxslider.js`, inline init dòng 1881–1911 | 3 ảnh local |
| Giới thiệu ngắn | `index.html`, dòng 1078–1088 | CSS inline/style thuộc nội dung | FLMNGR widget được chèn | Nằm giữa banner và tin tức |
| Tin tức | `index.html`, khoảng dòng 1092–1272 | `post-47523236.css`, `ha-4752ee20.css`, `slick*.css` | `happy-addons*.js`, `slick.min688f.js` | 6 bài trong HTML, carousel |
| “YEU CODO CÓ GÌ?” | `index.html`, khoảng dòng 1274–1324 | CSS marquee inline khoảng dòng 1000–1052 | không cần JS để marquee chạy | 4 card lặp đôi thành 8 `<li>` |
| Product section | `index.html`, khoảng dòng 1326–1760 | `woolentor-widgetsd315.css`, `product-gridd315.css`, `ha-4752ee20.css`, `slick*.css` | `woolentor-widgets-actived315.js`, Happy Addons, Slick | 24 sản phẩm trong HTML |
| Product cards | cùng đoạn trên | WooCommerce + Happy Addons/Woolentor CSS | carousel JS | Một ảnh Puma bị rewrite thành `.html` |
| Activity gallery | `index.html`, khoảng dòng 1762–1870 | `css\gallery_style.css`, CSS inline dòng 1952–1959 | `js\plugin_gallery.js`, inline Masonry dòng 1914–1950 | 12 ảnh, Fancybox marker |
| Footer | `index.html`, từ dòng 1961 | `css\my_stylef700.css`, `css\responsive_stylef700.css`, CSS inline | không có JS riêng bắt buộc | 4 cột |
| Preloader | `index.html`, CSS đầu file và markup khoảng dòng 894 | CSS inline | script inline cuối trang | Ẩn khi load xong |

## File nên coi là code giao diện riêng

- `www.yeucodo.vn\index.html`: HTML đã render, chứa nhiều CSS/JS inline riêng của trang.
- `www.yeucodo.vn\css\my_stylef700.css`: tên và version cho thấy custom CSS.
- `www.yeucodo.vn\css\responsive_stylef700.css`: custom responsive CSS.
- `www.yeucodo.vn\css\miti9603.css`, `style5c5c9.css`, `responsivec5c9.css`: theme Miti.

Các file này vẫn là đầu ra mirror, không phải source template gốc.

## File thư viện/plugin bên thứ ba

- jQuery: `jquery.minf43b.js`, `jquery-migrate.min5589.js`;
- Elementor: `frontend-*.css/js`, `webpack*.js`, `elements-handlers*.js`;
- WooCommerce: `woocommerce*.css/js`;
- Happy Addons/Woolentor: `happy-addons*.js`, `woolentor-*`;
- slider: `slick*`, `owl.carousel*`, `swiper*`, `jquery.bxslider.js`;
- gallery/lightbox: `plugin_gallery.js`, `prettyPhoto`, `colorbox`, `magnific-popup`;
- icon/font: Font Awesome và Icomoon.

Không chỉnh trực tiếp các file minified hoặc file plugin.

## File HTTrack tạo/biến đổi

- `00_original_httrack\index.html`;
- `YEUCODO_backup\index.html`;
- `hts-log.txt`;
- toàn bộ `hts-cache`;
- comment “Mirrored from ... by HTTrack” trong từng HTML;
- tên file có hậu tố hash/version như `jquery.minf43b.js`;
- các URL động được đổi thành file `.html`.

## File không phải website chính

Các file dưới `beyono.vn`, `cdn.*`, `static.*`, `www.google.com` là bản lưu domain ngoài. Chúng chỉ được coi là dependency nếu HTML/CSS YEUCODO thật sự tham chiếu. Không tính URL `chrome-extension://` là file website.


# 03 — Kiểm toán công nghệ

Trang kiểm tra chính:  
`C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\www.yeucodo.vn\index.html`

## Bản chất frontend

HTML là ảnh chụp đầu ra đã được server render, sau đó HTTrack rewrite để chạy tĩnh. Bằng chứng:

- HTML chứa đầy đủ header, menu, 6 bài tin, 24 sản phẩm và 12 ảnh gallery ngay trong file;
- `body` có class `page-id-4752`, `elementor-page-4752`, `woocommerce-*`;
- có comment “Mirrored ... by HTTrack” ở đầu file;
- các đường dẫn động của website thật đã được đổi thành `.html`.

Đây không phải repository frontend/backend gốc và không có quy trình build.

## Công nghệ và thư viện tìm thấy

| Thành phần | Phiên bản/dấu hiệu | Bằng chứng trong `index.html` | Mục đích | Sửa trực tiếp? | Ảnh hưởng trang chủ |
|---|---|---|---|---|---|
| WordPress frontend | dấu hiệu `6.5.4` | `wp-block-library`, `wp-polyfill`, class `wp-custom-logo` | CMS/render HTML | Không sửa file lõi/minified | Cao |
| WooCommerce | `7.8.1` | `woocommerce*.css/js`, class `woocommerce-js` | Cửa hàng, giỏ hàng | Không | Cao ở sản phẩm |
| Elementor | `3.12.1`; Pro `3.12.3` | `elementor-*`, `frontend-lite`, `elementor-page-4752` | Dàn trang | Không sửa bundle | Cao |
| Happy Addons | `3.8.4`; Pro `2.7.1` | `happy-addons*.js`, `ha-post-carousel`, `ha-product-carousel` | Carousel tin/sản phẩm | Không | Cao |
| jQuery | `3.7.1` | `js/jquery.minf43b.js` | Nền cho plugin | Không | Cao |
| jQuery Migrate | `3.4.1` | `jquery-migrate.min5589.js` | Tương thích plugin cũ | Không | Trung bình |
| Slick | CSS ghi `3.8.4`; plugin thực tế là Slick | `slick*.css/js`, `.slick-initialized` khi chạy | Carousel tin/sản phẩm | Không | Cao |
| bxSlider | không ghi version rõ | `jquery.bxslider.js`, `.bxslider` | Banner 3 ảnh | Không | Cao |
| Owl Carousel | theme `1.0.8`, plugin khác `3.18.0` | `owl.carousel*.css/js` | Carousel plugin | Không | Có tải, nhưng phần chính dùng Slick/bxSlider |
| Swiper | `6.4.5` và `8.4.5` cùng tồn tại | `swiper75e4.css`, `swiper.min94a4.css` | Slider của plugin | Không | Có thể |
| Select2/SelectWoo | `4.0.3-wc.7.8.1` | `select2.full`, `selectWoo.full` | Select nâng cao | Không | Thấp trên trang chủ |
| Font Awesome | `4.7.0`, `5.15.3`, bundle Elementor | nhiều `font-awesome*.css`, `all.min*.css` | Icon | Không | Trung bình |
| PrettyPhoto | `3.1.6` | `prettyPhoto005e.css`, `jquery.prettyPhoto` | Lightbox | Không | Thấp |
| Colorbox | `1.4.21` | `colorbox13ac.css`, `jquery.colorbox` | Popup/lightbox | Không | Thấp |
| Masonry + imagesLoaded | plugin gallery | inline JS dòng khoảng 1916–1947 và `plugin_gallery.js` | Bố trí 12 ảnh | Không sửa plugin; override riêng nếu cần | Cao ở gallery |
| Fancybox marker | class `fancybox` | link ảnh gallery | Mở ảnh lớn | Không | Trung bình |
| Contact Form 7 | `5.7.5.1` | `styles3960.css`, `index3960.js` | Form liên hệ | Không | Thấp |
| YITH plugins | nhiều phiên bản | file `yith-*` | Wishlist/filter/brand/size chart | Không | Thấp đến trung bình |
| Woolentor | `2.6.0` | `woolentor-*` | Widget WooCommerce | Không | Cao ở sản phẩm |
| Revolution Slider | `6.6.12` | `rbtools`, `rs6`, `rs6.css` | Slider bundle được tải | Không | Không phải banner chính hiện tại |
| Anime.js | `2.0.2` | `anime.min4c56.js` | Animation | Không | Thấp |
| Google Fonts | Mulish, Roboto, Roboto Slab | link `fonts.googleapis.com` | Typography | Không sửa URL CDN trực tiếp; cân nhắc self-host | Cao về font |
| FLMNGR widget | file `widgets36d7.js` | nhiều script `../cdn.flmngr.com/...` | Widget/chèn nội dung | Không sửa bundle | Có thể |

Không tìm thấy bằng chứng Tailwind CSS, Bootstrap trong `www.yeucodo.vn\index.html`, Animate.css hay WOW.js. Bootstrap có trong thư mục mirror của `beyono.vn`, nhưng đó không phải framework của trang chủ YEUCODO.

## CSS riêng và CSS bên thứ ba

### CSS có khả năng là code giao diện riêng/theme

- `www.yeucodo.vn\css\my_stylef700.css?v=1.0.1`
- `www.yeucodo.vn\css\responsive_stylef700.css?v=1.0.1`
- `www.yeucodo.vn\css\miti9603.css`
- `www.yeucodo.vn\css\style5c5c9.css`
- CSS inline trong `index.html`, gồm preloader, header, marquee và gallery.

### CSS sinh bởi page builder/plugin

- `post-47523236.css` cho page ID 4752;
- `ha-4752ee20.css`;
- `frontend-lite.min*.css`;
- `woolentor-widgetsd315.css`;
- `gallery_style.css`, `jquery.bxslider.css`.

Không nên sửa trực tiếp các file có `.min`, file mang dấu vết plugin hoặc file sinh theo page ID. Nên thêm một file custom CSS mới ở working copy.

## JavaScript riêng và bên thứ ba

JavaScript hành vi riêng của trang chủ hiện chủ yếu nằm inline trong `index.html`:

- khởi tạo bxSlider ở khoảng dòng 1881–1911;
- khởi tạo Masonry/imagesLoaded ở khoảng dòng 1914–1950;
- animation marquee dùng CSS ở khoảng dòng 1000–1052.

`jquery.bxslider.js` và `plugin_gallery.js` là thư viện/plugin, không nên sửa trực tiếp. Khi cần thay đổi hành vi, nên tạo `custom-homepage.js` riêng.

## Analytics, chat và mạng xã hội

- Có `facebook-domain-verification`.
- Có link Facebook, TikTok và YouTube ở footer.
- Không tìm thấy marker Google Analytics/Google Tag Manager rõ ràng trong HTML trang chủ.
- Không tìm thấy chat widget rõ ràng; không nên gọi FLMNGR là chat widget.
- Các URL `chrome-extension://` không xuất hiện trong file website và không được tính là tài nguyên website.

## Đánh giá backend/ngôn ngữ

| Thành phần | Kết luận | Bằng chứng | Độ tin cậy |
|---|---|---|---|
| Source backend trong mirror | Không có | Không có manifest/source backend phổ biến | Cao |
| Backend production dùng WordPress | Nghi ngờ mạnh, không phải bằng chứng source | `wp-*`, page ID, WordPress block CSS, Elementor | Cao về dấu vết frontend; chưa đủ để xác nhận cấu hình backend |
| WooCommerce trên production | Nghi ngờ mạnh | Asset và class WooCommerce 7.8.1 | Cao |
| PHP | Chưa xác định chắc chắn | Một URL upload có đuôi `.php`, nhưng HTTrack không lưu source PHP | Thấp |
| Database | Không xác định | Không có dump/schema/config | Cao rằng mirror không chứa |
| Server/framework khác | Không xác định | Không có header/source đủ rõ | Thấp |

**Kết luận:** “Bản HTTrack không đủ để xác định chắc chắn backend.”

Để xác nhận, công ty cần cung cấp repository gốc, manifest dependency, cấu hình triển khai đã loại bỏ bí mật, hoặc tài liệu kiến trúc. Không cần và không được thử xâm nhập website production.

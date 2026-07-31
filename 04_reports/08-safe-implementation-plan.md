# 08 — Kế hoạch triển khai an toàn

## Nguyên tắc

- Tuyệt đối không sửa `C:\WebsiteBackup\YEUCODO_research\00_original_httrack`.
- Chỉ sửa dưới `C:\WebsiteBackup\YEUCODO_research\01_working_copy`.
- Không sửa thư viện minified, cache HTTrack hay file domain ngoài.
- Không gửi form, không thử giỏ hàng/thanh toán/đăng nhập.
- Mỗi thay đổi nhỏ phải kiểm tra lại localhost.

## File cần sao lưu/đưa vào Git trước khi sửa

Ưu tiên theo dõi:

- `01_working_copy\YEUCODO_backup\www.yeucodo.vn\index.html`
- file custom CSS mới;
- file custom JavaScript mới nếu cần;
- ảnh placeholder mới nếu dùng;
- `04_reports` và changelog.

Không cần sao chép thêm một bản thủ công của toàn bộ 320 MiB nếu Git đã theo dõi working copy; nhưng nên tạo commit baseline trước khi sửa.

## File không nên sửa

- toàn bộ `00_original_httrack`;
- `hts-cache`, `hts-log.txt`, `.whtt`;
- mọi file `*.min.css`, `*.min.js`;
- bundle Elementor/WooCommerce/Happy Addons/Woolentor;
- `jquery.bxslider.js`, `plugin_gallery.js`;
- file dưới `beyono.vn`, `cdn.*`, `static.*`;
- các file font.

## File mới đề xuất

```text
01_working_copy\YEUCODO_backup\www.yeucodo.vn\css\custom-homepage.css
01_working_copy\YEUCODO_backup\www.yeucodo.vn\js\custom-homepage.js
01_working_copy\YEUCODO_backup\www.yeucodo.vn\CHANGELOG-local.md
```

`custom-homepage.js` chỉ tạo khi CSS/HTML không đủ, ví dụ cần điều khiển dropdown hoặc chặn form production trong demo.

## Có nên sửa HTML mirror?

Có, vì đây là bản tĩnh duy nhất có thể chỉnh, nhưng chỉ trong working copy và với phạm vi nhỏ:

- thay cấu trúc menu;
- di chuyển section nguyên khối;
- giảm card render trên trang chủ;
- thêm CTA;
- thêm link tới custom CSS/JS.

Không nên tái cấu trúc toàn bộ file trong một lần vì HTML 204 KiB có nhiều markup sinh bởi plugin.

## Thứ tự triển khai

1. Khởi tạo/kiểm tra Git local và commit baseline.
2. Chụp before ở viewport desktop cố định.
3. Thêm `custom-homepage.css` và link cuối `<head>`.
4. Sửa menu cấp 1/cấp 2 và kiểm tra mọi URL local.
5. Sửa dropdown desktop bằng CSS/JS riêng, không chạm SmartMenus minified.
6. Di chuyển section “YEU CODO CÓ GÌ?” lên sau banner/giới thiệu đã tinh gọn.
7. Chọn 8 sản phẩm; sửa placeholder ảnh hỏng; đổi nút thành “Xem thêm sản phẩm”.
8. Giữ 12 ảnh và thêm “Xem thêm hình ảnh”.
9. Di chuyển tin xuống sau gallery, giữ 3 bài, thêm “Xem thêm tin tức”.
10. Chặn/no-op hai form production trong bản demo nếu search chưa có backend.
11. Kiểm tra console, link, ảnh, carousel, footer sau mỗi bước.
12. Chụp after cùng viewport và ghi changelog.
13. Commit riêng từng nhóm thay đổi.

## Git local

Kiểm tra thực tế ngày 31/07/2026: `C:\WebsiteBackup` hiện **chưa phải Git repository** (`git status` trả “not a git repository”). Vì vậy cần khởi tạo Git hoặc xin đường dẫn repository chuẩn trước khi bắt đầu sửa.

Chạy tại:

```powershell
cd "C:\WebsiteBackup\YEUCODO_research"
git init
git status
git add "01_working_copy" "04_reports"
git commit -m "chore: capture YEUCODO mirror baseline"
```

Sau mỗi bước:

```powershell
git diff
git add "01_working_copy\YEUCODO_backup\www.yeucodo.vn"
git commit -m "feat: update YEUCODO homepage navigation"
```

Không dùng `git reset --hard`. Hoàn tác an toàn một commit đã chia sẻ bằng `git revert <commit>`. Với commit local chưa chia sẻ, vẫn nên tạo nhánh hoặc revert để giữ lịch sử.

## Nhánh đề xuất

```powershell
git switch -c ui/homepage-restructure
```

Chỉ chạy `git init` sau khi người phụ trách xác nhận phạm vi file cần theo dõi và `.gitignore`; chưa thực hiện lệnh này trong giai đoạn báo cáo.

## Chụp before/after

- Dùng cùng trình duyệt, viewport desktop, zoom 100%.
- Chụp full page.
- Tên file:

```text
03_screenshots\before-homepage-desktop.png
03_screenshots\after-menu-desktop.png
03_screenshots\after-homepage-desktop.png
```

- Ghi ngày, URL localhost và commit hash trong changelog.
- Không chụp dữ liệu tài khoản hay nội dung riêng tư.

## Changelog đề xuất

Mỗi mục gồm:

```markdown
## YYYY-MM-DD — Tên thay đổi
- Commit:
- File:
- Thay đổi:
- Lý do:
- Kết quả kiểm tra:
- Lỗi còn lại:
- Ảnh before/after:
```

## Rủi ro và hoàn tác

| Rủi ro | Phòng ngừa | Hoàn tác |
|---|---|---|
| HTML sinh bởi plugin khó cân bằng thẻ | Di chuyển nguyên section, xem diff nhỏ | Revert commit section |
| CSS cũ có specificity cao | Custom CSS tải cuối, selector có namespace | Xóa/revert rule custom |
| Slick clone làm đếm sai | Đếm HTML trước init | Khôi phục danh sách card |
| Dropdown xung đột SmartMenus | Chỉ thêm override có scope `.main-menu` | Revert custom JS/CSS |
| Link production/form thật | Kiểm kê `http`, `form action`, không submit | Revert link hoặc no-op |
| Asset hỏng | Placeholder local, không hotlink | Khôi phục `src` cũ |
| Thay đổi vô tình bản gốc | Kiểm tra `git status`, quyền read-only nếu có | Phục hồi từ bản backup ngoài Git |

## Tiêu chí hoàn tất đợt đầu

- Menu đúng 6 mục cấp 1 đã chốt.
- Dropdown desktop hoạt động bằng chuột và bàn phím ở mức cơ bản.
- Thứ tự section đúng.
- 4 card dịch vụ, tối đa 8 sản phẩm, 12 ảnh, khoảng 3 tin.
- Có đủ 3 CTA.
- Không có form nào gửi production khi thử demo.
- Không phát sinh 404 mới.
- Không sửa thư viện minified hoặc `00_original_httrack`.

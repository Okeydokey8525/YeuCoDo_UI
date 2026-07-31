# 01 — Kiểm kê dự án YEUCODO

Ngày kiểm tra: 31/07/2026  
Phạm vi: chỉ đọc `00_original_httrack`; không sửa HTML/CSS/JavaScript.  
Thư mục dự án: `C:\WebsiteBackup\YEUCODO_research`

## Kết luận nhanh

- Index điều hướng do HTTrack tạo: `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\index.html`.
- Index dự án mirror do HTTrack tạo: `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\index.html`.
- Trang chủ YEUCODO thật trong mirror: `C:\WebsiteBackup\YEUCODO_research\00_original_httrack\YEUCODO_backup\www.yeucodo.vn\index.html`.
- Document root nên dùng khi thử nghiệm: `C:\WebsiteBackup\YEUCODO_research\01_working_copy\YEUCODO_backup`.
- URL trang chủ tương ứng: `http://localhost:8000/www.yeucodo.vn/`.

## Cấu trúc cấp cao

```text
C:\WebsiteBackup
└── YEUCODO_research
    ├── 00_original_httrack       # bản gốc, chỉ đọc
    │   ├── index.html            # trang điều hướng HTTrack
    │   └── YEUCODO_backup
    │       ├── index.html        # trang index dự án HTTrack
    │       ├── hts-log.txt
    │       ├── hts-cache
    │       ├── www.yeucodo.vn    # nội dung website chính
    │       └── các domain phụ
    ├── 01_working_copy           # nơi được phép thử nghiệm sau này
    ├── 02_notes
    ├── 03_screenshots
    └── 04_reports
```

## Quy mô toàn dự án

| Phạm vi | Số file | Dung lượng |
|---|---:|---:|
| Toàn bộ `YEUCODO_research` trước khi tạo báo cáo | 1.448 | 672.616.999 byte (xấp xỉ 641,5 MiB) |
| `00_original_httrack` | 724 | 336.343.147 byte (xấp xỉ 320,8 MiB) |
| `01_working_copy` | 724 | 336.273.852 byte (xấp xỉ 320,7 MiB) |
| `02_notes` | 0 | 0 |
| `03_screenshots` | 0 | 0 |
| `04_reports` trước tác vụ | 0 | 0 |

## Phân loại file trong bản gốc

| Nhóm | Phần mở rộng | Số file | Dung lượng |
|---|---|---:|---:|
| HTML | `.html` | 210 | 26.669.801 byte |
| CSS | `.css` | 78 | 3.639.731 byte |
| JavaScript | `.js` | 82 | 3.057.335 byte |
| Ảnh | `.webp`, `.png`, `.jpg`, `.gif`, `.ico` | 329 | 302.532.219 byte |
| Font | `.woff`, `.woff2`, `.ttf`, `.eot` | 15 | 786.092 byte |
| JSON | `.json` | 0 | 0 |
| XML | `.xml` | 0 | 0 |
| Log có đuôi `.log` | `.log` | 1 | 676 byte |
| Log chính HTTrack | `hts-log.txt` | 1 | 4.381 byte |
| Cache nén | `.zip` | 1 | 7.225.795 byte |

Ghi chú: có một file không có phần mở rộng, dung lượng 40.427 byte, nằm dưới domain `static.vecteezy.com`.

## Các thư mục domain HTTrack đã lưu

| Thư mục | Số file | Dung lượng | Nhận định |
|---|---:|---:|---|
| `www.yeucodo.vn` | 584 | 51.572.501 byte | Website chính |
| `yeucodo.com` | 87 | 274.990.697 byte | Tài nguyên/liên kết từ domain liên quan |
| `yeucodo.vn` | 4 | 869.150 byte | Domain liên quan |
| `beyono.vn` | 11 | 1.017.018 byte | Bên thứ ba/nguồn tài nguyên được tham chiếu |
| `cdn.flmngr.com` | 1 | 145.019 byte | Widget bên thứ ba |
| `cdn.cellphones.com.vn` | 1 | 8.780 byte | Tài nguyên bên thứ ba |
| `stackpath.bootstrapcdn.com` | 1 | 51.039 byte | CDN thư viện |
| `static.vecteezy.com` | 1 | 40.427 byte | Ảnh nền bên thứ ba |
| `static.xx.fbcdn.net` | 18 | 8.575 byte | Facebook |
| `www.google.com` | 1 | 976 byte | Google |
| `hts-cache` | 6 | 7.613.408 byte | Cache nội bộ HTTrack |

## Các file index

| File | Dung lượng | Vai trò |
|---|---:|---|
| `00_original_httrack\index.html` | 5.068 byte | Trang điều hướng tổng do HTTrack tạo |
| `00_original_httrack\YEUCODO_backup\index.html` | 5.213 byte | Trang index dự án mirror do HTTrack tạo |
| `00_original_httrack\YEUCODO_backup\www.yeucodo.vn\index.html` | 204.722 byte | HTML trang chủ YEUCODO |
| `01_working_copy\index.html` | 5.068 byte | Bản sao trang điều hướng HTTrack |
| `01_working_copy\YEUCODO_backup\index.html` | 5.213 byte | Bản sao index dự án |
| `01_working_copy\YEUCODO_backup\www.yeucodo.vn\index.html` | 204.714 byte | Trang chủ dùng để thử nghiệm |

## So sánh nhanh bản gốc và working copy

Hai cây đều có 724 file. Có 8 khác biệt về kích thước/đường dẫn, tập trung ở:

- `hts-log.txt` và các file trong `hts-cache`;
- `www.yeucodo.vn\index.html` lệch 8 byte;
- một tên file rất dài dưới `static.vecteezy.com` bị cắt khác nhau giữa hai bản.

Vì vậy không nên coi hai thư mục là byte-for-byte giống nhau. Mọi chỉnh sửa tương lai vẫn phải giới hạn trong `01_working_copy`.

## Bằng chứng backend

Không tìm thấy `package.json`, `composer.json`, `pom.xml`, `build.gradle`, `.csproj`, `.sln`, `requirements.txt`, `pyproject.toml`, `manage.py`, `artisan`, hay source `.php`, `.java`, `.cs`, `.py`.

**Kết luận bắt buộc:** Bản HTTrack không đủ để xác định chắc chắn backend.


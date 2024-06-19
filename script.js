$(document).ready(function() {
    // Xử lý khi người dùng nhấn nút Đăng trong form bình luận
    $('form').submit(function(event) {
        event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi (chặn reload trang)

        var commentText = $('#comment').val(); // Lấy nội dung bình luận từ textarea

        // Kiểm tra xem có nội dung bình luận hay không
        if (commentText.trim() === '') {
            alert('Vui lòng nhập nội dung bình luận!');
            return;
        }

        // Lấy ngày giờ hiện tại để hiển thị trong bình luận (ở định dạng ngày tháng năm giờ phút)
        var currentDateTime = new Date().toLocaleString();

        // Tạo HTML cho phần bình luận mới
        var newComment = `
            <div class="comment mb-3">
                <p><strong>You</strong> <span class="text-muted">- ${currentDateTime}</span></p>
                <p>${commentText}</p>
            </div>
        `;

        // Chèn bình luận mới vào cuối phần bình luận
        $('.comments-section').append(newComment);

        // Reset form sau khi đăng bình luận thành công
        $('#comment').val('');
    });
    // // Xử lý sự kiện click vào nút "Read More"
    // $('.btn-primary').click(function(event) {
    //     event.preventDefault(); // Ngăn chặn hành động mặc định của nút
    //
    //     var newsTitle = $(this).closest('.card').find('.card-title').text();
    //     var newsContent = $(this).closest('.card').find('.card-text').text();
    //
    //     // Cập nhật tiêu đề và nội dung cho modal
    //     $('#newsModalLabel').text(newsTitle);
    //     $('#modalContent').text(newsContent);
    //
    //     // Hiển thị modal
    //     $('#newsModal').modal('show');
    // });
});

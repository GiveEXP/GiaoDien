//var viewer = pannellum.viewer('panorama', {
//    "type": "equirectangular",
//    "panorama": "./Image/river.jpg"
//});

//viewer.on('mousemove', function (event) {
//    // Lấy tọa độ pitch và yaw của điểm người dùng di chuột đến
//    var pitch = event.pitch;
//    var yaw = event.yaw;

//    // Hiển thị tọa độ pitch và yaw trong một cửa sổ thông báo popup
//    var message = "Pitch: " + pitch + ", Yaw: " + yaw;
//    showPopupMessage(message);
//});

//function showPopupMessage(message) {
//    // Tạo một phần tử div cho cửa sổ thông báo
//    var popup = document.createElement("div");
//    popup.innerHTML = message;
///test hơi nhìu thầy coi coi đoạn nào chứ em lú cái này quá rồi ( đã xóa bớt mấy cái vì nhìn nó rất là ..)

//    // Thiết lập các thuộc tính CSS cho cửa sổ thông báo
//    popup.style.position = "fixed";
//    popup.style.top = "10px";
//    popup.style.right = "10px";
//    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
//    popup.style.color = "white";
//    popup.style.padding = "10px";
//    popup.style.borderRadius = "5px";

//    // Thêm cửa sổ thông báo vào body của trang web
//    document.body.appendChild(popup);

//    // Đặt thời gian tồn tại của cửa sổ thông báo (ví dụ: 5 giây)
//    setTimeout(function () {
//        document.body.removeChild(popup);
//    }, 5000); // 5000 mili giây = 5 giây
//}


//pannellum.viewer('panorama', {
//    "type": "equirectangular",
//    "panorama": "./Image/river.jpg",
//    "autoLoad": true,
//   /* "autoRotate": -2, // Tùy chọn quay tự động*/
//    "hotSpots": [],  // Thêm điểm nóng (nếu cần)

//    "onContextMenu": function (mouseEvent) {
//        // Ngăn sự kiện chuột mặc định xuất hiện
//        // Tắt sự kiện chuột cho sự kiện mousePressed()
//        panel.setEnable(false, MouseInputListener.MOUSE_PRESSED);


//        // Lấy tọa độ pitch và yaw của điểm người dùng chuột phải
//        var pitch = this.mouseEventToCoords(mouseEvent).pitch;
//        var yaw = this.mouseEventToCoords(mouseEvent).yaw;

//        this.mouseEventToCoords = function (event) {
//            return mouseEventToCoords(event);

//        // Hiển thị tọa độ pitch và yaw trong một cửa sổ thông báo popup
//        var message = "Pitch: " + pitch + ", Yaw: " + yaw;
//        showPopupMessage(message);

//    }

//});

//function showPopupMessage(message) {
//    // Tạo và hiển thị cửa sổ thông báo popup
//    alert(message);
//}







//var viewer = pannellum.viewer('panorama', {
//    "type": "equirectangular",
//    "panorama": "./Image/river.jpg",
//    "autoLoad": true,
//    "autoRotate": -2, // Tùy chọn quay tự động
//    "hotSpots": [],  // Thêm điểm nóng (nếu cần)
//});
//viewer.on('mousedown', function (event) {
//    // coords[0] is pitch, coords[1] is yaw
//    var coords = viewer.mouseEventToCoords(event);
//    // Do something with the coordinates here...
//});



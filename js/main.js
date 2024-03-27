/* truncateCardTitle(); ->ready: trang web vừa load thì đã chạy luôn code này (chạy khi các thư viện khác chưa load xong) -> không nên dùng gây chậm, hư code */

/* all load: chỉ chạy khi các thư viện đã load hết: */
window.addEventListener("load",function(){
    truncateCardTitle();
});

// B1: LẤY NỘI DUNG CHỨA CHỮ (TÊN KHÓA HỌC)
function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title"); //tìm các thẻ chứa card title
    console.log(cardList);
    for(var i = 0; i<cardList.length; i++){
        var text = cardList[i].innerHTML; //takes contents in HTML (h5 card)
        var newText = truncateString(text,35);//độ dài (có tính cả khoảng trắng) là 30 (bước 2 -> quay lại bước 1 tạo thành bước 3)
        cardList[i].innerHTML = newText;
    }
}

// B2: RÚT GỌN
function truncateString(str,num){ //xử lý chuỗi ở trên: str(chuỗi cần xử lý hàm ở trên); num(số/ký tự cho phép được hiện lên)
    if(str.length > num){
        return str.slice(0,num) + "..."//trả lại kết quả, rút gọn/cắt nội dung(slice) từ chữ đầu tiên là 0 đến số chữ cần cho vào nội dung, nội dung khác sẽ được thay thế bằng dấu "..."
    }else{
        return str;
    }
}

// B3: GẮN LẠI NỘI DUNG VÀO CARD


/* SIDEBAR MINI */
var toggeleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox')

toggeleBtn.addEventListener('click',function(){
    sidebarMini.classList.toggle('is-opened');
});
switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});
//function là chức năng để thêm vào sự kiện click.
// toggle('') là hàm có tác dụng remove, add class (khi bật thì add(sidebarMini) vào trong html, khi bỏ lựa chọn thì remove khỏi code html)
// để add thuộc tính vào thì sử dụng classList(không đè các class hiện tại đang có, chỉ add mới)
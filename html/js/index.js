// alert("ok")
// 바닐라 > 순수 자바스크립트


const title_0A = ["산행일정", "2024년 05월", "일정보기"];
const title_1A = ["무박산행", "2024년 05월", "스케줄보기"];
const title_2A = ["당일산행", "2024년 05월", "코스"];
const title_3A = ["숙박", "2024년 05월", "회비"];
const title_4A = ["트레킹", "2024년 05월", "시간"];
const title_5A = ["섬", "2024년 05월", "계획"];
const title_6A = ["신청안내", "2024년 05월", "자세히"];

// 날짜별 그림, 상세내용, 신청인월수, 예약하기
const dateA = ["6월 2일", "6월 9일", "6월 16일", "6월 23일"]
const mountA = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
const detailA = [
    "준비물 : 식수<br>지리산 연하선경, 거대종주<br>50,000원",
    "준비물 : 우유<br>속리산 연하선경, 거대종주<br>50,000원",
    "준비물 : 취미<br>설악산 연하선경, 거대종주<br>50,000원",
    "준비물 : 빵<br>계룡산 연하선경, 거대종주<br>50,000원"
]
const sitA = [26, 25, 35, 40];
const revA = ["예약하기", "신청하기", "준비하기", "예매하기"]


let searchBtn, searchText, str;

// 윈도우, 웹 실행할때 실행문
window.onload = function () {

    //html은 집어넣을때
    for (i = 0; i < title_0A.length; i++) {
        $(".title0 .title_" + i).html(title_0A[i]);
        $(".title1 .title_" + i).html(title_1A[i]);
        $(".title2 .title_" + i).html(title_2A[i]);
        $(".title3 .title_" + i).html(title_3A[i]);
        $(".title4 .title_" + i).html(title_4A[i]);
        $(".title5 .title_" + i).html(title_5A[i]);
    }

    searchBtn = document.querySelector(".searchBtn");
    searchText = document.getElementById("searchText")

    searchBtn.onclick = function () {
        // console.log("검색창에 입력하세요");
        str = searchText.value;
        console.log(str);
    }
}

// $ 표시가 제이쿼리
// index는 검색, 색인 번호

$(function () {
    $("nav div").on("click", function () {
        // div 번호 선택
        no = $(this).index();
        // div 나머지 숨기기
        $(".at").hide();
        // div 번호 보이기
        $(".at" + no).show();

        if (no == 0) {
            for (i = 0; i <= dateA.length; i++) {
                $(".at0_date_" +i).html(dateA[i]);
                $(".at0_mount_" +i).attr("src", "img/" + mountA[i]);
                $(".at0_detail_" +i).html(detailA[i]);
                $(".at0_sit_" +i).html(sitA[i]);
                $(".at0_rev_" +i).html(revA[i]);


            }
        }

        else if(no == 1){
            
        }
    })
})




// ---------------------------------------















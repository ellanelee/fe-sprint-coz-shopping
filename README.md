프로젝트명 : Sesson4 Solo Project 
프로젝트 기간 : 2023. 7. 11 ~ 7.17

주요 구현 내용
1) API를 통해 쇼핑몰의 상품 데이터를 호출하여 화면에 표시
2) 메인페이지, 제품페이지, 북마크 페이지를 구성
3) 헤더의 상단의 메뉴를 통해 페이지를 이동 
4) 화면에서 제품을 표시할때 무한 스크롤을 적용
5) 제품 페이지에서 제품 타입별로 필터링하여 조회
6) 제품을 북마크 하면 북마크 Toast로서 알림
7) 북마크 된 제품은 북마크 페이지에 별도로 렌더링
8) 제품을 Click하면 확대된 그림으로 조회

구현 방법 
페이지의 갯수가 많지 않으므로 SPA가 가능한 React로 구현(CRA)적용 
코드 리뷰 단위에 맞게 branch를 열고 PR, 리뷰 이후 반영된 내용을 merge 


1) 기본 화면구현
   
   
![session_4_solo_display](https://github.com/ellanelee/fe-sprint-coz-shopping/assets/130072135/03ef3071-f197-4165-b036-1434c8a9108b)



2)필터링 구현


![filtering](https://github.com/ellanelee/fe-sprint-coz-shopping/assets/130072135/7a11b093-c938-4da0-8f97-825d8ea66152)





3)북마크 구현 


![북마크 표시하기](https://github.com/ellanelee/fe-sprint-coz-shopping/assets/130072135/89498c10-0c47-45b2-b813-327285b4965b)



4)모달


![모달 적용](https://github.com/ellanelee/fe-sprint-coz-shopping/assets/130072135/c8ed95ed-8c24-4b2e-936f-82ed45af5a1d)

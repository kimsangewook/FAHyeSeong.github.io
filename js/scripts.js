window.onload = function () {

    // 무한 롤링을 위한 콘텐츠 복제
    const banner = document.getElementById('banner');
    banner.innerHTML += banner.innerHTML; // 콘텐츠 두 번 반복

    // 지도 표시할 div 가져오기
    const container = document.getElementById('map');

    // 지도 옵션 설정
    const options = {
        center: new kakao.maps.LatLng(37.3364, 126.7210), // 경기도 시흥시 공단1대로 196번길 34 좌표
        level: 4 // 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.3364, 126.7210) // 경기도 시흥시 공단1대로 196번길 34 좌표
    });
    marker.setMap(map);

    // 주소에 대한 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px; width:260px;">경기도 시흥시 공단1대로 196번길 34<br/>정왕동, 시화공단2다 606호</div>'
    });
    infowindow.open(map, marker);
};


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


# trano_reactnative_weatherfor

목표 : 지역(각국 도시)별 날씨 조회 앱 구현

목적 : 
  1. 외부연동api (http://api.openweathermap.org/data/2.5/weather) 사용하기
  2. fetch.then 구문 이해하기
  3. stateless component 작성하기(함수형 컴포넌트 : open_weather_map.js) , 작성및테스트하기 용이함 (단, 성능상 이득은 없다. ShouldComponentUpdate() 를
  함수형 컴포넌트에서는 아직까지 적용하지 못한다. refs 도 지원안됨)
  
expo 버전으로 만들었고, 간단히 실행가능하다.
추가 라이브러리는 없다. package.json 참고

실행 방법
  1. clone 하고나서 npm install
  2. 루트디렉토리에서 npm start
  3. 모바일단말에서 expo client 로 QR 코드 인식
  
  

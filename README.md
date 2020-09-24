# 프로젝트


함께 취미를 공유 할 수 있는 온라인 모임사이트 <br/>

스프링 프레임워크를 사용하지않고 Eclipse JSP MVC2패턴을 이용하여 프로젝트 구축

4인 팀 프로젝트<br/>

프로젝트 기간: 2020,01,13 ~ 2020,01,27(2주)


![우리끼리](https://user-images.githubusercontent.com/44168355/94172032-f1b25080-fecc-11ea-8bbd-f0d9ea402093.png)


# 사용기술


 - Front-End : HTML, CSS, JavaScript, JQuery
 
 - Back-End : Java, Servlet & JSP, mybatis, JDK1.8, Apache Tomcat8.5, Oracle
 
 - Open API : kakao 주소 API
 
 - Tool : Eclipse
 


# 프로젝트 담당 및 기능

프로젝트에서 모임게시판 등록/삭제/수정을 맡았습니다

### 모임 개설

 * 모임은 로그인 시 상단 네비게이션 바를 통해서 개설할 수 있습니다</br>
 * 로그인 한 회원이 아닐 경우 버튼이 생성되지 않습니다 

![모임개설2](https://user-images.githubusercontent.com/44168355/94172557-9b91dd00-fecd-11ea-8fe0-a87867a341df.png)

</br></br>

* 모임 코드가 자동적으로 생성되며
* 모임장은 로그인한 사람의 닉네임이 표기됩니다
* 모임명/모임일자/인원/장소/기간을 설정할 수 있습니다

![모임2](https://user-images.githubusercontent.com/44168355/94172929-1e1a9c80-fece-11ea-9c36-1e29b95b6b10.png)

</br></br>
* 모임 장소 설정은 다음 주소 API를 활용하였습니다
![정보](https://user-images.githubusercontent.com/44168355/94173273-a8fb9700-fece-11ea-8669-32afc30223e9.png)

</br></br>
* 모임 등록을 만들면서 기억에 남는것은 데이트 피커를 활용하여 달력을 활용한것입니다
![종료일](https://user-images.githubusercontent.com/44168355/94173489-f7a93100-fece-11ea-8211-5a2619f0ccf4.png)

* 데이트피커를 구성하며 시작일과 종료일 접수기간을 3가지 경우의수로 나뉘어서 구성했는데
* 모임접수기간은 종료일보다 길지 않을것 / 종료일의 최소값은 시작일로 / 시작일의 최대값은 종료일로 구성 이 부분에서 어려움을 겪었습니다
* javascript에 onClose를 활용하여 구성을해봤습니다

```java

onClose: function(selectedDate) {    
            // 종료일의 최소값을 시작일의 최소값
            $("#toDate").datepicker( "option", "minDate", selectedDate );
            $("#starDate").datepicker( "option", "minDate", selectedDate );
            }                



onClose: function( selectedDate ) {
                // 접수기간의 최대값을 시작일의 최소값지정
                $("#fromDate").datepicker( "option", "maxDate", selectedDate );
                $("#starDate").datepicker( "option", "minDate", selectedDate );
            }


 onClose: function( selectedDate ) {
            // 시작일(fromDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정 
            $("#toDate").datepicker( "option", "maxDate", selectedDate );
        }  

```
</br>

# 배운점

이 프로젝트는 스프림 프레임워크를 학습하기 전에 시작했기 때문에 REST APT를 모른 상태에서 진행한 프로젝트였습니다
이 프로젝트를 진행하고 스프링 프레임워크를 했을 때 REST API의 중요성을 깨닫게 해준 프로젝트였습니다

이번 프로젝트에서는 JSP 파일이 늘어나면 controller 클래스 파일도 1개씩 늘어나게 되면서 
추후 유지 보수하기에 정말 까다로울 것 같다는 느낌을 몸소 체험하게 해줬습니다..









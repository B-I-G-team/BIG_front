import React,{useState} from 'react'
import styled from 'styled-components';
import profileImg1 from 'assets/logo.png'
import profileImg2 from 'assets/place1.jpeg'
import Reserve from './Reserve';

const data = [
    {
        id : 1,
        img : profileImg1,
        name : '김민석',
        team : 'Start',
        Roll : 'C',
        height : 191,
        weight : 91
    },
    {
        id : 2,
        img : profileImg2,
        name : '김대환',
        team : 'Freaks',
        Roll : 'SG',
        height : 170,
        weight : 60
    },
    {
        id : 3,
        img : profileImg1,
        name : '김민범',
        team : '에어메카',
        Roll : 'SF',
        height : 175,
        weight : 70
    }
  ];
  
const Mypage = () => {
  const [UserIndex , setIndex] = useState(0);
  const user = data[UserIndex];
  const menuArr = [
    { name: '픽업게임', content: 'PickUpGame' },
    { name: '팀 대관', content: 'Team Reserve' }
  ];

  const subMenuArr = [
    { name: '승인 대기중', content : '승인 대기중'},
    { name: '결제 대기중', content : '결제 대기중'},
    { name: '예약 완료' , content : '예약 완료'}
  ]
  const [currentTab, clickTab] = useState(0);
  const [currentSubTab,clickSubTab] = useState(0);

  const selectMenuHandler = (index:number) => {
    clickTab(index);
    clickSubTab(0);
  };

  const selectSubMenuHandler = (index:number) => {
    clickSubTab(index);
  }
  const userButtonClick = () =>{
    setIndex(UserIndex+1)
    if (UserIndex === 2){
      setIndex(0);
    }
  }
  return (
    <>
    <button onClick = {userButtonClick}>+ 유저 정보 바뀔시</button>
    <Title>내 정보</Title>
    <InformationBox>
      <Image src={user.img} alt =""/>
    <Informations>
        <Information>이름 : {user.name}</Information>
        <Information>소속팀: {user.team}</Information>
        <Information>포지션: {user.Roll}</Information>
        <Information>키 / 몸무게: {user.height} / {user.weight}</Information>
    </Informations>
    </InformationBox>
    <Title>진행중인 예약정보</Title>
    <TabMenu>
    {menuArr.map((el,index) => (
              <li key = {index} className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
    </TabMenu>
    <SubTab>
    {subMenuArr.map((el,index) => (
              <li key = {index} className={index === currentSubTab ? "submenu focused" : "submenu" }
              onClick={() => selectSubMenuHandler(index)}>{el.name}</li>
            ))}
    </SubTab>
    <Reserve Data = {menuArr[currentTab]} subData = {subMenuArr[currentSubTab]}/>

    </>
  )
}

export default Mypage

const InformationBox = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  @media ${({ theme }) => theme.grid.tablet} {
    justify-content :flex-start;
  }
`;

const Title = styled.p`
font-size: ${({ theme }) => theme.font.size.subtitle_1};
font-weight: 600;
padding: 10px 0;
@media ${({ theme }) => theme.grid.tablet} {
  font-size: ${({ theme }) => theme.font.size.heading_6};
  font-weight: 700;
}

@media ${({ theme }) => theme.grid.laptop} {
  font-size: ${({ theme }) => theme.font.size.heading_5};
}
`;

const Informations =styled.ul`
    list-style : none;
    display :flex;
    flex-direction : column;
    align-items : flex-start;
`;

const Information = styled.li`
    padding : 10px;
`;

const Image = styled.img`
  width : 35px;
  height : 45px;
  @media ${({ theme }) => theme.grid.tablet} {
    width : 7vw;
    height : 9vh;
  }
`;

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  padding : 0px;
  color: rgb(150, 150, 150);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 10px;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    width: 100px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }
`;

const SubTab = styled.ul`
  font-weight: bold;
  padding : 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin-bottom: 7rem;
  @media ${({ theme }) => theme.grid.tablet} {
    flex-direction : row;
    
  }
  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    color : #CDCFFF;
    display: flex;
    transition: 0.5s;
    @media ${({ theme }) => theme.grid.tablet} {
      width: 100px;
      padding: 10px;
      font-size: 15px;
      
    }
    width: 30vw;
    padding: 10px;
    font-size: 15px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    color: #5D5FEF;
  }
`;

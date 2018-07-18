const dropdownList = [{
  className: 'a',
  url: '#',
  text: '주문현황',
},
{
  className: 'a',
  url: '#',
  text: '1:1 문의',
},
{
  className: 'a',
  url: '#',
  text: '교환반품',
},
{
  className: 'a',
  url: '#',
  text: '등급별 혜택 쿠폰함',
},
{
  className: 'a',
  url: '#',
  text: '포인트',
},
{
  className: 'a',
  url: '#',
  text: '내 정보 관리',
},
]

export const userMenuLinkText = [
  {
    text: '로그인',
    url: '#',
  },
  {
    text: '회원가입',
    url: '#',
  },
  {
    text: '마이페이지',
    url: '#',
    dropdown: true,
    dropdownList: [],
  },
  {
    text: '고객센터',
    url: '#',
    dropdown: true,
    dropdownList: [],
  },
  {
    text: '새벽배송 지연검색',
    url: '#',
  },
  {
    text: '이벤트 게시판',
    url: '#',
  },
  {
    text: '장바구니',
    url: '#',
  },
];

const sideDish = [
  {
    text: '나물무침',
    url: '#',
  },
  {
    text: '볶음',
    url: '#',
  },
  {
    text: '조림',
    url: '#',
  },
  {
    text: '김치',
    url: '#',
  },
  {
    text: '전',
    url: '#',
  },
  {
    text: '장아찌.피클',
    url: '#',
  },
  {
    text: '젓갈.장소스',
    url: '#',
  },
  {
    text: '세트',
    url: '#',
  },
];


export const mainMenuLinkText = [
  {
    text: '밑반찬',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '국찌개',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '메인반찬',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '아이반찬',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '장기식단',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '간편식',
    url: '#',
    subMenuList: sideDish,
  },
  {
    text: '브랜드관',
    url: '#',
    subMenuList: sideDish,
  },
];

export const specialMenuLinkText = [
  {
    url: 'https://www.baeminchan.com/best30/list.php',
    imgUrl: 'https://cdn.bmf.kr/banner/p_gnb1/180410/1523352994426_e20d5cc1c0a6.png',
    alt: '베스트반찬',
  },
  {
    url: 'https://www.baeminchan.com/promotion_c/list.php?cno=2160000',
    imgUrl: 'https://cdn.bmf.kr/banner/p_gnb2/171228/1514426530229_82c43181b982.jpg',
    alt: '알뜰쇼핑',
  },
  {
    url: '/attendance/index.php',
    imgUrl: 'https://cdn.bmf.kr/banner/p_gnb3/180402/1522645059002_3d74e23a9479.jpg',
    alt: '출석체크',
  },
];

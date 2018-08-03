import {Model} from "./model.js";
import {Controller} from "./controller.js";
import {MenuNavigation} from "./menuNavigation.js";
import {Template} from './template.js';

const template = new Template();

const model = new Model({
  menuData: [
    {menuName: '밑반찬' ,subMenuData: ['무침','나물무침','볶음','조림','김치','전','장아찌·피클','젓갈·장·소스','세트']},
    {menuName: '국,찌개' ,subMenuData: ['국','찌개','탕','전골','세트']},
    {menuName: '메인반찬' ,subMenuData: ['고기반찬','해산물반찬','생선반찬','덮밥','튀김','면','양식','아시아식','분식','죽','세트']},
    {menuName: '아이반찬' ,subMenuData: ['이유식 초기/중기','이유식 후기/완료기','아이반찬','어린이반찬','간식·음료']},
    {menuName: '정기식단' ,subMenuData: ['1~2인','3~4인','아이반찬']},
    {menuName: '간편식' ,subMenuData: ['간편반찬','간편국찌개','간편식품']},
    {menuName: '간식' ,subMenuData: ['베이커리','과일','주스','스무디','유제품·커피','기타간식']},
    {menuName: '브랜드관' ,subMenuData: ['베이커리','과일','주스','스무디','유제품·커피','기타간식']}
  ]
});

const menuNavigation = new MenuNavigation({
  menuNavigation: document.querySelector('nav'),
  template: template
})

const controller = new Controller({
  model: model,
  view: menuNavigation
})

controller.init();
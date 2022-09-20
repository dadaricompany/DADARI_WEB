/**
 * @name index.ts
 * @description  import문 간소화를 위해 reexport 함
 * @BoxMainContainer 화면 상단의 메인 카테고리의 컨테이너
 * @BoxListContainer 화면 하단의 카테고리 리스트의 컨테이너
 * @BoxContainer 화면 하단의 카테고리 리스트 내부의 카테고리 컨테이너
 */
export { default as BoxMainContainer } from "./BoxMainContainer"; //메인 카테고리
export { default as BoxListContainer } from "./BoxListContainer"; //카테고리 리스트
export { default as BoxContainer } from "./BoxContainer"; //카테고리 리스트 아이템

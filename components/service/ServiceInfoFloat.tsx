import styled from "styled-components";

const StyledServiceInfoFloat = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 112px;
  padding: 41px 20px 21px;
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(17, 19, 32, 0),
    rgba(17, 19, 32, 0.84) 32%,
    #111320
  );
`;
const StyledServiceInfoFloatItem = styled.div`
  display: grid;
  grid-template-columns: 120fr 194fr;
  grid-gap: 6px;
`;
const StyledItemGo = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #68708d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledItemAdd = styled.div`
  height: 50px;
  border-radius: 10px;
  background-image: linear-gradient(104deg, #ac66ff, #7435ff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
const ServiceInfoFloat = () => {
  return (
    <StyledServiceInfoFloat>
      <StyledServiceInfoFloatItem>
        <StyledItemGo>서비스 바로가기</StyledItemGo>
        <StyledItemAdd>비교함 담기</StyledItemAdd>
      </StyledServiceInfoFloatItem>
    </StyledServiceInfoFloat>
  );
};
export default ServiceInfoFloat;

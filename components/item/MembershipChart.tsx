import styled from "styled-components";

const StyledMembershipChart = styled.div`
  height: 38px;
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  background-color: #2d344b;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    float: left;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:nth-child(1):checked ~ .toggle_option_slider {
    ::after {
      content: "베이직";
    }
    left: 0;
  }
  input[type="radio"]:nth-child(2):checked ~ .toggle_option_slider {
    ::after {
      content: "프리미엄";
    }
    left: 33%;
  }
  input[type="radio"]:nth-child(3):checked ~ .toggle_option_slider {
    ::after {
      content: "플래티넘";
    }
    left: 66.7%;
  }
  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider {
    width: 33.3%;
    height: 38px;
    border-radius: 22px;
    box-shadow: 0 2px 20px 0 rgba(130, 70, 250, 0.58),
      inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3);
    background-color: #8246fa;
    position: absolute;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: -0.29px;
    font-size: 15px;
  }
`;
const changeState = (e: any) => {
  e.currentTarget.control.checked = true;
};
const MembershipChart = () => {
  return (
    <StyledMembershipChart>
      <input
        type="radio"
        className="toggle_option"
        id="first_toggle"
        name="toggle_option"
        defaultChecked
      />
      <input
        type="radio"
        className="toggle_option"
        id="second_toggle"
        name="toggle_option"
      />
      <input
        type="radio"
        className="toggle_option"
        id="third_toggle"
        name="toggle_option"
      />
      <label htmlFor="first_toggle" onClick={changeState}>
        <p></p>
      </label>
      <label htmlFor="second_toggle" onClick={changeState}>
        <p></p>
      </label>
      <label htmlFor="third_toggle" onClick={changeState}>
        <p></p>
      </label>
      <div className="toggle_option_slider"></div>
    </StyledMembershipChart>
  );
};
export default MembershipChart;

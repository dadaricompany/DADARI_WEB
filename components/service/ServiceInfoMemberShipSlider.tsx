import { Fragment } from "react";
import styled, { css } from "styled-components";
import { MouseEvent } from "react";

const StyledServiceInfoMemberShipSliderOne = styled.div<{ item: any }>`
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
      content: "단일 멤버쉽";
    }
    left: 0;
  }
  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider {
    width: 100%;
    height: 38px;
    border-radius: 22px;
    position: absolute;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bcc2d6;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: -0.25px;
    font-size: 13px;
  }
`;
const StyledServiceInfoMemberShipSliderTwo = styled.div<{ item: any }>`
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
      content: "${(props) => props.item[0].name}";
    }
    left: 0;
  }
  input[type="radio"]:nth-child(2):checked ~ .toggle_option_slider {
    ::after {
      content: "${(props) => props.item[1].name}";
    }
    left: 50%;
  }
  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider {
    width: 50%;
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
const StyledServiceInfoMemberShipSliderThree = styled.div<{ item: any }>`
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
  ${(props) => {
    return css`
      input[type="radio"]:nth-child(1):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[0].name}";
        }
        left: 0;
      }
      input[type="radio"]:nth-child(2):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[1].name}";
        }
        left: 33%;
      }
      input[type="radio"]:nth-child(3):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[2].name}";
        }
        left: 66.7%;
      }
    `;
  }};

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
const StyledServiceInfoMemberShipSliderFour = styled.div<{ item: any }>`
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
  ${(props) => {
    return css`
      input[type="radio"]:nth-child(1):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[0].name}";
        }
        left: 0;
      }
      input[type="radio"]:nth-child(2):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[1].name}";
        }
        left: 25%;
      }
      input[type="radio"]:nth-child(3):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[2].name}";
        }
        left: 50%;
      }
      input[type="radio"]:nth-child(4):checked ~ .toggle_option_slider {
        ::after {
          content: "${props.item[3].name}";
        }
        left: 75%;
      }
    `;
  }};

  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider {
    width: 25%;
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

const ServiceInfoMemberShipSlider = ({ item, changeMemberShip }: { item: any, changeMemberShip: (e: MouseEvent<HTMLElement>) => void; }) => {
  return item && item.length && item.length == 1 ? (
    <StyledServiceInfoMemberShipSliderOne item={item}>
      {item.map((v: any, i: number) => {
        return i == 0 ? (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
              defaultChecked
            />
          </Fragment>
        ) : (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
            />
          </Fragment>
        );
      })}
      {item.map((v: any, i: number) => {
        return (
          <Fragment key={i}>
            <label htmlFor={"toggle" + i} onClick={(e: any) => {
              changeState(e);
              changeMemberShip(e);
            }}>
              <p></p>
            </label>
          </Fragment>
        );
      })}
      <div className="toggle_option_slider"></div>
    </StyledServiceInfoMemberShipSliderOne>
  ) : item.length == 2 ? (
    <StyledServiceInfoMemberShipSliderTwo item={item}>
      {item.map((v: any, i: number) => {
        return i == 0 ? (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
              defaultChecked
            />
          </Fragment>
        ) : (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
            />
          </Fragment>
        );
      })}
      {item.map((v: any, i: number) => {
        return (
          <Fragment key={i}>
            <label htmlFor={"toggle" + i} onClick={(e: any) => {
              changeState(e);
              changeMemberShip(e);
            }}>
              <p></p>
            </label>
          </Fragment>
        );
      })}
      <div className="toggle_option_slider"></div>
    </StyledServiceInfoMemberShipSliderTwo>
  ) : item && item.length && item.length == 3 ? (
    <StyledServiceInfoMemberShipSliderThree item={item}>
      {item.map((v: any, i: number) => {
        return i == 0 ? (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
              defaultChecked
            />
          </Fragment>
        ) : (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
            />
          </Fragment>
        );
      })}
      {item.map((v: any, i: number) => {
        return (
          <Fragment key={i}>
            <label htmlFor={"toggle" + i} onClick={(e: any) => {
              changeState(e);
              changeMemberShip(e);
            }}>
              <p></p>
            </label>
          </Fragment>
        );
      })}
      <div className="toggle_option_slider"></div>
    </StyledServiceInfoMemberShipSliderThree>
  ) : item.length == 4 ? (
    <StyledServiceInfoMemberShipSliderFour item={item}>
      {item.map((v: any, i: number) => {
        return i == 0 ? (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
              defaultChecked
            />
          </Fragment>
        ) : (
          <Fragment key={i}>
            <input
              type="radio"
              className="toggle_option"
              id={"toggle" + i}
              name="toggle_option"
            />
          </Fragment>
        );
      })}
      {item.map((v: any, i: number) => {
        return (
          <Fragment key={i}>
            <label htmlFor={"toggle" + i} onClick={(e: any) => {
              changeState(e);
              changeMemberShip(e);
            }}>
              <p></p>
            </label>
          </Fragment>
        );
      })}
      <div className="toggle_option_slider"></div>
    </StyledServiceInfoMemberShipSliderFour>
  ) : (
    <></>
  );
};
export default ServiceInfoMemberShipSlider;

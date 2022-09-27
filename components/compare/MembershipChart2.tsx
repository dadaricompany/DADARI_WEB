import { ChangeEvent, Fragment, useEffect } from "react";
import styled, { css } from "styled-components";
import { MouseEvent } from "react";

const StyledMembershipChart2Wrapper = styled.div`
  width: 132px;
`;
const StyledMembershipChart2Dummy = styled.div`
  height: 34px;
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  background-color: #2d344b;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledMembershipChart2One = styled.div<{ item: any }>`
  height: 34px;
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
  input[name="toggle_option2"] {
    display: none;
  }
  input[name="toggle_option2"]:nth-child(1):checked ~ .toggle_option_slider2 {
    ::after {
      content: "단일 멤버쉽"
    }
    left: 0;
  }
  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider2 {
    width: 100%;
    height: 34px;
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
const StyledMembershipChart2Two = styled.div<{ item: any }>`
  height: 34px;
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
  input[name="toggle_option2"] {
    display: none;
  }
  input[name="toggle_option2"]:nth-child(1):checked ~ .toggle_option_slider2 {
    ::after {
      content: "${(props) => props.item[0].name}";
    }
    left: 0;
  }
  input[name="toggle_option2"]:nth-child(2):checked ~ .toggle_option_slider2 {
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
  .toggle_option_slider2 {
    width: 50%;
    height: 34px;
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
    font-size: 13px;
  }
`;
const StyledMembershipChart2Three = styled.div<{ item: any }>`
  height: 34px;
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
  input[name="toggle_option2"] {
    display: none;
  }
  ${(props) => {
    return css`
      input[name="toggle_option2"]:nth-child(1):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[0].name}";
        }
        left: 0;
      }
      input[name="toggle_option2"]:nth-child(2):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[1].name}";
        }
        left: 28%;
      }
      input[name="toggle_option2"]:nth-child(3):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[2].name}";
        }
        left: 55%;
      }
    `;
  }};

  label {
    flex-grow: 1;
    height: 100%;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider2 {
    width: 45%;
    height: 34px;
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
    font-size: 13px;
  }
`;
const StyledMembershipChart2Four = styled.div<{ item: any }>`
  height: 34px;
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
  input[name="toggle_option2"] {
    display: none;
  }
  ${(props) => {
    return css`
      input[name="toggle_option2"]:nth-child(1):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[0].name}";
        }
        left: 0;
      }
      input[name="toggle_option2"]:nth-child(2):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[1].name}";
        }
        left: 25%;
      }
      input[name="toggle_option2"]:nth-child(3):checked ~ .toggle_option_slider2 {
        ::after {
          content: "${props.item[2].name}";
        }
        left: 50%;
      }
      input[name="toggle_option2"]:nth-child(4):checked ~ .toggle_option_slider2 {
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
  .toggle_option_slider2 {
    width: 25%;
    height: 34px;
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
    font-size: 13px;
  }
`;
const changeState = (e: any) => {
  e.currentTarget.control.checked = true;
};
const MembershipChart2 = ({
  item,
  id,
  changeMemberShip,
}: {
  item: any;
  id: any;
  changeMemberShip: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledMembershipChart2Wrapper>
      {item && item.length && item.length == 1 ? (
        <StyledMembershipChart2One item={item}>
          {item.map((v: any, i: number) => {
            return i == 0 ? (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                  defaultChecked
                />
              </Fragment>
            ) : (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                />
              </Fragment>
            );
          })}
          {item.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <label
                  htmlFor={id + "toggle" + i}
                  onClick={(e: any) => {
                    changeState(e);
                    changeMemberShip(e);
                  }}
                >
                  <p></p>
                </label>
              </Fragment>
            );
          })}
          <div className="toggle_option_slider2"></div>
        </StyledMembershipChart2One>
      ) : item && item.length && item.length == 2 ? (
        <StyledMembershipChart2Two item={item}>
          {item.map((v: any, i: number) => {
            return i == 0 ? (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                  defaultChecked
                />
              </Fragment>
            ) : (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                />
              </Fragment>
            );
          })}
          {item.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <label
                  htmlFor={id + "toggle" + i}
                  onClick={(e: any) => {
                    changeState(e);
                    changeMemberShip(e);
                  }}
                >
                  <p></p>
                </label>
              </Fragment>
            );
          })}
          <div className="toggle_option_slider2"></div>
        </StyledMembershipChart2Two>
      ) : item && item.length && item.length == 3 ? (
        <StyledMembershipChart2Three item={item}>
          {item.map((v: any, i: number) => {
            return i == 0 ? (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                  defaultChecked
                />
              </Fragment>
            ) : (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                />
              </Fragment>
            );
          })}
          {item.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <label
                  htmlFor={id + "toggle" + i}
                  onClick={(e: any) => {
                    changeState(e);
                    changeMemberShip(e);
                  }}
                >
                  <p></p>
                </label>
              </Fragment>
            );
          })}
          <div className="toggle_option_slider2"></div>
        </StyledMembershipChart2Three>
      ) : item && item.length && item.length == 4 ? (
        <StyledMembershipChart2Four item={item}>
          {item.map((v: any, i: number) => {
            return i == 0 ? (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                  defaultChecked
                />
              </Fragment>
            ) : (
              <Fragment key={i}>
                <input
                  type="radio"
                  className="toggle_option"
                  id={id + "toggle" + i}
                  name="toggle_option2"
                />
              </Fragment>
            );
          })}
          {item.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <label
                  htmlFor={id + "toggle" + i}
                  onClick={(e: any) => {
                    changeState(e);
                    changeMemberShip(e);
                  }}
                >
                  <p></p>
                </label>
              </Fragment>
            );
          })}
          <div className="toggle_option_slider2"></div>
        </StyledMembershipChart2Four>
      ) : (
        <StyledMembershipChart2Dummy></StyledMembershipChart2Dummy>
      )}
    </StyledMembershipChart2Wrapper>
  );
};
export default MembershipChart2;

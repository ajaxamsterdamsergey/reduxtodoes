import styled from 'styled-components';

export const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #677288;
padding: 10px;
`;

export const Logo = styled.div`
font-size: 24px;
`;

export const Navigation = styled.nav`
display: flex;

a {
  margin-right: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
`;

export const ToggleThemeButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  ${ToggleInput}:checked + & {
    background-color: #45433e;
  }

  ${ToggleInput}:focus + & {
    box-shadow: 0 0 1px #45433e;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(26px);
  }
`;

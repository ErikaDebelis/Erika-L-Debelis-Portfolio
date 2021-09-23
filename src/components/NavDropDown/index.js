import React from 'react';
import { 
  AiFillPhone,
  AiOutlineMail
} from 'react-icons/ai';
import { 
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer
} from './NavDropDown';

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>I am available for interview and would love to hear from any interested parties!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <AiOutlineMail/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>feel free to reach out!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;

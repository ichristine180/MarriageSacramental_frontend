import React from 'react';
import Button from '../reusables/Button';
import TextInput from '../reusables/TextInput';
import DropDown from '../reusables/DropDown';

function Layout() {
  return (
    <div>
      <Button label="Button 1" />
      <br />
      <br />
      <Button label="Button 2" buttonType="secondary" />
      <br />
      <br />
      <TextInput placeholder="Input text" />
      <br />
      <br />
      <DropDown options={['Option1', 'Option2', 'Option3']} label="User type" />
    </div>
  );
}

export default Layout;

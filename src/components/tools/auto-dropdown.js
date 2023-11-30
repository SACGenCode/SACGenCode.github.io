// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateAutoDropdown } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';
const AutoDropdown = () => {
    useTitle("Auto Dropdown");
    const autoDropdownControlConfig = itemList.find(item => item.title === 'Auto Dropdown');

    return <CommonComponent config={autoDropdownControlConfig} generateCode={generateAutoDropdown} />;
};

export default AutoDropdown;
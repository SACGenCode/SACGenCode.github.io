// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateAutoCheckBox } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';
const AutoCheckBox = () => {
    useTitle("Auto CheckBox");
    const autoCheckboxControlConfig = itemList.find(item => item.title === 'Auto CheckBox');

    return <CommonComponent config={autoCheckboxControlConfig} generateCode={generateAutoCheckBox} />;
};

export default AutoCheckBox;
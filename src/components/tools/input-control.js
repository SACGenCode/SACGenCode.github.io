// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateInputControlCode } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';
const InputControl = () => {
    useTitle("Input Control");
    const inputControlConfig = itemList.find(item => item.title === 'Input Control');

    return <CommonComponent config={inputControlConfig} generateCode={generateInputControlCode} />;
};

export default InputControl;
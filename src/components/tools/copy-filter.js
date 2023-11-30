// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateCopyFilter } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';
const CopyFilter = () => {
    const tool = "Copy Filter";
    useTitle(tool);
    const Config = itemList.find(item => item.title === tool);

    return <CommonComponent config={Config} generateCode={generateCopyFilter} />;
};

export default CopyFilter;
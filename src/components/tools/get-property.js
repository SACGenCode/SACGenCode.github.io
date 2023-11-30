// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateGetProperty } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';
export const GetProperty = () => {
    const tool = "Get Property";
    useTitle(tool);
    const Config = itemList.find(item => item.title === tool);

    return <CommonComponent config={Config} generateCode={generateGetProperty} />;
};
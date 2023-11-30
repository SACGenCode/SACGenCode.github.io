// DataAction.js
import React from 'react';
import CommonComponent from '../CommonComponent/CommonComponent';
import { itemList } from '../itemList/itemList';
import { generateDataActionCode } from '../codeGenerators/codeGenerators';
import { useTitle } from '../../utils/utils';

const DataAction = () => {
  useTitle("Data Action");
  const dataActionConfig = itemList.find(item => item.title === 'Data Action');

  return <CommonComponent config={dataActionConfig} generateCode={generateDataActionCode} />;
};

export default DataAction;
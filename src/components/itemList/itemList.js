// itemList.js
import { generateDataActionCode, generateInputControlCode, generateAutoDropdown, generateAutoCheckBox, generateCopyFilter, generateGetProperty } from '../codeGenerators/codeGenerators';
export const itemList = [
    {
        title: "Data Action",
        icon: "database",
        description: "Passing parameter to data action using Table (FilterLine)",
        link: "/tools/data-action",
        forms: ["table_name", "dimension_name", "data_action_name", "data_action_param_id"],
        help: ["Name of Table, ex. Table_1", "Dimension Name, ex. Version, Date, Account", "ex. DataAction_1", "ex. targetVersion"],
        options: {},
        generateCode: generateDataActionCode // assuming you import this function from codeGenerators.js
    },
    {
        title: "Input Control",
        icon: "sliders",
        description: "Passing parameter to data action using from Input Control",
        link: "/tools/input-control",
        forms: ["input_control_name", "data_action_name", "data_action_param_id"],
        help: ["ex. InputControl_1", "ex. DataAction_1", "ex. targetVersion"],
        options: {
            "table_type": ["Yes", "No"]
        },
        generateCode: generateInputControlCode // assuming you import this function from codeGenerators.js
    },
    {
        title: "Auto Dropdown",
        icon: "circle-chevron-down",
        description: "Auto add items to dropdown from model dimension",
        link: "/tools/auto-dropdown",
        forms: ["planning_model_name", "dimension_name", "dropdown_name"],
        help: ["ex. PlanningModel_1", "ex. Version", "ex. Dropdown_1"],
        options: {
            "table_type": ["Yes", "No"]
        },
        generateCode: generateAutoDropdown // assuming you import this function from codeGenerators.js
    },
    {
        title: "Auto CheckBox",
        icon: "square-check",
        description: "Auto add items to checkbox from model dimension",
        link: "/tools/auto-checkbox",
        forms: ["planning_model_name", "dimension_name", "checkbox_name"],
        help: ["ex. PlanningModel_1", "ex. Version", "ex. CheckBoxGroup_1"],
        options: {
            "table_type": ["Yes", "No"]
        },
        generateCode: generateAutoCheckBox // assuming you import this function from codeGenerators.js
    },
    {
        title: "Copy Filter",
        icon: "table",
        description: "Copy dimensions filter from one table to multiple",
        link: "/tools/copy-filter",
        forms: ["source_table", "target_table", "dimensions"],
        help: ["ex. Table_1", "ex. Table_2", "Dimension filter to copy, Multiple supported, ex. Version, Account, Costcenter and more"],
        options: {
            "table_type": ["Yes", "No"]
        },
        generateCode: generateCopyFilter // assuming you import this function from codeGenerators.js
    },
    {
        title: "Get Property",
        icon: "coins",
        description: "Get dimensions's property from model using Planning Model",
        link: "/tools/get-property",
        forms: ["planning_model_name", "dimension_name", "member_id", "property_id"],
        help: ["ex. PlanningModel_1", "ex. Costcenter", "Specific Member Id", "Property id to get"],
        options: {
            "table_type": ["Yes", "No"]
        },
        generateCode: generateGetProperty // assuming you import this function from codeGenerators.js
    },

    // Add more items as needed
];

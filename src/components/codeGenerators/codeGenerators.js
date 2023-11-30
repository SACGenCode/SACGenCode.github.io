// codeGenerators.js
export const generateDataActionCode = (formData) => {
    const { dimension_name, table_name, data_action_name, data_action_param_id } = formData;

    const code = `

var ${dimension_name}_filter = ${table_name}.getDataSource().getDimensionFilters("${dimension_name}");
        for (var ${dimension_name}_index = 0; ${dimension_name}_index < ${dimension_name}_filter.length; ${dimension_name}_index++) {
            if (${dimension_name}_filter[${dimension_name}_index].type === FilterValueType.Single) {
                var singleFilterValueCC = cast(Type.SingleFilterValue, ${dimension_name}_filter[${dimension_name}_index]);
                ${data_action_name}.setParameterValue("${data_action_param_id}", [singleFilterValueCC.value]);
            } else if (${dimension_name}_filter[${dimension_name}_index].type === FilterValueType.Multiple) {
                var multiFilterValueCC = cast(Type.MultipleFilterValue, ${dimension_name}_filter[${dimension_name}_index]);
                ${data_action_name}.setParameterValue("${data_action_param_id}", multiFilterValueCC.values);
            }
        }`;

    return code;
};

export const generateInputControlCode = (formData) => {
    const { input_control_name, data_action_name, data_action_param_id } = formData;

    const code = `var ${data_action_param_id}_values = ArrayUtils.create(Type.string);
var ${input_control_name}_input_control = ${input_control_name}.getInputControlDataSource().getActiveSelectedMembers();

for(var ${input_control_name}_index = 0 ; ${input_control_name}_index < ${input_control_name}_input_control.length; ${input_control_name}_index++){
    ${data_action_param_id}_values.push(${input_control_name}[${input_control_name}_index].id);
}

${data_action_name}.setParameterValue("${data_action_param_id}", ${data_action_param_id}_values);`;

    return code;
};

export const generateAutoDropdown = (formData) => {
    const { planning_model_name, dimension_name, dropdown_name } = formData;

    const code = `var ${dimension_name}_list = ${planning_model_name}.getMembers("${dimension_name}");

for ( var ${dimension_name}_index=0; ${dimension_name}_index < ${dimension_name}.length; ${dimension_name}_index++){
            ${dropdown_name}.addItem (${dimension_name}_list[${dimension_name}_index].id, ${dimension_name}_list[${dimension_name}_index].description );
}

${dropdown_name}.setSelectedKey(${dimension_name}_list[0].id); //first item as default `;

    return code;
}


export const generateAutoCheckBox = (formData) => {
    const { planning_model_name, dimension_name, checkbox_name } = formData;

    const code = `var ${dimension_name}_list = ${planning_model_name}.getMembers("${dimension_name}");
${checkbox_name}.removeAllItems();

for(var ${dimension_name}_index =0;${dimension_name}_index<${dimension_name}_list.length;${dimension_name}_index++){ 
     ${checkbox_name}.addItem(${dimension_name}_list[${dimension_name}_index].id, ${dimension_name}_list[${dimension_name}_index].description); 
}`;

    return code;
}

export const generateCopyFilter = (formData) => {
    const { source_table, target_table, dimensions } = formData;

    const code = `${target_table}.getDataSource().copyDimensionFilterFrom(${source_table}.getDataSource(),[${dimensions.split(',').map(value => `"${value}"`)
        }]);`;

    return code;
}

export const generateGetProperty = (formData) => {
    const { planning_model_name, dimension_name, member_id, property_id } = formData;

    const code = `
    var ${dimension_name}_pl = ${planning_model_name}.getMember("${dimension_name}","${member_id}");
var ${property_id}_value = ${dimension_name}_pl.properties["${property_id}"];`;

    return code;
}
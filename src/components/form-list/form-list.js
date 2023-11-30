// FormList.js

import React from 'react';
import { formatText } from '../../utils/utils';

const FormList = ({ forms, formData, options, help, handleInputChange }) => {
    return (
        <div className="columns is-multiline">
            {forms.map((form, key) => (
                <div className="column is-half" key={form}>
                    <div className="field">
                        <label className="label" htmlFor={form}>
                            {formatText(form)}
                        </label>
                        <div className="control">
                            {options[form] ? (
                                <div className="select is-fullwidth">
                                    <select onChange={handleInputChange} id={form} name={form} value={formData[form]}>
                                        {options[form].map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <input
                                    className="input"
                                    id={form}
                                    name={form}
                                    type="text"
                                    value={formData[form]}
                                    placeholder={`Enter ` + formatText(form)}
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                            )}
                        </div>
                        <p className="help">{help[key]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const GenerateBtn = ({ fun }) => {
    return (
        <button className="button is-primary" onClick={fun}>
            <span className="icon is-small">
                <i className="fas fa-bolt"></i>
            </span>
            <span>Generate Code</span>
        </button>
    )
};

export { FormList, GenerateBtn };

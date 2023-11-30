// CommonComponent.js
import React, { useState } from 'react';
import { initializeFormData, useForm } from '../../utils/formUtils';
import CopyBox from '../copy-box/copy-box';
import { FormList, GenerateBtn } from '../form-list/form-list';

const CommonComponent = ({ config }) => {
    const [generatedCode, setGeneratedCode] = useState('');
    const { formData, handleInputChange } = useForm(initializeFormData(config.forms));

    const generate = () => {
        const code = config.generateCode(formData);
        setGeneratedCode(code);
    };

    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <h2 className="subtitle is-3"><i className={`fas fa-${config.icon}`}></i> {config.title}</h2>
                    <p className="subtitle is-6">{config.description}</p>
                    <div className="box">
                        <FormList forms={config.forms} formData={formData} options={config.options} help={config.help} handleInputChange={handleInputChange} />
                        <GenerateBtn fun={generate} />
                    </div>
                    <CopyBox data={generatedCode} />
                </div>
            </section>
        </React.Fragment>
    );
};

export default CommonComponent;

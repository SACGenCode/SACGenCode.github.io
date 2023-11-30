// utils/formUtils.js

import { useState } from 'react';
export const initializeFormData = (forms) => {
    return forms.reduce((acc, key) => {
        acc[key] = '';
        return acc;
    }, {});
};

export const useForm = (initialFormData) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return { formData, handleInputChange };
};

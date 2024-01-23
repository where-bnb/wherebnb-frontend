'use client';

import React, {useEffect, useState} from 'react';

const TextCounterInput = ({ value, maxLength, title, description, onChange, isTitle = false}) => {
    const [text, setText] = useState(value);

    useEffect(() => {
        onChange(text);
    }, [text]);

    const handleChange = (event) => {
        const inputText = event.target.value;
        if (inputText.length <= maxLength) {
            setText(inputText);
            onChange(text);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col w-full ">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <h1 className="mb-2">{description}</h1>
            <div className="w-full h-96">
                <textarea
                    type="text"
                    value={text}
                    onChange={handleChange}
                    maxLength={maxLength}
                    className="
                    border-2
                    border-b-black
                    w-full
                    h-full
                    rounded-lg
                    focus:outline-none
                    focus:border-blue-500
                    transition
                    duration-200
                    text-2xl
                "
                />
                <p>{text.length} / {maxLength}</p>
            </div>
        </div>
    );
};

export default TextCounterInput;
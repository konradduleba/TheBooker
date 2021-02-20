import React, { useRef } from 'react';
import IGenerateBasicInfoInputs from '../Types/IGenerateBasicInfoInputs';

const GenerateBasicInfoInputs = ({ basicInfoInputs }: IGenerateBasicInfoInputs): JSX.Element => {
    const hiddenImageInput = useRef<HTMLInputElement | null>(null);

    const selectPicture = () => {
        hiddenImageInput.current && hiddenImageInput.current.click();
    }

    return (
        <>
            {basicInfoInputs.map(({ label, name, type, error, ref }) =>
                <div className='input-container' key={label}>
                    <div>
                        <label>{label}</label>
                        {type === 'file' ?
                            <>
                                <button onClick={selectPicture} className="normal-button">Select Picture</button>
                                <input
                                    name={name}
                                    type='file'
                                    style={{ display: 'none' }}
                                    ref={e => {
                                        ref(e);
                                        hiddenImageInput.current = e;
                                    }}
                                    className='field-input'
                                />
                            </>
                            :
                            <input
                                name={name}
                                type={type}
                                ref={ref}
                                className='field-input'
                            />
                        }
                    </div>
                    {error && <p>{error.message}</p>}
                </div>)}
        </>
    )
};
export default GenerateBasicInfoInputs;
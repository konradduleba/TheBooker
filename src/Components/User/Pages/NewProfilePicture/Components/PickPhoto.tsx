import SectionComponent from 'Components/Global/Section/Section';
import React, { useRef, useState } from 'react';
import postNewProfile from '../Functions/postNewProfile';
import IPickPhoto from '../Types/IPickPhoto';

const PickPhoto = ({ setNewProfilePicture }: IPickPhoto): JSX.Element => {
    const [file, setFile] = useState<Blob | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const incomingFile = e.target.files[0];

            const { size } = incomingFile;

            const maxAllowedSize = 1024 * 1024;

            if (size < maxAllowedSize) {
                setErrorMessage('');

                return setFile(incomingFile)
            }

            return setErrorMessage(`${(size / maxAllowedSize).toFixed(2)} MB is too big. Max size is 1MB`);
        }
    }

    const sendFile = async () => {
        const formData = new FormData();

        file && formData.append('file', file);

        const result = await postNewProfile(formData);

        if (result) {
            const { isSuccess } = result;

            if (!isSuccess)
                return null;

            return setNewProfilePicture(file);
        }
    }

    const onFileSelect = () => fileInput.current && fileInput.current.click();

    return (
        <SectionComponent header='Select New Picture'>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <div className='picked-photo-wrapper'>
                {file ? (
                    <div className='new-picture-container' onClick={onFileSelect}>
                        <img src={URL.createObjectURL(file)} alt='new profile' />
                    </div>
                )
                    :
                    (
                        <div className='picture-select-container' onClick={onFileSelect}>
                            <p>Click here to select picture</p>
                            <p>Or the button below</p>
                        </div>
                    )
                }
                <input
                    type='file'
                    name='image'
                    ref={fileInput}
                    onChange={onChange}
                    style={{ display: 'none' }}
                    accept="image/png, image/jpeg"
                />

                <div className='options'>
                    <button className='normal-button' onClick={onFileSelect}>Select</button>
                    <button className='normal-button' disabled={file === null} onClick={sendFile}>Save</button>
                </div>
            </div>
        </SectionComponent>
    )
}

export default PickPhoto;
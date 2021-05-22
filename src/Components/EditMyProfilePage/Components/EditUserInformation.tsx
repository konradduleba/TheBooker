import React from 'react';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import IEditUserInformation from '../Types/IEditUserInformation';
import generateAccountInfoFormData from '../Functions/generateAccountInfoFormData';
import IReturnedEditValues from '../Types/IReturnedEditValues';
import SectionComponent from '../../Global/Section/Section';

const EditUserInformation = ({ data, header, setEditedData }: IEditUserInformation): JSX.Element => {
    const infoAndEditData = generateAccountInfoFormData(data);

    return (
        <SectionComponent header={header} style={{ width: '100%', marginBottom: "20px" }}>
            {infoAndEditData.map((formData: IReturnedEditValues) => {
                const { key } = formData;

                return (
                    <div className='single-edit-container' key={key}>
                        <GenerateInfoAndEditForm formData={formData} setEditedData={setEditedData} />
                    </div>
                )
            })}
        </SectionComponent>
    )
}

export default EditUserInformation;
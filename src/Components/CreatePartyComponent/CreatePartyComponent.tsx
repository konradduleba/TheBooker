import React from 'react';
import { useForm } from "react-hook-form";
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import './Styles/CreatePartyComponent.scss';
import "react-datepicker/dist/react-datepicker.css";
import IPartyForm from './Types/IPartyForm';
import { yupResolver } from '@hookform/resolvers/yup';
import convertDateToProperValues from './Functions/convertDateToProperValues';
import EDateConvertTypes from './Enums/EDateConvertTypes';
import validationSchema from './Utils/validationSchema';
import IPartyDateInputs from './Types/IPartyDateInputs';
import GenerateDateInputs from './Components/GenerateDateInputs';
import GenerateBasicInfoInputs from './Components/GenerateBasicInfoInputs';
import IPartyBasicInfoInputs from './Types/IPartyBasicInfoInputs';
import SelectMultipleFriends from './Components/SelectMultipleFriends';
import { myParties } from '../../Utils/routes.json';
import { Link } from 'react-router-dom';

const AddPartyComponent = (): JSX.Element => {
    const { register, handleSubmit, errors, reset, control } = useForm<IPartyForm>({
        resolver: yupResolver(validationSchema),
    });

    const partyInfoInputs: IPartyBasicInfoInputs[] = [{
        label: "Party title:",
        name: "name",
        type: "text",
        error: errors.name,
        ref: register
    },
    {
        label: "Picture:",
        name: "photo",
        type: "file",
        error: errors.photo,
        ref: register
    }];

    const partyDateInputs: IPartyDateInputs[] = [{
        label: "Date:",
        name: "monthDayYear",
        control,
        settings: {
            minDate: new Date(),
            dateFormat: "MM/dd/yyyy",
            showTimeSelect: undefined,
            showTimeSelectOnly: undefined,
            timeIntervals: undefined,
            timeCaption: undefined
        },
        placeholder: "Select Date"
    },
    {
        label: "Time:",
        name: "hourMinuteSecond",
        control,
        settings: {
            minDate: undefined,
            dateFormat: "h:mm aa",
            showTimeSelect: true,
            showTimeSelectOnly: true,
            timeIntervals: 30,
            timeCaption: "Time"
        },
        placeholder: "Select Time"
    }]

    const onSubmit = (formData: IPartyForm) => {
        const { hourMinuteSecond: time, monthDayYear: date, photo } = formData;

        const monthDayYear = convertDateToProperValues(date, EDateConvertTypes.MONTHdayYEAR);
        const hourMinuteSecond = convertDateToProperValues(time, EDateConvertTypes.HOURminuteSECOND);

        console.log({ ...formData, monthDayYear, hourMinuteSecond, photo: photo[0] })

        reset();
    }

    const sectionHeader = 'Create Party';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='create-party-wrapper column-with-padding'>
                <nav>
                    <Link to={`/app${myParties.href}`}>
                        <button className='normal-button'>Go Back</button>
                    </Link>
                </nav>
                <h1 className='header'>[ Create party ]</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <GenerateBasicInfoInputs basicInfoInputs={partyInfoInputs} />
                    <GenerateDateInputs partyDateInputs={partyDateInputs} />
                    <SelectMultipleFriends control={control} />
                    <input type="submit" value="Create Party" className='go-to-the-summary-button' />
                </form>
            </div>
        </SectionComponent>
    )
};

export default AddPartyComponent;
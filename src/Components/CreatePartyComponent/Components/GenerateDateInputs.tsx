import React from 'react';
import { Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import IGenerateDateInputs from '../Types/IGenerateDateInputs';

const GenerateDateInputs = ({ partyDateInputs }: IGenerateDateInputs): JSX.Element => (
    <>
        {partyDateInputs.map(({ label, name, settings, control, placeholder }) =>
            <div className='date-container' key={label}>
                <label>{label}</label>
                <div>
                    <Controller
                        name={name}
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                            <DatePicker
                                selected={value}
                                onChange={onChange}
                                minDate={settings.minDate}
                                dateFormat={settings.dateFormat}
                                showTimeSelect={settings.showTimeSelect}
                                showTimeSelectOnly={settings.showTimeSelectOnly}
                                timeCaption={settings.timeCaption}
                                timeIntervals={settings.timeIntervals}
                                placeholderText={placeholder}
                            />
                        )}
                    />
                </div>
            </div>)}
    </>
);

export default GenerateDateInputs;
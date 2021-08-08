import React from 'react';
import { Controller } from "react-hook-form";
import Select from "react-select";
import ISelectMultipleFriends from '../Types/ISelectMultipleFriends';
import generateFriendList from '../Functions/generateFriendList';

const SelectMultipleFriends = ({ control }: ISelectMultipleFriends): JSX.Element => (
    <div className='friends-container'>
        <label>Invited Friends:</label>
        <Controller
            name="selectedFriends"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
                <Select
                    defaultValue={value}
                    onChange={onChange}
                    // options={generateFriendList()}
                    options={[]}
                    placeholder="Select Friends"
                    isMulti
                />
            )}
        />
    </div>
);

export default SelectMultipleFriends;
import React from "react";
import generateUserListArray from "../Functions/generateUserListArray";
import IGenerateRandomUsers from "../Types/IGenerateRandomUsers";
import RenderUserList from "./RenderUserList";
import testSocialNetworkUsers from '../testSocialNetworkUsers';

const GenerateRandomUsers = ({ limit }: IGenerateRandomUsers): JSX.Element => {
    const validatedUserList = generateUserListArray(testSocialNetworkUsers, limit);

    return <RenderUserList userList={validatedUserList} />
}

export default GenerateRandomUsers;
import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Section/Section';
import IRecentDiscussion from '../Types/IRecentDiscussion';
import testRecentDiscussion from '../testRecentDiscussion';
import IRecentDiscussionContent from '../Types/IRecentDiscussionContent';
import DisplayPost from './DisplayPost';

const RecentDiscussion = ({ id }: IRecentDiscussion): JSX.Element => {
    const [discussion, setDiscussion] = useState<IRecentDiscussionContent[]>([]);

    useEffect(() => setDiscussion(testRecentDiscussion), [id]);

    return (
        <SectionComponent header="Recent Discussion" style={{ width: "100%" }}>
            <DisplayPost post={discussion} />
        </SectionComponent>
    )
};

export default RecentDiscussion;
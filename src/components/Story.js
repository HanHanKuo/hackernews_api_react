import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnapi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyle'
import { mapTime } from '../mappers/mapTime' 

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, [])

    // return story && story.url ? JSON.stringify(story) : null;
    return story && story.url ? (
        <StoryWrapper data-tasted="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
                <span data-tasted="story-by">
                    <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
                </span>
                <span data-tasted="story-time">
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                    {mapTime(story.time)}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;
}
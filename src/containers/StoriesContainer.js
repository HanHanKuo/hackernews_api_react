import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnapi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoryContainerStyles';


export const StoriesContatiner =() => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      // console.log(getStoryIds());
     
      getStoryIds().then(data => setStoryIds(data));
      
      //getStory(21310285).then(data => console.log(data));
    }, []);
  
    return (
        <>
          <GlobalStyle />
          <StoriesContainerWrapper data-test-id="stories-container">
            <h1>Hacker News Stories</h1>
            {storyIds.map(storyId => (
                <Story key={storyId} storyId={storyId}/>
            ))}
          </StoriesContainerWrapper>
        </>
    );
  };
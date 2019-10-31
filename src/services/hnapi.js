import axios from 'axios';
import { selectField } from '../selectors/selectFields'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const stroyUrl = `${baseUrl}item/`;

export const getStory = async(storyId) => {
    const result = await axios
        .get(`${stroyUrl + storyId}.json`)
        .then(({ data }) => data && selectField(data));

    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data);

    return result;
}
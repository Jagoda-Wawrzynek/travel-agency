/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAGS_ADD = createActionName('CHANGE_TAGS_ADD');
export const CHANGE_TAGS_REMOVE = createActionName('CHANGE_TAGS_REMOVE');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeSearchDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeSearchTagsAdd = payload => ({ payload, type: CHANGE_TAGS_ADD });
export const changeSearchTagsRemove = payload => ({ payload, type: CHANGE_TAGS_REMOVE });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };

    case CHANGE_TAGS_ADD:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case CHANGE_TAGS_REMOVE:
      return {
        ...statePart,
        tags: [...statePart.tags.filter(tag => tag != action.payload)],
      };

    default:
      return statePart;
  }
}

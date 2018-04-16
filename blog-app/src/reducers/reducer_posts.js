import {FETCH_POSTS_ACTION} from "../actions/index";
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS_ACTION:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }

}
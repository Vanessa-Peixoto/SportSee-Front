import {
    formatUserData,
    formatActivityData,
    formatSessionData,
    formatPerformanceData
} from '../utils/dataFormater';
import axios from 'axios';
import * as mock from '../mocks/mockData';


/**
 * @description Retrieve user main data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserData(userId) {
    if(process.env.REACT_APP_MOCK === "false") {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`);
        return formatUserData(response.data);
    } else {
        const user = mock.USER_MAIN_DATA.find(user => user.data.id === parseInt(userId));
        return formatUserData(user)
    }
}

/**
 * @description Retrieve user activity data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserActivity(userId) {
    if(process.env.REACT_APP_MOCK === "false") {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}/activity`);
        return formatActivityData(response.data);
    } else {
        const activity = mock.USER_ACTIVITY.find(activity => activity.data.userId === parseInt(userId));
        return formatActivityData(activity);
    }
}

/**
 * @description Retrieve user session data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserSession(userId) {
    if(process.env.REACT_APP_MOCK === "false") {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}/average-sessions`);
        return formatSessionData(response.data);
    } else {
        const session = mock.USER_AVERAGE_SESSIONS.find(session => session.data.userId === parseInt(userId));
        return formatSessionData(session);
    }
}

/**
 * @description Retrieve user performance data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserPerformance(userId) {
    if(process.env.REACT_APP_MOCK === "false") {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}/performance`);
        return formatPerformanceData(response.data);
    } else {
        const performance = mock.USER_PERFORMANCE.find(performance => performance.data.userId === parseInt(userId));
        return formatPerformanceData(performance);
    }
}
export { fetchUserData, fetchUserActivity, fetchUserSession, fetchUserPerformance };
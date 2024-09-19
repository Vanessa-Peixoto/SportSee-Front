import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../mocks/mockData';
import {
    formatUserData, 
    formatActivityData, 
    formatSessionData, 
    formatPerformanceData
} from '../utils/dataFormater';
import axios from 'axios';

const API_BASE_URL = "http://localhost:3000";

/**
 * @description Retrieve user main data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserData(userId) {
    try {
        // Call API
        const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
        return formatUserData(response.data);
    } catch (error) {
        // If API not response, use mock data
        console.error("API call failed, using mock data", error);
        const user = USER_MAIN_DATA.find(user => user.id === userId);
        return formatUserData(user);
    }
}

/**
 * @description Retrieve user activity data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserActivity(userId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
        return formatActivityData(response.data);
    } catch (error) {
        console.error("API call failed, using mock data", error);
        const activity = USER_ACTIVITY.find(activity => activity.userId === userId);
        return formatActivityData(activity);
    }
}

/**
 * @description Retrieve user session data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserSession(userId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
        return formatSessionData(response.data);
    } catch (error) {
        console.error("API call failed, using mock data", error);
        const session = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
        return formatSessionData(session);
    }
}

/**
 * @description Retrieve user performance data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
async function fetchUserPerformance(userId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
        return formatPerformanceData(response.data);
    } catch (error) {
        console.error("API call failed, using mock data", error);
        const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
        return formatPerformanceData(performance);
    }
}

export  { fetchUserData, fetchUserActivity, fetchUserSession, fetchUserPerformance };
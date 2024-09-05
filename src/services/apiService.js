import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../mocks/mockData';

import {formatUserData, formatActivityData, formatSessionData, formatPerformanceData} from '../utils/dataFormater';


const API_BASE_URL = "http://localhost:3000";

//Define if we want to use mock data or API calls
const isMock = false;

/**
 * @description Retrieve user main data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
const fetchUserData = async (userId) => {
    if(isMock){
        const user = USER_MAIN_DATA.find(user => user.id === userId);
        return new Promise((resolve) => {
            setTimeout(() => resolve(formatUserData(user)), 1000);
        });
    } else {
        // Appel réel à l'API
        const response = await fetch(`${API_BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Erreur de chargement`);
        }
        const data = await response.json();
        return formatUserData(data); // Formate les données avant de les retourner
    }
}

/**
 * @description Retrieve user activity data via mocked data or API
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
const fetchUserActivity = async (userId) => {
    if(isMock){
        const activity = USER_ACTIVITY.find(activity => activity.userId === userId);
        return new Promise((resolve) => {
            setTimeout(() => resolve(formatActivityData(activity)), 1000);
        });
    } else {
        const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return formatActivityData(data);
    }
}

/**
 * @description Retrieve user session data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
const fetchUserSession = async (userId) => {
    if(isMock){
        const session = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
        return new Promise((resolve) => {
            setTimeout(() => resolve(formatSessionData(session)), 1000);
        });
    } else {
        const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return formatSessionData(data);
    }
}

/**
 * @description Retrieve user performance data via mocked data or API 
 * @param {number} userId 
 * @returns {Promise <Object>}
 */
const fetchUserPerformance = async (userId) => {
    if(isMock){
        const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
        return new Promise((resolve) => {
            setTimeout(() => resolve(formatPerformanceData(performance)), 1000);
        });
    } else {
        const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return formatPerformanceData(data);
    }
}

export { fetchUserData, fetchUserActivity, fetchUserSession, fetchUserPerformance }


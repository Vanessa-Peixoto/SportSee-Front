/**
 * @description Format the user main data
 * @param {Object} data 
 * @returns {Object}
 */
function formatUserData({data}) {
    return {
        id: data.id,
        userInfos: {
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
            age: data.userInfos.age,
        },
        score: data.todayScore || data.score,
        keyData: {
            calorieCount: data.keyData.calorieCount,
            proteinCount: data.keyData.proteinCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount,
        }
    }
}

/**
 * @description Format the user activity data
 * @param {Object} data 
 * @returns {Object}
 */
function formatActivityData({data}) {
    return {
        userId: data.userId,
        sessions: data.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }))
    }
}

/**
 * @description Format the user session data
 * @param {Object} data 
 * @returns {Object}
 */
function formatSessionData({data}) {
    return {
        userId: data.userId,
        sessions: data.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }))
    }
}

/**
 * @description Format the user performance data
 * @param {Object} data 
 * @returns {Object}
 */
function formatPerformanceData({data}) {
    return {
        userId: data.userId,
        kind: data.kind,
        data: data.data.map(performance => ({
            value: performance.value,
            kind: performance.kind,
        }))
    }
}
export {formatUserData, formatActivityData, formatSessionData, formatPerformanceData};
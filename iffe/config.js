// Real-time configuration for IFFE application
const appConfig = (function(){

    const API_KEY ="XYZ1234567890";
    const API_URL ="https://api.iffeapp.com/v1/";
    let ENV ="production";

    return {
        getApiKey: function() {
            return API_KEY;
        },
        getApiUrl: function() {
            return API_URL;
        },
        getEnvironment: function() {
            return ENV;
        },
        setEnvironment: function(newEnv) {
            ENV = newEnv;
        }
    }

})();

console.log("IFFE App Configuration Loaded..");

console.log("API Key: " + appConfig.getApiKey());
console.log("API URL: " + appConfig.getApiUrl());
console.log("Environment: " + appConfig.getEnvironment());

// Attempting to change environment (will not work as ENV is private)
appConfig.setEnvironment("development");
console.log("Environment after change attempt: " + appConfig.getEnvironment());

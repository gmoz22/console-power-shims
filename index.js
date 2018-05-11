(function(){

    // Check if we have basic logging available
    try {
        console;
    } catch (e) {
        throw new Error('No console object available!');
    }
    if (typeof console.log !== "function") {
        throw new Error('No console.log() function available!');
    }

    // Reference to native functions
    console.__log   = console.log;
    console.__info  = console.info  || console.log;
    console.__warn  = console.warn  || console.info || console.log;
    console.__error = console.error || console.warn || console.info || console.log;

    // No output
    console.__noop = function(){};

    /**
     * @function setLevel
     * @desc Sets the logs level
     * @param {integer} level Level of logs to display
     */
    console.setLevel = function(level){
        level = level || 0; // default - all logs

        console.log   = level >= 1 ? console.__noop : console.__log;
        console.info  = level >= 2 ? console.__noop : console.__info;
        console.warn  = level >= 3 ? console.__noop : console.__warn;
        console.error = level >= 4 ? console.__noop : console.__error;
    };

    // Set default level
    console.setLevel();
})();
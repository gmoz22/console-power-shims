
// Output using the various log types
function logs() {
    console.log("log() log");
    console.info("info() log");
    console.warn("warn() log");
    console.error("error() log");
}


// All logs: log, info, warn and error
console.setLevel(0);
logs();

// info, warn and error
console.setLevel(1);
logs();

// warn and error
console.setLevel(2);
logs();

// warn
console.setLevel(3);
logs();

// NO logs
console.setLevel(4);
logs();


// Expected output:
/*
log() log
info() log
warn() log
error() log

info() log
warn() log
error() log

warn() log
error() log

error() log

[no output]
 */
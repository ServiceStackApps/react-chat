(function () {
    var SCRIPTS = {
        'dev': 'npm run dev',
        'webpack-build': 'npm run build',
        'webpack-build-prod': 'npm run build-prod',
        'webpack-build-vendor': 'npm run build-vendor',
        'publish': 'npm run publish'
    };

    var gulp = require('gulp');
    var exec = require('child_process').exec;

    function runScript(script, done) {
        process.env.FORCE_COLOR = 1;
        var proc = exec(script + (script.startsWith("npm") ? " --silent" : ""));
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('exit', () => done());
    }

    // Tasks
    Object.keys(SCRIPTS).forEach(name => {
        gulp.task(name, done => runScript(SCRIPTS[name], done));
    });

})();
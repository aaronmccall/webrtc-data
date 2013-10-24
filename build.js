var bundle = require('browserify')(),
    fs = require('fs'),
    uglify = require('uglify-js'),
    path = require('path');

bundle.add('./lib/webrtc-data');
bundle.bundle({standalone: 'SimpleWebRTCData'}, function (err, source) {
    if (err) return console.error(err);
    fs.writeFileSync('./build/webrtc-data.bundle.js', source);
    fs.writeFile('./build/webrtc-data.bundle.min.js', uglify.minify(source, {fromString: true}).code, function (err) {
        if (err) throw err;
    });
});

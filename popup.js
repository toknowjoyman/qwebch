var jshelper;
new QWebChannel(qt.webChannelTransport, function (channel) {
    jshelper = channel.objects.jshelper;
});

document.getElementByTagName('iframe').onload = function() {
        jshelper.markerMoved("candy")
    }




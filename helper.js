var jshelper;
new QWebChannel(qt.webChannelTransport, function (channel) {
    jshelper = channel.objects.jshelper;
});

document.getElementById("myBtn").addEventListener("click", function(){
    jshelper.markerMoved("candy")
});

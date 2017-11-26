var jshelper;
new QWebChannel(qt.webChannelTransport, function (channel) {
    jshelper = channel.objects.jshelper;
});


// iframe.contentWindow.document.documentElement.innerHTML
var t = document.getElementByTagName("iframe").src.atob()
t.getElementByTagName("p")addEventListener("click", function(){
    jshelper.markerMoved("candy")
});

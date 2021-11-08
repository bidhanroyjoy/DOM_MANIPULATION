var main = {
    init: function () {
        this.styleFn();
        this.mainFn();
    },
    styleFn: function () {
        var mainCss = ``;

        var headofdoc = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(mainCss));
        headofdoc.appendChild(s);
    },

    mainFn: function () {
        var $burger = document.querySelector('nav.tct-nav tct-burger') || document.querySelector('nav.tct-nav .tct-burger');
        $burger.addEventListener('mouseenter', function (event) {
            $burger.click();
        });
    },
};
(function polling() {

    if ((document.querySelector('nav.tct-nav tct-burger') || document.querySelector('nav.tct-nav .tct-burger')) && document.querySelector('footer')) {
        try {
            main.init();
        } catch (e) {
            console.log(e);
        }
    } else {
        setTimeout(polling, 25);
    }
})();
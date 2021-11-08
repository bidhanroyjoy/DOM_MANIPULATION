var main = {
    init: function () {
        this.styleFn();
        this.mainFn();
    },
    styleFn: function () {
        var mainCss = `
            .wt-sticky{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: #fff;
                z-index: 1001;
                width: 100%;
            }
            .wt-height{
                height: 115px;
            }
        `;

        var headofdoc = document.getElementsByTagName('head')[0];
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(mainCss));
        headofdoc.appendChild(s);
    },

    mainFn: function () {
        var notificationBar = document.querySelector('notification-bar.notification-bar.snack-bar');
        var layout = document.createElement('div');
        layout.classList.add('wt-container');
        notificationBar.after(layout);
        layout.appendChild(document.querySelector('bread-crumb'));

        var emptyDiv = document.createElement('div');
        emptyDiv.classList.add('wt-empty');
        notificationBar.after(emptyDiv);

        var triggerSticky = document.createElement('div');
        triggerSticky.classList.add('wt-trigger');
        notificationBar.after(triggerSticky);

        function elementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            );
        }
        window.addEventListener('scroll', function () {
            var header = document.querySelector('.wt-trigger');

            if (elementInViewport(header)) {
                document.querySelector('.wt-container').classList.remove('wt-sticky');
                document.querySelector('.wt-empty').classList.remove('wt-height');
            } else {
                document.querySelector('.wt-container').classList.add('wt-sticky');
                document.querySelector('.wt-empty').classList.add('wt-height');
            }
        });
    },
};
(function polling() {

    if (document.querySelectorAll('footer').length > 0 && document.querySelectorAll('bread-crumb').length > 0
        && document.querySelectorAll('notification-bar.notification-bar.snack-bar').length > 0) {
        try {
            main.init();
        } catch (e) {
            console.log(e);
        }
    } else {
        setTimeout(polling, 25);
    }
})();
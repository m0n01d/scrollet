(function() {
  var scale=Number((screen.width/window.innerWidth).toFixed(1)), cssWidth = 35 / scale;
    function _scrollBar_(target) {
        var option, value, that = this;
        this.options = {
            target: target || window
        };

        setTimeout(function() {
            that.init();
        }, 1000)
    }
    _scrollBar_.prototype = {
        getDistance: function() {
            var t = this.options.target;
            //gets the number of pixels scrolled vertically of the target
            return (t === window) ? window.scrollY : this.getTarget().scrollTop;
        },
        getHeight: function() {
            var t = this.options.target, body = document.body, html = document.documentElement;
            return (t === window) ? Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) : this.getTarget().scrollHeight;
        },
        getTarget: function() {
            var t = this.options.target;
            console.log(t)
            return (t === window) ? window : document.querySelector(t)
        },
        init: function() {
            var that = this, viewPortHeight = window.innerHeight;
            var range = document.createElement('input');
            range.type = 'range';
            range.min = viewPortHeight;
            range.max = this.getHeight();
            range.value = this.getHeight() - this.getDistance();
            range.id = 'scrollBar';
            range.step = 1;
            document.body.appendChild(range);
            range.onchange = function() {
                that.scroll(this.max - this.value);
                if(this.value === this.min) {
                    setTimeout(function() {
                        range.max = that.getHeight();
                        range.value = that.getHeight() - that.getDistance();
                    }, 500)
                }
            };
            this.getTarget().onscroll = function() {
                range.max = that.getHeight();
                range.value = that.getHeight() - that.getDistance();
            };
        },
        scroll: function(y) {
            var t = this.options.target;
            return (t === window) ? window.scrollTo(0, y) : this.getTarget().scrollTop = y;
        }
    }
    document.styleSheets[0].insertRule('input#scrollBar { -webkit-appearance: slider-vertical !important; position: fixed; top: 10px; left: 85%; z-index: 1000; height: ' + 95 + '%; opacity: 0.5;  width: ' + cssWidth + 'px;}', 0);
    document.styleSheets[0].insertRule('input#scrollBar::-webkit-slider-thumb {  width: ' + cssWidth + 'px; height: ' + cssWidth + 'px;}', 0);
    window._scrollBar_ = _scrollBar_;


})();

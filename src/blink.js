/**
 * Blink : HTML5 Animation.
 * @type {[type]}
 */
(function(window, document, undefined) {
    "use strict";
    var Blink = function(options) {
        this.init(options);
    };

    Blink.prototype.init = function(options) {
        var _ = this;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.bg = options.background || "#CCC";

        this.radius = options.radius;
        this.point = {};
        this.point.radius = typeof options.point !== "undefined" ? options.point.radius || 8 : 8;
        this.point.color = typeof options.point !== "undefined" ? options.point.color || "rgba(95,193,174,1)" : "rgba(95,193,174,1)";
        this.w = this.canvas.width = options.width;
        this.h = this.canvas.height = options.height;
        this.x = this.w / 2;
        this.y = this.h / 2;
        this.fps = options.fps || 25;
        this.sum = options.sum || 8;

        this.r = options.r || (function() {
            var rt = [];
            for (var i = 0; i < _.sum; i++) {
                rt.push(_.point.radius / _.sum * (i + 1));
            }
            return rt;
        })();
        this.angle = (function() {
            var at = [];
            for (var i = 0; i < _.sum; i++) {
                at.push(360 / _.sum * i);
            }
            return at;
        })();
    };
    Blink.prototype.draw = function() {
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(0, 0, this.w, this.h);
        for (var i = 0; i < this.r.length; i++) {
            if (this.angle[i] >= 360) {
                this.angle[i] = 0;
            }
            this.ctx.beginPath();
            this.ctx.fillStyle = this.point.color;
            var xt = this.x + this.radius * Math.cos(this.angle[i] * Math.PI / 180);
            var yt = this.y + this.radius * Math.sin(this.angle[i] * Math.PI / 180);
            this.ctx.arc(xt, yt, this.r[i], 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.fill();
            this.angle[i] += 360 / this.sum;
        }
    };
    Blink.prototype.step = function() {
        this.draw();
    };

    Blink.prototype.start = function() {
        var _ = this;
        this.timer = setInterval(function() {
            _.step();
        }, 1000 / this.fps);
    };
    Blink.prototype.stop = function() {
        clearInterval(this.timer);
    };

    window.Blink = Blink;

})(window, document);

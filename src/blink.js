/**
 * Blink : HTML5 Animation.
 * @type {[type]}
 */
(function(window, document, undefined) {

    var Blink = function(options) {
        this.init();
    };

    Blink.prototype.init = function() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        // this.ctx.fillStyle = "#FF0000";
        // this.ctx.fillRect(0, 0, 150, 75);
        //
        // this.ctx.moveTo(0, 0);
        // this.ctx.lineTo(150, 75);
        // this.ctx.stroke();
        //
        this.ctx.beginPath();
        this.ctx.arc(95, 90, 40, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "#FF0000";
        this.ctx.stroke();
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        point = this.ctx.getImageData(55, 50, 80, 80);

    };
    Blink.prototype.draw = function(opts) {

    };
    Blink.prototype.step = function() {};

    Blink.prototype.start = function() {};
    Blink.prototype.stop = function() {};

    window.Blink = Blink;

})(window, document);

$(document).ready(function() {
    ! function(a, b) {
        function c(c, d) {
            function i() {
                this.x = Math.random() * c.width, this.y = Math.random() * c.height, this.vx = h.velocity - .5 * Math.random(), this.vy = h.velocity - .5 * Math.random(), this.radius = h.star.randomWidth ? Math.random() * h.star.width : h.star.width
            }
            var e = a(c),
                f = c.getContext("2d"),
                g = {
                    star: {
                        color: "rgba(255, 255, 255, .3)",
                        width: 1,
                        randomWidth: true
                    },
                    line: {
                        color: "rgba(255, 255, 255, .3)",
                        width: 1
                    },
                    position: {
                        x: 0,
                        y: 0
                    },
                    width: b.innerWidth,
                    height: b.innerHeight,
                    velocity: .1,
                    length: 45,
                    distance: 120,
                    radius: 150,
                    stars: []
                },
                h = a.extend(!0, {}, g, d);
            i.prototype = {
                create: function() {
                    f.beginPath(), f.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), f.fill()
                },
                animate: function() {
                    var a;
                    for (a = 0; a < h.length; a++) {
                        var b = h.stars[a];
                        b.y < 0 || b.y > c.height ? (b.vx = b.vx, b.vy = -b.vy) : (b.x < 0 || b.x > c.width) && (b.vx = -b.vx, b.vy = b.vy), b.x += b.vx, b.y += b.vy
                    }
                },
                line: function() {
                    var b, c, d, e, a = h.length;
                    for (d = 0; d < a; d++)
                        for (e = 0; e < a; e++) b = h.stars[d], c = h.stars[e], b.x - c.x < h.distance && b.y - c.y < h.distance && b.x - c.x > -h.distance && b.y - c.y > -h.distance && b.x - h.position.x < h.radius && b.y - h.position.y < h.radius && b.x - h.position.x > -h.radius && b.y - h.position.y > -h.radius && (f.beginPath(), f.moveTo(b.x, b.y), f.lineTo(c.x, c.y), f.stroke(), f.closePath())
                }
            }, this.createStars = function() {
                var b, d, a = h.length;
                for (f.clearRect(0, 0, c.width, c.height), d = 0; d < a; d++) h.stars.push(new i), b = h.stars[d], b.create();
                b.line(), b.animate()
            }, this.setCanvas = function() {
                c.width = .6 * h.width, c.height = .6 * h.height
            }, this.setContext = function() {
                f.fillStyle = h.star.color, f.strokeStyle = h.line.color, f.lineWidth = h.line.width
            }, this.setInitialPosition = function() {
                d && d.hasOwnProperty("position") || (h.position = {
                    x: .5 * c.width,
                    y: .5 * c.height
                })
            }, this.loop = function(a) {
                a(), b.requestAnimationFrame(function() {
                    this.loop(a)
                }.bind(this))
            }, this.bind = function() {
                e.on("mousemove", function(a) {
                    h.position.x = a.pageX - e.offset().left, h.position.y = a.pageY - e.offset().top
                })
            }, this.init = function() {
                this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
            }
        }
        a.fn.constellation = function(a) {
            return this.each(function() {
                var b = new c(this, a);
                b.init()
            })
        }
    }($, window), $("canvas").constellation({
        star: {
            width: 3
        },
        line: {
            color: "rgba(255, 255, 255, .1)"
        },
        radius: 250
    })
});
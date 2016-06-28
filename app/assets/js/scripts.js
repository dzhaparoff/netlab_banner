'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationFirstLogo = function () {
  function AnimationFirstLogo() {
    _classCallCheck(this, AnimationFirstLogo);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.logo = document.querySelector('.logo-01');
    this.outline = this.logo.querySelector('.outline');
    this.lineHeader = this.logo.querySelector('.line-header');
    this.contentLine01 = this.logo.querySelector('.line-01');
    this.contentLine02 = this.logo.querySelector('.line-02');
    this.contentLine03 = this.logo.querySelector('.line-03');
    this.contentImage = this.logo.querySelector('.content-image');
    this.windowCircle01 = this.logo.querySelector('.window-circle-01');
    this.windowCircle02 = this.logo.querySelector('.window-circle-02');
    this.windowCircle03 = this.logo.querySelector('.window-circle-03');
  }

  _createClass(AnimationFirstLogo, [{
    key: 'play',
    value: function play() {
      this.animate_outline().animate_header_line().animate_content_lines().animate_content_image().animate_header_circles();
    }
  }, {
    key: 'animate_outline',
    value: function animate_outline() {
      this.tl.to(this.outline, .65, {
        attr: {
          width: 80,
          x: 50
        },
        ease: Elastic.easeOut.config(1.1, 0.5)
      }, "0.3");
      return this;
    }
  }, {
    key: 'animate_header_line',
    value: function animate_header_line() {
      this.tl.to(this.lineHeader, .6, {
        attr: {
          x1: 50,
          x2: 130
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, "-=.7");
      return this;
    }
  }, {
    key: 'animate_content_lines',
    value: function animate_content_lines() {

      this.tl.to(this.contentLine01, .5, {
        attr: {
          x2: 80
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".3").to(this.contentLine02, .5, {
        attr: {
          x2: 75
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".35").to(this.contentLine03, .5, {
        attr: {
          x2: 83
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".4");

      return this;
    }
  }, {
    key: 'animate_content_image',
    value: function animate_content_image() {
      this.tl.to(this.contentImage, .5, {
        attr: {
          x: 100,
          width: 20
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".4");
      return this;
    }
  }, {
    key: 'animate_header_circles',
    value: function animate_header_circles() {
      this.tl.to(this.windowCircle03, .35, {
        attr: {
          r: 2
        },
        ease: Back.easeOut
      }, ".3").to(this.windowCircle02, .35, {
        attr: {
          r: 2
        },
        ease: Back.easeOut
      }, ".4").to(this.windowCircle01, .35, {
        attr: {
          r: 2
        },
        ease: Back.easeOut
      }, ".5");
      return this;
    }
  }]);

  return AnimationFirstLogo;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationNetlabLogo = function () {
  function AnimationNetlabLogo() {
    _classCallCheck(this, AnimationNetlabLogo);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.logo = document.querySelector('.logo-01');
    this.netlabLogo = this.logo.querySelector('.netlab');
    this.flask = this.netlabLogo.querySelector('.flask');
    this.circle1 = this.netlabLogo.querySelector('.circle-01');
    this.circle2 = this.netlabLogo.querySelector('.circle-02');
    this.circle3 = this.netlabLogo.querySelector('.circle-03');

    this.circle4 = this.netlabLogo.querySelector('.circle-04');
    this.circle5 = this.netlabLogo.querySelector('.circle-05');
    this.circle6 = this.netlabLogo.querySelector('.circle-06');
  }

  _createClass(AnimationNetlabLogo, [{
    key: 'play',
    value: function play() {
      this.animate_rotation().animate_circles();
      // .animate_circles2()
    }
  }, {
    key: 'animate_rotation',
    value: function animate_rotation() {
      this.tl.to(this.netlabLogo, 1.35, {
        transformOrigin: "center center",
        transformPerspective: 200,
        rotationY: 0,
        ease: Elastic.easeOut.config(1, 0.5)
      }, 0);

      return this;
    }
  }, {
    key: 'animate_circles',
    value: function animate_circles() {
      var _this = this;

      var tl2 = new TimelineMax({
        repeat: -1
      });

      this.tl.add(function () {
        tl2.to(_this.circle1, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: 4,
              y: -20
            }, {
              x: 6,
              y: -35
            }, {
              x: 3,
              y: -50
            }, {
              x: 0,
              y: -66
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0").to(_this.circle2, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: -1,
              y: -20
            }, {
              x: -4,
              y: -35
            }, {
              x: -1,
              y: -50
            }, {
              x: 0,
              y: -66
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0.35").to(_this.circle3, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: -4,
              y: -20
            }, {
              x: -6,
              y: -35
            }, {
              x: -3,
              y: -50
            }, {
              x: 0,
              y: -66
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0.7").set(_this.circle1, {
          attr: {
            fill: "#2dffd9"
          }
        }, "0.5").set(_this.circle2, {
          attr: {
            fill: "#2dffd9"
          }
        }, "0.85").set(_this.circle3, {
          attr: {
            fill: "#2dffd9"
          }
        }, "1.2").to(_this.circle1, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "1.65").to(_this.circle2, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "2").to(_this.circle3, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "2.35").play();
      }, "0.1");

      return this;
    }
  }, {
    key: 'animate_circles2',
    value: function animate_circles2() {
      var _this2 = this;

      var tl3 = new TimelineMax({
        repeat: -1,
        delay: "1.8"
      });

      this.tl.add(function () {
        tl3.to(_this2.circle4, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: 4,
              y: -20
            }, {
              x: 6,
              y: -35
            }, {
              x: 3,
              y: -50
            }, {
              x: 0,
              y: -64
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0").to(_this2.circle5, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: -1,
              y: -20
            }, {
              x: -4,
              y: -35
            }, {
              x: -1,
              y: -50
            }, {
              x: 0,
              y: -65
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0.35").to(_this2.circle6, 3, {
          bezier: {
            curviness: 1.25,
            values: [{
              x: -4,
              y: -20
            }, {
              x: -6,
              y: -35
            }, {
              x: -3,
              y: -50
            }, {
              x: 1,
              y: -65
            }]
          },
          ease: Elastic.easeOut.config(0.65, 0.7)
        }, "0.7").set(_this2.circle4, {
          attr: {
            fill: "#2dffd9"
          }
        }, "0.5").set(_this2.circle5, {
          attr: {
            fill: "#2dffd9"
          }
        }, "0.85").set(_this2.circle6, {
          attr: {
            fill: "#2dffd9"
          }
        }, "1.2").to(_this2.circle4, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "1.65").to(_this2.circle5, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "2").to(_this2.circle6, 0.5, {
          autoAlpha: 0,
          scale: 1.78,
          ease: Power2.easeIn
        }, "2.35").play();
      }, "0.1");

      return this;
    }
  }]);

  return AnimationNetlabLogo;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationSecondLogo = function () {
  function AnimationSecondLogo() {
    _classCallCheck(this, AnimationSecondLogo);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.logo = document.querySelector('.logo-01');
    this.pencilGroup = this.logo.querySelector('.pencil');
    this.pencilDash = this.logo.querySelector('#stroke-dash-masking path');
    this.outline = this.logo.querySelector('.outline');
    this.outline2 = this.logo.querySelector('.outline-2');
    this.outlinePencil = this.logo.querySelector('.outline-pencil');
    this.lineHeader = this.logo.querySelector('.line-header');
    this.lineHeader2 = this.logo.querySelector('.line-header-2');
    this.lineFooter = this.logo.querySelector('.line-footer');
    this.lineLeft = this.logo.querySelector('.line-left');
    this.lineRight = this.logo.querySelector('.line-right');
    this.contentLine01 = this.logo.querySelector('.line-01');
    this.contentLine02 = this.logo.querySelector('.line-02');
    this.contentLine03 = this.logo.querySelector('.line-03');
    this.contentImage = this.logo.querySelector('.content-image');
    this.windowCircle01 = this.logo.querySelector('.window-circle-01');
    this.windowCircle02 = this.logo.querySelector('.window-circle-02');
    this.windowCircle03 = this.logo.querySelector('.window-circle-03');
  }

  _createClass(AnimationSecondLogo, [{
    key: 'play',
    value: function play() {
      this.animate_outline().animate_header_circles().animate_content_lines().animate_content_image().animate_header_line().animate_footer_line().animate_left_right_lines().animate_pencil_rotate();
    }
  }, {
    key: 'animate_outline',
    value: function animate_outline() {
      this.tl.to(this.outline, .8, {
        stroke: "#72F21C",
        rotation: 90,
        transformOrigin: "center center",
        attr: {
          rx: 12,
          ry: 12,
          height: 34,
          width: 82,
          y: 111
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, ".2").set(this.outline, {
        attr: {
          'stroke-width': 0
        }
      }, ".6").set(this.outline2, {
        attr: {
          'stroke-width': 2
        }
      }, ".6").to(this.outline2, .8, {
        attr: {
          d: "M106,99l0,58c0,6.6-5.4,12-12,12H84c-6.6,0-12-5.4-12-12l0-58" + "c0-6.6,12.5-28,16-28h2C94.8,71,106,92.4,106,99z"
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".6").to(this.outlinePencil, 1, {
        attr: {
          points: "82.9,76.5 97.1,76.5 92,70.5 87.6,70.5"
        },
        ease: Elastic.easeOut.config(0.5, 1)
      }, ".6");

      return this;
    }
  }, {
    key: 'animate_header_circles',
    value: function animate_header_circles() {
      this.tl.to(this.windowCircle01, .35, {
        attr: {
          r: 0
        },
        ease: Power1.easeOut
      }, ".1").to(this.windowCircle02, .35, {
        attr: {
          r: 0
        },
        ease: Power1.easeOut
      }, ".2").to(this.windowCircle03, .35, {
        attr: {
          r: 0
        },
        ease: Power1.easeOut
      }, ".3");
      return this;
    }
  }, {
    key: 'animate_content_lines',
    value: function animate_content_lines() {
      this.tl.to(this.contentLine01, .25, {
        attr: {
          x1: 80
        },
        ease: Elastic.easeIn.config(0.6, 0.75)
      }, "0.1").to(this.contentLine02, .25, {
        attr: {
          x1: 75
        },
        ease: Elastic.easeIn.config(0.6, 0.75)
      }, ".05").to(this.contentLine03, .25, {
        attr: {
          x1: 83
        },
        ease: Elastic.easeIn.config(0.6, 0.75)
      }, "0");

      return this;
    }
  }, {
    key: 'animate_content_image',
    value: function animate_content_image() {
      this.tl.to(this.contentImage, .2, {
        attr: {
          y: 144,
          height: 0
        },
        ease: Power2.easeOut
      }, "0.15");
      return this;
    }
  }, {
    key: 'animate_header_line',
    value: function animate_header_line() {
      this.tl.to(this.lineHeader, .75, {
        stroke: "#72F21C",
        attr: {
          x1: 72,
          x2: 106
        },
        ease: Elastic.easeOut.config(0.8, 0.5)
      }, ".2").to(this.lineHeader, .75, {
        stroke: "#72F21C",
        attr: {
          y1: 100,
          y2: 100
        },
        ease: Elastic.easeOut.config(0.8, 0.5)
      }, ".3").set(this.lineHeader, {
        attr: {
          'stroke-width': 0
        }
      }, ".6").set(this.lineHeader2, {
        attr: {
          'stroke-width': 2
        }
      }, ".6").to(this.lineHeader2, .8, {
        attr: {
          points: "72,100 77.66,103 83.33,100 89,103 94.66,100 100.33,103 106,100"
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".6");

      return this;
    }
  }, {
    key: 'animate_footer_line',
    value: function animate_footer_line() {
      this.tl.to(this.lineFooter, .25, {
        attr: {
          x1: 72,
          x2: 106
        },
        ease: Power2.easeOut
      }, ".3");
      return this;
    }
  }, {
    key: 'animate_left_right_lines',
    value: function animate_left_right_lines() {
      this.tl.to(this.lineLeft, .75, {
        attr: {
          y2: 154
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, "0.7").to(this.lineRight, .75, {
        attr: {
          y2: 154
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, "0.7");

      return this;
    }
  }, {
    key: 'animate_pencil_rotate',
    value: function animate_pencil_rotate() {
      this.tl.to(this.pencilGroup, 1, {
        rotation: -90,
        transformOrigin: "center 58%",
        ease: Elastic.easeOut.config(0.78, 0.5)
      }, "0.7").to(this.pencilDash, 0.85, {
        attr: {
          'stroke-dashoffset': '5'
        },
        ease: Elastic.easeOut.config(1, 1)
      }, "0.7");

      return this;
    }
  }]);

  return AnimationSecondLogo;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationText = function () {
  function AnimationText() {
    _classCallCheck(this, AnimationText);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.line = {
      first: {
        black: document.querySelector('.ad-text .first-line .black-hover'),
        white: document.querySelector('.ad-text .first-line .white-hover'),
        color: document.querySelector('.ad-text .first-line .color-hover')
      },
      second: {
        black: document.querySelector('.ad-text .second-line .black-hover'),
        white: document.querySelector('.ad-text .second-line .white-hover'),
        color: document.querySelector('.ad-text .second-line .color-hover')
      },
      third: {
        black: document.querySelector('.ad-text .third-line .black-hover'),
        white: document.querySelector('.ad-text .third-line .white-hover'),
        color: document.querySelector('.ad-text .third-line .color-hover')
      }
    };
  }

  _createClass(AnimationText, [{
    key: 'play',
    value: function play() {
      this.animate_line('first', 1).animate_line('second', 2.2).animate_line('third', 3.3);
    }
  }, {
    key: 'animate_line',
    value: function animate_line(line, offset) {

      this.tl.to(this.line[line].black, 0.8, {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      }, 0.1 + offset);

      this.tl.to(this.line[line].white, 0.6, {
        css: {
          right: "0"
        },
        ease: Power1.easeInOut
      }, 0 + offset).to(this.line[line].color, 0.6, {
        css: {
          right: "0"
        },
        ease: Power1.easeInOut
      }, 0 + offset).to(this.line[line].white, 0.8, {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      }, 0.1 + offset).to(this.line[line].color, 0.85, {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      }, 0.1 + offset);

      return this;
    }
  }]);

  return AnimationText;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationTextLogo = function () {
  function AnimationTextLogo() {
    _classCallCheck(this, AnimationTextLogo);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.text_logo = document.querySelector('.text-logo');

    this.n = {
      left: this.text_logo.querySelector('#N .left'),
      center: this.text_logo.querySelector('#N .center'),
      right: this.text_logo.querySelector('#N .right')
    };

    this.e = {
      left: this.text_logo.querySelector('#E .left'),
      top: this.text_logo.querySelector('#E .top'),
      center: this.text_logo.querySelector('#E .center'),
      bottom: this.text_logo.querySelector('#E .bottom')
    };

    this.t = {
      horizontal: this.text_logo.querySelector("#T .horizontal"),
      vertical: this.text_logo.querySelector('#T .vertical')
    };

    this.l = {
      horizontal: this.text_logo.querySelector("#L .horizontal"),
      vertical: this.text_logo.querySelector('#L .vertical')
    };

    this.a = {
      left: this.text_logo.querySelector("#A .left"),
      center: this.text_logo.querySelector('#A .center'),
      right: this.text_logo.querySelector('#A .right')
    };

    this.b = {
      left: this.text_logo.querySelector("#B .left"),
      top: this.text_logo.querySelector('#B .top'),
      bottom: this.text_logo.querySelector('#B .bottom')
    };

    this.bottom_text = document.querySelector('.sub-name-text');
  }

  _createClass(AnimationTextLogo, [{
    key: 'play',
    value: function play() {
      this.animate_n().animate_e().animate_t().animate_l().animate_a().animate_b().animate_bottom_text();
    }
  }, {
    key: 'animate_n',
    value: function animate_n() {
      this.tl.to(this.n.left, .65, {
        attr: {
          width: 6,
          x: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to(this.n.center, .65, {
        transform: "matrix(1 0 0 1 0 0)",
        ease: Elastic.easeOut.config(1, 1)
      }, "0.4").to(this.n.right, .65, {
        attr: {
          width: 6,
          x: 20.9
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5");
      return this;
    }
  }, {
    key: 'animate_e',
    value: function animate_e() {
      this.tl.to(this.e.left, .65, {
        attr: {
          width: 6,
          x: 39
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to([this.e.top, this.e.center, this.e.bottom], .8, {
        attr: {
          height: 5,
          y: 11
        },
        ease: Elastic.easeOut.config(1, .8)
      }, "0.65").to(this.e.top, .75, {
        attr: {
          y: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8").to(this.e.bottom, .75, {
        attr: {
          y: 22
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8");

      return this;
    }
  }, {
    key: 'animate_t',
    value: function animate_t() {
      this.tl.set(this.t.horizontal, {
        rotation: 90,
        transformOrigin: "center center"
      }, 0).to(this.t.horizontal, .65, {
        attr: {
          height: 5,
          y: 11
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to(this.t.horizontal, .65, {
        rotation: 0,
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5").to(this.t.horizontal, .65, {
        attr: {
          y: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8").to(this.t.vertical, .65, {
        attr: {
          width: 6,
          x: 77
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "1");

      return this;
    }
  }, {
    key: 'animate_l',
    value: function animate_l() {
      this.tl.to(this.l.vertical, .65, {
        attr: {
          width: 6,
          x: 104
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to(this.l.horizontal, .65, {
        attr: {
          width: 19
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5");

      return this;
    }
  }, {
    key: 'animate_a',
    value: function animate_a() {
      this.tl
      // .set(this.a.left, {
      //   scaleX: 0,
      //   transformOrigin: "center center"
      // }, 0)
      .to(this.a.left, .65, {
        attr: {
          points: "129.8,27 141.4,0 147.7,0 136.7,27"
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to(this.a.right, .65, {
        attr: {
          points: "153,27 141.4,0 147.7,0 159.9,27"
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.45").to(this.a.center, .65, {
        attr: {
          width: 13
        },
        ease: Elastic.easeOut.config(1, 1)
      }, "0.59");

      return this;
    }
  }, {
    key: 'animate_b',
    value: function animate_b() {
      this.tl.to(this.b.left, .65, {
        attr: {
          x: 169,
          width: 6
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3").to(this.b.top, .65, {
        attr: {
          'stroke-dashoffset': 0
        },
        ease: Power1.easeOut
      }, "0.45").to(this.b.bottom, .65, {
        attr: {
          'stroke-dashoffset': 0
        },
        ease: Power1.easeOut
      }, "0.85");
      return this;
    }
  }, {
    key: 'animate_bottom_text',
    value: function animate_bottom_text() {
      this.tl.to(this.bottom_text, 2, {
        opacity: 1,
        ease: Back.easeOut
      }, "1");
    }
  }]);

  return AnimationTextLogo;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationThridLogo = function () {
  function AnimationThridLogo() {
    _classCallCheck(this, AnimationThridLogo);

    this.tl = new TimelineMax({
      repeat: false
    });

    this.logo = document.querySelector('.logo-01');

    this.pencilGroup = this.logo.querySelector('.pencil');
    this.pencilDash = this.logo.querySelector('.pencil-dash');
    this.outline = this.logo.querySelector('.outline-3');
    this.outline2 = this.logo.querySelector('.outline-2');
    this.outlinePencil = this.logo.querySelector('.outline-pencil');

    this.lineHeader = this.logo.querySelector('.line-header');
    this.lineHeader2 = this.logo.querySelector('.line-header-2');
    this.lineFooter = this.logo.querySelector('.line-footer');
    this.lineLeft = this.logo.querySelector('.line-left');
    this.lineRight = this.logo.querySelector('.line-right');

    this.buttons = this.logo.querySelectorAll('.keyboard path');
    this.cable = this.logo.querySelector('.cable');
  }

  _createClass(AnimationThridLogo, [{
    key: 'play',
    value: function play() {
      this.animate_outline().animate_lines().animate_buttons().animate_cable();
    }
  }, {
    key: 'animate_outline',
    value: function animate_outline() {
      this.tl.to(this.pencilDash, 1, {
        autoAlpha: 0,
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, 0).to(this.outlinePencil, 0.6, {
        attr: {
          points: "87.6,70.5 92,70.5 92,70.5 87.6,70.5"
        },
        ease: Elastic.easeOut.config(0.5, 1)
      }, "0").to(this.outline2, .65, {
        attr: {
          d: "M106,99l0,58c0,6.6-5.4,12-12,12H84c-6.6,0-12-5.4-12-12l0-58" + "c0-6.6,5.4-12,12-12h10C100.6,87,106,92.4,106,99z"
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".1").set(this.outline, {
        attr: {
          'stroke-width': 2
        }
      }, ".5").set(this.outline2, {
        attr: {
          'stroke-width': 0
        }
      }, ".5").to(this.outline, .85, {
        attr: {
          stroke: "#FF7800",
          rx: 3,
          ry: 3,
          width: 110,
          height: 54,
          x: 34,
          y: 100
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".5").to(this.outline, .85, {
        attr: {
          width: 0,
          x: 84,
          y: 100
        },
        ease: Elastic.easeIn.config(0.76, 0.5)
      }, "1.25").to(this.outline, .35, {
        autoAlpha: 0,
        ease: Power2.easeIn
      }, "1.75");
      return this;
    }
  }, {
    key: 'animate_lines',
    value: function animate_lines() {
      this.tl.to(this.pencilDash, 1, {
        autoAlpha: 0,
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, 0).to(this.lineHeader2, .6, {
        attr: {
          points: "72,100 77.66,100 83.33,100 89,100 94.66,100 100.33,100 106,100"
        },
        ease: Elastic.easeOut.config(1, 0.5)
      }, ".2").to(this.lineLeft, .5, {
        attr: {
          y2: 100
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, "0.05").to(this.lineRight, .5, {
        attr: {
          y2: 100
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, "0.05").to(this.lineFooter, .5, {
        attr: {
          y1: 100,
          y2: 100
        },
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, "0.05").to([this.lineHeader2, this.lineLeft, this.lineRight, this.lineFooter], .3, {
        autoAlpha: 0,
        attr: {
          'stroke-width': 0
        },
        ease: Power2.easeOut
      }, ".15");
      return this;
    }
  }, {
    key: 'animate_buttons',
    value: function animate_buttons() {
      for (var i = 0; i < this.buttons.length; ++i) {
        this.tl.to(this.buttons[i], 0.8, {
          transformOrigin: "center center",
          scaleY: 1,
          scaleX: 1,
          ease: Elastic.easeOut.config(1, 0.5)
        }, .5 + .025 * i).to(this.buttons[i], 0.85, {
          transformOrigin: "center center",
          scaleY: .6,
          scaleX: 0,
          autoAlpha: 0,
          ease: Elastic.easeOut.config(1, 0.5)
        }, 2 - .025 * i);
      }

      return this;
    }
  }, {
    key: 'animate_cable',
    value: function animate_cable() {
      this.tl.to(this.cable, 0.75, {
        attr: {
          'stroke-dashoffset': '0'
        },
        ease: Power2.easeOut
      }, "0.7").to(this.cable, 0.5, {
        attr: {
          'stroke-dashoffset': '37.167266845703125'
        },
        ease: Power2.easeOut
      }, "1.6");

      return this;
    }
  }]);

  return AnimationThridLogo;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var Animation = function () {
    function Animation() {
      _classCallCheck(this, Animation);

      this.tl = new TimelineMax({
        repeat: false
      });

      this.logo = document.querySelector('.logo-01');
      this.netlabLogo = this.logo.querySelector('.netlab');

      var buttons = this.logo.querySelectorAll('.keyboard path');

      for (var i = 0; i < buttons.length; ++i) {
        this.tl.set(buttons[i], {
          transformOrigin: "center center",
          scaleY: 0.8,
          scaleX: 0,
          attr: {
            'stroke-width': 2
          }
        });
      }

      this.tl.set(this.netlabLogo, {
        transformOrigin: "center center",
        transformPerspective: 200,
        rotationY: "90_cw"
      });

      this.animation_text_logo = new AnimationTextLogo();
      this.animation_first_logo = new AnimationFirstLogo();
      this.animation_second_logo = new AnimationSecondLogo();
      this.animation_thrid_logo = new AnimationThridLogo();
      this.animation_netlab_logo = new AnimationNetlabLogo();
      this.animation_text = new AnimationText();
    }

    _createClass(Animation, [{
      key: 'play',
      value: function play() {
        var _this = this;

        this.tl.to(this.netlabLogo, .85, {
          autoAlpha: 1,
          ease: Power2.easeOut
        }, "5.2");

        this.tl.add(function () {
          _this.animation_text_logo.play();
        }, 0);

        this.tl.add(function () {
          _this.animation_text.play();
        }, 0);

        this.tl.add(function () {
          _this.animation_first_logo.play();
        }, 1);

        this.tl.add(function () {
          _this.animation_second_logo.play();
        }, 1.75);

        this.tl.add(function () {
          _this.animation_thrid_logo.play();
        }, 3);

        this.tl.add(function () {
          _this.animation_netlab_logo.play();
        }, 5.3);
      }
    }]);

    return Animation;
  }();

  $(function () {
    var animation = new Animation();
    animation.play();
  });
})();
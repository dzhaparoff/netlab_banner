class AnimationSecondLogo {

  constructor() {

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

  play() {
    this.animate_outline()
      .animate_header_circles()
      .animate_content_lines()
      .animate_content_image()
      .animate_header_line()
      .animate_footer_line()
      .animate_left_right_lines()
      .animate_pencil_rotate()
  }

  animate_outline() {
    this.tl
      .to(
        this.outline, .8, {
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
        }, ".2")
      .set(
        this.outline, {
          attr: {
            'stroke-width': 0
          }
        }, ".6")
      .set(
        this.outline2, {
          attr: {
            'stroke-width': 2
          }
        }, ".6")
      .to(
        this.outline2, .8, {
          attr: {
            d: "M106,99l0,58c0,6.6-5.4,12-12,12H84c-6.6,0-12-5.4-12-12l0-58" +
              "c0-6.6,12.5-28,16-28h2C94.8,71,106,92.4,106,99z"
          },
          ease: Elastic.easeOut.config(1, 0.5)
        }, ".6")
      .to(
        this.outlinePencil, 1, {
          attr: {
            points: "82.9,76.5 97.1,76.5 92,70.5 87.6,70.5"
          },
          ease: Elastic.easeOut.config(0.5, 1)
        }, ".6")


    return this;
  }

  animate_header_circles() {
    this.tl
      .to(
        this.windowCircle01, .35, {
          attr: {
            r: 0
          },
          ease: Power1.easeOut
        },
        ".1")
      .to(
        this.windowCircle02, .35, {
          attr: {
            r: 0
          },
          ease: Power1.easeOut
        },
        ".2")
      .to(
        this.windowCircle03, .35, {
          attr: {
            r: 0
          },
          ease: Power1.easeOut
        },
        ".3")
    return this;
  }

  animate_content_lines() {
    this.tl
      .to(
        this.contentLine01, .25, {
          attr: {
            x1: 80
          },
          ease: Elastic.easeIn.config(0.6, 0.75)
        },
        "0.1")
      .to(
        this.contentLine02, .25, {
          attr: {
            x1: 75
          },
          ease: Elastic.easeIn.config(0.6, 0.75)
        },
        ".05")
      .to(
        this.contentLine03, .25, {
          attr: {
            x1: 83
          },
          ease: Elastic.easeIn.config(0.6, 0.75)
        },
        "0");

    return this;
  }

  animate_content_image() {
    this.tl
      .to(
        this.contentImage, .2, {
          attr: {
            y: 144,
            height: 0
          },
          ease: Power2.easeOut
        },
        "0.15");
    return this;
  }

  animate_header_line() {
    this.tl
      .to(
        this.lineHeader, .75, {
          stroke: "#72F21C",
          attr: {
            x1: 72,
            x2: 106
          },
          ease: Elastic.easeOut.config(0.8, 0.5)
        }, ".2")
      .to(
        this.lineHeader, .75, {
          stroke: "#72F21C",
          attr: {
            y1: 100,
            y2: 100
          },
          ease: Elastic.easeOut.config(0.8, 0.5)
        }, ".3")
      .set(
        this.lineHeader, {
          attr: {
            'stroke-width': 0
          }
        }, ".6")
      .set(
        this.lineHeader2, {
          attr: {
            'stroke-width': 2
          }
        }, ".6")
      .to(
        this.lineHeader2, .8, {
          attr: {
            points: "72,100 77.66,103 83.33,100 89,103 94.66,100 100.33,103 106,100"
          },
          ease: Elastic.easeOut.config(1, 0.5)
        }, ".6")

    return this;
  }

  animate_footer_line() {
    this.tl
      .to(
        this.lineFooter, .25, {
          attr: {
            x1: 72,
            x2: 106
          },
          ease: Power2.easeOut
        }, ".3");
    return this;
  }

  animate_left_right_lines() {
    this.tl
      .to(
        this.lineLeft, .75, {
          attr: {
            y2: 154
          },
          ease: Elastic.easeOut.config(0.75, 0.78)
        }, "0.7")
      .to(
        this.lineRight, .75, {
          attr: {
            y2: 154
          },
          ease: Elastic.easeOut.config(0.75, 0.78)
        }, "0.7")

    return this;
  }

  animate_pencil_rotate() {
    this.tl
      .to(
        this.pencilGroup, 1, {
          rotation: -90,
          transformOrigin: "center 58%",
          ease: Elastic.easeOut.config(0.78, 0.5)
        }, "0.7")
      .to(
        this.pencilDash, 0.85, {
          attr: {
            'stroke-dashoffset': '5'
          },
          ease: Elastic.easeOut.config(1, 1)
        }, "0.7")

    return this;
  }

}

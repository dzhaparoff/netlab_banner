class AnimationThridLogo {

  constructor() {

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

  play() {
    this.animate_outline()
      .animate_lines()
      .animate_buttons()
      .animate_cable()
  }

  animate_outline() {
    this.tl
      .to(this.pencilDash, 1, {
        autoAlpha: 0,
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, 0)
      .to(
        this.outlinePencil, 0.6, {
          attr: {
            points: "87.6,70.5 92,70.5 92,70.5 87.6,70.5"
          },
          ease: Elastic.easeOut.config(0.5, 1)
        }, "0")
      .to(
        this.outline2, .65, {
          attr: {
            d: "M106,99l0,58c0,6.6-5.4,12-12,12H84c-6.6,0-12-5.4-12-12l0-58" +
              "c0-6.6,5.4-12,12-12h10C100.6,87,106,92.4,106,99z"
          },
          ease: Elastic.easeOut.config(1, 0.5)
        }, ".1")
      .set(
        this.outline, {
          attr: {
            'stroke-width': 2
          }
        }, ".5")
      .set(
        this.outline2, {
          attr: {
            'stroke-width': 0
          }
        }, ".5")
      .to(
        this.outline, .85, {
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
        }, ".5")
      .to(
        this.outline, .85, {
          attr: {
            width: 0,
            x: 84,
            y: 100
          },
          ease: Elastic.easeIn.config(0.76, 0.5)
        }, "1.25")
      .to(
        this.outline, .35, {
          autoAlpha: 0,
          ease: Power2.easeIn
        }, "1.75")
    return this;
  }

  animate_lines() {
    this.tl
      .to(this.pencilDash, 1, {
        autoAlpha: 0,
        ease: Elastic.easeOut.config(0.75, 0.78)
      }, 0)
      .to(
        this.lineHeader2, .6, {
          attr: {
            points: "72,100 77.66,100 83.33,100 89,100 94.66,100 100.33,100 106,100"
          },
          ease: Elastic.easeOut.config(1, 0.5)
        }, ".2")
      .to(
        this.lineLeft, .5, {
          attr: {
            y2: 100
          },
          ease: Elastic.easeOut.config(0.75, 0.78)
        }, "0.05")
      .to(
        this.lineRight, .5, {
          attr: {
            y2: 100
          },
          ease: Elastic.easeOut.config(0.75, 0.78)
        }, "0.05")
      .to(
        this.lineFooter, .5, {
          attr: {
            y1: 100,
            y2: 100
          },
          ease: Elastic.easeOut.config(0.75, 0.78)
        }, "0.05")
      .to(
        [this.lineHeader2, this.lineLeft, this.lineRight, this.lineFooter], .3, {
          autoAlpha: 0,
          attr: {
            'stroke-width': 0
          },
          ease: Power2.easeOut
        }, ".15")
    return this;
  }

  animate_buttons() {
    for (let i = 0; i < this.buttons.length; ++i) {
      this.tl
        .to(this.buttons[i], 0.8, {
          transformOrigin: "center center",
          scaleY: 1,
          scaleX: 1,
          ease: Elastic.easeOut.config(1, 0.5)
        }, .5 + .025 * i)
        .to(this.buttons[i], 0.85, {
          transformOrigin: "center center",
          scaleY: .6,
          scaleX: 0,
          autoAlpha: 0,
          ease: Elastic.easeOut.config(1, 0.5)
        }, 2 - .025 * i)
    }



    return this;
  }

  animate_cable() {
    this.tl
      .to(
        this.cable, 0.75, {
          attr: {
            'stroke-dashoffset': '0'
          },
          ease: Power2.easeOut
        }, "0.7")
      .to(
        this.cable, 0.5, {
          attr: {
            'stroke-dashoffset': '37.167266845703125'
          },
          ease: Power2.easeOut
        }, "1.6")

    return this;
  }

}

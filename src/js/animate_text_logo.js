class AnimationTextLogo {

  constructor() {
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

  play() {
    this.animate_n()
      .animate_e()
      .animate_t()
      .animate_l()
      .animate_a()
      .animate_b()
      .animate_bottom_text();
  }

  animate_n() {
    this.tl
      .to(this.n.left, .65, {
        attr: {
          width: 6,
          x: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3")
      .to(this.n.center, .65, {
        transform: "matrix(1 0 0 1 0 0)",
        ease: Elastic.easeOut.config(1, 1)
      }, "0.4")
      .to(this.n.right, .65, {
        attr: {
          width: 6,
          x: 20.9
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5")
    return this;
  }

  animate_e() {
    this.tl
      .to(this.e.left, .65, {
        attr: {
          width: 6,
          x: 39
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3")
      .to([this.e.top, this.e.center, this.e.bottom], .8, {
        attr: {
          height: 5,
          y: 11
        },
        ease: Elastic.easeOut.config(1, .8)
      }, "0.65")
      .to(this.e.top, .75, {
        attr: {
          y: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8")
      .to(this.e.bottom, .75, {
        attr: {
          y: 22
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8");

    return this;
  }

  animate_t() {
    this.tl
      .set(this.t.horizontal, {
        rotation: 90,
        transformOrigin: "center center"
      }, 0)
      .to(this.t.horizontal, .65, {
        attr: {
          height: 5,
          y: 11
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3")
      .to(this.t.horizontal, .65, {
        rotation: 0,
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5")
      .to(this.t.horizontal, .65, {
        attr: {
          y: 0
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.8")
      .to(this.t.vertical, .65, {
        attr: {
          width: 6,
          x: 77
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "1");

    return this;
  }

  animate_l() {
    this.tl
      .to(this.l.vertical, .65, {
        attr: {
          width: 6,
          x: 104
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3")
      .to(this.l.horizontal, .65, {
        attr: {
          width: 19
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.5")

    return this;
  }

  animate_a() {
    this.tl
      // .set(this.a.left, {
      //   scaleX: 0,
      //   transformOrigin: "center center"
      // }, 0)
      .to(this.a.left, .65, {
        attr: {
          points: "129.8,27 141.4,0 147.7,0 136.7,27",
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.3")
      .to(this.a.right, .65, {
        attr: {
          points: "153,27 141.4,0 147.7,0 159.9,27",
        },
        ease: Elastic.easeOut.config(1, .5)
      }, "0.45")
      .to(this.a.center, .65, {
        attr: {
          width: 13
        },
        ease: Elastic.easeOut.config(1, 1)
      }, "0.59");

    return this;
  }


  animate_b() {
    this.tl
    .to(this.b.left, .65, {
      attr: {
        x: 169,
        width: 6
      },
      ease: Elastic.easeOut.config(1, .5)
    }, "0.3")
    .to(this.b.top, .65,
    {
      attr: {
        'stroke-dashoffset': 0
      },
      ease: Power1.easeOut
    }, "0.45")
    .to(this.b.bottom, .65,
    {
      attr: {
        'stroke-dashoffset': 0
      },
      ease: Power1.easeOut
    }, "0.85")
    return this;
  }

  animate_bottom_text(){
    this.tl.to(this.bottom_text, 2, {
      opacity: 1,
      ease: Back.easeOut
    }, "1")
  }

}

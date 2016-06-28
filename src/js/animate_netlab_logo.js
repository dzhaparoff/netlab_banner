class AnimationNetlabLogo {

  constructor() {

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

  play() {
    this.animate_rotation()
      .animate_circles()
      // .animate_circles2()
  }

  animate_rotation() {
    this.tl    
    .to(
      this.netlabLogo,
      1.35, {
        transformOrigin: "center center",
        transformPerspective: 200,
        rotationY: 0,
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0
    )

    return this;
  }

  animate_circles() {
    let tl2 = new TimelineMax({
      repeat: -1
    });

    this.tl.add(
      () => {
        tl2
          .to(
            this.circle1,
            3, {
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
            },
            "0"
          )
          .to(
            this.circle2,
            3, {
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
            },
            "0.35"
          )
          .to(
            this.circle3,
            3, {
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
            },
            "0.7"
          )
          .set(this.circle1, {
            attr: {
              fill: "#2dffd9"
            }
          }, "0.5")
          .set(this.circle2, {
            attr: {
              fill: "#2dffd9"
            }
          }, "0.85")
          .set(this.circle3, {
            attr: {
              fill: "#2dffd9"
            }
          }, "1.2")
          .to(
            this.circle1,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "1.65"
          )
          .to(
            this.circle2,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "2"
          )
          .to(
            this.circle3,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "2.35"
          )
          .play();
      }, "0.1"
    );


    return this;
  }

  animate_circles2() {
    let tl3 = new TimelineMax({
      repeat: -1,
      delay: "1.8"
    });

    this.tl.add(
      () => {
        tl3
          .to(
            this.circle4,
            3, {
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
            },
            "0"
          )
          .to(
            this.circle5,
            3, {
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
            },
            "0.35"
          )
          .to(
            this.circle6,
            3, {
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
            },
            "0.7"
          )
          .set(this.circle4, {
            attr: {
              fill: "#2dffd9"
            }
          }, "0.5")
          .set(this.circle5, {
            attr: {
              fill: "#2dffd9"
            }
          }, "0.85")
          .set(this.circle6, {
            attr: {
              fill: "#2dffd9"
            }
          }, "1.2")
          .to(
            this.circle4,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "1.65"
          )
          .to(
            this.circle5,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "2"
          )
          .to(
            this.circle6,
            0.5, {
              autoAlpha: 0,
              scale: 1.78,
              ease: Power2.easeIn
            },
            "2.35"
          )
          .play();
      }, "0.1"
    );


    return this;
  }

}

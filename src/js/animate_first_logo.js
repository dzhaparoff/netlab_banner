class AnimationFirstLogo {

  constructor() {

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

  play() {
    this.animate_outline()
      .animate_header_line()
      .animate_content_lines()
      .animate_content_image()
      .animate_header_circles();
  }

  animate_outline() {
    this.tl
      .to(
        this.outline, .65, {
          attr: {
            width: 80,
            x: 50
          },
          ease: Elastic.easeOut.config(1.1, 0.5)
        }, "0.3");
    return this;
  }

  animate_header_line() {
    this.tl
    .to(
        this.lineHeader, .6, {
          attr: {
            x1: 50,
            x2: 130
          },
          ease: Elastic.easeOut.config(1, 0.5)
        }, "-=.7")
    return this;
  }

  animate_content_lines() {   

    this.tl
      .to(
        this.contentLine01, .5, {
          attr: {
            x2: 80
          },
          ease: Elastic.easeOut.config(1, 0.5)
        },
        ".3")
      .to(
        this.contentLine02, .5, {
          attr: {
            x2: 75
          },
          ease: Elastic.easeOut.config(1, 0.5)
        },
        ".35")
      .to(
        this.contentLine03, .5, {
          attr: {
            x2: 83
          },
          ease: Elastic.easeOut.config(1, 0.5)
        },
        ".4");

    return this;
  }

  animate_content_image() {
    this.tl
      .to(
        this.contentImage, .5, {
          attr: {
            x: 100,
            width: 20
          },
          ease: Elastic.easeOut.config(1, 0.5)
        },
        ".4");
    return this;
  }

  animate_header_circles() {
    this.tl
      .to(
        this.windowCircle03, .35, {
          attr: {
            r: 2
          },
          ease: Back.easeOut
        },
        ".3")
      .to(
        this.windowCircle02, .35, {
          attr: {
            r: 2
          },
          ease: Back.easeOut
        },
        ".4")
      .to(
        this.windowCircle01, .35, {
          attr: {
            r: 2
          },
          ease: Back.easeOut
        },
        ".5")
    return this;
  }
}

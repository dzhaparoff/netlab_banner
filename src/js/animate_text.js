class AnimationText {
  constructor(){
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
    }
  }

  play(){
    this.animate_line('first', 1)
    .animate_line('second', 2.2)
    .animate_line('third', 3.3)
  }

  animate_line(line, offset){

    this.tl
    .to(
      this.line[line].black, 0.8,
      {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      },
      0.1 + offset
    )

    this.tl
    .to(
      this.line[line].white, 0.6,
      {
        css: {
          right: "0"
        },
        ease: Power1.easeInOut
      },
      0 + offset
    )
    .to(
      this.line[line].color, 0.6,
      {
        css: {
          right: "0"
        },
        ease: Power1.easeInOut
      },
      0 + offset
    )

    .to(
      this.line[line].white, 0.8,
      {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      },
      0.1 + offset
    )
    .to(
      this.line[line].color, 0.85,
      {
        css: {
          left: "100%"
        },
        ease: Power1.easeInOut
      },
      0.1 + offset
    )

    return this;
  }

}

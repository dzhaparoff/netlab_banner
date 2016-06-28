(function() {

  'use strict';

  class Animation {
    constructor() {
      this.tl = new TimelineMax({
        repeat: false
      });

      this.logo = document.querySelector('.logo-01');
      this.netlabLogo = this.logo.querySelector('.netlab');

      let buttons = this.logo.querySelectorAll('.keyboard path');

      for (let i = 0; i < buttons.length; ++i) {
        this.tl
          .set(buttons[i], {
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



      this.animation_text_logo = new AnimationTextLogo;
      this.animation_first_logo = new AnimationFirstLogo;
      this.animation_second_logo = new AnimationSecondLogo;
      this.animation_thrid_logo = new AnimationThridLogo;
      this.animation_netlab_logo = new AnimationNetlabLogo;
      this.animation_text = new AnimationText;
    }

    play() {

      this.tl.to(this.netlabLogo, .85, {
        autoAlpha: 1,
        ease: Power2.easeOut
      }, "5.2");

      this.tl.add(
        () => {
          this.animation_text_logo.play();
        }, 0
      );

      this.tl.add(
        () => {
          this.animation_text.play();
        }, 0);

      this.tl.add(
        () => {
          this.animation_first_logo.play();
        }, 1);

      this.tl.add(
        () => {
          this.animation_second_logo.play();
        }, 1.75);

      this.tl.add(
        () => {
          this.animation_thrid_logo.play();
        }, 3);

      this.tl.add(
        () => {
          this.animation_netlab_logo.play();
        }, 5.3);

    }
  }


  function ready(){
    var animation = new Animation();
    animation.play();
  }

  document.addEventListener("DOMContentLoaded", ready);

}());

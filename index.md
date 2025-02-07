---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---
<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

My journey starts here.
---
layout: base
title: Srinaga Prahalad Home 
description: Home Page
hide: true
---


## Home

This blog contains my journey into Coding.

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/jm1021/john_2025">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://jm1021.github.io/john_2025/">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
    </a>
    <a href="https://kasm.nighthawkcodingsociety.com/">
        <img src="https://img.shields.io/badge/KASM-0078D4?style=for-the-badge&logo=kasm&logoColor=white" alt="KASM">
    </a>
    <a href="{{site.baseurl}}/kasm/quick/setup">
        <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu">
    </a>
    <a href="https://vscode.dev/">
        <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
    </a>
</div>

<br>

### Game Progress

> Here is my progress through game coding, click to see these online.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg/dot0" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.0
        </div>
    </a>
    <a href="https://prahalad-ship-it.github.io/Srinaga_2025/rpg/" style="text-decoration: none;">
        <div style="background-color: #FF8800; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.1
        </div>
    </a>
    <a href="https://prahalad-ship-it.github.io/Srinaga_2025/rpg2x/" style="text-decoration: none;">
        <div style="background-color: #FFFF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.2
        </div>
    </a>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://prahalad-ship-it.github.io/Srinaga_2025/csse/javascript/fundamentals/for-loops/" style="text-decoration: none;">
        <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Variables I/O
        </div>
    </a>
    <a href="http://127.0.0.1:4100/Srinaga_2025/csse/javascript/fundamentals/variables" style="text-decoration: none;">
        <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Fundamentals Variables
        </div>
    </a>
    <a href="https://prahalad-ship-it.github.io/Srinaga_2025/2024/09/30/data-types-operations_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data Types
        </div>
    </a>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/Prahalad-ship-it/Srinaga_2025/tree/main/_notebooks/Foundation/Sprint%206" style="text-decoration: none;">
    <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
        Journal
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <a href="https://github.com/Prahalad-ship-it/Srinaga_2025/issues/9" style="text-decoration: none;">
            <div style="background-color:rgb(0, 0, 0); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
                Burn Down Wk 20-21
            </div>
        </a>
    </div>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/Prahalad-ship-it/Srinaga_2025/issues/8" style="text-decoration: none;">
        <div style="background-color:rgb(0, 0, 0); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Week 19 Burndown
        </div>
</div>
<div syle="display: flex; flex-wrap: wrap: gap: 10px;">
  <a href="http://127.0.0.1:4100/Srinaga_2025/about/" style = "text decoration: none;">
 <div style="background-color:rgb(157, 216, 18); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
      About Me 
        </div>
        </a>
</div>
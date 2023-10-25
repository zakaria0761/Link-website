<script>
export default {
  data() {
    return {
      websites: [
        {
          siteName: "website1",
          url: "#",
        },
        {
          siteName: "website2",
          url: "#",
        },
        {
          siteName: "website3",
          url: "#",
        },
        {
          siteName: "website4",
          url: "#",
        },
        {
          siteName: "website5",
          url: "#",
        },
      ],
      iconsUrl: [
        { tw: "https://twitter.com" },
        { dc: "https://discord.com" },
        { email: "mailto:aherrach@gmail.com" },
      ],
      iconeSize: "2x",
      showFrame: false,
      reShape: false,
      isPlaying: false,
    };
  },
  methods: {
    toggleVideo() {
      this.showFrame = !this.showFrame;
      if (this.reShape == false) {
        this.reShape = !this.reShape;
      } else {
        setTimeout(() => {
          this.reShape = !this.reShape;
        }, 500);
      }
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.$refs.myVideo.play();
      } else {
        this.$refs.myVideo.pause();
      }
    },
  },
};
</script>

<template lang="pug">
body
  .media
    img(src="https://via.placeholder.com/200x200/white", alt="")
    h1 Name
    h3 @Name
  .container
    a(class="not-icon-a" v-for="(website, index) in websites" :key="index" :href="website.url" )
      button.btn {{ website.siteName }}
    .video(:class="{ 're-shape': reShape }") video
      span(@click="toggleVideo"): font-awesome-icon(:icon="showFrame ? 'fa-solid fa-pause' : 'fa-solid fa-play'")
    .overlay.container2
        video(ref="myVideo" src="./assets/vids/video.mp4" volume="0.1" :class="{ show: showFrame, hide: !showFrame }") Your browser does not support this video try another browser.

    .iconses
      a(:href="iconsUrl[0].tw" target="_blank" class="icon"): font-awesome-icon(icon='fa-brands fa-twitter' :size= 'iconeSize')
      a(:href="iconsUrl[1].dc" target="_blank" class="icon"): font-awesome-icon(icon='fa-brands fa-discord' :size= 'iconeSize')
      a(:href="iconsUrl[2].email" class="icon"): font-awesome-icon(icon='fa-solid fa-at' :size= 'iconeSize')
    .copyright Created With Love By Zakaria Aherach
</template>

<style lang="scss" scoped>
$btn-color: #ecb998;
$icons: "icon";
$main-color: #f2d2bd;

body {
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  background-image: url("./assets/imgs/purple-black-background-369602-pixahive.webp");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center center; /* optional, center the image */
}

.media {
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 33.33%;
  min-width: 200px;
}
h1,
h3,
img {
  color: $main-color;
  border-radius: 100%;
}

.container {
  margin: 0 auto;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.not-icon-a {
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
  text-decoration: none;
  width: 50%;
}
.btn {
  background-color: $btn-color;
  border: none;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  border-radius: 30px;
  transition: all 0.5s;

  &:hover {
    background: rgba($btn-color, 0.7);
  }
}

.iconses {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.#{$icons} {
  padding: 10px;
  border: solid $main-color 2px;
  border-radius: 50%;
  color: $main-color;
  cursor: pointer;
  &:nth-child(2) {
    margin: 0 40px;
  }
}

.video {
  position: fixed;
  width: calc(32.2% - 12px);
  left: 20px;
  top: 70px;
  background-color: $btn-color;
  border: 6px solid #f2d2bd;
  border-radius: 30px 30px 30px 30px;
  height: 40px;
  transform: translateY(-100%);
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;
}
span {
  position: absolute;
  top: -7px;
  left: -5px;
  font-size: 23px;
  border: 2px solid white;
  background-color: white;
  color: $btn-color;
  border-radius: 50%;
  width: 50px; /* equal to height */
  height: 50px; /* equal to width */
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &:hover {
    border: 10px solid white;
    top: -18px;
    left: -10px;
    z-index: 999;
  }
}

.re-shape {
  height: 46px;
  border-bottom: none;
  border-radius: 30px 30px 0px 0px;
}

.container2 {
  position: fixed;
  width: 32.2%;
  left: 20px;
  top: 70px;
  height: 288px;
  overflow: hidden;
}

video {
  position: absolute;
  height: calc(100% - 6px);
  width: calc(100% - 12px);
  border: 6px solid #f2d2bd;
  border-top: none;
  background-color: black;
  transition: transform 0.5s ease;
}
video.show {
  transform: translate(0, 0%);
}
video.hide {
  transform: translate(0, -100%);
}
.copyright {
  color: $main-color;
  display: flex;
  justify-content: start;
  position: absolute;
  bottom: 0;
  left: 30px;
}
</style>

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cbac0b5f1241f630436e633aa2fed5fa"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f2093034.css",
    "revision": "b2c1b09766d3ea0b71cfa8c3afdcb2e9"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/State_deleted_1.e0756df1.png",
    "revision": "e0756df1521377b4480d9d4af8853b28"
  },
  {
    "url": "assets/img/State_deleted_2.aabd6741.png",
    "revision": "aabd67419925b041b9f799f1db704e31"
  },
  {
    "url": "assets/img/State_get.cb313376.png",
    "revision": "cb313376c90663ab7703fd95e63eba51"
  },
  {
    "url": "assets/img/State_post_1.50213342.png",
    "revision": "50213342aa6d6b617843b6dde7b04d4f"
  },
  {
    "url": "assets/img/State_post_2.bfd1cdd2.png",
    "revision": "bfd1cdd24425c3b51db2a43b556bc843"
  },
  {
    "url": "assets/img/State_post_3.313fd4f0.png",
    "revision": "313fd4f070cc1b4ce93a52c9d82edd6f"
  },
  {
    "url": "assets/img/State_put_1.4e351756.png",
    "revision": "4e351756dfb818b20df42e08cf8f73f4"
  },
  {
    "url": "assets/img/State_put_2.8fca2db8.png",
    "revision": "8fca2db8cb4924f8b63a795342a7394b"
  },
  {
    "url": "assets/img/Tabl.c76b1c94.png",
    "revision": "c76b1c9450fbcb7500ce553f1a725bf9"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.8c781048.js",
    "revision": "db8235256e68ad8a80680753658cdad9"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.c616848f.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.02544b64.js",
    "revision": "fbfd2fbd0a4495c98b631d9be0275b88"
  },
  {
    "url": "assets/js/18.5327cfed.js",
    "revision": "1fda4cdb7f32aae753f13ba919a4c339"
  },
  {
    "url": "assets/js/19.4fd2769d.js",
    "revision": "e009921b652d41ae8543d6c71aae58a2"
  },
  {
    "url": "assets/js/2.da7fd81e.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.d3fdac50.js",
    "revision": "0bbc4561ba8763513560fc045558437b"
  },
  {
    "url": "assets/js/22.33e1e7cf.js",
    "revision": "d8ae1fb33f12ce91091c338ff6f1b24d"
  },
  {
    "url": "assets/js/23.702d3985.js",
    "revision": "cb9d5d236b8887d607bb1ce270442e8c"
  },
  {
    "url": "assets/js/24.8c166692.js",
    "revision": "e141fcb997a8bcedca465ffc09d02f14"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.afbf6deb.js",
    "revision": "aa6b0cea2422fe2c38ebc7d7aae7dc22"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.125f3ffb.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.49a2d881.js",
    "revision": "ef2b486d979d235955dd3568d5e5a8d8"
  },
  {
    "url": "conclusion/index.html",
    "revision": "979ca7694f099ec97165377fd6050b69"
  },
  {
    "url": "design/index.html",
    "revision": "9d8460f714dfad4fd913e3680fd8bedf"
  },
  {
    "url": "index.html",
    "revision": "341881ecb38cbd750ef115cec27f3de4"
  },
  {
    "url": "intro/index.html",
    "revision": "7070c3d4c568e8d99fce27ea417f40d9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "41eb30b03b2fda0f6105516b3376ddee"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c96612827ee8cd775fba388a120a845d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b709c1becbf58355e95c7a0ab5e9136c"
  },
  {
    "url": "software/index.html",
    "revision": "a71eccee09bb3e00c449f078e8a20464"
  },
  {
    "url": "test/index.html",
    "revision": "58b27a3dbfba4b11ee4306a403bbe564"
  },
  {
    "url": "use cases/index.html",
    "revision": "4cb8ea9c9babb564bc865655ae59d0f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

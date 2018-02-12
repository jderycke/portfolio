importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/index.html",
    "revision": "bb78a8947ac6ce0c966a4d16d6fb774f"
  },
  {
    "url": "static/img/avatar-300x225.jpg",
    "revision": "c75e99481d2beedbe458630c62f3571b"
  },
  {
    "url": "static/img/avatar.jpg",
    "revision": "c75e99481d2beedbe458630c62f3571b"
  },
  {
    "url": "static/img/bg-error-lg.jpg",
    "revision": "b10e23da0287ad49b55f4e92a29ac76a"
  },
  {
    "url": "static/img/bg-error-md.jpg",
    "revision": "114fed8bcaf74a3cbd8823dd000cc40a"
  },
  {
    "url": "static/img/bg-lg-v2.jpg",
    "revision": "2bce56824f8b06a3b9f4a69d875304fb"
  },
  {
    "url": "static/img/bg-lg-v3.jpg",
    "revision": "6cc0cd2527f09448cc90a1e4de7b48b8"
  },
  {
    "url": "static/img/bg-md-v2.jpg",
    "revision": "6a350ae8c0fc6b2d7b4830c33551ae7f"
  },
  {
    "url": "static/img/bg-md-v3.jpg",
    "revision": "a3ffe8d9ae33e79d2c5fe651a0a2fe0b"
  },
  {
    "url": "static/img/bg-md.jpg",
    "revision": "e6cda97616bd5ddc28a2bf6a5e5992ce"
  },
  {
    "url": "static/img/favicon.png",
    "revision": "517c7e8ae363d0cc724881fcc9d984da"
  },
  {
    "url": "static/img/gallery/1.jpg",
    "revision": "7ff73636935eb7d05965bf8058bcc152"
  },
  {
    "url": "static/img/gallery/11.jpg",
    "revision": "d608da6fa91a73155c578b73964067c1"
  },
  {
    "url": "static/img/gallery/12.jpg",
    "revision": "8d147999ff276bbaafa6595350ea6c16"
  },
  {
    "url": "static/img/gallery/13.jpg",
    "revision": "c694927deae80634befadc099f9073fc"
  },
  {
    "url": "static/img/gallery/14.jpg",
    "revision": "8d0c28c361ed2538fb41dc040a435673"
  },
  {
    "url": "static/img/gallery/16.jpg",
    "revision": "18bca987b68a557a17346f057be7e50b"
  },
  {
    "url": "static/img/gallery/17.jpg",
    "revision": "4ff0b861d34b019c1795a28007d90918"
  },
  {
    "url": "static/img/gallery/18.jpg",
    "revision": "27885b0c76cdaed980f210e0e211d36d"
  },
  {
    "url": "static/img/gallery/19.jpg",
    "revision": "80d20f1c403be86e5de5d57488fd1a32"
  },
  {
    "url": "static/img/gallery/2.jpg",
    "revision": "561acfbaf17ecceb9a8f43d2c46d4a3f"
  },
  {
    "url": "static/img/gallery/20.jpg",
    "revision": "5f480a9579d49e51b522492d47fd0f53"
  },
  {
    "url": "static/img/gallery/21.jpg",
    "revision": "cc6fe3489ef64e31915d0cc57e633334"
  },
  {
    "url": "static/img/gallery/22.jpg",
    "revision": "3badb8639a8fd49740ae07a8564a8e5f"
  },
  {
    "url": "static/img/gallery/23.jpg",
    "revision": "28bc3666025d22cc41035fe854f6544c"
  },
  {
    "url": "static/img/gallery/24.jpg",
    "revision": "527031f4345c79d3cf64b816246f8f38"
  },
  {
    "url": "static/img/gallery/25.jpg",
    "revision": "15b73d4ccf37e716f892117fffb2d43b"
  },
  {
    "url": "static/img/gallery/26.jpg",
    "revision": "0f45410b57774fa503e1ee8674a1be04"
  },
  {
    "url": "static/img/gallery/27.jpg",
    "revision": "e6b42ab5e02f0f56cd04cd5b61d12b9c"
  },
  {
    "url": "static/img/gallery/28.jpg",
    "revision": "5f415c2d254b2a6403cadd6234759c47"
  },
  {
    "url": "static/img/gallery/29.jpg",
    "revision": "fb72653f7e11b5228c2273ea4c1c9528"
  },
  {
    "url": "static/img/gallery/3.jpg",
    "revision": "52fc2b1c82c4c8c0a0ed7ad8db406bf0"
  },
  {
    "url": "static/img/gallery/30.jpg",
    "revision": "ffd0371f48a20e59d95297da3877a5f3"
  },
  {
    "url": "static/img/gallery/31.jpg",
    "revision": "b864d529cf3b65e501f59f00caac5421"
  },
  {
    "url": "static/img/gallery/32.jpg",
    "revision": "fb1b4e050177b9a9d6a871bb1dbff635"
  },
  {
    "url": "static/img/gallery/33.jpg",
    "revision": "35762855722a7887a4941864546eed0d"
  },
  {
    "url": "static/img/gallery/34.jpg",
    "revision": "6f75532f75e2aec4ecae81fbb444d390"
  },
  {
    "url": "static/img/gallery/35.jpg",
    "revision": "b7e9ae08203c6549b9f2815055ec652f"
  },
  {
    "url": "static/img/gallery/36.jpg",
    "revision": "acbcea9c36145ec7f380d6e38eb4ae80"
  },
  {
    "url": "static/img/gallery/37.jpg",
    "revision": "8f071d41282588a9dd77b4f129f26280"
  },
  {
    "url": "static/img/gallery/38.jpg",
    "revision": "c68b49732ba3988cc32cd8a337cec115"
  },
  {
    "url": "static/img/gallery/39.jpg",
    "revision": "1aa78c51bd848b34d5ecefaa5cc4431c"
  },
  {
    "url": "static/img/gallery/4.jpg",
    "revision": "681215c5719f0bd828d1bb1734b049e9"
  },
  {
    "url": "static/img/gallery/40.jpg",
    "revision": "3d8f9a4005bd0bca17210074a62fa92b"
  },
  {
    "url": "static/img/gallery/41.jpg",
    "revision": "a828ad2eab50f4df8441543ecc5fcd60"
  },
  {
    "url": "static/img/gallery/42.jpg",
    "revision": "9664696a27b48d1f103a3f8a87200d76"
  },
  {
    "url": "static/img/gallery/43.jpg",
    "revision": "2e160f909c5a0f9ec54e8eef2e876a17"
  },
  {
    "url": "static/img/gallery/44.jpg",
    "revision": "715c483b9ac2fef6c578b9ed01cc2dd3"
  },
  {
    "url": "static/img/gallery/45.jpg",
    "revision": "f0ca86c0dcdac2d78801fe285d5a8a9c"
  },
  {
    "url": "static/img/gallery/46.jpg",
    "revision": "1b913950ace149c600094da776c1f525"
  },
  {
    "url": "static/img/gallery/47.jpg",
    "revision": "83bbccb560568e633834e70757cde709"
  },
  {
    "url": "static/img/gallery/5.jpg",
    "revision": "1652136bee8978cbd8563b8d5f4ebf31"
  },
  {
    "url": "static/img/gallery/6.jpg",
    "revision": "98ea25f3b985812289f635283bd745fa"
  },
  {
    "url": "static/img/gallery/7.jpg",
    "revision": "cbdc01f41b07b5619e2c81deae7a85f0"
  },
  {
    "url": "static/img/gallery/8.jpg",
    "revision": "9ba00c74428422c30a006940a03e5735"
  },
  {
    "url": "static/img/gallery/9.jpg",
    "revision": "6551e79bfbe85abfaccc7f3be0bfdcd4"
  },
  {
    "url": "static/img/logo114x114-alt.png",
    "revision": "a6dbff7de6ba062c06ab114fffb2d403"
  },
  {
    "url": "static/img/logo114x114.png",
    "revision": "e856ba8f55e18dce782cfa7a10fab312"
  },
  {
    "url": "static/img/logo42x42.png",
    "revision": "7e534a5f5d86758d524478a51d4fdace"
  },
  {
    "url": "static/img/logo57x57-alt.png",
    "revision": "a06671b16b03575b046c10d32a9050a0"
  },
  {
    "url": "static/img/logo57x57.png",
    "revision": "0fa42015133f38561946ea186804dca7"
  },
  {
    "url": "static/img/logo62x62.png",
    "revision": "124382fccdae1a000b8b620739400cc8"
  },
  {
    "url": "static/img/logo72x72-alt.png",
    "revision": "8f0dd3d2e9798bca76627e2b5e98277c"
  },
  {
    "url": "static/img/logo72x72.png",
    "revision": "9c2eeef88bbeb5d3669f87e9581ea2f6"
  },
  {
    "url": "static/img/portfolio/bethunter-home.png",
    "revision": "21835e97d04060d7a981dce25a8fcd1e"
  },
  {
    "url": "static/img/portfolio/lucindag-home.png",
    "revision": "dd2e9274eb249999a5a792fc7c25b025"
  },
  {
    "url": "static/img/portfolio/msmgroupcharitychallenge.png",
    "revision": "65c0fb53e007c12c2fb6c7167920a24c"
  },
  {
    "url": "static/img/wallpaper.png",
    "revision": "e4537d828bcd43e0367bc4969978ff2b"
  },
  {
    "url": "static/img/webp/avatar-300x225.webp",
    "revision": "11e07189d01fac6686b685ea4e726450"
  },
  {
    "url": "static/img/webp/avatar.webp",
    "revision": "11e07189d01fac6686b685ea4e726450"
  },
  {
    "url": "static/img/webp/bg-error-lg.webp",
    "revision": "3157f58daf47ce8d7e4ab1884dae6efe"
  },
  {
    "url": "static/img/webp/bg-error-md.webp",
    "revision": "598b1e9614aa863ba240c2b72567a471"
  },
  {
    "url": "static/img/webp/bg-lg-about.webp",
    "revision": "0e1afc13e399dcd87a142e78501da3e1"
  },
  {
    "url": "static/img/webp/bg-lg-v2.webp",
    "revision": "1721f2cc5f73649a15104e3cda9a70b6"
  },
  {
    "url": "static/img/webp/bg-lg-v3.webp",
    "revision": "67dd0c9df093fee5f64654bf50241788"
  },
  {
    "url": "static/img/webp/bg-md-v2.webp",
    "revision": "2c4b615b1704724620ce62176cf7e242"
  },
  {
    "url": "static/img/webp/bg-md-v3.webp",
    "revision": "11c5ca1734fe8596cfd3c6a4a4c93491"
  },
  {
    "url": "static/img/webp/bg-md.webp",
    "revision": "4446bce607df6216e2fed895a0a5ada1"
  },
  {
    "url": "static/img/webp/favicon.webp",
    "revision": "ff381fa0d9644a3e41c16c7f0655cc77"
  },
  {
    "url": "static/img/webp/gallery/1.webp",
    "revision": "7f97007a305746f39ffba8d9007c356f"
  },
  {
    "url": "static/img/webp/gallery/11.webp",
    "revision": "046ae89f61e9c59fb24ae852ba6cd6e5"
  },
  {
    "url": "static/img/webp/gallery/12.webp",
    "revision": "b58b9ca38ea0da9a3d7d795673ba96ca"
  },
  {
    "url": "static/img/webp/gallery/13.webp",
    "revision": "b4150ff434402d6fa9a0b4f13d93df3c"
  },
  {
    "url": "static/img/webp/gallery/14.webp",
    "revision": "b178b84778348500c01b22d9679edaf9"
  },
  {
    "url": "static/img/webp/gallery/16.webp",
    "revision": "59d774f18726c4b723d0f3e7a802dbb9"
  },
  {
    "url": "static/img/webp/gallery/17.webp",
    "revision": "7baa0d10189912a13c704996cc0844d9"
  },
  {
    "url": "static/img/webp/gallery/18.webp",
    "revision": "c2d87ed585be412aa53bc295a52e3917"
  },
  {
    "url": "static/img/webp/gallery/19.webp",
    "revision": "3de94b30616443f77e78bfe5d7f79a2b"
  },
  {
    "url": "static/img/webp/gallery/2.webp",
    "revision": "9320cb9f368bc7f5fdad486f9cfd206f"
  },
  {
    "url": "static/img/webp/gallery/20.webp",
    "revision": "8cd5edd1f39eb27c9fac45763647adab"
  },
  {
    "url": "static/img/webp/gallery/21.webp",
    "revision": "0be6ceb4a66ab76ee0cd34fe6b0566f8"
  },
  {
    "url": "static/img/webp/gallery/22.webp",
    "revision": "eea6a68eff8bb9b0f7ce2d89e665a5a2"
  },
  {
    "url": "static/img/webp/gallery/23.webp",
    "revision": "8ada88fdd32370c4138ed9d807cddd39"
  },
  {
    "url": "static/img/webp/gallery/24.webp",
    "revision": "e1d52ca6c25ea971689cea7bb1c7ede9"
  },
  {
    "url": "static/img/webp/gallery/25.webp",
    "revision": "efed9359d23d654d1e498b840aaaf19c"
  },
  {
    "url": "static/img/webp/gallery/26.webp",
    "revision": "7b8bfa195448a6d53977c50a12a32289"
  },
  {
    "url": "static/img/webp/gallery/27.webp",
    "revision": "c7b0f9a5df8abd720fb9675aa0e1d716"
  },
  {
    "url": "static/img/webp/gallery/28.webp",
    "revision": "ad0e6043ea621a33fab0d3c4cc07b2fd"
  },
  {
    "url": "static/img/webp/gallery/29.webp",
    "revision": "d51bb239870a1e2930c58221913593e3"
  },
  {
    "url": "static/img/webp/gallery/3.webp",
    "revision": "7d4cf184e8eb92592eccd5ea2498e385"
  },
  {
    "url": "static/img/webp/gallery/30.webp",
    "revision": "75d3d5767c84ce5253eab80db599f9ce"
  },
  {
    "url": "static/img/webp/gallery/31.webp",
    "revision": "95579fe6755d6dafd54dbf379962bc22"
  },
  {
    "url": "static/img/webp/gallery/32.webp",
    "revision": "aef9930538bdb4fa669e4829b960415b"
  },
  {
    "url": "static/img/webp/gallery/33.webp",
    "revision": "c88224122e6137c3027a7a0a573910f5"
  },
  {
    "url": "static/img/webp/gallery/34.webp",
    "revision": "e6b9b91b7e604dc55c10f0079ed54c95"
  },
  {
    "url": "static/img/webp/gallery/35.webp",
    "revision": "48eddcccfc62c3f39fa3caeaaa5a7d48"
  },
  {
    "url": "static/img/webp/gallery/36.webp",
    "revision": "2fded85a3c561a934249048962a992ad"
  },
  {
    "url": "static/img/webp/gallery/37.webp",
    "revision": "051daeb13db4ff13b8e3eb88894487c4"
  },
  {
    "url": "static/img/webp/gallery/38.webp",
    "revision": "f76895f355f8089fc2c4556059b27985"
  },
  {
    "url": "static/img/webp/gallery/39.webp",
    "revision": "c271be4e693cc37e6145bb0ec454aee9"
  },
  {
    "url": "static/img/webp/gallery/4.webp",
    "revision": "e6c92eb6624b935060ab2f6f60d59b45"
  },
  {
    "url": "static/img/webp/gallery/40.webp",
    "revision": "c0d28e340317728c53f6af4f3086d92f"
  },
  {
    "url": "static/img/webp/gallery/41.webp",
    "revision": "8eac158d9f2f5fe2cf40b301ad2f5660"
  },
  {
    "url": "static/img/webp/gallery/42.webp",
    "revision": "991ad065f3a89fbce72615589b1dc95a"
  },
  {
    "url": "static/img/webp/gallery/43.webp",
    "revision": "27e74aef8ba1428d4668d7446abcf89a"
  },
  {
    "url": "static/img/webp/gallery/44.webp",
    "revision": "0f22ed4a5012bdf264f4c631049970f3"
  },
  {
    "url": "static/img/webp/gallery/45.webp",
    "revision": "0cff76b9b45ccfbbdcb9839c57d45867"
  },
  {
    "url": "static/img/webp/gallery/46.webp",
    "revision": "48e3da793951f4a3e2e1be9732b5d398"
  },
  {
    "url": "static/img/webp/gallery/47.webp",
    "revision": "e76a1e19d5ec3bb590cf633907e65367"
  },
  {
    "url": "static/img/webp/gallery/5.webp",
    "revision": "706cae8228efe30461fae1e7e7d75223"
  },
  {
    "url": "static/img/webp/gallery/6.webp",
    "revision": "1d44bf39931faa8eebdffb8146d70723"
  },
  {
    "url": "static/img/webp/gallery/7.webp",
    "revision": "9d3efbeef648f667a2f3d50a76f1edfe"
  },
  {
    "url": "static/img/webp/gallery/8.webp",
    "revision": "5051a0b8cbbb644566080f0e5e25d796"
  },
  {
    "url": "static/img/webp/gallery/9.webp",
    "revision": "102eaddf3513d105b7ead03cde8d487d"
  },
  {
    "url": "static/img/webp/logo114x114-alt.webp",
    "revision": "44ceda3d16ac8cae3774e0fd899b5bf4"
  },
  {
    "url": "static/img/webp/logo114x114.webp",
    "revision": "ad46beb22a5b71dcf85a4f4174b1c2c4"
  },
  {
    "url": "static/img/webp/logo42x42.webp",
    "revision": "4ebc0cc57d9dfc8e552e2a315d23f22e"
  },
  {
    "url": "static/img/webp/logo57x57-alt.webp",
    "revision": "dabfe1a021a3ceb0fe290f2edc0f393f"
  },
  {
    "url": "static/img/webp/logo57x57.webp",
    "revision": "b7d9bb08e84569a3592aa84ad629f152"
  },
  {
    "url": "static/img/webp/logo62x62.webp",
    "revision": "a2403b9c72ce514c577aa3ac0467ce57"
  },
  {
    "url": "static/img/webp/logo72x72-alt.webp",
    "revision": "6b756dffcb6d00d2b77f17fbf3afe7c4"
  },
  {
    "url": "static/img/webp/logo72x72.webp",
    "revision": "f7a8908fbb335e8127bd37b87b304176"
  },
  {
    "url": "static/img/webp/portfolio/bethunter-home.webp",
    "revision": "aa5b4511c47f181be499fb72a3cc5745"
  },
  {
    "url": "static/img/webp/portfolio/lucindag-home.webp",
    "revision": "b242c9a309dc8cf1acfa70b2eb69848b"
  },
  {
    "url": "static/img/webp/portfolio/msmgroupcharitychallenge.webp",
    "revision": "56ecf6aeac3c9eae03c3e45444ea6635"
  },
  {
    "url": "static/img/webp/wallpaper.webp",
    "revision": "7cfd610cbb60267f991c389f482c6102"
  },
  {
    "url": "static/js/app.3f582a1a022feeb04f29.js",
    "revision": "a28d776f82c6211111b5d53a9d62d410"
  },
  {
    "url": "static/js/manifest.38973d44de7a81b7b3f1.js",
    "revision": "7ffabaa814e1d19881c88e4b0140f90a"
  },
  {
    "url": "static/js/vendor.166b38dfd0cb03413c0c.js",
    "revision": "87add80eaef2020b421c870d25bfc236"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);

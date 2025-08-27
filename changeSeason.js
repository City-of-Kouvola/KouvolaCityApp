const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (!args.length) {
  console.error('Usage: node copyContent.js <flag>');
  process.exit(1);
}

const splashScreenDirPathAndroid = "android/app/src/main/res/layout";
const splashScreenFileAndroid = splashScreenDirPathAndroid + "/launch_screen.xml";

const splashScreenFileIos = "ios/Launch_Screen.storyboard";

const bannerDirPath = "src/assets/img";
const bannerFile = bannerDirPath + "/banner.jpg";

const summerSplashScreenAndroid = splashScreenDirPathAndroid + "/launch_screen_summer.xml";
const summerSplashScreenIos = "ios/Launch_Screen_Summer.storyboard";
const summerBannerAndroid = bannerDirPath + "/banner_summer.jpg";

const winterSplashScreenAndroid = splashScreenDirPathAndroid + "/launch_screen_winter.xml";
const winterSplashScreenIos = "ios/Launch_Screen_Winter.storyboard";
const winterBannerAndroid = bannerDirPath + "/banner_winter.jpg";

const autumnSplashScreenAndroid = splashScreenDirPathAndroid + "/launch_screen_autumn.xml";
const autumnSplashScreenIos = "ios/Launch_Screen_Autumn.storyboard";
const autumnBannerAndroid = bannerDirPath + "/banner_autumn.jpg";

const season = args[0];

let splashScreenAndroid, splashScreenIos, banner;
if (season === '--winter') {
  splashScreenAndroid = winterSplashScreenAndroid;
  splashScreenIos = winterSplashScreenIos;
  banner = winterBannerAndroid;
} else if (season === '--summer') {
  splashScreenAndroid = summerSplashScreenAndroid;
  splashScreenIos = summerSplashScreenIos;
  banner = summerBannerAndroid;
} else if (season === '--autumn') {
  splashScreenAndroid = autumnSplashScreenAndroid;
  splashScreenIos = autumnSplashScreenIos;
  banner = autumnBannerAndroid;
}

fs.readFile(path.resolve(__dirname, banner), 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${splashScreenAndroid}:`, err);
    process.exit(1);
  }

  fs.copyFile(banner, bannerFile, (err) => {
    if (err) {
      console.error(`Error copying to banner.jpg:`, err);
      process.exit(1);
    }
  });
});

fs.readFile(path.resolve(__dirname, splashScreenAndroid), 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${splashScreenAndroid}:`, err);
    process.exit(1);
  }

  fs.writeFile(path.resolve(__dirname, splashScreenFileAndroid), data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to launch_screen.xml:`, err);
      process.exit(1);
    }
  });
});

fs.readFile(path.resolve(__dirname, splashScreenIos), 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${splashScreenIos}:`, err);
    process.exit(1);
  }
  
  fs.writeFile(path.resolve(__dirname, splashScreenFileIos), data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to launch_screen.xml:`, err);
      process.exit(1);
    }

    console.log("Changed theme successfully. Please restart the application for the splash screen to update");
  });
});

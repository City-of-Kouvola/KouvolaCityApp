const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (!args.length) {
  console.error('Usage: node copyContent.js <flag>');
  process.exit(1);
}

const launchScreenDirPath = "android/app/src/main/res/layout";
const launchScreenFile = launchScreenDirPath + "/launch_screen.xml";

const bannerDirPath = "src/assets/img";
const bannerFile = bannerDirPath + "/banner.jpg";

const summerSplashScreen = launchScreenDirPath + "/launch_screen_summer.xml";
const summerBanner = bannerDirPath + "/banner_summer.jpg";

const winterSplashScreen = launchScreenDirPath + "/launch_screen_winter.xml";
const winterBanner = bannerDirPath + "/banner_winter.jpg";

const season = args[0];

let splashScreen, banner;
if (season === '--winter') {
  splashScreen = winterSplashScreen;
  banner = winterBanner;
} else if (season === '--summer') {
  splashScreen = summerSplashScreen;
  banner = summerBanner;
}

fs.readFile(path.resolve(__dirname, banner), 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${splashScreen}:`, err);
    process.exit(1);
  }

  fs.copyFile(banner, bannerFile, (err) => {
    if (err) {
      console.error(`Error copying to banner.jpg:`, err);
      process.exit(1);
    }
  });
});

fs.readFile(path.resolve(__dirname, splashScreen), 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${splashScreen}:`, err);
    process.exit(1);
  }

  fs.writeFile(path.resolve(__dirname, launchScreenFile), data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to launch_screen.xml:`, err);
      process.exit(1);
    }

    console.info(`Changed theme successfully. Please restart the application for the splash screen to update`);
  });
});

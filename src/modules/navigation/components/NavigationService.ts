let navigator: any;

export function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

export function openDrawer() {
  navigator._navigation.openDrawer();
}

export function closeDrawer() {
  navigator._navigation.closeDrawer();
}

export function goBack() {
  navigator._navigation.goBack();
}

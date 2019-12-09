let navigator: any;

export function setTopLevelNavigator(navigatorRef: any): void {
  navigator = navigatorRef;
}

export function openDrawer(): void {
  navigator._navigation.openDrawer();
}

export function closeDrawer(): void {
  navigator._navigation.closeDrawer();
}

export function goBack(): void {
  navigator._navigation.goBack();
}

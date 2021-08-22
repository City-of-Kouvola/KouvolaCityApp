import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const generateOnCloseIconPressHandler = ({
  navigation,
}: Pick<DrawerContentComponentProps, 'navigation'>) => () => {
  navigation.closeDrawer();
};

import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const generateOnMenuIconPressHandler = ({
  navigation,
}: Pick<DrawerContentComponentProps, 'navigation'>) => () => {
  navigation.openDrawer();
};

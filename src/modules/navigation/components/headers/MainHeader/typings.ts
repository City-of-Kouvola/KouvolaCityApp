import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackHeaderProps } from '@react-navigation/stack';

export type TMainHeaderProps = Omit<StackHeaderProps, 'navigation'> & {
  navigation: DrawerContentComponentProps['navigation'] &
    StackHeaderProps['navigation'];
};

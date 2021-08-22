import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const generateOnBackIconPressHandler = ({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) => () => {
  navigation.canGoBack() && navigation.goBack();
};

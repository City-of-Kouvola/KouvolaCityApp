import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface Props {
  name: string;
}

const Test = (props: Props): JSX.Element => {
  const [name, setName] = useState<String>(props.name);

  useEffect(() => {
    setName('name');
  }, []);
  return (
    <View>
      <Text>{`Test ${name}`}</Text>
    </View>
  );
};

export default Test;

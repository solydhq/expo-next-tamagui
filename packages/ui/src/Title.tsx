import React from 'react';
import { Text } from 'tamagui';

type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Text fontSize="$8" fontWeight="bold" color="$color">
      {title}
    </Text>
  );
};

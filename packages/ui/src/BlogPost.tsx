import React from 'react';
import { Stack, Text, Image, Paragraph, YStack } from 'tamagui';

type BlogProps = {
  title: string;
  content: string;
  imageUrl: string;
};

export const BlogPost: React.FC<BlogProps> = ({ title, content, imageUrl }) => {
  return (
    <Stack
      backgroundColor="$background"
      borderRadius="$4"
      padding="$4"
      shadowColor="$shadowColor"
      shadowRadius="$4"
      width="100%"
      maxWidth={600}
      alignSelf="center"
    >
      {/* Blog Image */}
      <Image
        source={{ uri: imageUrl }}
        width="100%"
        height={200}
        borderRadius="$4"
        resizeMode="cover"
        alt="Blog image"
      />
      <YStack space="$3" marginTop="$4">
        {/* Blog Title */}
        <Text fontSize="$8" fontWeight="bold" color="$color">
          {title}
        </Text>

        {/* Blog Content */}
        <Paragraph fontSize="$4" color="$color">
          {content}
        </Paragraph>
      </YStack>
    </Stack>
  );
};

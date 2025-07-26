import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/ui/Button';

export default function Page() {
  return (
    <View className='flex bg-red-500 flex-1'>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-2xl font-bold'>Welcome to the App!</Text>
        <Text className='text-sm text-gray-600'>Footer Content</Text>
        <View>
          <Button>Details</Button>
        </View>
      </View>
    </View>
  );
}

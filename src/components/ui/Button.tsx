import { combineClass } from '@/utils/combineClass';
import type { ReactNode } from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  onPress,
  disabled = false,
}: ButtonProps) => {
  const combinedClass = combineClass(
    'bg-black px-4 py-2 rounded',
    disabled && 'opacity-50',
    className
  );

  return (
    <Pressable className={combinedClass} onPress={onPress} disabled={disabled}>
      <Text className='text-white text-center'>{children}</Text>
    </Pressable>
  );
};

import * as ShortInputComponents from './styles';
import * as Label from '@radix-ui/react-label';

export const ShortInput = () => {
  return (
    <ShortInputComponents.ShortInputContainer>
      <Label.Root>
        <ShortInputComponents.ShortInputLabel></ShortInputComponents.ShortInputLabel>
      </Label.Root>
      <ShortInputComponents.ShortInputInput />
    </ShortInputComponents.ShortInputContainer>
  );
};

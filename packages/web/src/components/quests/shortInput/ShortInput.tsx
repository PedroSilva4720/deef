import * as ShortInputComponents from './styles';
import { v4 as uuidV4 } from 'uuid';

export const ShortInput: React.FC<{ placeholder: string; label: string }> = ({
  placeholder,
  label,
}) => {
  const uuid = uuidV4();

  return (
    <ShortInputComponents.ShortInputContainer>
      <ShortInputComponents.ShortInputLabel htmlFor={uuid}>
        {label}
      </ShortInputComponents.ShortInputLabel>
      <ShortInputComponents.ShortInputInput
        id={uuid}
        placeholder={placeholder}
      />
    </ShortInputComponents.ShortInputContainer>
  );
};

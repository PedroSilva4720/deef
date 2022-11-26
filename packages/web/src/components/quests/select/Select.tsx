import * as SelectComponents from './style';
import { v4 as uuidV4 } from 'uuid';

export const Select: React.FC<{ options: string[]; label: string }> = ({
  options,
  label,
}) => {
  const uuid = uuidV4();
  return (
    <SelectComponents.SelectContainer>
      <SelectComponents.SelectLabel htmlFor={uuid}>
        {label}
      </SelectComponents.SelectLabel>
      <SelectComponents.SelectHtmlSelect id={uuid}>
        <SelectComponents.SelectOption selected disabled />
        {options.map((item: string) => {
          return (
            <SelectComponents.SelectOption
              value={item}
              key={item}
              children={item}
            />
          );
        })}
      </SelectComponents.SelectHtmlSelect>
    </SelectComponents.SelectContainer>
  );
};

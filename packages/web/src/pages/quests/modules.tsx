import { LongInput } from '../../components/quests/longInput/LongInput';
import { Rate } from '../../components/quests/rate/Rate';
import { Select } from '../../components/quests/select/Select';
import { ShortInput } from '../../components/quests/shortInput/ShortInput';

export const MapQuestType: React.FC<{
  label: string;
  type: string;
  setFunc: React.Dispatch<React.SetStateAction<any>>;
  content: string[];
  displayLabel: boolean;
  placeholder: string;
}> = (
  { label, type, setFunc, content, displayLabel = false, placeholder },
  ...props
) => {
  if (type == 'rate') {
    return (
      <>
        <Rate
          label={label}
          setFunction={setFunc}
          displayLabel={displayLabel}
          {...props}
        />
      </>
    );
  }
  if (type == 'select') {
    console.warn('Select component is disable indefinitely');
    return (
      <>
        {/* <Select
          label={label}
          setFunction={setFunc}
          options={content}
          displayLabel={displayLabel}
          placeholder={placeholder}
          {...props}
        /> */}
      </>
    );
  }
  if (type == 'shortInput') {
    return (
      <>
        <ShortInput
          label={label}
          setFunction={setFunc}
          displayLabel={displayLabel}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  }
  if (type == 'longInput') {
    return (
      <>
        <LongInput
          label={label}
          setFunction={setFunc}
          displayLabel={displayLabel}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  } else {
    return <></>;
  }
};

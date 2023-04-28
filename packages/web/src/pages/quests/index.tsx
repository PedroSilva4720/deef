import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { MapQuestType } from './modules';
import { getQuests } from './utils';
import * as QuestComponents from './styles';

interface IQuest {
  lastQuests: {
    name: string;
    type: 'rate' | 'select' | 'shortInput' | 'longInput';
    label: string;
    content: string[];
    placeholder: string;
  }[];
  companyName: string;
}

export const Quest: React.FC = () => {
  //TODO create system to save each quest value
  const { company } = useParams();
  const [data, setData] = useState();

  const [userResponse, setUserResponse] =
    useState<{ name: string; value: string }[]>();

  getQuests(company!).then(data => setData(data));

  const Quests = ({ data }: { data: IQuest | undefined }) => {
    if (data != undefined) {
      return (
        <>
          <QuestComponents.Form>
            {data.lastQuests.map((item, index) => {
              return (
                <div key={item.name}>
                  <MapQuestType
                    value={userResponse}
                    name={item.name}
                    label={item.label}
                    type={item.type}
                    setFunc={setUserResponse}
                    content={item.content}
                    placeholder={item.placeholder}
                    displayLabel
                  />
                </div>
              );
            })}
            <Button placeholder='Enviar' />
          </QuestComponents.Form>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Quests data={data} />
    </>
  );
};

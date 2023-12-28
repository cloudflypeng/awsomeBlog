import { wlAtom } from './wlJotai';
import { useAtom } from 'jotai';
import Card from './card';
import { List } from 'immutable';

const WorkList = () => {
  const [wlData, setValue] = useAtom(wlAtom);
  console.log('wlData :>> ', wlData);
  const save = (index, value) => {
    setValue(List(wlData).setIn([index], value).toJS());
  };
  const addGroup = () => {
    setValue(
      List(wlData)
        .push({
          name: '新组',
          list: [''],
        })
        .toJS()
    );
  };
  const delGroup = (i) => {
    setValue(List(wlData).delete(i).toJS());
  };

  return (
    <section className='relative grow min-h-screen px-5 gap-2 flex flex-wrap text-base font-mono mt-20 z-10'>
      {wlData?.map((topic, i) => {
        return (
          <Card
            key={topic.name + i}
            {...topic}
            onChange={(val) => save(i, val)}
            onDel={() => delGroup(i)}
          />
        );
      })}
      <section
        onClick={addGroup}
        className='w-70 min-h-80 h-80 card-base text-base justify-center items-center shadow-lg flex'
      >
        添加
      </section>
    </section>
  );
};

export default WorkList;

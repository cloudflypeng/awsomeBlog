/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useState } from 'react';
import { List } from 'immutable';

const Card = ({ name, list, onChange, onDel }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
  const form = useRef(null);

  const save = (ev) => {
    ev.preventDefault();
    let jsondata = {
      name: '',
      list: [],
    };
    let formdata = new FormData(form.current); // form为表单对象
    formdata.forEach((value, key) => {
      if (key === 'title') {
        jsondata.name = value;
      } else {
        value && jsondata.list.push(value);
      }
    });

    console.log('jsondata :>> ', jsondata);
    onChange?.(jsondata);
    // console.log('val :>> ', form.current);
    setIsEdit(false);
  };
  const edit = () => {
    setIsEdit(true);
    setData({ name, list });
  };
  const del = () => {
    onDel?.();
  };
  const addItem = (ev) => {
    ev.preventDefault();
    let newList = List(data.list).push('').toJS();

    setData({
      name: data.name,
      list: newList,
    });
  };
  const delItem = (index) => {
    let newList = List(data.list).delete(index).toJS();

    setData({
      name: data.name,
      list: newList,
    });
  };

  const openAll = () => {
    list.forEach((url) => {
      window.open(url);
    });
  };

  if (isEdit) {
    return (
      <section className='w-70 min-h-80 h-80 card-base text-base shadow-lg hover:shadow-2xl flex'>
        <form
          className='w-full grow-1 flex flex-col p-2'
          ref={form}
          onSubmit={save}
        >
          <div>
            <input
              name='title'
              defaultValue={name}
              className='text-base text-xl border-t-none border-s-none border-r-none
            border-b-orange-700 focus:outline-none bg-transparent grow'
            />
          </div>

          <div className='grow-1 gap-1'>
            {data.list?.map((url, index) => {
              return (
                <>
                  <input
                    key={index}
                    name='list-0'
                    defaultValue={url}
                    type='url'
                    className='text-base border-t-none border-s-none border-r-none
              border-b-orange-700 focus:outline-none bg-transparent grow my-2'
                  />
                  <a onClick={() => delItem(index)} className='text-sm link'>
                    删除
                  </a>
                </>
              );
            })}
            <div>
              <button onClick={addItem}>添加</button>
            </div>
          </div>
          <button type='submit'>保存</button>
        </form>
      </section>
    );
  }

  return (
    <section className='w-70 min-h-80 h-80 card-base text-base shadow-lg flex link' onClick={openAll}>
      <div className='w-full grow-1 flex flex-col p-2'>
        <div className='flex mb-2'>
          <div className='text-xl  font-sans'>{name}</div>
        </div>
        {/* 网址列表 */}
        <div className='grow-1 gap-1'>
          {list?.map((r, i) => (
            <a
              key={i}
              href={r}
              target='_blank'
              onClick={(e) => e.stopPropagation()}
              className='block w-4/5 link text-sm overflow-hidden text-ellipsis whitespace-nowrap opacity-30' rel="noreferrer"
            >
              {r}
            </a>
          ))}
        </div>
        <div className='text-sm opacity-80' onClick={(e) => e.stopPropagation()}>
          <a className='px-2 link' onClick={del}>
            del
          </a>
          <a className='px-2 link' onClick={edit}>
            edit
          </a>
          {/* <a className='px-2 link' onClick={openAll}>
            open
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Card;

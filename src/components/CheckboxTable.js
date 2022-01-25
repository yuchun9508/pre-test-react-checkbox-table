import { useState } from 'react';

import CheckboxItem from './CheckboxItem';

const CheckboxTable = () => {
  const [checkedIds, setCheckedIds] = useState([]);
  const [isShiftKeyDown, setIsShiftKeyDown] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const list = [
    {
      id: 1,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 2,
      text: '00-未派車',
      checkable: false,
    },
    {
      id: 3,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 4,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 5,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 6,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 7,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 8,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 9,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 10,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 11,
      text: '00-未派車',
      checkable: false,
    },
    {
      id: 12,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 13,
      text: '00-未派車',
      checkable: true,
    },
    {
      id: 14,
      text: '00-未派車',
      checkable: false,
    },
    {
      id: 15,
      text: '00-未派車',
      checkable: true,
    },
  ];

  const keyDownHandler = (event) => {
    if (event.code.includes('Shift')) {
      setIsShiftKeyDown(true);
    }
  };

  const keyUpHandler = (event) => {
    if (event.code.includes('Shift')) {
      setIsShiftKeyDown(false);
    }
  };

  const selectHandler = (id) => {
    if (isSelectAll) {
      setIsSelectAll(false);
    }

    if (isShiftKeyDown) {
      setCheckedIds((previousValue) => {
        const min = Math.min(...previousValue);
        const max = Math.max(...previousValue);
        let filteredItems = [];

        if (id < min) {
          filteredItems = list.filter(
            (item) => item.id <= min && item.id >= id && item.checkable
          );
        }
        if (id > max) {
          filteredItems = list.filter(
            (item) => item.id >= max && item.id <= id && item.checkable
          );
        }
        return filteredItems.map((item) => item.id);
      });
    } else {
      setCheckedIds((previousValue) => {
        if (previousValue.includes(id)) {
          return previousValue.filter((val) => val !== id);
        } else {
          return [...previousValue, id];
        }
      });
    }
  };

  const selectAllHandler = (event) => {
    setIsSelectAll(event.target.checked);
    if (event.target.checked) {
      const filteredItems = list.filter((item) => item.checkable);
      setCheckedIds(filteredItems.map((item) => item.id));
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <table onKeyDown={keyDownHandler} onKeyUp={keyUpHandler}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isSelectAll}
              onChange={selectAllHandler}
            />
          </th>
          <th>狀態</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <CheckboxItem
            key={item.id}
            id={item.id}
            text={item.text}
            checkable={item.checkable}
            isChecked={checkedIds.includes(item.id)}
            onSelect={selectHandler}
          ></CheckboxItem>
        ))}
      </tbody>
    </table>
  );
};

export default CheckboxTable;

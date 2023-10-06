import React, { useState } from 'react';
import TodoCard from './TodoCard';

function TodoList() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (newItem.trim() === '') {
      alert('Please enter an item');
      return;
    }

    const newItemObject = {
      id: Math.floor(Math.random() * 1000),
      value: newItem.trim(),
      isDone: false,
    };

    setItems((oldItems) => [...oldItems, newItemObject]);
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div className="w-[75%] lg:w-[50%]">
      <div className="bg-white rounded-xl h-12 flex items-center justify-between py-4 pl-4">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-grow mr-2 outline-none"
        />
        <button
          onClick={addItem}
          className="bg-[#50E3A4] text-white p-3 rounded-r-xl"
        >
          Add
        </button>
      </div>

      <div className="bg-white rounded-xl mt-6 px-6 py-4 flex flex-col">
        <ul className="flex flex-col gap-4">
          {items.length > 0 ? (
            items.map((item) => (
              <TodoCard
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                toggleItem={toggleItem}
              />
            ))
          ) : (
            <p>Nothing to do.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

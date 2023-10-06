import React from 'react';

function TodoCard({ item, deleteItem, toggleItem }) {
    return (
        <li key={item.id} className="flex items-center justify-between h-8">
            <div className="flex items-center" onClick={() => toggleItem(item.id)}>
                {item.isDone ? (
                    <>
                        <span className="text-green-500 mr-2">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                        </span>
                        <span className="flex-grow text-[#C2C2C2] line-through">{item.value}</span>
                    </>
                ) : (
                    <>
                        <span className="text-red-500 mr-2">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" /></svg>
                        </span>
                        <span className="flex-grow">{item.value}</span>
                    </>
                )}
            </div>
            <button onClick={() => deleteItem(item.id)}>🗑️</button>
        </li>
    );
}

export default TodoCard;
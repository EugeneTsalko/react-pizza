import React from 'react';

const Categories = ({ value, onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''} key={i}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

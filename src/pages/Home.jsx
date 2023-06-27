import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', type: 'rating' });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const sortBy = sortType.type.replace('-', '');
    const order = sortType.type.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    setIsLoading(true);
    fetch(
      `https://64760f5ce607ba4797dd3c3e.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) // это подходит только для статических массивов, но мокапи неверно работает поиском, потому так
    .map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onClickSortType={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;

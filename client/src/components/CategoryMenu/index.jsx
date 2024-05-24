import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  updateCategories as UPDATE_CATEGORIES,
  updateCurrentCategory as UPDATE_CURRENT_CATEGORY,
} from '../../app/store';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

function CategoryMenu() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.store);

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch(
        UPDATE_CATEGORIES({
          categories: categoryData.categories,
        })
      );
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch(
          UPDATE_CATEGORIES({
            categories: categories,
          })
        );
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch(
      UPDATE_CURRENT_CATEGORY({
        currentCategory: id,
      })
    );
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {store.categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          handleClick('');
        }}
      >
        All
      </button>
    </div>
  );
}

export default CategoryMenu;

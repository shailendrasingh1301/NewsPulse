import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNews} from '../../store/slices/newsSlice';
import {showFullScreenLoader} from '../../store/slices/commonSlice';

const useHomeController = () => {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = useCallback(async () => {
    dispatch(showFullScreenLoader(true));
    dispatch(
      getNews(
        null,
        data => {
          setNews(data?.articles);
          setFilteredNews(data?.articles);
          dispatch(showFullScreenLoader(false));
        },
        error => {
          alert(error);
          dispatch(showFullScreenLoader(false));
        },
      ),
    );
  }, []);

  const onRefresh = useCallback(async () => {
    fetchNews();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [dispatch]);

  useEffect(() => {
    const filtered = news.filter(item => {
      const titleMatches = item.title
        ? item.title.toLowerCase().includes(searchValue.toLowerCase())
        : false;
      const descriptionMatches = item.description
        ? item.description.toLowerCase().includes(searchValue.toLowerCase())
        : false;

      return titleMatches || descriptionMatches;
    });

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    setFilteredNews(sorted);
  }, [searchValue, news, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'newest' ? 'oldest' : 'newest'));
  };

  return {
    filteredNews,
    searchValue,
    refreshing,
    setSearchValue,
    toggleSortOrder,
    onRefresh,
  };
};

export default useHomeController;

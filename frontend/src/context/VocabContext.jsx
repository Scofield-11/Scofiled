import React, { createContext, useState, useCallback } from 'react';
import api from '../api/axiosConfig';

export const VocabContext = createContext();

export const VocabProvider = ({ children }) => {
  const [sets, setSets] = useState([]);
  const [allVocabs, setAllVocabs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;
  const [studyProgress, setStudyProgress] = useState(0);

  const [hasFetchedSets, setHasFetchedSets] = useState(false);
  const [hasFetchedVocabs, setHasFetchedVocabs] = useState(false);

  const fetchSets = useCallback(async (isLoadMore = false, forceRefresh = false) => {
    if (hasFetchedSets && !isLoadMore && !forceRefresh) return;
    if (!isLoadMore) setLoading(true);
    try {
      const currentSkip = isLoadMore ? (page + 1) * LIMIT : 0;
      const res = await api.get(`/sets?skip=${currentSkip}&limit=${LIMIT}`);
      if (isLoadMore) {
        setSets(prev => [...prev, ...res.data]);
        setPage(page + 1);
      } else {
        setSets(res.data);
        setPage(0);
      }
      setHasMore(res.data.length === LIMIT);
      setHasFetchedSets(true);
    } catch (error) {
      console.error("Lỗi khi tải danh sách học phần:", error);
    } finally {
      if (!isLoadMore) setLoading(false);
    }
  }, [hasFetchedSets, page]);

  const fetchAllVocabs = useCallback(async (forceRefresh = false) => {
    if (hasFetchedVocabs && !forceRefresh) return;
    setLoading(true);
    try {
      const res = await api.get('/vocabularies');
      setAllVocabs(res.data);
      setHasFetchedVocabs(true);
    } catch (error) {
      console.error("Lỗi khi tải tất cả từ vựng:", error);
    } finally {
      setLoading(false);
    }
  }, [hasFetchedVocabs]);

  return (
    <VocabContext.Provider value={{ sets, allVocabs, loading, fetchSets, fetchAllVocabs, hasMore, studyProgress, setStudyProgress }}>
      {children}
    </VocabContext.Provider>
  );
};
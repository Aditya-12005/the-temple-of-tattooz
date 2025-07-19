import { useState } from 'react';

const useGalleryVisibility = (initialCount = 3, maxCount = 12) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => setVisibleCount(maxCount);
  const showLess = () => setVisibleCount(initialCount);

  return {
    visibleCount,
    loadMore,
    showLess,
  };
};

export default useGalleryVisibility;
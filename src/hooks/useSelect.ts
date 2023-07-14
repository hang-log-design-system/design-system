import { useCallback, useState } from 'react';

const useSelect = () => {
  const [selected, setSelected] = useState('');

  const handleSelectClick = useCallback((selectorId: string) => {
    setSelected(selectorId);
  }, []);

  return { selected, handleSelectClick };
};

export default useSelect;

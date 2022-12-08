import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';

/**
 *
 * @param {we pass actions to bind them all using this custom hook} actions
 * @returns bind actions
 */

const useActions = (actions) => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};

export default useActions;

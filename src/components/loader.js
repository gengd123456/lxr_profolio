import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ finishLoading }) => {
  // 页面加载时立刻告诉外层“我已经加载完了”
  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  // 不渲染任何东西（没有 logo、没有遮罩）
  return null;
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;

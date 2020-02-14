import React from 'react';
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
  // 组件的内部状态
  return (
    <>
      <h1>{props.children}</h1>
      <h3>{props.desc}</h3>
    </>
  );
}
TodoHeader.propTypes = {
  desc: PropTypes.string
}
TodoHeader.defaultProps = {
  desc: '今日事今日毕'
}


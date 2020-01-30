import React, { Component } from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <a onClick={clickFunction}>{glyph}</a>
);

export default Arrow;

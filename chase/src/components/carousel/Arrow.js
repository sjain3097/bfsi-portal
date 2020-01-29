import React, { Component } from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <span onClick={clickFunction}>{glyph}</span>
);

export default Arrow;

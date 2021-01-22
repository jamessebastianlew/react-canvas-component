import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Canvas from './components/Canvas/Canvas';
import Grid, { pathFinder } from './classes/Grid/Grid';

const canvasWidth = document.body.clientWidth;
const canvasHeight = document.body.clientHeight;

console.log(document.body.canvasWidth);
ReactDOM.render(<Canvas draw={draw} width={canvasWidth} height={canvasHeight} />, document.getElementById('root'));

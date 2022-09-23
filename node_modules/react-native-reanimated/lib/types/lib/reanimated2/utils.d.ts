import { Component } from 'react';
import { RefObjectFunction } from './hook/commonTypes';
export interface ComponentCoords {
    x: number;
    y: number;
}
export declare function getRelativeCoords(parentRef: RefObjectFunction<Component>, x: number, y: number): ComponentCoords;

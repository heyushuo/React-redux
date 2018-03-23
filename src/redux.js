
//定义两个状态常量
export const ADD='ADD';
export const REMOVE='REMOVE'


//action
//处理加的操作
export function Add() {
	return {type:ADD}
}
//处理减的操作
export function Remove() {
	return {type:REMOVE}
}

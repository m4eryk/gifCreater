import {Action} from 'redux';

export interface IAction<T, P> extends Action<T> {
    payload?: P
}

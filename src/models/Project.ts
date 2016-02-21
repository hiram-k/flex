import * as Immutable from "immutable";
import { IProject } from '../StateModel';

export default class Project implements IProject
{
    private _items: Immutable.List<string>;
    
    constructor(items?: Immutable.List<string>)
    {
        this._items = items || Immutable.List<string>();
    }
    
    addItem(todo: string)
    {
        if (this._items.some(item => item == todo)) return this;
        return new Project(this._items.push(todo));
    }
    
    get items()
    {
        return this._items;
    }
}

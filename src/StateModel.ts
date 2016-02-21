import * as Immutable from "immutable";
import {IStateModel} from "./Presenter";

/**
 * StateModelから参照するModel。副作用のないもののみ返すこと。
 **/
export interface IProject
{
    items: Immutable.List<string>;
}

/**
 * 表示のための状態及びそれを変更するロジック
 * 「なにを表示するか」だけを管理し、「どう表示するか」はPresenterに一任する
 */
export default class StateModel implements IStateModel
{
    selected: Immutable.Set<number>;
    project: IProject;
    
    constructor()
    {
        this.selected = Immutable.Set<number>();
    }
    
    toggleSelect(index: number)
    {
        if (this.selected.has(index)) this.selected = this.selected.remove(index);
        else this.selected = this.selected.add(index);
    }
}

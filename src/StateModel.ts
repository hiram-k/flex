import {IStateModel} from "./Presenter";

/**
 * StateModelから参照するModel。副作用のないもののみ返すこと。
 **/
export interface IProject
{
}

/**
 * 表示のための状態及びそれを変更するロジック
 * 「なにを表示するか」だけを管理し、「どう表示するか」はPresenterに一任する
 */
export default class StateModel implements IStateModel
{
    project: IProject;
    temp: number;
    
    constructor()
    {
        this.temp = 0;
    }
    
    clickHoge()
    {
        this.temp = Math.round(Math.random() * 100);
    }
    
    get hoge()
    {
        return  "rgegergre";
    }
}

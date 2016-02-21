import Coordinator from "./Coordinator";
import {IProject} from "./StateModel";

export class IStateModel
{
    project: IProject;
    temp: number;
}

/**
 * StateModelをViewのために整形する。すべて副作用のない関数のみで構成される。
 * 「どう表示するか」を管理する。動的に変わるスタイルシートの適用などもここで。
 */
export default class Presenter
{
    constructor(private _state: IStateModel)
    {
    }
    
    get hoge()
    {
        return {
            props: {
                style: {cursor: "pointer"},
                onClick: () => Coordinator.onClickTest()
            },
            text: `point: ${this._state.temp}`
        };
    }
}

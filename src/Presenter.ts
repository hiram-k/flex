import * as React from "react";
import {Coordinator} from "./Coordinator";
import {IProject} from "./StateModel";

import {ItemComponentProps} from "./components/ItemComponent";

export class IStateModel
{
    project: IProject;
    selected: Immutable.Set<number>;
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
    
    get items(): ItemComponentProps[]
    {
        return this._state.project.items.map((item, index) => {
            return {
                text: item,
                index: index,
                selected: this._state.selected.has(index),
            };
        }).toArray();
    }
}

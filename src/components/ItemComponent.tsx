import * as React from "react";
import {Coordinator} from "../Coordinator";

export interface ItemComponentProps
{
    key?: string;
    index: number;
    text: string;
    selected: boolean;
}
export class ItemComponent extends React.Component<{key?: string, item: ItemComponentProps}, {}>
{
    render()
    {
        return this._render(this.props.item);
    }
    
    private _render(props: ItemComponentProps)
    {
        const style = props.selected ? {fontSize: "4em"} : {fontSize: "1em"};
        return (
            <li style = {style} onClick = {() => Coordinator.toggleSelect(props.index)} >
                {props.text}
            </li>
        );
    }
}

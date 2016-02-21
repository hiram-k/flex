import * as React from "react";
import {Coordinator} from "../Coordinator";
import Presenter from "../Presenter";

export interface ItemComponentProps
{
    key?: string;
    index: number;
    text: string;
    selected: boolean;
}
class ItemComponent extends React.Component<{key?: string, item: ItemComponentProps}, {}>
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

export default class RootComponent extends React.Component<{}, {presenter: Presenter}>
{
    componentWillMount()
    {
        const update = (p: Presenter) => this.setState({presenter: p})
        Coordinator.initialize(update);
    }
    
    public render()
    {
        return this._render(this.state.presenter);
    }
    
    private _render(presenter: Presenter)
    {
        const items = presenter.items.map(item => <ItemComponent key={item.text} item={item} />);
        return (
            <div>
                <input
                    onKeyDown={Coordinator.onKeyDownTodoInput}
                    onChange={Coordinator.onChangeTodoInput}
                    value={presenter.todoInput}
                />
                <input type="button" value="undo" onClick={() => Coordinator.undo()} />
                <input type="button" value="redo" onClick={() => Coordinator.redo()} />
                <ul>{items}</ul>
            </div>
        );        
    }
}

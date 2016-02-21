import * as React from "react";
import {Coordinator} from "../Coordinator";
import Presenter from "../Presenter";
import {ItemComponent} from "./ItemComponent";

class TodoInputTextBox extends React.Component<{}, {text: string}>
{
    componentWillMount()
    {
        this.setState({text: ""});
    }
    
    onChange(evt: any)
    {
        this.setState({text: evt.target.value});
    }
    
    onKeyDown(evt: any)
    {
        if (evt.key != "Enter") return;
        Coordinator.addTodo(this.state.text);
        this.setState({text: ""});
    }
    
    render()
    {
        return (
            <input
                onKeyDown={evt => this.onKeyDown(evt)}
                onChange={evt => this.onChange(evt)}
                value={this.state.text}
            />
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
                <TodoInputTextBox />
                <input type="button" value="undo" onClick={() => Coordinator.undo()} />
                <input type="button" value="redo" onClick={() => Coordinator.redo()} />
                <ul>{items}</ul>
            </div>
        );        
    }
}

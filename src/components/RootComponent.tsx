import * as React from "react";
import Coordinator from "../Coordinator";
import Presenter from "../Presenter";

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
        return (
            <p {...presenter.hoge.props}>
                {presenter.hoge.text}
            </p>
        );        
    }
}

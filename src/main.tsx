"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom";

class RootView extends React.Component<{}, {}>
{
    constructor()
    {
        super();
    }
    
    public componentDidMount()
    {
    }
    
    public render()
    {
        return (<div id="root">hello</div>)
    }
}

ReactDOM.render(<RootView />, document.getElementById("root-wrapper"));

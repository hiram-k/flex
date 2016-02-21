import * as React from "react";
import Project from "./models/Project";
import History from "./models/History";
import Presenter from "./Presenter";
import StateModel from './StateModel';

export namespace Coordinator
{
    let history: History<Project>;
    let state: StateModel;
    let applyState: () => void;
    
    export function initialize(update: (p: Presenter) => void)
    {
        const project = new Project();
        state = new StateModel();
        history = new History<Project>(project, p => state.project = p);
        state.project = project;
        let presenter = new Presenter(state);
        applyState = () => update(presenter);
        applyState();
    }
    
    export function addTodo(todo: string)
    {
        history.do(project => project.addItem(todo));
        applyState();
    }
    
    export function toggleSelect(index: number)
    {
        state.toggleSelect(index);
        applyState();
    }
    
    export function undo()
    {
        history.undo();
        applyState();
    }
    
    export function redo()
    {
        history.redo();
        applyState();
    }
}

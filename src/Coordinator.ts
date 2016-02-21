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
    
    export function onChangeTodoInput(evt: any)
    {
        state.todoInput = evt.target.value as string;
        applyState();
    }
    
    export function onKeyDownTodoInput(evt: any)
    {
        if (evt.key != "Enter") return;
        const todo = evt.target.value as string;
        history.do(project => project.addItem(todo));
        state.todoInput = "";
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

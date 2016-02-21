import * as Immutable from 'immutable';

export default class History<T>
{
    private _history: Immutable.Stack<T>;
    private _redoHistory: Immutable.Stack<T>;
    
    constructor(init: T, private _onChange?: (e: T) => void)
    {
        this._history = Immutable.Stack.of<T>(init);
        this._redoHistory = Immutable.Stack<T>();
    }
    
    do(command: (prev: T) => T)
    {
        const latest = command(this._history.first());
        this._history = this._history.push(latest);
        this._redoHistory = this._redoHistory.clear();
        this._onChange(latest);
    }
    
    undo()
    {
        if (!this.canUndo()) return;
        this._redoHistory = this._redoHistory.push(this._history.first());
        this._history = this._history.pop();
        const latest = this._history.first();
        this._onChange(latest);
    }
    
    redo()
    {
        if (!this.canRedo()) return;
        const latest = this._redoHistory.first();
        this._history = this._history.push(latest);
        this._redoHistory = this._redoHistory.pop();
        this._onChange(latest);
    }
    
    canUndo()
    {
        return this._history.size > 1;
    }
    
    canRedo()
    {
        return !this._redoHistory.isEmpty();
    }
}

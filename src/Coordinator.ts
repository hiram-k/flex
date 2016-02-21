import Project from "./models/Project";
import Presenter from "./Presenter";
import StateModel from './StateModel';

export default class Coordinator
{
    private static _project: Project;
    private static _state: StateModel;
    private static _presenter: Presenter;
    private static _update: () => void;
    
    public static initialize(update: (p: Presenter) => void)
    {
        this._project = new Project();
        this._state = new StateModel();
        this._state.project = this._project;
        this._presenter = new Presenter(this._state);
        this._update = () => update(this._presenter);
        this._update();
    }
    
    public static onClickTest()
    {
        this._state.clickHoge();
        this._update();
    }
}

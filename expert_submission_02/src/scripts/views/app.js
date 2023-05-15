import '../globals/appbar/appbar';
import DrawerInitiator from '../utils/drawer-initiator';
class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this.initApp();
    }

    initApp() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }
}
export default App;
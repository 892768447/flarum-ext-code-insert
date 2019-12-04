import SettingsModal from "flarum/components/SettingsModal";

export default class CodeSettingsModal extends SettingsModal {
    className() {
        return "Modal--small";
    }

    title() {
        return app.translator.trans("flarum-ext-code-insert.admin.title");
    }

    form() {
        return [
            <div className="Form-group">
                <label>
                    {app.translator.trans("flarum-ext-code-insert.admin.modes_label")}
                </label>
                <input
                    required
                    className="FormControl"
                    value="python,c_cpp,css,javascript"
                    bidi={this.setting("irony.code.insert.modes", "python,c_cpp,css,javascript")}
                />
            </div>
        ];
    }
}

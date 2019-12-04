import Modal from "flarum/components/Modal";
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';

export default class InsertCodeModal extends Modal {

    init() {
        super.init();
        this.currentMode = '';
    }

    className() {
        return 'InsertCodeModal Modal--large';
    }

    title() {
        return app.translator.trans('flarum-ext-code-insert.forum.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form-group">
                    <div id="irony-code-editor" className="Form-group" style="min-height: 300px;">
                    </div>
                </div>
                <div className="Form-group">
                    {Select.component({
                        style: 'unset',
                        options: this.props.modes,
                        value: '',
                        onchange: this.change.bind(this)
                    })}
                    {Button.component({
                        className: 'Button Button--primary',
                        type: 'button',
                        children: app.translator.trans('flarum-ext-code-insert.forum.insert'),
                        onclick: this.click.bind(this)
                    })}
                </div>
            </div>
        );
    }

    change(value) {
        this.currentMode = value;
        if (ace.require("ace/mode/" + value) == undefined) {
            $.getScript("//cdn.jsdelivr.net/gh/ajaxorg/ace-builds/src-min-noconflict/mode-" + value + ".js", () => {
                editor.session.setMode(new ace.require("ace/mode/" + value).Mode());
            });
        } else {
            editor.session.setMode(new ace.require("ace/mode/" + value).Mode());
        }
    }

    click() {
        console.log(this);
    }
}
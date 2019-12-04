import Modal from "flarum/components/Modal";
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';

export default class InsertCodeModal extends Modal {

    className() {
        return 'InsertCodeModal Modal--large';
    }

    title() {
        return app.translator.trans('flarum-ext-code-insert.forum.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Form-group">
                        <textarea id="irony-code-editor" className="FormControl" style="min-height: 300px;"/>
                    </div>
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button Button--primary',
                            type: 'button',
                            children: app.translator.trans('flarum-ext-code-insert.forum.insert'),
                            onclick: this.click.bind(this)
                        })}
                    </div>
                </div>
            </div>
        );
    }

    click() {
        const code = $('#irony-code-editor').val();
        if (code.length > 0) {
            this.props.textAreaObj.insertAtCursor('```\n' + code + '\n```');
        }
        this.hide();
    }
}
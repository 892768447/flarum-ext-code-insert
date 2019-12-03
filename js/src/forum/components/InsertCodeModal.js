import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class InsertCodeModal extends Modal {

    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('flarum-ext-code-insert.forum.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div id="irony-code-editor" className="Form-group">
                    </div>
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            children: app.translator.trans('flarum-ext-code-insert.forum.insert')
                        })}
                    </div>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();
    }
}
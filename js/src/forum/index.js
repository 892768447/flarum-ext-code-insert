import {extend} from "flarum/extend";
import app from 'flarum/app';
import Button from 'flarum/components/Button';
import TextEditor from "flarum/components/TextEditor";
import InsertCodeModal from "./components/InsertCodeModal";

app.initializers.add('irony-code-insert', app => {

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        // Not using the TextEditorButton component because the tooltip apparently won't go away once the picker is open
        let that = this;
        items.add('irony-code-insert', Button.component({
            onclick: () => {
                app.modal.show(new InsertCodeModal({textAreaObj: that}));
            },
            className: 'Button Button--icon Button--link',
            icon: 'fas fa-code',
            title: app.translator.trans('flarum-ext-code-insert.forum.title'),
        }));
    });


});

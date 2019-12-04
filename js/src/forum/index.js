import {extend} from "flarum/extend";
import app from 'flarum/app';
import Button from 'flarum/components/Button';
import TextEditor from "flarum/components/TextEditor";
import InsertCodeModal from "./components/InsertCodeModal";

app.initializers.add('irony-code-insert', app => {

    const _modes = [];
    (app.data['irony.code.insert.modes'] || 'python,c_cpp,css,javascript').split(',').forEach(function (value) {
        _modes[value] = value;
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        // Not using the TextEditorButton component because the tooltip apparently won't go away once the picker is open
        let textEditor = this;
        items.add('irony-code-insert', Button.component({
            onclick: () => {
                app.modal.show(new InsertCodeModal({textEditor: textEditor, modes: _modes}));
                let editor = ace.edit("irony-code-editor");
                if (app.session.user && app.session.user.preferences().fofNightMode) {
                    // 夜晚模式
                    editor.setTheme("ace/theme/tomorrow_night");
                } else {
                    editor.setTheme("ace/theme/tomorrow");
                }
            },
            className: 'Button Button--icon Button--link',
            icon: 'fas fa-code',
            title: app.translator.trans('flarum-ext-code-insert.forum.title'),
        }));
    });

    // 加载js文件
    $.getScript("//cdn.jsdelivr.net/gh/ajaxorg/ace-builds/src-min-noconflict/ace.js", () => {
        $.getScript("//cdn.jsdelivr.net/gh/ajaxorg/ace-builds/src-min-noconflict/theme-tomorrow.js");
        $.getScript("//cdn.jsdelivr.net/gh/ajaxorg/ace-builds/src-min-noconflict/theme-tomorrow_night.js");
    });

});

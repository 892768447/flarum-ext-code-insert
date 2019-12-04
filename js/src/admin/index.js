import app from 'flarum/app';

import CodeSettingsModal from './components/CodeSettingsModal';

app.initializers.add('irony-code-insert', app => {
    app.extensionSettings['irony-code-insert'] = () => app.modal.show(new CodeSettingsModal());
});
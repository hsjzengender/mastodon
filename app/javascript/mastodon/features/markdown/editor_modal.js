import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import PrivacyDropdownContainer from '../compose/containers/privacy_dropdown_container';
import MarkdownButtonContainer from './button_container';

import './editor_modal.scss';
import '@toast-ui/editor/dist/toastui-editor.css';

function stopKeyEvent(ev) {
  ev.stopPropagation();
};

// TODO: implement upload image to mastodon
// temporarily exclude image
// Full list: https://github.com/nhn/tui.editor/blob/fa775a995954f677c13a1d2e78d98df04df582ba/apps/editor/src/editorCore.ts#L135
const toolbarItems = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'task', 'indent', 'outdent'],
  // ['table', 'image', 'link'],
  ['table', 'link'],
  ['code', 'codeblock'],
  ['scrollSync'],
];

const MarkdownEditorModal = React.memo(function MarkdownEditorModal() {
  return (
    <div
      className='modal-root__modal markdown-editor-modal'
      tabIndex={-1}
      onKeyDown={stopKeyEvent}
      onKeyUp={stopKeyEvent}
      onKeyPress={stopKeyEvent}
    >
      <div className='markdown-editor-modal__content'>
        <div className='markdown-editor-modal__toolbar'>
          <div className='markdown-editor-modal__toolbar__buttons'>
            {/* <UploadButtonContainer /> */}
            {/* <PollButtonContainer /> */}
            <PrivacyDropdownContainer />
            {/* <SpoilerButtonContainer /> */}
            <MarkdownButtonContainer />
          </div>
          {/* <div className='character-counter__wrapper'><CharacterCounter max={500} text={this.getFulltextForCharacterCounting()} /></div> */}
        </div>
        <div className='markdown-editor-modal__editor-container'>
          <Editor
            height='100%'
            previewStyle='vertical'
            useCommandShortcut
            usageStatistics={false}
            toolbarItems={toolbarItems}
          />
        </div>
      </div>
    </div>
  );
});

export default MarkdownEditorModal;

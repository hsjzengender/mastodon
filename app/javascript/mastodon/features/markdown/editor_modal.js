/* eslint-disable react/prop-types */

import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import Button from '../../components/button';
import PrivacyDropdownContainer from '../compose/containers/privacy_dropdown_container';
import CharacterCounter from '../../features/compose/components/character_counter';
import MarkdownButtonContainer from './button_container';

import './editor_modal.scss';
import '@toast-ui/editor/dist/toastui-editor.css';

function stopKeyEvent(ev) {
  ev.stopPropagation();
}

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

const MarkdownEditorModal = React.memo(function MarkdownEditorModal({
  editorRef,
  initialMarkdown,
  publishText,
  handleSubmit,
  canSubmit,
  max,
  textForCharacterCounting,
  onEditorChange,
}) {
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
          <div className='markdown-editor-modal__toolbar__publish-area'>
            <div className='character-counter__wrapper'>
              <CharacterCounter max={max} text={textForCharacterCounting} />
            </div>
            <div className='compose-form__publish-button-wrapper'>
              <Button
                text={publishText}
                onClick={handleSubmit}
                disabled={!canSubmit}
                block
              />
            </div>
          </div>
        </div>
        <div className='markdown-editor-modal__editor-container'>
          <Editor
            ref={editorRef}
            initialValue={initialMarkdown}
            height='100%'
            previewStyle='vertical'
            useCommandShortcut
            usageStatistics={false}
            toolbarItems={toolbarItems}
            onChange={onEditorChange}
          />
        </div>
      </div>
    </div>
  );
});

export default MarkdownEditorModal;

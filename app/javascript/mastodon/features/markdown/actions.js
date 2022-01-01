import { changeComposing, changeMarkdown } from '../../actions/compose';
import { MarkdownRecord } from '../../reducers/compose';
import { openModal, closeModal } from '../../actions/modal';

const EditorModal = () =>
  import(
    /* webpackChunkName: "modals/markdown_editor_modal" */ './editor_modal'
  );

export function openMarkdownEditor() {
  return (dispatch) => {
    dispatch(changeMarkdown(new MarkdownRecord()));
    dispatch(changeComposing(true));
    dispatch(
      openModal(
        EditorModal,
        {},
        {
          onClose: () => dispatch(changeMarkdown(null)),
          className: 'markdown-editor-modal-root',
        },
      ),
    );
  };
}

export function closeMarkdownEditor() {
  return (dispatch) => {
    dispatch(changeMarkdown(null));
    dispatch(changeComposing(false));
    dispatch(closeModal(EditorModal));
  };
}

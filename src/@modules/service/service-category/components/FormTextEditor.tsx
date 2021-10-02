import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import { Editor } from "react-draft-wysiwyg"

const FormTextEditor = ({
	onEditorStateChange,
	editorState,
}: any) => {
	const wrapperStyle = {
		border: "1px solid #ededed",
	}
	const editorStyle = {
		height: "10rem",
		padding: "0.1rem 0.5rem",
	}

	return (
		<div>
			<Editor
				editorState={editorState}
				wrapperStyle={wrapperStyle}
				editorStyle={editorStyle}
				onEditorStateChange={onEditorStateChange}
			/>
		</div>
	)
}

export default FormTextEditor

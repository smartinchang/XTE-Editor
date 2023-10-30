<div class="mb-1 mt-2">
	<span id="editorButtons">
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('bold', null)"><i class="fa fa-bold"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('italic', null)"><i class="fa fa-italic"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('underline', null)"><i class="fa fa-underline"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('strikethrough', null)"><i class="fa fa-strikethrough"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('subscript', null)"><i class="fa fa-subscript"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('superscript', null)"><i class="fa fa-superscript"></i></div>|
		<select class="form-control-sm w-auto" onchange="edit('formatBlock',this.value)">
			<option value="H1">H1</option>
			<option value="H2">H2</option>
			<option value="H3">H3</option>
			<option value="H4">H4</option>
			<option value="H5">H5</option>
			<option value="H6">H6</option>
		</select>|
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('justifyLeft', null)"><i class="fa fa-align-left"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('justifyCenter', null)"><i class="fa fa-align-center"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('justifyRight', null)"><i class="fa fa-align-right"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('justifyFull', null)"><i class="fa fa-align-justify"></i></div>|
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('insertParagraph', null)"><i class="fa fa-paragraph"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('insertOrderedList', null)"><i class="fa fa-list-ol"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('insertUnorderedList', null)"><i class="fa fa-list-ul"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('indent', null)"><i class="fa fa-indent"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('outdent', null)"><i class="fa fa-outdent"></i></div>|
		<div class="btn btn-outline-secondary btn-sm" onclick="eLAMLoad()"><i class="fa fa-link"></i></div>
		<div class="btn btn-outline-secondary btn-sm" onclick="edit('unlink', null)"><i class="fa fa-unlink"></i></div>
		<!--<div class="btn btn-outline-secondary btn-sm" onclick="eIAMLoad()" data-bs-toggle="modal" data-bs-target="#editorImageAddModal"><i class="fa fa-image"></i></div>-->
		<div class="btn btn-outline-secondary btn-sm" onclick="eIAMLoad()"><i class="fa fa-image"></i></div>
		<div class="btn btn-outline-secondary btn-sm"><i class="fa fa-video"></i></div>|
	</span>
	<div class="btn btn-outline-secondary btn-sm" id="contentEditorType" onclick="contentEditorTypeChange()"><i class="fa fa-tags" title="chuyển sang chế độ soạn thảo thẻ lệnh"></i></div>
<div id="contentEditor" contentEditable="true" spellcheck="false" onblur="contentEditorChange()"></div>
<?php
	include("editor/editorLinkAddModal.inc");
	include("editor/editorLinkEditModal.inc");
	include("editor/editorImageAddModal.inc");
	include("editor/editorImageEditModal.inc");
?>
<script src="editor/editorScript.js"></script>
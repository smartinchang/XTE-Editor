<div class="modal" id="editorLinkAddModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Thêm liên kết</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="mb-3 mt-3">
					Liên kết:
					<input type="text" class="form-control" id="eLAMLink" name="eLAMLink" onchange="eLAMLinkChange()">
				</div>
				<div class="mb-3 mt-3">
					<input type="checkbox" id="eLAMTarget" name="eLAMTarget"> Mở ở một trang mới
				</div>
				<div class="alert alert-danger" id="eLAMMessage">Thông báo!</div>
			</div>
			<div class="modal-footer">
				<div class="btn btn-secondary" id="eLAMSubmit" onclick="eLAMSubmit()">Thêm</div>
			</div>
		</div>
	</div>
</div>
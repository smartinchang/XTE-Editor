<div class="modal" id="editorLinkEditModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Hiệu chỉnh liên kết</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="mb-3 mt-3">
					Liên kết:
					<input type="text" class="form-control" id="eLEMLink" name="eLEMLink" onchange="eLEMLinkChange()">
				</div>
				<div class="mb-3 mt-3">
					<input type="checkbox" id="eLEMTarget" name="eLEMTarget"> Mở ở một trang mới
				</div>
				<div class="alert alert-danger" id="eLEMMessage">Thông báo!</div>
			</div>
			<div class="modal-footer">
				<div class="btn btn-secondary" id="eLEMSubmit" onclick="eLEMSubmit()">Sửa</div>
			</div>
		</div>
	</div>
</div>
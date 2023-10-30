<div class="modal" id="editorImageEditModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Hiệu chỉnh hình ảnh</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="mb-3 mt-3">
					Liên kết:
					<input type="text" class="form-control" id="eIEMLink" name="eIEMLink" onchange="eIEMLinkChange()">
				</div>
				<div class="mb-3 mt-3">
						Điều chỉnh kích thước:
						<select id="eIEMSizeType" name="eIEMSizeType" class="form-select w-auto" onchange="eIEMSizeTypeChange()">
							<option value=0>Không điều chỉnh</option>
							<option value=1>Tự tương thích</option>
							<option value=2>Theo tỷ lệ</option>
							<option value=3>Giá trị tuyệt đối</option>
						</select>
				</div>
				<div class="mb-3 mt-3" id="eIEMSizeAbsolute">
					<div class="row">
						<div class="col-sm">
							Chiều rộng <i>(điểm ảnh)</i>:
							<input type="text" class="form-control" id="eIEMWidth" name="eIEMWidth">
						</div>
						<div class="col-sm">
							Chiều cao <i>(điểm ảnh)</i>:
							<input type="text" class="form-control" id="eIEMHeight" name="eIEMHeight">
						</div>
					</div>
				</div>
				<div class="mb-3 mt-3" id="eIEMSizeRate">
					<div class="row">
						<div class="col-sm">
							Tỷ lệ <i>(%)</i>:
							<input type="text" class="form-control" id="eIEMRate" name="eIEMRate">
						</div>
						<div class="col-sm"></div>
					</div>
				</div>
				<div class="alert alert-danger" id="eIEMMessage">Thông báo!</div>
			</div>
			<div class="modal-footer">
				<div class="btn btn-secondary" id="eIEMSubmit" onclick="eIEMSubmit()">Sửa</div>
			</div>
		</div>
	</div>
</div>
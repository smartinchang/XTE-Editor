<div class="modal" id="editorImageAddModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Thêm hình ảnh</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="mb-3 mt-3">
					Liên kết:
					<input type="text" class="form-control" id="eIAMLink" name="eIAMLink" onchange="eIAMLinkChange()">
				</div>
				<div class="mb-3 mt-3">
						Điều chỉnh kích thước:
						<select id="eIAMSizeType" name="eIAMSizeType" class="form-select w-auto" onchange="eIAMSizeTypeChange()">
							<option value=0>Không điều chỉnh</option>
							<option value=1>Tự tương thích</option>
							<option value=2>Theo tỷ lệ</option>
							<option value=3>Giá trị tuyệt đối</option>
						</select>
				</div>
				<div class="mb-3 mt-3" id="eIAMSizeAbsolute">
					<div class="row">
						<div class="col-sm">
							Chiều rộng <i>(điểm ảnh)</i>:
							<input type="text" class="form-control" id="eIAMWidth" name="eIAMWidth">
						</div>
						<div class="col-sm">
							Chiều cao <i>(điểm ảnh)</i>:
							<input type="text" class="form-control" id="eIAMHeight" name="eIAMHeight">
						</div>
					</div>
				</div>
				<div class="mb-3 mt-3" id="eIAMSizeRate">
					<div class="row">
						<div class="col-sm">
							Tỷ lệ <i>(%)</i>:
							<input type="text" class="form-control" id="eIAMRate" name="eIAMRate">
						</div>
						<div class="col-sm"></div>
					</div>
				</div>
				<div class="alert alert-danger" id="eIAMMessage">Thông báo!</div>
			</div>
			<div class="modal-footer">
				<div class="btn btn-secondary" id="eIAMSubmit" onclick="eIAMSubmit()">Thêm</div>
			</div>
		</div>
	</div>
</div>
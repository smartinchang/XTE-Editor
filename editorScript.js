const editableDiv = document.getElementById('contentEditor');
var selection;
var range;
var selectedText;
var links;
var images;
var editLink;
var editImage;

editableDiv.addEventListener('keyup', function(event) {
	if (event.keyCode === 13 && !event.shiftKey) {
		event.preventDefault();
		const currentContent = editableDiv.innerHTML;
		const newParagraph = document.createElement('p');
		editableDiv.appendChild(newParagraph);
	}
});

editLinks();
editImages();

function isCaretInEditor() {
	var selection = window.getSelection();
	if (selection.rangeCount > 0) {
		var range = selection.getRangeAt(0);
		var commonAncestorContainer = range.commonAncestorContainer;
		var caretInDiv = editableDiv.contains(commonAncestorContainer);
		return caretInDiv;
	} else {
		return false;
	}
}


function isExternalLink(link) {
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?([\/?].*)?$/;
  return urlPattern.test(link);
}

function editLinks() {
	links = document.getElementById('contentEditor').getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e) {
			e.preventDefault();
			editLink = this;
			var href = this.getAttribute('href');
			var target = this.getAttribute('target');
			$("#eLEMLink").val(href);
			if (target == "_blank") {
				document.getElementById("eLEMTarget").checked = true;
			} else {
				document.getElementById("eLEMTarget").checked = false;
			}
			$("#eLEMMessage").hide();
			$('#editorLinkEditModal').modal('show');
		});
	}
}

function edit(command, value) {
	if (isCaretInEditor()) {
		document.execCommand(command, false, value);
	}
}

function contentEditorTypeChange() {
	if ($("#contentEditorType").html() == '<i class="fa fa-desktop" title="chuyển sang chế độ soạn thảo đa năng"></i>') {
		$("#contentEditorType").html('<i class="fa fa-tags" title="chuyển sang chế độ soạn thảo thẻ lệnh"></i>');
		$("#contentEditor").html($("#contentEditor").text());
		$("#editorButtons").css('pointer-events','auto');
		editLinks();
		editImages();
	} else {
		$("#contentEditorType").html('<i class="fa fa-desktop" title="chuyển sang chế độ soạn thảo đa năng"></i>');
		$("#contentEditor").text($("#contentEditor").html());
		$("#editorButtons").css('pointer-events','none');
	}
}

function eLAMLoad() {
	if (isCaretInEditor()) {
		selection = window.getSelection();
		range = selection.getRangeAt(0);
		selectedText = window.getSelection().toString().trim();
		$("#eLAMLink").val("https://");
		document.getElementById("eLAMTarget").checked = false;
		$("#eLAMTarget").prop({disabled: true});
		$("#eLAMLink").focus();
		$("#eLAMMessage").hide();
		$("#eLAMSubmit").css('pointer-events','none');
		$('#editorLinkAddModal').modal('show');
	}
}

function eLAMLinkChange() {
	eLAMLink = $("#eLAMLink").val();
	eLAMLink = eLAMLink.replace(/ +/g, "");
	eLAMLink = eLAMLink.trim();
	$("#eLAMLink").val(eLAMLink);
	if (eLAMLink == "") {
		$("#eLAMLink").focus();
		$("#eLAMTarget").prop({disabled: true});
		$("#eLAMMessage").text("Vui lòng nhập liên kết!");
		$("#eLAMMessage").show();
		$("#eLAMSubmit").css('pointer-events','none');
	} else {
		if (isExternalLink(eLAMLink)) {
			$("#eLAMTarget").prop({disabled: false});
			$("#eLAMMessage").hide();
			$("#eLAMSubmit").css('pointer-events','auto');
		} else {
			$("#eLAMLink").focus();
			$("#eLAMTarget").prop({disabled: true});
			$("#eLAMMessage").text("Liên kết sai định dạng, vui lòng nhập lại!");
			$("#eLAMMessage").show();
			$("#eLAMSubmit").css('pointer-events','none');	
		}
	}
}

function eLAMSubmit() {
	range.deleteContents();
	var linkElement = document.createElement("a");
	linkElement.href = $("#eLAMLink").val();
	linkElement.textContent = selectedText;
	if (document.getElementById("eLAMTarget").checked) {
		linkElement.setAttribute('target','_blank');
	}
	range.insertNode(linkElement);
	$('#editorLinkAddModal').modal('hide');
	editLinks();
}

function eLEMLinkChange() {
	eLEMLink = $("#eLEMLink").val();
	eLEMLink = eLEMLink.replace(/ +/g, "");
	eLEMLink = eLEMLink.trim();
	$("#eLEMLink").val(eLEMLink);
	if (eLEMLink == "") {
		$("#eLEMLink").focus();
		$("#eLEMTarget").prop({disabled: true});
		$("#eLEMMessage").text("Vui lòng nhập liên kết!");
		$("#eLEMMessage").show();
		$("#eLEMSubmit").css('pointer-events','none');
	} else {
		if (isExternalLink(eLEMLink)) {
			$("#eLEMTarget").prop({disabled: false});
			$("#eLEMMessage").hide();
			$("#eLEMSubmit").css('pointer-events','auto');
		} else {
			$("#eLEMLink").focus();
			$("#eLEMTarget").prop({disabled: true});
			$("#eLEMMessage").text("Liên kết sai định dạng, vui lòng nhập lại!");
			$("#eLEMMessage").show();
			$("#eLEMSubmit").css('pointer-events','none');	
		}
	}
}

function eLEMSubmit() {
	editLink.setAttribute('href',$("#eLEMLink").val());
	if (document.getElementById("eLEMTarget").checked) {
		editLink.setAttribute('target','_blank');
	} else {
		editLink.setAttribute('target','');
	}
	$('#editorLinkEditModal').modal('hide');
	editLinks();
}

function eIAMLoad() {
	if (isCaretInEditor()) {
		selection = window.getSelection();
		range = selection.getRangeAt(0);
		$("#eIAMLink").val("");
		$("#eIAMLink").focus();
		$("#eIAMSizeType").val(0);
		$("#eIAMSizeType").prop({disabled: true});
		$("#eIAMWidth").val("");
		$("#eIAMHeight").val("");
		$("#eIAMSizeAbsolute").hide();
		$("#eIAMRate").val("");
		$("#eIAMSizeRate").hide();
		$("#eIAMMessage").hide();
		$("#eIAMSubmit").css('pointer-events','none');
		$('#editorImageAddModal').modal('show');
	}
}

function eIAMLinkChange() {
	eIAMLink = $("#eIAMLink").val();
	eIAMLink = eIAMLink.replace(/ +/g, "");
	eIAMLink = eIAMLink.trim();
	$("#eIAMLink").val(eIAMLink);
	if (eIAMLink == "") {
		$("#eIAMLink").focus();
		$("#eIAMSizeType").prop({disabled: true});
		$("#eIAMSizeAbsolute").hide();
		$("#eIAMMessage").text("Vui lòng nhập liên kết!");
		$("#eIAMMessage").show();
		$("#eIAMSubmit").css('pointer-events','none');
	} else {
		if (isExternalLink(eIAMLink)) {
			$("#eIAMSizeType").prop({disabled: false});
			$("#eIAMMessage").hide();
			$("#eIAMSubmit").css('pointer-events','auto');
		} else {
			$("#eIAMLink").focus();
			$("#eIAMSizeType").prop({disabled: true});
			$("#eIAMSizeAbsolute").hide();
			$("#eIAMMessage").text("Liên kết sai định dạng, vui lòng nhập lại!");
			$("#eIAMMessage").show();
			$("#eIAMSubmit").css('pointer-events','none');	
		}
	}
}

function eIAMSizeTypeChange() {
	if ($("#eIAMSizeType").val() < 2) {
		$("#eIAMSizeAbsolute").hide();
		$("#eIAMSizeRate").hide();
	} else if ($("#eIAMSizeType").val() == 2) {
		$("#eIAMSizeAbsolute").hide();
		$("#eIAMSizeRate").show();
	} else if ($("#eIAMSizeType").val() == 3) {
		$("#eIAMSizeAbsolute").show();
		$("#eIAMSizeRate").hide();
	}
}

function eIAMSubmit() {
	range.deleteContents();
	var imageElement = document.createElement("img");
	imageElement.src = $("#eIAMLink").val();
	if ($("#eIAMSizeType").val() == 1) {
		imageElement.setAttribute('class','img-fluid');
	} else if (($("#eIAMSizeType").val() == 2) && ($("#eIAMRate").val() != "")) {
		imageElement.setAttribute('width',$("#eIAMRate").val() + '%');
	} else if ($("#eIAMSizeType").val() == 3) {
		if ($("#eIAMWidth").val() != "") {
			imageElement.setAttribute('width',$("#eIAMWidth").val() + 'px');
		}
		if ($("#eIAMHeight").val() != "") {
			imageElement.setAttribute('height',$("#eIAMHeight").val() + 'px');
		}
	}
	range.insertNode(imageElement);
	$('#editorImageAddModal').modal('hide');
	editImages();
}

function isInString(subString,mainString) {
	return mainString.includes(subString);
}

function editImages() {
	images = document.getElementById('contentEditor').getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener('click', function(e) {
			e.preventDefault();
			editImage = this;
			var imageSrc = this.getAttribute('src');
			var imageClass = this.getAttribute('class');
			var imageWidth = this.getAttribute('width');
			var imageHeight = this.getAttribute('height');
			$("#eIEMLink").val(imageSrc);
			if ((imageWidth != null) && (imageWidth != "")) {
				if (isInString('px',imageWidth)) {
					$("#eIEMWidth").val(imageWidth);
					$("#eIEMHeight").val(imageHeight);
					$("#eIEMSizeType").val(3);
					$("#eIEMSizeAbsolute").show();
					$("#eIEMSizeRate").hide();
				} else if (isInString('%',imageWidth)) {
					$("#eIEMRate").val(imageWidth);
					$("#eIEMSizeType").val(2);
					$("#eIEMSizeAbsolute").hide();
					$("#eIEMSizeRate").show();
				}
			} else {
				if (imageClass == "img-fluid") {
					$("#eIEMSizeType").val(1);
				} else {
					$("#eIEMSizeType").val(0);
				}
				$("#eIEMSizeAbsolute").hide();
				$("#eIEMSizeRate").hide();
			}
			$("#eIEMMessage").hide();
			$('#editorImageEditModal').modal('show');
		});
	}
}

function eIEMLinkChange() {
	eIEMLink = $("#eIEMLink").val();
	eIEMLink = eIEMLink.replace(/ +/g, "");
	eIEMLink = eIEMLink.trim();
	$("#eIEMLink").val(eIEMLink);
	if (eIEMLink == "") {
		$("#eIEMLink").focus();
		$("#eIEMSizeType").prop({disabled: true});
		$("#eIEMSizeAbsolute").hide();
		$("#eIEMMessage").text("Vui lòng nhập liên kết!");
		$("#eIEMMessage").show();
		$("#eIEMSubmit").css('pointer-events','none');
	} else {
		if (isExternalLink(eIEMLink)) {
			$("#eIEMSizeType").prop({disabled: false});
			$("#eIEMMessage").hide();
			$("#eIEMSubmit").css('pointer-events','auto');
		} else {
			$("#eIEMLink").focus();
			$("#eIEMSizeType").prop({disabled: true});
			$("#eIEMSizeAbsolute").hide();
			$("#eIEMMessage").text("Liên kết sai định dạng, vui lòng nhập lại!");
			$("#eIEMMessage").show();
			$("#eIEMSubmit").css('pointer-events','none');	
		}
	}
}

function eIEMSizeTypeChange() {
	if ($("#eIEMSizeType").val() < 2) {
		$("#eIEMSizeAbsolute").hide();
		$("#eIEMSizeRate").hide();
	} else if ($("#eIEMSizeType").val() == 2) {
		$("#eIEMSizeAbsolute").hide();
		$("#eIEMSizeRate").show();
	} else if ($("#eIEMSizeType").val() == 3) {
		$("#eIEMSizeAbsolute").show();
		$("#eIEMSizeRate").hide();
	}
}

function eIEMSubmit() {
	editImage.setAttribute('src',$("#eIEMLink").val());
	console.log($("#eIEMRate").val());
	if ($("#eIEMSizeType").val() == 0) {
		editImage.removeAttribute('class');
		editImage.removeAttribute('width');
		editImage.removeAttribute('height');
	} else if ($("#eIEMSizeType").val() == 1) {
		editImage.setAttribute('class','img-fluid');
		editImage.removeAttribute('width');
		editImage.removeAttribute('height');
	} else if ($("#eIEMSizeType").val() == 2) {
		editImage.removeAttribute('class');
		editImage.setAttribute('width',$("#eIEMRate").val() + '%');
		editImage.removeAttribute('height');
	} else if ($("#eIEMSizeType").val() == 3) {
		editImage.removeAttribute('class');
		editImage.setAttribute('width',$("#eIEMWidth").val() + 'px');
		editImage.setAttribute('height',$("#eIEMHeight").val() + 'px');
	}
	$('#editorImageEditModal').modal('hide');
	editImages();
}

function contentEditorChange() {
	$('#editorContent').val($("#contentEditor").html());
}
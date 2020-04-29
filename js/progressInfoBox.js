

class ProgressInfoBox {

    constructor(parent, id = "progressInfoBox") {
        this.starting = null;
        this.message = "";
        this.percentage = 0;
        this.id = id;
        this.createInfoBox(parent);
    }

    start(msg = "Starting") {
        this.starting = new Date().getTime();
        this.message = msg;
        this.percentage = 0;
        var _this = this;
        setTimeout(function() {_this.showInfoBox();}, 500);
    }

    update(msg, percentage) {
        this.message = msg;
        this.percentage = percentage;
        this.updateInfoBox();
    }

    stop() {
        this.hideInfoBox();
    }

    createInfoBox(parent) {

        var html = '<div id="' + this.id + '" class="modal" tabindex="-1" role="dialog"> \
                    <div class="modal-dialog" role="document"> \
                        <div class="modal-content"> \
                        <div class="modal-header"> \
                            <h5 class="modal-title">Loading...</h5> \
                        </div> \
                        <div class="modal-body"> \
                            <div class="msg"></div>\
                            <div class="progress"> \
                                <div class="progress-bar" style="width: 0%;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                        </div> \
                        </div> \
                    </div> \
                </div>';
        $(parent).append(html);
        $("#" + this.id).modal({backdrop: false, show: false});
    }

    updateInfoBox() {
        $("#" + this.id + " .msg").html(this.message);
        $("#" + this.id + " .progress-bar").width(this.percentage + "%");
    }

    hideInfoBox() {
        $("#" + this.id).modal("hide");
    }

    showInfoBox() {
        if (this.starting != null) {
            $("#" + this.id).modal("show");
        }
    }

};

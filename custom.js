jQuery(document).ready(function(){
    jQuery(".add_test").click(function(){
        var test_name = jQuery(".test_name").val();
        var test_category = jQuery(".test_category").val();

        console.log(test_name);
        console.log(test_category);

        var test_clone = '\
            <div class="row">\
                <div class="col-md-12">\
                    <div class="form-group row">\
                        <div class="col-md-5">\
                            <label for="">Test name *</label>\
                        </div>\
                        <div class="col-md-7">\
                            <input type="text" class="test_name form-control form-control-sm">\
                        </div>\
                    </div>\
                    <div class="form-group row">\
                        <div class="col-md-5">\
                            <label for="">Test Category *</label>\
                        </div>\
                        <div class="col-md-7">\
                            <input type="text" class="test_category form-control form-control-sm">\
                        </div>\
                    </div>\
                </div>\
            </div>\
        ';
        jQuery("#test_data").append(test_clone);
        // alert("OK");

    });

    jQuery(".add_medecine").click(function(){
        var medecine_clone = '\
            <div class="row">\
                <div class="col-md-4">\
                    <div class="form-group row">\
                        <label\
                            class="col-sm-5 col-form-label col-form-label-sm pl-4 text-dark text-left ">Medicine\
                            Name*</label>\
                        <div class="col-sm-7 pl-4">\
                            <input type="text" class="patient_name form-control form-control-sm"\
                                name="patient_name" required>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-3">\
                    <div class="form-group row">\
                        <label\
                            class="col-sm-4 col-form-label col-form-label-sm pl-4 text-dark text-left ">Dose*</label>\
                        <div class="col-sm-8 pl-4">\
                            <input type="text" class="patient_name form-control form-control-sm"\
                                name="patient_name" required>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-2">\
                    <div class="form-group row">\
                        <label\
                            class="col-sm-4 col-form-label col-form-label-sm pl-4 text-dark text-left ">Course*</label>\
                        <div class="col-sm-8 pl-4">\
                            <input type="text" class="patient_name form-control form-control-sm"\
                                name="patient_name" required>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-3">\
                    <div class="form-group row">\
                        <label\
                            class="col-sm-5 col-form-label col-form-label-sm pl-4 text-dark text-left ">Parameter*</label>\
                        <div class="col-sm-7 pl-4">\
                            <select name="status" class="status form-control form-control-sm" required>\
                                <option value="">Select Status</option>\
                                <option value="1" class="">চলবে</option>\
                                <option value="2" class="">দিন</option>\
                                <option value="3" class="">মাস</option>\
                            </select>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        ';
        jQuery("#medecine_data").append(medecine_clone);
    });
});
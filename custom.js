jQuery(document).ready(function(){
    
    var med_sl = 1;
    var test_sl = 1;

    jQuery(".add_test").click(function(){
        var test_name = jQuery(".test_name").val();
        var test_category = jQuery(".test_category").val();

        console.log(test_name);
        console.log(test_category);

        var test_clone = '\
            <div class="row">\
                <div class="col-md-1">\
                    <p class="text-end"><i class="fa-sharp fa-solid fa-syringe"></i></p>\
                </div>\
                <div class="col-md-9">\
                    <div class="row">\
                        <div class="col-md-12">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <input type="text" class="form-control form-control-sm" placeholder="Test Name">\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-12">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <input type="text" class="form-control form-control-sm" placeholder="Test category">\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-1">\
                    <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>\
                </div>\
            </div>\
        ';
        jQuery("#test_data").append(test_clone);
        // alert("OK");

    });
    
    jQuery(".add_medecine").click(function(){
        var medecine_clone = '\
            <div class="ml-3 row">\
                <div class="col-md-1">\
                <i class="fa-solid fa-pills"></i>\
                </div>\
                <div class="col-md-10">\
                    <div class="row">\
                        <div class="col-md-6">\
                            <div class="form-group row">\
                                <div class="col-md-10">\
                                    <input type="text" class="form-control form-control-sm" placeholder="Medecine Name">\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-3">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <input type="text" class="form-control form-control-sm" placeholder="">\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-3">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <select name="status" class="status form-control form-control-sm" required>\
                                        <option value="1" class="">দিন</option>\
                                        <option value="2" class="">চলবে</option>\
                                        <option value="3" class="">মাস</option>\
                                    </select>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="col-md-5">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <select name="status" class="status form-control form-control-sm" required>\
                                        <option value="1" class=""> 1 + 1 + 1 </option>\
                                        <option value="2" class=""> 1 + 0 + 1 </option>\
                                        <option value="4" class=""> 1 + 0 + 0 </option>\
                                        <option value="5" class=""> 0 + 0 + 1 </option>\
                                        <option value="6" class=""> 1 + 1 + 1 + 1 </option>\
                                    </select>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-5">\
                            <div class="form-group row">\
                                <div class="col-md-12">\
                                    <select name="status" class="status form-control form-control-sm" required>\
                                        <option value="1" class=""> খাবার আগে </option>\
                                        <option value="2" class="">খাবার পরে</option>\
                                    </select>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md-1">\
                    <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>\
                </div>\
            </div>\
        ';
        jQuery("#medecine_data").append(medecine_clone);
    });
    // jQuery("#print-btn").click(function(){
    //     alert("Working");
    // });
    jQuery(".print_btn").click(function(){
        window.print();
    });

});

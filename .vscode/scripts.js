
jQuery.fn.extend({
    /**
     *
     * @param {boolean} lastValue - set to true will return only the last value found, false if you want all values. true by default.
     *
     * Returns get parameters.
     *
     * If the desired param does not exist, null will be returned
     *
     * To get the document params:
     * @example value = $(document).getUrlParam("paramName");
     *
     * To get the params of a html-attribut (uses src attribute)
     * @example value = $('#imgLink').getUrlParam("paramName");
     */
    getUrlParam: function(strParamName, lastValue = true){
        strParamName = decodeURIComponent(strParamName);

        var returnVal = new Array();
        var qString = null;

        if ($(this).attr("nodeName") == "#document") {
            //document-handler
            if (window.location.search.search(strParamName) > -1 ){
                qString = window.location.search.substr(1, window.location.search.length).split("&");
            }
        } else if ($(this).attr("src") !== undefined) {
            var strHref = $(this).attr("src");
            if ( strHref.indexOf("?") > -1 ){
                var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
                qString = strQueryString.split("&");
            }
        } else if ($(this).attr("href") !== undefined) {
            var strHref = $(this).attr("href");
            if ( strHref.indexOf("?") > -1 ){
                var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
                qString = strQueryString.split("&");
            }
        } else {
            return null;
        }

        if (qString == null) return null;

        for (var i = 0; i < qString.length; i++){
            var args = qString[i].split("=");
            if (decodeURIComponent(args[0]) == strParamName){
                returnVal.push(args[1] === undefined ? null : decodeURIComponent(args[1]));
            }
        }

        return returnVal.length == 0 ? null : returnVal.length == 1 ? returnVal[0] : lastValue ? returnVal[returnVal.length - 1] : returnVal;
    }
});

function installSuccess(){
    console.log('install success');

    updateInstallSuccess();
    ga('send', 'event', 'Signup', 'Install', window.location.pathname);
    /*try{
        __adroll.record_user({"adroll_segments": "15b34827"})
    } catch(err) {}*/
}
function installFail(e){
    console.log('install fail');
    console.log(e);
}
navigator.browserInfo= (function(){
    var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return { 'browser': M[0], 'version': M[1] };
})();


function formsetup(){

    $.get('https://api.ipify.org?format=json', function(r){
        //console.log(r);
        ip = r.ip;
        $.ajax({
            type: "POST",
            url: kixie.domain+"/rest/functions.php",
            cache: false,
            data: {
                "call":'getIPdetails',
                "ip": ip
            },
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    determinedCC = data.country_code;
                    $('#country-code').val(determinedCC);
                }
            }
        });
    });

    jQuery.validator.addMethod("intlPhone", function(value, element) {
        //console.log(params);
        var phone = $("#contactFormInline2 #dphone").val();
        var cc = $("#contactFormInline2 #country-code").val();
        value = isValidNumber(phone , cc);
        console.log( phone +' '+ cc + value );

        return this.optional(element) || value ;
    }, jQuery.validator.format("Verify phone number format for country"));

    var contactforminline = $("#contactFormInline2");
    //url = contactform.attr("action");

    console.log(formatE164($("#contactFormInline2 #country-code").val(),$("#contactFormInline2 #dphone").val()));
    contactforminline.validate({
        /*errorPlacement: function(label, element) {
         label.addClass('arrow');
         label.insertAfter(element);
         },*/


        focusCleanup: true,
        submitHandler: function(form) {
            $('#signupModalSubmit').on('show.bs.modal', function (event) {
                    $('#defaultModalLabel').text('Generating your Download');
            });

            // Loading State
            var submitButton = $(this.submitButton);
            submitButton.text("Processing");
            $('#signupModalSubmit').modal({show:true, backdrop:'static'});
            $('#signupModalSubmit .modal-body').html('<img src="site-includes/img/tenor.gif">');

            var timezone = jstz.determine();
            var timezonename = timezone.name();
            var sem = "no";
            var kw = $(document).getUrlParam("kw");
            var gclid = $(document).getUrlParam("gclid");
            var n =$(document).getUrlParam("n");
            var c =$(document).getUrlParam("c");
            var a =$(document).getUrlParam("a");
            if(c == null){c='';}
            if(a == null){a='';}
            if(kw == null){
                kw = "";
            }else{
                sem ="yes";
            }
            if(gclid != null && sem=="no"){
                sem = "display";
            }
            switch(n){
                case 'd':
                    n='display';
                    break;
                case 'g':
                    n = 'google search';
                    break;
                case 's':
                    n = 'google search partner';
                    break;
                default:
                    n='';
                    break;
            }
            var utm='';
            if(typeof window.utm_source !=='undefined') {
                 utm = window.utm_source;
            }

            var l = location.pathname.split('.');
            l = l[0].replace('-','');
            l.replace('_','');
            var cT = '';
            grecaptcha.execute('6Le8J7EUAAAAAIWsoUX28kha-XGaNUcTcafUgDtu', {action: `S${l}`}).then(function(token) {
                    console.log('action token:'+ token);
                    console.log(`S${l}`);
                    cT=token;
            // Ajax Submit
                $.ajax({
                type: "POST",
                url: kixie.domain+"/rest/functions.php",
                cache: false,
                data: {
                    "call":'signupform2',
                    "name": $("#contactFormInline2 #dname").val(),
                    "email": $("#contactFormInline2 #demail").val(),
                    "password": $("#contactFormInline2 #dpass").val(),
                    "subject": 'general install '+window.location.pathname +' '+window.kixie.pricing,
                    "country": $("#contactFormInline2 #country-code").val(),
                    "phone": formatE164($("#contactFormInline2 #country-code").val(),$("#contactFormInline2 #dphone").val()),
                    "timezone": timezonename,
                    "message": 'General Install '+window.kixie.pricing,
                    "ip": ip,
                    "browser":navigator.browserInfo.browser,
                    "browserVersion":navigator.browserInfo.version,
                    "network":n,
                    "campaignid":c,
                    "adgroupid":a,
                    "sem": sem,
                    "kw": kw,
                    "utm":utm,
                    "cT":cT,
                    "utm": utm
                },
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        ga('send', 'event', 'Signup', 'Submit', window.location.pathname);
                        window.kdata = data.data;
                        console.log(window.kdata);
                        if(typeof window.utm_source !=='undefined') {
                            switch (window.utm_source.toLowerCase()) {
                                case 'facebook':
                                    console.log('facebook');
                                    window.fbq('track', 'CompleteRegistration');
                                    console.log(typeof window.fbq);
                                    break;
                                case 'linkedin':
                                    console.log('linkedin');
                                    var imgtag = document.createElement('img');
                                    imgtag.height = '1';
                                    imgtag.width = '1';
                                    imgtag.style = 'border-style:none';
                                    imgtag.alt = '';
                                    imgtag.src = 'https://dc.ads.linkedin.com/collect/?pid=178100&conversionId=226740&fmt=gif';
                                    break;
                            }
                        }
                        $("#contactSuccess").removeClass("hidden");
                        $("#contactError").addClass("hidden");

                        // Reset Form
                        $("#contactFormInline2 .form-control")
                            .val();
                        $('#contactFormInline2').remove();
                        var out = '<div class="row"><div class="col-md-offset-3 col-md-6">';
                        if(navigator.browserInfo.browser == 'Chrome'){
                            out += '<a class="btn btn-success btn-lg" style="width:100%;margin-bottom:25px;" target="_blank" href="'+window.kixie.download+'" id="chrome-install-button">Set up Phone</a>';}
                            //onclick="chrome.webstore.install(\'https://chrome.google.com/webstore/detail/'+inlineAppID+'\', installSuccess, installFail);return false;"
                        else {
                            out += '<h3>Next Steps</h3>';
                            out += '<ol>';
                            out += '<li>Open Chrome (or download <a target="_blank" href="https://www.google.com/chrome/">here</a>)</li>';
                            out += '<li>Install <a href="https://chrome.google.com/webstore/detail/'+inlineAppID+'">Kixie Extension for Chrome</a></li>';
                            out += '<li>Log in using the credentials you just created</li>';
                            out += '</ol>';
                        }
                        out += '</div></div>';

                        $('#signupModalSubmit .modal-body').html(out);
                        $("#contactcontainer").html(out);

                    } else {

                        $("#contactError").removeClass("hidden");
                        $("#contactSuccess").addClass("hidden");
                        $("#contactError").html(data.message);
                        out = '<div class="alert alert-danger text-center">'+data.message+'</div>';
                        $('#signupModalSubmit .modal-body').html(out);
                    }
                },
                complete: function () {
                    submitButton.button("reset");
                }
            });
            });
        },
        rules: {
            dname: {
                required: true
            },
            demail: {
                required: true,
                email: true
            },
            dphone: {
                required: true,
                intlPhone: true
            }
        },
        highlight: function (element) {

        },
        success: function (element) {
            console.log(element);
            $(element)
                .remove();
        }
    });
}

function updatePricingvar(newvalue){
    window.kixie.pricing = newvalue;
}

function updateInstallSuccess(){
    $.ajax({
        type: "POST",
        url: kixie.domain+"/rest/functions.php",
        cache: false,
        data: {
            "call":'installSuccess',
            "userid":window.kdata.userid,
            "businessid":window.kdata.businessid
        },
        dataType: "json",
        success: function (data) {
            if (data.success) {

            } else {

            }
        },
        complete: function () {

        }
    });
}


 newDataObj =z {
         { "fullName": "value" },
       {emailAddress": 'test@kixie.com}
           "emailAddress": 'test@kixie.com',
           "password": 'test123',
           "countryCode": 'US',
           "phone": "16268624782",
           "timeZone": "Pacific",
           "browser": 'Chrome',
           "ipAddress": "0.0.0.0",
           "browserVersion": "1",
           "referrer": "none",
           "network": "NULL",
           "campaignid": "c",
           "adgroupid": "a",
           "sem": sem,
           "kw": kw,
           "utm": utm,
           "cT": cT,
           "ocode": $( "this.data.captcha" ),
           "crm": "pipedrive"
 
 keithDataObj = {"call":'signupform2',
                             "name": $("#contactFormInline #dname").val(),
                             "email": $("#contactFormInline #demail").val(),
                             "password": $("#contactFormInline #dpass").val(),
                             "subject": "<?php echo $crmPage['pageName']; ?> ",
                             "country": $("#contactFormInline #country-code").val(),
                             "phone": formatE164($("#contactFormInline #country-code").val(),$("#contactFormInline #dphone").val()),
                             "timezone": timezonename,
                             "message": "<?php echo $crmPage['pageName']; ?>",
                             "ip": ip,
                             "browser":navigator.browserInfo.browser,
                             "browserVersion":navigator.browserInfo.version,
                             "referrer": document.referrer,
                             "network":n,
                             "campaignid":c,
                             "adgroupid":a,
                             "sem": sem,
                             "kw": kw,
                             "utm":utm,
                             "cT":cT,
                             "ocode":$("#contactFormInline #ocode").val(),
                             "crm":$("#contactFormInline #crm").val()
                         }

 @format
/

        document.location

        let kixie = {
            kixie: { domain: "" }
        }
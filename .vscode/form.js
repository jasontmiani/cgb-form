function(strParamName, lastValue = true){
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
};
let qString = () => [qString( "" ),
qString( "" ).wait(),
qString( "" ),
qString( "" ),
qString( "" ),
//.script("/assets/plugins/normalizeconsole.js")
//.script("/site-includes/vendor/slick/slick/slick.min.js").wait()
//.script("/site-includes/vendor/jquery.validate.js").wait()
//.script("/assets/plugins/jquery-validation/dist/additional-methods.min.js")
qString( "" ),
qString( "" ),
qString( "" ),
//.script("/site-includes/js/plugins.js")
//.script('/site-includes/vendor/phoneFormat/phoneFormat.min.js')
//.script("/site-includes/vendor/jquery.easing.js")
//.script("/site-includes/vendor/jquery.appear.js")
//.script("/site-includes/vendor/jquery.cookie.js")
//.script("/site-includes/vendor/bootstrap.js").wait()
qString( "" ),
//.script("/site-includes/js/views/view.home.js")
//.script("/site-includes/js/theme.js")
qString( 'https://d1q3ldlapkgxoh.cloudfront.net/inline-signup-form-js.js' )
	//setHighchartsOptions()
];

               $(document).ready(function(){
                   launchApp();
                   grecaptcha.ready(function() {
                       var l = location.pathname.split('.');
                       l = l[0].replace('-','');
                       l.replace('_','');
                       grecaptcha.execute('6Le8J7EUAAAAAIWsoUX28kha-XGaNUcTcafUgDtu', {action: P${l}}).then(function(token) {
                           console.log('cT:'+ token);
                           console.log(P${l});
                       });
                   });
               });
               //.script("/site-includes/js/custom.js")
               /*.script(window.kixie.domain+"/site-includes/js/app.js?v=2").wait(function(){
                   //setHighchartsOptions();
                   $(document).ready(function(){
                       launchApp();
                   });*/
               });
           function launchApp(){
               initStyleSheets();
               window.demo ={};
               window.demo.person={};
               window.demo.form={};
               //initImages();
               clienttimezone= jstz.determine().name();
               $('#clientTimezone').val(clienttimezone);
               track('viewHome', 'home', 'home');
               $('#our-partners').slick({
                   autoplay: true, //Set AutoPlay to 3 seconds
                   autoplaySpeed : 5000,
                   slidesToShow : 5,
                   arrows:false,
                   slidesToScroll: 5,
                   dots: false,
                   infinite: true,
                   autoHeight: true,
                   navigation: false,
                   navigationText: false,
                   /*itemsDesktop : [1199,3],
                    itemsDesktopSmall : [979,3]*/
                   responsive: [
                       {
                           breakpoint: 1024,
                           settings: {
                               slidesToShow: 5,
                               slidesToScroll: 5,
                               infinite: true,
                               dots: true
                           }
                       },
                       {
                           breakpoint: 600,
                           settings: {
                               slidesToShow: 3,
                               slidesToScroll: 3,
                               centerMode: true
                           }
                       },
                       {
                           breakpoint: 480,
                           settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1,
                               centerMode: true,
                               centerPadding:'20%'
                           }
                       }
                       // You can unslick at a given breakpoint now by adding:
                       // settings: "unslick"
                       // instead of a settings object
                   ]
               });
               // add form-init code
               formsetup();
               var io = new IntersectionObserver(
                   entries => {
                       console.log(entries);
                       console.log(entries[0].isIntersecting);
                       if(entries[0].isIntersecting) {
                           initImages();
                       }
                   },
                   {
                       /* Using default options. Details below */
                       threshold: [0]
                   }
               );
               // Start observing an element
               var e = document.querySelector('#our-partners');
               io.observe(e);
           }
           function initImages() {
               var imgDefer = document.getElementsByTagName('img');
               for (var i = 0; i < imgDefer.length; i++) {
                   if (imgDefer[i].getAttribute('data-src')) {
                       imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
                   }
               }
               var picDefer = document.getElementsByTagName('source');
               for (var i = 0; i < picDefer.length; i++) {
                   if (picDefer[i].getAttribute('data-srcset')) {
                       picDefer[i].setAttribute('srcset',picDefer[i].getAttribute('data-srcset'));
                   }
               }
           }
           function initStyleSheets() {
               var imgDefer = document.getElementsByTagName('link');
               for (var i = 0; i < imgDefer.length; i++) {
                   if (imgDefer[i].getAttribute('data-rel')) {
                       imgDefer[i].setAttribute('rel',imgDefer[i].getAttribute('data-rel'));
                   }
               }
           }

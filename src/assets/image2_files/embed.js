(function(window) {
    var WIDGET_TYPE_SWIPER = [2, 5, 6];
    var WIDGET_SCROLL = [3, 6];

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.2.4') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        window.jQueryRomw = window.jQuery;
        main();
    }

    /******** Called once Our! jQuery has loaded ******/
    function scriptLoadHandler() {
      window.jQueryRomw = $.noConflict(true)
      if (typeof window.jQuery === 'undefined') {
        window.jQuery = window.jQueryRomw
      }
      main()
    }

    /******** Our main function ********/
    function main() {
        window.jQueryRomw(document).ready(function($) {
            // load css and js
            $('head').append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />');

            // swiper
            function loadSwiper(deffered, defferedData) {
                $('head').append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" />');
                // var swiperDeferred = jQuery.Deferred();
                var swiperUrl = "//cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js";
                if (location.href.substring(0,4) != 'http') {
                    swiperUrl = 'https:' + swiperUrl;
                }
                $.getScript(swiperUrl, function(data, textStatus, jqxhr) {
                    deffered.resolve(defferedData);
                });
            }

            //prepare data
            var reviewDataArray;
            if (window.review_token && window.review_target) {
                reviewDataArray = [{'container': window.review_target, 'token': window.review_token}];
            } else {
                reviewDataArray = window.reviewData;
            }

            if (!reviewDataArray) {
                if (console) {
                    console.warn('Review widget: `reviewData` varible is missing, no widget will be inserted into page');
                }
            } else if (Object.prototype.toString.call(reviewDataArray) !== '[object Array]') {
                reviewDataArray = [reviewDataArray];
            }

            // load reviews
            var deferredArray = [];
            var swiperLoaded = false;
            function loadContent() {
                window.jQueryRomw.each(reviewDataArray, function (i, widgetConfig) {
                var widgetDeffered = window.jQueryRomw.Deferred();
                var embedUrl = "https://reviewsonmywebsite.com/embed/";
                if (typeof(romwcr_url) != "undefined") { embedUrl = romwcr_url; }
                $.get( embedUrl+widgetConfig.token+"?v=2", function(data) {
                  if (WIDGET_TYPE_SWIPER.indexOf(data.type) > -1 && !swiperLoaded) {
                    swiperLoaded = true;
                    loadSwiper(widgetDeffered, {'data': data.html, 'container': widgetConfig.container, 'swiper': true, 'type': data.type});
                  } else {
                    widgetDeffered.resolve({'data': data.html, 'container': widgetConfig.container, 'swiper': false, 'type': data.type});
                  }
                });
                deferredArray.push(widgetDeffered);
              });
            }

            $.when(loadContent()).done(function () {
                window.jQueryRomw.when.apply(window.jQueryRomw, deferredArray).then(function() {
                var data = arguments;
                    window.jQueryRomw.each(data, function(i, widgetConfig) {
                  //checking if it really widget promise or swiper promise
                  if (widgetConfig) {
                    $('#'+widgetConfig.container).html(widgetConfig.data);
                    if(WIDGET_SCROLL.indexOf(widgetConfig.type) > -1) {
                      $('head').append('<link rel="stylesheet" type="text/css" href="https://reviewsonmywebsite.com/css/rocketScroll.css" />');
                      $.when(
                        $.getScript('https://reviewsonmywebsite.com/js/rocketHelpers.js'),
                        $.getScript('https://reviewsonmywebsite.com/js/rocketScroll.js')
                      ).done(function () {
                        new RS.RocketScroll('.multiple');
                        $(window).resize(function () {
                          $('.rocketScroll .scrollbar').remove();
                          new RS.RocketScroll('.multiple');
                        });
                      });
                    }
                  }
                });
              });
            });
            // deferredArray.push(swiperDeferred);
        });
    }
})(window); // We call our anonymous function immediately
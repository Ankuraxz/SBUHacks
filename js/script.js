$(function() {
  initPage();
})

function initPage(){
  initMLH();
  initPrizeSlider();
  initSponsorSlider();
  initFaqSlider();
  initComet();
}

function initPrizeSlider(){
  $('#prize-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initSponsorSlider(){
  $('#sponsor-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initFaqSlider(){
  $('#faq-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initMLH(){
  $('#stage').append('<a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2017 Hackathon Season" style="width:100%"></a>');
}

function initComet(){
  $("#comet1").append('<?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="fullComet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1280 1024" style="enable-background:new 0 0 1280 1024;" xml:space="preserve"> <style type="text/css"> .st0{opacity:0.37;fill:url(#tail4_1_);} .st1{opacity:0.49;fill:url(#tail3_1_);} .st2{opacity:0.8;fill:url(#tail2_1_);} .st3{opacity:0.82;fill:url(#tail1_1_);} .st4{fill:none;stroke:#000000;stroke-miterlimit:10;} .st5{fill:#B0B0B0;} .st6{fill:none;stroke:#1B1464;stroke-miterlimit:10;} .st7{fill:url(#mouse3_1_);stroke:#FFFFFF;stroke-miterlimit:10;} .st8{fill:#FFFFFF;} </style> <linearGradient id="tail4_1_" gradientUnits="userSpaceOnUse" x1="126.2521" y1="554.127" x2="1040.0703" y2="554.127" gradientTransform="matrix(0.9914 0.1312 -0.1312 0.9914 72.6055 -78.152)"> <stop offset="0" style="stop-color:#00FFFF"/> <stop offset="0.3419" style="stop-color:#29ABE2"/> <stop offset="0.8944" style="stop-color:#00278B"/> </linearGradient> <polygon id="tail4" class="st0" points="1076.4,264.2 402.4,873.9 516,685.3 203.9,847.7 266.4,756.9 86.5,779.4 289.5,628.4 187.8,596.4 448.1,487.6 374,435.5 "/> <linearGradient id="tail3_1_" gradientUnits="userSpaceOnUse" x1="263.098" y1="539.2593" x2="1029.4685" y2="442.172"> <stop offset="0.3851" style="stop-color:#65C8D0"/> <stop offset="0.4078" style="stop-color:#56B2C5"/> <stop offset="0.4527" style="stop-color:#3C8EB4"/> <stop offset="0.4999" style="stop-color:#266FA5"/> <stop offset="0.5493" style="stop-color:#155899"/> <stop offset="0.6019" style="stop-color:#094791"/> <stop offset="0.6597" style="stop-color:#023D8D"/> <stop offset="0.733" style="stop-color:#003A8B"/> </linearGradient> <polygon id="tail3" class="st1" points="1097.1,260.2 540.5,677.5 644.6,559.5 401.3,686.1 457.1,628.3 325.4,661.8 489.1,554.2 420.1,548.3 619.8,457.5 572.9,437.2 "/> <linearGradient id="tail2_1_" gradientUnits="userSpaceOnUse" x1="650.3504" y1="370.6612" x2="1041.329" y2="370.6612"> <stop offset="0.2757" style="stop-color:#65C8D0"/> <stop offset="0.3484" style="stop-color:#5CBAC8"/> <stop offset="0.4864" style="stop-color:#4494B2"/> <stop offset="0.6737" style="stop-color:#1F588F"/> <stop offset="0.8128" style="stop-color:#002773"/> </linearGradient> <polygon id="tail2" class="st2" points="1041.3,284.1 818.6,491.9 829.9,384.3 650.4,418.2 789.8,311.4 696.1,249.4 "/> <linearGradient id="tail1_1_" gradientUnits="userSpaceOnUse" x1="570.8077" y1="462.7734" x2="574.5839" y2="959.3407" gradientTransform="matrix(-0.4679 -0.8838 0.8838 -0.4679 493.0593 1311.53)"> <stop offset="0.1944" style="stop-color:#65C8D0"/> <stop offset="0.2656" style="stop-color:#5AA9C3"/> <stop offset="0.3671" style="stop-color:#4C85B4"/> <stop offset="0.4737" style="stop-color:#4166A8"/> <stop offset="0.5852" style="stop-color:#394F9E"/> <stop offset="0.7038" style="stop-color:#333E97"/> <stop offset="0.8344" style="stop-color:#2F3493"/> <stop offset="1" style="stop-color:#2E3192"/> </linearGradient> <polygon id="tail1" class="st3" points="1003.5,317 840.4,559.3 857.2,471.8 698.2,554.6 824.4,429.3 754,446.8 "/> <g id="mouse"> <path id="mouse7" class="st4" d="M986.5,316.9"/> <g id="mouse6"> <g id="mousebody2"> <defs> <path id="XMLID_1_" d="M987.8,316.2c40.7,65.8,99.1,26.5,99.1,26.5l8.6-5.1c0,0,106.4-67,69.1-127.1"/> </defs> <use xlink:href="#XMLID_1_" style="overflow:visible;fill:#B0B0B0;"/> <clipPath id="XMLID_3_"> <use xlink:href="#XMLID_1_" style="overflow:visible;"/> </clipPath> </g> <path id="mousebody1" class="st5" d="M987.8,316.2c-40.7-65.8,21.6-98.7,21.6-98.7l8.5-5.1c0,0,109.4-62.1,146.7-1.9"/> </g> <path id="mouse5" class="st6" d="M1093.5,338.3c0,0-32.1-78.8-77.2-124.7"/> <line id="mouse4" class="st6" x1="1060.3" y1="272.8" x2="988.1" y2="316"/> <linearGradient id="mouse3_1_" gradientUnits="userSpaceOnUse" x1="638.4508" y1="936.7804" x2="655.5804" y2="953.0316" gradientTransform="matrix(-0.5201 -0.8541 0.8541 -0.5201 555.8555 1342.1934)"> <stop offset="0.1847" style="stop-color:#0E052D"/> <stop offset="0.9765" style="stop-color:#2E176D"/> </linearGradient> <path id="mouse3" class="st7" d="M1023.7,285.8c10.6-6.3,20.9-8.6,23.1-5s-4.6,11.5-15.1,17.8c-10.6,6.3-20.9,8.6-23.1,5 S1013.2,292.2,1023.7,285.8z"/> <g id="mouse2"> <path class="st8" d="M1001.3,326.8c3,2.2,6.1,4.2,9.3,5.9c3.2,1.8,6.5,3.3,9.8,4.6c6.7,2.6,13.6,4.4,20.7,5.1 c3.5,0.4,7.1,0.5,10.7,0.4c1.8,0,3.6-0.2,5.4-0.3l2.7-0.3l1.3-0.2l1.3-0.2c7.1-1.1,14.2-3.1,21.3-5.4c-6.2,4.2-13.2,7.3-20.5,9.2 c-1.8,0.5-3.7,0.8-5.6,1.2c-1.9,0.3-3.8,0.6-5.7,0.7c-1.9,0.2-3.8,0.2-5.7,0.2c-1,0-1.9-0.1-2.9-0.1c-1,0-1.9-0.1-2.9-0.2 c-7.6-0.8-15.1-3.1-21.9-6.5c-3.4-1.7-6.6-3.8-9.5-6.2C1006.3,332.4,1003.5,329.8,1001.3,326.8z"/> </g> <g id="mouse1"> <path class="st8" d="M1013.8,300.5c1.1-2.6,2.9-4.9,4.8-6.9c2-2,4.2-3.8,6.7-5.2c2.5-1.4,5.1-2.6,7.8-3.3c1.3-0.4,2.8-0.6,4.1-0.9 c1.4-0.2,2.8-0.2,4.2-0.3c-1.3,0.5-2.7,0.8-4,1.2c-1.3,0.5-2.6,0.8-3.9,1.4l-1.9,0.8l-1.8,0.9c-0.6,0.3-1.2,0.6-1.8,0.9 c-0.6,0.3-1.2,0.6-1.8,1l-1.7,1c-0.6,0.4-1.1,0.8-1.7,1.1c-1.1,0.8-2.2,1.6-3.2,2.5C1017.6,296.5,1015.7,298.4,1013.8,300.5z"/> </g> </g> </svg> ');
}

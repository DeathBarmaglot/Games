/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'RoundRectCopy',
                type: 'rect',
                rect: ['310px', '12px','169px','37px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(232,18,18,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text3Copy2',
                type: 'text',
                rect: ['15px', '20px','401px','30px','auto', 'auto'],
                text: "ІГРИ для дітей",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['43px', '14px','352px','202px','auto', 'auto'],
                text: "до кожної покупки, <br>демо-версія гри<br><br>",
                align: "center",
                font: ['Tahoma, Geneva, sans-serif', 18, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: '_53',
                type: 'image',
                rect: ['141px', '-32px','123px','202px','auto', 'auto'],
                clip: ['rect(0px -12px 202px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"53.png",'0px','0px']
            },
            {
                id: 'image133',
                type: 'image',
                rect: ['-158px', '29px','161px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image133.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['-57px', '130px','413px','172px','auto', 'auto'],
                text: "вул. Небесної Сотні, 21-А",
                align: "center",
                font: ['Arial Black, Gadget, sans-serif', 13, "rgba(243,235,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'cat3',
                type: 'image',
                rect: ['-24px', '27px','320px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cat3.png",'0px','0px']
            },
            {
                id: '_3_13',
                type: 'image',
                rect: ['125px', '-7px','172px','172px','auto', 'auto'],
                clip: ['rect(0px -20px 172px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"3_13.png",'0px','0px']
            },
            {
                id: 'image113',
                type: 'image',
                rect: ['3px', '42px','138px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image113.png",'0px','0px']
            },
            {
                id: 'Untitled-13',
                type: 'image',
                rect: ['105px', '-84px','90px','81px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-13.png",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['-215px', '12px','169px','37px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(232,18,18,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRectCopy2',
                type: 'rect',
                rect: ['64px', '12px','169px','37px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(232,18,18,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text7Copy',
                type: 'text',
                rect: ['90px', '152px','252px','81px','auto', 'auto'],
                text: "050 708 50 19",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(254,244,244,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['-92px', '20px','312px','90px','auto', 'auto'],
                text: "ПОДАРУНОК *",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['144px', '21px','252px','81px','auto', 'auto'],
                text: "ІГРИ для дорослих",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['117px', '160px','258px','127px','auto', 'auto'],
                text: "* Всього 30 шт.",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 10, "rgba(13,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['-1px', '67px','301px','151px','auto', 'auto'],
                text: "Настільні ігри м.Чернівці",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1)", "900", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__3_13}": [
                ["style", "top", '18px'],
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8'],
                ["style", "clip", [0,-20,172,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '172px'],
                ["style", "opacity", '1'],
                ["style", "left", '125px'],
                ["style", "width", '172px']
            ],
            "${_Text7}": [
                ["style", "top", '21px'],
                ["style", "font-weight", '900'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '144px'],
                ["style", "width", '252px']
            ],
            "${_Text2}": [
                ["style", "line-height", '18px'],
                ["style", "top", '130px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(3,3,0,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '-373px'],
                ["style", "font-size", '13px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '152px'],
                ["style", "font-weight", '900'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(239,7,7,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '71px'],
                ["style", "font-size", '20px']
            ],
            "${__53}": [
                ["style", "top", '-32px'],
                ["style", "clip", [0,-12,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '202px'],
                ["style", "opacity", '1'],
                ["style", "left", '141px'],
                ["style", "width", '123px']
            ],
            "${_Text5}": [
                ["style", "line-height", '32px'],
                ["color", "color", 'rgba(6,6,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-1px'],
                ["style", "font-size", '18px'],
                ["style", "top", '0px'],
                ["style", "height", '151px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "width", '301px'],
                ["style", "opacity", '0']
            ],
            "${_image113}": [
                ["style", "top", '42px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '138px'],
                ["style", "opacity", '1'],
                ["style", "left", '3px'],
                ["style", "width", '138px']
            ],
            "${_Text2Copy}": [
                ["color", "color", 'rgba(227,6,6,1.00)'],
                ["style", "top", '-84px'],
                ["style", "left", '90px'],
                ["style", "font-size", '14px']
            ],
            "${_RoundRect}": [
                ["style", "top", '12px'],
                ["style", "height", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '-292px'],
                ["style", "width", '169px']
            ],
            "${_Untitled-13}": [
                ["style", "top", '180px'],
                ["style", "-webkit-transform-origin", [50.56,86.11], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50.56,86.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50.56,86.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50.56,86.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50.56,86.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '81px'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '105px'],
                ["style", "width", '90px']
            ],
            "${_Text3Copy2}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '15px'],
                ["style", "font-size", '13px'],
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-weight", '900']
            ],
            "${_image133}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '150px'],
                ["style", "opacity", '1'],
                ["style", "left", '-158px'],
                ["style", "width", '161px']
            ],
            "${_Text10}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(13,0,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '117px'],
                ["style", "font-size", '10px']
            ],
            "${_RoundRectCopy}": [
                ["style", "top", '12px'],
                ["style", "height", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '310px'],
                ["style", "width", '169px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '14px'],
                ["color", "color", 'rgba(167,8,8,1.00)'],
                ["style", "height", '30px'],
                ["style", "opacity", '1'],
                ["style", "left", '304px'],
                ["style", "font-size", '20px']
            ],
            "${_Text}": [
                ["style", "top", '9px'],
                ["style", "font-weight", '900'],
                ["style", "text-align", 'center'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(5,0,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '15px']
            ],
            "${_RoundRectCopy2}": [
                ["style", "top", '192px'],
                ["style", "height", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '64px'],
                ["style", "width", '169px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,251,251,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '20px'],
                ["style", "width", '312px'],
                ["style", "height", '90px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-92px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy}": [
                ["style", "top", '-121px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '529px'],
                ["style", "font-size", '14px']
            ],
            "${_cat3}": [
                ["style", "top", '27px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [0,135,138,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '138px'],
                ["style", "opacity", '1'],
                ["style", "left", '-125px'],
                ["style", "width", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17730,
            autoPlay: true,
            timeline: [
                { id: "eid15", tween: [ "style", "${_cat3}", "left", '-11px', { fromValue: '-125px'}], position: 2617, duration: 734, easing: "easeInOutQuad" },
                { id: "eid327", tween: [ "transform", "${_Untitled-13}", "scaleX", '1.5', { fromValue: '0.5'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid298", tween: [ "transform", "${_Untitled-13}", "scaleX", '1', { fromValue: '1.5'}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid268", tween: [ "style", "${_Text3Copy2}", "opacity", '1', { fromValue: '0'}], position: 7697, duration: 550, easing: "easeInOutQuad" },
                { id: "eid269", tween: [ "style", "${_Text3Copy2}", "opacity", '0', { fromValue: '1'}], position: 10649, duration: 550, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "style", "${__3_13}", "clip", [0,184,172,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-20,172,0]}], position: 12793, duration: 1321, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 12984, duration: 734, easing: "easeInOutQuad" },
                { id: "eid290", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 16076, duration: 734, easing: "easeInOutQuad" },
                { id: "eid36", tween: [ "style", "${_image133}", "opacity", '0', { fromValue: '1'}], position: 10979, duration: 734, easing: "easeInOutQuad" },
                { id: "eid114", tween: [ "transform", "${_cat3}", "scaleX", '0.94203', { fromValue: '0'}], position: 2617, duration: 734, easing: "easeInOutQuad" },
                { id: "eid93", tween: [ "transform", "${_image133}", "scaleY", '0.9', { fromValue: '0'}], position: 6617, duration: 1080, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_image133}", "left", '2px', { fromValue: '-158px'}], position: 6250, duration: 367, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "style", "${__53}", "clip", [0,150,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-12,202,0]}], position: 7321, duration: 1321, easing: "easeInOutQuad" },
                { id: "eid255", tween: [ "style", "${_RoundRectCopy}", "left", '139px', { fromValue: '310px'}], position: 3179, duration: 722, easing: "easeInOutQuad" },
                { id: "eid258", tween: [ "style", "${_RoundRectCopy}", "left", '321px', { fromValue: '139px'}], position: 6250, duration: 521, easing: "easeInOutQuad" },
                { id: "eid263", tween: [ "style", "${_RoundRectCopy}", "left", '139px', { fromValue: '310px'}], position: 7321, duration: 722, easing: "easeInOutQuad" },
                { id: "eid264", tween: [ "style", "${_RoundRectCopy}", "left", '321px', { fromValue: '139px'}], position: 10392, duration: 521, easing: "easeInOutQuad" },
                { id: "eid2", tween: [ "style", "${_cat3}", "clip", [0,320,138,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135,138,0]}], position: 3500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid110", tween: [ "style", "${_Untitled-13}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 734, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "style", "${__3_13}", "opacity", '0', { fromValue: '1'}], position: 16289, duration: 734, easing: "easeInOutQuad" },
                { id: "eid337", tween: [ "style", "${_RoundRectCopy2}", "top", '151px', { fromValue: '192px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid122", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 3351, duration: 550, easing: "easeInOutQuad" },
                { id: "eid180", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 550, easing: "easeInOutQuad" },
                { id: "eid215", tween: [ "style", "${_RoundRect}", "left", '-33px', { fromValue: '-292px'}], position: 12000, duration: 801, easing: "easeInOutQuad" },
                { id: "eid177", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 12514, duration: 734, easing: "easeInOutQuad" },
                { id: "eid109", tween: [ "style", "${_Text5}", "top", '-68px', { fromValue: '0px'}], position: 2250, duration: 821, easing: "easeInOutQuad" },
                { id: "eid164", tween: [ "style", "${_Text7Copy}", "left", '-164px', { fromValue: '71px'}], position: 2250, duration: 679, easing: "easeInOutQuad" },
                { id: "eid160", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 550, easing: "easeInOutQuad" },
                { id: "eid154", tween: [ "style", "${_Untitled-13}", "top", '64px', { fromValue: '180px'}], position: 0, duration: 679, easing: "easeInQuad" },
                { id: "eid179", tween: [ "style", "${_Untitled-13}", "top", '180px', { fromValue: '64px'}], position: 2250, duration: 679, easing: "easeInQuad" },
                { id: "eid157", tween: [ "style", "${_Text2}", "left", '-57px', { fromValue: '-373px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid161", tween: [ "style", "${_Text2}", "left", '237px', { fromValue: '-57px'}], position: 2000, duration: 679, easing: "easeInOutQuad" },
                { id: "eid328", tween: [ "transform", "${_Untitled-13}", "scaleY", '1.5', { fromValue: '0.5'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid300", tween: [ "transform", "${_Untitled-13}", "scaleY", '1', { fromValue: '1.5'}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "transform", "${_image113}", "scaleX", '0.8', { fromValue: '0'}], position: 11500, duration: 1080, easing: "easeInOutQuad" },
                { id: "eid175", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 12793, duration: 734, easing: "easeInOutQuad" },
                { id: "eid289", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 16289, duration: 734, easing: "easeInOutQuad" },
                { id: "eid217", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 15883, duration: 669, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_Text7Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 550, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_cat3}", "opacity", '0', { fromValue: '1'}], position: 6100, duration: 550, easing: "easeInOutQuad" },
                { id: "eid91", tween: [ "transform", "${_image133}", "scaleX", '0.9', { fromValue: '0'}], position: 6617, duration: 1080, easing: "easeInOutQuad" },
                { id: "eid282", tween: [ "color", "${_Text2}", "color", 'rgba(3,3,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(3,3,0,1.00)'}], position: 16902, duration: 0, easing: "easeInOutQuad" },
                { id: "eid283", tween: [ "color", "${_Text2}", "color", 'rgba(3,3,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(3,3,0,1.00)'}], position: 17730, duration: 0, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${__53}", "opacity", '0', { fromValue: '1'}], position: 10979, duration: 734, easing: "easeInOutQuad" },
                { id: "eid302", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 669, easing: "easeInOutQuad" },
                { id: "eid45", tween: [ "style", "${_image113}", "opacity", '0', { fromValue: '1'}], position: 16076, duration: 734, easing: "easeInOutQuad" },
                { id: "eid340", tween: [ "color", "${_Text7Copy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,7,7,1)'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid296", tween: [ "style", "${_Untitled-13}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.56,86.11]}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid491", tween: [ "style", "${_Untitled-13}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.56,86.11]}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid492", tween: [ "style", "${_Untitled-13}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.56,86.11]}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid493", tween: [ "style", "${_Untitled-13}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.56,86.11]}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid494", tween: [ "style", "${_Untitled-13}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.56,86.11]}], position: 2000, duration: 1351, easing: "easeInOutQuad" },
                { id: "eid95", tween: [ "transform", "${_image113}", "scaleY", '0.8', { fromValue: '0'}], position: 11500, duration: 1080, easing: "easeInOutQuad" },
                { id: "eid116", tween: [ "transform", "${_cat3}", "scaleY", '0.94203', { fromValue: '0'}], position: 2617, duration: 734, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3530445");

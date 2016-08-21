$(function(){
    $('#content').fullpage({
        anchors:['firstPage', 'secondPage', '3rdPage', '4thPage'],
        navigation: true,
        navigationTooltips: ['个人简介', '工作经历', '工作技能', '作品练习'],
        showActiveTooltip: true,
        keyboardScrolling: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrowColor: '#3fb560'
    });
});
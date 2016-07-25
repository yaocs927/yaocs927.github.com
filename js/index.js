$(function(){
    $('#content').fullpage({
      //Navigation
        anchors:['firstPage', 'secondPage', '3rdPage'],
        navigation: true,
        navigationTooltips: ['个人简介', '工作经历', '相关作品'],
        showActiveTooltip: true,
        keyboardScrolling: true
    });
});
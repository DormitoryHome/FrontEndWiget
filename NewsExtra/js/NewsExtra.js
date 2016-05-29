$("document").ready(function(){
    $(".NewsExtraTab").children("li").eq(0).css("background-color", "#86d6d7");
    $(".NewsExtraTab").children("li").eq(1).css("background-color", "#00A06B");
    $(".NewsExtraTab").children("li").eq(2).css("background-color", "#00A06B");
    $(".NewsExtraContent").eq(0).css("z-index",2);
    $(".NewsExtraContent").eq(1).css("z-index",1);
    $(".NewsExtraContent").eq(2).css("z-index",1);
    
    $(".NewsExtraTab").children("li").eq(0).click(function(){
        $(".NewsExtraTab").children("li").eq(1).css("background-color", "#00A06B");
        $(".NewsExtraTab").children("li").eq(2).css("background-color", "#00A06B");
        $(".NewsExtraContent").eq(0).css("z-index",2);
        $(".NewsExtraContent").eq(1).css("z-index",1);
        $(".NewsExtraContent").eq(2).css("z-index",1);
        $(this).css("background-color", "#86d6d7");
    });
    $(".NewsExtraTab").children("li").eq(1).click(function(){
        $(".NewsExtraTab").children("li").eq(0).css("background-color", "#00A06B");
        $(".NewsExtraTab").children("li").eq(2).css("background-color", "#00A06B");
        $(".NewsExtraContent").eq(1).css("z-index",2);
        $(".NewsExtraContent").eq(0).css("z-index",1);
        $(".NewsExtraContent").eq(2).css("z-index",1);
        $(this).css("background-color", "#86d6d7");
    });
    $(".NewsExtraTab").children("li").eq(2).click(function(){
        $(".NewsExtraTab").children("li").eq(0).css("background-color", "#00A06B");
        $(".NewsExtraTab").children("li").eq(1).css("background-color", "#00A06B");
        $(".NewsExtraContent").eq(2).css("z-index",2);
        $(".NewsExtraContent").eq(0).css("z-index",1);
        $(".NewsExtraContent").eq(1).css("z-index",1);
        $(this).css("background-color", "#86d6d7");
    });
});

//tab function
$(function () {
    
    $(".menuItem").on("click", function () {
        $("#" + $(this).attr("id") + "S").toggleClass("hidden")
        //$("#" + $(this).attr("id") + "S").toggle()
        $("#" + $(this).attr("id") + "I").toggleClass("fa-dot-circle-o")
        $("#" + $(this).attr("id") + "I").toggleClass("fa-circle-o")
        $("#" + $(this).attr("id") + "F").toggleClass("visibility-hidden")

    })

    $(".tabrow li").click(function (e) {
        e.preventDefault();
        $(".tabrow li").removeClass("selected");
        $(this).addClass("selected");
        $(".TabBody").hide()
        var id = $(this).attr("id")
        $("#body" + id).show()
    });
    //$(".tabrow2 li").click(function (e) {
    //    e.preventDefault();
    //    $(".tabrow2 li").removeClass("selected");
    //    $(this).addClass("selected");
    //});

});
//scroll spy
//$(window).bind('scroll', function () {
//    var currentTop = $(window).scrollTop();
//    var elems = $('.scrollspy');
//    elems.each(function (index) {
//        var elemTop = $(this).offset().top;
//        var elemBottom = elemTop + $(this).height();
//        console.log("elemTop=" + elemTop + " elemBottom =" + elemBottom  )
//        if (currentTop >= elemTop && currentTop <= elemBottom) {
//            var id = $(this).attr('id');
//            var navElem = $('a[href="#' + id + '"]');
//            navElem.parent().addClass('active').siblings().removeClass('active');
//        }
//    })
//});
$(".scrollSection").bind('scroll', function () {
    var currentTop = $(".scrollSection").scrollTop();
    var elems = $('.scrollspy');
    elems.each(function (index) {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        console.log("elemTop=" + elemTop + " elemBottom =" + elemBottom)
        if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            navElem.parent().addClass('active').siblings().removeClass('active');
        }
    })
});
//scroll spy end


function showMortabet(sender, id) {
    $(id).toggle();
    if ($(sender).text() == "دستورات مربوط (نمایش)") $(sender).text("دستورات مربوط (عدم نمایش)")
    else $(sender).text("دستورات مربوط (نمایش)")
}
//////show hint
$(function () {
    $(".namayandehName").on("mouseover", function (e) {
        //var id = $(this).attr("candidId")
        //document.getElementById("hintNamayandeh" + id).style.display = "block";
        $(this).find(".hintNamayandeh").show()
    });
    $(".namayandehName").on("mouseout", function (e) {
        $(this).find(".hintNamayandeh").hide()
    });
    //filter bar asase namayande
    
    $("#FilterCandidBtn").on("click", function () {
        var checkboxNotCkecked=$("#bodynateghinCheckboxList").find("input:checkbox:not(:checked)")
        $.each(checkboxNotCkecked,function () {
            console.log($(this).val())
           
            $("div[candidid=" + $(this).val() + "]").hide()
        })
    })
    
}); 

function redirect() {
    var date = document.getElementById("date").value
    window.location="Main.aspx?date="+date
}
/**
 * Created by Niels van der Stap on 15-2-2016.
 */
$(document).ready(function(){

    $("#content_legal").hide();
    $("#content_about_us").hide();
    $("#content_contact").hide();

    $("#Button_footer_legal").click(function(){
        $("#content_legal").delay(300).slideToggle("slow");
        $("#content_about_us").slideUp("slow");
        $("#content_contact").slideUp("slow");
    });
    $("#Button_footer_about_us").click(function(){
        $("#content_legal").slideUp("slow");
        $("#content_about_us").delay(300).slideToggle("slow");
        $("#content_contact").slideUp("slow");
    });
    $("#Button_footer_contact").click(function(){
        $("#content_legal").slideUp("slow");
        $("#content_about_us").slideUp("slow");
        $("#content_contact").delay(300).slideToggle("slow");
    });
});
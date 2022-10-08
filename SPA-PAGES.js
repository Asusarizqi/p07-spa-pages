$(document).ready(function(){
    $(".dot").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_dot = split[1];

        $(".dot").removeClass('aktif');
        $("#dot_"+id_dot).addClass('aktif');

        

        $("#note_1").slideUp();
        $("#note_2").slideUp();
        $("#note_3").slideUp();
        $("#note_4").slideUp();
        $("#note_"+id_dot).slideToggle("medium");
    });
});
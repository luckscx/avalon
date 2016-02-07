document.addEventListener("DOMContentLoaded", function(){
    Ejoy('enter-room').on('click', function(){
        Ejoy('lobby-action').css("display: block;")
    });

    Ejoy('create-room').on('click', function(){
        create_room()
    });

    Ejoy('show-rule').on('click', function(){
        show_rule();
    });

    Ejoy('contine').on('click', function(e){
        var room_number = e.target.previousElementSibling.value
        //check room_number
        join_room(room_number)
    });

    function show_rule(){
        location.href = "static/rule.html";
    }

    function get_name(){
        var req = {
            action: "getname"
        }
        Ejoy.postJSON('/lobby', req, function(resp){
            Ejoy('user-name').html(resp.username)
        })

    }

    function create_room(){
        var req = {
            action: "create",
        }
        Ejoy.postJSON('/lobby', req, function(resp){
            //resp {status: 'join', room: 787878}
            location.href = "/" + resp.room
        })
    
    }
    function join_room(roomid){
        location.href = "/" + roomid
    }
    get_name()
});

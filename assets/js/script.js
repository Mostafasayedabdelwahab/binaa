$(document).ready(function () {



$('.menuToggle').on('click', function(){
    $(".menuRight").toggle();
});  







  
  // حجز 
  $('#pay_course').on('click', function(e){
    e.preventDefault();
    var id        = $(this).data("id");
    $.ajax({
        url:"/pay.course/" + id ,
        method:"get",
        success:function(data) {
          if(data == "isset") {
            $(".store-faild").show(300);
          } else {
            $(".store-success").show(300);
          }
        }
    });
});

  
// حجز 
$('.approve-course').on('click', function(){
    var id        = $(this).data("id");
    $(this).parent().parent().hide(400)
    $.ajax({
        url:"/approve.course/" + id ,
        method:"get",
        success:function(data) {
          $(this).parent().parent().hide(400)
        }
    });
});  



$('.play-video').on('click', function(){
    $(".start-video").show(300);
});

$('.start-video span').on('click', function(){
  $(".start-video").hide(300);
});


  // حذف 
  $('.delete').on('click', function(){
    var id        = $(this).data("id");
    var table     = $(this).data("table");
    $(this).parent().parent().hide(400)
    $.ajax({
        url:"/delete",
        method:"get",
        data:{id:id, table:table},
        success:function(data) {
          $(this).parent().parent().hide(400)
        }
    });
});





// استدعاء الدردشة
setInterval(function () {
  var lesson      = $("#lesson").val();
  $.ajax({
    url:"/all.message/" + lesson,
    method:"get",
    data:{lesson:lesson},
    success:function(data) {
      $(".all-message").html(data);
      $(".all-message .box-chat").scrollBy(1000, 10000);
      $(".all-message").scrollBy(1000, 10000);
    }
});
}, 1000);




// ارسال رسالة
$('#sendMessage').on('click', function(){
  var lesson      = $("#lesson").val();
  var message     = $("#message").val();
  $.ajax({
      url:"/send.message",
      method:"get",
      data:{lesson:lesson, message:message},
      success:function(data) {
        $("#message").val(" ");

      }
  });
});







      // استدعاء بيانات الدرس للتحديث
      $(document).on("click", ".edit_video", function() {
        var id = $(this).data("id");
        var token         = $("input[name='_token']").val();
        $.ajax({
          url: "/ajax.edit.video",
          data:{token:token, id:id },
          success:function (html) {
            $("#updateModal .modal-body #id").val(html.data.id);
            $("#updateModal .modal-body #title").val(html.data.title);
            $("#updateModal .modal-body #video").val(html.data.video);
            $("#updateModal .modal-body #minute").val(html.data.minute);
            $("#updateModal .modal-body #description").val(html.data.description);
            
            $("#updateModal .modal-body .form-label").css("top", "-12px")
            $("#updateModal .modal-body .form-label").css("background", "#fff")
            $("#updateModal .modal-body .form-label").css("padding", "0px 10px")
            $("#updateModal .modal-body .form-label").css("z-index", "100")
          }
        });
      });



      // استدعاء بيانات الاختبار للتحديث
      $(document).on("click", ".edit_test", function() {
        var id = $(this).data("id");
        var token         = $("input[name='_token']").val();
        $.ajax({
          url: "/ajax.edit.test",
          data:{token:token, id:id },
          success:function (html) {
            $("#updateModal .modal-body #id").val(html.data.id);
            $("#updateModal .modal-body #question").val(html.data.question);
            $("#updateModal .modal-body #answer_1").val(html.data.answer_1);
            $("#updateModal .modal-body #answer_2").val(html.data.answer_2);
            $("#updateModal .modal-body #answer_3").val(html.data.answer_3);
            $("#updateModal .modal-body #success_answer").val(html.data.success_answer);
            
            $("#updateModal .modal-body .form-label").css("top", "-12px")
            $("#updateModal .modal-body .form-label").css("background", "#fff")
            $("#updateModal .modal-body .form-label").css("padding", "0px 10px")
            $("#updateModal .modal-body .form-label").css("z-index", "100")
          }
        });
      });

  






      // استدعاء بيانات الاختبار للتحديث
      $(document).on("click", ".edit_course", function() {
        var id = $(this).data("id");
        var token         = $("input[name='_token']").val();
        $.ajax({
          url: "/ajax.edit.course",
          data:{token:token, id:id },
          success:function (html) {
            $("#updateModal .modal-body #id").val(html.data.id);
            $("#updateModal .modal-body #title").val(html.data.title);
            $("#updateModal .modal-body #picture").val(html.data.picture);
            $("#updateModal .modal-body #video").val(html.data.video);
            $("#updateModal .modal-body #leavel").val(html.data.leavel);
            $("#updateModal .modal-body #price").val(html.data.price);
            $("#updateModal .modal-body #count_video").val(html.data.count_video);
            $("#updateModal .modal-body #hour").val(html.data.hour);
            $("#updateModal .modal-body #description").val(html.data.description);
            
            $("#updateModal .modal-body .form-label").css("top", "-12px")
            $("#updateModal .modal-body .form-label").css("background", "#fff")
            $("#updateModal .modal-body .form-label").css("padding", "0px 10px")
            $("#updateModal .modal-body .form-label").css("z-index", "100")
          }
        });
      });





      $(document).on("click", ".click-search-box", function(e) {
        e.preventDefault();
        $(".search-box").show(300);
      });

      $(document).on("click", ".fa-times", function() {
        $(".search-box").hide(300);
      });




      //window.scrollTo(1110,9999);

      $(document).on("load", ".box-chat", function() {
        $('.box-chat').animate({scrollTop: 9999});
      });

      //window.scrollTo(0, document.body.scrollHeight);
      //window.scrollTo(1110, 1110);
      //window.scrollTo(0,document.body.scrollHeight);





  // Search Of Course
  $(document).on("keyup", "#searchs", function () {
    var query = $("#searchs").val();
    if ($('#searchs').val().length !== 0 ) {
      $.ajax({
          url:"/translate/search.courses",
          method:"get",
          data:{query:query},
          success:function(data) {
            $(".search-box ul").show();
            $(".search-box ul").html(data);
          }
      });
    } else {
      $(".search-box ul").hide();
    }
  });





  // Search Of Course
  $('.searchresult').on('click', function(){
      var query = $("#search").val();
      $.ajax({
          url:"/translate/search.result",
          method:"get",
          data:{query:query},
          success:function(data) {
            if(data.length > 20) {
              $(".resultalert").show(400);
              $(".resultalert").html(data);
              $("#picture").hide(400);
            } else {
              $(".resultalert").hide(400);
              $('#picture').attr('src', 'http://localhost/translate/public/result/' + data);
            }
          }
    });
  });





  // Search Of Course
  $('.searchresult').on('click', function(){
    var query = $("#search").val();
    $.ajax({
        url:"/translate/search.result",
        method:"get",
        data:{query:query},
        success:function(data) {
         // $(".resultalert").show(400);
          //$(".resultalert").html(data);
          $('#picture').attr('src', 'http://localhost/translate/public/result/' + data);
        }
  });
});



  $('#upload_form').on('submit', function(event){
      event.preventDefault();
      $.ajax({
          url:"/translate/upload.file.translation",
          method:"POST",
          data:new FormData(this),
          //dataType:'JSON',
          contentType: false,
          cache: false,
          processData: false,
          success:function(data) {
            $(".messagealert").hide(400);
            $(".messagesuccessfully").show(400);
          },
          error: function (error) {
            $(".messagealert").show(400);
            $(".messagesuccessfully").hide(400);
          }
      });
  });






  function fetch_clint_markting() {
    $.ajax({
      url:"/erp/ajax.fetch.clint.markting",
      method:"get",
      success:function(data) {
        $("table tbody").html(data)
      }
    });
  }


  $('.store').on('click', function(){
      var name     = $("#NewleModal #name").val();
      var phone    = $("#NewleModal #phone").val();
      var email    = $("#NewleModal #email").val();
      var facebook = $("#NewleModal #facebook").val();
      var address  = $("#NewleModal #address").val();
      var note     = $("#NewleModal #note").val();
      //let object = {name:name, phone:phone, email:email, facebook:facebook, note:note }
      $.ajax({
          url:"/erp/store.clint.markting",
          method:"get",
          data:{name:name, phone:phone, email:email, address:address, facebook:facebook, note:note },
          success:function(data) {
            fetch_clint_markting()
          }
    });
  });






    // Get Order Detelse For Edit
    $(document).on("click", ".edit_clint_markting", function() {
      var id = $(this).data("id");
      var token         = $("input[name='_token']").val();
      $.ajax({
        url: "/erp/ajax.edit.clint.markting",
        data:{token:token, id:id },
        success:function (html) {
          $("#EditModal .modal-body #id").val(html.data.id);
          $("#EditModal .modal-body #name").val(html.data.name);
          $("#EditModal .modal-body #phone").val(html.data.phone);
          $("#EditModal .modal-body #email").val(html.data.email);
          $("#EditModal .modal-body #address").val(html.data.address);
          $("#EditModal .modal-body #facebook").val(html.data.facebook);
          $("#EditModal .modal-body #note").val(html.data.note);
          
          $("#EditModal .modal-body .form-label").css("top", "-12px")
          $("#EditModal .modal-body .form-label").css("background", "#fff")
          $("#EditModal .modal-body .form-label").css("padding", "0px 10px")
          $("#EditModal .modal-body .form-label").css("z-index", "100")
        }
      });
    });
    // Get Order Detelse For Edit



    $('.update_clint_markting').on('click', function(){
      var id       = $("#EditModal #id").val();
      var name     = $("#EditModal #name").val();
      var phone    = $("#EditModal #phone").val();
      var email    = $("#EditModal #email").val();
      var facebook = $("#EditModal #facebook").val();
      var address  = $("#EditModal #address").val();
      var note     = $("#EditModal #note").val();
      var token    = $("#token").val();
      //let object = {name:name, phone:phone, email:email, facebook:facebook, note:note }
      $.ajax({
          url:"/erp/update.clint.markting",
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          method:"post",
          data:{token:token, id:id, name:name, phone:phone, email:email, address:address, facebook:facebook, note:note },
          success:function(data) {
            $("table tbody .name-" + id).html(name);
            $("table tbody .phone-" + id).html("<a href=tel:" + phone + ">" + phone + "</a>")
            $("table tbody .email-" + id).html("<a href=email:" + email + ">" + email + "</a>")
            $("table tbody .address-" + id).html(address);
            $("table tbody .facebook-" + id).html("<a href=email:" + facebook + ">	فيس بوك	 </a>")

            $("table tbody .note-" + id).html(note);

          }
    });
  });







function fetch_data(page, sort_type, sort_by, query, count) {
    var token = $("input[name='_token']").val();
    $.ajax({
      url: "/erp/view-order/fetch_data?page=" + page + "&sortby=" + sort_by + "&sorttype=" + sort_type + "&query=" + query + "&count=" + count,
      method: "get",
      data: { token: token },
      success: function (data) {
        $("tbody").html(" ");
        $("tbody").html(data);
      }
    });
  }


  $(document).on('keyup', '#serach', function () {
    var query = $('#serach').val();
    var column_name = $('#hidden_column_name').val();
    var sort_type = $('#hidden_sort_type').val();
    var page = $('#hidden_page').val();
    var count = $('#value_count_pagination').val();
    fetch_data(page, sort_type, column_name, query, count);
  });


     $(document).on('keyup', '#hidden_count_pagination', function(){
      var query = $('#serach').val();
      var column_name = $('#hidden_column_name').val();
      var sort_type = $('#hidden_sort_type').val();
      var page = $('#hidden_page').val();
      var count = $('#value_count_pagination').val();
      $("#value_count_pagination").val(count);

      //fetch_data(page, sort_type, column_name, query, count);
     });

     $(document).on('change', '#select-count-pagination', function(){
      //var query = $('#serach').val();
      //var column_name = $('#hidden_column_name').val();
      //var sort_type = $('#hidden_sort_type').val();
      //var page = $('#hidden_page').val();
      var val = $(this).children("option:selected").val();
      var count = $("#value_count_pagination").val(val);
      //fetch_data(page, sort_type, column_name, query, count);
     });


    $(document).on("click", ".sorting", function() {
      var column_name = $(this).data("column_name");
      var order_type = $(this).data("sorting_type");
      var reverse_order = "";

      if(order_type == "asc") {
        $(this).data("sorting_type", "desc");
        reverse_order = "desc";
      }

      if(order_type == "desc") {
        $(this).data("sorting_type", "asc");
        reverse_order = "asc";
      }

      $("#hidden_column_name").val(column_name);
      $("#hidden_sort_type").val(reverse_order);
      var page = $("#hidden_page").val();
      var query = $('#serach').val();
      var count = $('#value_count_pagination').val();
      fetch_data(page, reverse_order, column_name, query, count);
    });



    $(document).on("click", ".pagination a", function(event) {
      event.preventDefault();
      var page = $(this).attr('href').split('page=')[1];
      $('#hidden_page').val(page);
      var column_name = $('#hidden_column_name').val();
      var sort_type = $('#hidden_sort_type').val();
      var query = $('#serach').val();
      $('li').removeClass('active');
      $(this).parent().addClass('active');
      var count = $('#value_count_pagination').val();
      fetch_data(page, sort_type, column_name, query, count);
    });

    $("#hidden_count_pagination").keyup(function () {
      var count = $("#value_count_pagination").val($("#hidden_count_pagination").val());
    });


























    // Get Order Detelse For Edit
    $(document).on("click", ".edit_clint_markting", function() {
      var id = $(this).data("id");
      var token         = $("input[name='_token']").val();
      $.ajax({
        url: "/erp/ajax.edit.user",
        data:{token:token, id:id },
        success:function (html) {
          $("#EditModal .modal-body #id").val(html.data.id);
          $("#EditModal .modal-body #name").val(html.data.name);
          $("#EditModal .modal-body #phone").val(html.data.phone);
          $("#EditModal .modal-body #email").val(html.data.email);
          $("#EditModal .modal-body #password").val(html.data.password);
          
          $("#EditModal .modal-body .form-label").css("top", "-12px")
          $("#EditModal .modal-body .form-label").css("background", "#fff")
          $("#EditModal .modal-body .form-label").css("padding", "0px 10px")
          $("#EditModal .modal-body .form-label").css("z-index", "100")
        }
      });
    });
    // Get Order Detelse For Edit



    $('.update_user').on('click', function(){
      var id       = $("#EditModal #id").val();
      var name     = $("#EditModal #name").val();
      var phone    = $("#EditModal #phone").val();
      var email    = $("#EditModal #email").val();
      var facebook = $("#EditModal #password").val();
      var token    = $("#token").val();
      $.ajax({
          url:"/erp/update.clint.markting",
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          method:"post",
          data:{token:token, id:id, name:name, phone:phone, email:email, address:address, facebook:facebook, note:note },
          success:function(data) {
            $("table tbody .name-" + id).html(name);
            $("table tbody .phone-" + id).html("<a href=tel:" + phone + ">" + phone + "</a>")
            $("table tbody .email-" + id).html("<a href=email:" + email + ">" + email + "</a>")
            $("table tbody .address-" + id).html(address);
            $("table tbody .facebook-" + id).html("<a href=email:" + facebook + ">	فيس بوك	 </a>")
            $("table tbody .note-" + id).html(note);
          }
    });
  });


















  /*------------------------- تحديث بيانات الموظفين --------------------------- */
      $(document).on("click", ".edit_acount", function() {
        var id = $(this).data("id");
        var token         = $("input[name='_token']").val();
        $.ajax({
          url: "/erp/ajax.edit.user",
          data:{token:token, id:id },
          success:function (html) {
            $("#EditModal .modal-body #id").val(html.data.id);
            $("#EditModal .modal-body #name").val(html.data.name);
            $("#EditModal .modal-body #phone").val(html.data.phone);
            $("#EditModal .modal-body #email").val(html.data.email);
            $("#EditModal .modal-body #password").val(html.data.password);
            
            $("#EditModal .modal-body .form-label").css("top", "-12px")
            $("#EditModal .modal-body .form-label").css("background", "#fff")
            $("#EditModal .modal-body .form-label").css("padding", "0px 10px")
            $("#EditModal .modal-body .form-label").css("z-index", "100")
          }
        });
      });

      $('.update_acount').on('click', function(){
        var id       = $("#EditModal #id").val();
        var name     = $("#EditModal #name").val();
        var phone    = $("#EditModal #phone").val();
        var email    = $("#EditModal #email").val();
        var facebook = $("#EditModal #password").val();
        var token    = $("#token").val();
        $.ajax({
            url:"/erp/update.acount",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            method:"get",
            data:{token:token, id:id, name:name, phone:phone, email:email, address:address, facebook:facebook, note:note },
            success:function(data) {
              $("table tbody .name-" + id).html(name);
              $("table tbody .phone-" + id).html("<a href=tel:" + phone + ">" + phone + "</a>")
              $("table tbody .email-" + id).html("<a href=email:" + email + ">" + email + "</a>")
              $("table tbody .address-" + id).html(address);
              $("table tbody .facebook-" + id).html("<a href=email:" + facebook + ">	فيس بوك	 </a>")
              $("table tbody .note-" + id).html(note);
            }
      });
    });
  /*------------------------- تحديث بيانات الموظفين --------------------------- */





});

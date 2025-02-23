$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    nav:true,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:3 },
        1200:{ items:4 },
    }
})


$(".carousel-inner .carousel-item").first().addClass("active");






  // طلب اوردر
  $(".checkboxcart").click(function (event) {
    event.preventDefault();
    var prodact = $(this).data("prodact");
    var token    = $("input[name='_token']").val();
    $.ajax({
      url:"/store.card",
      method:"get",
      data:{token:token, prodact:prodact},
    });
    swal("رسالة", "تم اضافة المنتج الي السلة!", "success");

}); // User Dashbord = true | False


  // تاكيد اوردر
  $(".status-prodact").click(function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var order_id = $(this).data("order_id");
    var prodact_id = $("#order_id").val(order_id);
    var prodact_id = $("#prodact_id").val(id);
    var prodact_count = $("#prodact_count").val($(".count-" + id).val());
    var prodact_price = $("#prodact_price").val($(".price-" + id).val());
}); // User Dashbord = true | False


$(".update-confirmation").click(function () {
  var to = $("#to").val();
  var order_id = $("#order_id").val();
  var phone = $("#phone").val();
  var city = $("#city").val();
  var address = $("#address").val();
  var prodact_id = $("#prodact_id").val();
  var prodact_count = $("#prodact_count").val();
  var prodact_price = $("#prodact_price").val();
  var token    = $("input[name='_token']").val();
  $.ajax({
    url:"/update.confirmation",
    method:"get",
    data:{token:token, order_id:order_id, to:to, phone:phone, city:city, address:address, prodact_id:prodact_id, prodact_count:prodact_count, prodact_price:prodact_price},
  });
  var city = $(".status-" + prodact_id).html("جاري التوصيل");
  var city = $(".action-" + prodact_id).html(" ");

  swal("رسالة نجاح", "تم حفظ المنتج بنجاج جاري شحن المنتج الي العنوان المرفق . . .", "success");

});


  // ضرب السعر في العدد
$(".count").keyup(function () {
    let id = $(this).data("id");
    let price = $(this).data("price");
    let result = $(this).val() * price;
    $(".result-" + id).html(result + " جنية ");
}); // User Dashbord = true | False









  //  بحث عن منتج
$("#search-prodact").keyup(function () {
    var prodact = $(this).val();
    var token    = $("input[name='_token']").val();
    $.ajax({
      url:"/search.prodact",
      method:"get",
      data:{token:token, prodact:prodact},
      success: function (html) {
        $("#result-prodact-search").html(html)
      }
    });
}); // User Dashbord = true | False


  // Delete Order
  $(".delete-card").click(function () {
    var id = $(this).data("id");
    var token    = $("input[name='_token']").val();
    var alertMessage = confirm("هل انت متاكد من حذف المنتج من السلة");
    if (alertMessage == true) {
      $(this).parent().parent().hide(400);
      $.ajax({
        url:"/delete.card",
        method:"get",
        data:{token:token, id:id},
        success:function(data) {
         }
      });
    }
});







    // Get Order Detelse For Edit
    $(document).on("click", ".btn-edit-prodact", function() {
      var id = $(this).data("id");
      var token         = $("input[name='_token']").val();
      $.ajax({
        url: "/ajax.get.prodact",
        data:{token:token, id:id },
        success:function (html) {
          $("#EditModal #edit-id").val(html.data.id);
          $("#EditModal #edit-name").val(html.data.name);
          $("#EditModal #edit-price").val(html.data.price);
          $("#EditModal #edit-money").val(html.data.money);
          $("#EditModal #edit-desc").val(html.data.desc);

        }
      });
    });
    // Get Order Detelse For Edit
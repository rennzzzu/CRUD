var app = {

  add:function(){

    jQuery('#addEmployeeModal .btn-success').click(function(e){
      e.preventDefault();
      
      data = {
        'action' : 'add',
        'data' : {
           name : jQuery('#addEmployeeModal .name').val(),
           email : jQuery('#addEmployeeModal .email').val(),
           address : jQuery('#addEmployeeModal .address').val(),
           phone : jQuery('#addEmployeeModal .phone').val(),
        }
      };

      jQuery.ajax({
            url: 'ajax.php',
            type: "POST",
            data: data,
            beforeSend:function(){
              jQuery('#addEmployeeModal .btn-success').val('Loading...');
            },
            success: function( response ){
              app.reload();
            }
      });

    });

  },

  delete:function(){

    jQuery('.delete').on('click',function(){
        var id = jQuery(this).data('id');

        jQuery('#deleteEmployeeModal .btn-danger').click(function(){
           data = {
              'action' : 'delete',
              'data' : id,
            };
          jQuery.ajax({
                url: 'ajax.php',
                type: "POST",
                data: data,
                beforeSend:function(){
                  jQuery('#editEmployeeModal .btn-info').val('Loading...');
                },
                success: function(){
                  app.reload();
                }
          });

        });

    });

  },

  edit:function(){
    jQuery('.edit').on('click',function(){
        var id = jQuery(this).data('id');

        jQuery('#editEmployeeModal .btn-info').click(function(e){
          e.preventDefault();
           data = {
              'action' : 'edit',
              'data' : {
                   id: id,
                   name : jQuery('#editEmployeeModal .name').val(),
                   email : jQuery('#editEmployeeModal .email').val(),
                   address : jQuery('#editEmployeeModal .address').val(),
                   phone : jQuery('#editEmployeeModal .phone').val(),
                }
            };
          jQuery.ajax({
                url: 'ajax.php',
                type: "POST",
                data: data,
                beforeSend:function(){
                  jQuery('#editEmployeeModal .btn-info').val('Loading...');
                },
                success: function(){
                  app.reload();
                }
          });

        });

    });
  },

  reload:function(  ){

     location.reload();

  },

  init:function(){
    app.add();
    app.delete();
    app.edit();
  }

}

$(document).ready(function(){
  app.init();
});
//Inserting My Name into the sidebar
var temp_string = $('#name').html();
var rendered_temp = _.template(temp_string);


  $('.my-name').append(rendered_temp(user));

//Inserting My Avatar into the sidebar
// var temp_string = $('#avatar').html();
// var rendered_temp = _.template(temp_string);
//
//
//   $('.avatar').append(rendered_temp(user));


//Inserting My User Name into the sidebar
var temp_string = $('#login').html();
var rendered_temp = _.template(temp_string);


  $('.username').append(rendered_temp(user));

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


//Inserting My Location into the sidebar
var temp_string = $('#location').html();
var rendered_temp = _.template(temp_string);


  $('.my-location').append(rendered_temp(user));


//Inserting My Join Date into the sidebar
var temp_string = $('#join-date').html();
var rendered_temp = _.template(temp_string);


  $('.my-join-date').append(rendered_temp(user));


//Inserting Followers into the sidebar
var temp_string = $('#followers').html();
var rendered_temp = _.template(temp_string);


  $('.followers').append(rendered_temp(user));

//Inserting Following into the sidebar
var temp_string = $('#following').html();
var rendered_temp = _.template(temp_string);


  $('.following').append(rendered_temp(user));

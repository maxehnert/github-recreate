// var user= 'maxehnert';
//
// var url = 'https://api.github.com/users/' + user + '?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';
//
// var template= $('#user_info').html();
// var rendered = _.template(template);
//
// var test = $.getJSON(url).done(function(user_data){
// //enter in here as many statements that pertain to this 'user_data' as possible
//
// $('.hero-unit').append(rendered(user_data));
//
//
// });
//
// /////////// HTML //////////////
//   <div class="hero-unit">
//       <h1>'Allo, 'Allo!</h1>
//
//     <script type="text/template" id="user_info">
//       <img src="<%= avatar_url%>" style="width:150px"/>
//       <ul>
//       <li><%= name %></li>
//
//       <li>User Name <%= login %></li>
//     </script>
//           </ul>
//
//     </div>

///**********************************************///


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

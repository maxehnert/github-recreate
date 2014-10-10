var user= 'maxehnert';
//user api
var url = 'https://api.github.com/users/' + user + '?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';
//repo api
var url2 = 'https://api.github.com/users/' + user + '/repos?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';
//starred api
var url3= 'https://api.github.com/users/' + user + '/starred?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7'

//var template= $('#user_info').html();
//var rendered = _.template(template);

// var test = $.getJSON(url).done(function(user_data){
// //enter in here as many statements that pertain to this 'user_data' as possible
//
// // example~~~~> $('.hero-unit').append(rendered(user_data));
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

//Inserting My Avatar into the sidebar
var temp_string1 = $('#avatar').html();
var rendered_temp1 = _.template(temp_string1);


//Inserting My Name into the sidebar
var temp_string2 = $('#name').html();
var rendered_temp2 = _.template(temp_string2);


//Inserting My User Name into the sidebar/header
var temp_string3 = $('#login').html();
var rendered_temp3 = _.template(temp_string3);


//Inserting My Location into the sidebar
var temp_string4 = $('#location').html();
var rendered_temp4 = _.template(temp_string4);


//Inserting My Join Date into the sidebar
var temp_string5 = $('#join-date').html();
var rendered_temp5 = _.template(temp_string5);


//Inserting Followers into the sidebar
var temp_string6 = $('#followers').html();
var rendered_temp6 = _.template(temp_string6);


//Inserting Following into the sidebar
var temp_string7 = $('#following').html();
var rendered_temp7 = _.template(temp_string7);

//Inserting My Avatar into the header
var temp_string8 = $('#avatar1').html();
var rendered_temp8 = _.template(temp_string8);

//Inserting My Organziations into the sidebar
var temp_string9 = $('#organizations').html();
var rendered_temp9 = _.template(temp_string9);

//Inserting My Starred Count into the sidebar
var temp_string10 = $('#starred').html();
var rendered_temp10 = _.template(temp_string10);

//Inserting Repo Name into the main section
var temp_string11 = $('#repo-name').html();
var rendered_temp11 = _.template(temp_string11);

///*** USER.JS FILE FUNCTION ***///

var test = $.getJSON(url).done(function(user_data){
//enter in here as many statements that pertain to this 'user_data' as possible

$('.avatar').append(rendered_temp1(user_data));
$('.my-name').append(rendered_temp2(user_data));
$('.username').append(rendered_temp3(user_data));
$('.my-location').append(rendered_temp4(user_data));
$('.my-join-date').append(rendered_temp5(user_data));
$('.followers').append(rendered_temp6(user_data));
$('.following').append(rendered_temp7(user_data));
$('.avatar1').append(rendered_temp8(user_data));
$('.organizations').append(rendered_temp9(user_data));
});


// var test3 = $.getJSON(url3).each(function(a){
//   a.done(function(user_data){
//     $('.starred').append(rendered_temp10(user_data));
//   });
// });

var test2 = _.each(abc);
  var abc = $.getJSON(url2);

  abc.done(function(repo_data){
  repo_data.forEach(function(b){
    $('.repo-name').append(rendered_temp11(b)
  )
  });
  });



  ////Build item seller
// api.results.forEach(function (a){
//   list_seller = "<span>" + a.Shop.shop_name + "</span>"
//
//       a.Images.forEach(function(b){
//
//         list_image = "<img src='" + b.url_fullxfull + "' />";
//
//       });

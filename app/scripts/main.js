var user= 'maxehnert';
//user api
var url = 'https://api.github.com/users/' + user + '?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';
//repo api
var url2 = 'https://api.github.com/users/' + user + '/repos?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';
//starred api
var url3= 'https://api.github.com/users/' + user + '/starred?b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7'



///**************** USER API ******************///

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



//********* REPO API ************//

//Inserting Repo Name into the main section
var temp_string11 = $('#repo-name').html();
var rendered_temp11 = _.template(temp_string11);

//Inserting Repo Created On Date into the main section
var temp_string12 = $('#repo-updated-at').html();
var rendered_temp12 = _.template(temp_string12);

//Inserting Repo Language into the main section
var temp_string13 = $('#repo-language').html();
var rendered_temp13 = _.template(temp_string13);

//Inserting Repo Stars into the main section
var temp_string14 = $('#repo-stars-count').html();
var rendered_temp14 = _.template(temp_string14);

//Inserting Repo Stars into the main section
var temp_string15 = $('#repo-fork-count').html();
var rendered_temp15 = _.template(temp_string15);

//************************//
var test2 = _.each(abc);
var abc = $.getJSON(url2);

  abc.done(function(repo_data){
    repo_data.forEach(function(b){
      $('.repo-name').append(rendered_temp11(b));
      $('.repo-updated-at').append(rendered_temp12(b));
      $('.repo-language').append(rendered_temp13(b));
      $('.repo-stars-count').append(rendered_temp14(b));
      $('.repo-fork-count').append(rendered_temp15(b));
    });
  });



//********* STARRED API ************//

var temp_string20 = $('#starred').html();
var rendered_temp20 = _.template(temp_string20);


//*********************//
var test3 = _.each(ab);
var ab = $.getJSON(url3);

  ab.done(function(star_data){
    star_data.forEach(function(c){
      $('.starred').append(rendered_temp20(c));
    });
  });

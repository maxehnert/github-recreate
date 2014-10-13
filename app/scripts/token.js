var token = 'b21ce09df6bf6f0aaefa2bc538eaa28eaf7e9dd7';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

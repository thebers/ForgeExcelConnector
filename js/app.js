
$(document).ready (function () {

// the following is from https://github.com/Autodesk-Forge/forge-api-nodejs-client and requires Nodejs...which I just learned doesnt belong here!

  $('#grabToken').click(function(){
    var CLIENT_ID = 'idL3OtY8Oy7vc7IWCYXxlLAMAyP7fz9E';
    var CLIENT_SECRET = 'Iee8358d303b14d1';

    // Initialize the 2-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
    // if you want the token to auto refresh
    var autoRefresh = true; // or false
    console.log(CLIENT_ID);
    console.log(CLIENT_SECRET);

    var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(CLIENT_ID, CLIENT_SECRET, [
      'data:read',
      'data:write'
    ], autoRefresh);
    console.log(CLIENT_ID);
    console.log(CLIENT_SECRET);

    oAuth2TwoLegged.authenticate().then(function(credentials){
    // The `credentials` object contains an access_token that is being used to call the endpoints.
    // In addition, this object is applied globally on the oAuth2TwoLegged client that you should use when calling secure endpoints.
    }, function(err){
      console.error(err);
    });
  });

  $('#ajaxTest').click(function(){
    var printThis = 'junk snap!';
    console.log(printThis);

    const Http = new XMLHttpRequest();
    const url='https://developer.api.autodesk.com/authentication/v1/authenticate';
    Http.open('POST', url);
    Http.send();
    Http.onreadystatechange=(e)=>{
      console.log(Http.responseText)
    };

  });
});

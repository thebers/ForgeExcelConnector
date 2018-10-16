$(document).ready (function () {

  var clientID='idL3OtY8Oy7vc7IWCYXxlLAMAyP7fz9E'
  var clientSecret='Iee8358d303b14d1'

  function getToken(){
    var accessSite = 'https://developer.api.autodesk.com/authentication/v1/authenticate'
    var data = 'client_id=MY_CLIENT_ID&client_secret=MY_CLIENT_SECRET&grant_type=client_credentials&scope=data:read%20data:write%20bucket:create'
    var header = 'Content-Type:application/x-www-form-urlencoded'

};

function createBucket(){

};

function uploadModel(){

};

function exportData(){

};

function importData(){

};

function alignData(){

};
};








// Initialization code
	var accessToken =$.cookie ('accessToken') ;
	if ( accessToken == "null" || accessToken == undefined || accessToken == "undefined" )
		HostResetAccessToken () ;
	else
		HostSetupAccessToken (JSON.parse (accessToken)) ;
	var oList =$.cookie ('models') ;
	if ( oList == "null" || oList == undefined || oList == "undefined" )
		oList =[] ;
	else
		HostSetupTranslated (JSON.parse (oList)) ;

	// Access Token request code
	$('#btnGetAccessToken').click (function (evt) {
		$.ajax ({
			url: window.location.protocol + '//' + window.location.host + '/api/token',
			type: 'post',
			data: JSON.stringify ({ 'key': $('#publicKey').val ().trim (), 'secret': $('#secretKey').val ().trim () }),
			contentType: 'application/json',
			complete: null
		}).done (function (data) {
			var date =new Date () ;
			date.setTime (date.getTime () + (parseInt (data.expires_in) * 1000)) ; // ~30 minutes
			data.expires_at =date.toString () ;
			HostSetupAccessToken (data) ;
			$.cookie ('accessToken', JSON.stringify (data), { expires: date }) ; //, secure: true }) ;
		}).fail (function (jqXHR, textStatus) {
			alert ('Server replied: ' + jqXHR.responseText.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
				var num =parseInt (numStr, 10) ; // read num as normal number
				return (String.fromCharCode (num)) ;
			})) ;
		}) ;
	}) ;












//add on document load function
function () {
var viewer;
var lmvDoc;
var viewables;
var indexViewable;
var options = {
    env: 'AutodeskProduction',
    getAccessToken: function(onGetAccessToken) {
        var accessToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJjbGllbnRfaWQiOiJpZEwzT3RZOE95N3ZjN0lXQ1lYeGxMQU1BeVA3Zno5RSIsImV4cCI6MTUzOTIzMzY3Miwic2NvcGUiOlsiZGF0YTpyZWFkIiwiZGF0YTp3cml0ZSIsImRhdGE6Y3JlYXRlIiwiYnVja2V0OnJlYWQiLCJidWNrZXQ6Y3JlYXRlIl0sImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9qd3RleHA2MCIsImp0aSI6IlRMNGZkT1cwUjJZcTh5aWpaWkEwMHRWV1BueTZOTEpHTXdacjd3VGtoVjB1M2duVlN1QkhhNWdTdmFQcWE3VUQifQ.R-c0r1ALl0L82N9CFzSIOeA5EzmKlB85N58MFnMLnCI';
        var expireTimeSeconds = 3400;

        onGetAccessToken(accessToken, expireTimeSeconds);
    }
  }

        var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YmVuYnJpbmdhcmRuZXJfMjAyOTM5MDEyMzQ1Njc4OS9IUlNHLk5XRA';
        Autodesk.Viewing.Initializer(options, function onInitialized(){
            Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
        });

      /**
 * Autodesk.Viewing.Document.load() success callback.
 * Proceeds with model initialization.
 */
function onDocumentLoadSuccess(doc) {

    // A document contains references to 3D and 2D viewables.
    viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {'type':'geometry'}, true);
    if (viewables.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }

    // Create Viewer instance and load model.
    var viewerDiv = document.getElementById('MyViewerDiv');
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
    var errorCode = viewer.start();

    // Check for initialization errors.
    if (errorCode) {
        console.error('viewer.start() error - errorCode:' + errorCode);
        return;
    }

    // Choose any of the available viewables.
    indexViewable = 0;
    lmvDoc = doc;

    // Everything is set up, load the model.
    loadModel();
}

        function loadModel() {
    var initialViewable = viewables[indexViewable];
    var svfUrl = lmvDoc.getViewablePath(initialViewable);
    var modelOptions = {
        sharedPropertyDbPath: lmvDoc.getPropertyDbPath()
    };
    viewer.loadModel(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
}



        /**
         * Autodesk.Viewing.Document.load() failuire callback.
         */
        function onDocumentLoadFailure(viewerErrorCode) {
            console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
        }

        /**
         * viewer.loadModel() success callback.
         * Invoked after the model's SVF has been initially loaded.
         * It may trigger before any geometry has been downloaded and displayed on-screen.
         */
        function onLoadModelSuccess(model) {
            console.log('onLoadModelSuccess()!');
            console.log('Validate model loaded: ' + (viewer.model === model));
            console.log(model);
        }

        /**
         * viewer.loadModel() failure callback.
         * Invoked when there's an error fetching the SVF file.
         */
        function onLoadModelError(viewerErrorCode) {
            console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
        }

    </script>

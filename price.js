$( "btn" ).click( function() {
  var pr,
    pr = $( "pr" )[ 0 ];
  switch ( $( "btn" ).index( this ) ) {
  case 0 :
    pr = jQuery.data( pr, 6.99 );
    break;
  case 1 :
    pr = jQuery.data( pr, 19.99 );
    break;
  case 2 :
    pr = jQuery.data( pr, 49.99 );
    break;
  }
  $( "pr" ).text( "" + pr );
});

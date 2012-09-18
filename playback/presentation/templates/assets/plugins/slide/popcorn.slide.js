(function( Popcorn ) {
  Popcorn.plugin( "slide", function() {
    return {
      _setup: function ( options ) {
        options.container = document.getElementById( "slide" );
        if ( options.src ) {
          var img = document.createElement( "image" );
          img.src = options.src;
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.display = "none";
          options.img = img;
          options.container.appendChild( img );
        }
        options.toString = function() {
          return options.src || "";
        };
      },
      start: function( event, options ) {
        options.img.style.display = "";
      },
      end: function( event, options ) {
        options.img.style.display = "none";
      },
      _teardown: function( options ) {
        options.container && options.img && options.container.removeChild( options.img );
      }
    };
  },
  {
    options: {
      start: {
      },
      end: {
      },
      src: {
      }
    }
  });
})( Popcorn );

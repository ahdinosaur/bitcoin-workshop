// Add your custom JavaScript for your KeyDown presentation here

$.extend(true, $[deck].defaults, {
     classes: {
             scale: 'deck-scale'
     },

   keys: {
           scale: 83 // s
     },

   baseHeight: null,
   scaleDebounce: 200
});

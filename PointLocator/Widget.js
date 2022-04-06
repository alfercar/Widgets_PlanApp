

define([

  "esri/map",
  'dojo/dom',

  "esri/geometry/Circle",
  "esri/geometry/Point",

  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/Color",
  "esri/graphic",

  "esri/SpatialReference",
  "esri/units",

  'dojo/_base/declare', 'jimu/BaseWidget'
],
  function (
    map,
    dom,

    Circle,
    Point,

    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    Color,
    Graphic,

    SpatialReference,
    Units,





    declare, BaseWidget) {

    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-PointLocator',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

        // this.symbol = new SimpleFillSymbol();
        // var poligono = this.symbol;

        // var line = new SimpleLineSymbol();
        // line.setColor(new Color([26, 26, 26, 1]));

        // poligono.setOutline(line);
        // poligono.setColor(new Color([0, 197, 255, 0.25]));


      },

      startup: function () {

        console.log('startup');
      },

      onOpen: function () {
        console.log('onOpen');
        console.log("this.map", this.map);
      },

      Localizar: function () {

     

        if (this.Longitud.value == "") {
          alert("Introduzca la longitud")
          return
        }

        else if (this.Latitud.value == "") {
          alert("Introduzca la latitud")
          return
        }

 


        

        var latitud = this.Latitud.value;
        var longitud = this.Longitud.value;
        console.log([longitud, latitud])

     
        this.map.centerAndZoom([longitud, latitud], 18);


        var radio = 5
        console.log("radio", radio)

        var point = new Point([longitud, latitud], new SpatialReference({ wkid: 4326 }));

        this.map.graphics.clear();

        var circulito = new Circle(point, {
          // center: [longitud, latitud],
          radius: 5,
          geodesic: true,

        

        });

        console.log("circulo", circulito);

        var line = new SimpleLineSymbol();
        line.setColor(new Color([26, 26, 26, 1]));
        var fill = new SimpleFillSymbol();
        fill.setColor(new Color([0, 197, 255, 0.25]));
        fill.setOutline(line);

        var graphic = new Graphic(circulito, fill);

        console.log("grafica", graphic)

        this.map.graphics.add(graphic);

      },

      onClose: function () {
        console.log('onClose');
      },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });

define([

  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/SpatialReference",

  'dojo/_base/lang',

  "esri/graphic",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",

  "esri/layers/FeatureLayer",


  'dojo/_base/declare',
  'jimu/BaseWidget'],

  function (
    QueryTask,
    Query,
    SpatialReference,

    lang,

    Graphic,
    SimpleFillSymbol,
    SimpleLineSymbol,
    Color,

    FeatureLayer,


    declare,
    BaseWidget) {

    return declare([BaseWidget], {


      baseClass: 'jimu-widget-BuscaPlanes',


      postCreate: function () {

        console.log('postCreate');
      },

      startup: function () {

        console.log('startup');
      },

      onOpen: function () {
        console.log("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Datos_PlanApp/FeatureServer")

        console.log("Servicio de las entidades", this.config.FeatureSetprueba)
      },



      cargaPlanes: function () {


        console.log("Código de Planes", this.selectPlan.value);
        let codigoPlan = this.selectPlan.value;
        if (codigoPlan == -1) { return };
        this.listaPlanes.innerHTML = "";


        var urlServer = "https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Datos_PlanApp1/FeatureServer/";

        var layerNumber;

        // bucle para decidir el feature layes del feature server


        if (this.selectPlan.value === '1') { //tiendas
          layerNumber = 8;
        } else if (this.selectPlan.value === '20') {
          layerNumber = 7;
        } else if (this.selectPlan.value === '30') {
          layerNumber = 6;
        } else if (this.selectPlan.value === '40') {
          layerNumber = 5;
        } else if (this.selectPlan.value === '50') {
          layerNumber = 4;
        } else if (this.selectPlan.value === '60') {
          layerNumber = 2;
        } else if (this.selectPlan.value === '70') {
          layerNumber = 1;
        } else if (this.selectPlan.value === '90') {
          layerNumber = 0;
        }


        var urlQuery = urlServer + layerNumber;

        // `urlServer${layerNumber}`;

        var querytask = new QueryTask(urlQuery);

        // Ejecutamos query
        const query = new Query();
        query.returnGeometry = false;

        query.outFields = ["nombre", "objectid", "codplan"];
        query.where = `codplan=${this.selectPlan.value}`;

        console.log("query", query);


        // Recogemos los valores de results query


        querytask.execute(query, lang.hitch(this, function (results) {

          console.log("results", results)

          opt = document.createElement("option");
          opt.value = "-1";
          opt.innerHTML = "Selecciona un establecimiento";
          this.listaPlanes.add(opt);

          // Creamos las opciones del select

          for (var i = 0; i < results.features.length; i++) {
            opt = document.createElement("option");
            opt.value = results.features[i].attributes.objectid;
            opt.innerHTML = results.features[i].attributes.nombre;
            this.listaPlanes.add(opt);
          }

        }))




      },



      zoomEstablecimiento: function () {
        console.log("HOLA")

        console.log("Código de Planes", this.selectPlan.value);
        let codigoPlan = this.selectPlan.value;
        if (codigoPlan == -1) { return };


        var urlServer = "https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Datos_PlanApp1/FeatureServer/";

        var layerNumber;

        // bucle para decidir el feature layes del feature server


        if (this.selectPlan.value === '1') { //tiendas
          layerNumber = 8;
        } else if (this.selectPlan.value === '20') {
          layerNumber = 7;
        } else if (this.selectPlan.value === '30') {
          layerNumber = 6;
        } else if (this.selectPlan.value === '40') {
          layerNumber = 5;
        } else if (this.selectPlan.value === '50') {
          layerNumber = 4;
        } else if (this.selectPlan.value === '60') {
          layerNumber = 2;
        } else if (this.selectPlan.value === '70') {
          layerNumber = 1;
        } else if (this.selectPlan.value === '90') {
          layerNumber = 0;
        }


        var urlQuery = urlServer + layerNumber;

        // `urlServer${layerNumber}`;

        var querytask = new QueryTask(urlQuery);

        const query2 = new Query();
        query2.returnGeometry = true;
        query2.outSpatialReference = new SpatialReference(102100);
        query2.outFields = ["nombre", "objectid", "codplan"];

        query2.where = `objectid=${this.listaPlanes.value}`;


        console.log("query2", query2);

        querytask.execute(query2, lang.hitch(this, function (results2) {

          console.log("results2", results2);

          if (results2.features.length > 0) {

            var geometria = results2.features[0].geometry;
            this.map.graphics.clear();


            var line = new SimpleLineSymbol();
            line.setColor(new Color([26, 26, 26, 1]));
            var fill = new SimpleFillSymbol();
            fill.setColor(new Color([0, 197, 255, 0.25]));
            fill.setOutline(line);


            var graphic = new Graphic(geometria, fill);

            this.map.graphics.add(graphic);

            // this.map.setExtent(geometria.getExtent(), true);

            this.map.centerAndZoom(geometria, 18)

          }



        }))




      },



      onClose: function () {
        console.log('Que pena que se cierre :(');
      },


    });
  });
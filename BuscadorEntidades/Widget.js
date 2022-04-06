
define([

  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/SpatialReference",

  'dojo/_base/lang',

  "esri/graphic",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",


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


    declare,
    BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-BuscadorEntidades',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

        console.log('postCreate');
      },

      startup: function () {

        console.log('startup');
      },

      onOpen: function () {
        console.log("this.map", this.map)


      },




      cargaPlanes: function () {


        console.log("Plan", this.selectPlan.value);
        // let codigoPlan = this.selectPlan.value;
        // if (codigoPlan == -1) { return };
        // this.listaPlanes.innerHTML = "";


        distritos = this.map.getLayer("Datos_PlanApp1_3987");
        console.log("Distritos", distritos);

        bares = this.map.getLayer("Datos_PlanApp1_9828");
        console.log("Bares", bares);

        cines = this.map.getLayer("Datos_PlanApp1_8065");
        console.log("Cines", cines);

        deporte = this.map.getLayer("Datos_PlanApp1_7620");
        console.log("Deporte", deporte);

        museos = this.map.getLayer("Datos_PlanApp1_2695");
        console.log("Museos", museos);

        ocioNocturno = this.map.getLayer("Datos_PlanApp1_3708");
        console.log("Ocio Nocturno", ocioNocturno);

        parques = this.map.getLayer("Datos_PlanApp1_7095");
        console.log("Parques", parques);

        teatros = this.map.getLayer("Datos_PlanApp1_3137");
        console.log("Teatros", teatros);

        tiendas = this.map.getLayer("Datos_PlanApp1_7368");
        console.log("Tiendas", tiendas);

        var capas = [distritos, bares, cines, deporte, museos, ocioNocturno, parques, teatros, tiendas];

        console.log("capas", capas)


        if (this.selectPlan.value == "-1") {
          tiendas.setDefinitionExpression(`1=1`);
          teatros.setDefinitionExpression(`1=1`);
          bares.setDefinitionExpression(`1=1`);
          deporte.setDefinitionExpression(`1=1`);
          cines.setDefinitionExpression(`1=1`);
          museos.setDefinitionExpression(`1=1`);
          parques.setDefinitionExpression(`1=1`);
          ocioNocturno.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            tiendas.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            teatros.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            bares.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            deporte.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            cines.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            museos.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            parques.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)
            ocioNocturno.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

        }


        else if (this.selectPlan.value == "1") {

          tiendas.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            tiendas.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }


          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');


          

        }

        else if (this.selectPlan.value == "20") {

          teatros.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            teatros.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "30") {

          parques.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            parques.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }
          

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "40") {

          ocioNocturno.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            ocioNocturno.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          bares.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "50") {

          museos.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            museos.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "60") {

          deporte.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            deporte.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "70") {

          cines.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            cines.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "90") {

          bares.setDefinitionExpression(`1=1`);

          if (this.selectValoracion.value != "-1") {

            bares.setDefinitionExpression(`"valoracion">=${this.selectValoracion.value}`)

          }

          teatros.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        };

      },

      
      onClose: function () {

        distritos = this.map.getLayer("Datos_PlanApp1_3987");


        bares = this.map.getLayer("Datos_PlanApp1_9828");


        cines = this.map.getLayer("Datos_PlanApp1_8065");
    

        deporte = this.map.getLayer("Datos_PlanApp1_7620");
       

        museos = this.map.getLayer("Datos_PlanApp1_2695");
 

        ocioNocturno = this.map.getLayer("Datos_PlanApp1_3708");
     

        parques = this.map.getLayer("Datos_PlanApp1_7095");
     
        teatros = this.map.getLayer("Datos_PlanApp1_3137");
     

        tiendas = this.map.getLayer("Datos_PlanApp1_7368");
       

        var capas = [distritos, bares, cines, deporte, museos, ocioNocturno, parques, teatros, tiendas];

        console.log("capas", capas)


        bares.setDefinitionExpression(`1=1`);

        teatros.setDefinitionExpression('1=1');
        ocioNocturno.setDefinitionExpression('1=1');
        cines.setDefinitionExpression('1=1');
        tiendas.setDefinitionExpression('1=1');
        museos.setDefinitionExpression('1=1');
        parques.setDefinitionExpression('1=1');
        deporte.setDefinitionExpression('1=1');
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
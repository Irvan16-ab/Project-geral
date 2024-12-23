var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANGUNAN_AR_50K_1 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_1 = format_BANGUNAN_AR_50K_1.readFeatures(json_BANGUNAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_1.addFeatures(features_BANGUNAN_AR_50K_1);
var lyr_BANGUNAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_AR_50K_1, 
                style: style_BANGUNAN_AR_50K_1,
                popuplayertitle: 'BANGUNAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_1.png" /> BANGUNAN_AR_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BANGUNAN_AR_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BANGUNAN_AR_50K_1];
lyr_BANGUNAN_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_AR_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BANGUNAN_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_BANGUNAN_AR_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PTNdiSurabaya_2 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_2 = format_PTNdiSurabaya_2.readFeatures(json_PTNdiSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNdiSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_2.addFeatures(features_PTNdiSurabaya_2);
var lyr_PTNdiSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_2, 
                style: style_PTNdiSurabaya_2,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdiSurabaya_2_9.png" /> <br />' });
var format_aksesibilitas_univ1union_3 = new ol.format.GeoJSON();
var features_aksesibilitas_univ1union_3 = format_aksesibilitas_univ1union_3.readFeatures(json_aksesibilitas_univ1union_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univ1union_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univ1union_3.addFeatures(features_aksesibilitas_univ1union_3);
var lyr_aksesibilitas_univ1union_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univ1union_3, 
                style: style_aksesibilitas_univ1union_3,
                popuplayertitle: 'aksesibilitas_univ (1) — union',
                interactive: true,
    title: 'aksesibilitas_univ (1) — union<br />\
    <img src="styles/legend/aksesibilitas_univ1union_3_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ1union_3_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ1union_3_2.png" /> <br />' });

lyr_Positronretina_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PTNdiSurabaya_2.setVisible(true);lyr_aksesibilitas_univ1union_3.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_GoogleSatellite_1,lyr_PTNdiSurabaya_2,lyr_aksesibilitas_univ1union_3];
lyr_PTNdiSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univ1union_3.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univ1union_3.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', 'Foto': 'inline label - always visible', });
lyr_aksesibilitas_univ1union_3.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_aksesibilitas_univ1union_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
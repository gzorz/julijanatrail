var wms_layers = [];

var format_rnpd_0 = new ol.format.GeoJSON();
var features_rnpd_0 = format_rnpd_0.readFeatures(json_rnpd_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rnpd_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rnpd_0.addFeatures(features_rnpd_0);
var lyr_rnpd_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rnpd_0, 
                style: style_rnpd_0,
                popuplayertitle: "rnpd",
                interactive: true,
    title: 'rnpd<br />\
    <img src="styles/legend/rnpd_0_0.png" /> arheološka najdišča<br />\
    <img src="styles/legend/rnpd_0_1.png" /> drugi objekti in naprave<br />\
    <img src="styles/legend/rnpd_0_2.png" /> kulturna krajina<br />\
    <img src="styles/legend/rnpd_0_3.png" /> naselja in njihovi deli<br />\
    <img src="styles/legend/rnpd_0_4.png" /> ostalo<br />\
    <img src="styles/legend/rnpd_0_5.png" /> parki in vrtovi<br />\
    <img src="styles/legend/rnpd_0_6.png" /> spominski objekti in kraji<br />\
    <img src="styles/legend/rnpd_0_7.png" /> stavbe<br />\
    <img src="styles/legend/rnpd_0_8.png" /> stavbe s parki ali z vrtovi<br />\
    <img src="styles/legend/rnpd_0_9.png" /> <br />'
        });

lyr_rnpd_0.setVisible(true);
var layersList = [lyr_rnpd_0];
lyr_rnpd_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ESD': 'ESD', 'EID': 'EID', 'IME': 'IME', 'SINONIMI': 'SINONIMI', 'OPIS': 'OPIS', 'ZVRST': 'ZVRST', 'TIP': 'TIP', 'GESLA': 'GESLA', 'DATACIJA': 'DATACIJA', 'AVTORJI': 'AVTORJI', 'LOKACIJAOPIS': 'Opis lokacije', 'OBCINA': 'Občina', 'ZAVOD': 'OE ZVKDS', 'USMERITVE': 'USMERITVE', 'STATUS': 'STATUS', 'PREDPIS': 'PREDPIS', 'PREDPISHTTP': 'PREDPISHTTP', 'VELJAVNOST': 'VELJAVNOST', 'FOTOAVTOR': 'FOTOAVTOR', 'FOTODATOTEKA': 'FOTODATOTEKA', 'POVEZAVA1': 'POVEZAVA1', 'SPOMENIK': 'SPOMENIK', 'OBCINAID': 'OBCINAID', 'QR': 'QR', 'X': 'X', 'Y': 'Y', 'PHOTOURL': 'PHOTOURL', });
lyr_rnpd_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'ESD': 'TextEdit', 'EID': 'TextEdit', 'IME': 'TextEdit', 'SINONIMI': 'TextEdit', 'OPIS': 'TextEdit', 'ZVRST': 'TextEdit', 'TIP': 'TextEdit', 'GESLA': 'TextEdit', 'DATACIJA': 'TextEdit', 'AVTORJI': 'TextEdit', 'LOKACIJAOPIS': 'TextEdit', 'OBCINA': 'TextEdit', 'ZAVOD': 'TextEdit', 'USMERITVE': 'TextEdit', 'STATUS': 'TextEdit', 'PREDPIS': 'TextEdit', 'PREDPISHTTP': 'TextEdit', 'VELJAVNOST': 'DateTime', 'FOTOAVTOR': 'TextEdit', 'FOTODATOTEKA': 'TextEdit', 'POVEZAVA1': 'TextEdit', 'SPOMENIK': 'TextEdit', 'OBCINAID': 'TextEdit', 'QR': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PHOTOURL': 'TextEdit', });
lyr_rnpd_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'ESD': 'hidden field', 'EID': 'no label', 'IME': 'inline label - always visible', 'SINONIMI': 'inline label - always visible', 'OPIS': 'inline label - always visible', 'ZVRST': 'inline label - always visible', 'TIP': 'inline label - always visible', 'GESLA': 'inline label - always visible', 'DATACIJA': 'inline label - always visible', 'AVTORJI': 'inline label - always visible', 'LOKACIJAOPIS': 'inline label - always visible', 'OBCINA': 'inline label - always visible', 'ZAVOD': 'inline label - always visible', 'USMERITVE': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'PREDPIS': 'hidden field', 'PREDPISHTTP': 'hidden field', 'VELJAVNOST': 'hidden field', 'FOTOAVTOR': 'hidden field', 'FOTODATOTEKA': 'hidden field', 'POVEZAVA1': 'hidden field', 'SPOMENIK': 'hidden field', 'OBCINAID': 'hidden field', 'QR': 'hidden field', 'X': 'no label', 'Y': 'no label', 'PHOTOURL': 'hidden field', });
lyr_rnpd_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
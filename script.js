var map = L.eeGeo.map('map', '37ae5f488d24149f85ab465c04559bcf', {
  center: [38.63448119530529, -90.23229115529193],
  zoom: 14
});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var feature_one = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Billikens Baseball Field"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.22936642169952,
            38.63466501220981
          ],
          [
            -90.22958636283875,
            38.63403226250546
          ],
          [
            -90.22943079471588,
            38.63400712001773
          ],
          [
            -90.22953271865845,
            38.63372636163903
          ],
          [
            -90.22870123386383,
            38.63356712505498
          ],
          [
            -90.22830426692963,
            38.633738932933234
          ],
          [
            -90.22805213928223,
            38.63446806422499
          ],
          [
            -90.22924304008482,
            38.634715296714944
          ],
          [
            -90.22940397262572,
            38.63467339296312
          ]
        ]
      }
    }
  ]
}

var feat_one = L.geoJSON(feature_one).addTo(map);
feat_one.bindPopup(feature_one.features[0].properties.name).openPopup();

var feature_two = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Department of Sociology & Anthropology"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23723602294922,
            38.637929241489815
          ],
          [
            -90.23658692836761,
            38.63779934560369
          ],
          [
            -90.23673713207245,
            38.63738451522973
          ],
          [
            -90.23705899715422,
            38.63745574889903
          ],
          [
            -90.23709118366241,
            38.637405466316295
          ],
          [
            -90.23738622665405,
            38.63745993911268
          ],
          [
            -90.23727893829344,
            38.63777420443724
          ],
          [
            -90.23724675178528,
            38.637874769050114
          ],
          [
            -90.23723065853119,
            38.63796276297061
          ]
        ]
      }
    }
  ]
}

var feat_two = L.geoJSON(feature_two).addTo(map);
feat_two.bindPopup(feature_two.features[0].properties.name).openPopup();

var feature_three = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Shoe Lofts Apartments"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.2293986082077,
            38.637834962241044
          ],
          [
            -90.22890508174896,
            38.63772601717693
          ],
          [
            -90.22902041673659,
            38.637380325011705
          ],
          [
            -90.22952198982239,
            38.637482985283306
          ],
          [
            -90.22940129041672,
            38.63784753281471
          ],
          [
            -90.2294173836708,
            38.63779306031292
          ],
          [
            -90.22940665483475,
            38.63781610637643
          ]
        ]
      }
    }
  ]
}

var feat_three = L.geoJSON(feature_three).addTo(map);
feat_three.bindPopup(feature_three.features[0].properties.name).openPopup();

var feature_four = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Grand Forest Apartments"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23044466972351,
            38.63324865082574
          ],
          [
            -90.23034006357193,
            38.633233984215316
          ],
          [
            -90.23039370775223,
            38.633060079891564
          ],
          [
            -90.23051172494887,
            38.633087317946035
          ],
          [
            -90.23046344518661,
            38.6332025557543
          ],
          [
            -90.23045539855957,
            38.633233984215316
          ],
          [
            -90.23044466972351,
            38.63326331743316
          ]
        ]
      }
    }
  ]
}

var feat_four = L.geoJSON(feature_four).addTo(map);
feat_four.bindPopup(feature_four.features[0].properties.name).openPopup();

var marker = L.marker([38.63288660396059, -90.23393133069318]).addTo(map);
marker.bindPopup("<b>Chipotle Mexican Grill</b><br>My all time favorite food");

var feature_five = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Chafeitz Arena"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.22900700569153,
            38.632988841853994
          ],
          [
            -90.22848665714264,
            38.63284217508318
          ],
          [
            -90.22836327552795,
            38.632875698942954
          ],
          [
            -90.22834181785583,
            38.63285893701504
          ],
          [
            -90.22803068161011,
            38.63293017518166
          ],
          [
            -90.22757470607758,
            38.63283798459959
          ],
          [
            -90.22753715515137,
            38.63289246086698
          ],
          [
            -90.2274352312088,
            38.63287150846135
          ],
          [
            -90.22721529006958,
            38.63256979314128
          ],
          [
            -90.22725284099579,
            38.63249436411285
          ],
          [
            -90.22733330726624,
            38.632242933444935
          ],
          [
            -90.22761225700378,
            38.63205855039467
          ],
          [
            -90.22785365581511,
            38.63202502615277
          ],
          [
            -90.22841155529022,
            38.63215912302633
          ],
          [
            -90.2286046743393,
            38.63243569703589
          ],
          [
            -90.22916793823242,
            38.63255722164207
          ],
          [
            -90.22907674312592,
            38.632804460722184
          ],
          [
            -90.2290391921997,
            38.632900841827514
          ],
          [
            -90.22900164127348,
            38.63300979422532
          ]
        ]
      }
    }
  ]
}

var feat_five = L.geoJSON(feature_five).addTo(map);
feat_five.bindPopup(feature_five.features[0].properties.name).openPopup();

var feature_six = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Busch Student Center"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23315370082855,
            38.6355449859574
          ],
          [
            -90.23346483707428,
            38.634627298807786
          ],
          [
            -90.2326226234436,
            38.63444711227988
          ],
          [
            -90.2325314283371,
            38.63473624858171
          ],
          [
            -90.23267090320587,
            38.63476977155574
          ],
          [
            -90.2325689792633,
            38.63505890655611
          ],
          [
            -90.2325314283371,
            38.63513433288615
          ],
          [
            -90.23266553878783,
            38.635280994967374
          ],
          [
            -90.23274600505829,
            38.63544860840706
          ],
          [
            -90.23279428482056,
            38.63557850855322
          ],
          [
            -90.23290693759918,
            38.635565937581624
          ],
          [
            -90.23289084434509,
            38.63550308269055
          ],
          [
            -90.23318588733673,
            38.63555755693266
          ]
        ]
      }
    }
  ]
}

var feat_six = L.geoJSON(feature_six).addTo(map);
feat_six.bindPopup(feature_six.features[0].properties.name).openPopup();

var feature_seven = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Simon Recreation Center"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.2362060546875,
            38.63562879241759
          ],
          [
            -90.2355569601059,
            38.63550727301834
          ],
          [
            -90.23549258708954,
            38.63544022774438
          ],
          [
            -90.23539066314697,
            38.635406705083874
          ],
          [
            -90.23536920547485,
            38.63544022774438
          ],
          [
            -90.23511707782745,
            38.635406705083874
          ],
          [
            -90.23529410362244,
            38.634870340383785
          ],
          [
            -90.23554623126982,
            38.63490805365795
          ],
          [
            -90.23554623126982,
            38.63496671871163
          ],
          [
            -90.23564815521239,
            38.634987670504884
          ],
          [
            -90.23571789264679,
            38.63494576691227
          ],
          [
            -90.23643136024475,
            38.63509242937928
          ],
          [
            -90.23632407188416,
            38.63550727301834
          ],
          [
            -90.2362060546875,
            38.63565393433654
          ]
        ]
      }
    }
  ]
}

var feat_seven = L.geoJSON(feature_seven).addTo(map);
feat_seven.bindPopup(feature_seven.features[0].properties.name).openPopup();

var feature_eight = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Ritter Hall"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23281306028366,
            38.63626781345455
          ],
          [
            -90.23248046636581,
            38.63619657860471
          ],
          [
            -90.23263067007065,
            38.63577964379899
          ],
          [
            -90.23296862840651,
            38.63584878390939
          ],
          [
            -90.23282915353774,
            38.63625943288767
          ],
          [
            -90.23281037807465,
            38.636278289161815
          ],
          [
            -90.23280769586562,
            38.63625524260387
          ]
        ]
      }
    }
  ]
}

var feat_eight = L.geoJSON(feature_eight).addTo(map);
feat_eight.bindPopup(feature_eight.features[0].properties.name).openPopup();

var feature_nine = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Pius Memorial Library"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23524850606918,
            38.63712053101447
          ],
          [
            -90.2347657084465,
            38.63702415558251
          ],
          [
            -90.23470401763916,
            38.63696339709143
          ],
          [
            -90.23448139429092,
            38.636915209285995
          ],
          [
            -90.23450016975401,
            38.63685235557806
          ],
          [
            -90.23457795381546,
            38.63686911657224
          ],
          [
            -90.23461014032364,
            38.63681883357796
          ],
          [
            -90.23454576730728,
            38.63677274080222
          ],
          [
            -90.23452430963516,
            38.636714077226614
          ],
          [
            -90.23454040288924,
            38.63666588925358
          ],
          [
            -90.23461818695068,
            38.636628176904274
          ],
          [
            -90.23470401763916,
            38.636628176904274
          ],
          [
            -90.23476302623747,
            38.63666169899352
          ],
          [
            -90.23477911949158,
            38.636630272035305
          ],
          [
            -90.23491859436035,
            38.63659046453512
          ],
          [
            -90.23499369621277,
            38.63638514128825
          ],
          [
            -90.23546576499938,
            38.63648151757942
          ],
          [
            -90.23525655269623,
            38.637097484727306
          ],
          [
            -90.23524582386015,
            38.6371310065971
          ]
        ]
      }
    }
  ]
}

var feat_nine = L.geoJSON(feature_nine).addTo(map);
feat_nine.bindPopup(feature_nine.features[0].properties.name).openPopup();

var feature_ten = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Current Residence"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.23292839527129,
            38.62695430406735
          ],
          [
            -90.23257970809937,
            38.62687886913088
          ],
          [
            -90.23264408111572,
            38.626702853970514
          ],
          [
            -90.23298740386963,
            38.6267699074159
          ],
          [
            -90.23292839527129,
            38.62696478113557
          ]
        ]
      }
    }
  ]
}

var feat_ten = L.geoJSON(feature_ten).addTo(map);
feat_ten.bindPopup(feature_ten.features[0].properties.name).openPopup();

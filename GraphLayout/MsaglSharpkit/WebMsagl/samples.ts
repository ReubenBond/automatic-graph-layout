﻿import G = require('./MSAGL/ggraph');

// Prepare a graph programmatically. Please look at the various interfaces in ggraph.ts for all the various options.
export var txt_programmatically = function () {
    var ggraph = new G.GGraph();
    var node1 = new G.GNode({ id: "node1", label: "Node 1" }); // Labels are objects, but you can use a simple string here - it'll get converted.
    var node2 = new G.GNode({ id: "node2", label: { content: "Node 2" } });
    var edge1 = new G.GEdge({ id: "edge1", source: node1.id, target: node2.id });
    // I'm returning the JSON form of this graph, but I could just as well start the layout here (after creating the node boundaries).
    var json = ggraph.getJSON();
    return json;
} ();

// Prepare a random graph with a substantial number of elements.
export var txt_manyNodes = function (nodeCount: number, edgeCount: number, customLabelChance: number) {
    var ret = '{\r\n    "nodes": [\r\n';
    for (var i = 0; i < nodeCount; i++) {
        var labelcontent;
        var labelsize;
        if (Math.random() < customLabelChance) {
            labelcontent = '*';
            labelsize = '{"width":180,"height":80}';
        }
        else {
            labelcontent = 'Node ' + i;
            labelsize = undefined;
        }
        ret += '        {\r\n            "id": "Node' + i + '",\r\n            "label": {\r\n' + (labelsize === undefined ? '' : ('                "bounds":' + labelsize + ',\r\n')) + '                "content": "' + labelcontent + '"\r\n            }\r\n        }';
        if (i < nodeCount - 1)
            ret += ',\r\n';
    }
    ret += '],\r\n    "edges": [\r\n';
    for (var i = 0; i < edgeCount; i++) {
        var from = Math.floor(Math.random() * nodeCount);
        var to = Math.floor(Math.random() * (nodeCount - from)) + from;
        ret += '        {\r\n            "id": "Edge' + i + '",\r\n            "source": "Node' + from + '",\r\n            "target": "Node' + to + '"\r\n        }';
        if (i < edgeCount - 1)
            ret += ',\r\n';
    }
    ret += ']\r\n}';
    return ret;
};

// Prepare a custom-made graph.
export var txt_fourNodes =
    '{                                      \r\n' +
    '    "nodes": [                         \r\n' +
    '        {                              \r\n' +
    '            "id": "node1",             \r\n' +
    '            "label": {                 \r\n' +
    '                "content": "Node 1"    \r\n' +
    '            },                         \r\n' +
    '            "fill": "blue"             \r\n' +
    '        }, {                           \r\n' +
    '            "id": "node2",             \r\n' +
    '            "boundaryCurve": {         \r\n' +
    '                "type": "Ellipse",     \r\n' +
    '                "axisA": {             \r\n' +
    '                    "x": 20            \r\n' +
    '                },                     \r\n' +
    '                "axisB": {             \r\n' +
    '                    "y": 10            \r\n' +
    '                }                      \r\n' +
    '            },                         \r\n' +
    '            "stroke": "red",           \r\n' +
    '            "fill": "yellow"           \r\n' +
    '        }, {                           \r\n' +
    '            "id": "node3",             \r\n' +
    '            "shape": "roundedrect",    \r\n' +
    '            "label": {                 \r\n' +
    '                "content": "*",        \r\n' +
    '                "bounds": {            \r\n' +
    '                    "width": 180,      \r\n' +
    '                    "height": 80       \r\n' +
    '                },                     \r\n' +
    '                "fill": "green"        \r\n' +
    '            }                          \r\n' +
    '        }, {                           \r\n' +
    '            "id": "node4",             \r\n' +
    '            "boundaryCurve": {         \r\n' +
    '                "type": "RoundedRect", \r\n' +
    '                "bounds": {            \r\n' +
    '                    "width": 40,       \r\n' +
    '                    "height": 20       \r\n' +
    '                },                     \r\n' +
    '                "radiusX": 5,          \r\n' +
    '                "radiusY": 5           \r\n' +
    '            }                          \r\n' +
    '        }],                            \r\n' +
    '    "edges": [                         \r\n' +
    '        {                              \r\n' +
    '            "id": "edge1",             \r\n' +
    '            "source": "node1",         \r\n' +
    '            "target": "node2",         \r\n' +
    '            "arrowHeadAtTarget": null, \r\n' +
    '            "arrowHeadAtSource": {     \r\n' +
    '                "closed": true,        \r\n' +
    '                "fill": true           \r\n' +
    '            }                          \r\n' +
    '        }, {                           \r\n' +
    '            "id": "edge2",             \r\n' +
    '            "source": "node2",         \r\n' +
    '            "target": "node3"          \r\n' +
    '        }, {                           \r\n' +
    '            "id": "edge3",             \r\n' +
    '            "source": "node2",         \r\n' +
    '            "target": "node4"          \r\n' +
    '        }, {                           \r\n' +
    '            "id": "edge4",             \r\n' +
    '            "source": "node1",         \r\n' +
    '            "target": "node3"          \r\n' +
    '        }, {                           \r\n' +
    '            "id": "edge5",             \r\n' +
    '            "source": "node1",         \r\n' +
    '            "target": "node4",         \r\n' +
    '            "label": {                 \r\n' +
    '                "content": "Edge 5"    \r\n' +
    '            }                          \r\n' +
    '        }]                             \r\n' +
    '}                                      \r\n';

export var customSVG =
    //'<svg xmlns="http://www.w3.org/2000/svg" height="78.769" width="179.411">                                        ' +
    '    <g>                                                                                                         ' +
    '<style>g.Normal { fill: none; } path.Normal { stroke: silver; stroke-width: 2.5; stroke-linejoin: round; }      ' +
    'text.Normaltext { stroke: black; fill: black; stroke-width: 0; font-family: Verdana, Arial, sans - serif;       ' +
    'font-size: 15px; text-anchor: middle; }.Toe_3 { stroke: red; stroke-width: 2.5; stroke-linejoin: round; }       ' +
    '.Toe_3text { fill: red } .Toe_5 { stroke: green; stroke-width: 2.5; stroke-linejoin: round; } .Toe_5text        ' +
    '{ fill: green } </style>                                                                                        ' +
    '  <g transform = "translate(0,0)" class="Normal">                                                               ' +
    '    <g class="Normal">                                                                                          ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 55.249,8.514                                                                                       ' +
    '         L 82.534, 36.798                                                                                       ' +
    '         L 83.534, 36.798" />                                                                                   ' +
    '<text class="Normaltext" x = "75.049" y = "17" transform = "rotate(44.999 75.049,17)" > 6 </text>               ' +
    '  <path class="Toe_3"                                                                                           ' +
    '      d = "M 83.534,36.798                                                                                      ' +
    '         L 115.534, 36.798" />                                                                                  ' +
    '<text class="Toe_3text" x = "99.534" y = "28.798" transform = "rotate(0 99.534,28.798)" > 3 </text>             ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 115.534,36.798                                                                                     ' +
    '         L 155.534, 36.798                                                                                      ' +
    '         L 148.534, 32.798" />                                                                                  ' +
    '<text class="Normaltext" x = "135.534" y = "28.798" transform = "rotate(0 135.534,28.798)" > 4 </text>          ' +
    '</g>                                                                                                            ' +
    '<g class="Normal">                                                                                              ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 155.534,44.798                                                                                     ' +
    '         L 115.534, 44.798" />                                                                                  ' +
    '<text class="Normaltext" x = "135.534" y = "61.298" transform = "rotate(-0.001 135.534,61.298)" > 4 *</text>    ' +
    '  <path class="Toe_3"                                                                                           ' +
    '      d = "M 115.534,44.798                                                                                     ' +
    '         L 76.534, 44.798" />                                                                                   ' +
    '<text class="Toe_3text" x = "99.534" y = "61.298" transform = "rotate(-0.001 99.534,61.298)" > 3 *</text>       ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 76.534,44.798                                                                                      ' +
    '         L 29.534, 44.799                                                                                       ' +
    '         L 36.534, 48.799" />                                                                                   ' +
    '<text class="Normaltext" x = "49.534" y = "61.299" transform = "rotate(-0.001 49.534,61.299)" > 2 *</text>      ' +
    '  <path class="Toe_5"                                                                                           ' +
    '      d = "M 178.161,67.426                                                                                     ' +
    '         L 156.534, 44.798                                                                                      ' +
    '         L 155.534, 44.798" />                                                                                  ' +
    '<text class="Toe_5text" x = "155.18" y = "67.779" transform = "rotate(44.999 155.18,67.779)" > 5 *</text>       ' +
    '</g>                                                                                                            ' +
    '<g class="Normal">                                                                                              ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 1.25,8.514                                                                                         ' +
    '         L 28.534, 36.799                                                                                       ' +
    '         L 29.534, 36.799" />                                                                                   ' +
    '<text class="Normaltext" x = "21.049" y = "17" transform = "rotate(44.999 21.049,17)" > 1 </text>               ' +
    '  <path class="Normal"                                                                                          ' +
    '      d = "M 29.534,36.799                                                                                      ' +
    '         L 69.534, 36.799                                                                                       ' +
    '         L 62.534, 32.799" />                                                                                   ' +
    '<text class="Normaltext" x = "49.534" y = "28.799" transform = "rotate(0 49.534,28.799)" > 2 </text>            ' +
    '</g>                                                                                                            ' +
    '</g>                                                                                                            ' +
    '</g>                                                                                                            ' +
    //'</svg>                                                                                                          ' +
    '';
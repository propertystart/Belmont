var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8015751989194815,
          "pitch": 0.44205092716232386,
          "rotation": 0,
          "target": "1-master"
        },
        {
          "yaw": -0.6582142003596232,
          "pitch": 0.2779126895161408,
          "rotation": 0,
          "target": "3-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7256501794365953,
          "pitch": 0.21024713215534874,
          "rotation": 0,
          "target": "2-ensuite"
        },
        {
          "yaw": -2.733024220962463,
          "pitch": 0.199148242346336,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9951606823632844,
          "pitch": 0.29810277875608904,
          "rotation": 0,
          "target": "1-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6255075415853,
          "pitch": 0.1201057030797621,
          "rotation": 0,
          "target": "4-powder"
        },
        {
          "yaw": 0.6371903772463217,
          "pitch": 0.24266467551909265,
          "rotation": 0,
          "target": "1-master"
        },
        {
          "yaw": -1.0080355688506941,
          "pitch": 0.15944017446804892,
          "rotation": 0,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-powder",
      "name": "Powder",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.675697818189736,
        "pitch": 0.3051338529440297,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -1.8414848176252505,
          "pitch": 0.2977234210721811,
          "rotation": 0,
          "target": "3-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8877049540374582,
          "pitch": 0.1672812636581007,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": -0.03386581032286706,
          "pitch": -0.12414474742373116,
          "rotation": 0,
          "target": "9-landing"
        },
        {
          "yaw": -1.9369105541639904,
          "pitch": 0.15214488384450853,
          "rotation": 0,
          "target": "7-family"
        },
        {
          "yaw": 1.4898484684501767,
          "pitch": 0.09931366441590228,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 1.1000140569540555,
          "pitch": 0.23572245374567657,
          "rotation": 0,
          "target": "4-powder"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1651298602663118,
          "pitch": 0.19367574533271537,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -1.4698680171796212,
          "pitch": 0.10267963939958946,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -2.210277739869305,
          "pitch": -0.17474333132649278,
          "rotation": 0,
          "target": "9-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1661743749726199,
          "pitch": 0.08655192948390855,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 0.34598430478688336,
          "pitch": 0.14542888990900593,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": 0.7889968935657592,
          "pitch": 0.10248842109016643,
          "rotation": 0,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5718474448530486,
          "pitch": 0.1751128447758319,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": 2.4133603367546668,
          "pitch": -0.003379124695516822,
          "rotation": 0,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7640809580821166,
          "pitch": 0.716749687678746,
          "rotation": 0,
          "target": "5-stairs"
        },
        {
          "yaw": -1.0702170258410924,
          "pitch": 0.16269772841175723,
          "rotation": 0,
          "target": "10-retreat"
        },
        {
          "yaw": 0.4736250560805182,
          "pitch": 0.1463835008345047,
          "rotation": 0,
          "target": "14-bedroom4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-retreat",
      "name": "Retreat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5568629444158333,
          "pitch": 0.13281888802684705,
          "rotation": 0,
          "target": "14-bedroom4"
        },
        {
          "yaw": 2.867852127528362,
          "pitch": 0.23548386655986064,
          "rotation": 0,
          "target": "11-bathroom"
        },
        {
          "yaw": 2.4681403205754213,
          "pitch": 0.1853741731996763,
          "rotation": 0,
          "target": "13-bedroom3"
        },
        {
          "yaw": 1.4649207780996854,
          "pitch": 0.1555613188579983,
          "rotation": 0,
          "target": "12-bedroom2"
        },
        {
          "yaw": -1.9895087284767197,
          "pitch": 0.2276095492249972,
          "rotation": 0,
          "target": "9-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0549316420396924,
          "pitch": 0.23376262425181693,
          "rotation": 0,
          "target": "10-retreat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8816004762679555,
          "pitch": 0.26532116851262444,
          "rotation": 0,
          "target": "10-retreat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom3",
      "name": "Bedroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.036482301207558,
          "pitch": 0.1914461847317348,
          "rotation": 0,
          "target": "10-retreat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom4",
      "name": "Bedroom4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.440285442268328,
          "pitch": 0.19659141417275272,
          "rotation": 0,
          "target": "10-retreat"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "belmont",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

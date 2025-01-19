var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.01377215087067,
        "pitch": 1.1899289247456082,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.018328682970096,
          "pitch": 0.7563753442492143,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "STAIRS",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2245866764880322,
        "pitch": 0.03605845226502424,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1081330156745608,
          "pitch": 0.5008466902793369,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen"
        },
        {
          "yaw": 3.091374757526081,
          "pitch": 0.6577787242464517,
          "rotation": 15.707963267948973,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4258337138441082,
        "pitch": 0.3265424339673846,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.393658089440647,
          "pitch": 0.466683010319926,
          "rotation": 5.497787143782138,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CHINGFORD",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

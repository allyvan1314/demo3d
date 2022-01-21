const ACTION_TYPE = {
    YOUTUBE_VIDEO_INFO: 1,
    LOAD_VIEW: 2
}
const views = [{
    "id": 1,
    "name": "ISC",
    "image": "./assets/images/1/flagpole.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [0.07, 0, 2.45],
        "viewId": 2
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [2.72, -0.19, 0.34],
        "viewId": 3
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [-2.91, -0.06, 0.14],
        "viewId": 4
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [-0.46, 0.2, -1.91],
        "viewId": 5
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [0.98, 0.5, -1.32],
        "viewId": 6
    }]
}, {
    "id": 2,
    "name": "Lobby",
    "image": "./assets/images/1/lobby.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [0.47, -0.39, 2.78],
        "viewId": 1
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [0.4, -0.33, -2.84],
        "viewId": 7
    }, {
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [2.19, 0.5, -1.72],
        "viewId": 8
    }, {
        "type": ACTION_TYPE.YOUTUBE_VIDEO_INFO,
        "position": [2.05, -0.26, 0.86],
        "viewId": null,
        "embedCode": `
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/iIhgSeqsHzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    }]
}, {
    "id": 3,
    "name": "Conner 1",
    "image": "./assets/images/1/conner-1.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}, {
    "id": 4,
    "name": "FIS",
    "image": "./assets/images/1/conner-4.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}, {
    "id": 5,
    "name": "CMT8 Street",
    "image": "./assets/images/1/cmt8-street.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}, {
    "id": 6,
    "name": "Overview",
    "image": "./assets/images/1/overview.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}, {
    "id": 7,
    "name": "Center",
    "image": "./assets/images/1/center.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}, {
    "id": 8,
    "name": "Up Stairs",
    "image": "./assets/images/1/upstairs.jpg",
    "interacts": [{
        "type": ACTION_TYPE.LOAD_VIEW,
        "position": [1.5, -1.7, 0.5],
        "viewId": 1
    }]
}];


const getViewById = (id) => views.find(x => x.id === id);

const centers = [{
        "id": 1,
        "title": "Tập đoàn FPT-Trụ sở chính",
        "position": [21.0268969, 105.788075],
        "viewId": 1
    }, {
        "id": 2,
        "title": "Ftel Tân thuận 2",
        "position": [10.7537265, 106.738397],
        "viewId": 1,
        "floors": [{
            "name": "Tầng 1",
            "viewId": 1
        }]
    },
    {
        "id": 3,
        "title": "Ftel Tân thuận 3",
        "position": [10.7670257, 106.7471121],
        "viewId": 1,
        "floors": [{
            "name": "Tầng 1",
            "viewId": 1
        }]
    }
]


export { centers, getViewById, ACTION_TYPE };
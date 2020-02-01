const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	colSection: {
		type: "string",
		default: ""
	},
	columns: {
		type: "number",
		default: 1
	},
	inspectorTypeColumn: {
		type: "boolean",
		default: false
	},
	wrapAlignment: {
		type: "string",
		default: ""
	},
	wrapVerticalAligment: {
		type: "string",
		default: ""
	},
	currentTab: {
		type: "string",
		default: ""
	},
    currentTabOverlay: {
	    type: "string",
	    default: ""
	},
	tabletSizeGrid: {
		type: "string",
		default: ""
	},
	mobileSizeGrid: {
		type: "string",
		default: ""
	},
	colWidthOne: {
		type: "string",
		default: ""
	},
	colWidthTwo: {
		type: "string",
		default: ""
	},
	colWidthThree: {
		type: "string",
		default: ""
	},
	colWidthFour: {
		type: "string",
		default: ""
	},
	colWidthFive: {
		type: "string",
		default: ""
	},
	colWidthSix: {
		type: "string",
		default: ""
	},
	startOptions: {
		type: "boolean",
		default: true
	},
	selectUnits: {
		type: "string",
		default: "px"
	},
    selectUnitsTab: {
        type: "string",
        default: "px"
    },
    selectUnitsMob: {
        type: "string",
        default: "px"
    },
	marginTopWrap: {
		type: "number",
		default: 0
	},
	marginBottomWrap: {
		type: "number",
		default: 0
	},
	marginRightWrap: {
		type: "number",
		default: 0
	},
	marginLeftWrap: {
		type: "number",
		default: 0
	},
	paddingTopWrap: {
		type: "number",
		default: 0
	},
	paddingBottomWrap: {
		type: "number",
		default: 0
	},
	paddingRightWrap: {
		type: "number",
		default: 0
	},
	paddingLeftWrap: {
		type: "number",
		default: 0
	},
    marginTopWrapTab: {
        type: "number",
        default: 0
    },
    marginBottomWrapTab: {
        type: "number",
        default: 0
    },
    marginRightWrapTab: {
        type: "number",
        default: 0
    },
    marginLeftWrapTab: {
        type: "number",
        default: 0
    },
    paddingTopWrapTab: {
        type: "number",
        default: 0
    },
    paddingBottomWrapTab: {
        type: "number",
        default: 0
    },
    paddingRightWrapTab: {
        type: "number",
        default: 0
    },
    paddingLeftWrapTab: {
        type: "number",
        default: 0
    },
    marginTopWrapMob: {
        type: "number",
        default: 0
    },
    marginBottomWrapMob: {
        type: "number",
        default: 0
    },
    marginRightWrapMob: {
        type: "number",
        default: 0
    },
    marginLeftWrapMob: {
        type: "number",
        default: 0
    },
    paddingTopWrapMob: {
        type: "number",
        default: 0
    },
    paddingBottomWrapMob: {
        type: "number",
        default: 0
    },
    paddingRightWrapMob: {
        type: "number",
        default: 0
    },
    paddingLeftWrapMob: {
        type: "number",
        default: 0
    },
	gutter: {
		type: "string",
		default: "0px"
	},
    set_tab_bg: {
        type: 'boolean',
        default: false
    },
    set_mob_bg: {
        type: 'boolean',
        default: false
    },
	wrapTag: {
		type: "string",
		default: "div"
	},
	wrapBorderStyle: {
		type: "string",
		default: "solid"
	},
	wrapBorderSize: {
		type: "number",
		default: 0
	},
	wrapBorderRadius: {
		type: "number",
		default: 0
	},
	wrapBorderColor: {
		type: "string",
		default: "#ffffff"
	},
	wrapColor: {
        type: "string",
        background: "#ffffff"
    },
    wrapColorTab: {
        type: "string",
        background: "#ffffff"
    },
    wrapColorMob: {
        type: "string",
        background: "#ffffff"
    },
	wrapBackgroundSize: {
		type: "string",
		default: "cover"
	},
	wrapBackgroundPosition: {
		type: "string",
		default: "center center"
	},
	wrapBackgroundRepeat: {
		type: "string",
		default: "no-repeat"
	},
	wrapBackgroundAttachment: {
		type: "string",
		default: "scroll"
	},
    wrapBackgroundSizeTab: {
        type: "string",
        default: "cover"
    },
    wrapBackgroundPositionTab: {
        type: "string",
        default: "center center"
    },
    wrapBackgroundRepeatTab: {
        type: "string",
        default: "no-repeat"
    },
    wrapBackgroundAttachmentTab: {
        type: "string",
        default: "scroll"
    },
    wrapBackgroundSizeMob: {
        type: "string",
        default: "cover"
    },
    wrapBackgroundPositionMob: {
        type: "string",
        default: "center center"
    },
    wrapBackgroundRepeatMob: {
        type: "string",
        default: "no-repeat"
    },
    wrapBackgroundAttachmentMob: {
        type: "string",
        default: "scroll"
    },
	imgURL: {
		type: "string",
		default: ""
	},
	imgID: {
		type: "number"
	},
	imgAlt: {
		type: "string",
		default: ""
	},
    imgURLtab: {
        type: "string",
        default: ""
    },
    imgIDtab: {
        type: "number"
    },
    imgAltTab: {
        type: "string",
        default: ""
    },
    imgURLmob: {
        type: "string",
        default: ""
    },
    imgIDmob: {
        type: "number"
    },
    imgAltMob: {
        type: "string",
        default: ""
    },
	videoURL: {
		type: "string",
		default: ""
	},
	videoID: {
		type: "number"
	},
	videoMuted: {
		type: "boolean",
		default: true
	},
	videoLoop: {
		type: "boolean",
		default: true
	},
	wrapBackgroundOverlay: {
		type: "number",
		default: 0
	},
	wrapBackgroundOverlayCol: {
		type: "string",
		default: "#ffffff"
	},
	selectTab: {
	    type: "string",
	    default: "Standart",
	},
    gradientType: {
	    type: "string",
	    default: "linear",
	},
    gradientAngle: {
	   type: "number",
	   default: 180,
	},
    gradientPosition: {
	   type: "string",
	   default: "center center",
	},
    wrapGradientOverlay: {
        type: "number",
        default: 0
	},
    wrapGradientOverlayCol:{
        type: "string",
        default: "#ffffff"
	},
    wrapGradientLocation:{
        type: "number",
        default: 0
	},
    wrapGradientSecondCol:{
        type: "string",
        default: "#332bbf"
	},
    wrapGradientSecondLocation:{
	    type: "number",
        default: 0
    },
	textColor: {
		type: "string",
		default: ""
	}
};

export default attributes;
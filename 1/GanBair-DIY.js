(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GanBair_DIY_atlas_", frames: [[150,705,73,62],[75,705,73,62],[225,193,147,126],[1937,577,73,62],[1937,449,73,62],[1937,513,73,62],[1937,641,73,62],[0,642,73,62],[225,705,73,62],[374,193,147,126],[225,0,223,191],[450,0,223,191],[675,0,223,191],[900,0,223,191],[1350,0,223,191],[1125,0,223,191],[1575,0,223,191],[0,0,223,191],[1800,0,223,191],[600,705,73,62],[300,705,73,62],[672,193,147,126],[750,705,73,62],[375,705,73,62],[450,705,73,62],[825,705,73,62],[900,705,73,62],[975,705,73,62],[821,193,147,126],[523,193,147,126],[525,705,73,62],[675,705,73,62],[1500,705,73,62],[1350,705,73,62],[1275,705,73,62],[1119,193,147,126],[970,193,147,126],[1575,705,73,62],[1200,705,73,62],[1050,705,73,62],[1425,705,73,62],[1125,705,73,62],[1268,193,147,126],[1864,193,147,126],[1417,193,147,126],[1566,193,147,126],[1715,193,147,126],[1800,705,73,62],[1725,705,73,62],[1950,705,73,62],[1650,705,73,62],[1875,705,73,62],[225,321,147,126],[150,769,73,62],[225,769,73,62],[375,769,73,62],[300,769,73,62],[75,769,73,62],[0,706,73,62],[450,769,73,62],[525,769,73,62],[600,769,73,62],[675,769,73,62],[750,769,73,62],[900,769,73,62],[825,769,73,62],[975,769,73,62],[1125,769,73,62],[1050,769,73,62],[1200,769,73,62],[1275,769,73,62],[1500,769,73,62],[1350,769,73,62],[374,321,147,126],[1425,769,73,62],[1875,769,73,62],[1950,769,73,62],[1800,769,73,62],[0,770,73,62],[1575,769,73,62],[75,833,73,62],[1650,769,73,62],[150,833,73,62],[225,833,73,62],[1725,769,73,62],[525,833,73,62],[375,833,73,62],[600,833,73,62],[450,833,73,62],[675,833,73,62],[750,833,73,62],[300,833,73,62],[523,321,147,126],[1119,321,147,126],[672,321,147,126],[821,321,147,126],[970,321,147,126],[1417,321,147,126],[1566,321,147,126],[0,386,147,126],[1864,321,147,126],[1268,321,147,126],[1050,833,73,62],[975,833,73,62],[1650,833,73,62],[900,833,73,62],[1275,833,73,62],[1715,321,147,126],[1125,833,73,62],[1950,833,73,62],[1350,833,73,62],[1875,833,73,62],[1200,833,73,62],[825,833,73,62],[1425,833,73,62],[1500,833,73,62],[1575,833,73,62],[1725,833,73,62],[1800,833,73,62],[300,897,73,62],[825,897,73,62],[150,897,73,62],[225,897,73,62],[450,897,73,62],[525,897,73,62],[750,897,73,62],[375,897,73,62],[75,897,73,62],[600,897,73,62],[0,834,73,62],[675,897,73,62],[149,449,147,126],[975,897,73,62],[900,897,73,62],[1275,897,73,62],[1050,897,73,62],[1200,897,73,62],[1125,897,73,62],[0,898,73,62],[1425,897,73,62],[1650,897,73,62],[1725,897,73,62],[375,961,73,62],[225,961,73,62],[1875,897,73,62],[1575,897,73,62],[1350,897,73,62],[75,961,73,62],[1950,897,73,62],[1500,897,73,62],[1043,449,147,126],[1192,449,147,126],[298,449,147,126],[894,449,147,126],[596,449,147,126],[1341,449,147,126],[447,449,147,126],[1490,449,147,126],[1639,449,147,126],[745,449,147,126],[1800,897,73,62],[150,961,73,62],[300,961,73,62],[1650,961,73,62],[525,961,73,62],[1788,449,147,126],[1500,961,73,62],[1050,961,73,62],[1575,961,73,62],[825,961,73,62],[900,961,73,62],[1275,961,73,62],[600,961,73,62],[975,961,73,62],[1125,961,73,62],[1725,961,73,62],[1200,961,73,62],[1350,961,73,62],[450,961,73,62],[675,961,73,62],[1425,961,73,62],[750,961,73,62],[1875,961,73,62],[0,962,73,62],[596,577,147,126],[298,577,147,126],[1192,577,147,126],[149,577,147,126],[447,577,147,126],[1043,577,147,126],[0,514,147,126],[745,577,147,126],[600,1025,73,62],[375,1025,73,62],[1950,961,73,62],[525,1025,73,62],[75,1025,73,62],[894,577,147,126],[300,1025,73,62],[150,1025,73,62],[225,1025,73,62],[450,1025,73,62],[1800,961,73,62],[675,1025,73,62],[1200,1025,73,62],[1275,1025,73,62],[975,1025,73,62],[1350,1025,73,62],[1425,1025,73,62],[750,1025,73,62],[1500,1025,73,62],[1050,1025,73,62],[825,1025,73,62],[1575,1025,73,62],[900,1025,73,62],[1125,1025,73,62],[1341,577,147,126],[600,1089,73,62],[75,1089,73,62],[1875,1025,73,62],[225,1089,73,62],[1650,1025,73,62],[1490,577,147,126],[675,1089,73,62],[1725,1025,73,62],[1800,1025,73,62],[150,1089,73,62],[450,1089,73,62],[300,1089,73,62],[1950,1025,73,62],[375,1089,73,62],[0,1026,73,62],[525,1089,73,62],[750,1089,73,62],[1425,1089,73,62],[825,1089,73,62],[1650,1089,73,62],[1500,1089,73,62],[1275,1089,73,62],[900,1089,73,62],[1350,1089,73,62],[975,1089,73,62],[1050,1089,73,62],[1125,1089,73,62],[1200,1089,73,62],[1575,1089,73,62],[1639,577,147,126],[1725,1089,73,62],[675,1153,73,62],[375,1153,73,62],[75,1153,73,62],[525,1153,73,62],[150,1153,73,62],[1875,1089,73,62],[225,1153,73,62],[750,1153,73,62],[825,1153,73,62],[300,1153,73,62],[900,1153,73,62],[450,1153,73,62],[1050,1153,73,62],[975,1153,73,62],[600,1153,73,62],[0,1090,73,62],[1125,1153,73,62],[1800,1089,73,62],[1200,1153,73,62],[1275,1153,73,62],[1950,1089,73,62],[1350,1153,73,62],[1788,577,147,126],[1425,1153,73,62],[1500,1153,73,62],[75,1217,73,62],[1725,1153,73,62],[1575,1153,73,62],[1650,1153,73,62],[1800,1153,73,62],[1875,1153,73,62],[150,1217,73,62],[1950,1153,73,62],[0,1154,73,62],[225,1217,73,62],[525,1217,73,62],[375,1217,73,62],[450,1217,73,62],[600,1217,73,62],[300,1217,73,62],[0,193,223,191]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_7 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_8 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_9 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_10 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_11 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_12 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_13 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_14 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_15 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Image_10 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Image_10_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Image_11_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Image_12_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Image_13_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Image_13_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Image_13_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Image_13_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Image_13_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Image_14_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Image_15_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Image_15_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Image_15_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Image_15_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Image_15_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Image_16 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Image_17 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Image_18 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Image_19 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Image_30 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Image_31 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Image_32 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Image_33 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Image_34 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Image_35 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Image_36 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Image_37 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Image_38 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Image_39 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Image_3_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.Image_4_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.Image_50 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.Image_51 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.Image_52 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Image_53 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.Image_54 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Image_55 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.Image_56 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.Image_57 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.Image_58 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.Image_59 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.Image_5_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.Image_62 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.Image_63 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.Image_64 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.Image_65 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.Image_66 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.Image_67 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.Image_68 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.Image_69 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.Image_71 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(225);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(226);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(227);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(228);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(229);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(230);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(231);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(232);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(233);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(234);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(235);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(236);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(237);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(238);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(239);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(240);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(241);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(242);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(243);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(244);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(245);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(246);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(247);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(248);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(249);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(250);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(251);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(252);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(253);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(254);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(255);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(256);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(257);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(258);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(259);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(260);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(261);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(262);
}).prototype = p = new cjs.Sprite();



(lib.Image_8_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(263);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(264);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(265);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(266);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(267);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(268);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(269);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_0_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(270);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(271);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(272);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(273);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(274);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(275);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(276);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_2_5 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(277);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(278);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_4_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(279);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_4_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(280);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_4_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(281);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_4_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(282);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_6 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(283);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_6_1 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(284);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_6_2 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(285);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_6_3 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(286);
}).prototype = p = new cjs.Sprite();



(lib.Image_9_6_4 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(287);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_16 = function() {
	this.spriteSheet = ss["GanBair_DIY_atlas_"];
	this.gotoAndStop(288);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.woodSection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AhfBjIAAh0IgfhLIAkAAIAYBCIAAABIAGABQAIAAAEgFQAEgEAAgKIAAgxIAgAAIAAAyQAAAWgMALQgFAEgHADQgIACgKAAIgJgBIAABkgAAGAcIAjgFIgehzIAhAAIAZBqQAJgGAEgJQAFgKABgQIAGhBIAhgGIgGBCQgCAUgFAMQgPAmguAIIgoAGg");
	this.shape.setTransform(-2,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.instance = new lib.Image_11();
	this.instance.parent = this;
	this.instance.setTransform(-158.4,-14);

	this.instance_1 = new lib.Image_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-77.1,-14);

	this.instance_2 = new lib.Image_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-14);

	this.instance_3 = new lib.Image_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.4,-14);

	this.instance_4 = new lib.Image_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(166.7,-14);

	this.instance_5 = new lib.Image_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(247.9,-14);

	this.instance_6 = new lib.Image_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(329.2,-14);

	this.instance_7 = new lib.Image_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-402.2,-14);

	this.instance_8 = new lib.Image_8_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-320.9,-14);

	this.instance_9 = new lib.Image_9_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-239.7,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#523422").s().p("Ag8AzIAkgFIgfhzIAiAAIAQA/IAHArQAKgGAEgKQAFgJABgPIAGhCIAhgFIgGBBQgCATgFANQgPAngtAHIgpAGg");
	this.shape_2.setTransform(4.7,-35.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#523422").s().p("AgaBgIAAh0IgehLIAkAAIAWBCIAAABIAGABQAJAAADgFQAFgEAAgKIAAgxIAgAAIAAAyQAAAWgNALQgEAEgHADQgIACgKAAIgJgBIAABkg");
	this.shape_3.setTransform(-8.9,-33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8E9B1").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D8D8").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427,-64.5,854,129);


(lib.wood10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_18();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_19();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_10_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_11_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_12_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_13_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_14_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_15_0();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_16();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.wood1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_17();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.tiresSection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("Ah2BHIACgdIADABIAFAAIAHAAQAEAAAGgCQAIgDAFgHQAFgIAAgKIAAgnQAAgNgGgEQgDgBgEAAQgJAAgHACIgCAAIAAgaQAJgDAMAAQAMAAAIADQAHACAFAEQAEADADAGIADAMIABAOIAABhIgZAAIgFgTIgBAAIgGAHIgHAHIgKAFQgGACgGAAIgMgBgADHBGIAAgZIBOACIgegmIgxhNIAkAAIAnA/QAIgLACgVIACgfIAhAAIgCAaQgCASgDAJIgFALQgFAKgLAKIAbAjIAAATgABzBGIAAgZIAaAAIAAgxQAAgTgDgIIgFgGQgEgHgLAAQgFAAgFACIgHAGQgHAHgCAFIgBACIgJBcIggAAIAIhXIAAgKQAAgTgIgWIAgAAIAEAKIADALIACAAIABgCIAEgGQAEgEAEgDQAEgDAIgDQAHgCAKAAQAJAAAHADQAIAEAFAFQAEAGADAJQAFAOAAAVIAABOgAk9BGIAAiHIAYgDIAfgBQAeAAANAKQANAJAAAVIAABjgAkcgsIAABZIAtAAIAAhKQAAgKgHgDQgHgDgNAAIgSABgAgIAXIAAhbIAgAAIAABAIgWAbgAitAXIAAhbIAgAAIAABAIgWAbg");
	this.shape.setTransform(-1.1,-36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.instance = new lib.Image_10();
	this.instance.parent = this;
	this.instance.setTransform(-402.2,-14);

	this.instance_1 = new lib.Image_1_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-320.9,-14);

	this.instance_2 = new lib.Image_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-239.7,-14);

	this.instance_3 = new lib.Image_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-158.4,-14);

	this.instance_4 = new lib.Image_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-77.1,-14);

	this.instance_5 = new lib.Image_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.1,-14);

	this.instance_6 = new lib.Image_6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(85.4,-14);

	this.instance_7 = new lib.Image_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(166.7,-14);

	this.instance_8 = new lib.Image_8_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(247.9,-14);

	this.instance_9 = new lib.Image_9_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(329.2,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#523422").s().p("Ag6BFIAAgYIA2AAIAXABIgdgmIgxhMIAlAAIAlA+QAIgLACgVIACgeIAhAAIgCAZQgCATgDAJIgEAKQgGALgLAJIAcAkIAAASg");
	this.shape_2.setTransform(24.7,-36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#523422").s().p("AADBGIAAgYIAaAAIAAgxQAAgTgDgIIgFgHQgEgGgLAAQgFAAgEACIgHAFQgHAIgCAFIgBACIgJBbIggAAIAIhXIAAgJQAAgUgIgVIAgAAIAEAKIADALIACAAIABgCIAEgGQAEgFAEgDQAEgCAHgDQAHgCAKAAQAJAAAHADQAIAEAFAFQAEAGADAJQAFAOAAAVIAABNg");
	this.shape_3.setTransform(10.1,-36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#523422").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_4.setTransform(-0.4,-38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#523422").s().p("AgmBHIADgdIACABIAFAAIAHAAQAEAAAGgCQAJgDADgHQAFgIABgKIAAgnQgBgNgFgEQgDgBgEAAQgJAAgHACIgCAAIAAgaQAKgDALAAQALAAAIADQAIACAEAEQAFADACAGIADAMIABAOIAABhIgZAAIgEgTIgCAAIgGAHIgGAHIgKAFQgGACgFAAIgNgBg");
	this.shape_5.setTransform(-9.1,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#523422").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_6.setTransform(-16.9,-38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#523422").s().p("Ag3BGIAAiGIAYgEIAfgBQAdAAANAKQANAJABAWIAABigAgWgsIAABZIAsAAIAAhKQAAgKgHgDQgHgDgMABIgSAAg");
	this.shape_7.setTransform(-27.3,-36);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E9B1").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8D8D8").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427,-64.5,854,129);


(lib.tire10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_37();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_38();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_39();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_30();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_31();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_32();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_33();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_34();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_35();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.tire1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_36();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.Image_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_0_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.2,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12, new cjs.Rectangle(9.2,5.7,223,191), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_1.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_0_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_2.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,223,38), null);


(lib.Image_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_0_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_20, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_3.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_0_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.2,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_21, new cjs.Rectangle(9.2,5.7,223,191), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_4.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_5 = new lib.Image_0_11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_22, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_5.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,223,38), null);


(lib.Image_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_6 = new lib.Image_0_10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_23, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_6.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_7 = new lib.Image_0_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(9.2,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_24, new cjs.Rectangle(9.2,5.7,223,191), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_7.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_8 = new lib.Image_0_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_25, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_8.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,223,38), null);


(lib.Image_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_9 = new lib.Image_0_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_26, new cjs.Rectangle(9.1,5.7,223,191), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0D362").s().p("AxaC+IAAl7MAi1AAAIAAF7g");
	this.shape_9.setTransform(111.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,223.1,38), null);


(lib.Image_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_10 = new lib.Image_0_16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(9.2,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_27, new cjs.Rectangle(9.2,5.9,223,191), null);


(lib.Image_9_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_9_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_8_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_7_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2_0_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1_0_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3, new cjs.Rectangle(0,0,147,126), null);


(lib.Image_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_11 = new lib.Image_0_6();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_28, new cjs.Rectangle(0,0,147,126), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5C9CE3").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_10.setTransform(287,280.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(12,5.2,550,550), null);


(lib.escButton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AA+g9Ih7B7");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("Ag9g9IB7B7");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ACGAAQAAA4gnAnQgnAng4AAQg2AAgngnQgognAAg4QAAg2AognQAngoA2AAQA4AAAnAoQAnAnAAA2g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#559CE5").s().p("AhdBfQgognAAg4QAAg2AognQAngoA2AAQA4AAAnAoQAnAnAAA2QAAA4gnAnQgnAng4AAQg2AAgngng");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(165,206,243,0.698)").s().p("AhdBfQgognAAg4QAAg2AognQAngoA2AAQA4AAAnAoQAnAnAAA2QAAA4gnAnQgnAng4AAQg2AAgngng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.3,28.8,28.8);


(lib.escButton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#513423").p("AA+g9Ih6B7");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#513423").p("Ag8g9IB6B7");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#513423").p("ACGAAQAAA3gnAoQgoAng3AAQg3AAgngnQgngoAAg3QAAg2AngnQAngoA3AAQA3AAAoAoQAnAnAAA2g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0D362").s().p("AheBfQgngoAAg3QAAg2AngnQAngoA3AAQA3AAAoAoQAnAnAAA2QAAA3gnAoQgoAng3AAQg3AAgngng");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBfQgngoAAg3QAAg2AngnQAngoA3AAQA3AAAoAoQAnAnAAA2QAAA3gnAoQgoAng3AAQg3AAgngng");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AheBfQgngoAAg3QAAg2AngnQAngoA3AAQA3AAAoAoQAnAnAAA2QAAA3gnAoQgoAng3AAQg3AAgngng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.3,28.8,28.8);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(12,12,12,0.498)").s().p("EhH3A6mMAAAh1LMCPvAAAMAAAB1Lg");
	this.shape.setTransform(460,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,920,750), null);


(lib.Image_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_15_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_13_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_11_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_10_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_9_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_9_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_9_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_1_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1_6_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1_4_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1_2_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("EhCtAeUMAAAg8nMCFbAAAMAAAA8ng");
	this.shape.setTransform(442.4,208.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(15.4,14.3,854,388.1), null);


(lib.Image_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_15_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_13_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_11_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_10_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_9_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_9_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_9_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_9_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_8_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_8_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_8_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_8_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_7_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_7_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_7_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_7_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_6_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_6_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_6_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_6_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_5_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_5_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_5_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_5_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_4_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_4_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_4_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_4_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_3_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_3_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_3_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_3_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_2_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_2_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_2_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_1_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_1_6_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5_1, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_1_4_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_1_2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_1_0_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_12 = new lib.Image_0_4();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_29, new cjs.Rectangle(0,0,73,62), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("EhCtAeUMAAAg8nMCFbAAAMAAAA8ng");
	this.shape.setTransform(442.4,208.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(15.4,14.3,854,388.1), null);


(lib.Image_14_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_15_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_12_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_13_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_10_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_11_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_10_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_9_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_9_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_9_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_9_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_8_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_8_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_8_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_8_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_7_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_7_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_7_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_7_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_6_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_6_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_6_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_6_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_5_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_5_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_5_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_5_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_4_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_4_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_4_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_4_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_3_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_3_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_3_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_3_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_2_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_2_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_2_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_1_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_2_0_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_7, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_1_6_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5_2, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_1_4_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_1_2_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_1_0_3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_13 = new lib.Image_0_3();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_40, new cjs.Rectangle(0,0,73,62), null);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EhCtAeVMAAAg8pMCFbAAAMAAAA8pg");
	this.shape_1.setTransform(442.5,204.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(15.5,10.3,854,388.1), null);


(lib.Image_14_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_15_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_12_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_13_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_10_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_11_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_10_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_9_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_9_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_9_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_9_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_8_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_8_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_8_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_8_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_7_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_7_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_7_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_7_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_6_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_6_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_6_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_6_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_5_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_5_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_5_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_5_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_4_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_4_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_4_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_4_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_3_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_3_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_3_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_3_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_2_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_2_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_2_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_1_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_1_6_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5_3, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_1_4_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_1_2_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_1_0_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_9, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_14 = new lib.Image_0_2();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_41, new cjs.Rectangle(0,0,73,62), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("EhCtAeVMAAAg8pMCFbAAAMAAAA8pg");
	this.shape.setTransform(442,204.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(15,10.3,854,388.1), null);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape_1.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape_1.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,147,25), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0D362").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape_11.setTransform(73.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,147,25), null);


(lib.Image_14_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_15();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_12_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_13();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_12_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_10_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_11_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_10_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_9_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_9_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_9_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_9_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_9_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_9_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_8_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_8_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_8_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_8_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_8_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_7_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_7_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_7_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_7_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_7_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_6_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_6_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_6_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_6_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_6_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_5_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_5_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_5_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_5_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_5_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_4_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_4_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_4_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_4_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_4_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_3_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_3_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_3_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_3_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_3_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_2_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_2_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_2_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_1_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_2_0_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_8, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_1_6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5_4, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_1_4();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3_5, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_1_2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1_6, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_1_0_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_10, new cjs.Rectangle(0,0,73,62), null);


(lib.Image_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_15 = new lib.Image_0_1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_42, new cjs.Rectangle(0,0,73,62), null);


(lib.canSection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AC+BHIgTgCIgGgBIAAgWQAaACAZAAQAJgBAGgFQAEgEADgKIACgPIAAgMIAAgIIAAgJIgCgJIgCgIIgFgGQgGgFgJAAQgHAAgFACQgFACgCACIgFAHQgBAFAAAEQgBAFADAEQACAFADADQAGAEAFABIAEAAIgFAYIgHgBQgOgCgIgDQgVgKgBgdQABgLADgJQADgIAHgGQAFgGAIgDQAOgHASABQAIAAAIABQAIABAHAFQAJAGAFAHQAFAIAFANQADANAAAPQAAAOgCAKQgCAKgCAHQgDAIgEAFQgFAGgEADQgFAEgHACQgKADgOAAIgaAAgAkRBEIAAgXIAMAAQAEAAACgCIAEgDQACgFAAgHIAAhGIgQABIAAgYQAigFAgABQAYgBAMAHQAGADAEAEQAEAEACAGQACAGABAGIABAOIAABZIghAAIAAhZQAAgZgbAAIgNAAIAABKQAAAZgNAKQgEADgHACQgIACgJAAQgJAAgHgDgABiBFIAAhZQAAgZgbAAIgSABIAABxIghAAIAAiGIAYgDIAegBQANAAAJABQAJACAGADQAGADAEAEQAEAEACAGQADAGAAAGIABAOIAABZgAhuBFIAAiJIAhAAIAACJgAgrAWIAAhaIAgAAIAABAIgWAag");
	this.shape.setTransform(-1.6,-36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(-239.7,-14);

	this.instance_1 = new lib.Image_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.4,-14);

	this.instance_2 = new lib.Image_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-77.1,-14);

	this.instance_3 = new lib.Image_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.1,-14);

	this.instance_4 = new lib.Image_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.4,-14);

	this.instance_5 = new lib.Image_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(166.7,-14);

	this.instance_6 = new lib.Image_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(247.9,-14);

	this.instance_7 = new lib.Image_7_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(329.2,-14);

	this.instance_8 = new lib.Image_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-402.2,-14);

	this.instance_9 = new lib.Image_9_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-320.9,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#523422").s().p("AgZBHIgTgCIgFgBIAAgWQAZACAYAAQAJgBAGgFQAFgEADgKIACgPIAAgMIAAgIIgBgJIgBgJIgDgIIgFgGQgGgFgJAAQgGAAgFACQgFACgCACIgEAHQgCAFAAAEQAAAFACAEQACAFADADQAGAEAFABIAEAAIgFAYIgGgBQgPgCgIgDQgVgKAAgdQAAgLADgJQAEgIAGgGQAFgGAIgDQAOgHARABQAJAAAHABQAIABAIAFQAIAGAFAHQAGAIAEANQADANAAAPQAAAOgCAKQgBAKgDAHQgDAIgEAFQgEAGgFADQgFAEgGACQgLADgOAAIgZAAg");
	this.shape_2.setTransform(20,-36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#523422").s().p("AAWBGIAAhZQABgZgbAAIgSAAIAAByIghAAIAAiGIAYgEIAegBQAMAAAKABQAJACAGAEQAFACAFAFQADADACAHQADAGABAFIABAPIAABZg");
	this.shape_3.setTransform(6,-36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#523422").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_4.setTransform(-4.4,-38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#523422").s().p("AgQBFIAAiJIAgAAIAACJg");
	this.shape_5.setTransform(-11,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#523422").s().p("AhABEIAAgYIAMAAQAEAAACgBIAEgEQACgEAAgIIAAhGIgQABIAAgXQAigFAfAAQAYAAAMAHQAGACAEAFQAEADACAHQACAGABAFIABAPIAABZIghAAIAAhZQAAgZgbAAIgMAAIAABJQAAAZgNAKQgEAEgHACQgIACgJAAQgJAAgHgDg");
	this.shape_6.setTransform(-22.5,-35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8E9B1").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8D8D8").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427,-64.5,854,129);


(lib.can10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_50();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_51();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_52();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_53();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_54();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_55();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_56();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_57();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_58();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.can1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_59();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottleSection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("ACVBgIAAiHIAgAAIAACHgAi7BgIAAiHIAhAAIAACHgAEdArIAAgYIA+AAIAAhBQAAgZgbAAQgOAAgQADIgFABIAAgaQAQgCAXAAQAjAAALANQAHAHABAJQACAJAAAMIAABAIAQAAIAAAYgADJArIAAgDQAAgJADgPQACgPAFgLIAVg7IhTAAIAAgYIB3AAIAAATIgYA/QgKAegBAVIAAADgAAPArIAAgYIA/AAIAAhBQAAgZgbAAQgOAAgQADIgGABIAAgaQAQgCAXAAQAkAAALANQAGAHABAJQACAJABAMIAABAIAPAAIAAAYgAgtArIAAiJIAiAAIAACJgAiHArIAAgDQABgJACgPQADgPAEgLIAWg7IhUAAIAAgYIB4AAIAAATIgYA/QgLAeAAAVIAAADgAmLArIAAiGIAYgDIAfgBQAeAAANAKQANAJAAAVIAABigAlqhGIAABZIAtAAIAAhLQAAgKgIgCQgGgDgNAAIgSABgAj8gDIAAhbIAhAAIAABAIgWAbg");
	this.shape.setTransform(-0.6,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(166.7,-14);

	this.instance_1 = new lib.Image_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.4,-14);

	this.instance_2 = new lib._5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-14);

	this.instance_3 = new lib.Image_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77.1,-14);

	this.instance_4 = new lib.Image_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-158.4,-14);

	this.instance_5 = new lib.Image_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-239.7,-14);

	this.instance_6 = new lib.Image_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-320.9,-14);

	this.instance_7 = new lib.Image_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-402.2,-14);

	this.instance_8 = new lib.Image_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(329.2,-14);

	this.instance_9 = new lib.Image_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(247.9,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#523422").s().p("Ag3BGIAAgZIA9AAIAAhAQAAgZgaAAQgOAAgPACIgGABIAAgaQAQgCAYAAQAiAAALAOQAGAHACAIQABAKAAAMIAAA/IARAAIAAAZg");
	this.shape_2.setTransform(33.4,-36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#523422").s().p("Ag6BfIAAiHIAgAAIAACHgAgGAqIAAgDQAAgJACgPQADgPADgLIAWg7IhTAAIAAgYIB3AAIAAATIgYA/QgLAeAAAVIAAADg");
	this.shape_3.setTransform(20.2,-33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#523422").s().p("Ag3BGIAAgZIA+AAIAAhAQAAgZgaAAQgOAAgQACIgGABIAAgaQAQgCAXAAQAjAAALAOQAGAHABAIQACAKABAMIAAA/IAPAAIAAAZg");
	this.shape_4.setTransform(6.5,-36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#523422").s().p("AgQBFIAAiJIAhAAIAACJg");
	this.shape_5.setTransform(-3.5,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#523422").s().p("Ag6BfIAAiHIAgAAIAACHgAgGAqIAAgDQAAgJACgPQADgPADgLIAWg7IhTAAIAAgYIB3AAIAAATIgYA/QgLAeAAAVIAAADg");
	this.shape_6.setTransform(-13.5,-33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#523422").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_7.setTransform(-24.3,-38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#523422").s().p("Ag2BGIAAiGIAXgEIAfgBQAdAAAOAKQANAJgBAWIAABigAgWgsIAABZIAsAAIAAhKQABgKgIgDQgGgDgNABIgSAAg");
	this.shape_8.setTransform(-34.7,-36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E9B1").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D8D8").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003333").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{x:4.1}},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_1},{t:this.instance},{t:this.instance_2,p:{x:4}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_1},{t:this.instance},{t:this.instance_2,p:{x:4}}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427,-64.5,854,129);


(lib._223x191square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AxaO7IAA91MAi1AAAIAAd1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._223x191square, new cjs.Rectangle(-111.5,-95.5,223,191), null);


(lib.grayImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("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");
	this.shape.setTransform(9.6,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0D362").s().p("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");
	this.shape_1.setTransform(0,50.5);

	this.instance = new lib.Image_28();
	this.instance.parent = this;
	this.instance.setTransform(-328.6,-76.3,1,1,0,0,0,73.5,63);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Image_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-76.3,1,1,0,0,0,73.5,63);
	this.instance_1.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_2.setTransform(0,-76.3);

	this.instance_2 = new lib.Image_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.7,-76.3,1,1,0,0,0,73.5,63);
	this.instance_2.alpha = 0.352;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_3.setTransform(328.7,-76.3);

	this.instance_3 = new lib.Image_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164.4,-76.3,1,1,0,0,0,73.5,63);
	this.instance_3.alpha = 0.352;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_4.setTransform(164.4,-76.3);

	this.instance_4 = new lib.Image_4_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-328.6,76.4,1,1,0,0,0,73.5,63);
	this.instance_4.alpha = 0.352;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_5.setTransform(-328.6,76.4);

	this.instance_5 = new lib.Image_5_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-164.3,76.4,1,1,0,0,0,73.5,63);
	this.instance_5.alpha = 0.352;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_6.setTransform(-164.3,76.4);

	this.instance_6 = new lib.Image_6_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.1,76.4,1,1,0,0,0,73.5,63);
	this.instance_6.alpha = 0.352;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_7.setTransform(0.1,76.4);

	this.instance_7 = new lib.Image_7_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(164.4,76.4,1,1,0,0,0,73.5,63);
	this.instance_7.alpha = 0.352;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_8.setTransform(164.4,76.4);

	this.instance_8 = new lib.Image_8_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(328.7,76.4,1,1,0,0,0,73.5,63);
	this.instance_8.alpha = 0.352;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_9.setTransform(328.7,76.4);

	this.instance_9 = new lib.Image_9_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-164.3,-76.3,1,1,0,0,0,73.5,63);
	this.instance_9.alpha = 0.352;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_10.setTransform(-164.3,-76.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_11.setTransform(-328.6,-76.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8},{t:this.instance_7},{t:this.shape_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.shape_5},{t:this.instance_4},{t:this.shape_4},{t:this.instance_3},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grayImg, new cjs.Rectangle(-402.1,-139.3,804.3,278.7), null);


(lib.bottle10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AhMBBIAAhQIALAAIAABQgAjiAhQgFgCgEgDQgEgDgDgFQgDgFgBgHQgCgHAAgIIAAgpIALAAIAAApQAAANAEAKQACAEAFADQAEADAFAAQAGAAADgCQAEgCACgDQADgDABgFQADgHAAgLIgBgKIgBgJIgEgHIgGgFQgDgCgFAAIgJABIAAgJIAJgCQAFAAAFACQAEABAEAEQAEAEADAEQAGALAAARQAAAIgCAHQgCAHgDAFQgCAFgEADQgEADgFACQgFACgFAAQgGAAgEgCgAGhAiIAAgJIAFABQAJgBAAgKIAAg1IgJABIAAgJQASgCANAAQAMAAAHADQAJAEADAIQABAFAAAFIAAA5IgKAAIAAg5QAAgQgXAAIgKAAIAAA0QAAAKgFAGQgEAFgJABIgHgBgAFeAiIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAFQAGAHAAANIAAAxIAKAAIAAAIgAE3AiIAShJIgrAAIAAgZIAKAAIAAARIArAAIAAAIIgRBJgADKAiIAAgIIAcAAQACgFAAgHIAAgoQAAgHgEgEQgDgDgGAAIgIABIAAgIIALgBQAUAAAAAVIAAApIAAAKIgCAHIAAADgABhAiIAAhRQAMgBAQAAQAgAAAAAWIAAA8gABsAaIAnAAIAAgzQAAgEgCgDQgBgCgCgCIgFgCIgGgBIgHAAIgOAAIgCAAgAAbAiIAAg4IABgGQAAgEACgCQACgDACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAPIAAA3gAgtAiIAAgCQAAgGACgHIADgLIAFgQIAJgfIgyAAIAAgIIA9AAIAAAIIgKAgIgDAIIgCAIIgCAHIgBAGIgBAKIAAACgAhrAiIAAhRIALAAIAABRgAiJAiIAAg5QAAgQgXAAIgQAAIAAgJIAQAAIAMAAIAJADIAHAFQAGAHAAAKIAAA5gAleAiIAAgIIAoAAIAAgxQAAgJgEgEQgFgDgJAAIgTAAIgDAAIAAgIIAYgBQAOAAAGAFQAHAHAAANIAAAxIAJAAIAAAIgAnkAiIAAhRQALgBARAAQAgAAAAAWIAAA8gAnaAaIAnAAIAAgzQAAgEgBgDQgBgCgCgCIgGgCIgGgBIgGAAIgOAAIgDAAgAEGAGIAAg1IAKAAIAAArIgIAKgACxAGIAAg1IAKAAIAAArIgIAKgAkVAGIAAg1IAKAAIAAArIgIAKgAl4AGIAAg1IALAAIAAArIgJAKgAmVAGIAAg1IALAAIAAArIgJAKg");
	this.shape.setTransform(0.2,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AhyBjIAAh5IAQAAIAAB5gAlXAyQgGgCgHgFQgGgFgEgIQgFgHgCgLQgDgLABgMIAAg/IAQAAIAAA/QgBAVAHANQADAIAHAEQAGAEAIAAQAJABAGgDQAFgDAEgFQADgFACgGQAFgMAAgQIgBgPIgDgOQgCgHgDgEQgEgFgFgDQgGgDgHABIgNABIAAgPQAFgBAIgBQAIABAHACQAHADAGAEQAGAGAEAHQAJAQgBAbQAAAMgCAKQgDAMgEAHQgEAHgGAFQgGAFgHACQgIADgIAAQgHAAgIgDgAJ0AzIAAgNIAIABQAOAAABgRIAAhRIgPABIAAgNQAbgDAVAAQARAAAMAGQALAGAGAMQACAHAAAJIAABVIgQAAIAAhWQAAgagjABIgPAAIAABQQAAAPgGAJQgIAJgNgBIgLgBgAIPAzIAAgMIA9AAIAAhKQgBgPgGgFQgHgGgOABIgcABIgFAAIAAgOQAPgBAVAAQAUAAALAJQAJAJABAWIAABJIANAAIAAAMgAHUAzIAbhuIhCAAIAAgmIAQAAIAAAZIBCAAIAAANIgbBugAEwAzIAAgMIArAAQABgIAAgKIAAg9QAAgLgEgGQgFgEgKAAIgLACIAAgNQAHgCAKAAQAdAAAAAhIAAA+IAAAPIgCAMIgBADgACTAzIAAh6QAQgDAaAAQAwAAAAAiIAABbgACjAnIA6AAIAAhNQAAgGgCgEQgCgFgDgCIgIgEIgJgBIgKAAIgVABIgDAAgAAoAzIAAhUQAAgGABgFQABgEADgDQADgGADgCIACAAIAAAAIhDAAIAAgNIBaAAIAAALQgUAGAAAWIAABUgAhEAzIAAgDQAAgIADgLIAFgRIAHgZIANgvIhKAAIAAgMIBbAAIAAAMIgPAxIgEAOIgEALIgCAKIgCAKIgCAOIAAADgAihAzIAAh7IAQAAIAAB7gAjQAzIAAhWQABgagjABIgYAAIAAgNIAZgBQAKAAAHABQAHACAGADQAHADADAEQAKAJgBASIAABVgAoRAzIAAgMIA8AAIAAhKQABgPgHgFQgHgGgOABIgdABIgEAAIAAgOQAPgBAVAAQAUAAAKAJQALAJgBAWIAABJIAPAAIAAAMgArbAzIAAh6QAQgDAaAAQAxAAgBAiIAABbgArLAnIA7AAIAAhNQgBgGgCgEQgCgFgCgCIgIgEIgJgBIgKAAIgWABIgDAAgAGJAJIAAhRIAQAAIAABCIgMAPgAEJAJIAAhRIARAAIAABCIgNAPgAmkAJIAAhRIAQAAIAABCIgNAPgAo5AJIAAhRIAQAAIAABCIgMAPgApkAJIAAhRIAQAAIAABCIgMAPg");
	this.shape_1.setTransform(37.9,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38,44,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.1,-32.5,1,1,0,0,0,120.7,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIADQAIAFADAIQACAFAAAFIAAA4IgLAAIAAg4QABgRgXAAIgJAAIAAA1QgBAJgEAHQgFAFgIAAIgHgBg");
	this.shape_2.setTransform(45.3,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgIIAYgBQANAAAGAFQAHAHAAANIAAAxIAJAAIAAAIg");
	this.shape_3.setTransform(38.2,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_4.setTransform(31.4,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_5.setTransform(26.9,48.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgTAqIAAgIIAbAAQABgFAAgHIAAgoQAAgHgDgEQgDgDgGAAIgHABIAAgIIAKgBQAUAAAAAVIAAApIAAAKIgCAHIgBADg");
	this.shape_6.setTransform(22.4,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_7.setTransform(18.4,48.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgdAqIAAhRQAMgBAQAAQAfAAAAAWIAAA8gAgSAiIAlAAIAAgzQAAgEgBgDQgBgCgCgCIgFgCIgHgBIgFAAIgOAAIgCAAg");
	this.shape_8.setTransform(12.9,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AAHApIAAg4IABgGQAAgDABgCQADgEACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAPIAAA3g");
	this.shape_9.setTransform(2.2,50.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_10.setTransform(-4.5,51.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_11.setTransform(-10.1,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AAOAqIAAg5QAAgQgWAAIgQAAIAAgJIAQAAIALAAIAJADIAHAFQAGAHAAAKIAAA5g");
	this.shape_12.setTransform(-15,50.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgJApQgFgCgEgDQgEgDgDgFQgDgFgBgHQgCgHAAgJIAAgoIALAAIAAAoQAAAOAEAJQACAFAFADQAEADAFAAQAFAAADgCQAEgCACgDQADgDABgFQADgIAAgLIgBgJIgBgJIgEgHIgGgFQgDgCgFAAIgIABIAAgKIAIgBQAFAAAFACQAEABAEAEQAEADADAFQAGALAAAQQAAAJgCAHQgCAHgDAFQgCAFgEADQgEADgFACQgFACgFAAQgFAAgEgCg");
	this.shape_13.setTransform(-21.5,50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_14.setTransform(-27.1,48.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgIIAYgBQANAAAGAFQAHAHgBANIAAAxIAKAAIAAAIg");
	this.shape_15.setTransform(-31.9,50.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_16.setTransform(-37,48.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_17.setTransform(-39.9,48.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#513423").s().p("AgdAqIAAhRQAMgBAQAAQAfAAAAAWIAAA8gAgTAiIAnAAIAAgzQgBgEgBgDQgBgCgCgCIgFgCIgHgBIgFAAIgOAAIgDAAg");
	this.shape_18.setTransform(-45.3,50.1);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.1,-32.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AgIA5IAAhPIAKAAIAABPgAi3A5IAAhPIALAAIAABPgACwA5IAAhDIgQgtIALAAIANAnIADAGIAGgCQAKgDAAgPIAAgZIALAAIAAAVQgBAPgFAHIgFAFIgJAEIgHACIAAA6gADhAVIAZgEIgUhIIALAFIAJAiIAHAfQAUgHADgbIACgkIALAAIgDAkQAAAIgCAGIgEAIIgFAIIgIAGIgJAGIgOADIgXADgAA+AaIAAgIIAoAAIAAgxQAAgJgEgEQgFgDgJAAIgTAAIgDAAIAAgIIAYgBQAOAAAGAGQAHAGgBAOIAAAwIAKAAIAAAIgAAWAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgxAAIAAgIIA8AAIAAAIIgLAgIgCAKIgCAHIgCAGIgBAGIgCAKIAAACgAhRAaIAAgIIAoAAIAAgxQAAgJgEgEQgFgDgJAAIgTAAIgDAAIAAgIIAYgBQAOAAAGAGQAHAGgBAOIAAAwIAKAAIAAAIgAhsAaIAAhRIAKAAIAABRgAiYAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgKAgIgCAKIgCAHIgCAGIgBAGIgCAKIAAACgAkkAaIAAhRQAMgBAQAAQAgAAAAAWIAAA8gAkaASIAoAAIAAgzQgBgEgBgCQgBgDgCgCIgFgCIgHgBIgGAAIgOAAIgDAAgAjVgBIAAg2IALAAIAAArIgJALg");
	this.shape.setTransform(0.3,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AEJBXIAAhmIgahFIARAAIAVA7IADAKIAKgEQAPgEAAgWIAAgnIAQAAIAAAhQAAAWgIAKQgDAFgFADQgFAEgIACIgLADIAABZgAgNBXIAAh5IAPAAIAAB5gAkUBXIAAh5IAQAAIAAB5gAFRAgIAmgGIgehuIARAHIANA1IALAvQAegLAEgqIAFg2IAQABIgFA1QgBANgCAJQgDAIgDAFIgHALQgFAGgHAFQgGAEgJADQgJAEgLABIgjAFgABdAnIAAgMIA8AAIAAhKQAAgOgGgGQgHgFgOAAIgdABIgEAAIAAgNQAPgCAVAAQAUAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAAhAnIAAgDQAAgHADgMIAFgRIAHgYIANgwIhKAAIAAgMIBaAAIAAAMIgOAxIgEAPIgEALIgCAKIgCAJIgCAOIAAADgAh7AnIAAgMIA8AAIAAhKQAAgOgGgGQgHgFgOAAIgdABIgEAAIAAgNQAPgCAVAAQAUAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAikAnIAAh7IAQAAIAAB7gAjmAnIAAgDQAAgHADgMIAFgRIAHgYIAOgwIhLAAIAAgMIBbAAIAAAMIgPAxIgEAPIgDALIgDAKIgCAJIgCAOIAAADgAm4AnIAAh6QAQgDAaAAQAwAAAAAiIAABbgAmoAbIA6AAIAAhNQAAgGgCgEQgCgEgDgDIgIgDIgJgCIgKAAIgVABIgDAAgAlBgCIAAhSIAQAAIAABCIgNAQg");
	this.shape_1.setTransform(38.1,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_5_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38,44,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.1,-32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AghAiIAZgEIgUhIIALAFIAJAjIAHAfQATgIADgbIADgkIAKABIgDAjQAAAHgCAGIgEAKIgFAHIgHAHIgKAFIgNADIgXAEg");
	this.shape_2.setTransform(26.2,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgJA4IAAhCIgRgtIALAAIAOAnIABAGIAHgDQAKgDAAgOIAAgZIAKAAIAAAVQAAAPgFAGIgFAGIgJADIgIADIAAA5g");
	this.shape_3.setTransform(19,51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgIIAYgBQANAAAGAFQAHAHgBANIAAAxIAKAAIAAAIg");
	this.shape_4.setTransform(9.5,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_5.setTransform(2.4,51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgIIAYgBQANAAAGAFQAHAHgBANIAAAxIAKAAIAAAIg");
	this.shape_6.setTransform(-4.9,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_7.setTransform(-10.1,50.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_8.setTransform(-15.1,51.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_9.setTransform(-20.5,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdAqIAAhRQAMgBAQAAQAfAAAAAWIAAA8gAgTAiIAnAAIAAgzQgBgEgBgDQgBgCgCgCIgFgCIgHgBIgFAAIgOAAIgDAAg");
	this.shape_10.setTransform(-26,50.1);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.1,-32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("Ah6BBIAAhQIALAAIAABQgAkpBBIAAhQIALAAIAABQgAFNAiIgIhRIALAAIAEAuIAJgEQAJgDACgOIACgZIAKAAIgCAVIgBAIIgCAHIgEAGIgFAFIgJADIgIADIABAUIATAAQANAAAIgKQAKgJABgSIADgkIALAAIgDAkQgBAHgCAGIgEAKIgGAIQgDAEgEADQgFADgGACQgGABgHABgAENAiIAAgIIAcAAQACgFgBgHIAAgoQAAgHgDgEQgDgDgGAAIgIABIAAgIIALgBQAUAAAAAVIAAApIgBAKIgBAHIgBADgADsAiIAAg4IABgGQABgEACgCQACgDACgBIABgBIgtAAIAAgIIA8AAIAAAHQgNAEAAAPIAAA3gAClAiIAShJIgrAAIAAgZIALAAIAAARIAqAAIAAAIIgRBJgABXAiIAAg5QAAgQgYAAIgQAAIAAgJIAQAAIAMAAIAJADIAHAFQAGAHAAAKIAAA5gAgzAiIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAFQAGAHABANIAAAxIAIAAIAAAIgAhbAiIAAgCQAAgGACgHIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgJAgIgDAIIgCAIIgCAHIgBAGIgBAKIAAACgAjDAiIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAFQAGAHABANIAAAxIAJAAIAAAIgAjfAiIAAhRIALAAIAABRgAkKAiIAAgCQAAgGACgHIADgLIAFgQIAJgfIgyAAIAAgIIA9AAIAAAIIgLAgIgCAIIgCAIIgCAHIgBAGIgCAKIAAACgAmWAiIAAhRQALgBARAAQAgAAAAAWIAAA8gAmLAaIAmAAIAAgzQABgEgCgDQgBgCgCgCIgGgCIgGgBIgGAAIgOAAIgCAAgAB0AGIAAg1IALAAIAAArIgJAKgAlGAGIAAg1IAKAAIAAArIgIAKg");
	this.shape.setTransform(0.4,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("Ai5BjIAAh5IAQAAIAAB5gAnBBjIAAh5IAQAAIAAB5gAH1AzIgKh7IAQAAIAGBFIAMgEQAPgFACgVIAEgnIAQAAIgDAgIgCAMIgDALQgDAGgDAEQgDAFgGACQgGADgHACIgMAEIACAeIAdAAQATgBANgOQANgOADgcIAFg2IAQAAIgFA2QgBAMgDAKIgGAPIgIAMQgGAGgGAEQgHAFgJADQgKACgLAAgAGVAzIAAgMIArAAQACgIAAgKIAAg9QAAgLgFgGQgFgEgKAAIgLACIAAgNQAHgCAKAAQAeAAAAAhIAAA+IgBAPIgCAMIgBADgAFkAzIAAhUQAAgGABgFIADgHQAEgGADgCIACAAIAAAAIhEAAIAAgNIBaAAIAAALQgTAGAAAWIAABUgAD4AzIAbhuIhCAAIAAgmIAQAAIAAAZIBCAAIAAANIgbBugACAAzIAAhWQAAgagiABIgYAAIAAgNIAYgBQALAAAHABQAHACAGADQAGADAEAEQAJAJAAASIAABVgAhPAzIAAgMIA9AAIAAhKQAAgPgHgFQgHgGgOABIgcABIgFAAIAAgOQAPgBAVAAQAVAAAKAJQAKAJAAAWIAABJIANAAIAAAMgAiLAzIAAgDQAAgIADgLIAFgRIAHgZIAOgvIhLAAIAAgMIBbAAIAAAMIgPAxIgEAOIgDALIgDAKIgCAKIgCAOIAAADgAkoAzIAAgMIA9AAIAAhKQAAgPgHgFQgHgGgOABIgcABIgFAAIAAgOQAPgBAVAAQAVAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAlRAzIAAh7IAQAAIAAB7gAmSAzIAAgDQAAgIADgLIAFgRIAHgZIANgvIhLAAIAAgMIBbAAIAAAMIgOAxIgEAOIgEALIgCAKIgCAKIgCAOIAAADgAplAzIAAh6QARgDAaAAQAwAAAAAiIAABbgApVAnIA7AAIAAhNQAAgGgCgEQgCgFgDgCIgIgEIgJgBIgKAAIgVABIgEAAgACtAJIAAhRIAQAAIAABCIgMAPgAnuAJIAAhRIAQAAIAABCIgMAPg");
	this.shape_1.setTransform(-37.9,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_7_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,44,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.9,-32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgPIADgZIAJAAIgCAWIgBAHIgCAHIgDAGIgGAGIgIADIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAHIgEAKIgGAIQgDAEgFADQgEADgGABQgGACgHAAg");
	this.shape_2.setTransform(37,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgTAqIAAgIIAbAAQACgFgBgHIAAgoQAAgHgDgEQgDgDgFAAIgIABIAAgIIAKgBQAUAAAAAVIAAApIgBAKIgBAHIgBADg");
	this.shape_3.setTransform(29.3,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AAGApIAAg4IABgGQABgDACgCQACgEACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAPIAAA3g");
	this.shape_4.setTransform(23.4,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_5.setTransform(17.1,49.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_6.setTransform(12.5,48.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AAOAqIAAg5QAAgQgWAAIgQAAIAAgJIAQAAIALAAIAJADIAHAFQAGAHAAAKIAAA5g");
	this.shape_7.setTransform(7.6,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHABANIAAAxIAJAAIAAAIg");
	this.shape_8.setTransform(-1.8,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_9.setTransform(-8.9,51.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHABANIAAAxIAJAAIAAAIg");
	this.shape_10.setTransform(-16.2,50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_11.setTransform(-21.4,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_12.setTransform(-26.4,51.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_13.setTransform(-31.8,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgdAqIAAhRQALgBARAAQAfAAAAAWIAAA8gAgSAiIAlAAIAAgzQABgEgCgDQgBgCgCgCIgGgCIgGgBIgFAAIgOAAIgCAAg");
	this.shape_14.setTransform(-37.3,50.1);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37.9,-32.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("Ah5A5IAAhPIALAAIAABPgAkoA5IAAhPIALAAIAABPgAmjA5IAAhXQAAgNgEgMIAKAAIACADIACAJIABANIAABXgACAAaIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCANAAQAMAAAHADQAJAEADAJQABAEAAAGIAAA4IgKAAIAAg5QAAgQgXAAIgKAAIAAA0QAAAKgFAGQgEAGgJAAIgHgBgAGcAaIgdgwIgEACQgGAFAAALIAAAeIgKAAIAAgaQAAgOAEgGIAEgGIAHgDIgPgaIAMAAIAdAwQADgCACgCIACgFIABgJIAAgeIALAAIAAAaIAAAJIgCAIQgDAJgJADIAPAagAFKAaIAAg4IABgGQABgEABgBQADgEACgBIABgBIgtAAIAAgIIA8AAIAAAHQgNAEAAAPIAAA3gADxAaIAAgIIAcAAQACgFAAgHIAAgoQAAgHgEgEQgDgDgGAAIgIABIAAgIIALgBQAUAAAAAVIAAApIAAAKIgCAHIAAADgAA0AaIAAgIIARAAIAAgvQAAgTgRAAIgGACIgFACIgFAGIgBABIgGA/IgLAAIAGg+IAAgCIgBgFIgCgIIgCgEIALAAQACADABAFIAAAAIAIgGIAHgCIAIgBQAMAAAGAHQAGAHAAANIAAA3gAgyAaIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAGQAGAGAAAOIAAAwIAJAAIAAAIgAhaAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgKAgIgCAKIgCAHIgCAGIgBAGIgCAKIAAACgAjCAaIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAGQAGAGAAAOIAAAwIAKAAIAAAIgAjeAaIAAhRIALAAIAABRgAkJAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgKAgIgCAKIgCAHIgCAGIgBAGIgCAKIAAACgADYgBIAAg2IAKAAIAAArIgIALgAlogBIAAg2IALAAIAAArIgJALgAmFgBIAAg2IALAAIAAArIgJALg");
	this.shape.setTransform(0.2,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("Ai4BXIAAh5IAQAAIAAB5gAnABXIAAh5IAQAAIAAB5gAp3BXIAAiFQAAgTgHgTIAQAAIACAGIADANIABATIAACFgAC/AnIAAgNIAIABQAOAAAAgQIAAhRIgOABIAAgOQAbgDAUAAQASAAALAGQAMAGAFAMQADAHAAAJIAABVIgQAAIAAhWQAAgZgjAAIgPAAIAABQQAAAQgHAIQgHAJgOAAIgKgCgAJtAnIgthJIgFADQgJAIAAARIAAAtIgQAAIAAgnQAAgVAGgKIAHgIQAEgEAHgCIgYgnIASAAIAsBJQAFgDADgDIAEgIQABgGAAgHIAAguIAQAAIAAAoIgBAOIgCAMQgFANgOAFIAYAngAHwAnIAAhUQAAgGACgFIADgHQAEgGADgBIABgBIAAAAIhEAAIAAgNIBbAAIAAALQgUAGAAAWIAABUgAFqAnIAAgMIArAAQABgHAAgLIAAg8QAAgMgFgFQgEgFgKAAIgMACIAAgNQAIgCAJAAQAeAAAAAhIAAA+IAAAPIgCAMIgBADgABNAnIAAgMIAbAAIAAhHQAAgcgaAAIgJABQgFACgDACQgGAFgDAEIgBABIgJBgIgQAAIAJheIAAgCIgBgJIgEgMIgCgGIAQAAQACAEACAJIABAAQAFgGAHgEIAKgDQAGgCAGAAQASAAAJALQAKALAAATIAABUgAhOAnIAAgMIA9AAIAAhKQAAgOgHgGQgHgFgOAAIgcABIgFAAIAAgNQAPgCAVAAQAVAAAKAJQAKAJAAAWIAABJIANAAIAAAMgAiKAnIAAgDQAAgHADgMIAFgRIAHgYIAOgwIhLAAIAAgMIBbAAIAAAMIgPAxIgEAPIgDALIgDAKIgCAJIgCAOIAAADgAknAnIAAgMIA9AAIAAhKQAAgOgHgGQgHgFgOAAIgcABIgFAAIAAgNQAPgCAVAAQAVAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAlQAnIAAh7IAQAAIAAB7gAmRAnIAAgDQAAgHADgMIAFgRIAHgYIANgwIhLAAIAAgMIBbAAIAAAMIgOAxIgEAPIgEALIgCAKIgCAJIgCAOIAAADgAFDgCIAAhSIAQAAIAABCIgMAQgAofgCIAAhSIAQAAIAABCIgNAQgApLgCIAAhSIAQAAIAABCIgMAQg");
	this.shape_1.setTransform(-38.4,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_6_2();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,44,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.9,-32.5,1,1,0,0,0,120.7,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgbQAAgOAEgFIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgCABgCIADgEIABgIIAAgfIAKAAIAAAaIAAAJIgCAHQgDAJgJAEIAQAag");
	this.shape_2.setTransform(39.5,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AAHApIAAg4IAAgGQABgDABgCQADgEACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAPIAAA3g");
	this.shape_3.setTransform(32.6,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AgTAqIAAgIIAbAAQABgFABgHIAAgoQgBgHgDgEQgDgDgGAAIgHABIAAgIIAKgBQAUAAAAAVIAAApIAAAKIgCAHIAAADg");
	this.shape_4.setTransform(26.3,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_5.setTransform(22.3,48.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIADQAIAFADAIQACAFAAAFIAAA4IgLAAIAAg4QAAgRgWAAIgJAAIAAA1QAAAJgFAHQgFAFgIAAIgHgBg");
	this.shape_6.setTransform(16.4,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AADAqIAAgIIARAAIAAgvQAAgTgRAAIgFACIgFACIgFAGIgBABIgGA/IgLAAIAGg+IAAgCIgBgGIgCgIIgCgDIALAAQACADABAFIAAAAIAIgGIAHgCIAHgBQAMAAAGAGQAGAIAAANIAAA3g");
	this.shape_7.setTransform(5.1,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHAAANIAAAxIAKAAIAAAIg");
	this.shape_8.setTransform(-1.9,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_9.setTransform(-9,51.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHAAANIAAAxIAKAAIAAAIg");
	this.shape_10.setTransform(-16.3,50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_11.setTransform(-21.6,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_12.setTransform(-26.5,51.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_13.setTransform(-35.4,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_14.setTransform(-38.3,48.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AgCA4IAAhXQAAgMgEgMIAJAAIACADIABAJIABAMIAABXg");
	this.shape_15.setTransform(-41.5,51.7);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38,-32.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("ABdA5IAAhPIALAAIAABPgAhRA5IAAhPIALAAIAABPgAnCAVIAZgEIgThIIALAFIAIAiIAIAfQATgHADgbIADgkIALAAIgEAkQAAAIgCAGIgDAIIgGAIIgHAGIgKAGIgNADIgYADgAFXAaIAAgJIAGABQAIAAABgLIAAg1IgJABIAAgJQARgCANAAQAMAAAHADQAJAEADAJQABAEABAGIAAA4IgLAAIAAg5QAAgQgXAAIgKAAIAAA0QAAAKgFAGQgEAGgJAAIgHgBgAKSAaIgdgwIgDACQgHAFABALIAAAeIgLAAIAAgaQAAgOAEgGIAFgGIAGgDIgPgaIAMAAIAdAwQADgCACgCIACgFIABgJIAAgeIALAAIAAAaIAAAJIgCAIQgDAJgJADIAQAagAJAAaIAAg4IABgGQABgEABgBQADgEACgBIABgBIgtAAIAAgIIA8AAIAAAHQgNAEAAAPIAAA3gAHnAaIAAgIIAcAAQACgFAAgHIAAgoQAAgHgEgEQgDgDgGAAIgIABIAAgIIALgBQAVAAAAAVIAAApIgBAKIgCAHIAAADgAGvAaIAAhRIALAAIAABRgAELAaIAAgIIASAAIAAgvQAAgTgRAAIgHACIgEACIgGAGIgBABIgGA/IgKAAIAGg+IAAgCIgBgFIgDgIIgCgEIALAAQACADABAFIABAAIAIgGIAGgCIAIgBQAMAAAGAHQAGAHAAANIAAA3gACkAaIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAGQAGAGABAOIAAAwIAJAAIAAAIgAB8AaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgKAgIgCAKIgCAHIgCAGIgBAGIgCAKIAAACgAAUAaIAAgIIAoAAIAAgxQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgIIAYgBQANAAAHAGQAGAGABAOIAAAwIAJAAIAAAIgAgHAaIAAhRIAKAAIAABRgAgyAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA9AAIAAAIIgKAgIgDAKIgCAHIgCAGIgBAGIgBAKIAAACgAi+AaIAAhRQALgBARAAQAgAAAAAWIAAA8gAi0ASIAnAAIAAgzQAAgEgBgCQgBgDgCgCIgGgCIgFgBIgHAAIgOAAIgDAAgAktAaIAAgIIAxAAIgyhJIANAAIAaAqQAFgDADgHQACgGABgMIABgOIALABIgCAMIAAADIAAAEIgBAEIAAAFIgCAFIgCAEIgDAEQgDAEgFADIARAYIAAAIgAlxAaIAAgIIAoAAIAAgxQABgJgFgEQgEgDgKAAIgTAAIgDAAIAAgIIAZgBQANAAAHAGQAGAGAAAOIAAAwIAKAAIAAAIgAncAaIAAhRIALAAIAABRgAoYAaIAAgIIAdAAQABgFAAgHIAAgoQAAgHgEgEQgDgDgGAAIgIABIAAgIIAMgBQATAAABAVIAAApIgBAKIgBAHIgBADgAqdAaIAAhRQALgBARAAQAfAAAAAWIAAA8gAqTASIAnAAIAAgzQAAgEgBgCQgBgDgCgCIgGgCIgGgBIgGAAIgPAAIgCAAgAHOgBIAAg2IALAAIAAArIgJALgAhugBIAAg2IAKAAIAAArIgIALgAoxgBIAAg2IALAAIAAArIgJALgApOgBIAAg2IALAAIAAArIgJALg");
	this.shape.setTransform(0.5,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("ACMBXIAAh5IAPAAIAAB5gAh7BXIAAh5IAQAAIAAB5gAqoAgIAmgGIgehuIARAHIANA1IALAvQAegLAFgqIAEg2IAQABIgEA1QgCANgCAJQgDAIgCAFIgIALQgFAGgHAFQgFAEgKADQgJAEgLABIgjAFgAIEAnIAAgNIAIABQAOAAAAgQIAAhRIgOABIAAgOQAbgDAUAAQARAAAMAGQAMAGAFAMQACAHABAJIAABVIgRAAIAAhWQAAgZgiAAIgPAAIAABQQAAAQgHAIQgHAJgOAAIgKgCgAPgAnIgthJIgFADQgJAIAAARIAAAtIgQAAIAAgnQAAgVAGgKQACgEAFgEQAEgEAHgCIgYgnIASAAIAsBJQAFgDADgDIAEgIQABgGAAgHIAAguIAQAAIAAAoIgBAOIgCAMQgEANgOAFIAXAngANkAnIAAhUQAAgGABgFQABgEACgDQAEgGADgBIACgBIAAAAIhFAAIAAgNIBbAAIAAALQgTAGgBAWIAABUgALdAnIAAgMIArAAQACgHAAgLIAAg8QgBgMgFgFQgEgFgKAAIgMACIAAgNQAIgCAKAAQAdAAAAAhIAAA+IAAAPIgCAMIgBADgAKJAnIAAh7IAQAAIAAB7gAGSAnIAAgMIAbAAIAAhHQAAgcgaAAIgJABQgFACgDACQgHAFgCAEIgBABIgJBgIgQAAIAJheIAAgCIgCgJIgDgMIgDgGIAQAAQADAEACAJIABAAQAEgGAHgEIAKgDQAHgCAGAAQASAAAJALQAKALAAATIAABUgAD2AnIAAgMIA8AAIAAhKQAAgOgGgGQgHgFgOAAIgdABIgEAAIAAgNQAPgCAVAAQAVAAAKAJQAKAJgBAWIAABJIAPAAIAAAMgAC6AnIAAgDQAAgHADgMIAFgRIAHgYIANgwIhKAAIAAgMIBbAAIAAAMIgPAxIgEAPIgEALIgCAKIgCAJIgCAOIAAADgAAdAnIAAgMIA8AAIAAhKQAAgOgGgGQgHgFgOAAIgcABIgFAAIAAgNQAPgCAVAAQAUAAALAJQAKAJAAAWIAABJIANAAIAAAMgAgLAnIAAh7IAPAAIAAB7gAhMAnIAAgDQAAgHADgMIAEgRIAHgYIAOgwIhLAAIAAgMIBbAAIAAAMIgOAxIgFAPIgDALIgCAKIgCAJIgDAOIAAADgAkfAnIAAh6QAQgDAbAAQAvAAAAAiIAABbgAkPAbIA6AAIAAhNQAAgGgCgEQgCgEgCgDIgIgDIgJgCIgKAAIgWABIgDAAgAnGAnIAAgMIBLABIhLhwIASAAIAnBAQAIgEAEgLQAEgKACgRIABgWIARACIgDATIAAAEIgBAGIgBAGIgBAHIgCAHIgDAHIgEAHQgFAGgHAEIAaAkIAAAMgAosAnIAAgMIA8AAIAAhKQAAgOgGgGQgHgFgOAAIgcABIgFAAIAAgNQAPgCAVAAQAUAAALAJQAJAJABAWIAABJIANAAIAAAMgArOAnIAAh7IAQAAIAAB7gAspAnIAAgMIArAAQACgHAAgLIAAg8QAAgMgFgFQgEgFgLAAIgLACIAAgNQAHgCAKAAQAeAAAAAhIAAA+IAAAPIgCAMIgBADgAvxAnIAAh6QAQgDAaAAQAwAAAAAiIAABbgAvhAbIA6AAIAAhNQAAgGgCgEQgCgEgDgDIgIgDIgJgCIgKAAIgVABIgDAAgAK2gCIAAhSIAQAAIAABCIgMAQgAiogCIAAhSIAQAAIAABCIgMAQgAtPgCIAAhSIAQAAIAABCIgNAQgAt7gCIAAhSIARAAIAABCIgNAQg");
	this.shape_1.setTransform(-38.1,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_8_2();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,44,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38,-32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgbQAAgOAEgFIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgCABgCIADgEIABgIIAAgfIAKAAIAAAaIAAAJIgCAHQgDAJgJAEIAQAag");
	this.shape_2.setTransform(64.5,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AAGApIAAg4IABgGQABgDABgCQADgEACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAPIAAA3g");
	this.shape_3.setTransform(57.5,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AgTAqIAAgIIAbAAQABgFABgHIAAgoQgBgHgDgEQgDgDgFAAIgIABIAAgIIAKgBQAUAAAAAVIAAApIgBAKIgBAHIAAADg");
	this.shape_4.setTransform(51.3,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_5.setTransform(47.2,48.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_6.setTransform(44.2,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHADQAJAFACAIQACAFAAAFIAAA4IgLAAIAAg4QAAgRgWAAIgKAAIAAA1QABAJgFAHQgEAFgKAAIgGgBg");
	this.shape_7.setTransform(38.3,50.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AADAqIAAgIIARAAIAAgvQAAgTgRAAIgFACIgFACIgFAGIgBABIgGA/IgLAAIAGg+IAAgCIgBgGIgCgIIgCgDIALAAQACADABAFIAAAAIAIgGIAHgCIAHgBQAMAAAGAGQAGAIAAANIAAA3g");
	this.shape_8.setTransform(26.9,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHABANIAAAxIAJAAIAAAIg");
	this.shape_9.setTransform(19.9,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_10.setTransform(12.8,51.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHABANIAAAxIAJAAIAAAIg");
	this.shape_11.setTransform(5.5,50.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_12.setTransform(0.3,50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_13.setTransform(-4.7,51.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_14.setTransform(-10.1,48.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AgdAqIAAhRQALgBARAAQAfAAAAAWIAAA8gAgTAiIAmAAIAAgzQAAgEgBgDQgBgCgCgCIgGgCIgFgBIgGAAIgOAAIgDAAg");
	this.shape_15.setTransform(-15.6,50.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513423").s().p("AgdApIAAgIIAiAAIAOAAIgUgdIgdgsIAMAAIAYAoIACACQAFgDACgGQADgHABgLIABgPIALABIgCANIAAADIAAADIgBAFIgBAEIgBAFIgCAEIgDAEQgDADgFAEIARAYIAAAIg");
	this.shape_16.setTransform(-26.7,50.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#513423").s().p("AgdAqIAAgIIAnAAIAAgxQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAHAAANIAAAxIAKAAIAAAIg");
	this.shape_17.setTransform(-33.4,50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#513423").s().p("AghAiIAZgEIgUhIIALAFIAJAjIAHAfQATgIADgbIADgkIAKABIgDAjQAAAHgCAGIgEAKIgFAHIgHAHIgKAFIgNADIgXAEg");
	this.shape_18.setTransform(-41.2,50.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_19.setTransform(-46.6,50.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#513423").s().p("AgTAqIAAgIIAbAAQACgFgBgHIAAgoQABgHgEgEQgDgDgFAAIgIABIAAgIIAKgBQAUAAAAAVIAAApIgBAKIgBAHIgBADg");
	this.shape_20.setTransform(-51.1,50.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_21.setTransform(-55.2,48.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_22.setTransform(-58.1,48.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#513423").s().p("AgdAqIAAhRQALgBARAAQAfAAAAAWIAAA8gAgTAiIAnAAIAAgzQAAgEgCgDQgBgCgCgCIgGgCIgFgBIgGAAIgOAAIgDAAg");
	this.shape_23.setTransform(-63.5,50.1);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37.9,-32.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AD8A5IAAhCIgRguIALAAIAOAnIACAHIAHgDQAKgDAAgOIAAgaIAKAAIAAAWQAAAOgFAHIgFAGIgJADIgHACIAAA6gAGRAVIAZgEIgUhIIALAFIAJAjIAHAfQAUgIADgbIADgkIAKABIgDAjQAAAIgCAGIgEAJIgFAHIgHAHIgKAFIgOADIgXAEgAAQAbIgHgBIgCgBIAAgJQAJACAKAAIAHgBIAFgDIAEgEIACgFIABgFIABgHIAAgMQAAgJgCgFIgCgFIgEgEQgCgCgDgBQgDgCgFAAIgJABIgHACIgCABIAAgKIACgBIAHgBIAJgBIAKABIAIAEIAGAFIAEAGIACAHQACAGAAAGIAAAOIgBAHIgCAIIgDAHIgGAGIgIAFQgGACgFAAIgKgBgAjMAaIgDAAIAAgJIADAAQAKACALAAQAEAAAEgCIAGgFQADgDABgFQADgHAAgLQAAgOgFgJQgCgFgEgCQgEgDgGAAQgFAAgEABIgGAEIgEAEQgCAFAAAGQAAAJADAEQAEAEAJACIACAAIgBAIIgDAAQgLgBgHgHQgGgHAAgMQAAgHACgFQADgGAEgEQAFgDAFgCQAGgCAGAAIAKACQAEABAEADQAEAEADAFQADAEACAIQABAHAAAIQAAAJgBAGQgCAHgDAFQgDAFgEADQgHAHgLAAQgLAAgKgCgAFJAaIAAgIIAyABIgyhKIAMAAIAaArQAFgDADgHQACgHABgLIACgPIAKABIgBANIAAADIgBAEIAAAEIgBAFIgCAEIgCAFIgCAEQgDAEgGADIASAXIAAAIgAC0AaIAAg4QAAgRgWAAIgRABIAABIIgKAAIAAhRIAcgBQALAAAIAEQAIADADAJQACAEAAAGIAAA4gAguAaIAAgIIAcAAQACgFAAgHIAAgnQAAgIgEgDQgDgDgGAAIgIABIAAgJIALgBQAUAAAAAWIAAAoIAAAKIgCAIIAAACgAiIAaIAAhRIALAAIAABRgAjwAaIAAg4QAAgRgXAAIgQAAIAAgIIAQgBIAMABIAIADIAHAFQAGAGAAALIAAA4gAkuAaIAAg4QAAgRgXAAIgQABIAABIIgLAAIAAhRIAcgBQAMAAAIAEQAIADADAJQABAEAAAGIAAA4gAl/AaIAAhRIALAAIAABRgAm7AaIAAgIIAcAAQACgFAAgHIAAgnQAAgIgEgDQgDgDgGAAIgIABIAAgJIALgBQAUAAAAAWIAAAoIAAAKIgCAIIAAACgAExAAIAAg3IALAAIAAAsIgJALgABlAAIAAg3IALAAIAAAsIgJALgABIAAIAAg3IALAAIAAAsIgJALgAhHAAIAAg3IAKAAIAAAsIgIALgAnUAAIAAg3IAKAAIAAAsIgIALg");
	this.shape.setTransform(0.2,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AF8BXIAAhmIgahFIARAAIAVA7IADAKIAKgEQAOgEAAgWIAAgnIAQAAIAAAhQABAWgJAKQgCAFgGADQgEAEgIACIgLADIAABZgAJbAgIAmgGIgdhuIAQAHIANA1IALAvQAegLAFgqIAFg2IAPABIgEA1QgBANgDAJQgCAIgDAFIgIALQgFAGgGAFQgHAEgJADQgJAEgLABIgjAFgAAXAoIgJgCIgDAAIAAgOQANADAPAAQAGAAAEgBIAIgFIAGgGIADgHIACgIIACgMIAAgTQAAgMgDgIIgDgIQgDgEgDgCIgIgFQgFgCgHAAIgOACIgKACIgDABIAAgOIADgBIAJgCQAHgCAIAAQAJAAAHACQAGACAFADQAFAEAEAEQADAEADAFIADAKQADAKAAAKIAAAVIgBALIgDAMIgFAKIgJAKQgFAEgHACQgJADgIAAIgQgBgAk0AnIgEAAIAAgOIAEAAQAQADAQAAQAHAAAGgDQAGgDADgFQADgEADgHQADgLAAgRQAAgVgFgOQgEgHgGgEQgHgEgIAAQgIAAgFACQgHACgDADQgDADgCAEQgFAIAAAIQAAANAGAHQAFAGANADIAFABIgDAMIgEgBQgRgCgKgKQgKgLAAgSQAAgKAEgJQAEgIAHgGQAGgFAJgDQAIgDAJAAQAIAAAHACQAHADAGAFQAHAFADAHQAFAHACALQADALAAANQAAANgDAKQgCALgFAHQgDAHgHAGQgLAJgRAAQgQAAgQgCgAHwAnIAAgMIBKABIhLhwIASAAIAoBAQAHgEAEgLQAEgKACgRIACgWIAQACIgCATIAAAEIgBAGIgBAGIgCAHIgCAHIgCAHIgFAHQgEAGgIAEIAaAkIAAAMgAEQAnIAAhWQAAgZgjAAIgYABIAABuIgPAAIAAh8IAqgBQARAAAMAGQAMAFAEANQADAHAAAJIAABVgAhFAnIAAgMIArAAQABgHAAgLIAAg8QAAgMgFgFQgFgFgJAAIgMACIAAgNQAHgCAKAAQAeAAAAAhIAAA+IAAAPIgDAMIgBADgAjMAnIAAh7IARAAIAAB7gAlrAnIAAhWQAAgZgjAAIgXAAIAAgNIAYgBQALAAAGACQAIABAGADQAGADAEAEQAJAKAAARIAABVgAnIAnIAAhWQAAgZgjAAIgYABIAABuIgPAAIAAh8IAqgBQARAAAMAGQAMAFAEANQADAHAAAJIAABVgApBAnIAAh7IAQAAIAAB7gAqcAnIAAgMIArAAQABgHAAgLIAAg8QAAgMgEgFQgFgFgKAAIgLACIAAgNQAHgCAKAAQAdAAAAAhIAAA+IAAAPIgCAMIgBADgAHLgCIAAhSIAQAAIAABCIgNAQgACZgCIAAhSIAPAAIAABCIgMAQgABtgCIAAhSIAQAAIAABCIgNAQgAhsgCIAAhSIAQAAIAABCIgNAQgArDgCIAAhSIARAAIAABCIgNAQg");
	this.shape_1.setTransform(38,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.instance_2 = new lib.Path_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.8,108.9,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.9,32.4,1,1,0,0,0,120.7,101.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.9,32.4);
	this.instance_4.cache(-113,-97,227,195);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0D362").s().p("Aw4OPIAA8dIKfAAIAAOwIXSAAIAANtg");
	this.shape_3.setTransform(33.9,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#559CE5").s().p("AreJ2IAAzrIW9AAIAATrg");
	this.shape_4.setTransform(-0.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape.setTransform(46,51.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_1.setTransform(38.6,51.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AgJApQgFgCgEgDQgEgDgDgFQgDgFgBgHQgCgHAAgJIAAgoIALAAIAAAoQAAAOAEAJQACAFAFADQAEADAFAAQAFAAADgCQAEgCACgDQADgDABgFQADgIAAgLIgBgJIgBgJIgEgHIgGgFQgDgCgFAAIgIABIAAgKIAIgBQAFAAAFACQAEABAEAEQAEADADAFQAGALAAAQQAAAJgCAHQgCAHgDAFQgCAFgEADQgEADgFACQgFACgFAAQgFAAgEgCg");
	this.shape_2.setTransform(30.8,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_3.setTransform(25,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AgJAoQgFgBgEgDQgEgEgDgFQgDgEgBgIQgCgHAAgIQAAgLADgIQACgJAEgEIgIABIAAgJIAegBQAPAAAIAKQAJAKAAAVQAAAIgCAHQgCAIgCAEQgDAFgEAEQgEADgFABQgFACgFAAQgEAAgFgCgAgSgSQgCAKAAAIIABAMQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgRgGgJQgCgDgEgCQgEgBgFAAIgKAAQgFAFgDAJg");
	this.shape_4.setTransform(19.7,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_5.setTransform(14.5,48.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgdApIAAhQQALgBARgBQAfAAAAAXIAAA7gAgSAhIAlAAIAAgyQABgEgCgCQgBgDgCgCIgGgDIgGgBIgFAAIgOABIgCAAg");
	this.shape_6.setTransform(9.1,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AADApIAAgIIARAAIAAguQAAgTgRAAIgFABIgFADIgFAFIgBABIgGA/IgLAAIAGg+IAAgBIgBgFIgCgIIgCgFIALAAQACADABAGIAAAAIAIgGIAHgDIAHgBQAMAAAGAIQAGAHAAAMIAAA3g");
	this.shape_7.setTransform(-2.4,50.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAwIAJAAIAAAIg");
	this.shape_8.setTransform(-9.4,50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_9.setTransform(-16.5,51.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAwIAJAAIAAAIg");
	this.shape_10.setTransform(-23.8,50.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_11.setTransform(-29.1,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_12.setTransform(-34,51.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_13.setTransform(-39.5,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgdApIAAhQQALgBARgBQAfAAAAAXIAAA7gAgSAhIAlAAIAAgyQABgEgCgCQgBgDgCgCIgGgDIgGgBIgFAAIgOABIgCAAg");
	this.shape_14.setTransform(-44.9,50.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AKABYIAAh5IAQAAIAAB5gAIQBYIAAh5IAQAAIAAB5gAkuBYIAAh5IAQAAIAAB5gAo2BYIAAh5IAQAAIAAB5gAG4AnQgHgBgHgGQgGgFgEgIQgEgHgDgLQgCgJAAgNIAAg/IAQAAIAAA/QAAAUAGANQAEAIAGAEQAHAFAIgBQAIAAAGgCQAFgDAEgFQADgFADgGQAEgLAAgRIgBgPIgDgOQgCgHgDgFQgDgEgGgDQgFgCgIgBIgNABIAAgOQAFgCAIAAQAJAAAGADQAHACAGAFQAGAGAEAHQAJAQAAAbQAAANgDAJQgCALgEAIQgFAHgGAFQgGAGgHABQgHADgIAAQgIAAgHgDgAERAnQgHgBgHgGQgGgFgEgHQgEgIgDgLQgCgJAAgNQAAgSAEgNQAEgMAGgHIgMABIAAgNQAUgCAaAAQAWAAANAQQANAQAAAgQAAANgCAJQgDALgEAIQgFAHgGAFQgGAGgHABQgHADgIAAQgIAAgHgDgAEPhHQgIAIgDAOQgEAOAAAMQAAAMABAJQACAHADAHQAEAIAGAFQAHADAJAAQAJAAAGgDQAHgFADgIQAHgMAAgVQAAgbgKgNQgDgEgGgEQgGgDgHAAgAKuAoIAAgEQAAgGADgNIAFgRIAHgYIAOgvIhLAAIAAgMIBbAAIAAAMIgPAxIgEAPIgDAKIgDALIgCAJIgCANIAAAEgAI+AoIAAgEQAAgGADgNIAFgRIAHgYIAOgvIhLAAIAAgMIBbAAIAAAMIgPAxIgEAPIgDAKIgDALIgCAJIgCANIAAAEgAFpAoIAAh7IAQAAIAAB7gABSAoIAAh6QARgDAaAAQAwAAAAAiIAABbgABiAbIA7AAIAAhMQAAgGgCgEQgCgEgDgDIgIgEIgJgBIgKgBIgVABIgEAAgAgoAoIAAgNIAbAAIAAhGQAAgcgagBIgJACQgFACgDACQgGAEgDAFIgBABIgJBgIgQAAIAJheIAAgCIgBgJIgEgMIgCgGIAQAAQACAEACAJIABAAQAFgGAHgEIAKgDQAGgCAGAAQASAAAJALQAJALAAATIAABUgAjEAoIAAgNIA9AAIAAhJQAAgOgHgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAVAAAKAJQAKAJAAAWIAABIIAOAAIAAANgAkAAoIAAgEQAAgGADgNIAFgRIAHgYIAOgvIhLAAIAAgMIBbAAIAAAMIgPAxIgEAPIgDAKIgDALIgCAJIgCANIAAAEgAmdAoIAAgNIA9AAIAAhJQAAgOgHgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAVAAAKAJQAKAJAAAWIAABIIAOAAIAAANgAnGAoIAAh7IAQAAIAAB7gAoHAoIAAgEQAAgGADgNIAFgRIAHgYIANgvIhLAAIAAgMIBbAAIAAAMIgOAxIgEAPIgEAKIgCALIgCAJIgCANIAAAEgAraAoIAAh6QARgDAaAAQAwAAAAAiIAABbgArKAbIA7AAIAAhMQAAgGgCgEQgCgEgDgDIgIgEIgJgBIgKgBIgVABIgEAAgADJgBIAAhSIAQAAIAABBIgMARgApjgBIAAhSIAQAAIAABBIgMARg");
	this.shape_15.setTransform(38.2,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_2_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38,109,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.1,32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_16.setTransform(46,51.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_17.setTransform(38.6,51.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#513423").s().p("AgJApQgFgCgEgDQgEgDgDgFQgDgFgBgHQgCgHAAgJIAAgoIALAAIAAAoQAAAOAEAJQACAFAFADQAEADAFAAQAFAAADgCQAEgCACgDQADgDABgFQADgIAAgLIgBgJIgBgJIgEgHIgGgFQgDgCgFAAIgIABIAAgKIAIgBQAFAAAFACQAEABAEAEQAEADADAFQAGALAAAQQAAAJgCAHQgCAHgDAFQgCAFgEADQgEADgFACQgFACgFAAQgFAAgEgCg");
	this.shape_18.setTransform(30.8,50.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_19.setTransform(25,50.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#513423").s().p("AgJAoQgFgBgEgDQgEgEgDgFQgDgEgBgIQgCgHAAgIQAAgLADgIQACgJAEgEIgIABIAAgJIAegBQAPAAAIAKQAJAKAAAVQAAAIgCAHQgCAIgCAEQgDAFgEAEQgEADgFABQgFACgFAAQgEAAgFgCgAgSgSQgCAKAAAIIABAMQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgRgGgJQgCgDgEgCQgEgBgFAAIgKAAQgFAFgDAJg");
	this.shape_20.setTransform(19.7,50.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_21.setTransform(14.5,48.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#513423").s().p("AgdApIAAhQQALgBARgBQAfAAAAAXIAAA7gAgSAhIAlAAIAAgyQABgEgCgCQgBgDgCgCIgGgDIgGgBIgFAAIgOABIgCAAg");
	this.shape_22.setTransform(9.1,50.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#513423").s().p("AADApIAAgIIARAAIAAguQAAgTgRAAIgFABIgFADIgFAFIgBABIgGA/IgLAAIAGg+IAAgBIgBgFIgCgIIgCgFIALAAQACADABAGIAAAAIAIgGIAHgDIAHgBQAMAAAGAIQAGAHAAAMIAAA3g");
	this.shape_23.setTransform(-2.4,50.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAwIAJAAIAAAIg");
	this.shape_24.setTransform(-9.4,50.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_25.setTransform(-16.5,51.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAwIAJAAIAAAIg");
	this.shape_26.setTransform(-23.8,50.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_27.setTransform(-29.1,50.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_28.setTransform(-34,51.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_29.setTransform(-39.5,48.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#513423").s().p("AgdApIAAhQQALgBARgBQAfAAAAAXIAAA7gAgSAhIAlAAIAAgyQABgEgCgCQgBgDgCgCIgGgDIgGgBIgFAAIgOABIgCAAg");
	this.shape_30.setTransform(-44.9,50.2);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.1,32.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("Ak2BBIAAhPIALAAIAABPgAnlBBIAAhPIALAAIAABPgAg/BBIAAhXQAAgNgFgNIALAAIABAEIACAJIABANIAABXgAB5AhIAAgIIAFAAQAJABAAgMIAAg1IgJABIAAgJQASgBANAAQAMAAAHADQAJAEADAJQABAEAAAGIAAA3IgKAAIAAg4QAAgQgXAAIgKAAIAAA0QAAAKgFAGQgEAGgJgBIgHgBgAGpAhIAAgIIAxABIgyhKIAMAAIAbArQAFgDACgHQADgGABgMIABgPIALABIgCANIAAADIAAAEIgBAEIgBAFIgBAFIgCAEIgDAEQgDAEgFACIARAYIAAAIgAF+AhIAAgIIASAAIAAguQAAgTgRAAIgGABIgFADIgGAGIgBAAIgGA/IgKAAIAGg+IAAgBIgBgGIgCgIIgCgEIAKAAQACADABAGIABAAIAIgGIAGgDIAIAAQAMgBAGAIQAGAHAAANIAAA2gAFCAhIAAg4QAAgQgXAAIgQAAIAABIIgLAAIAAhRIAcgBQAMAAAIAEQAIADADAJQABAEAAAHIAAA3gAA2AhIAAgIIAoAAIAAgwQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgJIAYAAQANgBAHAHQAGAGAAAOIAAAvIAKAAIAAAIgAAPAhIAShIIgqAAIAAgZIAJAAIAAAQIArAAIAAAJIgRBIgAipAhIAAgIIAoAAIAAgwQAAgJgFgEQgEgDgJAAIgTAAIgDAAIAAgJIAYAAQANgBAHAHQAGAGAAAOIAAAvIAKAAIAAAIgAjvAhIAAgIIAoAAIAAgwQAAgJgEgEQgFgDgJAAIgTAAIgDAAIAAgJIAYAAQAOgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIgAkXAhIAAgBQAAgFACgIIADgMIAFgPIAJgfIgyAAIAAgJIA9AAIAAAJIgKAgIgDAJIgCAHIgCAHIgBAGIgBAKIAAABgAl/AhIAAgIIAoAAIAAgwQAAgJgEgEQgFgDgJAAIgTAAIgDAAIAAgJIAYAAQAOgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIgAmaAhIAAhRIAKAAIAABRgAnGAhIAAgBQAAgFACgIIADgMIAFgPIAJgfIgyAAIAAgJIA9AAIAAAJIgKAgIgDAJIgCAHIgCAHIgBAGIgBAKIAAABgADzAGIAAg2IAKAAIAAAsIgIAKgAghAGIAAg2IAKAAIAAAsIgIAKg");
	this.shape.setTransform(0.4,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AhgBjIAAiFQgBgTgGgTIAQAAIACAFIACAOIACATIAACFgAnUBjIAAh5IAQAAIAAB5gArbBjIAAh5IAQAAIAAB5gAC2AzIAAgNIAIABQAOAAAAgRIAAhRIgOABIAAgNQAbgDAUAAQASAAALAFQAMAHAFAMQADAHgBAJIAABVIgQAAIAAhWQABgagjAAIgPABIAABQQgBAQgGAIQgHAJgOAAIgKgCgAJ/AzIAAgNIBMABIhMhvIASAAIAoBAQAIgFADgKQAEgKACgRIACgWIAQACIgDASIAAAFIgBAGIAAAGIgCAHIgBAHIgDAHIgFAHQgEAFgIAEIAaAkIAAANgAI/AzIAAgNIAbAAIAAhGQAAgcgagBIgJACQgEACgDACQgHAEgCAFIgCABIgJBgIgPAAIAJheIAAgCIgCgJIgEgMIgCgGIAQAAQACAEACAJIABAAQAFgGAHgEIAKgDQAGgCAHAAQARAAAJALQAKALAAATIAABUgAHkAzIAAhWQAAgagjAAIgXABIAABvIgQAAIAAh8IAqgBQARAAAMAFQAMAGAFANQACAGAAAKIAABVgABQAzIAAgNIA9AAIAAhJQAAgOgHgGQgGgFgPgBIgcABIgFABIAAgNQAPgCAVAAQAVAAAKAJQAKAJAAAWIAABIIAOAAIAAANgAAWAzIAbhvIhBAAIAAglIAQAAIAAAZIBBAAIAAAMIgbBvgAkAAzIAAgNIA9AAIAAhJQAAgOgHgGQgHgFgOgBIgdABIgEABIAAgNQAPgCAVAAQAUAAAKAJQAKAJAAAWIAABIIAPAAIAAANgAlpAzIAAgNIA9AAIAAhJQgBgOgGgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAUAAALAJQAJAJABAWIAABIIANAAIAAANgAmlAzIAAgEQAAgGADgNIAFgRIAHgYIAOgvIhMAAIAAgMIBbAAIAAAMIgOAxIgEAOIgEALIgCALIgCAJIgCANIAAAEgApCAzIAAgNIA9AAIAAhJQgBgOgGgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAVAAAJAJQALAJAAAWIAABIIANAAIAAANgAprAzIAAh7IAQAAIAAB7gAqtAzIAAgEQAAgGAEgNIAEgRIAIgYIANgvIhLAAIAAgMIBbAAIAAAMIgOAxIgFAOIgDALIgDALIgCAJIgCANIAAAEgAFtAJIAAhRIAQAAIAABBIgNAQgAg0AJIAAhRIAQAAIAABBIgMAQg");
	this.shape_1.setTransform(-37.9,110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,109,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.9,32.5,1,1,0,0,0,120.7,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AgdApIAAgIIAiAAIAOABIgUgdIgdgtIAMAAIAYAoIACABQAFgBACgIQADgGABgMIABgOIALABIgCANIAAACIAAAFIgBADIgBAGIgBAEIgCAFIgDACQgDAFgFACIARAZIAAAIg");
	this.shape_2.setTransform(45.9,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AADApIAAgIIARAAIAAguQAAgTgRAAIgFACIgFACIgFAGIgBAAIgGA/IgLAAIAGg+IAAgBIgBgGIgCgIIgCgEIALAAQACADABAGIAAAAIAIgGIAHgDIAHAAQAMgBAGAIQAGAHAAANIAAA2g");
	this.shape_3.setTransform(38.4,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AATAqIAAg5QABgQgWAAIgQAAIAABJIgLAAIAAhSIAcgBQAKAAAIAEQAJAEACAIQACAFAAAGIAAA4g");
	this.shape_4.setTransform(30.7,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_5.setTransform(25.2,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIAEQAIADADAJQACAEAAAGIAAA4IgLAAIAAg5QAAgQgWAAIgJAAIAAA0QAAALgFAFQgFAGgIAAIgHgBg");
	this.shape_6.setTransform(16,50.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIg");
	this.shape_7.setTransform(8.8,50.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_8.setTransform(2.1,49.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_9.setTransform(-2.5,49.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgCA5IAAhXQAAgNgFgNIAKAAIACAEIACAJIAAANIAABXg");
	this.shape_10.setTransform(-5.7,52);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIg");
	this.shape_11.setTransform(-13.6,50.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGgBAOIAAAvIAKAAIAAAIg");
	this.shape_12.setTransform(-20.5,50.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_13.setTransform(-27.6,52);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGgBAOIAAAvIAKAAIAAAIg");
	this.shape_14.setTransform(-34.9,50.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_15.setTransform(-40.2,50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_16.setTransform(-45.1,52);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37.9,32.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("ACNBBIAAhPIALAAIAABPgAggBBIAAhPIAKAAIAABPgAibAhIAAgIIAGAAQAIABABgMIAAg1IgJABIAAgJQARgBANAAQAMAAAHADQAJAEADAJQABAEABAGIAAA3IgLAAIAAg4QAAgQgXAAIgKAAIAAA0QAAAKgFAGQgEAGgJgBIgHgBgADUAhIAAgIIApAAIAAgwQAAgJgFgEQgFgDgIAAIgUAAIgDAAIAAgJIAZAAQANgBAHAHQAGAGAAAOIAAAvIAKAAIAAAIgACtAhIAAgBQAAgFACgIIACgMIAGgPIAJgfIgzAAIAAgJIA9AAIAAAJIgKAgIgCAJIgDAHIgCAHIgBAGIgBAKIAAABgABEAhIAAgIIApAAIAAgwQAAgJgFgEQgFgDgIAAIgUAAIgDAAIAAgJIAZAAQANgBAGAHQAHAGAAAOIAAAvIAKAAIAAAIgAApAhIAAhRIAKAAIAABRgAgCAhIAAgBQAAgFACgIIADgMIAEgPIAJgfIgwAAIAAgJIA7AAIAAAJIgKAgIgDAJIgBAHIgCAHIgBAGIgCAKIAAABgAi/AhIARhIIgrAAIAAgZIALAAIAAAQIArAAIAAAJIgSBIgAjyAhIAAhRIALAAIAABRgAkQAGIAAg2IALAAIAAAsIgJAKg");
	this.shape.setTransform(0.5,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("ADVBjIAAh5IAQAAIAAB5gAgxBjIAAh5IAQAAIAAB5gAjpAzIAAgNIAIABQAOAAAAgRIAAhRIgOABIAAgNQAbgDAUAAQASAAALAFQAMAHAFAMQADAHgBAJIAABVIgQAAIAAhWQABgagjAAIgPABIAABQQgBAQgGAIQgHAJgOAAIgKgCgAFAAzIAAgNIA9AAIAAhJQgBgOgGgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAUAAALAJQAJAJABAWIAABIIANAAIAAANgAEEAzIAAgEQAAgGADgNIAFgRIAHgYIAOgvIhMAAIAAgMIBbAAIAAAMIgOAxIgEAOIgEALIgCALIgCAJIgCANIAAAEgABnAzIAAgNIA9AAIAAhJQgBgOgGgGQgHgFgOgBIgcABIgFABIAAgNQAPgCAVAAQAVAAAJAJQALAJAAAWIAABIIANAAIAAANgAA+AzIAAh7IAQAAIAAB7gAgDAzIAAgEQAAgGADgNIAEgRIAIgYIANgvIhKAAIAAgMIBaAAIAAAMIgOAxIgFAOIgDALIgDALIgCAJIgCANIAAAEgAkhAzIAbhvIhBAAIAAglIAQAAIAAAZIBBAAIAAAMIgaBvgAltAzIAAh7IARAAIAAB7gAmaAJIAAhRIARAAIAABBIgNAQg");
	this.shape_1.setTransform(-37.7,110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,109,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38,32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAGAGAAAOIAAAvIAKAAIAAAIg");
	this.shape_2.setTransform(24.7,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_3.setTransform(17.6,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAGAGAAAOIAAAvIAKAAIAAAIg");
	this.shape_4.setTransform(10.3,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_5.setTransform(5.1,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_6.setTransform(0.1,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJADACAJQACAEAAAGIAAA4IgLAAIAAg5QAAgQgWAAIgKAAIAAA0QABALgFAFQgEAGgKAAIgGgBg");
	this.shape_7.setTransform(-11.7,50.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_8.setTransform(-18.6,49.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_9.setTransform(-23.3,50.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_10.setTransform(-26.3,49.1);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38,32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


(lib.bottle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513423").s().p("AD2A5IAAhPIALAAIAABPgAgVA5IAAhPIALAAIAABPgAjFA5IAAhPIALAAIAABPgAEVAaIAAgCQAAgFACgIIADgLIAFgQIAJgfIgyAAIAAgIIA8AAIAAAIIgKAgIgCAKIgCAHIgCAGIgBAGIgBAKIAAACgAC7AaIAAg5QAAgQgXAAIgQAAIAAgJIAQAAIAMAAIAJADIAGAFQAHAHAAALIAAA4gAAwAaIAAgIIApAAIAAgxQgBgJgEgEQgEgDgJAAIgTAAIgEAAIAAgIIAYgBQAOAAAGAGQAHAGAAAOIAAAwIAJAAIAAAIgAAJAaIAAgCQAAgFABgIIAEgLIAEgQIAJgfIgwAAIAAgIIA7AAIAAAIIgKAgIgCAKIgCAHIgDAGIgBAGIgBAKIAAACgAhfAaIAAgIIApAAIAAgxQgBgJgEgEQgEgDgJAAIgTAAIgEAAIAAgIIAYgBQAOAAAGAGQAHAGAAAOIAAAwIAJAAIAAAIgAh6AaIAAhRIALAAIAABRgAilAaIAAgCQAAgFACgIIACgLIAGgQIAJgfIgzAAIAAgIIA9AAIAAAIIgKAgIgDAKIgCAHIgCAGIAAAGIgCAKIAAACgAkyAaIAAhRQAMgBAQAAQAgAAABAWIAAA8gAknASIAnAAIAAgzQAAgEgCgCQgBgDgCgCIgFgCIgGgBIgHAAIgOAAIgCAAgADYgBIAAg2IALAAIAAArIgJALgAjigBIAAg2IAKAAIAAArIgIALg");
	this.shape.setTransform(0.5,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("AFyBXIAAh5IAQAAIAAB5gAghBXIAAh5IAQAAIAAB5gAkpBXIAAh5IARAAIAAB5gAGhAnIAAgDQAAgHADgMIAFgRIAHgYIAOgwIhMAAIAAgMIBbAAIAAAMIgOAxIgEAPIgEALIgCAKIgCAJIgCAOIAAADgAEYAnIAAhWQABgZgjAAIgYAAIAAgNIAZgBQAKAAAHACQAHABAGADQAGADAEAEQAKAKgBARIAABVgABIAnIAAgMIA9AAIAAhKQAAgOgHgGQgGgFgOAAIgdABIgFAAIAAgNQAQgCAUAAQAVAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAANAnIAAgDQAAgHADgMIAEgRIAHgYIAOgwIhKAAIAAgMIBaAAIAAAMIgOAxIgFAPIgDALIgCAKIgCAJIgDAOIAAADgAiQAnIAAgMIA9AAIAAhKQAAgOgHgGQgGgFgOAAIgdABIgFAAIAAgNQAQgCAUAAQAVAAAKAJQAKAJAAAWIAABJIAOAAIAAAMgAi4AnIAAh7IAPAAIAAB7gAj6AnIAAgDQAAgHADgMIAFgRIAHgYIANgwIhLAAIAAgMIBbAAIAAAMIgOAxIgEAPIgDALIgDAKIgCAJIgCAOIAAADgAnMAnIAAh6QAQgDAaAAQAwAAAAAiIAABbgAm8AbIA6AAIAAhNQAAgGgCgEQgCgEgDgDIgIgDIgJgCIgKAAIgVABIgDAAgAFFgCIAAhSIAQAAIAABCIgMAQgAlWgCIAAhSIARAAIAABCIgNAQg");
	this.shape_1.setTransform(-37.6,111.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Path_11();
	this.instance.parent = this;
	this.instance.setTransform(0,50.5,1,1,0,0,0,73.5,12.5);
	this.instance.alpha = 0.941;

	this.instance_1 = new lib.Image_62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.5,-63);

	this.instance_2 = new lib.Path_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38,109,1,1,0,0,0,111.5,18.9);
	this.instance_2.alpha = 0.941;

	this.instance_3 = new lib.Image_26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.9,32.5,1,1,0,0,0,120.6,101.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,4,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_2.setTransform(28.1,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_3.setTransform(22.7,49.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("AAOApIAAg4QAAgQgWAAIgQAAIAAgJIAQAAIALAAIAJADIAHAFQAGAHAAALIAAA3g");
	this.shape_4.setTransform(17.8,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIg");
	this.shape_5.setTransform(8.4,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_6.setTransform(1.3,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIAAIgTAAIgDAAIAAgJIAYAAQANgBAGAHQAHAGAAAOIAAAvIAJAAIAAAIg");
	this.shape_7.setTransform(-6,50.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#513423").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_8.setTransform(-11.3,50.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#513423").s().p("AgdA5IAAhQIALAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgKAhIgCAJIgCAHIgCAHIgBAGIgCAJIAAACg");
	this.shape_9.setTransform(-16.2,52);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_10.setTransform(-21.7,49.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#513423").s().p("AgdApIAAhQQAMgCAQABQAfgBAAAXIAAA7gAgSAhIAlAAIAAgyQAAgEgBgCQgBgDgCgCIgFgCIgHgBIgFAAIgOAAIgCAAg");
	this.shape_11.setTransform(-27.1,50.4);

	this.instance_4 = new lib._223x191square();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37.9,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,102,102,0.6)").s().p("AreJ2IAAzrIW9AAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-63,147,126);


// stage content:
(lib.DIY30617 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.bottleSection.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
		
		
		this.canSection.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(2);
		}
		
		
		this.tiresSection.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.woodSection.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(4);
		}
		
		
		this.escButton1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(0);
		}
		
		
		this.bottle5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(5);
		}
		
		
		this.escButton2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.bottle1.addEventListener("mouseover", hide.bind(this));
		this.bottle1.addEventListener("mouseover", fl_overTo.bind(this));
		this.bottle1.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle2.addEventListener("mouseover", hide.bind(this));
		this.bottle2.addEventListener("mouseover", fl_overTo2.bind(this));
		this.bottle2.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle3.addEventListener("mouseover", hide.bind(this));
		this.bottle3.addEventListener("mouseover", fl_overTo3.bind(this));
		this.bottle3.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle4.addEventListener("mouseover", hide.bind(this));
		this.bottle4.addEventListener("mouseover", fl_overTo4.bind(this));
		this.bottle4.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle5.addEventListener("mouseover", hide.bind(this));
		this.bottle5.addEventListener("mouseover", fl_overTo5.bind(this));
		this.bottle5.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle6.addEventListener("mouseover", hide.bind(this));
		this.bottle6.addEventListener("mouseover", fl_overTo6.bind(this));
		this.bottle6.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle7.addEventListener("mouseover", hide.bind(this));
		this.bottle7.addEventListener("mouseover", fl_overTo7.bind(this));
		this.bottle7.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle8.addEventListener("mouseover", hide.bind(this));
		this.bottle8.addEventListener("mouseover", fl_overTo8.bind(this));
		this.bottle8.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle9.addEventListener("mouseover", hide.bind(this));
		this.bottle9.addEventListener("mouseover", fl_overTo9.bind(this));
		this.bottle9.addEventListener("mouseout", fl_outTo.bind(this));
		
		this.bottle10.addEventListener("mouseover", hide.bind(this));
		this.bottle10.addEventListener("mouseover", fl_overTo10.bind(this));
		this.bottle10.addEventListener("mouseout", fl_outTo.bind(this));
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function hide()
		{
			this.bottle1.alpha=0
			this.bottle2.alpha=0
			this.bottle3.alpha=0
			this.bottle4.alpha=0
			this.bottle5.alpha=0
			this.bottle6.alpha=0
			this.bottle7.alpha=0
			this.bottle8.alpha=0
			this.bottle9.alpha=0
			this.bottle10.alpha=0
		}
		function fl_outTo()
		{
			console.log("hit")
			this.bottle1.alpha=1
			this.bottle2.alpha=1
			this.bottle3.alpha=1
			this.bottle4.alpha=1
			this.bottle5.alpha=1
			this.bottle6.alpha=1
			this.bottle7.alpha=1
			this.bottle8.alpha=1
			this.bottle9.alpha=1
			this.bottle10.alpha=1
		}
		
		function fl_overTo()
		{
			this.bottle1.alpha=1
		}
		function fl_overTo2()
		{
			this.bottle2.alpha=1
		}
		function fl_overTo3()
		{
			this.bottle3.alpha=1
		}
		function fl_overTo4()
		{
			this.bottle4.alpha=1
		}
		function fl_overTo5()
		{
			this.bottle5.alpha=1
		}
		function fl_overTo6()
		{
			this.bottle6.alpha=1
		}
		function fl_overTo7()
		{
			this.bottle7.alpha=1
		}
		function fl_overTo8()
		{
			this.bottle8.alpha=1
		}
		function fl_overTo9()
		{
			this.bottle9.alpha=1
		}
		function fl_overTo10()
		{
			this.bottle10.alpha=1
		}
		this.bottle1.cursor = "no-drop"; 
		this.bottle2.cursor = "no-drop"; 
		this.bottle3.cursor = "no-drop"; 
		this.bottle4.cursor = "no-drop"; 
		this.bottle6.cursor = "no-drop"; 
		this.bottle7.cursor = "no-drop"; 
		this.bottle8.cursor = "no-drop"; 
		this.bottle9.cursor = "no-drop"; 
		this.bottle10.cursor = "no-drop";
	}
	this.frame_2 = function() {
		this.can1.cursor = "no-drop"; 
		this.can2.cursor = "no-drop"; 
		this.can3.cursor = "no-drop"; 
		this.can4.cursor = "no-drop"; 
		this.can5.cursor = "no-drop"; 
		this.can6.cursor = "no-drop"; 
		this.can7.cursor = "no-drop"; 
		this.can8.cursor = "no-drop"; 
		this.can9.cursor = "no-drop"; 
		this.can10.cursor = "no-drop";
	}
	this.frame_3 = function() {
		this.tire1.cursor = "no-drop"; 
		this.tire2.cursor = "no-drop"; 
		this.tire3.cursor = "no-drop"; 
		this.tire4.cursor = "no-drop"; 
		this.tire5.cursor = "no-drop"; 
		this.tire6.cursor = "no-drop"; 
		this.tire7.cursor = "no-drop"; 
		this.tire8.cursor = "no-drop"; 
		this.tire9.cursor = "no-drop"; 
		this.tire10.cursor = "no-drop";
	}
	this.frame_4 = function() {
		this.wood1.cursor = "no-drop"; 
		this.wood2.cursor = "no-drop"; 
		this.wood3.cursor = "no-drop"; 
		this.wood4.cursor = "no-drop"; 
		this.wood5.cursor = "no-drop"; 
		this.wood6.cursor = "no-drop"; 
		this.wood7.cursor = "no-drop"; 
		this.wood8.cursor = "no-drop"; 
		this.wood9.cursor = "no-drop"; 
		this.wood10.cursor = "no-drop";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(2));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhfBjIAAh0IgfhLIAkAAIAYBCIAAABIAGABQAIAAAEgFQAEgEAAgKIAAgxIAgAAIAAAyQAAAWgMALQgFAEgHADQgIACgKAAIgJgBIAABkgAAGAcIAjgFIgehzIAhAAIAZBqQAJgGAEgJQAFgKABgQIAGhBIAhgGIgGBCQgCAUgFAMQgPAmguAIIgoAGg");
	this.shape.setTransform(458,617.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#513423").s().p("ADLCDIAAi4IAtAAIAAC4gAj/CDIAAi4IAtAAIAAC4gAGEA7IAAghIBVAAIAAhZQAAgiglAAQgTAAgWAEIgHABIAAgkQAWgCAgAAQAvAAAQASQAIAKACAMQADAMAAAQIAABYIAVAAIAAAhgAESA7IAAgFQAAgMAEgUQADgVAGgPIAehRIhyAAIAAghICiAAIAAAaIgfBXQgPAoAAAdIAAAFgAAVA7IAAghIBVAAIAAhZQAAgiglAAQgTAAgWAEIgHABIAAgkQAWgCAgAAQAvAAAQASQAIAKACAMQADAMAAAQIAABYIAVAAIAAAhgAg9A7IAAi8IAtAAIAAC8gAi4A7IAAgFQAAgMAEgUQAEgVAGgPIAdhRIhyAAIAAghICjAAIAAAaIggBXQgPAoAAAdIAAAFgAoaA7IAAi3QAKgDAWgBQAWgCAUAAQApAAASANQASANAAAdIAACGgAnuhgIAAB6IA+AAIAAhmQAAgNgLgFQgJgDgRAAIgZABgAlXgEIAAh9IAsAAIAABYIgdAlg");
	this.shape_1.setTransform(459.6,166.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ACVBgIAAiHIAhAAIAACHgAi6BgIAAiHIAgAAIAACHgAEdArIAAgYIA+AAIAAhBQAAgZgbAAQgOAAgQADIgFABIAAgbQAPgBAYAAQAjAAAMANQAGAHABAJQACAJAAAMIAABAIAQAAIAAAYgADJArIAAgDQAAgJACgPQADgPAFgLIAVg7IhTAAIAAgZIB3AAIAAAUIgXA/QgMAdAAAWIAAADgAAPArIAAgYIA/AAIAAhBQgBgZgbAAQgNAAgQADIgGABIAAgbQAQgBAXAAQAjAAAMANQAGAHABAJQADAJAAAMIAABAIAPAAIAAAYgAgtArIAAiJIAiAAIAACJgAiHArIAAgDQAAgJADgPQADgPAEgLIAWg7IhUAAIAAgZIB4AAIAAAUIgYA/QgLAdAAAWIAAADgAmLArIAAiGIAYgDIAfgBQAdgBAOAKQANAKAAAVIAABigAlqhGIAABZIAtAAIAAhLQAAgJgIgDQgGgDgOAAIgRABgAj8gDIAAhbIAhAAIAABAIgWAbg");
	this.shape_2.setTransform(459.4,158.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0D362").s().p("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");
	this.shape_3.setTransform(460,546.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#513423").s().p("EA2NAZUIAAhRIALAAIAABRgAfqZUIAAhRIALAAIAABRgADnZUIAAhRIALAAIAABRgAS8ZTIAAhDIgRguIALAAIAOAnIACAHIAHgDQAJgDAAgOIAAgaIALAAIAAAVQAAAPgFAHIgGAFIgIAEIgIACIAAA7gEggVAZTIAAhNQAAgJgCgFIgCgFIgEgFQgCgCgDgBQgDgBgFAAIgJABIgHABIgCABIAAgJIADgBIAGgBIAKgBIAJABIAIADIAGAGIAEAGIACAGQACAHAAAGIAABPgAWbYvIAZgEIgThJIALAFIAIAiIAIAhQAUgIACgcIADgkIALABIgDAjQgBAIgCAGIgDAKIgFAHIgIAGIgKAGIgNADIgXADgATsYvIAZgEIgUhJIALAFIAJAiIAHAhQAUgIADgcIADgkIAKABIgDAjQAAAIgCAGIgEAKIgFAHIgHAGIgKAGIgOADIgXADgEAzMAY0IgDgBIAAgIIADAAQAKACALgBQAEAAAEgBIAGgGQADgDABgEQADgIAAgLQAAgOgFgJQgCgFgEgDQgEgCgGAAQgFgBgEACIgGADIgEAFQgCAFAAAGQAAAIADAFQAEAEAJABIACABIgBAIIgDAAQgLgCgHgHQgGgHAAgLQAAgHACgFQADgHAEgDQAFgEAFgBQAGgCAGAAIAKACQAEABAEADQAEADADAFQADAFACAIQABAGAAAJQAAAJgBAGQgCAIgDAFQgDAFgEADQgHAGgLAAQgLABgKgCgAcWYzQgEgBgEgDQgEgDgDgFQgDgGgCgHQgBgGAAgKIAAgoIAKAAIAAAoQAAAOAFAKQACAFAEADQAEACAGAAQAFAAAEgBQAEgCACgEQACgDACgEQACgIAAgLIAAgKIgCgJIgDgHIgGgGQgEgBgFAAIgJABIAAgKIAJgBQAGAAAEACQAFABAEADQAEAEACAFQAGALAAARQAAAJgCAGQgBAIgDAFQgDAFgEADQgEADgFABQgEACgGAAQgFAAgFgCgAAUYzQgFgBgEgDQgEgDgDgFQgDgGgBgHQgBgGAAgKIAAgoIAKAAIAAAoQAAAOAEAKQACAFAFADQAEACAFAAQAGAAADgBQAEgCACgEQADgDABgEQADgIAAgLIgBgKIgBgJIgEgHIgGgGQgDgBgFAAIgJABIAAgKIAJgBQAFAAAFACQAEABAEADQAEAEADAFQAGALAAARQAAAJgCAGQgCAIgDAFQgCAFgEADQgEADgFABQgFACgFAAQgGAAgEgCgA30Y0IgDgBIAAgIIADAAQAKACALgBQAEAAAEgBIAGgGQADgDABgEQADgIAAgLQAAgOgFgJQgCgFgEgDQgEgCgGAAQgFgBgEACIgGADIgEAFQgCAFAAAGQAAAIADAFQAEAEAJABIACABIgBAIIgDAAQgLgCgHgHQgGgHAAgLQAAgHACgFQADgHAEgDQAFgEAFgBQAGgCAGAAIAKACQAEABAEADQAEADADAFQADAFACAIQABAGAAAJQAAAJgBAGQgCAIgDAFQgDAFgEADQgHAGgLAAQgLABgKgCgA/xY0IgDgBIAAgIIADAAQAKACALgBQAFAAAEgBIAGgGQACgDACgEQACgIAAgLQAAgOgEgJQgCgFgFgDQgEgCgFAAQgFgBgEACIgGADIgEAFQgDAFAAAGQAAAIAEAFQAEAEAIABIADABIgCAIIgCAAQgMgCgGgHQgHgHAAgLQAAgHADgFQADgHAEgDQAEgEAGgBQAFgCAGAAIAKACQAFABAEADQAEADADAFQADAFABAIQACAGAAAJQAAAJgCAGQgBAIgDAFQgDAFgEADQgIAGgLAAQgLABgKgCgEAviAY0IAAgJIAFABQAJAAAAgLIAAg2IgJABIAAgJQASgCANAAQALAAAIADQAIAFADAIQACAEAAAGIAAA5IgLAAIAAg5QAAgRgXAAIgKAAIAAA2QAAAJgEAHQgFAFgJAAIgGgBgAaHY0IAAgJIAFABQAJAAAAgLIAAg2IgJABIAAgJQASgCANAAQALAAAIADQAIAFADAIQACAEAAAGIAAA5IgLAAIAAg5QAAgRgXAAIgKAAIAAA2QAAAJgEAHQgFAFgJAAIgGgBgAkkY0IAAgJIAFABQAJAAAAgLIAAg2IgJABIAAgJQASgCANAAQAMAAAHADQAJAFADAIQABAEAAAGIAAA5IgKAAIAAg5QAAgRgXAAIgKAAIAAA2QAAAJgFAHQgEAFgJAAIgHgBgEgrfAY0IAAgJIAFABQAJAAAAgLIAAg2IgJABIAAgJQASgCANAAQAMAAAHADQAJAFADAIQABAEAAAGIAAA5IgKAAIAAg5QAAgRgXAAIgKAAIAAA2QAAAJgFAHQgEAFgJAAIgHgBgEgurAY0IAAgJIAFABQ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gHQgGgHAAgLQAAgIACgEQADgGAEgEQAFgDAFgCQAGgBAGAAIAKABQAEABAEADQAEAEADAFQADADACAIQABAHAAAIQAAAJgBAHQgCAHgDAFQgDAFgEADQgHAHgLAAQgLAAgKgBgEAsBABAQgFgCgEgDQgEgDgDgFQgDgFgBgHQgCgHAAgJQAAgLADgJQACgHAEgEIgIABIAAgJIAfgBQAPgBAIALQAJAJAAAVQAAAJgCAHQgCAHgCAFQgDAFgEADQgEADgFACQgFACgFAAQgFAAgFgCgEAr4AAFQgCAKAAAHIABAOQABAGACAFQACAEAFADQAEADAGAAQAGAAAEgDQAEgDADgEQAEgKAAgOQAAgSgGgHQgCgDgEgCQgEgBgFAAIgLAAQgFAFgDAIgAX2BBIgDgBIAAgJIADABQAKABALAAQAFAAAEgCIAGgFQACgDACgFQACgHAAgMQAAgOgEgIQgCgEgFgDQgEgDgFAAQgFAAgEACIgGADIgEAEQgDAEAAAHQAAAIAEAEQAEAFAIABIADABIgCAIIgCAAQgMgCgGgHQgHgHAAgLQAAgIADgEQADgGAEgEQAEgDAGgCQAFgBAGAAIAKABQAFABAEADQAEAEADAFQADADABAIQACAHAAAIQAAAJgCAHQgBAHgDAFQgDAFgEADQgIAHgLAAQgLAAgKgBgAFXBBIACgJIAIAAQAFAAAFgEQAGgEACgIQACgEAAgFIAAgbQAAgGgEgEQgDgDgGAAIgIABIAAgIIAMgBQATAAAAAUIAAA+IgIAAIgCgPIAAAAIgBAEIgDADIgDADIgEADIgEACIgGABIgJgBgAjhBBIgDgBIAAgJIADABQAKABALAAQAEAAAEgCIAGgFQADgDABgFQADgHAAgMQAAgOgFgIQgCgEgEgDQgEgDgGAAQgFAAgEACIgGADIgEAEQgCAEAAAHQAAAIADAEQAEAFAJABIACABIgBAIIgDAAQgLgCgHgHQgGgHAAgLQAAgIACgEQADgGAEgEQAFgDAFgCQAGgBAGAAIAKABQAEABAEADQAEAEADAFQADADACAIQABAHAAAIQAAAJgBAHQgCAHgDAFQgDAFgEADQgHAHgLAAQgLAAgKgBgEA3LABBIAAgJIAFABQAJgBAAgKIAAg1IgJABIAAgJQASgCANAAQAMAAAHADQAJAEADAIQABAEAA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IIgCgDIAKAAQACADABAFIABAAIAIgGIAGgCIAIgBQAMAAAGAGQAGAIAAAMIAAA4gAkGBBIAAg6QAAgPgWAAIgRAAIAABJIgKAAIAAhSIAcgBQALAAAIAEQAIAEADAIQACADAAAGIAAA6gAlzBBIAAhRIAKAAIAABRgA1sA9IgDAAIAAgJIADAAQAKACALAAQAFAAAEgCIAGgFQACgDACgFQACgIAAgKQAAgOgEgJQgCgFgFgCQgEgDgFAAQgFAAgEABIgGAEIgEAEQgDAFAAAFQAAAJAEAFQAEADAIACIADABIgCAHIgCAAQgMgBgGgHQgHgHAAgMQAAgGADgFQADgGAEgEQAEgDAGgCQAFgBAGgBIAKACQAFACAEADQAEADADAFQADAFABAGQACAHAAAJQAAAIgCAHQgBAIgDAEQgDAFgEAEQgIAGgLAAQgLAAgKgCgA6YA9IgDAAIAAgJIADAAQAKACALAAQAFAAAEgCIAGgFQACgDACgFQACgIAAgKQAAgOgEgJQgCgFgFgCQgEgDgFAAQgFAAgEABIgGAEIgEAEQgDAFAAAFQAAAJAEAFQAEADAIACIADABIgCAHIgCAAQgMgBgGgHQgHgHAAgMQAAgGADgFQADgGAEgEQAEgDAGgCQAFgBAGgBIAKACQAFACAEADQAEADADAFQADAFABAGQACAHAAAJQAAAIgCAHQgBAIgDAEQgDAFgEAEQgIAGgLAAQgLAAgKgCgEgvoAA9IgDAAIAAgJIADAAQAKACALAAQAEAAAEgCIAGgFQADgDABgFQADgIAAgKQAAgOgFgJQgCgFgEgCQgEgDgGAAQgFAAgEABIgGAEIgEAEQgCAFAAAFQAAAJADAFQAEADAJACIACABIgBAHIgDAAQgLgBgHgHQgGgHAAgMQAAgGACgFQADgGAEgEQAFgDAFgCQAGgBAGgBIAKACQAEACAEADQAEADADAFQADAFACAGQABAHAAAJQAAAIgBAHQgCAIgDAEQgDAFgEAEQgHAGgLAAQgLAAgKgCgEg0wAA9IgDAAIAAgJIADAAQAKACALAAQAEAAAEgCIAGgFQADgDABgFQADgIAAgKQAAgOgFgJQgCgFgEgCQgEgDgGAAQgFAAgEABIgGAEIgEAEQgCAFAAAFQAAAJADAFQAEADAJACIACABIgBAHIgDAAQgLgBgHgHQgGgHA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");
	this.shape_4.setTransform(460.3,468.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0D362").s().p("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");
	this.shape_5.setTransform(460,440.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("EgBtAldIAAh1IgehLIAkAAIAXBCIAAABIAGABQAJAAADgFQAFgEAAgKIAAgxIAgAAIAAAyQAAAWgNALQgEAEgHADQgIACgKAAIgJgBIAABlgEgAGAkWIAigFIgeh0IAhAAIAZBrQAIgGAFgKQAFgKABgQIAGhBIAggGIgFBCQgCAUgFANQgPAmguAIIgoAGgEACVgibIAAiIIAhAAIAACIgEgC6gibIAAiIIAgAAIAACIgEAEdgjQIAAgYIA+AAIAAhCQAAgZgbAAQgOAAgQADIgFABIAAgbQAPgCAYAAQAjAAAMAOQAGAHABAJQACAJAAAMIAABBIAQAAIAAAYgEADJgjQIAAgDQAAgJACgPQADgQAFgLIAVg7IhTAAIAAgZIB3AAIAAAUIgXA/QgMAeAAAWIAAADgEAAPgjQIAAgYIA/AAIAAhCQgBgZgbAAQgNAAgQADIgGABIAAgbQAQgCAXAAQAjAAAMAOQAGAHABAJQADAJAAAMIAABBIAPAAIAAAYgEgAtgjQIAAiKIAiAAIAACKgEgCHgjQIAAgDQAAgJADgPQADgQAEgLIAWg7IhUAAIAAgZIB4AAIAAAUIgYA/QgLAeAAAWIAAADgEgGLgjQIAAiHIAYgDIAfgCQAdAAAOAKQANAKAAAVIAABjgEgFqglCIAABaIAtAAIAAhMQAAgKgIgDQgGgCgOAAIgRABgEgD8gj/IAAhbIAhAAIAABAIgWAbg");
	this.shape_6.setTransform(459.4,388.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#513423").s().p("ADcZUIAAhRIALAAIAABRgAyvZUIAAhRIALAAIAABRgA8fYvIAZgEIgUhJIALAFIAJAjIAHAfQAUgHADgcIACgkIALAAIgDAkQAAAIgCAGIgEAKIgFAHIgIAGIgJAGIgOADIgXAEgEg0QAYvIAZgEIgUhJIALAFIAJAjIAHAfQAUgHADgcIACgkIALAAIgDAkQAAAIgCAGIgEAKIgFAHIgHAGIgKAGIgOADIgXAEgEAwQAY0IABgJIAJAAQAEABAFgEQAGgEADgIQABgEAAgFIAAgbQAAgIgEgEQgDgDgGABIgHAAIAAgIIALgBQAUAAgBAVIAAA+IgIAAIgBgOIgBAAIgBADIgDADIgDAEIgDACIgFACIgFABIgJgBgEAhjAYzQgFgBgEgDQgDgEgEgEQgDgFgBgIQgBgGAAgJQAAgMACgIQADgJAEgEIgIABIAAgJIAegBQAPAAAJAKQAIALAAAVQAAAJgBAGQgDAIgCAFQgDAEgEAEQgEADgFABQgFACgFAAQgFAAgFgCgEAhaAX5QgCAJAAAIIABANQABAGACAFQACAFAFACQAEADAGAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgSgGgIQgCgDgEgDQgEgBgFAAIgLAAQgFAFgDAKgEAgNAY0IgDgBIAAgJIADABQAKABALAAQAEAAAFgCIAFgEQADgEACgEQACgIAAgLQAAgOgEgJQgDgFgEgDQgEgDgFABQgGAAgDABIgHAEIgDAEQgDAFAAAGQAAAIAEAFQADAEAJABIADABIgCAIIgDAAQgLgBgHgIQgGgGAAgMQAAgHADgFQACgGAEgEQAFgEAGgCQAFgBAGAAIAKABQAFACAEADQADADAEAGQADAEABAIQABAHAAAIQAAAJgBAGQgBAIgDAFQgEAEgDAEQgIAHgLgBQgLAAgKgBgAaeY0IgDgBIAAgJIADABQAKABALAAQAFAAAEgCIAGgEQACgEABgEQADgIAAgLQAAgOgEgJQgCgFgFgDQgEgDgGABQgFAAgEABIgGAEIgEAEQgCAFAAAGQAAAIADAFQAEAEAJABIADABIgCAIIgDAAQgLgBgHgIQgGgGAAgMQAAgHADgFQACgGAFgEQAEgEAGgCQAFgBAGAAIAKABQAFACADADQAEADAEAGQADAEABAIQACAHAAAIQAAAJgCAGQgBAIgDAFQgEAEgEAEQgHAHgLgBQgLAAgKgBgASNY0IABgJIAJAAQAFABAEgEQAGgEADgIQACgEgBgFIAAgbQABgIgEgEQgDgDgGABIgIAAIAAgIIALgBQAUAAAAAVIAAA+IgJAAIgBgOIgBAAIgBADIgCADIgDAEIgEACIgEACIgGABIgJgBgAAIYzQgEgBgEgDQgDgEgDgEQgDgGgCgHQgBgHAAgIIAAgqIAKAAIAAAqQABANADAKQACAFAEACQAFADAFAAQAFAAAEgCQAEgBACgDQADgEABgEQACgIABgLIgBgKIgBgJIgEgHIgGgGQgDgBgFAAIgJAAIAAgJIAJgBQAFAAAFABQAEACAEAEQAEADACAFQAHALgBARQAAAJgBAGQgCAIgDAFQgCAEgEAEQgFADgEABQgFACgFAAQgGAAgFgCgAjXY0IgDgBIAAgJIADABQAKABALAAQAEAAAFgCIAFgEQADgEACgEQACgIAAgLQAAgOgEgJQgDgFgEgDQgEgDgFABQgFAAgEABIgHAEIgDAEQgDAFAAAGQAAAIAEAFQADAEAJABIADABIgCAIIgDAAQgLgBgHgIQgGgGAAgMQAAgHADgFQACgGAEgEQAFgEAGgCQAFgBAGAAIAKABQAFACAEADQADADAEAGQADAEABAIQABAHAAAIQAAAJgBAGQgBAIgDAFQgEAEgDAEQgIAHgLgBQgLAAgKgBgA2CYzQgEgBgEgDQgFgEgCgEQgDgGgCgHQgCgHAAgIIAAgqIALAAIAAAqQAAANAEAKQADAFAEACQAEADAGAAQAFAAAEgCQADgBACgDQADgEACgEQACgIAAgLIgBgKIgBgJIgDgHIgGgGQgEgBgFAAIgJAAIAAgJIAJgBQAFAAAFABQAFACAEAEQADADADAFQAGALAAARQAAAJgCAGQgBAIgDAFQgDAEgEAEQgEADgFABQgEACgGAAQgFAAgFgCgA5FY0IgDgBIAAgJIADABQAKABAKAAQAFAAAEgCIAGgEQADgEABgEQADgIAAgLQAAgOgFgJQgCgFgFgDQgEgDgFABQgFAAgEABIgGAEIgEAEQgCAFAAAGQAAAIADAFQAEAEAJABIACABIgBAIIgDAAQgLgBgHgIQgGgGAAgMQgBgHADgFQADgGAEgEQAFgEAFgCQAGgBAFAAIAKABQAFACAEADQAEADADAGQADA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");
	this.shape_7.setTransform(462.2,362.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0D362").s().p("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");
	this.shape_8.setTransform(460,594.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AC0NFIgTgBIgFgBIAAgXQAZACAZAAQAJAAAGgGQAFgEADgKIACgOIAAgNIAAgJIgBgJIgBgJIgDgIIgFgGQgGgFgJAAQgHAAgFACQgEACgDADIgEAGQgCAFAAAFQAAAFADAEQACAEACADQAGAEAGABIADABIgFAZIgGgBQgOgCgJgEQgVgKAAgeQAAgLADgJQAEgIAGgGQAFgFAJgEQANgGASAAQAJAAAHABQAIACAIAFQAIAFAFAHQAGAIAEANQADANABAPQAAAPgCALQgCAKgDAHQgDAHgEAGQgEAFgFAEQgFADgGACQgLAEgOAAIgagBgAkaNDIAAgYIALAAQAEAAADgBIADgEQACgFABgHIAAhHIgQABIAAgYQAhgEAgAAQAYAAAMAGQAHADADAEQAFAEACAGQACAGAAAGIABAPIAABaIggAAIAAhbQAAgZgbAAIgOABIAABKQAAAZgMAKQgEADgIADQgIACgIAAQgKAAgGgDgABYNEIAAhbQABgZgcAAIgSABIAABzIggAAIAAiIIAXgDIAegBQANAAAJABQAKACAGADQAFADAFAEQADAEACAGQADAGABAGIABAPIAABagAh3NEIAAiLIAhAAIAACLgAg1MVIAAhcIAgAAIAABAIgVAcgACVqEIAAiIIAhAAIAACIgAi6qEIAAiIIAgAAIAACIgAEdq5IAAgYIA+AAIAAhCQAAgZgbAAQgOAAgQADIgFABIAAgbQAPgCAYAAQAjAAAMAOQAGAHABAJQACAJAAAMIAABBIAQAAIAAAYgADJq5IAAgDQAAgJACgPQADgQAFgLIAVg7IhTAAIAAgZIB3AAIAAAUIgXA/QgMAeAAAWIAAADgAAPq5IAAgYIA/AAIAAhCQgBgZgbAAQgNAAgQADIgGABIAAgbQAQgCAXAAQAjAAAMAOQAGAHABAJQADAJAAAMIAABBIAPAAIAAAYgAgtq5IAAiKIAiAAIAACKgAiHq5IAAgDQAAgJADgPQADgQAEgLIAWg7IhUAAIAAgZIB4AAIAAAUIgYA/QgLAeAAAWIAAADgAmLq5IAAiHIAYgDIAfgCQAdAAAOAKQANAKAAAVIAABjgAlqsrIAABaIAtAAIAAhMQAAgKgIgDQgGgCgOAAIgRABgAj8roIAAhbIAhAAIAABAIgWAbg");
	this.shape_9.setTransform(459.4,232.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513423").s().p("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");
	this.shape_10.setTransform(450.2,515.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(459.4,130.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// Frames
	this.woodSection = new lib.woodSection();
	this.woodSection.parent = this;
	this.woodSection.setTransform(460,651.5);
	new cjs.ButtonHelper(this.woodSection, 0, 1, 2, false, new lib.woodSection(), 3);

	this.tiresSection = new lib.tiresSection();
	this.tiresSection.parent = this;
	this.tiresSection.setTransform(460,498.2);
	new cjs.ButtonHelper(this.tiresSection, 0, 1, 2, false, new lib.tiresSection(), 3);

	this.canSection = new lib.canSection();
	this.canSection.parent = this;
	this.canSection.setTransform(460,344.8);
	new cjs.ButtonHelper(this.canSection, 0, 1, 2, false, new lib.canSection(), 3);

	this.bottleSection = new lib.bottleSection();
	this.bottleSection.parent = this;
	this.bottleSection.setTransform(460,191.5);
	new cjs.ButtonHelper(this.bottleSection, 0, 1, 2, false, new lib.bottleSection(), 3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#513423").s().p("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");
	this.shape_12.setTransform(460,67.8);

	this.bottle4 = new lib.bottle4();
	this.bottle4.parent = this;
	this.bottle4.setTransform(295.7,267);
	new cjs.ButtonHelper(this.bottle4, 0, 1, 2, false, new lib.bottle4(), 3);

	this.bottle1 = new lib.bottle1();
	this.bottle1.parent = this;
	this.bottle1.setTransform(788.6,267);
	new cjs.ButtonHelper(this.bottle1, 0, 1, 2, false, new lib.bottle1(), 3);

	this.bottle10 = new lib.bottle10();
	this.bottle10.parent = this;
	this.bottle10.setTransform(131.4,419.7);
	new cjs.ButtonHelper(this.bottle10, 0, 1, 2, false, new lib.bottle10(), 3);

	this.bottle9 = new lib.bottle9();
	this.bottle9.parent = this;
	this.bottle9.setTransform(295.7,419.7);
	new cjs.ButtonHelper(this.bottle9, 0, 1, 2, false, new lib.bottle9(), 3);

	this.bottle8 = new lib.bottle8();
	this.bottle8.parent = this;
	this.bottle8.setTransform(460,419.7);
	new cjs.ButtonHelper(this.bottle8, 0, 1, 2, false, new lib.bottle8(), 3);

	this.bottle7 = new lib.bottle7();
	this.bottle7.parent = this;
	this.bottle7.setTransform(624.3,419.7);
	new cjs.ButtonHelper(this.bottle7, 0, 1, 2, false, new lib.bottle7(), 3);

	this.bottle6 = new lib.bottle6();
	this.bottle6.parent = this;
	this.bottle6.setTransform(788.6,419.7);
	new cjs.ButtonHelper(this.bottle6, 0, 1, 2, false, new lib.bottle6(), 3);

	this.bottle3 = new lib.bottle3();
	this.bottle3.parent = this;
	this.bottle3.setTransform(460,267);
	new cjs.ButtonHelper(this.bottle3, 0, 1, 2, false, new lib.bottle3(), 3);

	this.bottle2 = new lib.bottle2();
	this.bottle2.parent = this;
	this.bottle2.setTransform(624.3,267);
	new cjs.ButtonHelper(this.bottle2, 0, 1, 2, false, new lib.bottle2(), 3);

	this.bottle5 = new lib.bottle5();
	this.bottle5.parent = this;
	this.bottle5.setTransform(131.4,267);
	new cjs.ButtonHelper(this.bottle5, 0, 1, 2, false, new lib.bottle5(), 3);

	this.instance = new lib.grayImg();
	this.instance.parent = this;
	this.instance.setTransform(459.6,343.3);

	this.escButton1 = new lib.escButton1();
	this.escButton1.parent = this;
	this.escButton1.setTransform(72.9,162.4);
	new cjs.ButtonHelper(this.escButton1, 0, 1, 2, false, new lib.escButton1(), 3);

	this.instance_1 = new lib.Path_51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(460,321,1,1,0,0,0,442,204.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,5,15);

	this.instance_2 = new lib.Image_14_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.1,668.5,1,1,0,0,0,36.5,31);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Image_1_5_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(419.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Image_2_5_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(500.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Image_3_5_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(581.9,668.5,1,1,0,0,0,36.5,31);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Image_4_5_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(663.2,668.5,1,1,0,0,0,36.5,31);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Image_5_5_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(744.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Image_6_5_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(825.7,668.5,1,1,0,0,0,36.5,31);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.Image_7_5_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.3,668.5,1,1,0,0,0,36.5,31);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.Image_8_5_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(175.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.Image_9_5_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(256.8,668.5,1,1,0,0,0,36.5,31);
	this.instance_11.alpha = 0.301;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");
	this.shape_13.setTransform(460,651.5);

	this.instance_12 = new lib.Image_12_5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(94.3,515.1,1,1,0,0,0,36.5,31);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.Image_1_3_5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(175.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.Image_2_3_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(256.8,515.1,1,1,0,0,0,36.5,31);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.Image_3_3_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(338.1,515.1,1,1,0,0,0,36.5,31);
	this.instance_15.alpha = 0.301;

	this.instance_16 = new lib.Image_4_3_5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(419.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.Image_5_3_5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(500.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_17.alpha = 0.301;

	this.instance_18 = new lib.Image_6_3_5();
	this.instance_18.parent = this;
	this.instance_18.setTransform(581.9,515.1,1,1,0,0,0,36.5,31);
	this.instance_18.alpha = 0.301;

	this.instance_19 = new lib.Image_7_3_5();
	this.instance_19.parent = this;
	this.instance_19.setTransform(663.2,515.1,1,1,0,0,0,36.5,31);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.Image_8_3_5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(744.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_20.alpha = 0.301;

	this.instance_21 = new lib.Image_9_3_5();
	this.instance_21.parent = this;
	this.instance_21.setTransform(825.7,515.1,1,1,0,0,0,36.5,31);
	this.instance_21.alpha = 0.301;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513423").s().p("Ag3BGIAAiGIAZgEIAegBQAdAAANAKQANAJAAAWIAABigAgVgsIAABZIAsAAIAAhKQAAgKgIgDQgGgDgNABIgRAAg");
	this.shape_14.setTransform(484.5,462.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513423").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_15.setTransform(474.1,459.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513423").s().p("AgmBHIACgdIADABIAFAAIAHAAQAEAAAGgCQAIgDAFgHQAEgIAAgKIAAgnQAAgNgFgEQgDgBgDAAQgJAAgIACIgCAAIAAgaQAJgDAMAAQALAAAIADQAHACAFAEQAEADADAGIAEAMIAAAOIAABhIgZAAIgEgTIgCAAIgFAHIgGAHIgLAFQgGACgFAAIgNgBg");
	this.shape_16.setTransform(465.3,462.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#513423").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_17.setTransform(457.5,459.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#513423").s().p("AADBGIAAgYIAaAAIAAgxQAAgTgDgIIgFgHQgEgGgLAAQgFAAgEACIgHAFQgHAIgCAFIgBACIgJBbIggAAIAIhXIAAgJQAAgUgIgVIAgAAIAEAKIADALIACAAIABgCIAEgGQAEgFAEgDQAEgDAHgCQAHgCAKAAQAJAAAHADQAIAEAFAFQAEAGADAJQAFAOAAAVIAABNg");
	this.shape_18.setTransform(446.4,462.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#513423").s().p("Ag6BFIAAgYIA1AAIAYABIgdgmIgxhMIAkAAIAmA+QAIgLACgVIADgeIAgAAIgCAZQgCATgDAJIgFAKQgFALgLAJIAbAkIAAASg");
	this.shape_19.setTransform(432.1,462.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");
	this.shape_20.setTransform(460,498.2);

	this.instance_22 = new lib.Image_10_5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(256.8,361.8,1,1,0,0,0,36.5,31);
	this.instance_22.alpha = 0.301;

	this.instance_23 = new lib.Image_1_1_6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(338.1,361.8,1,1,0,0,0,36.5,31);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.Image_2_1_5();
	this.instance_24.parent = this;
	this.instance_24.setTransform(419.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.Image_3_1_5();
	this.instance_25.parent = this;
	this.instance_25.setTransform(500.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.Image_4_1_5();
	this.instance_26.parent = this;
	this.instance_26.setTransform(581.9,361.8,1,1,0,0,0,36.5,31);
	this.instance_26.alpha = 0.301;

	this.instance_27 = new lib.Image_5_1_5();
	this.instance_27.parent = this;
	this.instance_27.setTransform(663.2,361.8,1,1,0,0,0,36.5,31);
	this.instance_27.alpha = 0.301;

	this.instance_28 = new lib.Image_6_1_5();
	this.instance_28.parent = this;
	this.instance_28.setTransform(744.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_28.alpha = 0.301;

	this.instance_29 = new lib.Image_7_1_5();
	this.instance_29.parent = this;
	this.instance_29.setTransform(825.7,361.8,1,1,0,0,0,36.5,31);
	this.instance_29.alpha = 0.301;

	this.instance_30 = new lib.Image_8_1_5();
	this.instance_30.parent = this;
	this.instance_30.setTransform(94.3,361.8,1,1,0,0,0,36.5,31);
	this.instance_30.alpha = 0.301;

	this.instance_31 = new lib.Image_9_1_5();
	this.instance_31.parent = this;
	this.instance_31.setTransform(175.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_31.alpha = 0.301;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#513423").s().p("AhABEIAAgYIAMAAQADABADgCIAEgEQACgEAAgIIAAhGIgPABIAAgXQAhgFAfAAQAYAAAMAGQAHADADAFQAEADACAHQACAFABAGIABAPIAABZIghAAIAAhZQAAgagbAAIgMABIAABJQAAAZgMAKQgFADgIADQgHACgJAAQgJAAgHgDg");
	this.shape_21.setTransform(478.7,308.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#513423").s().p("AgQBFIAAiJIAhAAIAACJg");
	this.shape_22.setTransform(468.1,308.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#513423").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_23.setTransform(461.6,306.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#513423").s().p("AAXBGIAAhZQgBgagaAAIgRABIAAByIgiAAIAAiGIAZgEIAdgBQANAAAJABQAIADAGACQAHADADAFQAFADABAHQADAFAAAGIABAPIAABZg");
	this.shape_24.setTransform(451.2,308.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#513423").s().p("AgZBHIgTgCIgFgBIAAgWQAZACAYAAQAJgBAGgFQAFgEADgKIACgPIAAgMIAAgIIgBgJIgBgJIgDgIIgFgGQgGgFgJAAQgGAAgFACQgFACgCACIgEAGQgCAFAAAFQAAAFACAEQACAFADADQAGAEAFABIAEAAIgFAYIgGgBQgPgCgIgDQgVgKAAgdQAAgLADgJQAEgJAGgFQAFgGAIgDQAOgHARABQAJAAAHABQAIABAIAGQAIAFAFAHQAGAIAEANQADANAAAPQAAAOgCAKQgBALgDAGQgDAIgEAGQgEAFgFAEQgFADgGACQgLAEgOAAIgZgBg");
	this.shape_25.setTransform(437.1,308.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");
	this.shape_26.setTransform(460,344.9);

	this.instance_32 = new lib.Image_42();
	this.instance_32.parent = this;
	this.instance_32.setTransform(663.2,208.4,1,1,0,0,0,36.5,31);
	this.instance_32.alpha = 0.301;

	this.instance_33 = new lib.Image_1_10();
	this.instance_33.parent = this;
	this.instance_33.setTransform(581.9,208.4,1,1,0,0,0,36.5,31);
	this.instance_33.alpha = 0.301;

	this.instance_34 = new lib.Image_2_8();
	this.instance_34.parent = this;
	this.instance_34.setTransform(500.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_34.alpha = 0.301;

	this.instance_35 = new lib.Image_3_10();
	this.instance_35.parent = this;
	this.instance_35.setTransform(419.4,208.4,1,1,0,0,0,36.5,31);
	this.instance_35.alpha = 0.301;

	this.instance_36 = new lib.Image_4_10();
	this.instance_36.parent = this;
	this.instance_36.setTransform(338.1,208.4,1,1,0,0,0,36.5,31);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Image_5_10();
	this.instance_37.parent = this;
	this.instance_37.setTransform(256.8,208.4,1,1,0,0,0,36.5,31);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Image_6_10();
	this.instance_38.parent = this;
	this.instance_38.setTransform(175.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Image_7_10();
	this.instance_39.parent = this;
	this.instance_39.setTransform(94.3,208.4,1,1,0,0,0,36.5,31);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Image_8_10();
	this.instance_40.parent = this;
	this.instance_40.setTransform(825.7,208.4,1,1,0,0,0,36.5,31);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.Image_9_10();
	this.instance_41.parent = this;
	this.instance_41.setTransform(744.4,208.4,1,1,0,0,0,36.5,31);
	this.instance_41.alpha = 0.301;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#513423").s().p("Ag2BGIAAiGIAXgDIAfgCQAdAAAOAKQANAJgBAWIAABigAgWgsIAABZIAsAAIAAhKQABgKgIgDQgGgCgNgBIgSABg");
	this.shape_27.setTransform(492.3,155.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#513423").s().p("AgPAuIAAhbIAfAAIAAA/IgVAcg");
	this.shape_28.setTransform(481.9,153.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#513423").s().p("Ag6BfIAAiHIAgAAIAACHgAgGAqIAAgDQAAgJACgPQADgPADgLIAWg7IhTAAIAAgZIB3AAIAAAUIgYA/QgLAdAAAWIAAADg");
	this.shape_29.setTransform(472.1,158.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#513423").s().p("AgQBFIAAiJIAgAAIAACJg");
	this.shape_30.setTransform(461.1,155.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#513423").s().p("Ag2BGIAAgZIA9AAIAAhAQAAgagaAAQgPAAgQADIgEACIAAgbQAPgCAYAAQAiAAALAOQAGAHABAJQACAIAAAMIAABAIAQAAIAAAZg");
	this.shape_31.setTransform(451.7,155.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#513423").s().p("Ag6BfIAAiHIAgAAIAACHgAgGAqIAAgDQAAgJACgPQADgPADgLIAWg7IhTAAIAAgZIB3AAIAAAUIgYA/QgLAdAAAWIAAADg");
	this.shape_32.setTransform(438.4,158.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#513423").s().p("Ag3BGIAAgZIA9AAIAAhAQAAgagaAAQgOAAgPADIgGACIAAgbQAQgCAYAAQAhAAAMAOQAGAHACAJQACAIAAAMIAABAIAQAAIAAAZg");
	this.shape_33.setTransform(424.7,155.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4F4F4").s().p("EhCtAKFIAA0JMCFbAAAIAAUJg");
	this.shape_34.setTransform(460,191.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#513423").s().p("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");
	this.shape_35.setTransform(460,67.8);

	this.can10 = new lib.can10();
	this.can10.parent = this;
	this.can10.setTransform(131.4,572.7);
	new cjs.ButtonHelper(this.can10, 0, 1, 1);

	this.can9 = new lib.can9();
	this.can9.parent = this;
	this.can9.setTransform(295.7,572.7);
	new cjs.ButtonHelper(this.can9, 0, 1, 1);

	this.can8 = new lib.can8();
	this.can8.parent = this;
	this.can8.setTransform(460,572.7);
	new cjs.ButtonHelper(this.can8, 0, 1, 1);

	this.can7 = new lib.can7();
	this.can7.parent = this;
	this.can7.setTransform(624.3,572.7);
	new cjs.ButtonHelper(this.can7, 0, 1, 1);

	this.can6 = new lib.can6();
	this.can6.parent = this;
	this.can6.setTransform(788.7,572.7);
	new cjs.ButtonHelper(this.can6, 0, 1, 1);

	this.can5 = new lib.can5();
	this.can5.parent = this;
	this.can5.setTransform(131.4,420);
	new cjs.ButtonHelper(this.can5, 0, 1, 1);

	this.can4 = new lib.can4();
	this.can4.parent = this;
	this.can4.setTransform(295.7,420);
	new cjs.ButtonHelper(this.can4, 0, 1, 1);

	this.can3 = new lib.can3();
	this.can3.parent = this;
	this.can3.setTransform(460,420);
	new cjs.ButtonHelper(this.can3, 0, 1, 1);

	this.can2 = new lib.can2();
	this.can2.parent = this;
	this.can2.setTransform(624.3,420);
	new cjs.ButtonHelper(this.can2, 0, 1, 1);

	this.can1 = new lib.can1();
	this.can1.parent = this;
	this.can1.setTransform(788.7,420);
	new cjs.ButtonHelper(this.can1, 0, 1, 1);

	this.instance_42 = new lib.Path_10_2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(460,474,1,1,0,0,0,442.4,204.3);
	this.instance_42.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,5,15);

	this.instance_43 = new lib.Image_14_4();
	this.instance_43.parent = this;
	this.instance_43.setTransform(338.1,668.5,1,1,0,0,0,36.5,31);
	this.instance_43.alpha = 0.301;

	this.instance_44 = new lib.Image_1_5_3();
	this.instance_44.parent = this;
	this.instance_44.setTransform(419.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_44.alpha = 0.301;

	this.instance_45 = new lib.Image_2_5_3();
	this.instance_45.parent = this;
	this.instance_45.setTransform(500.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_45.alpha = 0.301;

	this.instance_46 = new lib.Image_3_5_3();
	this.instance_46.parent = this;
	this.instance_46.setTransform(581.9,668.5,1,1,0,0,0,36.5,31);
	this.instance_46.alpha = 0.301;

	this.instance_47 = new lib.Image_4_5_3();
	this.instance_47.parent = this;
	this.instance_47.setTransform(663.2,668.5,1,1,0,0,0,36.5,31);
	this.instance_47.alpha = 0.301;

	this.instance_48 = new lib.Image_5_5_3();
	this.instance_48.parent = this;
	this.instance_48.setTransform(744.5,668.5,1,1,0,0,0,36.5,31);
	this.instance_48.alpha = 0.301;

	this.instance_49 = new lib.Image_6_5_3();
	this.instance_49.parent = this;
	this.instance_49.setTransform(825.7,668.5,1,1,0,0,0,36.5,31);
	this.instance_49.alpha = 0.301;

	this.instance_50 = new lib.Image_7_5_3();
	this.instance_50.parent = this;
	this.instance_50.setTransform(94.3,668.5,1,1,0,0,0,36.5,31);
	this.instance_50.alpha = 0.301;

	this.instance_51 = new lib.Image_8_5_3();
	this.instance_51.parent = this;
	this.instance_51.setTransform(175.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_51.alpha = 0.301;

	this.instance_52 = new lib.Image_9_5_3();
	this.instance_52.parent = this;
	this.instance_52.setTransform(256.8,668.5,1,1,0,0,0,36.5,31);
	this.instance_52.alpha = 0.301;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#513423").s().p("AgaBgIAAh0IgehLIAkAAIAWBCIAAABIAGABQAJAAADgFQAFgEAAgKIAAgxIAgAAIAAAyQAAAWgNALQgEAEgHADQgIACgKAAIgJgBIAABkg");
	this.shape_36.setTransform(465,618.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#513423").s().p("Ag7AzIAjgFIgfhzIAiAAIAQA/IAIArQAIgGAFgKQAFgJABgQIAGhBIAhgFIgGBCQgCASgFANQgPAngtAHIgpAGg");
	this.shape_37.setTransform(452.1,615.6);

	this.instance_53 = new lib.Image_12_4();
	this.instance_53.parent = this;
	this.instance_53.setTransform(94.3,515.1,1,1,0,0,0,36.5,31);
	this.instance_53.alpha = 0.301;

	this.instance_54 = new lib.Image_1_3_4();
	this.instance_54.parent = this;
	this.instance_54.setTransform(175.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_54.alpha = 0.301;

	this.instance_55 = new lib.Image_2_3_4();
	this.instance_55.parent = this;
	this.instance_55.setTransform(256.8,515.1,1,1,0,0,0,36.5,31);
	this.instance_55.alpha = 0.301;

	this.instance_56 = new lib.Image_3_3_4();
	this.instance_56.parent = this;
	this.instance_56.setTransform(338.1,515.1,1,1,0,0,0,36.5,31);
	this.instance_56.alpha = 0.301;

	this.instance_57 = new lib.Image_4_3_4();
	this.instance_57.parent = this;
	this.instance_57.setTransform(419.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_57.alpha = 0.301;

	this.instance_58 = new lib.Image_5_3_4();
	this.instance_58.parent = this;
	this.instance_58.setTransform(500.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_58.alpha = 0.301;

	this.instance_59 = new lib.Image_6_3_4();
	this.instance_59.parent = this;
	this.instance_59.setTransform(581.9,515.1,1,1,0,0,0,36.5,31);
	this.instance_59.alpha = 0.301;

	this.instance_60 = new lib.Image_7_3_4();
	this.instance_60.parent = this;
	this.instance_60.setTransform(663.2,515.1,1,1,0,0,0,36.5,31);
	this.instance_60.alpha = 0.301;

	this.instance_61 = new lib.Image_8_3_4();
	this.instance_61.parent = this;
	this.instance_61.setTransform(744.5,515.1,1,1,0,0,0,36.5,31);
	this.instance_61.alpha = 0.301;

	this.instance_62 = new lib.Image_9_3_4();
	this.instance_62.parent = this;
	this.instance_62.setTransform(825.7,515.1,1,1,0,0,0,36.5,31);
	this.instance_62.alpha = 0.301;

	this.instance_63 = new lib.Image_10_4();
	this.instance_63.parent = this;
	this.instance_63.setTransform(256.8,361.8,1,1,0,0,0,36.5,31);
	this.instance_63.alpha = 0.301;

	this.instance_64 = new lib.Image_1_1_5();
	this.instance_64.parent = this;
	this.instance_64.setTransform(338.1,361.8,1,1,0,0,0,36.5,31);
	this.instance_64.alpha = 0.301;

	this.instance_65 = new lib.Image_2_1_4();
	this.instance_65.parent = this;
	this.instance_65.setTransform(419.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_65.alpha = 0.301;

	this.instance_66 = new lib.Image_3_1_4();
	this.instance_66.parent = this;
	this.instance_66.setTransform(500.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_66.alpha = 0.301;

	this.instance_67 = new lib.Image_4_1_4();
	this.instance_67.parent = this;
	this.instance_67.setTransform(581.9,361.8,1,1,0,0,0,36.5,31);
	this.instance_67.alpha = 0.301;

	this.instance_68 = new lib.Image_5_1_4();
	this.instance_68.parent = this;
	this.instance_68.setTransform(663.2,361.8,1,1,0,0,0,36.5,31);
	this.instance_68.alpha = 0.301;

	this.instance_69 = new lib.Image_6_1_4();
	this.instance_69.parent = this;
	this.instance_69.setTransform(744.5,361.8,1,1,0,0,0,36.5,31);
	this.instance_69.alpha = 0.301;

	this.instance_70 = new lib.Image_7_1_4();
	this.instance_70.parent = this;
	this.instance_70.setTransform(825.7,361.8,1,1,0,0,0,36.5,31);
	this.instance_70.alpha = 0.301;

	this.instance_71 = new lib.Image_8_1_4();
	this.instance_71.parent = this;
	this.instance_71.setTransform(94.3,361.8,1,1,0,0,0,36.5,31);
	this.instance_71.alpha = 0.301;

	this.instance_72 = new lib.Image_9_1_4();
	this.instance_72.parent = this;
	this.instance_72.setTransform(175.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_72.alpha = 0.301;

	this.instance_73 = new lib.Image_41();
	this.instance_73.parent = this;
	this.instance_73.setTransform(663.2,208.4,1,1,0,0,0,36.5,31);
	this.instance_73.alpha = 0.301;

	this.instance_74 = new lib.Image_1_9();
	this.instance_74.parent = this;
	this.instance_74.setTransform(581.9,208.4,1,1,0,0,0,36.5,31);
	this.instance_74.alpha = 0.301;

	this.instance_75 = new lib.Image_2();
	this.instance_75.parent = this;
	this.instance_75.setTransform(500.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_75.alpha = 0.301;

	this.instance_76 = new lib.Image_3_9();
	this.instance_76.parent = this;
	this.instance_76.setTransform(419.4,208.4,1,1,0,0,0,36.5,31);
	this.instance_76.alpha = 0.301;

	this.instance_77 = new lib.Image_4_9();
	this.instance_77.parent = this;
	this.instance_77.setTransform(338.1,208.4,1,1,0,0,0,36.5,31);
	this.instance_77.alpha = 0.301;

	this.instance_78 = new lib.Image_5_9();
	this.instance_78.parent = this;
	this.instance_78.setTransform(256.8,208.4,1,1,0,0,0,36.5,31);
	this.instance_78.alpha = 0.301;

	this.instance_79 = new lib.Image_6_9();
	this.instance_79.parent = this;
	this.instance_79.setTransform(175.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_79.alpha = 0.301;

	this.instance_80 = new lib.Image_7_9();
	this.instance_80.parent = this;
	this.instance_80.setTransform(94.3,208.4,1,1,0,0,0,36.5,31);
	this.instance_80.alpha = 0.301;

	this.instance_81 = new lib.Image_8_9();
	this.instance_81.parent = this;
	this.instance_81.setTransform(825.7,208.4,1,1,0,0,0,36.5,31);
	this.instance_81.alpha = 0.301;

	this.instance_82 = new lib.Image_9_9();
	this.instance_82.parent = this;
	this.instance_82.setTransform(744.5,208.4,1,1,0,0,0,36.5,31);
	this.instance_82.alpha = 0.301;

	this.tire10 = new lib.tire10();
	this.tire10.parent = this;
	this.tire10.setTransform(131.4,466.7);
	new cjs.ButtonHelper(this.tire10, 0, 1, 1);

	this.tire9 = new lib.tire9();
	this.tire9.parent = this;
	this.tire9.setTransform(295.7,466.7);
	new cjs.ButtonHelper(this.tire9, 0, 1, 1);

	this.tire8 = new lib.tire8();
	this.tire8.parent = this;
	this.tire8.setTransform(460,466.7);
	new cjs.ButtonHelper(this.tire8, 0, 1, 1);

	this.tire7 = new lib.tire7();
	this.tire7.parent = this;
	this.tire7.setTransform(624.3,466.7);
	new cjs.ButtonHelper(this.tire7, 0, 1, 1);

	this.tire6 = new lib.tire6();
	this.tire6.parent = this;
	this.tire6.setTransform(788.7,466.7);
	new cjs.ButtonHelper(this.tire6, 0, 1, 1);

	this.tire5 = new lib.tire5();
	this.tire5.parent = this;
	this.tire5.setTransform(131.4,314);
	new cjs.ButtonHelper(this.tire5, 0, 1, 1);

	this.tire4 = new lib.tire4();
	this.tire4.parent = this;
	this.tire4.setTransform(295.7,314);
	new cjs.ButtonHelper(this.tire4, 0, 1, 1);

	this.tire3 = new lib.tire3();
	this.tire3.parent = this;
	this.tire3.setTransform(460,314);
	new cjs.ButtonHelper(this.tire3, 0, 1, 1);

	this.tire2 = new lib.tire2();
	this.tire2.parent = this;
	this.tire2.setTransform(624.3,314);
	new cjs.ButtonHelper(this.tire2, 0, 1, 1);

	this.tire1 = new lib.tire1();
	this.tire1.parent = this;
	this.tire1.setTransform(788.7,314);
	new cjs.ButtonHelper(this.tire1, 0, 1, 1);

	this.instance_83 = new lib.Path_8_1();
	this.instance_83.parent = this;
	this.instance_83.setTransform(460,368,1,1,0,0,0,442.4,208.3);
	this.instance_83.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,1,15);

	this.instance_84 = new lib.Image_14_3();
	this.instance_84.parent = this;
	this.instance_84.setTransform(338.1,668.5,1,1,0,0,0,36.5,31);
	this.instance_84.alpha = 0.301;

	this.instance_85 = new lib.Image_1_5_2();
	this.instance_85.parent = this;
	this.instance_85.setTransform(419.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_85.alpha = 0.301;

	this.instance_86 = new lib.Image_2_5_2();
	this.instance_86.parent = this;
	this.instance_86.setTransform(500.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_86.alpha = 0.301;

	this.instance_87 = new lib.Image_3_5_2();
	this.instance_87.parent = this;
	this.instance_87.setTransform(581.9,668.5,1,1,0,0,0,36.5,31);
	this.instance_87.alpha = 0.301;

	this.instance_88 = new lib.Image_4_5_2();
	this.instance_88.parent = this;
	this.instance_88.setTransform(663.2,668.5,1,1,0,0,0,36.5,31);
	this.instance_88.alpha = 0.301;

	this.instance_89 = new lib.Image_5_5_2();
	this.instance_89.parent = this;
	this.instance_89.setTransform(744.5,668.5,1,1,0,0,0,36.5,31);
	this.instance_89.alpha = 0.301;

	this.instance_90 = new lib.Image_6_5_2();
	this.instance_90.parent = this;
	this.instance_90.setTransform(825.7,668.5,1,1,0,0,0,36.5,31);
	this.instance_90.alpha = 0.301;

	this.instance_91 = new lib.Image_7_5_2();
	this.instance_91.parent = this;
	this.instance_91.setTransform(94.3,668.5,1,1,0,0,0,36.5,31);
	this.instance_91.alpha = 0.301;

	this.instance_92 = new lib.Image_8_5_2();
	this.instance_92.parent = this;
	this.instance_92.setTransform(175.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_92.alpha = 0.301;

	this.instance_93 = new lib.Image_9_5_2();
	this.instance_93.parent = this;
	this.instance_93.setTransform(256.8,668.5,1,1,0,0,0,36.5,31);
	this.instance_93.alpha = 0.301;

	this.instance_94 = new lib.Image_12_3();
	this.instance_94.parent = this;
	this.instance_94.setTransform(94.3,515.1,1,1,0,0,0,36.5,31);
	this.instance_94.alpha = 0.301;

	this.instance_95 = new lib.Image_1_3_3();
	this.instance_95.parent = this;
	this.instance_95.setTransform(175.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_95.alpha = 0.301;

	this.instance_96 = new lib.Image_2_3_3();
	this.instance_96.parent = this;
	this.instance_96.setTransform(256.8,515.1,1,1,0,0,0,36.5,31);
	this.instance_96.alpha = 0.301;

	this.instance_97 = new lib.Image_3_3_3();
	this.instance_97.parent = this;
	this.instance_97.setTransform(338.1,515.1,1,1,0,0,0,36.5,31);
	this.instance_97.alpha = 0.301;

	this.instance_98 = new lib.Image_4_3_3();
	this.instance_98.parent = this;
	this.instance_98.setTransform(419.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_98.alpha = 0.301;

	this.instance_99 = new lib.Image_5_3_3();
	this.instance_99.parent = this;
	this.instance_99.setTransform(500.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_99.alpha = 0.301;

	this.instance_100 = new lib.Image_6_3_3();
	this.instance_100.parent = this;
	this.instance_100.setTransform(581.9,515.1,1,1,0,0,0,36.5,31);
	this.instance_100.alpha = 0.301;

	this.instance_101 = new lib.Image_7_3_3();
	this.instance_101.parent = this;
	this.instance_101.setTransform(663.2,515.1,1,1,0,0,0,36.5,31);
	this.instance_101.alpha = 0.301;

	this.instance_102 = new lib.Image_8_3_3();
	this.instance_102.parent = this;
	this.instance_102.setTransform(744.5,515.1,1,1,0,0,0,36.5,31);
	this.instance_102.alpha = 0.301;

	this.instance_103 = new lib.Image_9_3_3();
	this.instance_103.parent = this;
	this.instance_103.setTransform(825.7,515.1,1,1,0,0,0,36.5,31);
	this.instance_103.alpha = 0.301;

	this.instance_104 = new lib.Image_10_3();
	this.instance_104.parent = this;
	this.instance_104.setTransform(256.8,361.8,1,1,0,0,0,36.5,31);
	this.instance_104.alpha = 0.301;

	this.instance_105 = new lib.Image_1_1_4();
	this.instance_105.parent = this;
	this.instance_105.setTransform(338.1,361.8,1,1,0,0,0,36.5,31);
	this.instance_105.alpha = 0.301;

	this.instance_106 = new lib.Image_2_1_3();
	this.instance_106.parent = this;
	this.instance_106.setTransform(419.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_106.alpha = 0.301;

	this.instance_107 = new lib.Image_3_1_3();
	this.instance_107.parent = this;
	this.instance_107.setTransform(500.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_107.alpha = 0.301;

	this.instance_108 = new lib.Image_4_1_3();
	this.instance_108.parent = this;
	this.instance_108.setTransform(581.9,361.8,1,1,0,0,0,36.5,31);
	this.instance_108.alpha = 0.301;

	this.instance_109 = new lib.Image_5_1_3();
	this.instance_109.parent = this;
	this.instance_109.setTransform(663.2,361.8,1,1,0,0,0,36.5,31);
	this.instance_109.alpha = 0.301;

	this.instance_110 = new lib.Image_6_1_3();
	this.instance_110.parent = this;
	this.instance_110.setTransform(744.5,361.8,1,1,0,0,0,36.5,31);
	this.instance_110.alpha = 0.301;

	this.instance_111 = new lib.Image_7_1_3();
	this.instance_111.parent = this;
	this.instance_111.setTransform(825.7,361.8,1,1,0,0,0,36.5,31);
	this.instance_111.alpha = 0.301;

	this.instance_112 = new lib.Image_8_1_3();
	this.instance_112.parent = this;
	this.instance_112.setTransform(94.3,361.8,1,1,0,0,0,36.5,31);
	this.instance_112.alpha = 0.301;

	this.instance_113 = new lib.Image_9_1_3();
	this.instance_113.parent = this;
	this.instance_113.setTransform(175.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_113.alpha = 0.301;

	this.instance_114 = new lib.Image_40();
	this.instance_114.parent = this;
	this.instance_114.setTransform(663.2,208.4,1,1,0,0,0,36.5,31);
	this.instance_114.alpha = 0.301;

	this.instance_115 = new lib.Image_1_8();
	this.instance_115.parent = this;
	this.instance_115.setTransform(581.9,208.4,1,1,0,0,0,36.5,31);
	this.instance_115.alpha = 0.301;

	this.instance_116 = new lib.Image_2_7();
	this.instance_116.parent = this;
	this.instance_116.setTransform(500.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_116.alpha = 0.301;

	this.instance_117 = new lib.Image_3_8();
	this.instance_117.parent = this;
	this.instance_117.setTransform(419.4,208.4,1,1,0,0,0,36.5,31);
	this.instance_117.alpha = 0.301;

	this.instance_118 = new lib.Image_4_8();
	this.instance_118.parent = this;
	this.instance_118.setTransform(338.1,208.4,1,1,0,0,0,36.5,31);
	this.instance_118.alpha = 0.301;

	this.instance_119 = new lib.Image_5_8();
	this.instance_119.parent = this;
	this.instance_119.setTransform(256.8,208.4,1,1,0,0,0,36.5,31);
	this.instance_119.alpha = 0.301;

	this.instance_120 = new lib.Image_6_8();
	this.instance_120.parent = this;
	this.instance_120.setTransform(175.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_120.alpha = 0.301;

	this.instance_121 = new lib.Image_7_8();
	this.instance_121.parent = this;
	this.instance_121.setTransform(94.3,208.4,1,1,0,0,0,36.5,31);
	this.instance_121.alpha = 0.301;

	this.instance_122 = new lib.Image_8_8();
	this.instance_122.parent = this;
	this.instance_122.setTransform(825.7,208.4,1,1,0,0,0,36.5,31);
	this.instance_122.alpha = 0.301;

	this.instance_123 = new lib.Image_9_8();
	this.instance_123.parent = this;
	this.instance_123.setTransform(744.5,208.4,1,1,0,0,0,36.5,31);
	this.instance_123.alpha = 0.301;

	this.wood10 = new lib.wood10();
	this.wood10.parent = this;
	this.wood10.setTransform(131.4,620.7);
	new cjs.ButtonHelper(this.wood10, 0, 1, 1);

	this.wood9 = new lib.wood9();
	this.wood9.parent = this;
	this.wood9.setTransform(295.7,620.7);
	new cjs.ButtonHelper(this.wood9, 0, 1, 1);

	this.wood8 = new lib.wood8();
	this.wood8.parent = this;
	this.wood8.setTransform(460,620.7);
	new cjs.ButtonHelper(this.wood8, 0, 1, 1);

	this.wood7 = new lib.wood7();
	this.wood7.parent = this;
	this.wood7.setTransform(624.3,620.7);
	new cjs.ButtonHelper(this.wood7, 0, 1, 1);

	this.wood6 = new lib.wood6();
	this.wood6.parent = this;
	this.wood6.setTransform(788.7,620.7);
	new cjs.ButtonHelper(this.wood6, 0, 1, 1);

	this.wood5 = new lib.wood5();
	this.wood5.parent = this;
	this.wood5.setTransform(131.4,468);
	new cjs.ButtonHelper(this.wood5, 0, 1, 1);

	this.wood4 = new lib.wood4();
	this.wood4.parent = this;
	this.wood4.setTransform(295.7,468);
	new cjs.ButtonHelper(this.wood4, 0, 1, 1);

	this.wood3 = new lib.wood3();
	this.wood3.parent = this;
	this.wood3.setTransform(460,468);
	new cjs.ButtonHelper(this.wood3, 0, 1, 1);

	this.wood2 = new lib.wood2();
	this.wood2.parent = this;
	this.wood2.setTransform(624.3,468);
	new cjs.ButtonHelper(this.wood2, 0, 1, 1);

	this.wood1 = new lib.wood1();
	this.wood1.parent = this;
	this.wood1.setTransform(788.7,468);
	new cjs.ButtonHelper(this.wood1, 0, 1, 1);

	this.instance_124 = new lib.Path_6_1();
	this.instance_124.parent = this;
	this.instance_124.setTransform(460,522,1,1,0,0,0,442.4,208.3);
	this.instance_124.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,1,15);

	this.instance_125 = new lib.Image_14_2();
	this.instance_125.parent = this;
	this.instance_125.setTransform(338.1,668.5,1,1,0,0,0,36.5,31);
	this.instance_125.alpha = 0.301;

	this.instance_126 = new lib.Image_1_5_1();
	this.instance_126.parent = this;
	this.instance_126.setTransform(419.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_126.alpha = 0.301;

	this.instance_127 = new lib.Image_2_5_1();
	this.instance_127.parent = this;
	this.instance_127.setTransform(500.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_127.alpha = 0.301;

	this.instance_128 = new lib.Image_3_5_1();
	this.instance_128.parent = this;
	this.instance_128.setTransform(581.9,668.5,1,1,0,0,0,36.5,31);
	this.instance_128.alpha = 0.301;

	this.instance_129 = new lib.Image_4_5_1();
	this.instance_129.parent = this;
	this.instance_129.setTransform(663.2,668.5,1,1,0,0,0,36.5,31);
	this.instance_129.alpha = 0.301;

	this.instance_130 = new lib.Image_5_5_1();
	this.instance_130.parent = this;
	this.instance_130.setTransform(744.5,668.5,1,1,0,0,0,36.5,31);
	this.instance_130.alpha = 0.301;

	this.instance_131 = new lib.Image_6_5_1();
	this.instance_131.parent = this;
	this.instance_131.setTransform(825.7,668.5,1,1,0,0,0,36.5,31);
	this.instance_131.alpha = 0.301;

	this.instance_132 = new lib.Image_7_5_1();
	this.instance_132.parent = this;
	this.instance_132.setTransform(94.3,668.5,1,1,0,0,0,36.5,31);
	this.instance_132.alpha = 0.301;

	this.instance_133 = new lib.Image_8_5_1();
	this.instance_133.parent = this;
	this.instance_133.setTransform(175.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_133.alpha = 0.301;

	this.instance_134 = new lib.Image_9_5_1();
	this.instance_134.parent = this;
	this.instance_134.setTransform(256.8,668.5,1,1,0,0,0,36.5,31);
	this.instance_134.alpha = 0.301;

	this.instance_135 = new lib.Image_12_2();
	this.instance_135.parent = this;
	this.instance_135.setTransform(94.3,515.1,1,1,0,0,0,36.5,31);
	this.instance_135.alpha = 0.301;

	this.instance_136 = new lib.Image_1_3_2();
	this.instance_136.parent = this;
	this.instance_136.setTransform(175.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_136.alpha = 0.301;

	this.instance_137 = new lib.Image_2_3_2();
	this.instance_137.parent = this;
	this.instance_137.setTransform(256.8,515.1,1,1,0,0,0,36.5,31);
	this.instance_137.alpha = 0.301;

	this.instance_138 = new lib.Image_3_3_2();
	this.instance_138.parent = this;
	this.instance_138.setTransform(338.1,515.1,1,1,0,0,0,36.5,31);
	this.instance_138.alpha = 0.301;

	this.instance_139 = new lib.Image_4_3_2();
	this.instance_139.parent = this;
	this.instance_139.setTransform(419.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_139.alpha = 0.301;

	this.instance_140 = new lib.Image_5_3_2();
	this.instance_140.parent = this;
	this.instance_140.setTransform(500.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_140.alpha = 0.301;

	this.instance_141 = new lib.Image_6_3_2();
	this.instance_141.parent = this;
	this.instance_141.setTransform(581.9,515.1,1,1,0,0,0,36.5,31);
	this.instance_141.alpha = 0.301;

	this.instance_142 = new lib.Image_7_3_2();
	this.instance_142.parent = this;
	this.instance_142.setTransform(663.2,515.1,1,1,0,0,0,36.5,31);
	this.instance_142.alpha = 0.301;

	this.instance_143 = new lib.Image_8_3_2();
	this.instance_143.parent = this;
	this.instance_143.setTransform(744.5,515.1,1,1,0,0,0,36.5,31);
	this.instance_143.alpha = 0.301;

	this.instance_144 = new lib.Image_9_3_2();
	this.instance_144.parent = this;
	this.instance_144.setTransform(825.7,515.1,1,1,0,0,0,36.5,31);
	this.instance_144.alpha = 0.301;

	this.instance_145 = new lib.Image_10_2();
	this.instance_145.parent = this;
	this.instance_145.setTransform(256.8,361.8,1,1,0,0,0,36.5,31);
	this.instance_145.alpha = 0.301;

	this.instance_146 = new lib.Image_1_1_3();
	this.instance_146.parent = this;
	this.instance_146.setTransform(338.1,361.8,1,1,0,0,0,36.5,31);
	this.instance_146.alpha = 0.301;

	this.instance_147 = new lib.Image_2_1_2();
	this.instance_147.parent = this;
	this.instance_147.setTransform(419.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_147.alpha = 0.301;

	this.instance_148 = new lib.Image_3_1_2();
	this.instance_148.parent = this;
	this.instance_148.setTransform(500.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_148.alpha = 0.301;

	this.instance_149 = new lib.Image_4_1_2();
	this.instance_149.parent = this;
	this.instance_149.setTransform(581.9,361.8,1,1,0,0,0,36.5,31);
	this.instance_149.alpha = 0.301;

	this.instance_150 = new lib.Image_5_1_2();
	this.instance_150.parent = this;
	this.instance_150.setTransform(663.2,361.8,1,1,0,0,0,36.5,31);
	this.instance_150.alpha = 0.301;

	this.instance_151 = new lib.Image_6_1_2();
	this.instance_151.parent = this;
	this.instance_151.setTransform(744.5,361.8,1,1,0,0,0,36.5,31);
	this.instance_151.alpha = 0.301;

	this.instance_152 = new lib.Image_7_1_2();
	this.instance_152.parent = this;
	this.instance_152.setTransform(825.7,361.8,1,1,0,0,0,36.5,31);
	this.instance_152.alpha = 0.301;

	this.instance_153 = new lib.Image_8_1_2();
	this.instance_153.parent = this;
	this.instance_153.setTransform(94.3,361.8,1,1,0,0,0,36.5,31);
	this.instance_153.alpha = 0.301;

	this.instance_154 = new lib.Image_9_1_2();
	this.instance_154.parent = this;
	this.instance_154.setTransform(175.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_154.alpha = 0.301;

	this.instance_155 = new lib.Image_29();
	this.instance_155.parent = this;
	this.instance_155.setTransform(663.2,208.4,1,1,0,0,0,36.5,31);
	this.instance_155.alpha = 0.301;

	this.instance_156 = new lib.Image_1_7();
	this.instance_156.parent = this;
	this.instance_156.setTransform(581.9,208.4,1,1,0,0,0,36.5,31);
	this.instance_156.alpha = 0.301;

	this.instance_157 = new lib.Image_3_7();
	this.instance_157.parent = this;
	this.instance_157.setTransform(419.4,208.4,1,1,0,0,0,36.5,31);
	this.instance_157.alpha = 0.301;

	this.instance_158 = new lib.Image_4_7();
	this.instance_158.parent = this;
	this.instance_158.setTransform(338.1,208.4,1,1,0,0,0,36.5,31);
	this.instance_158.alpha = 0.301;

	this.instance_159 = new lib.Image_5_7();
	this.instance_159.parent = this;
	this.instance_159.setTransform(256.8,208.4,1,1,0,0,0,36.5,31);
	this.instance_159.alpha = 0.301;

	this.instance_160 = new lib.Image_6_7();
	this.instance_160.parent = this;
	this.instance_160.setTransform(175.6,208.4,1,1,0,0,0,36.5,31);
	this.instance_160.alpha = 0.301;

	this.instance_161 = new lib.Image_7_7();
	this.instance_161.parent = this;
	this.instance_161.setTransform(94.3,208.4,1,1,0,0,0,36.5,31);
	this.instance_161.alpha = 0.301;

	this.instance_162 = new lib.Image_8_7();
	this.instance_162.parent = this;
	this.instance_162.setTransform(825.7,208.4,1,1,0,0,0,36.5,31);
	this.instance_162.alpha = 0.301;

	this.instance_163 = new lib.Image_9_7();
	this.instance_163.parent = this;
	this.instance_163.setTransform(744.5,208.4,1,1,0,0,0,36.5,31);
	this.instance_163.alpha = 0.301;

	this.instance_164 = new lib.an_Video({'id': 'instance_164', 'src':'videos/DesheHead.mp4', 'autoplay':false, 'controls':true, 'muted':false, 'loop':false, 'poster':'images/VideoCover.jpg', 'preload':true, 'class':'video'});

	this.instance_164.setTransform(460.4,418.7,2.092,1.564,0,0,0,200.2,150.1);

	this.escButton2 = new lib.escButton2();
	this.escButton2.parent = this;
	this.escButton2.setTransform(65.4,111.6);
	new cjs.ButtonHelper(this.escButton2, 0, 1, 2, false, new lib.escButton2(), 3);

	this.instance_165 = new lib.Path_10();
	this.instance_165.parent = this;
	this.instance_165.setTransform(460.4,375.4,1.594,1.083,0,0,0,287.2,280.5);
	this.instance_165.shadow = new cjs.Shadow("rgba(0,0,0,0.549)",0,7,12);

	this.instance_166 = new lib.Path_10_1();
	this.instance_166.parent = this;
	this.instance_166.setTransform(460,375,1,1,0,0,0,460,375);
	this.instance_166.alpha = 0.75;

	this.instance_167 = new lib.Image_14_1();
	this.instance_167.parent = this;
	this.instance_167.setTransform(338.1,668.5,1,1,0,0,0,36.5,31);
	this.instance_167.alpha = 0.301;

	this.instance_168 = new lib.Image_1_5();
	this.instance_168.parent = this;
	this.instance_168.setTransform(419.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_168.alpha = 0.301;

	this.instance_169 = new lib.Image_2_5();
	this.instance_169.parent = this;
	this.instance_169.setTransform(500.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_169.alpha = 0.301;

	this.instance_170 = new lib.Image_3_5();
	this.instance_170.parent = this;
	this.instance_170.setTransform(581.9,668.5,1,1,0,0,0,36.5,31);
	this.instance_170.alpha = 0.301;

	this.instance_171 = new lib.Image_4_5();
	this.instance_171.parent = this;
	this.instance_171.setTransform(663.2,668.5,1,1,0,0,0,36.5,31);
	this.instance_171.alpha = 0.301;

	this.instance_172 = new lib.Image_5_5();
	this.instance_172.parent = this;
	this.instance_172.setTransform(744.4,668.5,1,1,0,0,0,36.5,31);
	this.instance_172.alpha = 0.301;

	this.instance_173 = new lib.Image_6_5();
	this.instance_173.parent = this;
	this.instance_173.setTransform(825.7,668.5,1,1,0,0,0,36.5,31);
	this.instance_173.alpha = 0.301;

	this.instance_174 = new lib.Image_7_5();
	this.instance_174.parent = this;
	this.instance_174.setTransform(94.3,668.5,1,1,0,0,0,36.5,31);
	this.instance_174.alpha = 0.301;

	this.instance_175 = new lib.Image_8_5();
	this.instance_175.parent = this;
	this.instance_175.setTransform(175.6,668.5,1,1,0,0,0,36.5,31);
	this.instance_175.alpha = 0.301;

	this.instance_176 = new lib.Image_9_5();
	this.instance_176.parent = this;
	this.instance_176.setTransform(256.8,668.5,1,1,0,0,0,36.5,31);
	this.instance_176.alpha = 0.301;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#513423").s().p("Ag7AzIAjgFIgfhzIAiAAIAQA/IAIArQAIgGAFgKQAFgJABgQIAGhBIAggFIgFBCQgCASgFANQgPAngtAHIgpAGg");
	this.shape_38.setTransform(464.7,615.6);

	this.instance_177 = new lib.Image_12_1();
	this.instance_177.parent = this;
	this.instance_177.setTransform(94.3,515.1,1,1,0,0,0,36.5,31);
	this.instance_177.alpha = 0.301;

	this.instance_178 = new lib.Image_1_3_1();
	this.instance_178.parent = this;
	this.instance_178.setTransform(175.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_178.alpha = 0.301;

	this.instance_179 = new lib.Image_2_3_1();
	this.instance_179.parent = this;
	this.instance_179.setTransform(256.8,515.1,1,1,0,0,0,36.5,31);
	this.instance_179.alpha = 0.301;

	this.instance_180 = new lib.Image_3_3_1();
	this.instance_180.parent = this;
	this.instance_180.setTransform(338.1,515.1,1,1,0,0,0,36.5,31);
	this.instance_180.alpha = 0.301;

	this.instance_181 = new lib.Image_4_3_1();
	this.instance_181.parent = this;
	this.instance_181.setTransform(419.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_181.alpha = 0.301;

	this.instance_182 = new lib.Image_5_3_1();
	this.instance_182.parent = this;
	this.instance_182.setTransform(500.6,515.1,1,1,0,0,0,36.5,31);
	this.instance_182.alpha = 0.301;

	this.instance_183 = new lib.Image_6_3_1();
	this.instance_183.parent = this;
	this.instance_183.setTransform(581.9,515.1,1,1,0,0,0,36.5,31);
	this.instance_183.alpha = 0.301;

	this.instance_184 = new lib.Image_7_3_1();
	this.instance_184.parent = this;
	this.instance_184.setTransform(663.2,515.1,1,1,0,0,0,36.5,31);
	this.instance_184.alpha = 0.301;

	this.instance_185 = new lib.Image_8_3_1();
	this.instance_185.parent = this;
	this.instance_185.setTransform(744.4,515.1,1,1,0,0,0,36.5,31);
	this.instance_185.alpha = 0.301;

	this.instance_186 = new lib.Image_9_3_1();
	this.instance_186.parent = this;
	this.instance_186.setTransform(825.7,515.1,1,1,0,0,0,36.5,31);
	this.instance_186.alpha = 0.301;

	this.instance_187 = new lib.Image_10_1();
	this.instance_187.parent = this;
	this.instance_187.setTransform(256.8,361.8,1,1,0,0,0,36.5,31);
	this.instance_187.alpha = 0.301;

	this.instance_188 = new lib.Image_1_1_2();
	this.instance_188.parent = this;
	this.instance_188.setTransform(338.1,361.8,1,1,0,0,0,36.5,31);
	this.instance_188.alpha = 0.301;

	this.instance_189 = new lib.Image_2_1_1();
	this.instance_189.parent = this;
	this.instance_189.setTransform(419.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_189.alpha = 0.301;

	this.instance_190 = new lib.Image_3_1_1();
	this.instance_190.parent = this;
	this.instance_190.setTransform(500.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_190.alpha = 0.301;

	this.instance_191 = new lib.Image_4_1_1();
	this.instance_191.parent = this;
	this.instance_191.setTransform(581.9,361.8,1,1,0,0,0,36.5,31);
	this.instance_191.alpha = 0.301;

	this.instance_192 = new lib.Image_5_1_1();
	this.instance_192.parent = this;
	this.instance_192.setTransform(663.2,361.8,1,1,0,0,0,36.5,31);
	this.instance_192.alpha = 0.301;

	this.instance_193 = new lib.Image_6_1_1();
	this.instance_193.parent = this;
	this.instance_193.setTransform(744.4,361.8,1,1,0,0,0,36.5,31);
	this.instance_193.alpha = 0.301;

	this.instance_194 = new lib.Image_7_1_1();
	this.instance_194.parent = this;
	this.instance_194.setTransform(825.7,361.8,1,1,0,0,0,36.5,31);
	this.instance_194.alpha = 0.301;

	this.instance_195 = new lib.Image_8_1_1();
	this.instance_195.parent = this;
	this.instance_195.setTransform(94.3,361.8,1,1,0,0,0,36.5,31);
	this.instance_195.alpha = 0.301;

	this.instance_196 = new lib.Image_9_1_1();
	this.instance_196.parent = this;
	this.instance_196.setTransform(175.6,361.8,1,1,0,0,0,36.5,31);
	this.instance_196.alpha = 0.301;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#513423").s().p("AhABEIAAgXIAMAAQADAAADgCIAEgEQACgFAAgGIAAhHIgPABIAAgYQAhgEAfAAQAYAAAMAHQAHADADADQAEAFACAFQACAGABAHIABAOIAABZIghAAIAAhaQAAgZgbABIgMAAIAABJQAAAZgMAKQgFADgIADQgHACgJAAQgJAAgHgDg");
	this.shape_39.setTransform(478.7,308.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#513423").s().p("AAXBGIAAhaQgBgZgaABIgRABIAABxIgiAAIAAiHIAZgDIAdgBQANAAAJABQAIACAGAEQAHADADADQAFAFABAFQADAGAAAHIABAOIAABZg");
	this.shape_40.setTransform(451.2,308.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#513423").s().p("AgZBHIgTgBIgFgBIAAgYQAZACAYAAQAJABAGgGQAFgEADgKIACgOIAAgOIAAgIIgBgJIgBgJIgDgHIgFgGQgGgFgJAAQgGAAgFACQgFACgCADIgEAGQgCAEAAAGQAAAEACAFQACAEADACQAGAFAFABIAEAAIgFAZIgGgBQgPgCgIgEQgVgKAAgdQAAgLADgJQAEgJAGgFQAFgFAIgEQAOgGARgBQAJABAHABQAIACAIAEQAIAFAFAIQAGAIAEANQADANAAAPQAAAOgCALQgBAKgDAHQgDAHgEAFQgEAGgFADQgFAEgGACQgLADgOAAIgZAAg");
	this.shape_41.setTransform(437.1,308.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#513423").s().p("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");
	this.shape_42.setTransform(460,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.bottleSection},{t:this.canSection},{t:this.tiresSection},{t:this.woodSection}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:308.8}},{t:this.shape_21},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_13,p:{y:651.5}},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.escButton1,p:{y:162.4}},{t:this.instance},{t:this.bottle5},{t:this.bottle2},{t:this.bottle3},{t:this.bottle6},{t:this.bottle7},{t:this.bottle8},{t:this.bottle9},{t:this.bottle10},{t:this.bottle1},{t:this.bottle4}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:308.8}},{t:this.shape_21},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.shape_13,p:{y:651.5}},{t:this.shape_37},{t:this.shape_36,p:{x:465}},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.escButton1,p:{y:315.4}},{t:this.can1},{t:this.can2},{t:this.can3},{t:this.can4},{t:this.can5},{t:this.can6},{t:this.can7},{t:this.can8},{t:this.can9},{t:this.can10}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:308.8}},{t:this.shape_21},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.shape_13,p:{y:651.5}},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.escButton1,p:{y:209.4}},{t:this.tire1},{t:this.tire2},{t:this.tire3},{t:this.tire4},{t:this.tire5},{t:this.tire6},{t:this.tire7},{t:this.tire8},{t:this.tire9},{t:this.tire10}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_75},{t:this.instance_156},{t:this.instance_155},{t:this.shape_26},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.shape_13,p:{y:651.5}},{t:this.shape_37},{t:this.shape_36,p:{x:465}},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.escButton1,p:{y:363.4}},{t:this.wood1},{t:this.wood2},{t:this.wood3},{t:this.wood4},{t:this.wood5},{t:this.wood6},{t:this.wood7},{t:this.wood8},{t:this.wood9},{t:this.wood10}]},1).to({state:[{t:this.shape_42},{t:this.shape_26},{t:this.shape_41},{t:this.shape_40},{t:this.shape_23},{t:this.shape_22,p:{y:308.9}},{t:this.shape_39},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.shape_13,p:{y:651.6}},{t:this.shape_36,p:{x:451.1}},{t:this.shape_38},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.escButton2},{t:this.instance_164}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(493,400.1,854,691);
// library properties:
lib.properties = {
	id: '775EA2587DB3B64B8E3307649E6B93E9',
	width: 920,
	height: 750,
	fps: 24,
	color: "#B0D362",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GanBair_DIY_atlas_.png", id:"GanBair_DIY_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['775EA2587DB3B64B8E3307649E6B93E9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
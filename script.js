var MutantDatabase = {
	"response": [
		{
			"name": {
				"firstName": "James",
				"lastName": "Howlett",
				"alias": "Wolverine"
			},
			"profile": {
				"gender": "Male",
				"eyes": "brown",
				"hair": "black",
				"height": "5'3"
			},
			"powers": ["Heightened Senses", "Regeneration", "Superhuman Strength", "Superhuman Durability", "Superhuman Speed", "Superhuman Reflexes"],
			"image": "https://trendingpopculture.com/wp-content/uploads/2024/12/Ultimate-Universe-One-Year-In-1-Ivan-Tao-600x897.webp",
			"affiliation": [
				"X-MEN", "X-Factor", "Brotherhood", "Avengers"
			]
		},
		{
			"name": {
				"firstName": "Jean",
				"lastName": "Grey-Summers",
				"alias": "Phoenix"
			},
			"profile": {
				"gender": "Female",
				"eyes": "Green",
				"hair": "Red",
				"height": "5'7"
			},
			"image": "https://m.media-amazon.com/images/I/81OF3Rir5JL._AC_UF894,1000_QL80_.jpg",
			"powers": ["Telepathy", "Telekinesis", "Energy Manipulation", "Energy Blasts", "Force Field", "Illusion-Casting", "Astral Projection", "Flight"],
			"affiliation": [
				"X-MEN", "Phoenix Force", "Brotherhood"
			]
		}, 
		{
			"name": {
				"firstName": "Anna",
				"lastName": "Marie LeBeau",
				"alias": "Rogue"
			},
			"profile": {
				"gender": "Female",
				"eyes": "Green",
				"hair": "Brown (White Streak)",
				"height": "5'8"
			},
			"image": "https://i.pinimg.com/564x/d2/64/79/d26479262f6aa69d0c63d31ed82d2724.jpg",
			"powers": ["Power Mimicry", "Nigh Invulnerability", "Flight", "Superhuman Strength", "Superhuman Reflexes"],
			"affiliation": [
				"X-MEN", "Avengers", "Phoenix Force", "Brotherhood"
			]
		},
		{
			"name": {
				"firstName": "Ororo",
				"lastName": "Munroe",
				"alias": "Storm"
			},
			"profile": {
				"gender": "Female",
				"eyes": "Blue / White",
				"hair": "White / Silver",
				"height": "5'11"
			},
			"powers": ["Atmokinetic Combat", "Psionics", "Control of Elements", "Flight", "Heighted Senses"],
			"image": "https://comicvine.gamespot.com/a/uploads/original/8/85507/2065788-515678_xtremexmen36_super.jpg",
			"affiliation": [
				"X-MEN", "Fantastic Four", "Morlocks", "Quiet Council of Krakoa"
			]
		},
		{
			"name": {
				"firstName": "Remy",
				"lastName": "Etienne LeBeau",
				"alias": "Gambit"
			},
			"profile": {
				"gender": "Male",
				"eyes": "Black / Red",
				"hair": "Brown",
				"height": "6'2"
			},
			"powers": ["Energy Manipulation", "Hand-to-Hand", "Superhuman Agility"],
			"image": "https://unknowncomicbooks.com/cdn/shop/products/GAMBIT2022003_DC41.jpg",
			"affiliation": [
				"X-MEN", "Excalibur", "Brotherhood", "Angel of Death"
			]
		}
	]
};

var Database = {
  keyName: "Mutant Database",
  data: []
};

var _0x2097bf=_0xab22;(function(_0x315f12,_0x1e5272){var _0x36277b=_0xab22,_0x482348=_0x315f12();while(!![]){try{var _0x3fbb7c=parseInt(_0x36277b(0x1f6))/0x1*(-parseInt(_0x36277b(0x1e0))/0x2)+-parseInt(_0x36277b(0x1f0))/0x3*(-parseInt(_0x36277b(0x1d2))/0x4)+-parseInt(_0x36277b(0x1f7))/0x5*(parseInt(_0x36277b(0x1d1))/0x6)+-parseInt(_0x36277b(0x1f1))/0x7+parseInt(_0x36277b(0x1d7))/0x8+parseInt(_0x36277b(0x1e9))/0x9+parseInt(_0x36277b(0x1e1))/0xa;if(_0x3fbb7c===_0x1e5272)break;else _0x482348['push'](_0x482348['shift']());}catch(_0x529e2c){_0x482348['push'](_0x482348['shift']());}}}(_0x204b,0x9100d),((()=>{var _0x811bf=_0xab22;localStorage[_0x811bf(0x1d6)](Database[_0x811bf(0x1fc)],JSON[_0x811bf(0x205)](MutantDatabase));var _0x2ffcef=MutantDatabase[_0x811bf(0x1e6)],_0x47c3c2='';_0x2ffcef[_0x811bf(0x1f9)]((_0x350022,_0x3e5c68)=>{var _0x3fad15=_0x811bf;_0x47c3c2+=_0x3fad15(0x206)+_0x3e5c68+'\x22>'+_0x350022['name'][_0x3fad15(0x1e3)]+_0x3fad15(0x1d4);}),document[_0x811bf(0x1dd)](_0x811bf(0x1e4))[_0x811bf(0x1e8)](_0x811bf(0x1eb),_0x47c3c2);})()));function loadDataSource(){var _0x52ca3e=_0xab22;Database['data']=JSON['parse'](localStorage[_0x52ca3e(0x201)](Database[_0x52ca3e(0x1fc)]))[_0x52ca3e(0x1e6)];}function _0xab22(_0x536ee7,_0x4567fb){var _0x204b42=_0x204b();return _0xab22=function(_0xab2203,_0x336bd7){_0xab2203=_0xab2203-0x1d1;var _0x4e57aa=_0x204b42[_0xab2203];return _0x4e57aa;},_0xab22(_0x536ee7,_0x4567fb);}function searchForMutantByAlias(_0x4ca582){var _0x1eef2=_0xab22,_0x265f8e=Database[_0x1eef2(0x1ed)],_0x2345ac=-0x1;console[_0x1eef2(0x1fe)](_0x265f8e),_0x265f8e[_0x1eef2(0x1f9)]((_0xe9d5f,_0x265908)=>{var _0x18a55a=_0x1eef2;_0xe9d5f[_0x18a55a(0x1fa)][_0x18a55a(0x1e3)]===_0x4ca582&&(_0x2345ac=_0x265908);}),_0x2345ac===-0x1?alert(_0x1eef2(0x1e7)):displayData(_0x265f8e[_0x2345ac]);}function displayData(_0x7dbcda){var _0x449cac=_0xab22,_0x58962f=_0x449cac(0x1d5)+_0x7dbcda[_0x449cac(0x1dc)]+_0x449cac(0x1e5)+_0x7dbcda[_0x449cac(0x1fa)][_0x449cac(0x1e3)]+_0x449cac(0x1df)+_0x7dbcda[_0x449cac(0x1fa)]['lastName']+',\x20'+_0x7dbcda['name'][_0x449cac(0x1d8)]+_0x449cac(0x1f8)+_0x7dbcda['profile'][_0x449cac(0x1fd)]+_0x449cac(0x204)+_0x7dbcda['profile'][_0x449cac(0x1ec)]+_0x449cac(0x1f3)+_0x7dbcda[_0x449cac(0x1db)][_0x449cac(0x1e2)]+'</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Height:</strong>'+_0x7dbcda[_0x449cac(0x1db)][_0x449cac(0x1ee)]+_0x449cac(0x200)+_0x7dbcda[_0x449cac(0x1da)][_0x449cac(0x1ea)]((_0x3c6984,_0x41da93)=>'<li\x20class=\x22list-inline-item\x20badge\x20bg-primary\x22>'+(_0x41da93+=0x1)+'.\x20'+_0x3c6984+_0x449cac(0x1d3))[_0x449cac(0x1d9)]('')+_0x449cac(0x1f5)+_0x7dbcda['affiliation'][_0x449cac(0x1ea)]((_0x2f739b,_0x13c066)=>_0x449cac(0x1ef)+(_0x13c066+=0x1)+'.\x20'+_0x2f739b+_0x449cac(0x1d3))[_0x449cac(0x1d9)]('')+_0x449cac(0x202);document['querySelector'](_0x449cac(0x1f2))[_0x449cac(0x1f4)]=_0x58962f;}function getSelectedValue(){var _0xefe685=_0xab22;const _0x31d421=document[_0xefe685(0x1dd)](_0xefe685(0x1ff)),_0x4e255b=_0x31d421[_0xefe685(0x207)][_0x31d421[_0xefe685(0x203)]],_0x5a5d47=_0x4e255b[_0xefe685(0x1de)];searchForMutantByAlias(_0x5a5d47);}document[_0x2097bf(0x1dd)](_0x2097bf(0x1ff))[_0x2097bf(0x1fb)](_0x2097bf(0x208),getSelectedValue),loadDataSource();function _0x204b(){var _0x2b6ce3=['546ErWUHe','4XCjsZT','</li>','</option>','<div\x20class=\x22col\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20src=\x22','setItem','1095088LyLnaE','firstName','join','powers','profile','image','querySelector','text','</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-center\x20text-muted\x22>','3134TXFKrN','5918470TQKZxq','hair','alias','option','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alt=\x22Wolverine\x22\x20class=\x22card-img-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22card-title\x20text-center\x20mb-3\x22>','response','Invalid\x20Alias','insertAdjacentHTML','8271918WpAyQL','map','afterend','eyes','data','height','\x20<li\x20class=\x22list-inline-item\x20badge\x20bg-primary\x22>','790563Wsqnnx','5436711ITNxii','#results-section','</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Hair:</strong>\x20','innerHTML','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Affiliation\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22fw-bold\x22>Affiliation:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22list-inline\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','329rDJsOk','1385NncEFv','</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22fw-bold\x22>Personal\x20Info:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22list-unstyled\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Gender:</strong>','forEach','name','addEventListener','keyName','gender','log','#select-mutant','</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22fw-bold\x22>Powers:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22list-unstyled\x20powers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','getItem','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','selectedIndex','</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Eyes:</strong>\x20','stringify','<option\x20value=\x22','options','change'];_0x204b=function(){return _0x2b6ce3;};return _0x204b();}

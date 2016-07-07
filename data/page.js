
//should really be json

function getSocialMediaLinks()
{
	return [
		{"src": "./images/youtube.png", "link": "https://www.youtube.com/channel/UCLN2t6B7Sq7GVK6IqBG6cXg"},
		{"src": "./images/twitter.png", "link": "https://twitter.com/stevensgdc"},
		{"src": "./images/github.png", "link": "https://github.com/sgdc"},
		{"src": "./images/itchio.png", "link": "https://sgdc.itch.io"},
		//{"src": "./images/email.png", "link":""},
	];
}


function getNavbarDropdownMembers()
{
	//this will add a 'More' dropdown at the end of the navbar, may be finnicky
	//make sure you add these pages to getPageContents() right after existing pages.
	return [];
	/*return [
		{link:'#', display: 'Action'},
		{link:'#', display: 'Another Action'},
		{link:'#', display: 'Something Else'}
	];
	*/
}

function getNavbarMembers()
{
	//adding pages here will get you more tabs, define their titles and basic paragraph structures in
	//getPageContents, then flesh them out in jumbotron.html
	return [
		{link: '#', display: 'Home'},
		{link: '#', display: 'Games'},
		{link: '#', display: 'Members'},
	];	
}

function getPageContents()
{
	return [
			{"title": "Stevens Game Development Club", "content": ["Welcome to the Stevens Game Development Club! We are a Student Organization at Stevens Institute of Technology. We foster a learning environment -- no experience is necessary."]},
			{"title": "Games", "content": ["Our club has plenty of talent working on some awesome games. We host two game jams each semester, and some members go above and beyond, working on side projects alone or in teams. This is a place to showcase some of their work."]},
			{"title": "Members", "content": []},
		];
}
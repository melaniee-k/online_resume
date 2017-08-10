//WORK
var work = {
	"jobs":[
		{  
			"employer": "Siidebar",
            "title": "Front-End Developer / Marketing",
            "location": "New York, NY",
            "dates": "Dec. 2016 – Apr. 2016",
            "description": "Managed Linked In Ads and Facebook Ads. Handled lead generation, brand awareness, engagement, and conversions. Designed landing page and collaborated with company backend developer. Created company product video, campaign, and content."
        },
        {

            "employer": "Binary Bros.",
            "title": "Social Media Coordinator",
            "location": "New York, NY",
            "dates": "March 2016 – Oct. 2016",
            "description": "Managed startup’s social media accounts, including curating content and creating company newsletters. Created reports on social media accounts activity and developed startup’s brand image. Wrote for startup’s website and implemented Facebook marketing strategy."
        },
        {
            "employer": "Law Office of Andrew Friedman",
            "title": "Administrative Assistant",
            "location": "New York, NY",
            "dates": "Jan. 2015 – Feb. 2016",
            "description": "Assisted in booking appointments and conferences. Filed important mail into client’s folders and updated clients on their case status. Opened new cases and handled all payments through client portal. Handled all incoming calls to business."
        },
        {
            "employer": "The American Society of Composers, Authors, and Publishers Foundation",
            "title": "Public Relations Intern",
            "location": "New York, NY",
            "dates": "Sept. 2014 – Jan. 2015",
            "description": "Special Events Coordination: Drafted articles for the foundations' website, assisted in preparation, transportation, and hotel accommodation. Donor and Public Relations Coordination: Drafted year- end reports, managed Facebook and Twitter social media accounts, designed and created donor kits. Program Coordination: Assisted in developing database for participation in 2013 programs, developed Excel spreadsheet to input program data, and extracted data from 2013 program reports."
        }

	]

};
//DISPLAY WORK
work.display = function(){

	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}

}
//PROJECTS
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"date worked": "",
			"description": "Neighborhood Map Project ",
			"image": "",
			"github": "",
			"demo": "",
			"progress": 0
		},
		{
			"title": "Arcade Game",
			"date worked": "",
			"description": "Classic Arcade Game",
			"image": "",
			"github": "",
			"demo": "",
			"progress": 10
		},
		{
			"title": "Resume",
			"date worked": "",
			"description": "Resume Project",
			"image": "",
			"github": "",
			"demo": "",
			"progress": 90
		},
		{
			"title": "Portfolio",
			"date worked": "",
			"description": "Portfolio Project",
			"image": "",
			"github": "",
			"demo": "",
			"progress": 100
		}
	]

};
//Radial Progress Source Code http://www.brightpointinc.com/download/radial-progress-source-code/
//DISPLAY PROJECTS IN D3
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			//DISPLAY DEMO AND GITHUB
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));

			// D3 PROGRESS CHART
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
//D3 PROGRESS CHART FUNCTION
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//BIO
var bio = {
	"first name": "Melanie",
	"last name": "Kim",
	"role": "Front-End Web Developer",
	"welcome message": "Dedicated student looking to obtain an internship or junior position to gain professional experience in web development and design.",
	"bio pic": "images/headshot.jpg",
	"contacts":
		{
			"mobile number": "000-000-0000",
			"email": "melanierkim@gmail.com",
			"github username": "melaniee-k",
			"twitter handle": "@melanierkim",
			"location": "New York, NY"
		},
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "React", "Git", "Social Media, Administrative, UX/Design"],

	"biopic": "images/headshot.jpg"

};

//DISPLAY BIO
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);
	$("#header").append(formattedWelcomeMsg);
	$("#images").append(formattedBioPic);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#footer").append(formattedMobile);
	$("#footer").append(formattedEmail);
	$("#footer").append(formattedGithub);
	$("#footer").append(formattedTwitter);
	$("#footer").append(formattedLocation);


}
//EDUCATION
var education = {
	"schools": [
		{
			"name": "Fiorello H. LaGuardia for the Performing Arts",
			"location": "New York, NY",
			"degree": "H.S Diploma for Theater Arts",
			"majors": ["Drama Major in Theatre Department"],
			"dates": "2008-2011",
			"url": "http://www.laguardiahs.org/"
		},
		{
			"name": "CUNY Baruch College",
			"location": "New York, NY",
			"degree": "Bacholars",
			"majors": ["B.S. in Communications"],
			"dates": "2011 - 2015",
			"url": "http://www.baruch.cuny.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.udacity.com/nanodegrees"
		},
	],
};
// DISPLAY EDUCATION
education.display = function(){
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));

		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#online").append(HTMLonlineClasses);
	// DISPLAY ONLINE COURSE
	for (var onlineCourse in education.onlineCourses){
		var num = education.schools.length + parseInt(onlineCourse);
		$("#online").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//MAP
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#Pie-Doughnut-Chart
var pieData = [
		{
			value: 100,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "HTML",
			labelColor: "red"

		},
		{
			value: 80,
			color: "#6495ED",
			highlight: "#00BFFF",
			label: "CSS",
			labelColor: "blue"
		},
		{
			value: 50,
			color: "#FFD700",
			highlight: "#FFFF00",
			label: "Javascript",
			labelColor: "yellow"
		},
		{
			value: 10,
			color: "#FA8072",
			highlight: "#fb9084",
			label: "React",
			labelColor: "pink"
		},
		{
			value: 10,
			color: "#FFA500",
			highlight:"#ffd280",
			label: "jQuery",
			labelColor: "orange"
		},
		{
			value: 50,
			color: "#90EE90",
			highlight: "#98FB98",
			label: "Git",
			labelColor: "green"
		},
		{
			value: 80,
			color: " #ff99ff",
			highlight: "#b86fdc",
			label: "Social Media",
			labelColor: "purple"
		},
		{
			value: 80,
			color: "#33cccc",
			highlight: "#70dbdb",
			label: "Administrative",
			labelColor: "turquoise"
		},
		{
			value: 70,
			color: "#ffcc66",
			highlight: "#ffe6b3",
			label: "UX/Design",
			labelColor: "peach"
		}

	];

var skillsChartLabels = function(){
	for (skill in pieData) {
		var skillLabel = pieData[skill].label;
		var skillLabelColor = pieData[skill].labelColor;
		var skillHTML = '<span class="label '+ skillLabelColor + '">' + skillLabel + '</span>';
		$("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPie = new Chart(ctx).Pie(pieData);
};

	// Call skillsChartLabels 
	skillsChartLabels();
// };
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();

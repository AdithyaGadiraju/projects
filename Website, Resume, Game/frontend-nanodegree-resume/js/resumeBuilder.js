var name = "Adithya Gadiraju";

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Game Designer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);


var bio = {
    "name" : "Adithya Gadiraju",
    "role" : "Game Designer",
    "contacts":
     {
        "mobile": "04****9218",
        "email": "someone@gmail.com",
        "github": "Adithya",
        "twitter": "@Adithya",
        "location": "Sydney, Australia"

    },

    "welcomeMessage": "Welcome to my resume!",
    "skills": ["UnityEngine", "Java", "Blender", "Flying"],
    "bioPic": "images/putin.jpg"

};


var education = {
    "schools": [
    {
        "name": "South Point High School",
        "city": "Killara",
        "degree": "VCE",
        "dates": "2009",
        "majors": "NONE"
    },
    {
        "name": "UNSW",
        "city": "Sydney",
        "degree": "Bachelor of Science",
        "dates": "2016",
        "majors": "NONE"
    }
    ]
};

var work = {

    "jobs": [
    {
      "title": "3d Modeler",
      "employer": "Ubisoft",
      "location": "Montreal",
      "dates": "March 2020 - November 2023",
      "description":
       "Made models for the video game Assasin's Creed and some other titles working with the team at Ubisoft Montreal. Also did extensive modelling for the far cry franchise as well as assisting with art designs and many other aspects of the game"
    },
    {
        "title": "Co-pilot",
        "employer": "Quantas Airline",
        "location": "Sydney",
        "dates": "January 2024 - current.",
        "description": "The Co-pilot of an Airbus A320 flying domestically to many cities around Australia. The main flight path we travel is from Melbourne to Sydney."
    }
]
};

var projects = {
    "projects": [
    {
        "title": "Plastic Bag Parachute.",
        "dates": "2003",
        "description": "Tied a plastic bag to many small items hoping to make a parachute that slowed the velocity of the objects decent. Did not work well.",
        "images": [
        "http://freedomwatch.ipa.org.au/wp-content/uploads/2015/10/plastic-bag.png","https://s-media-cache-ak0.pinimg.com/originals/53/dd/89/53dd89353bdfa7310396ae8d50243cdc.jpg"]
    }
    ]
};


bio.display = function(){
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedImg = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImg);

};

bio.display();

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
}




function displayWork() {
    for (job in work.jobs)
{
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

var formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedWorkLocation);
}
};

displayWork();



function inName(name){
    var name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

if (projects.projects[project].images.length > 0) {
    for (images in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[images]);
        $(".project-entry:last").append(formattedImage);
    }
}
}
};

projects.display();


education.display = function(){
        for (school in education.schools){
              $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $("#education").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $("#education").append(formattedSchoolDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $("#education").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors)
}
        };

education.display();


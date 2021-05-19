// this works from LINKEDIN ONLY

// cover letter examples
// https://docs.google.com/document/d/197PHCUCWxRQMTdfzMkC21h0ux6shWjjOATf7QzsgRb4/edit

let jobTitle = document.getElementsByClassName("jobs-details-top-card__job-title t-20 t-black t-normal")[0].innerText;
let companyName = document.getElementsByClassName("jobs-details-top-card__company-url t-black--light t-normal ember-view")[0].innerText;
let companyDetails = document.getElementsByClassName("jobs-box__html-content jobs-description-content__text t-14 t-normal")["job-details"].getElementsByTagName("span")[document.getElementsByClassName("jobs-box__html-content jobs-description-content__text t-14 t-normal")["job-details"].getElementsByTagName("span").length - 1 ].innerText

let companyEmployeeCount = document.getElementsByClassName("jobs-details-job-summary__text--ellipsis")[2].innerText;
let regexEmployees = / employees/gi;
let regexComma = /,/gi;
let companyCount = parseInt(companyEmployeeCount.replace(regexEmployees, "").replace(regexComma, ""))
let mySkills1 = ["JavaScript", "Javascript", "React", "Ruby"]

companySize = (companyCount) => {
	if (companyCount < 500) {
	return "small";
    } else if (companyCount < 1000) {
        return "medium";
    } else 
        return "large";
    
};
companyLocation = () => {
	if (document.getElementsByClassName("jobs-details-top-card__exact-location t-black--light link-without-visited-state")[0] != undefined) {
		return document.getElementsByClassName("jobs-details-top-card__exact-location t-black--light link-without-visited-state")[0].innerText
	} else if (document.getElementsByClassName("jobs-details-top-card__bullet")[0] != undefined) {
		return document.getElementsByClassName("jobs-details-top-card__bullet")[0].innerText
	} 
}
companyContact = () => {
	if (document.getElementsByClassName("jobs-poster__name t-14 t-black t-bold mb0")[0] != undefined) {
		return document.getElementsByClassName("jobs-poster__name t-14 t-black t-bold mb0")[0].innerText.split(" ")[0]
	} else
		return "fabulous future employeer"
}
teamFiller = (companySize) => {
	if (companySize == "small") {
		return ", and be able to have a postive impact with my colleageus"
	} else if (companySize == "medium") {
		return ", and be able to have a postive impact with my colleageus"
	} else if (companySize == "large") {
		return ", and be able to have a postive impact with my colleageus"
	}
}

skill1 = (companyDetails) => {
	if (companyDetails.replace(regexComma, "").split(" ").includes(mySkills1.forEach(skill => skill))) {
		return mySkills1[0]
	}
}
console.log(skill1(companyDetails))

console.log(`Hi ${companyContact()},
I saw the ${jobTitle} position at ${companyName} in ${companyLocation()}, and am extremely interested. I've included my resume, and when comparing my skills to the qulifications, feel that I would be a great fit for this position.

I would love to be part of a team in a ${companySize()} company${teamFiller(companySize())}.
\n
What specific project or experience best describes your ability to fit this role?
What specific skills and qualifications do you bring to the table that make you a great choice?
I noticed the request for ${skill1()} and ${skill1()}.

\n
3rd paragraph
\n
Closing paragraph
`.replace("  ", " "))


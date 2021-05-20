// this works from LINKEDIN ONLY

// cover letter examples
// https://docs.google.com/document/d/197PHCUCWxRQMTdfzMkC21h0ux6shWjjOATf7QzsgRb4/edit

let jobTitle = document.getElementsByClassName("jobs-details-top-card__job-title t-20 t-black t-normal")[0].innerText;
let companyName = document.getElementsByClassName("jobs-details-top-card__company-url t-black--light t-normal ember-view")[0].innerText.trim();
let companyDetails = document.getElementsByClassName("jobs-box__html-content jobs-description-content__text t-14 t-normal")["job-details"].getElementsByTagName("span")[document.getElementsByClassName("jobs-box__html-content jobs-description-content__text t-14 t-normal")["job-details"].getElementsByTagName("span").length - 1 ].innerText;
let regexEmployees = / employees/gi;
let regexComma = /,/gi;
let companyType = document.getElementsByClassName("jobs-details-job-summary__text--ellipsis")[3].innerText.toLowerCase();
let companyEmployeeCount = document.getElementsByClassName("jobs-details-job-summary__text--ellipsis")[2].innerText;
let mySkillsCore = ["javascript", "react", "ruby", "redux"];
let mySkillsDatabase = ["sql", "mysql", "postgresql", "postgresql", "sqlite",];
let mySkillsUI = ["bootstrap", "material", "semantic", "css", "bootstrap"];
let mySkillsVersionControl = ["git", "github", "api"];
let companyCount = parseInt(companyEmployeeCount.replace(regexEmployees, "").replace(regexComma, ""));
let companyDetailsCleanedArray = companyDetails.toLowerCase().replace(regexComma, "").split(" ");

companySize = (companyCount) => {
	if (companyCount < 501) {
	return "small";
    } else if (companyCount < 1000) {
        return "medium";
    } else 
        return "large";
    
}
// console.log(companySize(companyCount))
companyLocation = () => {
	if (document.getElementsByClassName("jobs-details-top-card__exact-location t-black--light link-without-visited-state")[0] != undefined) {
		return document.getElementsByClassName("jobs-details-top-card__exact-location t-black--light link-without-visited-state")[0].innerText.trim().split(" ")[0].replace(regexComma, "")
	} else if (document.getElementsByClassName("jobs-details-top-card__bullet")[0] != undefined) {
		return document.getElementsByClassName("jobs-details-top-card__bullet")[0].innerText.trim().split(" ")[0].replace(regexComma, "")

	} 
}
// console.log(companyLocation())
companyContact = () => {
	if (document.getElementsByClassName("jobs-poster__name t-14 t-black t-bold mb0")[0] != undefined) {
		return document.getElementsByClassName("jobs-poster__name t-14 t-black t-bold mb0")[0].innerText.split(" ")[0]
	} else
		return "hiring manager"
}
// console.log(companyContact())
teamFiller = (companySize) => {
	if (companySize == "small") {
		return ", and be able to have a postive impact with my colleagues in a small team"
	} else if (companySize == "medium") {
		return ", and be able to have a postive impact with my colleagues in a medium team"
	} else if (companySize == "large") {
		return ", and be able to have a postive impact with my colleagues in a large team"
	}
}
// console.log(teamFiller(companySize))
skillMatching = (companySkills, mySkills) => {
	let matchingSkills = mySkills.filter(skill => companySkills.includes(skill));
	// console.log(matchingSkills);
	return matchingSkills;
}
// console.log(skillMatching(companyDetails))

console.log(`Hi ${companyContact()},
I saw the ${jobTitle} position at ${companyName} in ${companyLocation()}, and am extremely interested. I've included my resume, and when comparing my skills to the qualifications, feel that I would be a great fit for this position. I've always had a strong desire and passion for the ${companyType} industry. I would love to be part of a team in a ${companySize(companyCount)} company${teamFiller(companySize(companyCount))}.
\n
I noticed the request for ${skillMatching(companyDetailsCleanedArray, mySkillsCore)[0].toString()} and . Those are some of my favorite tools and think you'll find some of my recent projects relevant (www.elijahsamuels.com). 
\n
Having organized hundreds of musicians throughout the midwestern US, I know firsthand how imperative clear communication is, and to have a positive attitude through all situations. I love debugging problems to come up a working solution, and then refactoring them into something elegant. I'm genuinely fascinated by the seemingly infinite number of technologies, and strive to learn as much as I can.
\n
Closing paragraph
Make your offer - revisit your value proposition statement and how you want to bring that to their team
“I’d love to talk with you more about x,y,z, and how it fits with a,b,c.”
Add a valuable extra if possible, potentially as a P.S. if it doesn’t directly fit with your paragraph - a blog you wrote that relates to their industry or shows off your skills that they are looking for, or a link to a demo of one of your apps, etc. 
`.replace("  ", " "))

// .replace("  ", " ").replace("  ", " ")

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const questionElement = document.getElementById("question");

const ul = document.getElementById("answers");
const button = document.getElementById("cta");
const form = document.getElementById("form");

let formSubmitted = false; // Variable to track form submission status

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted");

    // If form has already been submitted, return to prevent multiple submissions
    if (formSubmitted) {
        console.log("Form already submitted, returning");
        return;
    }

    const [name, email, question] = [
        nameElement.value,
        emailElement.value,
        questionElement.value
    ];

    const answer = getAnswer(question);
    const listItem = document.createElement("li");
    listItem.innerHTML = answer;

    ul.appendChild(listItem);


    // Disable form to prevent further submissions
    formSubmitted = true;
    form.disabled = true;

    // Show the "Thank You!" button
    document.getElementById("thankYouButton").style.display = "block";
});

function getAnswer(question) {
    switch (question.toLowerCase()) {
        case 'why is my chromebook not turning on?':
            return `Connect the charger to the Chrome OS device. Hold the power button + Refresh key and remove the power adaptor as they keep holding on to those buttons. Wait for 1 minute. Press the power button to test the device. Note: The power LED should not blink and the device should not turn on. Connect the power adaptor and monitor the LED color. The device should try to turn on and the LED should blink or have a solid color. If that doesn't work, you should probably speak to your place of purchase about this to discuss your warranty or repair options.`;
        case 'who can i talk to about dual credit?':
            return `You can talk about dual credit opportunities with Dr. Mason. Her room is located within the library.`;
        case 'where can i turn in my dsg forms?':
            return `Your DSG forms must be submitted by April 1st and must be hand-delivered to Dr. Mason in the Library.`;
        case 'what time does 3rd period end?':
            return `3rd Period ends at 9:35 am.`;
        case 'what are my capstone presentation requirements?':
            return ` In order to ensure a successful capstone presentation students must meet and follow their rubric guide req:  -The student should have they're equipment and visuals prepared and ready to be used at any given point.\n -The student  must be dressed nice and professionally, or in clothing that is appropriate for their profession.\n -The topic chosen by the student was directly related to the student’s career pathway/their career interests.\n  These are just a few requirements to ensure an amazing presentation. However if you require further guidance it is recommened that you reach out to your designated CTE teacher.`;
        case 'what dc classes are available to me here at wunsche?':
            return `As of late 2023 LoneStar has limited the course sections Wunsche students can take with it now limted to: Art 1301,Econ 1301, Psyc 2301, Gov 2305,Gov 2306, Soci 1301, Speech 1311,Speech 1315,`;
        case 'how can i boost my gpa/rank':
            return `A great way to boost your GPA/Rank is to take college level courses throughtout highschool whether that'd be duel credit or AP is up to the student.`;
        case 'how can i drop a duel credit class':
            return `In order to drop a duel credit lonestar class, you must fill out a schedule change form that must be signed off by a students High School Counselor and Lonestar Counselor`;
         case 'how can I earn dsg hours' :
            return `you can earn dsg hours by doing volunteer work within your community
            some great examples would be helping your local food bank or to help organize school 
            events. Some clubs could also offer their members a chance to earn dsg hours as well, such as Key Club.`
        case 'where can I pay my club fees?':
            return `You can make online payments throught Wunsche Rev Track, this website can also allow you to make payments for necessary senior equipment or other payments for other honor societies.`
            
        default:
            return 'Sorry, I couldn\'t find an answer to your question. Please contact support for further assistance.';
    }
}

function refreshPage() {
    location.reload(); // Reloads the current page
}

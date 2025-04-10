
interface topInputProps {
    Name:string,
    JobIntention:string,
    Phone:string,
    email:string,
    location:string,
    image:string,
}
interface skillProps {
    skillName:string,
    skillDetail:string,
}
interface projectProps {
    projectName:string,
    projectSelection:string,
    projectDescription:string,
    projectLink:string,
}
interface workExperienceProps {
    startTime:Date,
    endTime:Date,
    company:string,
    workDescription:string,
}
interface educationProps {
    startTime:Date,
    endTime:Date,
    school:string,
    major:string,
}

interface InputProps{
    topInput:topInputProps,
    skill:skillProps[],
    project:projectProps[],
    workExperience:workExperienceProps[],
    education:educationProps[],
}

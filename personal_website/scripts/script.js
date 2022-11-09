const courseList = [
    {
        program: 'ACIT',
        code: 1630,
        name: 'Database Systems',
    },
    {
        program: 'ACIT',
        code: 1620,
        name: 'Fundamental Web Technologies',
    },
    {
        program: 'ACIT',
        code: 1515,
        name: 'Scripting for IT',
    },
]

do {
    input=prompt('4-digit course code');
}
while(isNaN(input)||input.length!=4) 

for (let course of courseList) {
    if (course['code']==input) {
        console.log(`Yes I am taking the course: ${course['program']} ${course['code']} - ${course['name']}`);
        break;
    }
    else if (courseList.indexOf(course) == (courseList.length-1)) {
        courseList.push(
            {

                program: null,
                code: input,
                name: null,
            }
        );
        console.log(`${input} has been added to the course list`);
        break;
    }
}


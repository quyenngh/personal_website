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
    input=prompt('4-digit course code')
    console.log(Number(input))
    console.log(typeof Number(input))
}
while(isNaN(input)||input.length!=4) 
console.log(`Yes I am taking the course: ${input}`)
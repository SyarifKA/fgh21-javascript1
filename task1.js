const biodata = {
    name: 'syarif khalid attamimi',
    age: 25,
    hobbies: ['sepak bola', 'badminton', 'tenis meja'],
    isMarried: false,
    schoolList: [
        elementarySchool = {
            school: 'MI Salafiyah',
            yearIn: 2005,
            yearOut: 2011
        },
        juniorHighSchool = {
            school1: 'SMPN 39 Kota Bandung',
            yearIn: 2011,
            yearOut: 2013,
            school2: 'SMP Islamiyah Kota Bandar Lampung',
            yearIn: 2013,
            yearOut: 2014
        },
        seniorHighSchool = {
            school: 'SMAN 8 Bandar Lampung',
            yearIn: 2014,
            yearOut: 2017
        },
        bachelor = {
            school: 'Universitas Lampung',
            major: 'Management',
            yearIn: 2017,
            yearOut: 2022
        }
    ],
    skills: [
        skill1 = {
            nameSkill: 'javascript',
            level: 'basic'
        },
        skill2 = {
            nameSkill: 'HTML',
            level: 'advanced'
        },
        skill3 = {
            nameSkill: 'CSS',
            level: 'basic'
        }
    ],
    interestInCoding: true,
}

console.log(biodata.skills[2].level)
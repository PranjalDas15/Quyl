import help from '../../public/help.svg'
import message from '../../public/message.svg'
import settings from '../../public/settings.svg'
import notification from '../../public/notification.svg'
import eclipse from '../../public/eclipse.svg'
import search from '../../public/search.svg'
import dashboard from '../../public/dashboard.svg'
import settings2 from '../../public/settings2.svg'
import chapter from '../../public/chapter.svg'
import courses from '../../public/search.svg'
import logo from '../../public/logo.svg'
import reports from '../../public/reports.svg'

import adminImage from '../../public/admin.png'

const icons = {
    help, message, settings, notification, eclipse, search, settings2, dashboard, chapter, courses, logo

}

const info = {
    name: "Adeline H. Dancy",
    image: adminImage
}

const sidebar = [
    {
        image: dashboard,
        name: "Dashboard"
    },
    {
        image: chapter,
        name: "Students"
    },
    {
        image: courses,
        name: "Chapter"
    },
    {
        image: help,
        name: "Help"
    },
    {
        image: reports,
        name: "Reports"
    },
    {
        image: settings2,
        name: "Settings"
    },
]

const data = [
    {
        student_name: "Pranjal Das",
        cohort: "AY 2024-25",
        courses: [
            {c: 'CBSE 9 Science'},
            {c: 'CBSE 9 Math'}
        ],
        date_joined: '17 Nov.2024',
        last_login: '18 Dec. 2024',
        status: 'Online'
    },
    {
        student_name: "Dharitri Das",
        cohort: "AY 2024-25",
        courses: [
            {c: 'CBSE 9 Science'},
            {c: 'CBSE 9 Math'}
        ],
        date_joined: '17 Nov.2024',
        last_login: '18 Dec. 2024',
        status: 'Online'
    },
    {
        student_name: "Mano Das",
        cohort: "AY 2024-25",
        courses: [
            {c: 'CBSE 9 Science'},
            {c: 'CBSE 9 Math'}
        ],
        date_joined: '17 Nov.2024',
        last_login: '18 Dec. 2024',
        status: 'Offline'
    },
    
]

const assets = {
    icons,
    info,
    sidebar,
    data
}

export default assets
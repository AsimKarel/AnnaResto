export const data = {
    "id": "ab6a39e7-9af2-480b-b97c-4d4001fe00e5",
    "event_id": "1cd9b225-e19a-4138-a618-47355d423e27",
    "event_type": "form_response",
    "restaurant": {
        "id": "2b7d5ea8-0f2b-454b-b2e2-89a7a87975a2",
        "label": "Noma"
    },
    "form_response": {
        "form_id": "OXor8w",
        "token": "1b21280c-a6ca-4dd8-8eaa-11ac0e841915",
        "landed_at": "2020-12-03T05:13:14.221Z",
        "submitted_at": "2020-12-03T05:18:14.221Z",
        "definition": {
            "id": "OXor8w",
            "title": "Application Form - anna staging",
            "fields": [
                {
                    "id": "cY1AKL0dwxhI",
                    "title": "Let's break the ice, what's your *first name*?",
                    "type": "short_text",
                    "ref": "application_firstname",
                    "properties": {}
                },
                {
                    "id": "F4ojF19MV52r",
                    "title": "Hey {{field:application_firstname}}, how about your *last name*?",
                    "type": "short_text",
                    "ref": "application_lastname",
                    "properties": {}
                },
                {
                    "id": "u7Wp1UIrMprx",
                    "title": "Most important question, *why* would you like to join the team?",
                    "type": "short_text",
                    "ref": "application_motivation",
                    "properties": {}
                },
                {
                    "id": "wiK6DzdkRegG",
                    "title": "Sounds great! Can you introduce yourself in one sentence?",
                    "type": "short_text",
                    "ref": "application_self_intro",
                    "properties": {}
                },
                {
                    "id": "bEWX6jrwYbC3",
                    "title": "Well, well, well. *Where* would you like to work?",
                    "type": "multiple_choice",
                    "ref": "application_position",
                    "properties": {},
                    "choices": [
                        {
                            "id": "viLK4wlv8JSS",
                            "label": "Kitchen"
                        },
                        {
                            "id": "DrqrS4Ya4QJV",
                            "label": "Front of House"
                        },
                        {
                            "id": "gO4Y8JZon1Xv",
                            "label": "Bakery"
                        },
                        {
                            "id": "Yzsww0opEN4I",
                            "label": "U18 team member (select if between 16-18 years old)"
                        },
                        {
                            "id": "YqGuXu1T3imi",
                            "label": "Administrative"
                        },
                        {
                            "id": "Vi0FnDY5gQd9",
                            "label": "Internship - Kitchen"
                        },
                        {
                            "id": "qJQQ8gzbpjBn",
                            "label": "Internship - Front of House"
                        },
                        {
                            "id": "XG0WKt4aNDwg",
                            "label": "Crew Member"
                        }
                    ]
                },
                {
                    "id": "qGS1qAaGFKAu",
                    "title": "Which position in the *front of house* are you applying for?",
                    "type": "multiple_choice",
                    "ref": "application_position_foh",
                    "properties": {},
                    "choices": [
                        {
                            "id": "GZqTFt9LFJtw",
                            "label": "Server"
                        },
                        {
                            "id": "zTvboj6Imn3C",
                            "label": "Restaurant Manager"
                        }
                    ]
                },
                {
                    "id": "l7rd6GLUASnd",
                    "title": "Do you want to work *full- or part-time*?",
                    "type": "multiple_choice",
                    "ref": "application_workhours",
                    "properties": {},
                    "choices": [
                        {
                            "id": "HBVTHxthl9U5",
                            "label": "Full-time (37.5h weekly)"
                        },
                        {
                            "id": "rPCuu2HSyZtw",
                            "label": "Part-time (15-20h weekly)"
                        },
                        {
                            "id": "Xe4n6kZwDZmy",
                            "label": "Part-time or Full-time"
                        },
                        {
                            "id": "oxzKDbekZsJX",
                            "label": "Internship"
                        }
                    ]
                },
                {
                    "id": "mSWabOnBNxO4",
                    "title": "From what day are you *available* to start?",
                    "type": "date",
                    "ref": "application_start_date",
                    "properties": {}
                },
                {
                    "id": "Et0Arf4DNGjA",
                    "title": "Wine knowledge you got it?",
                    "type": "long_text",
                    "ref": "application_wine_knowledge",
                    "properties": {}
                },
                {
                    "id": "Mf1gKBOlM0cH",
                    "title": "Do you have a Danish *work visa* and if so how many hours can you work per week?",
                    "type": "multiple_choice",
                    "ref": "application_visa_type",
                    "properties": {},
                    "choices": [
                        {
                            "id": "dYitAQM4E2Jv",
                            "label": "EU/DK Citizen - Unlimited"
                        },
                        {
                            "id": "SyOJeOOxppPP",
                            "label": "Unrestricted Full Visa - 37.5 Hours"
                        },
                        {
                            "id": "ja76ahHwIm7K",
                            "label": "Work Holiday Visa - 37.5"
                        },
                        {
                            "id": "HIsNuTjwgJUf",
                            "label": "Restricted Visa 15 Hours"
                        },
                        {
                            "id": "xpFIgnFmkeu8",
                            "label": "No Visa"
                        }
                    ]
                },
                {
                    "id": "rLsKTwtA17su",
                    "title": "What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ",
                    "type": "long_text",
                    "ref": "application_work_experience",
                    "properties": {}
                },
                {
                    "id": "GLYs8Gp0JO2v",
                    "title": "Which *languages* do you speak well enough to chat with guests?",
                    "type": "multiple_choice",
                    "allow_multiple_selections": true,
                    "allow_other_choice": true,
                    "ref": "application_spoken_languages",
                    "properties": {},
                    "choices": [
                        {
                            "id": "eMdsM7y9NP0z",
                            "label": "English"
                        },
                        {
                            "id": "HqBAsaLdyIuF",
                            "label": "Danish"
                        },
                        {
                            "id": "JuCjOZSTVlZM",
                            "label": "Spanish"
                        },
                        {
                            "id": "U19AUb4VAugp",
                            "label": "Italian"
                        }
                    ]
                },
                {
                    "id": "BwWBgiPM9z6g",
                    "title": "Before we forget, please upload your *CV* here. ",
                    "type": "file_upload",
                    "ref": "application_cv",
                    "properties": {}
                },
                {
                    "id": "epOKy5MsQpZm",
                    "title": "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
                    "type": "file_upload",
                    "ref": "application_profile_picture",
                    "properties": {}
                },
                {
                    "id": "IBKDi1uxPQO3",
                    "title": "Looking great, what's your *phone number* so we can reach you?",
                    "type": "phone_number",
                    "ref": "application_phone_number",
                    "properties": {}
                },
                {
                    "id": "ugDOlIVxJqQy",
                    "title": "Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?",
                    "type": "email",
                    "ref": "application_email",
                    "properties": {}
                },
                {
                    "id": "Ieoc0nURdQTB",
                    "title": "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
                    "type": "multiple_choice",
                    "ref": "application_shared_pool_consent",
                    "properties": {},
                    "choices": [
                        {
                            "id": "m3OaL0R34AWY",
                            "label": "Yes, please."
                        },
                        {
                            "id": "hEk8ITHSCvnP",
                            "label": "No."
                        }
                    ]
                }
            ]
        },
        "answers": [
            {
                "type": "text",
                "text": "Elvera",
                "field": {
                    "id": "cY1AKL0dwxhI",
                    "type": "short_text",
                    "ref": "application_firstname"
                }
            },
            {
                "type": "text",
                "text": "Bosco",
                "field": {
                    "id": "F4ojF19MV52r",
                    "type": "short_text",
                    "ref": "application_lastname"
                }
            },
            {
                "type": "text",
                "text": "I am very motivated because of expedite integrated users and also I like embrace 24/365 channels",
                "field": {
                    "id": "u7Wp1UIrMprx",
                    "type": "short_text",
                    "ref": "application_motivation"
                }
            },
            {
                "type": "text",
                "text": "I have been working with 24 hour apps in a Optional company and what I what really liked was engage turn-key niches",
                "field": {
                    "id": "wiK6DzdkRegG",
                    "type": "short_text",
                    "ref": "application_self_intro"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Kitchen"
                },
                "field": {
                    "id": "bEWX6jrwYbC3",
                    "type": "multiple_choice",
                    "ref": "application_position"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Server"
                },
                "field": {
                    "id": "qGS1qAaGFKAu",
                    "type": "multiple_choice",
                    "ref": "application_position_foh"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Full-time (37.5h weekly)"
                },
                "field": {
                    "id": "l7rd6GLUASnd",
                    "type": "multiple_choice",
                    "ref": "application_workhours"
                }
            },
            {
                "type": "date",
                "date": "2021-01-02",
                "field": {
                    "id": "mSWabOnBNxO4",
                    "type": "date",
                    "ref": "application_start_date"
                }
            },
            {
                "type": "text",
                "text": "Barolos",
                "field": {
                    "id": "Et0Arf4DNGjA",
                    "type": "long_text",
                    "ref": "application_wine_knowledge"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "EU/DK Citizen - Unlimited"
                },
                "field": {
                    "id": "Mf1gKBOlM0cH",
                    "type": "multiple_choice",
                    "ref": "application_visa_type"
                }
            },
            {
                "type": "text",
                "text": "\nInvestor Metrics Coordinator as Officer at Miller and Sons for 5 years /\nCustomer Intranet Engineer as Orchestrator at Olson - O'Connell for 4 years / \nDistrict Applications Coordinator as Agent at Bailey LLC for 1 years",
                "field": {
                    "id": "rLsKTwtA17su",
                    "type": "long_text",
                    "ref": "application_work_experience"
                }
            },
            {
                "type": "choices",
                "choices": {
                    "labels": [
                        "Danish"
                    ]
                },
                "field": {
                    "id": "GLYs8Gp0JO2v",
                    "type": "multiple_choice",
                    "ref": "application_spoken_languages"
                }
            },
            {
                "type": "file_url",
                "file_url": "https://assurance_account.png",
                "field": {
                    "id": "BwWBgiPM9z6g",
                    "type": "file_upload",
                    "ref": "application_cv"
                }
            },
            {
                "type": "file_url",
                "file_url": "http://placeimg.com/640/480/people",
                "field": {
                    "id": "epOKy5MsQpZm",
                    "type": "file_upload",
                    "ref": "application_profile_picture"
                }
            },
            {
                "type": "phone_number",
                "phone_number": "+4578706143",
                "field": {
                    "id": "IBKDi1uxPQO3",
                    "type": "phone_number",
                    "ref": "application_phone_number"
                }
            },
            {
                "type": "email",
                "email": "Lue.Legros34@hotmail.com",
                "field": {
                    "id": "ugDOlIVxJqQy",
                    "type": "email",
                    "ref": "application_email"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "No."
                },
                "field": {
                    "id": "Ieoc0nURdQTB",
                    "type": "multiple_choice",
                    "ref": "application_shared_pool_consent"
                }
            }
        ]
    }
}

export const workers = [
    {
        id: 1,
        firstname: 'Oleg',
        lastname: 'Ivanov',
        position: 'Manager',
        in_office: true,
        avatar: './media/face_1.jpeg',
        tasks: [
            {
                id: 1,
                task: 'Pick up document',
                done: false
            },

            {
                id: 2,
                task: 'Do homework',
                done: true
                
            },

            {
                id: 3,
                task: 'Go to workplace',
                done: false
            },
        
        ]
    },

    {
        id: 2,
        firstname: 'Marija',
        lastname: 'Muller',
        position: 'Auditor',
        in_office: false,
        tasks: []

    },

    {
        id: 3,
        firstname: 'Jaclin',
        lastname: 'Wick',
        position: 'Electrician',
        in_office: true,
        avatar: './media/face_3.jpeg',
        tasks: []
    },

    {
        id: 4,
        firstname: 'Catrin',
        lastname: 'Wick',
        position: 'Electrician',
        in_office: false,
        tasks: [
            {
              id: 1,
              task: 'Prepare for the meeting',
              done: true
            }
        ]
      
    },
]
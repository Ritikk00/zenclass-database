```javascript
db.users.insertMany([
  {
    _id: ObjectId("507f1f77bcf86cd799439011"),
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    mentor_id: ObjectId("607f1f77bcf86cd799439001"),
    created_at: new Date("2020-09-01")
  },
  {
    _id: ObjectId("507f1f77bcf86cd799439012"),
    name: "Priya Patel",
    email: "priya@example.com",
    phone: "9876543211",
    mentor_id: ObjectId("607f1f77bcf86cd799439001"),
    created_at: new Date("2020-09-01")
  },
  {
    _id: ObjectId("507f1f77bcf86cd799439013"),
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "9876543212",
    mentor_id: ObjectId("607f1f77bcf86cd799439002"),
    created_at: new Date("2020-09-01")
  }
]);
```

//Insert Sample Mentors
```javascript
db.mentors.insertMany([
  {
    _id: ObjectId("607f1f77bcf86cd799439001"),
    name: "Dr. Vijay Kumar",
    email: "vijay@zen.com",
    expertise: ["JavaScript", "MongoDB", "React"],
    mentee_count: 20
  },
  {
    _id: ObjectId("607f1f77bcf86cd799439002"),
    name: "Sneha Reddy",
    email: "sneha@zen.com",
    expertise: ["Python", "Data Science"],
    mentee_count: 12
  },
  {
    _id: ObjectId("607f1f77bcf86cd799439003"),
    name: "Rajesh Gupta",
    email: "rajesh@zen.com",
    expertise: ["Java", "Spring Boot"],
    mentee_count: 18
  }
]);
```

//Insert Sample Topics
```javascript
db.topics.insertMany([
  {
    _id: ObjectId("707f1f77bcf86cd799439001"),
    topic_name: "Introduction to MongoDB",
    taught_date: new Date("2020-10-05"),
    mentor_id: ObjectId("607f1f77bcf86cd799439001")
  },
  {
    _id: ObjectId("707f1f77bcf86cd799439002"),
    topic_name: "Advanced JavaScript",
    taught_date: new Date("2020-10-12"),
    mentor_id: ObjectId("607f1f77bcf86cd799439001")
  },
  {
    _id: ObjectId("707f1f77bcf86cd799439003"),
    topic_name: "React Hooks",
    taught_date: new Date("2020-10-20"),
    mentor_id: ObjectId("607f1f77bcf86cd799439003")
  }
]);
```

// Insert Sample Tasks
```javascript
db.tasks.insertMany([
  {
    _id: ObjectId("807f1f77bcf86cd799439001"),
    task_name: "MongoDB CRUD Operations",
    topic_id: ObjectId("707f1f77bcf86cd799439001"),
    assigned_date: new Date("2020-10-06"),
    due_date: new Date("2020-10-13"),
    submissions: [
      {
        user_id: ObjectId("507f1f77bcf86cd799439011"),
        submitted_date: new Date("2020-10-12"),
        status: "submitted"
      },
      {
        user_id: ObjectId("507f1f77bcf86cd799439012"),
        submitted_date: null,
        status: "pending"
      }
    ]
  },
  {
    _id: ObjectId("807f1f77bcf86cd799439002"),
    task_name: "JavaScript ES6 Features",
    topic_id: ObjectId("707f1f77bcf86cd799439002"),
    assigned_date: new Date("2020-10-13"),
    due_date: new Date("2020-10-20"),
    submissions: [
      {
        user_id: ObjectId("507f1f77bcf86cd799439011"),
        submitted_date: new Date("2020-10-19"),
        status: "submitted"
      }
    ]
  },
  {
    _id: ObjectId("807f1f77bcf86cd799439003"),
    task_name: "React Custom Hooks",
    topic_id: ObjectId("707f1f77bcf86cd799439003"),
    assigned_date: new Date("2020-10-21"),
    due_date: new Date("2020-10-28"),
    submissions: [
      {
        user_id: ObjectId("507f1f77bcf86cd799439013"),
        submitted_date: null,
        status: "pending"
      }
    ]
  }
]);
```

// Insert Sample Attendance
```javascript
db.attendance.insertMany([
  {
    user_id: ObjectId("507f1f77bcf86cd799439011"),
    date: new Date("2020-10-16"),
    status: "present",
    topic_id: ObjectId("707f1f77bcf86cd799439002")
  },
  {
    user_id: ObjectId("507f1f77bcf86cd799439012"),
    date: new Date("2020-10-16"),
    status: "absent",
    topic_id: ObjectId("707f1f77bcf86cd799439002")
  },
  {
    user_id: ObjectId("507f1f77bcf86cd799439013"),
    date: new Date("2020-10-20"),
    status: "absent",
    topic_id: ObjectId("707f1f77bcf86cd799439003")
  }
]);
```

// Insert Sample Company Drives
```javascript
db.company_drives.insertMany([
  {
    _id: ObjectId("907f1f77bcf86cd799439001"),
    company_name: "TCS",
    drive_date: new Date("2020-10-18"),
    students_appeared: [
      ObjectId("507f1f77bcf86cd799439011"),
      ObjectId("507f1f77bcf86cd799439012")
    ],
    eligibility_criteria: "60% and above"
  },
  {
    _id: ObjectId("907f1f77bcf86cd799439002"),
    company_name: "Infosys",
    drive_date: new Date("2020-10-25"),
    students_appeared: [
      ObjectId("507f1f77bcf86cd799439011"),
      ObjectId("507f1f77bcf86cd799439013")
    ],
    eligibility_criteria: "65% and above"
  },
  {
    _id: ObjectId("907f1f77bcf86cd799439003"),
    company_name: "Wipro",
    drive_date: new Date("2020-10-30"),
    students_appeared: [
      ObjectId("507f1f77bcf86cd799439012")
    ],
    eligibility_criteria: "60% and above"
  }
]);
```

 //Insert Sample CodeKata
```javascript
db.codekata.insertMany([
  {
    user_id: ObjectId("507f1f77bcf86cd799439011"),
    problems_solved: 45,
    last_solved_date: new Date("2020-10-25")
  },
  {
    user_id: ObjectId("507f1f77bcf86cd799439012"),
    problems_solved: 32,
    last_solved_date: new Date("2020-10-20")
  },
  {
    user_id: ObjectId("507f1f77bcf86cd799439013"),
    problems_solved: 58,
    last_solved_date: new Date("2020-10-28")
  }
]);
```

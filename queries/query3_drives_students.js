```javascript
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "students_appeared",
      foreignField: "_id",
      as: "student_details"
    }
  },
  {
    $project: {
      company_name: 1,
      drive_date: 1,
      "student_details.name": 1,
      "student_details.email": 1
    }
  }
]);
```
//### Query 6: Users absent and task not submitted between 15-Oct-2020 and 31-Oct-2020
```javascript
db.attendance.aggregate([
  {
    $match: {
      date: {
        $gte: new Date("2020-10-15"),
        $lte: new Date("2020-10-31")
      },
      status: "absent"
    }
  },
  {
    $lookup: {
      from: "tasks",
      let: { attendance_date: "$date" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $gte: ["$assigned_date", new Date("2020-10-15")] },
                { $lte: ["$assigned_date", new Date("2020-10-31")] }
              ]
            }
          }
        },
        { $unwind: "$submissions" },
        {
          $match: {
            "submissions.status": "pending"
          }
        }
      ],
      as: "pending_tasks"
    }
  },
  {
    $match: {
      pending_tasks: { $ne: [] }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  },
  {
    $unwind: "$user_info"
  },
  {
    $group: {
      _id: "$user_id",
      user_name: { $first: "$user_info.name" },
      absent_count: { $sum: 1 },
      pending_tasks_count: { $sum: { $size: "$pending_tasks" } }
    }
  }
]);
```



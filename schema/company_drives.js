```javascript
{
  _id: ObjectId,
  company_name: String,
  drive_date: Date,
  students_appeared: [ObjectId], // Array of user_ids
  eligibility_criteria: String
}
```
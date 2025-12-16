```javascript
db.company_drives.find({
  drive_date: {
    $gte: new Date("2020-10-15"),
    $lte: new Date("2020-10-31")
  }
});
```
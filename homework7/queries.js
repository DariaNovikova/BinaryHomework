//task 1: 
db.academy.find({ scores: { $elemMatch: { $and: [{ score: { $gt: 87 } }, { score: { $lt: 93 } }] } } }).pretty();
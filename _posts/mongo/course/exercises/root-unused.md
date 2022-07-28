



db.entrycodes.aggregate([
{
$match: {
usedAt: {$exists: true}
}
},
{
$group: {
_id: "$email",
count: {$sum: 1},
entry: {
$push: {
firstName: "$firstName",
lastName: "$lastName"
}
}
}
},
{
$sort: {
count: -1
}
}
])



db.entrycodes.aggregate([
{
$match: {
usedAt: {$exists: true},
email: {$exists: true}
}
},
{
$group: {
_id: "$email",
count: {$sum: 1},
entry: {
$push: {
usedAt: "$usedAt"
}
}
}
},
{
$unwind: '$entry'
},
{
$match: {
count: {
$eq: 1
}
}
},
{
$group: {
_id: {
year: { $year: "$entry.usedAt" },
month: { $month: "$entry.usedAt" },
dayOfMonth: { $dayOfMonth: "$entry.usedAt" }
},
count: {$sum: 1}
}
},
{
$project: {
year: "$_id.year",
month: "$_id.month",
dayOfMonth: "$_id.dayOfMonth",
count: "$count",
_id: false
}
},
{
$sort: {
year: 1,
month: 1,
dayOfMonth: 1,
}
}
])

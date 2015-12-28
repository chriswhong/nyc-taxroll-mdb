var mdb = require('mdb')

var tax = mdb('tc234.mdb')

tax.tables(function(err, tables) {
  if (err) return console.log(err)
  tables.forEach(function(table, index) {
    tax.toCSV(table, function(err, csv) {
      console.log(err, table, csv.split('\n').length - 1 + " lines")
      if (index == tables.length-1) testSQL();
    })
  })
})
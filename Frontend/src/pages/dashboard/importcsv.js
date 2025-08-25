// importcsv.js
// Utility to parse and import CSV files for ClerkDashboard

import Papa from 'papaparse';

export function parseCSV(file, callback) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      callback(results.data);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}

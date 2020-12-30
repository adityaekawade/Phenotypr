#!/usr/bin/env node
const fs = require('fs');

const extractor = require('./extractor');
const processData = require('./processData');

const spawn = require("child_process").spawn;
const exec = require('child_process').exec
const DiseaseNames = require('./DiseaseNamesCleaned.json');
const natural = require('natural');
const FuzzySet = require('fuzzyset.js');
const util= require('util');

const args = process.argv.slice(2)

var fileName = args[0];

fs.readFile(fileName, 'utf-8', ((err, data) => {
  runPhenotypeExtractor(data);
}));

function runPhenotypeExtractor(notes){
  var pathToFile = `${__dirname}/lemmet.py`;
  const pythonProcess = spawn('python',[pathToFile, notes]);

  pythonProcess.stdout.on('data', (data) => {
    var decoder = new util.TextDecoder('utf-8');
    var decodedData = decoder.decode(data);
    var processedData = processData(decodedData);
    processedData.then(data => {
      var result = Array.from(new Set(data.result)).join(", ");
      console.log(result)
      return result
    })
  });
}

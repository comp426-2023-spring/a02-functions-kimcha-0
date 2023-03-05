#!/usr/bin/env node

import moment from 'moment-timezone';
import minimist from 'minimist';
import fetch from 'node-fetch';

const timezone = moment.tz.guess();

const args = minimist(process.argv.slice(2));

console.log(args);

if (args.h) {
  try {
    console.log(`
	Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
	    -h            Show this help message and exit.
	    -n, -s        Latitude: N positive; S negative.
            -e, -w        Longitude: E positive, W negative.
            -z            Time zone: uses tz.guess() from moment-timezone by default.
            -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
            -j            Echo pretty JSON from open-mateo API and exit.
        `);
    process.exit(0);
  } catch (err) {
      process.exit(1);
    }
}

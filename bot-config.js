const config = {
  // Set your bounding box here
  bbox: 'BOUNDINGBOX',// A1201 - Highbury grove/Blackstock Road

  // Road identity filter. Use the index.html to get it.
  LI_filter: 'C07-13780',

  // Section identity filter. Use the index.html to get it.
  PC_filter: 33846,

  // Speed limit in km/h or mph. Use one of the two. If both used, Km/h is used.
  limitKm: null,
  limitMi: 10,

  // Leave this as is. Based on the documentation,
  // valiues larger than 0.7 and less or equal to 1.0
  // indicate live data
  CN_predicate: (cn) => cn > 0.7 && cn <=1,

  // Enable CSV data logging and the file to log
  log: true,
  logFile: 'log.csv',

  // Enable twitting of above limit samples found
  tweet: false,

  /*
   * report.status          True (successful) or False (failed)
   * report.error           If status if false, this is the error messsage
   * report.road            The road name
   * report.li              The roald unique identifier, including direction
   * report.section         The name of the section of the road
   * report.pc              The unique identifier of the section of the road
   * report.locationText    A convienient text represenation of road and section, suggested to use
   * report.speedCount      The numbrer of speeds the fiter produced
   * report.speedsKm        An array of the speeds in Km/h
   * report.speedsMi        An array of the speeds in MPH
   * report.limitKm         The speed limit in km/h
   * report.limitMi         The speed limit in mph
   * report.speedsKmText    A text summary of the speeds in Km/h, e.g. '30km/h, 35Km/h'(suggested)
   * report.speedsMiText    A text summary of the speeds in mph, e.gg. '30mph, 35mph' (suggested)
   *
   * e.g: Date time: Reported live average speed of SU mph on the road, section.
   *      Date time: Reported live average speeds of SU1 & SU2 mph on various parts of the road, section.
   */
  statusTemplate:   '${report.date} ${report.time}: '
                    + 'Reported live average speed(s) of ${report.speedsMiText} ${report.locationText} '
                    + 'where the limit is ${report.limitMi} mph #SpeederBot'
                    + ' (just testing, please ignore).'

};

/* Hack to work both in mode and in browser */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { config };
}

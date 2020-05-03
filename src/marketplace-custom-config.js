/*
 * Marketplace specific configuration.
 */

export const yogaStyles = [
  { key: 'music', label: 'Music' },
  { key: 'design', label: 'Graphic Design' },
  { key: 'visualArts', label: 'Visual Arts' },
  { key: 'photo', label: 'Photography' },
  { key: 'video', label: 'Videography' },
  { key: 'fashion', label: 'Beauty + Fashion' },
  { key: 'dance', label: 'Theater + Dance' },
  { key: 'writing', label: 'Writing' },
];

export const certificate = [
  { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  { key: '200h', label: 'Registered yoga teacher 200h' },
  { key: '500h', label: 'Registered yoga teacher 500h' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeLengthFilterConfig = {
  active: true,

  // A global time zone to use in availability searches. As listings
  // can be in various time zones, we must decide what time zone we
  // use in search when looking for available listings within a
  // certain time interval.
  //
  // If you have all/most listings in a certain time zone, change this
  // config value to that.
  //
  // See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  searchTimeZone: 'Etc/UTC',

  // Options for the minimum duration of the booking
  options: [
    { key: '0', label: 'Any length' },
    { key: '30', label: '30 minutes', shortLabel: '30min' },
    { key: '60', label: '1 hour', shortLabel: '1h' },
    { key: '120', label: '2 hours', shortLabel: '2h' },
    { key: '180', label: '3 hours or more', shortLabel: '3h+' },
  ],
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};

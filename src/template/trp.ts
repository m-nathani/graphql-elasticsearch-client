export default {
    filters: [
      {
        term: {
          isActive: true
        }
      },
      {
        exists: {
          field: 'portals'
        }
      },
      {
        term: {
          'portals.id': 'BRI'
        }
      }
    ]
};
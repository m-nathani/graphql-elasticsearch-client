export default [
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
    terms: {
      'portals.id': ['BRI']
    }
  }
];